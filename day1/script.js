 document.title = "Modifying the DOM";
 document.body.style.backgroundColor = "rgb(22,55,999)";
const body = document.getElementsByTagName('body')[0];

for (const child of body.children) {
  console.log(child.tagName);
}
