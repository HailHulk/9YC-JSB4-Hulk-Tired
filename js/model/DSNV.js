function DSNV () {
    this.arrNV = [] //mảng quản lý toàn bộ danh sách nhân viên

    this.themNV = function(nhanVien){
        this.arrNV.push(nhanVien)
    }

    this.timNV = function (tenTaiKhoan) {
        // var index = -1
        // B1: tìm index của phần tử cần xóa dựa vào thuộc tính mã sinh viên
        for (var i = 0; i < this.arrNV.length; i++) {
            var taiKhoan = this.arrNV[i].taiKhoan
            if (taiKhoan === tenTaiKhoan) {
                return i
            }
        }

        return -1
    }

    // nếu trả về -1 => ko có nhân viên nào chứa tên tài khoản cần tìm
    this.xoaNV = function(tenTaiKhoan){
// var index = -1
        // // B1: tìm index của phần tử cần xóa dựa vào thuộc tính ten tài khoản
        // for (var i = 0; i < this.arrNV.length; i++) {
        //     var taiKhoan = this.arrNV[i].taiKhoan
        //     if (taiKhoan === tenTaiKhoan) {
        //         index = i
        //     }
        // }

        var index = this.timNV(tenTaiKhoan)
        console.log('index: ', index)
        //B2: xóa phần tử có index tìm đc
        if (index !== -1) {
            this.arrNV.splice(index, 1)
        }
        // return -1
    }

    this.capNhatSV = function (nhanVien) {
        var index = this.timNV(nhanVien.taiKhoan)
        
        if (index !== -1) {
            this.arrNV[index] = nhanVien
        }
    }
}