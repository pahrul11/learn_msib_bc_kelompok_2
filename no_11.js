const readline = require('readline-sync');

// Minta pengguna untuk memasukkan dua angka
const angka1 = parseFloat(readline.question('Masukkan angka pertama: '));
const angka2 = parseFloat(readline.question('Masukkan angka kedua: '));

// Pilihan operasi
console.log('Pilih operasi:');
console.log('1. Pertambahan (+)');
console.log('2. Pengurangan (-)');
console.log('3. Perkalian (*)');
console.log('4. Pembagian (/)');
const operasi = parseInt(readline.question('Masukkan nomor operasi: '));

let hasil;

// Proses kalkulasi berdasarkan operasi yang dipilih
switch (operasi) {
  case 1:
    hasil = angka1 + angka2;
    break;
  case 2:
    hasil = angka1 - angka2;
    break;
  case 3:
    hasil = angka1 * angka2;
    break;
  case 4:
    if (angka2 !== 0) {
      hasil = angka1 / angka2;
    } else {
      console.log('Tidak dapat melakukan pembagian oleh nol.');
      process.exit(1);
    }
    break;
  default:
    console.log('Operasi yang dimasukkan tidak valid.');
    process.exit(1);
}

// Tampilkan hasil perhitungan
console.log(`Hasil perhitungan: ${hasil}`);
