// Initialize the students array outside the function
let studentsArray = [];

console.log("1. Nhap danh sach sinh vien");
console.log("2. Hien thi danh sach sinh vien");
console.log("3. Tim sinh vien theo ten");
console.log("4. Xoa sinh vien khoi danh sach");
console.log("5. Thoat");

// Function to add students
function addStudent() {
    let n = parseInt(prompt("Nhap so luong sinh vien"));
    for (let i = 0; i < n; i++) {
        let studentName = prompt(`Nhap ten cua sinh vien thu ${i+1}`);
        studentsArray.push(studentName);
    }
    console.log(`Da them ${n} sinh vien vao danh sach.`);
}

// Function to display students
function displayStudents() {
    if (studentsArray.length === 0) {
        console.log("Danh sach sinh vien trong.");
        return;
    }
    
    console.log("Danh sach sinh vien:");
    for (let i = 0; i < studentsArray.length; i++) {
        console.log(`${i+1}. ${studentsArray[i]}`);
    }
}

// Function to search for a student by name
function searchStudent() {
    if (studentsArray.length === 0) {
        console.log("Danh sach sinh vien trong.");
        return;
    }
    
    let searchName = prompt("Nhap ten sinh vien can tim:");
    let found = false;
    
    for (let i = 0; i < studentsArray.length; i++) {
        if (studentsArray[i].toLowerCase().includes(searchName.toLowerCase())) {
            console.log(`Tim thay sinh vien: ${studentsArray[i]} tai vi tri ${i+1}`);
            found = true;
        }
    }
    
    if (!found) {
        console.log(`Khong tim thay sinh vien co ten "${searchName}"`);
    }
}

// Function to delete a student
function deleteStudent() {
    if (studentsArray.length === 0) {
        console.log("Danh sach sinh vien trong.");
        return;
    }
    
    let index = parseInt(prompt("Nhap so thu tu sinh vien can xoa (1, 2, 3, ...):")) - 1;
    
    if (index >= 0 && index < studentsArray.length) {
        let deletedName = studentsArray[index];
        studentsArray.splice(index, 1);
        console.log(`Da xoa sinh vien "${deletedName}" khoi danh sach.`);
    } else {
        console.log("So thu tu khong hop le!");
    }
}

// Main program
let option;
do {
    option = parseInt(prompt("Nhap lua chon cua ban (1-5):"));
    switch (option) {
        case 1:
            addStudent();
            break;
        case 2:
            displayStudents();
            break;
        case 3:
            searchStudent();
            break;
        case 4:
            deleteStudent();
            break;
        case 5:
            console.log("Chuong trinh ket thuc.");
            break;
        default:
            console.log("Lua chon khong hop le. Vui long chon tu 1-5.");
            break;
    }
} while (option !== 5);
