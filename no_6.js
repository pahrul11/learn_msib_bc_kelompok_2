// Import modul readline-sync untuk interaksi dengan pengguna
const readline = require('readline-sync');

// Minta pengguna untuk memasukkan bilangan positif
const bilangan = parseInt(readline.question('Masukkan bilangan positif: '));

if (bilangan <= 0) {
  console.log('Masukkan bilangan yang lebih besar dari 0.');
} else {
  faktorisasiBilangan(bilangan);
}

// Fungsi untuk faktorisasi bilangan
function faktorisasiBilangan(n) {
  console.log(`Faktorisasi dari ${n} adalah:`);

  for (let faktor = 2; faktor <= n; faktor++) {
    while (n % faktor === 0) {
      console.log(faktor);
      n /= faktor;
    }
  }
}
