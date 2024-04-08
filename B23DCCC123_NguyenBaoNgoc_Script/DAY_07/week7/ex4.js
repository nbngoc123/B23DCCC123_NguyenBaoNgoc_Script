let sum = 0;
let i = 1;
running = true;
while (running) {
    sum +=i;
    i++;
    if(sum>100){
        running = false;
    }
}
document.write(sum);
