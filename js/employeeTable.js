 $.getJSON("https://api.myjson.com/bins/m1jo", function(data){ //link the json data file
$.each(data, function(key, value) {
$.each(this, function(key, value){ 
$("#employees").append(
"<tr>" +"<td>" +"<div id='FirstCol'>" + value.Name + "</div>" +  "</td>" + "<td>" + value.Title + "</td>" + "<td>" + value.Department + "</td>"
+ "<td>" + value.Bio +"</td>" + "<br>" //set the table
);
});
});
}); //end function
