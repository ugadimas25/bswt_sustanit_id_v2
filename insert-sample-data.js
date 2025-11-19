import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({ 
  connectionString: 'postgresql://postgres:postgres@localhost:5432/bentang_sawit' 
});

const sampleData = [
  {
    country: 'Indonesia',
    province: 'Kalimantan Tengah',
    district: 'Kotawaringin Timur',
    subdistrict: 'Mentawa Baru Ketapang',
    village: 'Bagendang Permai',
    farmer: 'Ahmad Yani',
    plot: 'PLOT-001',
    latlong: '-2.5234,112.7456',
    polygon: '-2.5234,112.7456;-2.5244,112.7456;-2.5244,112.7466;-2.5234,112.7466;-2.5234,112.7456',
    polygonarea: 2.50,
    commodity: 'Kelapa Sawit',
    firstplanting: '2020-03-15'
  },
  {
    country: 'Indonesia',
    province: 'Kalimantan Tengah',
    district: 'Kotawaringin Timur',
    subdistrict: 'Mentawa Baru Ketapang',
    village: 'Bagendang Permai',
    farmer: 'Siti Aisyah',
    plot: 'PLOT-002',
    latlong: '-2.5254,112.7476',
    polygon: '-2.5254,112.7476;-2.5264,112.7476;-2.5264,112.7486;-2.5254,112.7486;-2.5254,112.7476',
    polygonarea: 3.20,
    commodity: 'Kelapa Sawit',
    firstplanting: '2019-08-20'
  },
  {
    country: 'Indonesia',
    province: 'Kalimantan Tengah',
    district: 'Seruyan',
    subdistrict: 'Seruyan Tengah',
    village: 'Pembuang Hulu',
    farmer: 'Budi Santoso',
    plot: 'PLOT-003',
    latlong: '-2.4123,112.5234',
    polygon: '-2.4123,112.5234;-2.4133,112.5234;-2.4133,112.5244;-2.4123,112.5244;-2.4123,112.5234',
    polygonarea: 1.80,
    commodity: 'Kelapa Sawit',
    firstplanting: '2021-01-10'
  },
  {
    country: 'Indonesia',
    province: 'Kalimantan Barat',
    district: 'Ketapang',
    subdistrict: 'Kendawangan',
    village: 'Riam Durian',
    farmer: 'Dewi Kusuma',
    plot: 'PLOT-004',
    latlong: '-1.9876,110.1234',
    polygon: '-1.9876,110.1234;-1.9886,110.1234;-1.9886,110.1244;-1.9876,110.1244;-1.9876,110.1234',
    polygonarea: 4.50,
    commodity: 'Kelapa Sawit',
    firstplanting: '2018-11-25'
  },
  {
    country: 'Indonesia',
    province: 'Riau',
    district: 'Pelalawan',
    subdistrict: 'Pangkalan Kuras',
    village: 'Batang Kulim',
    farmer: 'Hendra Wijaya',
    plot: 'PLOT-005',
    latlong: '0.3456,101.6789',
    polygon: '0.3456,101.6789;0.3466,101.6789;0.3466,101.6799;0.3456,101.6799;0.3456,101.6789',
    polygonarea: 3.60,
    commodity: 'Kelapa Sawit',
    firstplanting: '2019-02-14'
  }
];

async function insertData() {
  try {
    for (const data of sampleData) {
      await pool.query(
        `INSERT INTO plots_ady 
         (country, province, district, subdistrict, village, farmer, plot, latlong, polygon, polygonarea, commodity, firstplanting)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
        [
          data.country, data.province, data.district, data.subdistrict,
          data.village, data.farmer, data.plot, data.latlong,
          data.polygon, data.polygonarea, data.commodity, data.firstplanting
        ]
      );
    }
    
    const result = await pool.query('SELECT COUNT(*) FROM plots_ady');
    console.log('✅ Sample data inserted successfully!');
    console.log('Total rows:', result.rows[0].count);
    
    await pool.end();
  } catch (err) {
    console.error('Error:', err.message);
    await pool.end();
  }
}

insertData();
