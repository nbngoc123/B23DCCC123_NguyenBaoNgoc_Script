

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




// Các cách tạo object
// Cách số 1 
hinhVuong = {soCanh: 4, soGoc: 4,canh: c} 
hinhTron = {banKinh: r}

// Cách số 2
var lucgiac = new hinhLucGiacDeu();  
student.soCanh=6;  
student.tatCaCacCanhBangNhau=true;  
student.soDinh=6;  
document.write(`So canh: ${soCanh.id} ---Luc giac deu: ${student.tatCaCacCanhBangNhau} ---So dinh: ${student.soDinh}`);  

// Cách số 3
function student(id,name,salary){  
    this.id = id;  
    this.name = name;  
    this.salary = salary;  
    }
// Cách số 4

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
	class GiangVien {
		constructor(id, name, age, tinhcach) {
			super.age = age;
			super.name = name;
			this.id = id;
			this.tinhcach = this.tinhcach;
	}
		show() {
			return info --- `Giang vien: ${super.show()} --- ma giang vien: ${this.id} ---tinh cach: ${this.tinhcach}.` // overridding
		}
	}
	
	
	
	// let person1 = new Person("Vu Van Thuong", 100);
	let person1 = new GiangVien("Vu Van Thuong", 100, "fkdsjo34j34", "Tot bung");

	console.log(person1.getName);
	console.log(person1.show());