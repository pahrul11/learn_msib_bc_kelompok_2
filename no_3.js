// Import modul readline-sync untuk interaksi dengan pengguna
const soal3 = require('readline-sync');

// Minta pengguna untuk memasukkan anggka
const angka1 = parseFloat(soal3.question('Masukkan harga item pertama: '));
const angka2 = parseFloat(soal3.question('Masukkan harga item kedua: '));
const angka3 = parseFloat(soal3.question('Masukkan harga item ketiga: '));

//perhitungan pertambahan
const hasil = angka1 + angka2 + angka3;

// Tampilkan hasil
console.log(`Hasil perkalin: ${hasil}`);
