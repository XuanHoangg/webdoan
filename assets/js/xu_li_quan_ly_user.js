var danhSachUser = JSON.parse(localStorage.getItem('danhSachUser'));

function hienThiQuanLyUser() {

    var HTMLQuanLyUser = '<h2 class="admin___quan-li-user-heading">Quản lý User</h2>\n'+
    '<ul class="admin___quan-li-user-list admin___quan-li-user-list-head">\n'+
    '<li class="admin___quan-li-user-item">Họ tên</li>\n'+
    '<li class="admin___quan-li-user-item">Email</li>\n'+
    '<li class="admin___quan-li-user-item">Mật khẩu</li>\n'+
    '<li class="admin___quan-li-user-item"> Số điện thoại</li>\n'+
    '<li class="admin___quan-li-user-item">Ngày sinh</li>\n'+
    '<li class="admin___quan-li-user-item">Thao tác</li>\n'+
    '</ul>'
    for(var i = 0; i < danhSachUser.length;i++)
    {
        var html = '<ul class="admin___quan-li-user-list">\n'+
        '<li class="admin___quan-li-user-item">'+ danhSachUser[i].hoTen +'</li>\n'+
        '<li class="admin___quan-li-user-item">'+ danhSachUser[i].email +'</li>\n'+
        '<li class="admin___quan-li-user-item">'+ danhSachUser[i].matKhau +'</li>\n'+
        '<li class="admin___quan-li-user-item">'+ danhSachUser[i].dienThoai +'</li>\n'+
        '<li class="admin___quan-li-user-item">'+ danhSachUser[i].ngaySinh +'</li>\n'+
        '<li class="admin___quan-li-user-item">\n'+
        '<div class="add-product__btn-body">\n'+
        '<button class="add-product__btn add-product__btn-blue" onclick="onclickShowDonOfListUser(\''+ danhSachUser[i].email +'\')">Xem đơn</button>\n'+
        '</div>\n'+
        '</li>\n'+
        '</ul>'

        HTMLQuanLyUser = HTMLQuanLyUser + html;
    }
    // console.log(HTMLQuanLyUser)

    document.getElementById('admin__quan-li-user').innerHTML = HTMLQuanLyUser;
}

function onclickShowDonOfListUser(email) {
    /* lữu trữ xuống local storage */
    var jsonEmailAdminXemDonHang = JSON.stringify(email);
    localStorage.setItem('emailAdminXemDonHang', jsonEmailAdminXemDonHang);

    window.location.href = "./xem_don_hang.html";
}


// function HTMLThongTinUser() {
//     var user = JSON.parse(localStorage.getItem('User'));
    
//     HTML = '<div class="admin__don-hang-header">\n'+
//     '   <h2 class="admin__don-hang-header-heading">Thông tin khác hàng</h2>\n'+
//     '   <div class="admin__don-hang-header-body">\n'+
//     '   <div class="admin__don-hang-header-name">\n'+
//     '   <span class="admin__don-hang-header-name-weight">Họ tên :</span>\n'+
//     '   <span class="admin__don-hang-header-name-no-weight">'+ user[0].hoTen +'</span>\n'+
//     '   </div>\n'+
//     '   <div class="admin__don-hang-header-name">\n'+
//     '   <span class="admin__don-hang-header-name-weight">Số điện thoại :</span>\n'+
//     '   <span class="admin__don-hang-header-name-no-weight">'+ user[0].soDienThoai +'</span>\n'+
//     '   </div>\n'+
//     '   <div class="admin__don-hang-header-name">\n'+
//     '   <span class="admin__don-hang-header-name-weight">Email :</span>\n'+
//     '   <span class="admin__don-hang-header-name-no-weight">'+ user[0].email +'</span>\n'+
//     '   </div>\n'+
//     '   <div class="admin__don-hang-header-name">\n'+
//     '   <div class="admin__don-hang-header-name-weight">Địa chỉ :</div>\n'+
//     '   <div class="admin__don-hang-header-name-no-weight">Đăk Lăk</div>\n'+
//     '   </div>\n'+
//     '   </div>\n'+
//     '   </div>';

//     return HTML;
// }