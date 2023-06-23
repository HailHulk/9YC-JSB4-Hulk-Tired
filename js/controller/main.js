function getElement (selector) {
    return document.querySelector(selector)
}

var dsnv = new DSNV()
console.log("dsnv: ", dsnv);

getLocalStorage()

function getThongTinNV(){
    var taiKhoan = getElement('#tknv').value
    // console.log("taiKhoan: ", taiKhoan);
    var hoVaTen = getElement('#name').value
    // console.log("hoVaTen: ", hoVaTen);
    var email = getElement('#email').value
    // console.log("email: ", email);
    var matKhau = getElement('#password').value
    // console.log("matKhau: ", matKhau);
    var ngayLam = getElement('#datepicker').value
    // console.log("ngaylam: ", ngaylam);
    var luongCoBan = +getElement('#luongCB').value
    // console.log("luongCoBan: ", luongCoBan);
    var chucVu = getElement('#chucvu').value
    // console.log("chucVu: ", chucVu);
    var gioLam = getElement('#gioLam').value
    // console.log("gioLam: ", gioLam);

    // Tạo đối tượng nhân viên lấy thông tin từ user
    var nhanVien = new NhanVien(     
        taiKhoan,
        hoVaTen,
        email,
        matKhau,
        ngayLam,
        luongCoBan,
        chucVu,
        gioLam,
    )

    return nhanVien
}

getElement('#btnThemNV').onclick = function(){
    // var taiKhoan = getElement('#tknv').value
    // // console.log("taiKhoan: ", taiKhoan);
    // var hoVaTen = getElement('#name').value
    // // console.log("hoVaTen: ", hoVaTen);
    // var email = getElement('#email').value
    // // console.log("email: ", email);
    // var matKhau = getElement('#password').value
    // // console.log("matKhau: ", matKhau);
    // var ngayLam = getElement('#datepicker').value
    // // console.log("ngaylam: ", ngaylam);
    // var luongCoBan = +getElement('#luongCB').value
    // // console.log("luongCoBan: ", luongCoBan);
    // var chucVu = getElement('#chucvu').value
    // // console.log("chucVu: ", chucVu);
    // var gioLam = getElement('#gioLam').value
    // // console.log("gioLam: ", gioLam);

    // // Tạo đối tượng nhân viên lấy thông tin từ user
    // var nhanVien = new NhanVien(     
    //     taiKhoan,
    //     hoVaTen,
    //     email,
    //     matKhau,
    //     ngayLam,
    //     luongCoBan,
    //     chucVu,
    //     gioLam,
    // )
   
    // // console.log("nhanVien: ", nhanVien);
    // // console.log("Tổng lương: ", nhanVien.tinhTongLuong());
    // // console.log("Xếp loại nhân viên: ", nhanVien.xepLoaiNhanVien());

    var nhanVien = getThongTinNV(false)

    if (nhanVien) {
    // dsnv.arrNV.push(nhanVien);    
    console.log(dsnv.arrNV);
    dsnv.themNV(nhanVien);

    // Render mảng danh sách nhân viên ra UI
    renderdsnv ()

    // Lưu danh sách nhân viên vào localStorage
    setLocalStorgae()
    }
}

// Render dsnv ra UI (giao diện Web)
function renderdsnv (){
    var content = ''
    for(var i = 0; i < dsnv.arrNV.length; i++){
        var nv = dsnv.arrNV[i]
        // content += '<tr>' 
        // content += '<td>' + nv.taiKhoan + '</td>'
        // content += '<td>' + nv.hoVaTen + '</td>'
        // content += '<td>' + nv.email + '</td>'
        // content += '<td>' + nv.ngayLam + '</td>'
        // content += '<td>' + nv.chucVu + '</td>'
        // content += '<td>' + nv.tinhTongLuong + '</td>'
        // content += '<td>' + nv.xepLoaiNhanVien + '</td>'
        // content += '</tr>'
        content +=  `
        <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.hoVaTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td> 
                <td>${nv.tinhTongLuong()}</td>
                <td>${nv.xepLoaiNhanVien()}</td>
                <td>
                <button 
                    class='btn btn-success mr-3'
                    onclick="updateNV('${nv.taiKhoan}')"
                >
                    Edit
                </button>
                <button class='btn btn-danger' onclick="deleteNV('${nv.taiKhoan}')">Delete</button>
            </td>
        </tr>
        `
    }
    // <td>${nv.tinhTongLuong()}</td>
    // <td>${nv.xepLoaiNhanVien()}</td>       
    // console.log("content: ", content);
    getElement('#tableDanhSach').innerHTML = content
}

// Lưu danh sách nhân viên vào localStorage
function setLocalStorgae(){
    // B1: Chuyển data về dạng string
    var data = JSON.stringify(dsnv.arrNV)
    // B2: Lưu vào Local
    localStorage.setItem('DSNV', data)
    // Viết ngắn gọn
    // localStorage.setItem('DSNV, JSON.stringify(dsnv.arrNV))
}

// get danh sách nhân viên từ localStorage
function getLocalStorage(){
    // B1: lấy data từ local
    var data = localStorage.getItem('DSNV') // null
    // B2: parse data về kiểu dữ liệu ban đầu
    if (data) {
    var parseData = JSON.parse(data)
    console.log("parseData: ", parseData);

    // Tạo lại đối tượng nhanVien từ lớp đối tượng NhanVien để lấy phương thức tinhDTB
    // B1: tạo mảng để lưu dsnv
    var arr = []

    // B2: Duyệt mảng được lấy từ dưới localStorage
    for (var i = 0; i < parseData.length; i++){
    var nv = parseData[i]
    // console.log("nv: ", nv);

    // Tạo lại đối tượng nv từ lớp đối tượng NV
    var nhanVien = new NhanVien(
        nv.taiKhoan,
        nv.hoVaTen,
        nv.email,
        nv.matKhau,
        nv.ngayLam,
        nv.luongCoBan,
        nv.chucVu,
        nv.gioLam,
        )
        // Thêm nhanVien vào mảng arr
        arr.push(nhanVien)
        // console.log("nhanVien: ", nhanVien);
    }

    // Gán giá trị cho mảng arr.NV từ data lấy từ localStorage
    dsnv.arrNV = arr
    console.log("arr: ", arr);
    renderdsnv()
    }
}

// Xóa nhân viên
function deleteNV (taiKhoan) {
    console.log("taiKhoan: ", taiKhoan);
    dsnv.xoaNV(taiKhoan)
    console.log("dsnv: ", dsnv.arrNV);
    // Gọi lại render để cập nhật lại UI sau khi xóa thành công
    renderdsnv()

    // Cập nhật lại data lưu dưới localStorage
    setLocalStorgae()
}

// cập nhật sinh viên
function updateNV(taiKhoan) {
    // console.log('taiKhoan: ', taiKhoan)
    var index = dsnv.timNV(taiKhoan)
    // console.log('index: ', index)
    var nv = dsnv.arrNV[index]
    console.log('nv: ', nv)

    // đẩy data lên input
    getElement('#tknv').value = nv.taiKhoan
    getElement('#name').value = nv.hoVaTen
    getElement('#email').value = nv.email
    getElement('#password').value = nv.matKhau
    getElement('#datepicker').value = nv.ngayLam
    getElement('#luongCB').value = nv.luongCoBan
    getElement('#chucvu').value = nv.chucVu
    getElement('#gioLam').value = nv.gioLam
}

// Cập nhật lại nhân viên
getElement('#btnCapNhat').onclick = function () {
    // Lấy lại thông tin nhân viên sau khi chỉnh sửa xong
    var nhanVien = getThongTinNV(true)
    // cập nhật nhân viên
    dsnv.capNhatNV(nhanVien)

    //  render lại UI
    renderdsnv()

    // cập nhật data local
    setLocalStorage()

    // reset form
    getElement('#formQLNV').reset()
}


// localStorgage
var nhanVien = {
    name: 'Nguyễn Văn J',
    age: '18',
    address: 'HCM',
    getInfo:function(){} // Không lưu được phương thức vào local storage
}

// Lưu
// localStorage.setItem('NV4', JSON.stringify(nhanVien))

// Read (lấy dữ liệu từ local storage)
// var value = localStorage.getItem('NV4');
// Chuyển dữ liệu lấy từ local về dạng ban đầu
// var parseValue = JSON.parse(value);
// console.log("parseValue: ", parseValue);
// console.log("value: ", value);

// Xóa dữ liệu local storage
// localStorage.removeItem(NV4)