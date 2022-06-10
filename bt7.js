function sum() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let c = +document.getElementById('c').value;

    delta = Math.pow(b, 2) - 4 * a * c;
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                document.getElementById('result').innerHTML = 'Vô số nghiệm x thỏa mãn';
            } else {
                document.getElementById('result').innerHTML = 'Phương trình vô nghiệm';
            }
        } else {
            x0 = -c / b;
            document.getElementById('result').innerHTML = 'Nghiệm x=' + x0;
        }
    } else {
        if (delta > 0) {
            x1 = (-b + Math.sqrt(delta)) / 2 * a;
            x2 = (-b - Math.sqrt(delta)) / 2 * a;
            document.getElementById('result').innerHTML = 'Nghiệm x1=' + x1 + 'Nghiệm x2=' + x2;
        } else {
            if (delta == 0) {
                x4 = -b / (2 * a);
                document.getElementById('result').innerHTML = 'Nghiệm x=' + x4;
            } else {
                document.getElementById('result').innerHTML = 'Phương trình vô nghiệm';
            }
        }

    }
}