function money() {
    let a = document.getElementById('amount').value;
    if (a > 0 && a <= 5000000) {
        document.getElementById('result').innerHTML = 'Tiền thuế bạn cần đóng là' + ((a * 5) / 100);
    } else if (a > 5000000 && a <= 10000000) {
        document.getElementById('result').innerHTML = 'Tiền thuế bạn cần đóng là' + ((a * 10) / 100);
    } else if (a > 10000000 && a <= 18000000) {
        document.getElementById('result').innerHTML = 'Tiền thuế bạn cần đóng là' + ((a * 15) / 100);
    } else if (a > 18000000 && a <= 32000000) {
        document.getElementById('result').innerHTML = 'Tiền thuế bạn cần đóng là' + ((a * 20) / 100);
    } else if (a > 32000000 && a <= 52000000) {
        document.getElementById('result').innerHTML = 'Tiền thuế bạn cần đóng là' + ((a * 25) / 100);
    } else if (a > 52000000 && a <= 80000000) {
        document.getElementById('result').innerHTML = 'Tiền thuế bạn cần đóng là' + ((a * 30) / 100);
    } else {
        document.getElementById('result').innerHTML = 'Tiền thuế bạn cần đóng là' + ((a * 35) / 100);
    }
}