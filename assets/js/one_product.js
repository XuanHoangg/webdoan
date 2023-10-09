
function hienThiOneProduct() {
    var openSanPham = JSON.parse(localStorage.getItem('openSanPham'));
    /* lấy sản phẩm đã có trong localstorage */
    var openSanPham = JSON.parse(localStorage.getItem('openSanPham'));
    var sanPham = TaoDoiTuongSanPham(openSanPham.hinhAnh, openSanPham.ten, openSanPham.giaGoc, openSanPham.phanTramGiamGia, openSanPham.thuongHieu, openSanPham.id)
    var HTML1 = '<div class="home-one-product__body-mid">\n'+
    '    <img src="'+ sanPham.hinhAnh +'" alt="" class="home-one-product__body-mid-img">\n'+
    '    </div>\n'+
    '    <div class="home-one-product__body-right">\n'+
    '    <div class="home-one-product__body-right-heading">'+ sanPham.ten +'</div>\n'+
    '    <div class="home-one-product__body-right-trademark">\n'+
    '    <div class="home-one-product__body-right-trademark-text">Thương hiệu</div>\n'+
    '    <a href="" class="home-one-product__body-right-trademark-name">'+ sanPham.thuongHieu +'</a>\n'+
    '    </div>\n'+
    '    <div class="home-one-product-line"></div>\n'+
    '    <div class="home-one-product__body-right-price">Giá bán : '+ sanPham.tinhGiaBan() +'đ</div>\n'+
    '    <div class="home-one-product__body-right-qantity">\n'+
    '    <div class="home-one-product__body-right-qantity-text">Số lượng:</div>\n'+
    '    <div class="home-one-product__body-right-qantity-btn">\n'+
    '    <button class="home-one-product__body-right-qantity-btn-sub" onclick="onClickSoLuongGiam()">\n'+
    '    <i class="home-one-product__body-right-qantity-btn-icon fa-solid fa-minus"></i>\n'+
    '    </button>\n';

    var HTML2 = '    <button class="home-one-product__body-right-qantity-btn-add" onclick="onClickSoLuongTang()">\n'+
    '    <i class="home-one-product__body-right-qantity-btn-icon fa-solid fa-plus"></i>\n'+
    '    </button>\n'+
    '    </div>\n'+
    '    </div>\n'+
    '    <div class="home-one-product__body-right-footer">\n'+
    '    <button class="home-one-product__body-right-footer-link-left" onclick="onclickThemOneProductVaoGioHang(\''+ openSanPham.id +'\')">thêm vào giỏ</button>\n'+
    '    <button class="home-one-product__body-right-footer-link-right" onclick="onclicMuaHangOneProduct()">mua hàng</button>\n'+
    '    </div>\n'+
    '    </div>';

    var nodeOpenSanPham = document.getElementById('home-one-product__body');
    nodeOpenSanPham.innerHTML = HTML1 + nodeOpenSanPham.innerHTML + HTML2;

}

function onClickShowProduct(idSanPham) {

    /* lấy danh sách sản phẩm đã có trong localstorage */
    var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));

    if(danhSachSanPham == null)
    {
        danhSachSanPham = new Array();
    }
    var sanPham;
    for(var i = 0; i < danhSachSanPham.length; i++)
    {
        if(danhSachSanPham[i].id == idSanPham)
        {
            sanPham = TaoDoiTuongSanPham(danhSachSanPham[i].hinhAnh, danhSachSanPham[i].ten, danhSachSanPham[i].giaGoc, danhSachSanPham[i].phanTramGiamGia, danhSachSanPham[i].thuongHieu, danhSachSanPham[i].id)
        }
    }
    
    /* lữu trữ xuống local storage */
    var jsonsanPham = JSON.stringify(sanPham);
    localStorage.setItem('openSanPham', jsonsanPham);

    window.location.href = "./one-product.html";
}


function onclicMuaHangOneProduct() {
    window.location.href = "./gio_hang.html";
}

