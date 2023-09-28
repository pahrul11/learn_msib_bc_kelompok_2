// Import modul readline-sync untuk interaksi dengan pengguna
const readline = require('readline-sync');

// Minta pengguna untuk memasukkan suhu dalam Celsius
const suhuCelsius = parseFloat(readline.question('Masukkan suhu dalam Celsius: '));

// Lakukan konversi ke Fahrenheit menggunakan rumus
const suhuFahrenheit = (suhuCelsius * 9/5) + 32;

// Tampilkan hasil konversi
console.log(`Suhu dalam Fahrenheit: ${suhuFahrenheit.toFixed(2)}°F`);
