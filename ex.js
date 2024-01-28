// -------------task 1=============>

const price=500;
if(price>=500){
    console.log("you give free coke");

}
else{
    console.log('coke price 30 tk');
}



// task 2-------------->
const weight = 50;
const height = 1.60;
const BMI= weight/height**2;
if(BMI<18.5){
    console.log("underwight");
}
else if(BMI<=24.9){
    console.log('your are normal');

}
else if(BMI<=29.9){
    console.log('you are overwight');

}
else{
    console.log('your are obses');
}



// -----------task 3------------------->
var marks = 51;
if(marks>=90){
    console.log("A");
}
else if(marks>=80){
    console.log("B");
}
else if(marks>=70){
    console.log("C");
}
else if(marks>=60){
    console.log("D");
}
else{
    console.log("F");
}



// ---------task 4--------------------=========>
const myScore =90;
const fdScore = 60;
if(myScore>80){
    if(fdScore>80){
        console.log("go for a lunch");
    }
    else if(fdScore>=60){
        console.log("good luck next time");
    }
    else if(fdScore>=40){
        console.log("friends massage unseen");
    }
    else{
        console.log("block my friend");
    }

}
else{
    console.log("go to home and sleep and act sad");
}


// ==========task 5============>
const num1=50;
const num2=60;
let result;

// if(num1>num2){
//      result=num1*2;
// }
// else{
//     result=num1+num2;
// }
// console.log(result);


// ternery------------
num1>num2 ? console.log(num1*2) : console.log(num1+num2);



//<------------ task 6------------------>
let age=29;
let isPrice=800;
if(age<10){
    console.log("free");
    
}
else if(age<30){
    // 50% disount
    isPrice=isPrice*50/100;
    console.log(isPrice);

}
else if(age>=60){
    // 15% disount
    isPrice=isPrice*15/100;
    console.log(isPrice);

}
else{
    console.log(isPrice);
}
