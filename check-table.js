import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({ 
  connectionString: 'postgresql://postgres:postgres@localhost:5432/bentang_sawit' 
});

async function checkTable() {
  try {
    // Cek schema table
    const schemaResult = await pool.query(
      `SELECT table_schema, table_name 
       FROM information_schema.tables 
       WHERE table_name = 'plots_ady'`
    );
    console.log('Table location:', schemaResult.rows);
    
    // Cek jumlah data
    if (schemaResult.rows.length > 0) {
      const countResult = await pool.query('SELECT COUNT(*) FROM plots_ady');
      console.log('Row count:', countResult.rows[0].count);
    }
    
    await pool.end();
  } catch (err) {
    console.error('Error:', err.message);
    await pool.end();
  }
}

checkTable();
