const age=70;
const price=500;
if(age<12){
    console.log("You can eat free");
}
else if(age>=60){
    // 50% discount
    const discount=price * 50 / 100;
    const payment=price-discount;
    console.log(payment,'you can aslo eat helf freee');
}
else{

    console.log('you can eat paid');
}


// ------gread---------------
const mark=50;
if(mark>=80){
    console.log('A+');
}
else if(mark>=70){
    console.log('A');
}
else if(mark>=60){
    console.log('A-');
}
else if(mark>=50){
    console.log('B');
}
else if(mark>=40){
    console.log('C');
}
else if(mark>=33){
    console.log('D');
}
else{
    console.log('F');
}