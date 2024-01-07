var arr=[1,2,3,4,5,6,7,8,9,10]
var str=['hello','how','are','you']

// a.Print odd numbers in an array
const odd=function(arr){
    var a=[]
    for(var i in arr){
        if(i%2!=0){
            a.push(i)
        }
    }
    return a
}
console.log(odd(arr))

// b.Convert all the strings to title caps in a string array

const capstr=function(str){
    var b=[]
    for(j=0;j<str.length;j++){
b.push(str[j].toUpperCase())
    }
    return b
}
console.log(capstr(str))

// c.Sum of all numbers in an array

const sum=function(arr){
    var s=0
    for(var i=0;i<arr.length;i++){
     s=s+arr[i]
    }
    return s
}
console.log(sum(arr))

//d.Return all the prime numbers in an array

const prime=function(arr){
    
    var primes=[]
    for(var num in arr){
        var flag=0
        if(num!=0 && num!=1){
            for(var i=2;i<num;i++){
                if(num%i==0){
                    flag=1
                    break;
                }
            }
            if(flag==0){
                primes.push(num)
            }
        }
        
    }
    return primes
}
console.log(prime(arr))

// Return all the palindromes in an array
var words=['madam','hi','nitin','huh','abba','hello']
const palinarr=function(words){
    var palin=[]
    for(var item of words){
        var rev=item.split("").reverse().join("")
        if(rev==item){
        palin.push(item)
      
        }

    }
    return palin
}
console.log(palinarr(words))

// f.Return median of two sorted arrays of the same size.
var ar1=[1,12,15,26,38]
var ar2=[2,13,17,30,45]
var n1 =ar1.length
var n2=ar2.length
if(n1==n2){
    var merdian=function(ar1,ar2,n){
    var ar=ar1.concat(ar2)

var s=ar.sort((a,b)=>{return a-b})
return (s[n]+s[n-1])/2
    }
}


console.log(merdian(ar1,ar2,n1))

//Remove duplicates from an array
var arr1=[1,2,1,5,7,9,2,9,10]
const dup=function(arr1){
    var duparr=[]
    for(num of arr1){
        if(!duparr.includes(num)){
            duparr.push(num)
        }

    }
    return duparr
}
console.log(dup(arr1))

//Rotate an array by k times
var k=3
//var arr=[1,2,3,4,5,6,7,8,9,10]
var n=arr.length
const rotate=function(arr,n,k){
    var x=arr.slice(0,n-k)
    var y=arr.slice(n-k)
    return y.concat(x)
}
console.log(rotate(arr,n,k))
