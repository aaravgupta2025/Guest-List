var names = [];
function submitname(){
  var guest = document.getElementById("name_1").value;
  names.push(guest);
document.getElementById("display_name_with_commas").innerHTML = names;
}
function show(){
 for(var k=0; k<4; k++){
  names.push("<h4> " + names[k] + "</h4>")
 }
 var remove = names.join(" ");
 document.getElementById("display_name_without_commas").innerHTML = remove;
 document.getElementById("name_button").style.display = "none";
 document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
 names.sort();
document.getElementById("display_name_with_commas").innerHTML = names;
var remove = names.join(" ");
document.getElementById("display_name_without_commas").innerHTML = remove;
}
function search(){
  var s = document.getElementById("search_2").value;
  var found = 0;
  var j;
  for(j=0; j<names.length; j++)
    {
     if (s == names[j]){
        found=found+1
      }
    }
document.getElementById("p2").innerHTML = "name found "+found+" time/s";
console.log("found name "+found+" time/s");
}