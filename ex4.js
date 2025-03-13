function geometryMenu() {
    let running = true;
    
    while (running) {
        console.log("Chon chuc nang:\n1. Tinh dien tich hinh tron\n2. Tinh chu vi hinh tron\n3. Tinh dien tich hinh chu nhat\n4. Tinh chu vi hinh chu nhat\n5. Thoat");
        let choice = prompt("Nhap lua chon cua ban: ");
        
        if (choice === "5") {
            running = false;
            console.log("Thoat chuong trinh.");
            break;
        }
        
        let result;

        switch (choice) {
            case "1":
                let radius = parseFloat(prompt("Nhap ban kinh hinh tron: "));
                if (radius > 0) {
                    result = Math.PI * Math.pow(radius, 2);
                    console.log(`Dien tich hinh tron: π × ${radius}² = ${result.toFixed(2)}`);
                } else {
                    console.log("Ban kinh khong hop le.");
                }
                break;
            case "2":
                radius = parseFloat(prompt("Nhap ban kinh hinh tron: "));
                if (radius > 0) {
                    result = 2 * Math.PI * radius;
                    console.log(`Chu vi hinh tron: 2 × π × ${radius} = ${result.toFixed(2)}`);
                } else {
                    console.log("Ban kinh khong hop le.");
                }
                break;
            case "3":
                let length = parseFloat(prompt("Nhap chieu dai hinh chu nhat: "));
                let width = parseFloat(prompt("Nhap chieu rong hinh chu nhat: "));
                if (length > 0 && width > 0) {
                    result = length * width;
                    console.log(`Dien tich hinh chu nhat: ${length} × ${width} = ${result}`);
                } else {
                    console.log("Kich thuoc khong hop le.");
                }
                break;
            case "4":
                length = parseFloat(prompt("Nhap chieu dai hinh chu nhat: "));
                width = parseFloat(prompt("Nhap chieu rong hinh chu nhat: "));
                if (length > 0 && width > 0) {
                    result = 2 * (length + width);
                    console.log(`Chu vi hinh chu nhat: 2 × (${length} + ${width}) = ${result}`);
                } else {
                    console.log("Kich thuoc khong hop le.");
                }
                break;
            default:
                console.log("Lua chon khong hop le. Vui long chon lai.");
                break;
        }
    }
}

geometryMenu();
