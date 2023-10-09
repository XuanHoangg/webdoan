

function hienThiDonHang(danhSachDonHang, index, idDonHang) {


    //  lấy danh sách item giỏ hàng dưới local storage lên
    var danhSachSanPhamDuocMua = layDanhSachItemGioHang();


    var month = danhSachDonHang.month + 1;
    var html = '<ul class="don-hang__container-list">\n'+
        ' <li class="don-hang__container-item" >'+ danhSachDonHang.hoTen +'</li>\n'+
        ' <li class="don-hang__container-item" >'+ danhSachDonHang.soDienThoai +'</li>\n'+
        ' <li class="don-hang__container-item" >'+ danhSachDonHang.hours +':'+ danhSachDonHang.minites +' / '+danhSachDonHang.day+'-'+ month +'-'+danhSachDonHang.year+' </li>\n'+
        ' <li class="don-hang__container-item" >\n'+
        '<button class="don-hang__container-item--btn don-hang__container-item--btn-hover" onclick="onclickXemDonHangUser(\''+ idDonHang + '\')">Xem đơn</button>\n'+
        '</li>\n'+
        ' <li class="don-hang__container-item" >\n'+
        ' <div class="don-hang__container-item--btn-body">\n'+
        ' <button class="don-hang__container-item--btn" id="don-hang__container-item--btn-dangXuLy">Đang xử lý</button>\n'+
        ' <button class="don-hang__container-item--btn" id="don-hang__container-item--btn-dangGiao">Đang giao</button>\n'+
        ' <button class="don-hang__container-item--btn" id="don-hang__container-item--btn-nhanThanhCong">Nhận thành công</button>\n'+
        ' <button class="don-hang__container-item--btn" id="don-hang__container-item--btn-daNhan" onclick="onclickDaNhanDonHang()">Đã nhận</button>\n'+
        ' </div>\n'+
        ' </li>\n'+
        ' </ul>';

    return html;
}

function onclickDaNhanDonHang() {
    alert('Hệ thống chưa giải quyết được. Thật SORRY');
}

function onclickXemDonHangUser(idDonHang) {

    /* lữu trữ xuống local storage */
    var jsonIdXemDonHang = JSON.stringify(idDonHang);
    localStorage.setItem('idXemDonHang', jsonIdXemDonHang);
    
    window.location.href = "./xem_don_user.html";
}

