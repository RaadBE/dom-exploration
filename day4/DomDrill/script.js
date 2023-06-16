  let parent = document.querySelector('ul');
  let  impor = document.getElementsByClassName('important')

  let firstChildd = parent.childNodes;
  for (var i = 0; i < firstChildd.length; i++) {
  	let firstChildd = parent.childNodes;
  	// console.log(firstChildd);
  	firstChildd[i].onclick = function(event) {
  		alert(event.target.textContent);
  		if (event.target.textContent == "Fast and Furious") {
  			alert('family. It s not about car, its about family')
  		}
  	};
  	if (firstChildd[i].textContent === "Fast and Furious") {
  		firstChildd[i].classList.add('important');
  		if (i !== 0) {
  			parent.insertBefore(firstChildd[i], firstChildd[1]);
  		}
  	} else if (firstChildd[i].nodeType == 1) {
  		// console.log(firstChildd[i].innerHTML)
  	}
  	for (let j = i + 1; j < firstChildd.length; j++) {
  		if (firstChildd[i].isEqualNode(firstChildd[j])) {
  			parent.removeChild(firstChildd[j]);
  		}
  	}
  }


  let div = document.createElement('div');
  let prentBody = document.querySelector('body');
  prentBody.insertBefore(div, parent)
  body = document.querySelector('body');
  let newSection = document.createElement('SELECT');
  let firstOp = document.createElement("option");
  let seconedOp = document.createElement("option");
  firstOp.setAttribute('value', 'important franchises')
  // firstOp.innerText= 'important franchises';
  seconedOp.setAttribute('value', 'normal franchises')
  var nod = document.createTextNode("important franchises");
  var nod2 = document.createTextNode('normal franchises');
  firstOp.append(nod)
  seconedOp.append(nod2)
  div.append(newSection);
  newSection.append(firstOp, seconedOp)
  body.addEventListener("keyup", (event) => {
  	if (event.key == 'r') {
  		for (var i = 0; i < firstChildd.length; i++) {
  			let randomNumber = Math.floor(Math.random() * 11);
  			parent.insertBefore(firstChildd[randomNumber], firstChildd[2]);
  		}
  	}
  		 if(event.key == 'd') {
  			const node = document.querySelector(".important");
			const clone = node.cloneNode(true);
			parent.insertBefore(clone,parent.firstChild);
  			console.log(clone)
  		}
  });
// body.addEventListener("change", function (event) {
//   if (event.target.value === firstOp) {
//     if (louis.nodeType == 1 && louis.className === 'important') {
//       louis.style.display = 'block';
//       console.log('Important selected');
//     }
//   } else if (event.target.value === seconedOp) {
//     if (louis.nodeType == 1 && louis.className !== 'important') {
//       louis.style.display = 'none';
//       console.log('Other option selected');
//     }
//   }
// });

// let body = document.body;
// let firstOp = "important"; // substitute with the value of your 'important' option
// let seconedOp = "other"; // substitute with the value of your 'other' option
// let body = document.body;

let louis = document.getElementsByClassName('important'); // gets the collection of elements with the class 'important'

body.addEventListener("change", function (event) {
  Array.from(firstChildd).forEach(function(element) {
    if (element.nodeType == 1) {
      if (event.target.value === firstOp.value) {
        if (element.className === 'important') {
          element.style.display = 'block'; // Show if it's important
        } else {
          element.style.display = 'none'; // Hide if it's not important
        }
        console.log('Family first');
      } else if (event.target.value === seconedOp.value) {
        element.style.display = 'block'; // Show all
        console.log('Others');
      }
    }
  });
});
