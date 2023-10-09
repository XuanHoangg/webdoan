
function hideFind() {
    var find = document.getElementById('find');
    find.style.display = "none";
}

window.onlick = function(event){
    if(event.target == document.getElementById('.header__bottom-search-history'))
    {
        document.querySelector('.header__bottom-search-history').style.display = "flex";
    }
}

function showFile() {
    var file = document.getElementById('header__top-item-user-list');
    file.style.display = "block";
}

function hideFile() {
    var file = document.getElementById('header__top-item-user-list');
    file.style.display = "none";
}

    

function onclickShowFind() {
    var find = document.getElementById('find');
    find.style.display = "block";

    var findError = document.getElementById('header__bottom-search--error');
    findError.style.display = "none";
    
    hienThiDanhSachHistory();
}

function hienThiDanhSachHistory() {
    /*lấy danh sách đã có trong localstorage */
    var danhSachHistory = JSON.parse(localStorage.getItem('danhSachHistory'));
    if(danhSachHistory == null)
    {
        danhSachHistory = new Array();
    }
    
    var HTMLDanhSachHistory = hienThiHistory(danhSachHistory);

    var nodeDanhSachHistory = document.getElementById('find');
    nodeDanhSachHistory.innerHTML = HTMLDanhSachHistory;
}

function hienThiHistory(danhSachHistory) {
    var HTML = '<div class="header__bottom-search-history-heading-body">\n'+
    '       <h3 class="header__bottom-search-history-heading">Lịch sử tìm kiếm</h3>\n'+
    '      <i class="header__bottom-search-history-heading-icon-close fa-solid fa-xmark" onclick="hideFind()"></i>\n'+
    '      </div>\n'+
    '      <ul class="header__search-history-list">';
    for(var i = 0; i < danhSachHistory.length ; i++)
    {
        var html = '<li class="header__search-history-item">\n'+
        '  <div class="header__search-history-item-body">\n'+
        '     <div href="" class="header__search-history-item-link">\n'+
        '        <span class="header__search-history-item-text">'+ danhSachHistory[i] +'</span>\n'+
        '     </div>\n'+
        '          <i class="header__search-history-item-icon fa-solid fa-xmark" onclick="onclickXoaOneHistory('+ i +')"></i>\n'+
        '   </div>\n'+
        '</li>';
        HTML = HTML + html;
    }
    HTML = HTML + '</ul>';
    return HTML;
}

function findProducts() {
    /*lấy danh sách đã có trong localstorage */
    var danhSachHistory = JSON.parse(localStorage.getItem('danhSachHistory'));
    if(danhSachHistory == null)
    {
        danhSachHistory = new Array();
    }

    var nodeFindHistory = document.getElementById('input-history');
    var findHistory = nodeFindHistory.value;
    if(findHistory == '')
    {   
        var findError = document.getElementById('header__bottom-search--error');
        findError.style.display = "block";
    }
    else
    {
        nodeFindHistory.value = '';

        if(danhSachHistory.length == 4)
        {
            danhSachHistory.splice(0,1);
            danhSachHistory.push(findHistory);

            /* lữu trữ xuống local storage */
            var jsonDanhSachHistory = JSON.stringify(danhSachHistory);
            localStorage.setItem('danhSachHistory', jsonDanhSachHistory);
            
        }
        else
        {
            danhSachHistory.push(findHistory);
            /* lữu trữ xuống local storage */
            var jsonDanhSachHistory = JSON.stringify(danhSachHistory);
            localStorage.setItem('danhSachHistory', jsonDanhSachHistory);
        }

        document.getElementById('has__Find').style.display = "block";
        document.getElementById('no__Find').style.display = "none";
        
        hienThiListProductsTimKiem(0, 8);

        document.getElementById('BtnChuyenPage').style.display = "none"
        document.getElementById('find').style.display = "none";
        document.getElementById('home-product__TRADEMARK').style.display = "none";
        document.getElementById('home-product__GLDSK').style.display = "none";
        document.getElementById('app__container-bgr').style.display = "none";
    }
}

/* js list danh sách */
function hienThiListProductsTimKiem(start, end){
    // b1 :lấy danh sách sản phẩm dưới local storage 
    var danhSachTimKiem = JSON.parse(localStorage.getItem('danhSachTimKiem'));
    
    // b2: chuyển danh sách đối tượng sản phẩm sáng đoạn html
    var c = '';
    if(danhSachTimKiem.length == 0)
    {
        var HTML = '<div class="header__bottom-search-history-no-find">\n'+
        '<img src="./assets/img/no-find.png" alt="" class="header__bottom-search-history-no-find-img">\n'+
        '</div>';
    }
    else
    {
        var HTML = chuyenDanhSachDoiTuongSanPhamThanhHTML(danhSachTimKiem, start, end);
    }
    // b3: gắn đoạn html đó vào section products
    var nodeProducts = document.getElementById('SALE');
    nodeProducts.innerHTML = HTML;
}


function onclickXoaOneHistory(indexTrongArray) {
    /*lấy danh sách đã có trong localstorage */
    var danhSachHistory = JSON.parse(localStorage.getItem('danhSachHistory'));
    if(danhSachHistory == null)
    {
        danhSachHistory = new Array();
    }

    for(var i = 0; i < danhSachHistory.length; i++)
    {
        if(i == indexTrongArray)
        {
            danhSachHistory.splice(i,1);
        }
    }

    /* lữu trữ xuống local storage */
    var jsonDanhSachHistory = JSON.stringify(danhSachHistory);
    localStorage.setItem('danhSachHistory', jsonDanhSachHistory);

    hienThiDanhSachHistory();

}

function hienThiNameUser() {
    var taiKhoanUser = JSON.parse(localStorage.getItem('User'));

    var HTMLUser = '<li class="header__top-item1 header__top-item-user" >\n'+
    '  <img src="./assets/img/user.png" alt="" class="header__top-item-user-img" onclick="hideFile()">\n'+
    '  <span class="header__top-item-user-name" onclick="showFile()">'+ taiKhoanUser[0].hoTen  +'</span>\n'+
    '  <ul class="header__top-item-user-list" id="header__top-item-user-list">\n'+
    '  <li class="header__top-item-user-item">\n'+
    '  <a href="don_mua_hang.html" class="header__top-item-user-item-link">Đơn đặt hàng</a>\n'+
    '  </li>\n'+
    '  <li class="header__top-item-user-item">\n'+
    '  <a href="./login.html" onclick="onclickDangXuat()" class="header__top-item-user-item-link">Đăng xuất</a>\n'+
    '  </li>\n'+
    '  </ul>\n'+
    '  </li>';

    var nodeUser = document.getElementById('header__top-item-user-parent');
    nodeUser.innerHTML = HTMLUser;
}
function xuLyLogSigAndUser() {
    /* lấy danh sách user đã có trong localstorage */
    var danhSachUser = JSON.parse(localStorage.getItem('danhSachUser'));
    if(danhSachUser == null)
    {
        danhSachUser = new Array();
    }

    /* lấy user đã có trong localstorage */
    var user = JSON.parse(localStorage.getItem('User'));
    if(user == null)
    {
        user = new Array();
    }

    for(var i = 0; i < danhSachUser.length;i++)
    {
        if(user[0].email == danhSachUser[i].email && user[0].matKhau == danhSachUser[i].matKhau)
        {
            document.getElementById('header__login-signup').style.display = "none";
            document.getElementById('header__top-item-user-parent').style.display = "flex";
        }
    }
}

function searchTenSanPham() {
    var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));
    var danhSachSanPhamDayDu = new Array();
    for(var i = 0;i < danhSachSanPham.length;i++)
    {
        danhSachSanPhamDayDu[i] = TaoDoiTuongSanPham(danhSachSanPham[i].hinhAnh, danhSachSanPham[i].ten, danhSachSanPham[i].giaGoc, danhSachSanPham[i].phanTramGiamGia, danhSachSanPham[i].thuongHieu, danhSachSanPham[i].id);
    }
    var thongTin = document.getElementById('input-history').value;
    var userSearch = danhSachSanPhamDayDu.filter(value => {
        return value.ten.toUpperCase().includes(thongTin.toUpperCase())
    })
    
    
    var html = '<span class="home-product-text">Kết quả tìm kiếm : </span>\n'+
    '<span class="home-product-text-has--find">'+ thongTin +'</span>';
    document.getElementById('has__Find').innerHTML = html;

    // lữu trữ suông local storage 
    var jsonDanhSachTimKiem = JSON.stringify(userSearch);
    localStorage.setItem('danhSachTimKiem', jsonDanhSachTimKiem);
}



