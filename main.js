/* ví dụ về true false

let x;
x = 1;   // x la number 
x = '1';   // x la string
x = [1];   // x la array


1 === '1';  // false
1 = [1];   // false
*/


/* các loại vòng lặp

-------------------------------------vòng lặp for ----------------------------
**** Vòng lặp for dùng để lặp lại việc thực thi một đoạn mã nào đó một số lần.
vòng lặp for ( lưu ý )
break và continue
break : code chạy đến break > dừng ( kết thúc vòng lặp)
continue : bỏ qua 1 bước lặp ( bỏ qua 1 bước lặp không chạy bước lặp đã đánh dấu continue)

ví dụ :

 for (var i = 0; i < 10; i++) {
     console.log(i);
 }

 ----------------Vòng lặp For ( break )-----------------------------

 for (var i = 0; i < 10; i++) {
     console.log(i);

     if(i>=5){
         break;
     }
  }

 ------------------Vòng lặp For ( continue )--------------------------


for (var i = 0; i < 10; i++) {
    if(i % 2 ==0){
    continue
    }
    console.log(i)
    }
  
-------------------------------------vòng lặp while ----------------------------

đưa ra 1 điều kiện nếu điều kiện k thỏa mãn ( hoặc sai ) > kết thúc vòng lặp, còn nếu vòng lặp đúng > tiếp tục vòng lặp
(vòng lặp while dùng để : lặp lại việc thực hiện một đoạn mã nếu điều kiện mà mình đưa ra vẫn còn đúng)

ví dụ 

var i = 0;
while(i < 10) {
    console.log(i);
    i++;
}

vòng lặp do while (while và do while gần như giống nhau nhưng với do while thì điều kiện lặp như thế nào thì
code vẫn chạy ít nhất 1 lần, còn điều kiện thỏa mãn thì tương tự như while => tạo thêm vòng lặp)

ví dụ 

var i = 10;
do {
    console.log(i);
    i++;
}
while ( i > 10 && i < 12)

------------------------------------- chuỗi > các hàm xử lí chuỗi-----------------------------

*****  indexOf;

trả giá trị về vị trí đầu tiên của chuỗi cần tìm trong chuỗi gốc, nếu trong chuỗi không có giá trị cần tìm thì nó sẽ trả về -1

vd 

var name = ['Tuan', 'Duy', 'Kien', 'Hai', 'Duong'];
var a = name.indexOf('Kien');
console.log(a)

***   lastIndexOf : trả giá trị về vị trí cuối cùng của chuỗi cần tìm trong chuỗi gốc

vd
var name = ['Tuan', 'Duy', 'Kien', 'Hai', 'Duong'];
var a = name.lastIndexOf('');
console.log(a)

*** search tìm kiếm 1 chuỗi con trong chuỗi bố và trả về vị trí ( số nó đang nằm) ( nếu không thấy sẽ trả về -1)

vd

var a = 'toi, la, vi';
console.log(a.search('vi'))

----------------------------------------- chuỗi > các hàm cắt chuỗi-------------------------------------------------------------------

*** slice : cắt chuỗi và trả về giá trị là một chuỗi mới
* begin là vị trí bắt đầu cắt chuỗi
* end là vị trí kết thúc cắt chuỗi (nếu không điền thì là cắt đến hết chuỗi).
vd

var a = 'vi anh tuan dep trai';
console.log(a.slice(12, 20))

+ substring : Cũng tương tự như hàm slice, nhưng tham số truyền vào phải lớn hơn 0 ( không được truyền vào số âm)
vd 

var a = 'vi anh tuan dep trai';
console.log(a.substring(0, 11))

+ replace : Phương thức này cho phép chúng ta tìm kiếm và thay thế chuỗi

vd

var a = 'vi anh tuan dep trai';
console.log(a.replace('dep trai', 'rickid'));	

+length : dùng để lấy độ dài của chuỗi trong javascrip

vd

var a = 'vi anh tuan dep trai';
var ham = a.length;
console.log(a.length);

+charAt : dùng để trả về ký tự tại một vị trí được xác định trong chuỗi
vd

var a = 'vi anh tuan dep trai';
console.log(a.charAt('0, 1'));

> vi

----------------------------------------- Hàm xử lí mảng-------------------------------------------------------------------

+ Hàm array.push : hàm này sẽ thêm một phần tử vào cuối mảng

vd 

var a = ['vi anh tuan'];
  a.push('dep trai');
  console.log(a)

=> vi anh tuan dep trai

+ array.pop() : ngược với hàm array.push, hàm này có tác dụng xóa đi phần tử cuối cùng trong mảng

vd 

var a = ['vi', 'anh', 'tuan', 'dep', 'trai'];
a.pop();
console.log(a)

=> vi anh tuan dep

Hàm array.shift : hàm cắt phần tử đầu tiên của mảng, sau đó dồn các phần tử phía sau xuống một bậc

vd 

var a = ['vi', 'anh', 'tuan', 'dep', 'trai'];
a.shift();
console.log(a);


=> anh tuan dep trai

Hàm array.unshift : thêm một phần tử vào vị trí đầu tiên của mảng, đồng thời đẩy các phẩn từ phía sau lên một bậc

vd

var a = ['vi', 'anh', 'tuan', 'dep', 'trai'];
a.unshift('hello');
console.log(a)

=> hello vi anh tuan dep trai;

+ Hàm array.slice : hàm dùng để lấy một số phần tử con trong mảng. Có hai tham số truyền vào như sau: slice(start, end)

vd

var a = ['vi', 'anh', 'tuan', 'dep', 'trai'];
console.log(a.slice(1, 2));

+ Hàm array.splice : hàm splice gần giống nhàm slice ( khác = cắt hết tất cả phần tử từ phần đánh dấu, khi cắt sẽ ảnh hưởng đến mảng ban đầu)

vd

var a = ['vi', 'anh', 'tuan', 'dep', 'trai'];
a.splice(1, 2);
console.log(a);

=> vi dep trai

2 hàm slice và splice đều giống nhau ở điểm là dùng đề cắt chuỗi =======================================================

+ Hàm array.reverse : hàm đảo ngược các phẩn tử (đầu > cuối, cuối > đầu)

vd

var a = ['vi', 'anh', 'tuan', 'dep', 'trai'];
a.reverse(3);
console.log(a);


=> trai dep tuan anh vi


+ Hàm array.concat : hàm dùng để nối hai mảng với nhau và trả về một mảng gồm tổng số phần tử của hai mảng đó

vd

var a = ['vi', 'anh', 'tuan'];
var b = ['dep', 'trai'];
var c = a.concat(b);
console.log(c)

=> vi anh tuan dep trai


*/

