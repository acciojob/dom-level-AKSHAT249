//your JS code here. If required.
let root = document.getElementsByTagName("html")[0];
let level = document.getElementById("level");
let count = 1;
while(level!=root){
	level= level.parentNode;
	count+=1;
}
alert(`The level of the element is: ${count}`)