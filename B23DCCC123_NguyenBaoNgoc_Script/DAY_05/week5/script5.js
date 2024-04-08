//document.getElementById("login1").onclick = function() {
//  window.location.href = 'login.html';
//};

// Lấy tham chiếu đến nút đăng nhập và form đăng nhập
const username = document.getElementById('username');
const password = document.getElementById('password');

// Định nghĩa hàm xử lý sự kiện click

var a = parseInt(prompt("CHào bs"))
var b = parseInt(prompt("CHào bc"))

// if(a > b){
//     console.log("bs nhiều hơn bc")
// }else if(a < b){
//     console.log("bs ít ơn buổi chiều")
// }else{
//     console.log("tôi không rõ đâu nha!")
// }

switch (a>b){
    case 2:
        document.write("bs nhiều hơn bc");
        alert("số hai")
    case 5:
        document.write("bs nhiều hơn bc");
        alert("số năm")

    case 7:
        document.write("bs nhiều hơn bc");
        alert("số bảy")

        
    default:
        document.write("bs ít hơn bc");
        alert("buổi chiều")


}







