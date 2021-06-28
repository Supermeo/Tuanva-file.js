// chuỗi > các hàm xử lí chuỗi

// *****  indexOf;

// trả giá trị về vị trí đầu tiên của chuỗi cần tìm trong chuỗi gốc, nếu trong chuỗi không có giá trị cần tìm thì nó sẽ trả về -1

// vd 

var name = ['Tuan', 'Duy', 'Kien', 'Hai', 'Duong'];
var a = name.indexOf('Kien');
console.log(a)

// ***   lastIndexOf : trả giá trị về vị trí cuối cùng của chuỗi cần tìm trong chuỗi gốc

vd
var name = ['Tuan', 'Duy', 'Kien', 'Hai', 'Duong'];
var a = name.lastIndexOf('');
console.log(a)

// *** search tìm kiếm 1 chuỗi con trong chuỗi bố và trả về vị trí ( số nó đang nằm) ( nếu không thấy sẽ trả về -1)

// vd

var a = 'toi, la, vi';
console.log(a.search('vi'))