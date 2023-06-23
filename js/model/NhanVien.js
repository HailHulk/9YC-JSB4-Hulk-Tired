function NhanVien(
    _taiKhoan,
    _hoVaTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam, 
) {
    ;(this.taiKhoan = _taiKhoan),
        (this.hoVaTen = _hoVaTen),
        (this.email = _email),
        (this.matKhau = _matKhau),
        (this.ngayLam = _ngayLam),
        (this.luongCoBan = _luongCoBan),
        (this.chucVu = _chucVu),
        (this.gioLam = _gioLam),
        (this.tinhTongLuong = function () {
            if(this.chucVu === "Sếp"){
                return this.luongCoBan * 3;
            } else if(this.chucVu === "Trưởng phòng"){
                return this.luongCoBan * 2;
            } else {
                return this.luongCoBan;
            }
        }),
        (this.xepLoaiNhanVien = function () {
            if(this.gioLam >= 192){
                 return "Xuất sắc";
            } else if(this.gioLam >= 176){
                 return "Giỏi";
            } else if(this.gioLam >= 160){
                return "Khá";
            } else {
                return "Trung bình";
            }
        })
}    


// function NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam){
//     this.taiKhoan = taiKhoan;
//     this.hoTen = hoTen;
//     this.email = email;
//     this.matKhau = matKhau;
//     this.ngayLam = ngayLam;
//     this.luongCoBan = luongCoBan;
//     this.chucVu = chucVu;
//     this.gioLam = gioLam;

//     this.xepLoaiNhanVien = function(){
//         if(this.gioLam >= 192){
//             return "Xuất sắc";
//         } else if(this.gioLam >= 176){
//             return "Giỏi";
//         } else if(this.gioLam >= 160){
//             return "Khá";
//         } else {
//             return "Trung bình";
//         }
//     }

//     this.tinhTongLuong = function() {
//         if(this.chucVu === "Giám đốc"){
//             return this.luongCoBan * 3;
//         } else if(this.chucVu === "Trưởng phòng"){
//             return this.luongCoBan * 2;
//         } else {
//             return this.luongCoBan * this.gioLam;
//         }
//     }
// }


// win : alt + shift + F
// mac: option + shift + F
