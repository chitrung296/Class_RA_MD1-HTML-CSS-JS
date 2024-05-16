// I.Cách khai báo biến và cấu trúc
// console.log("Hello JavaScript!!!");
// cấu trúc khai báo biến: Từ khóa khai báo biến + Tên biến + "=" + giá trị của biến 
// var number = 101;
// number = 10;
// TKKB | TB = GT 
// console.log(number) //console.log ==> dùng để hiển thị ra màn hình console

// Quy tắc đặt tên biến:
// - Viết liền không dấu 
// - Ký tự đầu tiên phải là chữ cái 
// - Không chứa những ký tự đặc biệt như: @number,'', !
// - Tên biến sẽ phân biệt hoa, thường 
// Có 3 cách đặt tên biến:
// - camelCase : studentName ==> ưu tiên, phổ biến nhất 
// - snake_case : student_name
// - kebab-case : student-name
// - PascalCase : StudentName 

// II. Kiểu dữ liệu cơ bản
// 1. Number ==> 1,2,3,4,... ==> Khai báo ra các số
// 2. String ==> 'a' , 'b', 'c' ,... ==> Khai báo ra các chuỗi 
// 3. Boolean ==> true, false ==> Khai báo ra các giá trị đúng hoặc sai (sau này thường sd cho việc check điều kiện)
// 4. Null ==> null ==> Khai báo giá trị bằng null 
// 5. Undefined ==> undefined ==> Khai báo một biến mà không gán giá trị ==> undefined 
// 6. NaN ==> NaN (Not a number) ==> Khi tính toán với toán tử số học mà 1 trong 2 biến không phải 1 số ==> NaN
// 7. Object ==> object ==> Khai báo 1 biến là 1 đối tượng ==> object 
// 1. Number
// let number1 = 100;
// let number2 = 200;
// console.log("Number 1: " + number1);
// console.log("Sum:num1 + num2 = ", number1 + number2);
// 2. String
// let firstName = "Tran";
// let midName = "Chi";
// let lastName = "Trung";
// console.log("FullName = ", firstName,midName,lastName);
// Kiểu dữ liệu string sẽ được đặt trong cặp dấu "" hoặc '' hoặc ``.
// Kiểu dữ liệu string có thể nối chuỗi bằng dấu + 
// 3. Boolean
// let check = false;
// console.log("check = ", check);
// 4. Null
// let checkNull = null;
// console.log("checkNull = ", checkNull);
// 5. Undefined
// let checkUndefined;
// console.log("checkUndefined = ", checkUndefined);
// 6. NaN
// let checkNaN = "a" + 10;
// console.log("checkNaN = ", checkNaN);
// ====================HẾT KIỂU DỮ LIỆU=====================
// III. Toán tử 
// 1. Toán tử toán học: + , - , * , / , % , ** 
// + : phép cộng
// - : phép trừ
// * : phép nhân
// / : phép chia
// % : phép chia lấy dư
// ** : bình phương (phép lũy thừa)
// let number1 = 15;
// let number2 = 2;
// let result = number1 ** number2;
// console.log("Result = ", result)
// ==============HẾT TOÁN TỬ HỌC================

//2. Toán gán: =, += , -= , *= , /= , %=
// let number1= 15;
// let number2= 2;
// number1 %= number2;
// console.log("Result = ",number1)
// ============HẾT TOÁN TỬ GÁN===========

// 3. Toán tử so sánh: ==, ===, !=, !==, >, <, >=, <= 
// ==: so sánh giá trị 
// ===: so sánh giá trị và kiểu dữ liệu
// !=: so sánh sự khác nhau về giá trị 
// !==: so sánh sự khác nhau về giá trị và kiểu dữ liệu
// let number1 = 8;
// let number2 = '8'; 
// console.log("Result = ", number1 == number2);
// ================HẾT TOÁN TỬ SO SÁNH===========

// 4.. Toán tử logic: &&, || , !
// - Toán tử logic dùng trong các trường hợp để check điều kiện 
// &&: và ==> lấy dữ liệu cả 2 vế
// ||: hoặc ==> Chỉ lấy điều kiện 1 vế 
// !: phủ định ==> trả về giá trị ngược lại với kết quả ban đầu 
// let number1 = 8;
// let number2 = '8';
// let number3 = 12; 
// console.log(number1 <= number2 && number3 >= number1 && !(number1 < number2 || number2 <number3));
//             |true         |&&| true             |&&| false           ||     true|
//             ==> true                         &&                  !true ==> false
// ===> false

// IV. Các hàm built-in (hàm có sẵn)
// console: console.log() => in ra màn hình console 
// alert: alert() => Thông báo ra màn hình HTML
// alert("Hello JavaSript!!!!");

// prompt : prompt() => cho phép nhập dữ liệu vào ô input
// const yourName = prompt("Enter your name: ");
// console.log(yourName);
// confirm: confirm() => hiển thị thông báo cho phép xác nhận
// confirm("Are you sure?");

