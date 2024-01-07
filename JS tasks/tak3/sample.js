var str="guvi geek"

  var rstr=[]
    for(i=0;i<str.length;i++){
        var c=str[i]
    console.log(c)
        if(c=='a' || c=='e'|| c=='i'|| c=='0'|| c=='u'|| c=='A' || c=='E'|| c=='I'|| c=='O'|| c=='U'|| c==' '){
         
rstr.push(c)
        }
       
    }
    console.log(rstr.join(""))