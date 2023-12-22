let obj1={name:"person1",age:5};
let obj2={age:5,name:"person1"};
var flag=1;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=0;
            break;
        }
    }
}
else {
    flag=0;
}
if(flag==1){
console.log("Both Objects are equal");
}
else{
   console.log("Objects are not equal");
}