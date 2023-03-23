var events = require('events');


function opjectinhertet(){
    this.datae="halllow"
}

var util=require('util');

 util.inherits(opjectinhertet,events);
 

opjectinhertet.prototype write=function(type,data){
    console.log(type);
    console.log(data);
    this.on(type,(data)=>{console.log(data);});
    this.emit(type,data);

}


module.exports = {opjectinhertet}