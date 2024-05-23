//  연습문제 1.
//  2단 ~ 9단까지 구구단표 출력
//  - for문 버전 (*)
//  - while문 버전

console.log("구구단 - for 문");
console.log("=========================================");
for (let gu_num = 2; gu_num < 10; gu_num++) {
    for (let dan_num = 1; dan_num < 10; dan_num++) {
        console.log(gu_num + "*" + dan_num + "=" + gu_num*dan_num);
    }
}


console.log("구구단 - while 문");
console.log("=========================================");
let gu_num = 2;

while (gu_num < 10) {
    let dan_num = 1;
    while(dan_num < 10) {
        console.log(gu_num + "*" + dan_num + "=" + gu_num*dan_num);
        dan_num += 1;
    }
    gu_num += 1;
}

//  연습문제 2.
/*

*****
****
***
**
*

*/
//  - for문 버전 (*)
//  - while문 버전

console.log(" * 별찍기 - for 문");
console.log("=========================================");
for (let i = 5; i > 0; i--) {
    let stars = "*".repeat(i);
    console.log(stars); 
}

// for (i = 5; i > 0; i--) {
//     console.log("*".repeat(i));  
// }

console.log(" * 별찍기 - while 문");
console.log("=========================================");
let i = 5;
while (i > 0) {
    let stars = "*".repeat(i);
    console.log(stars); 
    i -= 1;
}

