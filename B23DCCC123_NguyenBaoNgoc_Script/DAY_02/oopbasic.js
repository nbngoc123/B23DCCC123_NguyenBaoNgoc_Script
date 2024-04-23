var des = "xin chào"
alert(des)

// var side1 = prompt("Enter: ")
// console.log(side1)

function calculateVuong(side) {
	var hinhvuong = side**2
	return hinhvuong
}
function calculateTron(side) {
	var hinhtron = 3.14*(side**2)
	return hinhtron
}
function getShape(inp) {
	var result = 0 
	if (inp = "hinhvuong") {
		result = calculateVuong(side1)
	} else if (inp = "hinhtron") {
		result = calculateTron(side1) 
	} else {
		alert("No supported compute" + inp)
		return
	}
	return result
}


// switch (side1) {
// 	case "hinhvuong":
// 		console.log("hinh vuong");
// 		break;
// 	case "hinhtron":
// 		console.log(" hinh tron ");
// 		break;
// 	default:
// 		console.log("no supported");

// }

var isClose = confirm("xac nhan")

switch (isClose) {
	case true:
		console.log("t");
		break;
	default:
		console.log("m");

}


// oop basic
class Person {
	constructor(name, age) {
		this.name= name;
		this.age= age;
	}
	get getName() {
		return this.name;
	}
	get getAge() {
		return this.age;
	}

	show() {
		return `Tối tên là: ${this.name}, ${this.age} tuổi`;
	}
}    
class SinhVien {
	constructor(id, name, age) {
		super.age = age;
		super.name = name;
		this.id = id;
}
	show() {
		return info --- `Sinh vien: ${super.show()} --- ma sinh vien: ${this.id} `
	}
}



let person1 = new Person("Nguyen Van A", 18);
console.log(person1.getName);
console.log(person1.show());
