// script.js
function cekTahunKabisat() {
  var tahun = parseInt(document.getElementById("tahunInput").value);
  var hasilBox = document.getElementById("hasilBox");

  if (tahun % 4 === 0) {
    if (tahun % 100 === 0) {
      if (tahun % 400 === 0) {
        hasilBox.innerHTML = tahun + " adalah tahun kabisat.";
        hasilBox.style.backgroundColor = "#4CAF50";
        hasilBox.style.color = "#fff";
      } else {
        hasilBox.innerHTML = tahun + " bukan tahun kabisat.";
        hasilBox.style.backgroundColor = "#FF5733";
        hasilBox.style.color = "#fff";
      }
    } else {
      hasilBox.innerHTML = tahun + " adalah tahun kabisat.";
      hasilBox.style.backgroundColor = "#4CAF50";
      hasilBox.style.color = "#fff";
    }
  } else {
    hasilBox.innerHTML = tahun + " bukan tahun kabisat.";
    hasilBox.style.backgroundColor = "#FF5733";
    hasilBox.style.color = "#fff";
  }
}
