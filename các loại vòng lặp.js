// **************vòng lặp for
// Vòng lặp for dùng để lặp lại việc thực thi một đoạn mã nào đó một số lần.
// vòng lặp for ( lưu ý )
// break và continue
// break : code chạy đến break > dừng ( kết thúc vòng lặp)
// continue : bỏ qua 1 bước lặp ( bỏ qua 1 bước lặp không chạy bước lặp đã đánh dấu continue)

for (var i = 0; i < 10; i++) {
    console.log(i);
}

// vòng lặp for break 

for (var i = 0; i < 10; i++) {
    console.log(i);

    if(i>=5){
        break;
    }
 }

 // vòng lặp for continue

 for (var i = 0; i < 10; i++) {
    if(i % 2 ==0){
    continue
    }
    console.log(i)
    }

 
//  Vòng lặp while

// đưa ra 1 điều kiện nếu điều kiện k thỏa mãn ( hoặc sai ) > kết thúc vòng lặp, còn nếu vòng lặp đúng > tiếp tục vòng lặp
// (vòng lặp while dùng để : lặp lại việc thực hiện một đoạn mã nếu điều kiện mà mình đưa ra vẫn còn đúng)
    
var i = 0;
while(i < 10) {
    console.log(i);
    i++;
}
    
// vòng lặp do while (while và do while gần như giống nhau nhưng với do while thì điều kiện lặp như thế nào thì
// code vẫn chạy ít nhất 1 lần, còn điều kiện thỏa mãn thì tương tự như while => tạo thêm vòng lặp)
    
var i = 10;
do {
    console.log(i);
    i++;
}
while ( i > 10 && i < 12)
    