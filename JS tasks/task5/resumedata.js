var obj={

    "name":"Asha",
    "lastName":"Vysyaraju",
    "email":"asha@gmail.com",
    "dob":"29 feb 2020",
    "age":16,
    "address":{
        "streetName": "abcd",
        "city":"dhdjjjj",
        "country":"Netherlands",
        "pincode":"4523AB"
    },
    "phone":"1234567892",
    "hobbies":["dancing","crafting","cooking"],
    "experience":6,
    "Skills":{
        "languages":["Java","HTML","CSS","JS"],
        "Frameworks":["Spring","Hibernate"],
        "database":["JDBC","Oracle"],
        "versionControl":["Git","Bitbucket"],
        "buildTool":["Maven","Jenkins"],
        "appServers":["Jboss","weblogic"]

    }
}

console.log(obj)

console.log("hobbies are :")
for(var i=0;i<obj.hobbies.length;i++){
    console.log(obj.hobbies[i])
}
console.log("Address is")

for(items in obj.address){
console.log(items +" : "+ obj.address[items])
}
console.log("languages known are")
for(items of obj.Skills.languages){
    console.log(items)
}

console.log("frameworks: ")
obj.Skills.Frameworks.forEach((items)=>{
    console.log(items)
})

for(i in obj.Skills){
    console.log(i+" :"+obj.Skills[i])
}