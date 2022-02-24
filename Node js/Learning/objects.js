let student={
	firstName:"Shiv",
	lastName:"Mohan",
	age:23,
	fullName:function calculateFullName() {
		return this.firstName+" "+this.lastName;
	}
}

// accessing object property by this
console.log(student.firstName)
console.log(student.lastName)
console.log(student.age)
console.log(student.fullName())
console.log(student)


// accessing object property by this
console.log(student["firstName"])
console.log(student["lastName"])
console.log(student["age"])
console.log(student["fullName])