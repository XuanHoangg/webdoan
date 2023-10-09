// tạo hàm tạo đối tượng user
function taoDoiTuongUser(email, hoTen, matKhau, xacNhanMatKhau, ngaySinh, dienThoai) {
    var user = new Object();
    // tạo thuốc tính
    user.email = email;
    user.hoTen = hoTen;
    user.matKhau = matKhau;
    user.xacNhanMatKhau = xacNhanMatKhau;
    user.ngaySinh = ngaySinh;
    user.dienThoai = dienThoai;
    return user;
}

    /* b1 lấy danh sách đã có trong localstorage */
    var danhSachUser = JSON.parse(localStorage.getItem('danhSachUser'));
    if(danhSachUser == null)
    {
        danhSachUser = new Array();
    }
    /*  lấy user đã có trong localstorage */
    var oneUser = JSON.parse(localStorage.getItem('User'));
    if(oneUser == null)
    {
        oneUser = new Array();
    }

    // var email = document.getElementById('email').value;
    // sigun up
    function onClickFormValidateSignUp() {
        if(kiemTraHopLeFormTaoSanPham() == true)
        {
            // thực hiên tạo user
            var email = document.getElementById('email').value;
            var hoTen = document.getElementById('hoTen').value;
            var matKhau = document.getElementById('matKhau').value;
            var xacNhanMatKhau = document.getElementById('xacNhanMatKhau').value;
            var ngaySinh = document.getElementById('ngaySinh').value;
            var dienThoai = document.getElementById('dienThoai').value;

            if(danhSachUser.length == 0)
            {
                if(matKhau === xacNhanMatKhau)
                {
                    var user = taoDoiTuongUser(email, hoTen, matKhau, xacNhanMatKhau, ngaySinh, dienThoai);
                    danhSachUser.push(user);
                    // lữu trữ xuống local storage
                    var jsonDanhSachUser = JSON.stringify(danhSachUser);
                    localStorage.setItem('danhSachUser', jsonDanhSachUser);
                    window.location.href = "./login.html";
                    alert('đăng kí thành công');
                }
                else
                {
                    alert('Xin nhập lại mật khẩu giống nhau!');
                }
            }
            else
            {
                {for(var i = 0; i < danhSachUser.length; i++)
            
                    if(email === danhSachUser[i].email)
                    {
                        alert('Email bị trùng.Vui lòng nhập lại!');
                        break;
                    }
                    else
                    {
                        if(matKhau === xacNhanMatKhau)
                        {
                            var user = taoDoiTuongUser(email, hoTen, matKhau, xacNhanMatKhau, ngaySinh, dienThoai);
                            danhSachUser.push(user);
                            // lữu trữ xuống local storage
                            var jsonDanhSachUser = JSON.stringify(danhSachUser);
                            localStorage.setItem('danhSachUser', jsonDanhSachUser);
                            window.location.href = "./login.html";
                            alert('đăng kí thành công');
                            break;
                        }
                        else
                        {
                            alert('Xin nhập lại mật khẩu giống nhau!');
                            break;
                        }
                    }
                }
            }
        }
    }

    // login user
    function onClickFormValidateLogin() {
        if(kiemTraHopLeFormTaoSanPham() == true)
        {
            var email = document.getElementById('email').value;
            var matKhau = document.getElementById('matKhau').value;
            if(danhSachUser.length == 0)
            {
                window.location.href = "./signup.html";
                alert('Vui lòng đăng kì tài khoản trước!')
            }
            else
            {
                var kiemTraDangNhap = false;
                for(var i = 0;i < danhSachUser.length;i++)
                {
                    if(email == danhSachUser[i].email && matKhau == danhSachUser[i].matKhau)
                    { 
                        kiemTraDangNhap = true;

                        oneUser.splice(0,1);
                        oneUser.push(danhSachUser[i]); 

                        // lữu trữ xuống local storage
                        var jsonUser = JSON.stringify(oneUser);
                        localStorage.setItem('User', jsonUser);
                        
    
                        window.location.href = "./index_test.html";
                        alert('đăng nhập thành công');
                    }
                }    
                for(var i = 0;i < danhSachUser.length;i++)
                {
                    if(kiemTraDangNhap == false)
                    {
                        if(email != danhSachUser[i].email || matKhau != danhSachUser[i].matKhau)
                        {
                            alert('Sai Email hoặc mật khẩu');
                            break;
                        }
                    }  
                }
            }
        } 
    }


