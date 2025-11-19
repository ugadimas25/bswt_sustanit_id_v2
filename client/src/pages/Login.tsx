import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Mail, Lock } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { WelcomePanel } from "@/components/WelcomePanel";
import { BentangSawitLogo } from "@/components/BentangSawitLogo";

export default function Login() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password, rememberMe });
    // Redirect to dashboard after login
    setLocation("/");
  };

  const handleGoogleLogin = () => {
    console.log("Google login initiated");
    // Redirect to dashboard after Google login
    setLocation("/");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Header */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center mb-6">
              <BentangSawitLogo />
            </div>
            <h2 className="text-2xl font-semibold">Selamat Datang Kembali</h2>
            <p className="text-muted-foreground">Masuk ke platform keberlanjutan kelapa sawit</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Alamat Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="nama@contoh.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9"
                    data-testid="input-email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Kata Sandi</Label>
                  <button
                    type="button"
                    className="text-sm text-primary hover:underline"
                    data-testid="link-forgot-password"
                  >
                    Lupa kata sandi?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Masukkan kata sandi Anda"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9"
                    data-testid="input-password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  data-testid="checkbox-remember"
                />
                <Label
                  htmlFor="remember"
                  className="text-sm font-normal cursor-pointer"
                >
                  Ingat saya selama 30 hari
                </Label>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              data-testid="button-login"
            >
              Masuk
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Atau lanjutkan dengan
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              size="lg"
              onClick={handleGoogleLogin}
              data-testid="button-google-login"
            >
              <SiGoogle className="h-4 w-4 mr-2" />
              Masuk dengan Google
            </Button>
          </form>

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Belum punya akun?{" "}
              <button
                type="button"
                className="text-primary hover:underline font-medium"
                data-testid="link-signup"
              >
                Hubungi administrator Anda
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Welcome Panel */}
      <div className="hidden lg:flex flex-1">
        <WelcomePanel />
      </div>
    </div>
  );
}
