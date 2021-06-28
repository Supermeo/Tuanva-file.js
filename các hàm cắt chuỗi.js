// chuỗi > các hàm cắt chuỗi

// *** slice : cắt chuỗi và trả về giá trị là một chuỗi mới
// * begin là vị trí bắt đầu cắt chuỗi
// * end là vị trí kết thúc cắt chuỗi (nếu không điền thì là cắt đến hết chuỗi).
// vd

var a = 'vi anh tuan dep trai';
console.log(a.slice(12, 20))

// + substring : Cũng tương tự như hàm slice, nhưng tham số truyền vào phải lớn hơn 0 ( không được truyền vào số âm)
// vd 

var a = 'vi anh tuan dep trai';
console.log(a.substring(0, 11))

// + replace : Phương thức này cho phép chúng ta tìm kiếm và thay thế chuỗi

// vd

var a = 'vi anh tuan dep trai';
console.log(a.replace('dep trai', 'rickid'));	

// +length : dùng để lấy độ dài của chuỗi trong javascrip

// vd

var a = 'vi anh tuan dep trai';
var ham = a.length;
console.log(a.length);

// +charAt : dùng để trả về ký tự tại một vị trí được xác định trong chuỗi
// vd

var a = 'vi anh tuan dep trai';
console.log(a.charAt('0, 1'));

// > vi