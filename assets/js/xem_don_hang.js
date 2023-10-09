
function onclickAdminXacNhanDonhang() {
    document.getElementById('da-xac-nhan-don-hang').style.display = "block";
    document.getElementById('chua-xac-nhan-don-hang').style.display = "none";
    alert('Xác nhận đơn hàng công!');
}

function hienThiQuanLyDonHang() {
    var HTMLHeader = '<div class="admin__don-hang-container">\n'+
    '<h2 class="admin__don-hang-container-headtext">Quản lí đơn hàng</h2>';
    
    var stt = 1
    var danhSachPhieuMuaHang = JSON.parse(localStorage.getItem('danhSachPhieuMuaHang'));
    var emailAdminXemDonHang = JSON.parse(localStorage.getItem('emailAdminXemDonHang'));
    for(var i =0; i < danhSachPhieuMuaHang.length;i++)
    {
        if(emailAdminXemDonHang == danhSachPhieuMuaHang[i].email)
        {   console.log(danhSachPhieuMuaHang[i])
            var month = danhSachPhieuMuaHang[i].month + 1;
            var HTMLThongTinKhachHang = 
            '   <h4 class="admin__don-hang-container-soThuTuDonHang">\n'+
            '   <div class="admin__don-hang-container-soThuTuDonHang-text">Đơn thứ :</div>\n'+
            '   <div class="admin__don-hang-container-soThuTuDonHang-qtt">'+ stt +'</div>\n'+
            '   </h4>\n'+
            '   <div class="admin__don-hang-header">\n'+
            '   <h2 class="admin__don-hang-header-heading">Thông tin khác hàng</h2>\n'+
            '   <div class="admin__don-hang-header-body">\n'+
            '   <div class="admin__don-hang-header-name">\n'+
            '   <span class="admin__don-hang-header-name-weight">Họ tên :</span>\n'+
            '   <span class="admin__don-hang-header-name-no-weight">'+danhSachPhieuMuaHang[i].hoTen+'</span>\n'+
            '   </div>\n'+
            '   <div class="admin__don-hang-header-name">\n'+
            '   <span class="admin__don-hang-header-name-weight">Số điện thoại :</span>\n'+
            '   <span class="admin__don-hang-header-name-no-weight">'+danhSachPhieuMuaHang[i].soDienThoai+'</span>\n'+
            '   </div>\n'+
            '   <div class="admin__don-hang-header-name">\n'+
            '   <span class="admin__don-hang-header-name-weight">Email :</span>\n'+
            '   <span class="admin__don-hang-header-name-no-weight">'+danhSachPhieuMuaHang[i].email+'</span>\n'+
            '   </div>\n'+
            '   <div class="admin__don-hang-header-name">\n'+
            '   <div class="admin__don-hang-header-name-weight">Địa chỉ :</div>\n'+
            '   <div class="admin__don-hang-header-name-no-weight">'+danhSachPhieuMuaHang[i].diaChi+'</div>\n'+
            '   </div>\n'+
            '   <div class="admin__don-hang-header-name">\n'+
            '   <div class="admin__don-hang-header-name-weight">Thời gian :</div>\n'+
            '   <div class="admin__don-hang-header-name-no-weight">'+danhSachPhieuMuaHang[i].hours+':'+danhSachPhieuMuaHang[i].minites+' / '+danhSachPhieuMuaHang[i].day+'-'+month+'-'+danhSachPhieuMuaHang[i].year+'</div>\n'+
            '   </div>\n'+
            '   </div>\n'+
            '   </div>\n'+
            '   <ul class="admin__don-hang-container-list-heading">\n'+
            '   <li class="admin__don-hang-container-item-heading">\n'+
            '   <span class="admin__don-hang-container-item-heading-name">Hình ảnh</span>\n'+
            '   </li>\n'+
            '   <li class="admin__don-hang-container-item-heading">\n'+
            '   <span class="admin__don-hang-container-item-heading-name">Tên sản phẩm</span>\n'+
            '   </li>\n'+
            '   <li class="admin__don-hang-container-item-heading">\n'+
            '   <span class="admin__don-hang-container-item-heading-name">Thương hiệu</span>\n'+
            '   </li>\n'+
            '   <li class="admin__don-hang-container-item-heading">\n'+
            '   <span class="admin__don-hang-container-item-heading-name">Giá Bán</span>\n'+
            '   </li>\n'+
            '   <li class="admin__don-hang-container-item-heading">\n'+
            '   <span class="admin__don-hang-container-item-heading-name">Số lượng</span>\n'+
            '   </li>\n'+
            '   </ul>';
            HTMLHeader += HTMLThongTinKhachHang;
            var total ;
            var idDonHangXacNhan;
            var danhSachDonHang = JSON.parse(localStorage.getItem('danhSachDonHang'));
            for(var j =0; j < danhSachDonHang.length;j++)
            {
                if(danhSachPhieuMuaHang[i].idDonHang == danhSachDonHang[j].idDonHang)
                {
                    var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));
                    for(var k =0; k < danhSachSanPham.length;k++)
                    {
                        if(danhSachDonHang[j].id == danhSachSanPham[k].id)
                        {
                            idDonHangXacNhan = danhSachDonHang[j].idDonHang;
                            total = danhSachDonHang[j].total;
                            var sanPham = TaoDoiTuongSanPham(danhSachSanPham[k].hinhAnh, danhSachSanPham[k].ten, danhSachSanPham[k].giaGoc, danhSachSanPham[k].phanTramGiamGia, danhSachSanPham[k].thuongHieu, danhSachSanPham[k].id);
                            var HTMLDonHang = '<ul class="admin__don-hang-container-list">\n'+
                            '   <li class="admin__don-hang-container-item">\n'+
                            '   <img src="'+ sanPham.hinhAnh +'" alt="" class="admin__don-hang-container-item-img">\n'+
                            '   </li>\n'+
                            '   <li class="admin__don-hang-container-item">\n'+
                            '   <span class="admin__don-hang-container-item-name admin__don-hang-container-item-name-hover">'+ sanPham.ten +'</span>\n'+
                            '   </li>\n'+
                            '   <li class="admin__don-hang-container-item">\n'+
                            '   <span class="admin__don-hang-container-item-trademark">'+ sanPham.thuongHieu +'</span>\n'+
                            '   </li>\n'+
                            '   <li class="admin__don-hang-container-item">\n'+
                            '   <span class="item__gio-hang-gia-ban">'+ sanPham.tinhGiaBan() +'</span>\n'+
                            '   <span class="item__gio-hang-gia-goc">'+ sanPham.giaGoc +'</span>\n'+
                            '   </li>\n'+
                            '   <li class="admin__don-hang-container-item">\n'+
                            '   <span class="admin__don-hang-container-item-name">'+ danhSachDonHang[j].soLuong +'</span>\n'+
                            '   </li>\n'+
                            '   </ul>';
                            HTMLHeader += HTMLDonHang;
                        }
                    }
                }
            }
            var HTMLFooter = '<div class="admin__don-hang-footer">\n'+
            '   <button id="da-xac-nhan-don-hang">Đã xác nhận</button>\n'+
            '   <button class="admin__don-hang-footer-btn" id="chua-xac-nhan-don-hang" onclick="onclickAdminXacNhanDonhang(\''+ idDonHangXacNhan +'\')">Xác nhận</button>\n'+
            '   <div class="admin__don-hang-footer-right">\n'+
            '   <div class="admin__don-hang-footer-action" id="chua-xu-ly-don-hang1">Chưa xử lý</div>\n'+
            '   <div class="admin__don-hang-footer-action" id="da-xu-ly-don-hang1">Đã xử lý</div>\n'+
            '   <div class="admin__don-hang-footer-price">Tổng tiền : '+ total +'đ</div>\n'+
            '   </div>\n'+
            '   </div>\n'+
            '   </div>';
            HTMLHeader += HTMLFooter;
            stt++;
            document.getElementById('admin__no-don-hang').style.display = "none";
        }
    }
    
    document.getElementById('admin__don-hang').innerHTML = HTMLHeader;
}


function onclickBackAdmin() {
    window.location.href = "./add_sản_phẩm.html";
}






























