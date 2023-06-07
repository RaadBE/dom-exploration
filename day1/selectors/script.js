var element = "This is an important item";
const importt = document.getElementsByClassName("important");
var randomColor = Math.floor(Math.random()*16777215).toString(16);



for (const child of importt) {
	child.setAttribute("title","This is an important item")

}

for (const imgraad of document.images) {
	if (imgraad.className !== 'important') {
		imgraad.setAttribute('style','display:none');
	}
}

const span = document.querySelectorAll("p");
for(const hold of span) {
  if (hold.className == true) {
    hold.setAttribute('style', `color: none`);

  }else if (hold.className == false){
  let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  hold.setAttribute('style', `color: ${randomColor}`);
}
console.log(hold);
  console.log('class of pargh is :', hold.className);
}



