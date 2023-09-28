const readline = require('readline-sync');

// Minta pengguna untuk memasukkan alas dan tinggi segitiga
const alas = parseFloat(readline.question('Masukkan panjang alas segitiga: '));
const tinggi = parseFloat(readline.question('Masukkan tinggi segitiga: '));

// Hitung luas segitiga
const luasSegitiga = (1 / 2) * alas * tinggi;

// Hitung panjang sisi miring
const sisiMiring = Math.sqrt(Math.pow(alas, 2) + Math.pow(tinggi, 2));

// Tampilkan hasil
console.log(`Luas segitiga: ${luasSegitiga.toFixed(2)}`);
console.log(`Panjang sisi miring: ${sisiMiring.toFixed(2)}`);
