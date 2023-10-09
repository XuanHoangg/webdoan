

function hinhHienThiSanPhamDeQuanLy() {
    // lấy danh sashc dữ liệu dưới local storage lên
    var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));
    if(danhSachSanPham == null)
    {
        danhSachSanPham = new Array();
    }

    // chuyển danh sách item thành HTML
    var HTMLDanhSachSanPham = chuyenSanPhamDaTaoOnAdminThanhHTML(danhSachSanPham);

    // truy cập node để hiển thị HTMLDanhSachSanPham
    var nodeHienThiSanPham = document.getElementById('hien-thi-san-pham-them-moi-list');

    nodeHienThiSanPham.innerHTML = HTMLDanhSachSanPham;

}


function chuyenSanPhamDaTaoOnAdminThanhHTML(danhSachSanPham) {
    var HTMLDanhSachSanPham = '<div class="hien-thi-san-pham-them-moi-item-heading">\n'+
    '   <div class="add-product__quantyti hien-thi-san-pham-them-moi-item-heading-text">STT</div>\n'+
    '   <div class="add-product__image hien-thi-san-pham-them-moi-item-heading-text">Hình ảnh</div>\n'+
    '   <div class="add-product__name hien-thi-san-pham-them-moi-item-heading-text">Tên sản Phẩm</div>\n'+
    '   <div class="add-product__price hien-thi-san-pham-them-moi-item-heading-text">Giá gốc</div>\n'+
    '   <div class="add-product__trademark hien-thi-san-pham-them-moi-item-heading-text">Thương hiệu</div>\n'+
    '   <div class="add-product__button hien-thi-san-pham-them-moi-item-heading-text">Thao tác</div>\n'+
    '   </div>';
    for(var i = 0; i < danhSachSanPham.length ; i++)
    {
        var sanPham = danhSachSanPham[i];
        var stt = i + 1;
        var html = '<div class="hien-thi-san-pham-them-moi-item" >'+
        '        <div class="add-product__quantyti">'+ stt +'</div>\n'+
        '        <div class="add-product__image">\n'+
        '            <img src="'+ sanPham.hinhAnh +'" alt="" class="add-product__img">\n'+
        '        </div>\n'+
        '        <div class="add-product__name">\n'+
        '            <span class="add-product__name-link">'+ sanPham.ten +'</span>\n'+
        '        </div>\n'+
        '        <div class="add-product__price">'+ sanPham.giaGoc +'đ</div>\n'+
        '        <div class="add-product__trademark">'+ sanPham.thuongHieu +'</div>\n'+
        '        <div class="add-product__button">\n'+
        '            <button class="add-product__btn add-product__btn-green" onclick="onClickCapNhatSanPhamAdmin(\''+ sanPham.id +'\')">Cập Nhật</button>\n'+
        '            <button class="add-product__btn add-product__btn-red" onclick="onClickXoaSanPhamAdmin(\''+ sanPham.id +'\')">Xóa</button>\n'+
        '        </div>\n'+
        '        </div>';
        HTMLDanhSachSanPham = HTMLDanhSachSanPham + html;
    }
    return HTMLDanhSachSanPham;
}
           

function onclickXemThongKeKinhDoanh() {
    alert('Không xử lý được thầy ơi')
}

function onclickThemSuaXoa() {
    document.getElementById('them-moi-san-pham').style.display = "block";
    document.getElementById('hien-thi-san-pham-them-moi-list').style.display = "none";
    document.getElementById('admin__quan-li-user').style.display = "none";
    document.getElementById('thongKe__tinhHinhKinhDoanh').style.display = "none";
    document.getElementById('showProductsadmin').style.display = "block";
    document.getElementById('HideProductsadmin').style.display = "none";
}

function onclickQuanLyXemDon() {
    document.getElementById('them-moi-san-pham').style.display = "none";
    document.getElementById('hien-thi-san-pham-them-moi-list').style.display = "none";
    document.getElementById('admin__quan-li-user').style.display = "block";
    document.getElementById('thongKe__tinhHinhKinhDoanh').style.display = "none";
    document.getElementById('showProductsadmin').style.display = "none";
    document.getElementById('HideProductsadmin').style.display = "none";
}

function onclickXemThongKe() {
    document.getElementById('them-moi-san-pham').style.display = "none";
    document.getElementById('hien-thi-san-pham-them-moi-list').style.display = "none";
    document.getElementById('admin__quan-li-user').style.display = "none";
    document.getElementById('showProductsadmin').style.display = "none";
    document.getElementById('thongKe__tinhHinhKinhDoanh').style.display = "block";
    document.getElementById('HideProductsadmin').style.display = "none";
}

function onlickShowProductsAdmin() {
    document.getElementById('showProductsadmin').style.display = "none";
    document.getElementById('hien-thi-san-pham-them-moi-list').style.display = "block";
    document.getElementById('HideProductsadmin').style.display = "flex";
}

function onlickHideProductsAdmin() {
    document.getElementById('showProductsadmin').style.display = "flex";
    document.getElementById('hien-thi-san-pham-them-moi-list').style.display = "none";
    document.getElementById('HideProductsadmin').style.display = "none";
}