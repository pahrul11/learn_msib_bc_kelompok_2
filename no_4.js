// Import modul readline-sync untuk interaksi dengan pengguna
const readline = require('readline-sync');

// Minta pengguna untuk memasukkan dua angka
const angka1 = parseFloat(readline.question('Masukkan angka pertama: '));
const angka2 = parseFloat(readline.question('Masukkan angka kedua: '));

// Lakukan perbandingan
if (angka1 > angka2) {
  console.log(`${angka1} lebih besar dari ${angka2}`);
} else if (angka1 < angka2) {
  console.log(`${angka1} lebih kecil dari ${angka2}`);
} else {
  console.log(`${angka1} sama dengan ${angka2}`);
}
