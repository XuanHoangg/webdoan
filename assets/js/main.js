// hàm tạo đối tượng sản phẩm

function TaoDoiTuongSanPham(hinhAnh, ten, giaGoc, phanTramGiamGia, thuongHieu, id) {
    var sanPham = new Object();
    // tạo thuộc tính
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    sanPham.thuongHieu = thuongHieu;

    if(id != null)
    {
        sanPham.id = id;
    }
    else
    {
        sanPham.id = taoID();
    }

    // tạo phương thức
    sanPham.tinhGiaBan = function() {
        var giaBan = this.giaGoc * ((100 - this.phanTramGiamGia) / 100);
        return giaBan;
    }

    sanPham.toJson = function() {
        var json = JSON.stringify(this);
        return json;
    }
    /* từ json chuyển thành 1 đối tượng đầy đủ các phương thức
        input : json
        output : đối tượng đầy đủ
    */
    sanPham.fromJSON = function(json) {
        var doiTuongDayDu = new Object();
        // b1 chuyển từ json thành đối tượng
        var doiTuong = JSON.parse(json);

        // b2 chuyển đối tượng thành đối tượng đầy đủ
        var doiTuongDayDu = TaoDoiTuongSanPham(doiTuong.hinhAnh, doiTuong.ten, doiTuong.giaGoc, doiTuong.phanTramGiamGia, doiTuong.khuVuc);
        return doiTuongDayDu;
    }
    /* từ jsonds sản phẩm trả về 1 danh sách sản phẩm có đầy đủ các phương thức
        input: json của ds sản phẩm
        output: danh sách sản phẩm đầy đủ
    */
    sanPham.fromJSONs = function(jsonDanhSachSanPham){
        var danhSachSanPhamĐayu = new Array();
        var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);

        for(var i = 0; i < danhSachSanPham.length; i++)
        {
            var sanPham = danhSachSanPham[i];
            var sanPhamDayDu = TaoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.thuongHieu, sanPham.id);
            danhSachSanPhamĐayu[i] = sanPhamDayDu;
        }
        return danhSachSanPhamĐayu;
    }

    return sanPham;
}





/* chuyển 1 đối tượng thành 1 đoạn html
    input: đối tượng
    output: đoạn html của đối tượng đó
*/
function chuyenDoiTuongSanPhamThanhHTML(sanPham) {
    sanPham = TaoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.thuongHieu, sanPham.id);
    var html = '';
    html += '<div class="grid__column-2">';
    html += '<div class="home-product-item">';
    html += '<div class="home-product-item__img" style="background-image: url('+ sanPham.hinhAnh +');">';
    html += '<div class="home-product-item__action-cart">';
    html += '<i  class="home-product-item__action-cart-icon fa-solid fa-cart-shopping"></i>';
    html += '<button onclick="onClickDuaVaoGioHang(\''+ sanPham.id + '\')" class="home-product-item__action-cart-btn">Thêm vào giỏ</button>';
    html += '</div>';
    html += '</div>';
    html += '<h4 class="home-product-item__name" onclick="onClickShowProduct(\''+ sanPham.id + '\')">'+ sanPham.ten +'</h4>';
    html += '<div class="home-product-item__action">';
    html += '<div class="home-product-item__price">';
    html += '<div class="home-product-item-price--no-sale">';
    html += '<span class="home-product-item__price-num">'+ sanPham.tinhGiaBan() +'</span>';
    html += '<span class="home-product-item__price-vnd">đ</span>';
    html += '</div>';
    html += '<div class="home-product-item-price--sale">';
    html += '<span class="home-product-item__price-num-sale">'+ sanPham.giaGoc +'</span>';
    html += '<span class="home-product-item__price-vnd-sale">đ</span>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="home-product-item--sale">';
    html += '<span class="home-product-item--sale__text">SALE</span>';
    html += '</div>';
    html += '<div class="home-product-item--num-sale">';
    html += '<span class="home-product-item--sale__num">'+ sanPham.phanTramGiamGia +'</span>';
    html += '<span class="home-product-item--sale__num">%</span><br>';
    html += '<span class="home-product-item--sale__lable">GIẢM</span>';
    html += ' </div>';
    html += '<div class="home-product-item__thuong-hieu">';
    html += '<span class="home-product-item__thuong-hieu-text">'+ sanPham.thuongHieu +'</span>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
}

/*  input : id
    output: đối tượng
*/
function laySanPhamTheoID(idSanPham) {
    var sanPham = new Object();
    // bước 1 : load toàn bộ danh sách sản phẩm dưới local storage lên
    var danhSachSanPham = layDanhSachSanPhamDuoiLocalStorage();

    // bước 2 : tìm ra đối tượng nào trong danh sách mà có id = idSanPham
    for(var i = 0; i < danhSachSanPham.length;i++)
    {
        var sanPhamHienTai = danhSachSanPham[i];
        if(sanPhamHienTai.id == idSanPham)
        {
            sanPham = sanPhamHienTai;
        }
    }

    // bước 3 : chuyển đối tượng thành đối tượng đầy đủ
    var sanPham = TaoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.thuongHieu, sanPham.id);

    return sanPham;
}

/* mô tả : lấy toàn bộ danh sách sản phẩm dưới localstorage lên*/ 
function layDanhSachSanPhamDuoiLocalStorage() {
    // bước 1 : load json
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');

    // bước 2 : chuyển json thành đối tượng
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}

function onclickDangXuat() {
    /* lấy user đã có trong localstorage */
    var user = JSON.parse(localStorage.getItem('User'));
    if(user == null)
    {
        user = new Array();
    }
    user.splice(0,1);
    // lữu trữ suông local storage lại
    var jsonUser = JSON.stringify(user);
    localStorage.setItem('User', jsonUser);

    document.getElementById('header__login-signup').style.display = "flex";
    document.getElementById('header__top-item-user-parent').style.display = "none";
}

/* hàm chuyển 1 danh sách đối tượng sản phẩm thành html
    input: danh sách sản phẩm
    output: html hiển thị danh sách sản phẩm */
    function chuyenDanhSachDoiTuongSanPhamThanhHTML(danhSachSanPham,start, end) {
        var HTMLDanhSachSanPham = '<div class="grid__row">';
        for(var i = 0; i < danhSachSanPham.length;i++)
        {
            if(i >= start && i < end)
            {
                var sanPham = danhSachSanPham[i];
                var htmlSanPham = chuyenDoiTuongSanPhamThanhHTML(sanPham);
                HTMLDanhSachSanPham = HTMLDanhSachSanPham + htmlSanPham;
            }
        }
        HTMLDanhSachSanPham = HTMLDanhSachSanPham + '</div>';
        return HTMLDanhSachSanPham;
    }

/* js list danh sách */
function hienThiListProducts(start, end){
    // b1 :lấy danh sách sản phẩm dưới local storage 
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');
    var danhSachSanPham = TaoDoiTuongSanPham().fromJSONs(jsonDanhSachSanPham);
    if(danhSachSanPham == null)
    {
        danhSachSanPham = new Array();
    }
    
    // b2: chuyển danh sách đối tượng sản phẩm sáng đoạn html
    
    var HTML = chuyenDanhSachDoiTuongSanPhamThanhHTML(danhSachSanPham, start, end);

    // b3: gắn đoạn html đó vào section products
    var nodeProducts = document.getElementById('SALE');
    nodeProducts.innerHTML = HTML;
}

function hienThiBtnChuyenPage() {
    var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));

    var HTML = '<i class="home-product-trademark__goc-icon fa-solid fa-chevron-left" onclick="onclickBackPage()"></i>';
    for(var i = 0; i < (danhSachSanPham.length / 8); i++)
    {
        var numPage = i + 1;
        var html = '<div class="home-product-trademark__goc-qttPage" id="home-product-trademark__goc-qttPage" onclick="onclickPage'+numPage+'()">'+ numPage +'</div>'
        HTML += html;
    }
    HTML += '<i class="home-product-trademark__goc-icon fa-solid fa-chevron-right" onclick="onclickNextPage()"></i>';

    document.getElementById('BtnChuyenPage').innerHTML = HTML;
}























