

function HTMLHienThiDonHang() {
    var HTMLHienThiItemDonHang = '<div class="admin__don-hang-container">\n'+
    '    <h2 class="admin__don-hang-container-headtext">Xem đơn hàng</h2>\n'+
    '    <ul class="admin__don-hang-container-list-heading">\n'+
    '    <li class="admin__don-hang-container-item-heading">\n'+
    '    <span class="admin__don-hang-container-item-heading-name">Hình ảnh</span>\n'+
    '    </li>\n'+
    '    <li class="admin__don-hang-container-item-heading">\n'+
    '    <span class="admin__don-hang-container-item-heading-name">Tên sản phẩm</span>\n'+
    '    </li>\n'+
    '    <li class="admin__don-hang-container-item-heading">\n'+
    '    <span class="admin__don-hang-container-item-heading-name">Thương hiệu</span>\n'+
    '    </li>\n'+
    '    <li class="admin__don-hang-container-item-heading">\n'+
    '    <span class="admin__don-hang-container-item-heading-name">Giá Bán</span>\n'+
    '    </li>\n'+
    '    <li class="admin__don-hang-container-item-heading">\n'+
    '    <span class="admin__don-hang-container-item-heading-name">Số lượng</span>\n'+
    '    </li>\n'+
    '    </ul>';

    var danhSachDonHang = JSON.parse(localStorage.getItem('danhSachDonHang'));
    var idXemDonHang = JSON.parse(localStorage.getItem('idXemDonHang'));
    var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));
    var total;
    for(var i = 0; i < danhSachDonHang.length;i++)
    {
        if(idXemDonHang == danhSachDonHang[i].idDonHang)
        {
            total = danhSachDonHang[i].total;
            for(var y = 0;y < danhSachSanPham.length;y++)
            {
                if(danhSachDonHang[i].id == danhSachSanPham[y].id)
                {
                    var sanPham = TaoDoiTuongSanPham(danhSachSanPham[y].hinhAnh, danhSachSanPham[y].ten, danhSachSanPham[y].giaGoc, danhSachSanPham[y].phanTramGiamGia, danhSachSanPham[y].thuongHieu, danhSachSanPham[y].id);
                    var HTML = '<ul class="admin__don-hang-container-list">\n'+
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
                '   <span class="admin__don-hang-container-item-name">'+ danhSachDonHang[i].soLuong +'</span>\n'+
                '   </li>\n'+
                '   </ul>';
                    HTMLHienThiItemDonHang = HTMLHienThiItemDonHang + HTML;
                }
            }
        }
    }
    
    HTMLHienThiItemDonHang = HTMLHienThiItemDonHang + '<div class="admin__don-hang-footer-price-user">Tổng tiền : '+ total +'đ</div>';
    HTMLHienThiItemDonHang = HTMLHienThiItemDonHang + '</div>';
    // hiển thị
    document.getElementById('xem_don_user').innerHTML = HTMLHienThiItemDonHang;
}