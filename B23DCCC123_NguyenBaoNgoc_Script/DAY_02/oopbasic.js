var des = "Trả nợ đi bạn ơi!!!"
alert(des)

// var side1 = prompt("may la ai: ")
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
// 		console.log("may dinh tinh hinh vuong a");
// 		break;
// 	case "hinhtron":
// 		console.log("may dinh tinh hinh tron a");
// 		break;
// 	default:
// 		console.log("may dinh an tao day a!");

// }

var isClose = confirm("may muon vay tien them khong")

switch (isClose) {
	case true:
		console.log("mo di may con no tao hoi nhieu day");
		break;
	default:
		console.log("may no ma tra du no cho tao di");

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

