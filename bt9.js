let a=+prompt('Nhập a');
let b=+prompt('Nhập b');
let c=+prompt('Nhập c');
if ((a+b+c)>0 && (a+b)>c && (a+c)>b && (b+c)>a){
    alert('a,b,c là cạnh của một tam giác');
}else {
    alert('Nhập lại a,b,c');
}
