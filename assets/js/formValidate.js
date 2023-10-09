    /* phân tích yêu cầu, xác định tính hợp lệ là gì
            1. hình ảnh k đc để trống
            2. tên k đc để trống
        */
       /* b1 lấy danh sách đã có trong localstorage */
       var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));
       if(danhSachSanPham == null)
       {
           danhSachSanPham = new Array();
       }

        // mô tả : tạo ra sản phẩm & lưu trữ trong localstorage
        function onclickTaoSanPham() {
            if(kiemTraHopLeFormTaoSanPham() == true)
            {
                // thực hiên tạo sản phẩm

                // node HA
                var nodeHinhAnh = document.getElementById('hinhAnh');
                var hinhAnh = nodeHinhAnh.value;
                nodeHinhAnh.value = '';

                // node ten
                var nodeTen = document.getElementById('ten');
                var ten = nodeTen.value;
                nodeTen.value = '';

                // node giá góc
                var nodeGiaGoc = document.getElementById('giaGoc');
                var giaGoc = nodeGiaGoc.value;
                nodeGiaGoc.value = '';


                // node phần trăm giảm gía
                var nodePhanTramGiamGia = document.getElementById('phanTramGiamGia');
                var phanTramGiamGia = nodePhanTramGiamGia.value;
                nodePhanTramGiamGia.value = '';


                // node thương hiêu
                var nodeThuongHieu = document.getElementById('thuongHieu');
                var thuongHieu = nodeThuongHieu.value;
                nodeThuongHieu.value = '';

                // 2.tạo ra đối tượng lưu trữ dữ liệu người dùng nhập vào
                var sanPham = TaoDoiTuongSanPham(hinhAnh, ten, giaGoc, phanTramGiamGia, thuongHieu, null);

                // 3. đưa sản phẩm vào danh sách
                danhSachSanPham.push(sanPham);

                /* lữu trữ xuống local storage */
                var jsonDanhSachSanPham = JSON.stringify(danhSachSanPham);
                localStorage.setItem('danhSachSanPham', jsonDanhSachSanPham);

                alert('Thêm sản phẩm thành công');
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


// edit sản phẩm
function onClickCapNhatSanPhamAdmin(idSanPham) {
    document.getElementById('error1').style.display = "none";
    document.getElementById('error2').style.display = "none";
    document.getElementById('error3').style.display = "none";
    document.getElementById('error4').style.display = "none";
    document.getElementById('error5').style.display = "none";

    document.getElementById('add__san-pham').style.display = "none";
    document.getElementById('edit__san-pham').style.display = "block";

    var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));
    if(danhSachSanPham == null)
    {
        danhSachSanPham = new Array();
    }

    for(var i = 0;i < danhSachSanPham.length;i++)
    {
        if(danhSachSanPham[i].id == idSanPham)
        {
            document.getElementById('hinhAnh').value = danhSachSanPham[i].hinhAnh;
            document.getElementById('ten').value = danhSachSanPham[i].ten;
            document.getElementById('giaGoc').value = danhSachSanPham[i].giaGoc;
            document.getElementById('phanTramGiamGia').value = danhSachSanPham[i].phanTramGiamGia;
            document.getElementById('thuongHieu').value = danhSachSanPham[i].thuongHieu;
            document.getElementById('idSanPham').value = idSanPham;
        }
    }
    
}

function runEditSanPham() {
    document.getElementById('error1').style.display = "block";
    document.getElementById('error2').style.display = "block";
    document.getElementById('error3').style.display = "block";
    document.getElementById('error4').style.display = "block";
    document.getElementById('error5').style.display = "block";
    if(kiemTraHopLeFormTaoSanPham() == true)
    {
        var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));
        if(danhSachSanPham == null)
        {
            danhSachSanPham = new Array();
        }
        console.log(danhSachSanPham);
    
        var idSanPham = document.getElementById('idSanPham').value;
        for(var i = 0;i < danhSachSanPham.length;i++)
        {
            if(danhSachSanPham[i].id == idSanPham)
            {
                danhSachSanPham[i].hinhAnh = document.getElementById('hinhAnh').value;
                danhSachSanPham[i].ten = document.getElementById('ten').value;
                danhSachSanPham[i].giaGoc = document.getElementById('giaGoc').value;
                danhSachSanPham[i].phanTramGiamGia = document.getElementById('phanTramGiamGia').value;
                danhSachSanPham[i].thuongHieu = document.getElementById('thuongHieu').value;
            }
        }
        // lưu danh sách sản phẩm xuống local storage
        var jsonDanhSachSanPham = JSON.stringify(danhSachSanPham);
    
        // bước 2: lưu vào localstorage
        localStorage.setItem('danhSachSanPham', jsonDanhSachSanPham);
    
        // lấy danh sach sản phẩm lên 
        var danhSachSanPhamNew = JSON.parse(localStorage.getItem('danhSachSanPham'));
        if(danhSachSanPhamNew == null)
        {
            danhSachSanPhamNew = new Array();
        }
    
        // chuyển danh sách item thành HTML
        var HTMLDanhSachSanPham = chuyenSanPhamDaTaoOnAdminThanhHTML(danhSachSanPhamNew);
    
        // truy cập node để hiển thị HTMLDanhSachSanPham
        var nodeHienThiSanPham = document.getElementById('hien-thi-san-pham-them-moi-list');
    
        nodeHienThiSanPham.innerHTML = HTMLDanhSachSanPham;
    
        // reset input
        document.getElementById('hinhAnh').value = '';
        document.getElementById('ten').value = '';
        document.getElementById('giaGoc').value = '';
        document.getElementById('phanTramGiamGia').value = '';
        document.getElementById('thuongHieu').value = '';
    
        document.getElementById('add__san-pham').style.display = "block";
        document.getElementById('edit__san-pham').style.display = "none";
    }
}


        