// script.js
function hitungJumlahHari() {
  var nomorBulan = parseInt(document.getElementById("nomorBulanInput").value);
  var hasilHitung = document.getElementById("hasilHitung");

  var jumlahHari;

  switch (nomorBulan) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      jumlahHari = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      jumlahHari = 30;
      break;
    case 2:
      jumlahHari = "28 atau 29";
      break;
    default:
      jumlahHari = "Bulan tidak valid";
  }

  hasilHitung.innerHTML =
    "Jumlah hari dalam bulan " +
    nomorBulan +
    " adalah " +
    jumlahHari +
    " hari.";
}
