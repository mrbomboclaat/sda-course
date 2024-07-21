function algoritem(a,b){
var x=1;
var result=1;
if(x<b){
    result*=a;
    x++;
}
else{
    return a;
}
}

console.log(algoritem(2,4));
console.log(algoritem(5,5));
console.log(algoritem(4,0));
console.log(algoritem(2,1));
