let sum = 0;
for (let i = 0; i < 11; i+=2){
    sum += i;
}
document.write("Tổng là: " + sum);

let sum2 = 0;
for (let i = 0; i < 11; i++){
    if (i%2==0){
        sum2 += i;
    }
}
document.write("Tổng là: " + sum2);
