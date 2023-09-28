const readline = require('readline-sync');

// Fungsi untuk menghasilkan angka acak antara 1 hingga 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Menghasilkan dua angka acak
const angka1 = getRandomNumber();
const angka2 = getRandomNumber();

// Menghitung jawaban yang benar
const jawabanBenar = angka1 + angka2;

// Minta pengguna untuk menjawab pertanyaan penjumlahan
const jawabanPengguna = parseInt(readline.question(`Berapa hasil dari ${angka1} + ${angka2}? `));

// Memeriksa apakah jawaban pengguna benar atau salah
if (jawabanPengguna === jawabanBenar) {
  console.log('Jawaban Anda benar!');
} else {
  console.log('Jawaban Anda salah. Jawaban yang benar adalah: ' + jawabanBenar);
}
