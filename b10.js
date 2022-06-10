function money() {
    let a = document.getElementById('amount').value;
    if (a > 0 && a <= 50) {
        document.getElementById('result').innerHTML='Bạn đang ở bậc 1 và số tiền cần trả là' + a * 1600;
    } else if (a > 50 && a <= 100) {
        document.getElementById('result').innerHTML='Bạn đang ở bậc 2 và số tiền cần trả là' + (80000 + 1700 * (a - 50));
    } else if (a > 100 && a <= 200) {
        document.getElementById('result').innerHTML='Bạn đang ở bậc 3 và số tiền cần trả là' + (165000 + 2000 * (a - 100));
    } else if (a > 200 && a <= 300) {
        document.getElementById('result').innerHTML='Bạn đang ở bậc 4 và số tiền cần trả là' + (365000 + 2500 * (a - 200));
    } else if (a > 300 && a <= 400) {
        document.getElementById('result').innerHTML='Bạn đang ở bậc 5 và số tiền cần trả là' + (615000 + 2800 * (a - 300));
    } else if (a > 400) {
        document.getElementById('result').innerHTML='Bạn đang ở bậc 6 và số tiền cần trả là' + (895000 + 2900 * (a - 400));
    } else {
        document.getElementById('result').innerHTML='Xin hãy nhập đúng số tiền';
    }
}