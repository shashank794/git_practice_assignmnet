let sample="aabaa";

let a="";

for(let i=sample.length-1 ;i>=0;i--){
a=a+sample[i];
}

if(sample==a){
console.log("Palindrome");
}
else{
console.log("Not a Palindrome");
}