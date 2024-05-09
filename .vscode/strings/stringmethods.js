let s="Artifixel technologies"
console.log("length=",s.length)
console.log("char at index 2",s.charAt(2))
console.log("Unicode Code Point of '1' is ",s.codePointAt(1))
let joinedString = s.concat(" soon ",s," will become MNC Company")
console.log(joinedString)
let check1 = s.endsWith("technologies")
console.log(check1)
let check2=s.startsWith("Artifixel")
console.log(check2)
console.log("Upper case String",s.toUpperCase())
console.log("Lower case string",s.toLowerCase())
let result = s.includes("fixel");
console.log(result);
let index = s.indexOf("tech");
console.log('index: ' + index); 
let index1 = s.lastIndexOf("e");
console.log('index: ' + index1); 
result = s.repeat(3);
console.log(result);
const message = "ball bat";
result = message.replace('b', 'w');
console.log(result);
result = message.replaceAll('b', 'w');
console.log(result);
const message1 = "JavaScript is fun";
result = message1.slice(0, 10);
console.log(result);
const message2 = "JavaScript::base::for::frontend::frameworks";
result = message2.split("::");
console.log(result);
const message3 = "   JAVASCRIPT IS FUN    ";
const newMessage = message3.trim().toLowerCase();
console.log(newMessage);
