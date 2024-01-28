/**
 * TERNARY ---> THREE PARTS
 * 
 * -------------------------syntex---------------------------
 * consition ? do something when true : do something when false
 * 
 * 
 */
const age=12;
// if(age>=18){
//     console.log("you can vote");

// }
// else{
//     console.log("you can't vote .so tumii ghumi thako");
// }
//---------simple ternary------------
// age>=18 ? console.log("you can vote") : console.log("you can't vote .so tumii ghumi thako");


let price = 500;
const isLeder=true;
if(isLeder===false){
    price= 0;
}
else{
    price=price+100;
}
// console.log(price);
price=isLeder===true ? 0 : price+100;


// opotional--------------

if(isLeder===true){
    if(price>1000){
        price=price/2;

    }
}
else{
    price=price+1000;
}

// feel free to ignore this one
// price = isLeder === true ? price > 1000 ? price/2  : 0 : price+1000;
price=isLeder === true ?
    price>1000 ?
        price/2 :0
     : price+1000;
