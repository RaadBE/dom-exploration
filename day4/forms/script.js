const inputt = document.getElementById("firstname");
const FirstName = document.getElementById("display-firstname");
// const age = document.getElementById("age");
inputt.addEventListener("keyup", captureInput)


function captureInput(e) {
	const inputt = document.getElementById("firstname");
	const FirstName = document.getElementById("display-firstname");
	inputt.addEventListener("keyup", captureInput)
	FirstName.innerText = (`Hello ${e.target.value}, welcome to my website.`)
}

let hardT = document.querySelector('#a-hard-truth')
let ager = document.querySelector('#age')
ager.addEventListener("keyup", (event) => {
	if (event.target.value >= 18) {
		hardT.setAttribute('style', 'visibility:visible');
	} else {
		hardT.setAttribute('style', 'visibility:hidden');
	}

});


// var timeout = null;
let pas = document.querySelector('#pwd')
let pasC = document.querySelector('#pwd-confirm')
let newp = document.createElement("p");
let nope = document.createElement("p");
let sections = document.querySelectorAll('section')
let passW;
newp.innerText = 'passowrd to short ';
nope.innerText = 'passowrd not Matching';

console.log(sections[3])
pas.addEventListener('keyup', (event) => {
	console.log('pass:', pas.value)
	// clearTimeout(5000)
	if (event.target.value.length < 6) {
		// setTimeout(function() {
			sections[3].append(newp);
			pas.setAttribute('style', 'background-color:red');
		// }, 2000);

	}else{
		newp.remove();
		pas.setAttribute('style', 'background-color:green');
	}
})


pasC.addEventListener('keyup', (event) => {
	console.log('pasC:', pasC.value)
	console.log('pasC,Event:', event.target.value)
	console.log(event.target.value == pas.value)
	if (event.target.value.length >= 6) {
		if (event.target.value == pas.value) {
			console.log('Matching');
			nope.remove();
						pasC.setAttribute('style', 'background-color:green');

		} else {
			sections[3].append(nope);
			pasC.setAttribute('style', 'background-color:red');
		}
	}
});

let selecting = document.querySelector('select')
addEventListener("change", (event) => {
	if (selecting.value == 'dark') {
	let body = document.querySelector('body');
	 body.setAttribute("style", "background-color:black; color: white;");

	}else
	{
			let body = document.querySelector('body');

	 body.setAttribute("style", "background-color:white;");

	}

});


// pasC.addEventListener('keyup',(event) =>{
// 	if (event.target.value !=== passW) {
// 		passW = pasC.value;

// 	    // clearTimeout(5000);
// 	     setTimeout(function () {
// 	     sections[3].append(nope);
// 	     pas.setAttribute('style','background-color:red');
//      }, 2000);

// 	}
// });



// pasC.addEventListener('keyup',(event) => {	    
// 		if (passW.value !== pas.value){
// 			sections[3].append(nope);
// 			}, 2000);
// 			 setTimeout(function () {
// 			  passW = pasC.value;
// 		}        
// 		}        
// });