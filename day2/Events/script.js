const _initTime = Date.now();

const myli = document.querySelector('ul');
const bodyy = document.querySelector('body');
const curr = document.querySelector('.displayedsquare-wrapper');

let newli = document.createElement('li');
let divv = document.createElement('div');
let empty = document.createTextNode("");

let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());

  const curr = document.querySelector('.displayedsquare-wrapper');
  let divv = document.createElement('div');
  curr.append(divv);
  divv.classList.add('actionsquare', e.target.classList[1]);
  divv.onclick = function(){
    alert(e.target.classList[1]);
  };


  let newli = document.createElement('li');
  myli.append(newli, getElapsedTime(), ': New ' + e.target.classList[1], ' Created');

  bodyy.addEventListener("keypress", function(event) {
    if (event.key == 'I') {
      newli.remove();
      myli.innerHTML = "";
    } else if (event.key == 's') {
      divv.remove();
    } else if (event.key == 'n') {
      let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
      bodyy.setAttribute('style', `background-color: ${randomColor}`);
    }
    console.log(event.key);
  });
};

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}
