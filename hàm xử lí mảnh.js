// Hàm xử lí mảng

// + Hàm array.push : hàm này sẽ thêm một phần tử vào cuối mảng

// vd 

var a = ['vi anh tuan'];
  a.push('dep trai');
  console.log(a)

// => vi anh tuan dep trai

// + array.pop() : ngược với hàm array.push, hàm này có tác dụng xóa đi phần tử cuối cùng trong mảng

// vd 

var a = ['vi', 'anh', 'tuan', 'dep', 'trai'];
a.pop();
console.log(a)

// => vi anh tuan dep

// Hàm array.shift : hàm cắt phần tử đầu tiên của mảng, sau đó dồn các phần tử phía sau xuống một bậc

// vd 

var a = ['vi', 'anh', 'tuan', 'dep', 'trai'];
a.shift();
console.log(a);


// => anh tuan dep trai

// Hàm array.unshift : thêm một phần tử vào vị trí đầu tiên của mảng, đồng thời đẩy các phẩn từ phía sau lên một bậc

// vd

var a = ['vi', 'anh', 'tuan', 'dep', 'trai'];
a.unshift('hello');
console.log(a)

// => hello vi anh tuan dep trai;

// + Hàm array.slice : hàm dùng để lấy một số phần tử con trong mảng. Có hai tham số truyền vào như sau: slice(start, end)

// vd

var a = ['vi', 'anh', 'tuan', 'dep', 'trai'];
console.log(a.slice(1, 2));

// + Hàm array.splice : hàm splice gần giống nhàm slice ( khác = cắt hết tất cả phần tử từ phần đánh dấu, khi cắt sẽ ảnh hưởng đến mảng ban đầu)

// vd

var a = ['vi', 'anh', 'tuan', 'dep', 'trai'];
a.splice(1, 2);
console.log(a);

// => vi dep trai

// 2 hàm slice và splice đều giống nhau ở điểm là dùng đề cắt chuỗi

// + Hàm array.reverse : hàm đảo ngược các phẩn tử (đầu > cuối, cuối > đầu)

// vd

var a = ['vi', 'anh', 'tuan', 'dep', 'trai'];
a.reverse(3);
console.log(a);


// => trai dep tuan anh vi


// + Hàm array.concat : hàm dùng để nối hai mảng với nhau và trả về một mảng gồm tổng số phần tử của hai mảng đó

// vd

var a = ['vi', 'anh', 'tuan'];
var b = ['dep', 'trai'];
var c = a.concat(b);
console.log(c)

// => vi anh tuan dep trai
