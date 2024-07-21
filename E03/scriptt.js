//my first array
var t=[0,2,3,4,5,6,7,8,9,10];

 //hiq elementin e fundit te array
t.pop();

// shto element t ri ne fund te array
t.push(11);
console.log(t);


// ndrysho vleren e elementit te dyte te arrayt
t[1]=34;
console.log(t);

//ndrysho vleren e trete te array me loop
for(let i=0;i<=t.length;i+=3){
        t[i]=1;
         
}

 console.log(t);