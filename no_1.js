// Import modul readline-sync untuk interaksi dengan pengguna
const readline = require('readline-sync');

// Minta pengguna untuk memasukkan anggka
const angka1 = parseFloat(readline.question('Masukkan angka pertama: '));
const angka2 = parseFloat(readline.question('Masukkan angka kedua: '));

//perhitungan perkalian
const hasil = angka1 * angka2;

// Tampilkan hasil
console.log(`Hasil perkalin: ${hasil}`);
