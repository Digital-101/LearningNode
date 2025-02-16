sum = 0;
for (let e = 1; e < 31; e++) {
    if (e % 2 == 0 && e >= 10) {
        sum += e;
    }    
}
console.log("The total sum is: " + sum);