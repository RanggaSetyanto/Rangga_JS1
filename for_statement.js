// script.js
var hasilBilangan = 0;

// Menghitung jumlah bilangan genap dari 1 hingga 100
for (var i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    hasilBilangan += i;
  }
}

var hasilHitungElement = document.getElementById("hasilBilangan");
hasilHitungElement.textContent =
  "Jumlah bilangan genap dari 1 hingga 100 adalah " + hasilBilangan + ".";
