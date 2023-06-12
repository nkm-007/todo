module.exports.getDate= getDate;


function getDate() {
var today= new Date();
 var options={
    weekday:"long",
    day: "numeric",
    month: "long"
 };

 var day=today.toLocaleDateString("hi-IN",options);

return day;
}

exports.getDay = function () {
    var today= new Date();
     var options={
        weekday:"long"
     };
    
     return today.toLocaleDateString("hi-IN",options);
    }