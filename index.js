var numArr = [];
//xác định số nguyên tố
function isPrime(n) {
  var flag = true;
  if (n < 2) {
    return (flag = false);
  }
  var i = 2;
  while (n > i) {
    if (n % i == 0) {
      flag = false;
      break;
    }
    i++;
  }
  return flag;
}
//tim số chẳn
function timSoChan(n) {
  var flag = false;
  if (n % 2 == 0) {
    flag = true;
  }
  return flag;
}
function xuatSoChanCuoiCung(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (timSoChan(array[i]) == true) {
      return array[i];
    } else {
      return -1;
    }
  }
}
//tìm sô nguyên duong nhỏ nhất
function soDuong(n) {
  var flag = false;
  if (n > 0) {
    return (flag = true);
  }
  return flag;
}
function soDuongNhoNhat(array) {
  for (i = 0; i < array.length; i++) {
    if (soDuong(array[i]) == true) {
      return "số Nguyên Dương nhỏ nhất là:" + array[i];
    }
  }
}

document.getElementById("tongsoDuong").addEventListener("click", function () {
  var numValue = document.getElementById("num").value * 1;
  var xuatThongBao = document.getElementById("xuatThongBao");
  var xuatdiemsoDuong = document.getElementById("diemsoDuong");
  var xuatNguyennhoNhat = document.getElementById("timsoNguyennhoNhat");
  var xuatNguyenDuongNhoNhat = document.getElementById(
    "timSoNguyenDuongNhoNhat"
  );
  var xuatSoChancuoiMang = document.getElementById("timGiaTriChanCuoiMang");
  var sapxepvitriTangDan = document.getElementById("sapxepvitriTangDan");
  var soNguyenToDauTien = document.getElementById("timsoNguyenToDauTien");

  numArr.push(numValue);
  xuatThongBao.innerHTML = numArr;
  var tongSoDuong = 0;
  var count = 1;
  var xuatTongSoDuong = " ";
  var diemSoDuong = " ";

  // Tổng số nguyên dương và đếm số nguyên dương(bai 1 và 2)
  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0) {
      tongSoDuong = tongSoDuong + numArr[i];
      xuatTongSoDuong += " tổng số dương là " + tongSoDuong + "/";
      diemSoDuong += " Có tất cả " + count + " " + "số dương/";
      count++;
    } else {
      tinhTong.innerHTML = "không tìm thấy số dương nào";
    }
    tinhTong.innerHTML = xuatTongSoDuong;
    xuatdiemsoDuong.innerHTML = diemSoDuong;
  }
  //tìm số nguyên nhỏ nhất
  for (i = 0; i < numArr.length; i++) {
    var minArr = Math.min(...numArr);
    xuatNguyennhoNhat.innerHTML = "Số nguyên nhỏ nhất trong mảng là: " + minArr;
  }
  //tìm số dương nhỏ nhất
  xuatNguyenDuongNhoNhat.innerHTML = soDuongNhoNhat(numArr);
  //   tìm số chẳn cuối cùng trong mảng
  xuatSoChancuoiMang.innerHTML = xuatSoChanCuoiCung(numArr);
  //sắp xếp số tăng dần trong mảng
  for (i = 0; i < numArr.length; i++) {
    sapxepvitriTangDan.innerHTML = numArr.sort(function (a, b) {
      return a - b;
    });
  }
  //tìm số nguyên tố đầu tiên trong mảng
  for (var i = 0; i < numArr.length; i++) {
    if (isPrime(numArr[i]) == true) {
      soNguyenToDauTien.innerHTML = numArr[i];
      return numArr[i];
    } else {
      soNguyenToDauTien.innerHTML = "không tìm thấy số nguyên tố";
    }
  }
});
