var numArr = [];
function checksoNguyen(n) {
  var flag = true;
  if (Math.ceil(n) != Math.floor(n)) {
    flag = false;
  }
  return flag;
}

document.getElementById("timsonguyen").addEventListener("click", function () {
  var numValue = document.getElementById("num").value * 1;
  var xuatThongBao = document.getElementById("xuatThongBao");
  var xuatSoNguyen = document.getElementById("timsoNguyen");
  var xuatsosanhsoNguyen = document.getElementById("sosanhsoNguyen");
  numArr.push(numValue);
  xuatThongBao.innerHTML = numArr;
  var list = "";
  var count = 0;

  var diemsoDuong = 0;
  var diemsoAm = 0;

  for (i = 0; i < numArr.length; i++) {
    if (checksoNguyen(numArr[i]) == true) {
      count++;
      list +=
        "<div>" +
        "Có tổng cộng là" +
        " " +
        count +
        " " +
        " số nguyên" +
        "</div>";
    } else {
      xuatSoNguyen.innerHTML = "Không tìm thấy số nguyên ";
    }
    xuatSoNguyen.innerHTML = list;
  }
  for (i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0) {
      diemsoDuong++;
    } else if (numArr[i] < 0) {
      diemsoAm++;
    } else {
      xuatsosanhsoNguyen.innerHTML = "0";
    }
    if (diemsoDuong > diemsoAm) {
      xuatsosanhsoNguyen.innerHTML = "số dương nhiều hơn số âm";
    } else if (diemsoDuong < diemsoAm) {
      xuatsosanhsoNguyen.innerHTML = "số âm nhiều hơn số dương";
    } else {
      xuatsosanhsoNguyen.innerHTML = "số âm và số dương bằng nhau";
    }
  }
});
