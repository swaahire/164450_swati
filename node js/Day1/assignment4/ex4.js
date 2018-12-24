const fs= require('fs');
fs.appendFile('myfirst.txt','Hello!!!,Lets go',function(err){
if(err)throw err;
console.log('saved!');
});