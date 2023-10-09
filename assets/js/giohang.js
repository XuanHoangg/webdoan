var keyLocalStorageItemGioHang = 'danhSachItemGioHang'

/* tạo ra đối tượng item giỏ hàng
    input: idSanPham , soLuong
    output: Đối tượng item giỏ hàng
*/
function TaoDoiTuongItemGioHang(idSanPham, soLuong) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    return itemGioHang;
}

function taoDoiTuongPhieuMuaHang(idDonHang, hoTen, soDienThoai, email, diaChi, hours, minites, day, month, year) {
    var phieuMuaHang = new Object();
    phieuMuaHang.idDonHang = idDonHang;
    phieuMuaHang.hoTen = hoTen;
    phieuMuaHang.soDienThoai = soDienThoai;
    phieuMuaHang.email = email;
    phieuMuaHang.diaChi = diaChi;
    phieuMuaHang.hours = hours;
    phieuMuaHang.minites = minites;
    phieuMuaHang.day = day;
    phieuMuaHang.month = month;
    phieuMuaHang.year = year;
    return phieuMuaHang;
}


function taoDoiTuongThongTinDonHang(idDonHang, email, id, soLuong, total) {
    var donMua = new Object();
    donMua.idDonHang = idDonHang;
    donMua.email = email;
    donMua.id = id;
    donMua.soLuong = soLuong;
    donMua.total = total;
    return donMua;
}

/* Yêu cầu : lấy ra toàn bộ các item được lưu trữ trong local storage
    output: danh sách taofn bộ item giỏ hàng trong local storage
*/
function layDanhSachItemGioHang() {
    var danhSachItemGioHang = new Array();
    // b1 : lấy chuỗi json lưu trữ trong local storage
    var jsonDanhSachItemGioHang = localStorage.getItem(keyLocalStorageItemGioHang);
    // b2 : chuyển từ json qua danh sách item giỏ hàng

    if(jsonDanhSachItemGioHang != null)
    {
        danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);
    }
    return danhSachItemGioHang;
}

/* lưu trữ danh sách item giỏ hàng
    input: danh sach item giỏ hàng
*/ 
function luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang) {
    // bước 1 : chuyển thành chuỗi json
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);
    // bước 2: lưu vào localstorage
    localStorage.setItem(keyLocalStorageItemGioHang, jsonDanhSachItemGioHang);
}

function hienThiSoLuongSanPhamCuaGioHang() {
    // bước 1 : lấy danh sách item giỏ hàng dưới local storage lên
    var danhSachItemGioHang = layDanhSachItemGioHang();
    
    // bước 2 : chuyển danh sách item giỏ hàng thành HTMl
    var tongSoLuongSanPham = 0;
    for(var i = 0; i < danhSachItemGioHang.length; i++)
    {
        var itemGioHangHienTai = danhSachItemGioHang[i];
        tongSoLuongSanPham = tongSoLuongSanPham + itemGioHangHienTai.soLuong;
    }
    var HTML = '<span class="header__bottom-cart-notice">' + tongSoLuongSanPham + '</span>';


    // bước 3 : truy cập node gio-hang để hiển thị html danh sách item giỏ hàng lên
    var nodeSoLuongSanPham = document.getElementById('header__bottom-cart');
    nodeSoLuongSanPham.innerHTML = nodeSoLuongSanPham.innerHTML + HTML;

}

/* b1 lấy danh sách đã có trong localstorage */
var danhSachPhieuMuaHang = JSON.parse(localStorage.getItem('danhSachPhieuMuaHang'));
if(danhSachPhieuMuaHang == null)
{
    danhSachPhieuMuaHang = new Array();
}

var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));


 // mô tả : tạo ra sản phẩm & lưu trữ trong localstorage
 function onclickMuaHang() {
     if(kiemTraHopLeFormTaoSanPham() == true)
     {
        var confirm = window.confirm("Xác nhận mua hàng!");
        if(confirm)
        {
            // thực hiên tạo sản phẩm

            // node họ tên
            var nodeHoTen = document.getElementById('hoTen');
            var hoTen = nodeHoTen.value;

            // node số điện thoại
            var nodeSoDienThoai = document.getElementById('soDienThoai');
            var soDienThoai = nodeSoDienThoai.value;

            // node email
            var nodeEmail = document.getElementById('email');
            var email = nodeEmail.value;

            // node địa chỉ
            var nodeDiaChi = document.getElementById('diaChi');
            var diaChi = nodeDiaChi.value;

            //  lấy danh sách item giỏ hàng dưới local storage lên
            var danhSachSanPhamDuocMua = layDanhSachItemGioHang();

            if(danhSachSanPhamDuocMua.length == 0)
            {
                alert('Chưa có sản phẩm được thêm.VUI LÒNG THÊM');
            }
            else
            {
                /*  lấy tài khoảng user đã có trong localstorage */
                var oneUser = JSON.parse(localStorage.getItem('User'));
                if(oneUser.length == 0)
                {
                    alert('Vui lòng đăng nhập trước khi mua hàng!');
                }
                else
                {
                    if(email != oneUser[0].email)
                    {
                        alert('Email phải trùng với tài khoảng đăng nhập');
                    }
                    else
                    {
                        var idDonHang = taoID();

                        // tạo thời gian đặt hàng
                        var thoiGian = new Date();
                        var day = thoiGian.getDate();
                        var month = thoiGian.getMonth();
                        var year = thoiGian.getFullYear();
                        var hours = thoiGian.getHours();
                        var minites = thoiGian.getMinutes();

                        // tạo phiếu mua hàng từ người dùng nhập vào
                        var phieuMuaHang = taoDoiTuongPhieuMuaHang(idDonHang, hoTen, soDienThoai, email, diaChi,hours,minites, day, month, year)
    
                        // đưa sản phẩm vào danh sách
                        danhSachPhieuMuaHang.push(phieuMuaHang);
    
                        /* lữu trữ xuống local storage */
                        var jsonDanhSachPhieuMuaHang = JSON.stringify(danhSachPhieuMuaHang);
                        localStorage.setItem('danhSachPhieuMuaHang', jsonDanhSachPhieuMuaHang);

                        var tongTotalPhieuMuaHang = 0;
                        for(var i = 0; i < danhSachSanPhamDuocMua.length; i++)
                        {
                            var sanPham = laySanPhamTheoID(danhSachSanPhamDuocMua[i].idSanPham);
                            var tongTien = sanPham.tinhGiaBan() * danhSachSanPhamDuocMua[i].soLuong;
                            tongTotalPhieuMuaHang += tongTien;
                        }
    
                        var danhSachDonHang = JSON.parse(localStorage.getItem('danhSachDonHang'));
                        if(danhSachDonHang == null)
                        {
                            danhSachDonHang = new Array();
                        }
    
                        var donHang = new Array();
                        
                        for(var i = 0; i < danhSachSanPhamDuocMua.length; i++)
                        {
                            donHang[i] = taoDoiTuongThongTinDonHang(idDonHang, oneUser[0].email, danhSachSanPhamDuocMua[i].idSanPham, danhSachSanPhamDuocMua[i].soLuong, tongTotalPhieuMuaHang);
                            danhSachDonHang.push(donHang[i]);
                        }

                        /* lữu trữ xuống local storage */
                        var jsonDanhSachDonHang = JSON.stringify(danhSachDonHang);
                        localStorage.setItem('danhSachDonHang', jsonDanhSachDonHang);


                        alert('TỔNG SỐ TIỀN CẦN THANH TOÁN : ' + tongTotalPhieuMuaHang + 'đ');

                        // reset giỏ hàng
                        var soLuongSanPhamDuocMua = danhSachSanPhamDuocMua.length;

                        danhSachSanPhamDuocMua.splice(0,soLuongSanPhamDuocMua);

                        /* lữu trữ xuống local storage */
                        var jsonDanhSachSanPhamDuocMua = JSON.stringify(danhSachSanPhamDuocMua);
                        localStorage.setItem('danhSachItemGioHang', jsonDanhSachSanPhamDuocMua);

                        hienThiDanhSachItemGioHang();
                        hienThiSoLuongSanPhamCuaGioHang();

                        nodeHoTen.value = '';
                        nodeSoDienThoai.value = '';
                        nodeEmail.value = '';
                        nodeDiaChi.value = '';

                        alert('Đặt hàng thành công!');
                    } 
                }
            }
        }
    }   
 }


 /* mô tả : kiểm tra tính hợp lệ
     nếu hợp lệ tra về true
     k hợp lệ trả về false và thông báo lỗi
 */
 function kiemTraHopLeFormTaoSanPham() {
     // kiếm tra các input để trống không
     if(kiemTraCacInputDeTrong() == false)
     {
         return false;
     }
     else{
         return true;
     }
 }

 function kiemTraCacInputDeTrong() {
     var hople = true;

     // b1 truy cập tất cả các nodeInput muốn check là k để trống
     // => danh sách nodeInputs
     var danhSachNodeInputKhongDeTrong = document.querySelectorAll('input[khongDeTrong]');
     for(var i = 0; i < danhSachNodeInputKhongDeTrong.length;i++)
     {
         var nodeInputKhongDeTrong = danhSachNodeInputKhongDeTrong[i];

         // b2 lấy dữ liệu trong node input
         var giaTri = nodeInputKhongDeTrong.value;

         // b3 truy xuất đến node hiển thị lỗi
         var idNodeInput = nodeInputKhongDeTrong.getAttribute('id');
         var nodeHienThiLoi = truyXuatNodeHienThiLoiTheoInputId(idNodeInput);
         nodeHienThiLoi.innerHTML = '';

         // b4 : kiểm tra giá trị trong node,để trống hiển thị nodeHienThiLoi
         if(giaTri == null || giaTri.length == 0)
         {
             var noiDungLoi = layNoiDungHienThiLoiTheoNodeInput(nodeInputKhongDeTrong);
             nodeHienThiLoi.innerHTML = noiDungLoi;
             hople = false;
         }
     }

     return hople;
 }

 // mô tả : truy xuất node hiển thị lỗi theo input
 function truyXuatNodeHienThiLoiTheoInputId(inputId) {
     var nodeHienThiLoi = document.querySelector('label.error[for="' + inputId + '"]');
     return nodeHienThiLoi;
 }

 // mô tả : lấy dữ liệu hiển thị lỗi của nodeInput

 function layNoiDungHienThiLoiTheoNodeInput(nodeInput) {
     var noiDungLoi = 'không được để trống';
     if(nodeInput.hasAttribute('noiDungLoiDeTrong'))
     {
         noiDungLoi = nodeInput.getAttribute('noiDungLoiDeTrong');
     }
     return noiDungLoi;
}


function hienThiDanhSachItemGioHang() {
    // bước 1 : lấy danh sách item giỏ hàng dưới local storage lên
    var danhSachItemGioHang = layDanhSachItemGioHang();
    
    // bước 2 : chuyển danh sách item giỏ hàng thành HTMl
    var HTML = chuyenDanhSachItemGioHangSangHTML(danhSachItemGioHang);

    // bước 3 : truy cập node gio-hang để hiển thị html danh sách item giỏ hàng lên
    var nodeGioHang = document.getElementById('gio-hang');

    nodeGioHang.innerHTML = HTML;

}

/* mô tả : chuyển danh sách thành html
    input : danh sách item giỏ hàng
    output : html hiển thị danh sách item giỏ hàng
*/
function chuyenDanhSachItemGioHangSangHTML(danhSachItemGioHang) {
    var HTMLTong = '';
    for(var i = 0; i < danhSachItemGioHang.length; i++)
    {
        itemGioHangHienTai = danhSachItemGioHang[i];
        HTMLTong += chuyenDoiTuongItemGioHangSangHTML(itemGioHangHienTai);
    }
    return HTMLTong;
}

/* mô tả chuyển 1 đối tượng thành html
    input : đối tượng giỏ hàng
    output : html hiển thị item giỏ hàng
*/
function chuyenDoiTuongItemGioHangSangHTML(itemGioHang) {
    //item giỏ hàng : idSanPham & số lượng

    // bước 1 : chuyển từ idSanPham -> lấy lên đc đối tượng (h.anh,tên, giá..)
    var sanPham = laySanPhamTheoID(itemGioHang.idSanPham);
    
    var tongTien = sanPham.tinhGiaBan() * itemGioHang.soLuong;

    // bước 2 : thay thế những giá trị đối tượng vào đoạn html


    var html =        '   <div class="item__gio-hang">\n'+
            '       <div class="item__gio-hang-image">\n'+
            '           <img src="' + sanPham.hinhAnh + '" alt="" class="item__gio-hang-img">\n'+
            '       </div>\n'+
            '       <a href="" class="item__gio-hang-name">' + sanPham.ten + '</a>\n'+
            '       <div class="item__gio-hang-price">\n'+
            '           <span class="item__gio-hang-gia-ban">' + sanPham.tinhGiaBan() + 'đ</span>\n'+
            '           <span class="item__gio-hang-gia-goc">' + sanPham.giaGoc + 'đ</span>\n'+
            '       </div>\n'+
            '       <input type="number" class="item__gio-hang-quantyti" value="' + itemGioHang.soLuong + '">\n'+
            '       <p class="item__gio-hang-total">' + tongTien +'đ</p>\n'+
            '       <div class="item__gio-hang-act" onclick="onClickXoaSanPhamKhoiGioHang(\''+ itemGioHang.idSanPham +'\')">\n'+
            '           <i  class="item__gio-hang-act-icon fa-solid fa-trash-can"></i>\n'+
            '       </div>\n'+
            '   </div>';
    return html;
}



/* xóa sản phẩm */
function onClickXoaSanPhamKhoiGioHang(idSanPham) {
    var confirm = window.confirm("Bạn muốn xóa Sản Phẩm?");
    if(confirm)
    {
        var danhSachItemGioHang = layDanhSachItemGioHang();
        for(var i = 0;i < danhSachItemGioHang.length;i++)
        {
            if(danhSachItemGioHang[i].idSanPham == idSanPham)
            {
                    danhSachItemGioHang.splice(i,1);
            }
        }
        luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang);
        hienThiDanhSachItemGioHang();
        hienThiSoLuongSanPhamCuaGioHang();
    }
}