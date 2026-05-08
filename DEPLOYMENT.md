# Deployment Guide — Bentang Sawit (bswt.sustainit.id)

Panduan lengkap deploy aplikasi ke server Tencent Cloud dengan domain `bswt.sustainit.id`.

| Item | Value |
|---|---|
| Server | `ubuntu@43.165.197.190` (Tencent Cloud, Ubuntu) |
| App path | `/var/www/bswt` |
| Repo | `https://github.com/ugadimas25/bswt_sustanit_id_v2` |
| Domain | `bswt.sustainit.id` |
| Stack | Node.js (Express + Vite SSR static) + PostgreSQL |
| App port (internal) | `5000` |
| Public ports | `80` (HTTP → redirect HTTPS), `443` (HTTPS) |

Arsitektur runtime:

```
Client ──► Nginx :443 (SSL) ──► Node app :5000 ──► PostgreSQL :5432
                │
                └─ serves /var/www/bswt/dist/public (static client bundle)
```

---

## 1. Prerequisites di Server

SSH ke server dulu:

```bash
ssh ubuntu@43.165.197.190
```

Cek tools yang sudah/belum ada:

```bash
node --version          # butuh ≥ 20
npm --version
psql --version          # PostgreSQL client
nginx -v
pm2 --version           # process manager
git --version
```

### Install yang belum ada

**Node.js 20** (via NodeSource):
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**PostgreSQL 16**:
```bash
sudo apt-get install -y postgresql postgresql-contrib
sudo systemctl enable --now postgresql
```

**Nginx**:
```bash
sudo apt-get install -y nginx
sudo systemctl enable --now nginx
```

**PM2** (process manager, jalan sebagai user `ubuntu`):
```bash
sudo npm install -g pm2
```

**Certbot** (untuk SSL Let's Encrypt):
```bash
sudo apt-get install -y certbot python3-certbot-nginx
```

---

## 2. DNS Setup (`bswt.sustainit.id`)

Di DNS provider domain `sustainit.id`, tambahkan record:

| Type | Name | Value | TTL |
|---|---|---|---|
| A | `bswt` | `43.165.197.190` | 300 |

Verifikasi dari mesin lokal setelah propagasi (~beberapa menit):
```bash
dig +short bswt.sustainit.id
# harus return: 43.165.197.190
```

---

## 3. Tencent Security Group & UFW

### Tencent Cloud Console
Pastikan Security Group attached ke VM mengizinkan inbound:
- TCP **22** (SSH) — sudah ada
- TCP **80** (HTTP)
- TCP **443** (HTTPS)

**Jangan** expose port 5000 dan 5432 ke publik — biarkan Nginx & app saja yang akses.

### UFW (firewall di server)
```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

---

## 4. PostgreSQL — Setup Database & User

### 4.1 Migrasi dari DB lama (`wikipeat_prod` → `bswt`)

Kalau sebelumnya sudah ada DB `wikipeat_prod`, rename:

```bash
# stop dulu app yang konek ke DB
pm2 stop bswt 2>/dev/null || true

# (opsional tapi direkomendasikan) backup dulu
sudo -u postgres pg_dump wikipeat_prod | gzip > ~/wikipeat_prod_$(date +%F).sql.gz

# rename
sudo -u postgres psql <<'EOF'
-- putuskan koneksi aktif yang masih nempel
SELECT pg_terminate_backend(pid) FROM pg_stat_activity
  WHERE datname = 'wikipeat_prod' AND pid <> pg_backend_pid();
ALTER DATABASE wikipeat_prod RENAME TO bswt;
EOF
```

> Setelah rename, schema lama (kalau dari app berbeda) ikut terbawa. Saat `npm run db:push` dijalankan, drizzle akan **menambahkan** tabel `users` & `plots_ady` jika belum ada. Tabel lama tetap ada (silent) — kalau mau bersih total, drop dulu lalu create baru:
>
> ```bash
> sudo -u postgres psql -c "DROP DATABASE bswt;"
> sudo -u postgres psql -c "CREATE DATABASE bswt OWNER bswt_app;"
> ```

### 4.2 Setup user (kalau belum ada)

```bash
sudo -u postgres psql
```

Di prompt psql:
```sql
-- buat user dedicated untuk app (lebih aman dari user 'postgres')
CREATE USER bswt_app WITH PASSWORD 'GANTI_DENGAN_PASSWORD_KUAT';

-- (skip kalau sudah hasil rename dari 4.1) buat database baru
CREATE DATABASE bswt OWNER bswt_app;

-- pastikan owner & privilege benar
ALTER DATABASE bswt OWNER TO bswt_app;
GRANT ALL PRIVILEGES ON DATABASE bswt TO bswt_app;

\q
```

Test koneksi:
```bash
PGPASSWORD='GANTI_DENGAN_PASSWORD_KUAT' psql -U bswt_app -h localhost -d bswt -c '\dt'
```

> ℹ️ Sejak commit terbaru, [server/storage.ts](server/storage.ts) sudah pakai `DATABASE_URL` dari `.env` (tidak ada hardcode lagi). Server akan refuse start kalau `DATABASE_URL` belum di-set. [scripts/seed.ts](scripts/seed.ts) juga membaca `DATABASE_URL` jika ada (fallback ke `postgres/postgres@localhost/bswt` untuk dev lokal cepat).

---

## 5. First-time App Deploy

### 5.1 Pull source

```bash
cd /var/www/bswt
git status                 # pastikan branch main, working tree clean
git pull origin main
```

> **Kalau folder masih bernama `wikipeat`** (legacy), rename dulu:
> ```bash
> sudo mv /var/www/wikipeat /var/www/bswt
> sudo chown -R ubuntu:ubuntu /var/www/bswt
> ```
>
> **Kalau pertama kali clone**, ganti command di atas dengan:
> ```bash
> sudo chown ubuntu:ubuntu /var/www
> cd /var/www
> git clone https://github.com/ugadimas25/bswt_sustanit_id_v2.git bswt
> cd bswt
> ```

### 5.2 Buat file `.env`

```bash
cat > /var/www/bswt/.env <<'EOF'
DATABASE_URL=postgresql://bswt_app:GANTI_DENGAN_PASSWORD_KUAT@localhost:5432/bswt
SESSION_SECRET=GANTI_DENGAN_RANDOM_64_CHAR
PORT=5000
NODE_ENV=production
EOF

chmod 600 /var/www/bswt/.env
```

Generate `SESSION_SECRET`:
```bash
openssl rand -hex 32
```

### 5.3 Install dependencies & build

```bash
cd /var/www/bswt
npm install
npm run build
```

Output yang diharapkan:
- `dist/index.js` — bundled server
- `dist/public/` — static client (HTML/JS/CSS/assets)

### 5.4 Push schema (drizzle) ke DB

```bash
npm run db:push
```

### 5.5 (Opsional) Seed dummy data

> ⚠️ Script `scripts/seed.ts` melakukan **TRUNCATE** ke tabel `plots_ady`. **Jangan** jalankan kalau sudah ada data real.

```bash
npx tsx scripts/seed.ts
```

### 5.6 Start dengan PM2

```bash
cd /var/www/bswt
pm2 start dist/index.js --name bswt --update-env
pm2 save
pm2 status
pm2 logs bswt --lines 30
```

PM2 startup script (autostart on reboot):
```bash
pm2 startup systemd -u ubuntu --hp /home/ubuntu
# jalankan command yang di-output (sudo env PATH=...)
pm2 save
```

Test internal:
```bash
curl -I http://localhost:5000
# expect: HTTP/1.1 200 OK
```

---

## 6. Nginx Reverse Proxy

Buat config:

```bash
sudo tee /etc/nginx/sites-available/bswt.sustainit.id > /dev/null <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name bswt.sustainit.id;

    # Akan di-handle certbot setelah SSL aktif
    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        client_max_body_size 25m;
        proxy_read_timeout 300s;
    }
}
EOF

sudo ln -sf /etc/nginx/sites-available/bswt.sustainit.id /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Test via HTTP (tanpa SSL dulu):
```bash
curl -I http://bswt.sustainit.id
# expect: HTTP/1.1 200 OK
```

---

## 7. SSL dengan Let's Encrypt

```bash
sudo certbot --nginx -d bswt.sustainit.id \
  --non-interactive --agree-tos -m admin@sustainit.id \
  --redirect
```

Flag penting:
- `--redirect` — auto-config redirect HTTP→HTTPS

Verifikasi:
```bash
curl -I https://bswt.sustainit.id
# expect: HTTP/2 200
sudo systemctl status certbot.timer   # auto-renew
```

Test renewal (dry run):
```bash
sudo certbot renew --dry-run
```

---

## 8. Update Workflow (Deploy Berikutnya)

Setelah ada commit baru di `main`, jalankan dari local:

```bash
# di mesin lokal
git push origin main
```

Lalu di server:

```bash
cd /var/www/bswt
git pull origin main
npm install                # kalau ada perubahan package.json/lock
npm run build
npm run db:push            # kalau ada perubahan schema
pm2 restart bswt --update-env
pm2 logs bswt --lines 30
```

### One-liner deploy

Bisa simpan script di server:

```bash
cat > ~/deploy-bswt.sh <<'EOF'
#!/usr/bin/env bash
set -euo pipefail
cd /var/www/bswt
git pull origin main
npm install
npm run build
pm2 restart bswt --update-env
pm2 logs bswt --lines 20 --nostream
EOF
chmod +x ~/deploy-bswt.sh
```

Pakai: `~/deploy-bswt.sh`

---

## 9. Operasional Sehari-hari

### Logs
```bash
pm2 logs bswt --lines 100        # app logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
sudo journalctl -u postgresql -n 50
```

### Restart komponen
```bash
pm2 restart bswt                  # app
sudo systemctl reload nginx       # reload config nginx
sudo systemctl restart postgresql # postgres
```

### Resource monitoring
```bash
pm2 monit
htop
df -h
```

### Backup database
```bash
# manual backup
PGPASSWORD='...' pg_dump -U bswt_app -h localhost bswt \
  | gzip > ~/backups/bswt_$(date +%F_%H%M).sql.gz

# automated cron (tiap hari jam 2 pagi)
crontab -e
# tambahkan:
# 0 2 * * * PGPASSWORD='...' pg_dump -U bswt_app -h localhost bswt | gzip > /home/ubuntu/backups/bswt_$(date +\%F).sql.gz && find /home/ubuntu/backups/ -name "bswt_*.sql.gz" -mtime +14 -delete
```

---

## 10. Troubleshooting

| Gejala | Cek |
|---|---|
| `502 Bad Gateway` di browser | App down → `pm2 logs bswt`. Cek juga `curl http://localhost:5000` di server. |
| `pm2` error `Cannot find module` | Belum `npm run build` → `dist/index.js` nggak ada. |
| `Error: connect ECONNREFUSED 127.0.0.1:5432` | Postgres mati → `sudo systemctl status postgresql`. |
| `password authentication failed` | Cek `.env DATABASE_URL` cocok dengan user/pass di Postgres. Inget caveat di section 4: storage.ts hardcoded! |
| Login UI tidak respon | Login client-side: cek `client/src/pages/Login.tsx` (DEMO_EMAIL: `demo.bswt@equatrace.com` / `demo123`). |
| SSL error / cert expired | `sudo certbot renew` lalu `sudo systemctl reload nginx`. |
| `git pull` minta password tiap kali | Pakai SSH key atau credential helper: `git config --global credential.helper store` (lalu pull sekali pakai PAT, akan tersimpan). |
| Port 5000 sudah dipakai | `sudo lsof -i :5000` → kill process atau ganti `PORT` di `.env`. |
| Build OOM | `node --max-old-space-size=2048 ./node_modules/.bin/vite build` di script. |
| Drizzle push gagal | Cek `drizzle.config.ts` — pakai `DATABASE_URL`? Mungkin perlu set env var inline: `DATABASE_URL='...' npm run db:push`. |

### Health check endpoint
Belum ada built-in. Untuk monitoring uptime, pakai:
```bash
curl -fs https://bswt.sustainit.id/api/plots > /dev/null && echo OK || echo DOWN
```

---

## 11. Demo Login Credential

Saat ini login masih client-side (di [client/src/pages/Login.tsx](client/src/pages/Login.tsx)):

- Email: `demo.bswt@equatrace.com`
- Password: `demo123`

Untuk production, **ganti dengan auth backend** yang validasi ke tabel `users` di Postgres.

---

## 12. Checklist Sebelum Go-Live

- [ ] DNS `bswt.sustainit.id` → `43.165.197.190` propagated
- [ ] Tencent Security Group: 80 & 443 open
- [ ] UFW: 80, 443, 22 only
- [ ] PostgreSQL user & DB dibuat dengan password kuat
- [ ] `server/storage.ts` di-fix untuk pakai `DATABASE_URL` (Opsi B section 4)
- [ ] `.env` di server berisi `DATABASE_URL`, `SESSION_SECRET` (random), `NODE_ENV=production`
- [ ] `chmod 600 .env`
- [ ] `npm run build` sukses, `dist/` ter-generate
- [ ] `npm run db:push` sukses
- [ ] PM2 jalan & autostart on reboot (`pm2 save` + `pm2 startup`)
- [ ] Nginx reverse proxy aktif
- [ ] SSL Let's Encrypt aktif & auto-renew (`certbot renew --dry-run` ok)
- [ ] Demo login bekerja di `https://bswt.sustainit.id`
- [ ] Backup cron terpasang
- [ ] Login client-side diganti ke backend auth (security follow-up)
