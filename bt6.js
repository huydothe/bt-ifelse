function sum() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;

    if (a == 0) {
        if (b == 0) {
            document.getElementById('result').innerHTML = "Vo so  nghiem x thoa man";
        } else {
            document.getElementById('result').innerHTML = "Vo nghiem";
        }
    } else {
        x = -b / a;
        document.getElementById('result').innerHTML = "Nghiem x = " +  x;
    }
}