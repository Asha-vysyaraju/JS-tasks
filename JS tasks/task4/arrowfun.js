var arr=[1,2,3,4,5,6,7,8,9,10]
var str=['hello','how','are','you']

// a.Print odd numbers in an array
const odd=(arr)=>{
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

const capstr=(str)=>{
    var b=[]
    for(j=0;j<str.length;j++){
b.push(str[j].toUpperCase())
    }
    return b
}
console.log(capstr(str))

// c.Sum of all numbers in an array

const sum=(arr)=>{
    var s=0
    for(var i=0;i<arr.length;i++){
     s=s+arr[i]
    }
    return s
}
console.log(sum(arr))

//d.Return all the prime numbers in an array

const prime=(arr)=>{
    
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
const palinarr=(words)=>{
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