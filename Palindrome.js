let sample="aabaa";

let a="";

for(let i=0;i<sample.length;i++){
a=a+sample[i];
}

if(sample==a){
console.log("Palindrome");
}
else{
console.log("Not a Palindrome");
}