// Import modul readline-sync untuk interaksi dengan pengguna
const readline = require('readline-sync');

// Minta pengguna untuk memasukkan range
const range = parseInt(readline.question('Masukkan range bilangan: '));

// Inisialisasi variabel untuk menyimpan jumlah bilangan ganjil
let jumlahGanjil = 0;

// Loop dari 1 hingga range
for (let i = 1; i <= range; i++) {
  // Cek apakah bilangan tersebut ganjil
  if (i % 2 !== 0) {
    jumlahGanjil += i; // Tambahkan bilangan ganjil ke jumlahGanjil
  }
}

// Tampilkan hasil jumlah bilangan ganjil
console.log(`Jumlah bilangan ganjil dari 1 hingga ${range} adalah: ${jumlahGanjil}`);
