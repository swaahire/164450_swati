var fs=require('fs');


var data = fs.readFileSync('newfile.txt', 'utf8').split(' ');
var count=0;
for(var i=0;i<data.length;i++){

    if(data[i]=='john'){
        count++;  
    } 
}
console.log(count);
console.log(data);