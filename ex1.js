function sum (firstNumber, secondNumber) {
    return firstNumber + secondNumber
}
function subtract  (firstNumber, secondNumber) {
    return firstNumber - secondNumber
}
function divide (firstNumber, secondNumber) {
    if (secondNumber == 0) {
        console.log("Khong hop le");
    } else {
        return firstNumber / secondNumber
    }
}
function multiplication (firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

console.log("1. Cong 2 so");
console.log("2. Tru 2 so");
console.log("3. Nhan 2 so");
console.log("4. Chia 2 so");
console.log("5.Thoat");

do {
    let option = parseFloat(prompt("Nhap lua chon cua ban"))
    switch (option) {
        case 1: 
            firstNumber = parseFloat(prompt("Nhap so thu nhat"))
            secondNumber = parseFloat(prompt("Nhap so thu 2"))
            sum (firstNumber, secondNumber)
            console.log(sum (firstNumber, secondNumber));
            break
        case 2:
            firstNumber = parseFloat(prompt("Nhap so thu nhat"))
            secondNumber = parseFloat(prompt("Nhap so thu 2"))
            subtract (firstNumber, secondNumber)
            console.log(subtract (firstNumber, secondNumber));
            break
        case 3:
            firstNumber = parseFloat(prompt("Nhap so thu nhat"))
            secondNumber = parseFloat(prompt("Nhap so thu 2"))
            multiplication (firstNumber, secondNumber)
            console.log(multiplication(firstNumber, secondNumber))
            break
        case 4:
            firstNumber = parseFloat(prompt("Nhap so thu nhat"))
            secondNumber = parseFloat(prompt("Nhap so thu 2"))
            divide (firstNumber, secondNumber)
            console.log(divide(firstNumber, secondNumber))
            break
        case 5:
            break
}
} while (option != 5)