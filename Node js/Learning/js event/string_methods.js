let str="Shiv,$Mohan,%Chaudhary";
console.log(str.slice(6,11));
console.log(str.slice(-11,-6));
console.log(str.slice(6)); // all strings from 6th index
console.log(str.slice(-11)); // counting from end
console.log(str.substring(6,11));
newText=str.replace("Mohan","Def");
console.log(newText);
console.log(newText.toUpperCase());