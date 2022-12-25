
// JSON OBJECT with Resume Information
json_obj={
    student_name:"thilack",
    college:"NITK",
    degree:"B.Tech",
    specialization:"Civil Engineering",
    subjects:["Soil mechanics","Structural engineering","Surveying","Engineering drawing","Water resource","Environmental Engineering","Engineering Mathematics","principles of Management",{engineeringSubjects:["physics","chemistry","maths","ECE","EEE","Computer Science","drawing","Engineering Mechanics"]}],
    grade:{
        CGPA:7.76
    },
    workexperience:2,
    company:"DXC Technology",
    role:"software engineer",
    technicalSkills:["HTML","CSS","JS","NODE.js","React.js","python","MongoDB","SQL","RDBMS","DataStructures"]
};
// JSON.stringify will convert the object into JSON format
const string1=JSON.stringify(json_obj);
const obj=JSON.parse(string1);
console.log(string1);
console.log(obj);


// usage of different loops on JSON object
const ObjKeys=Object.keys(json_obj);
const ObjValues=Object.values(json_obj);
const objLen=Object.keys(json_obj).length;


// for loop

for(let i=0;i<objLen;i++){
    console.log(`${ObjKeys[i]}:${ObjValues[i]}`);
}


// for in loop
for(const index in json_obj){
    console.log(`${index}:${json_obj[index]}`);
}


// for of loop
for(const value of ObjKeys){
    console.log(`${value}:${json_obj[value]}`);
}

// for each

ObjKeys.forEach((key)=>{
    console.log(`${key}:${json_obj[key]}`);
})