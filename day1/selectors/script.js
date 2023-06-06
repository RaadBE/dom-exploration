var element = "This is an important item";
const importt = document.getElementsByClassName("important");



for (const child of importt) {
	child.setAttribute("title","Important")
}

for (const imgraad of document.images) {
	if (imgraad.className !== 'important') {
		imgraad.setAttribute('style','display:none');
	}
}