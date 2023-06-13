const collection = [
  {
    title: 'Inception',
    releaseDate: 'July 16, 2010',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    genres: ['Sci-Fi', 'Action'],
    description: 'Inception is a mind-bending science fiction film directed by Christopher Nolan. It takes place in a future where technology allows people to enter the dreams of others. Dom Cobb, a skilled thief, is tasked with the ultimate challenge of planting an idea in someone\'s mind through dreams. As the layers of dreams unfold, Cobb and his team face intense challenges and encounters that blur the line between dreams and reality. With stunning visuals, a complex narrative, and exceptional performances, Inception explores themes of reality, perception, and the power of the human mind.',
    trailerLink: 'https://example.com/inception-trailer',
    poster: 'https://cinedweller.com/wp-content/uploads/2019/12/Inception-teaser-1000.jpg'
  },
  {
    title: 'Bleach',
    releaseDate: 'July 20, 2018',
    director: 'Shinsuke Sato',
    cast: ['Sota Fukushi', 'Hana Sugisaki', 'Ryo Yoshizawa'],
    genres: ['Action', 'Fantasy'],
    description: 'Bleach is a live-action adaptation of the popular manga and anime series. It follows Ichigo Kurosaki, a high school student who obtains the powers of a Soul Reaper. With his newfound abilities, Ichigo battles evil spirits and protects the living world from supernatural threats. The film faithfully captures the essence of the original story, featuring stunning action sequences, compelling characters, and a thrilling narrative that explores themes of honor, sacrifice, and the balance between the human and spirit realms.',
    trailerLink: 'https://example.com/bleach-trailer',
    poster: 'https://cinedweller.com/wp-content/uploads/2019/12/Inception-teaser-1000.jpg'
  },
  {
    title: 'The Adjustment Bureau',
    releaseDate: 'March 4, 2011',
    director: 'George Nolfi',
    cast: ['Matt Damon', 'Emily Blunt', 'Anthony Mackie'],
    genres: ['Sci-Fi', 'Romance'],
    description: 'The Adjustment Bureau is a romantic science fiction thriller that delves into the intricate workings of fate and free will. The film follows David Norris, a rising political star who unexpectedly meets Elise, a captivating dancer. Their connection defies the predetermined plans of a mysterious organization known as The Adjustment Bureau. As David and Elise fight for their love, they navigate through a hidden world governed by powerful forces. With its thought-provoking exploration of destiny, gripping performances, and a mix of romance and suspense, The Adjustment Bureau keeps audiences captivated until the very end.',
    trailerLink: 'https://example.com/adjustmentbureau-trailer',
    poster: 'https://cinedweller.com/wp-content/uploads/2019/12/Inception-teaser-1000.jpg'
  },
  {
    title: 'The Avengers',
    releaseDate: 'May 4, 2012',
    director: 'Joss Whedon',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    genres: ['Action', 'Adventure'],
    description: 'The Avengers is an epic superhero film that brings together Marvel\'s iconic characters, including Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye. When Earth faces a threat that no single hero can handle, Nick Fury, the director of S.H.I.E.L.D., assembles the Avengers to save the world. The film combines thrilling action, witty dialogue, and dynamic character interactions. With its grand-scale battles, intricate storylines, and a perfect blend of humor and drama, The Avengers showcases the power of teamwork and the triumph of good over evil.',
    trailerLink: 'https://example.com/avengers-trailer',
    poster: 'https://cinedweller.com/wp-content/uploads/2019/12/Inception-teaser-1000.jpg'
  },
  {
    title: 'The Matrix Reloaded',
    releaseDate: 'May 15, 2003',
    director: 'The Wachowskis',
    cast: ['Keanu Reeves', 'Carrie-Anne Moss', 'Laurence Fishburne'],
    genres: ['Sci-Fi', 'Action'],
    description: 'The Matrix Reloaded is the second installment in The Matrix trilogy. In this mind-bending sequel, Neo, Trinity, and Morpheus continue their fight against the machines that control humanity within a simulated reality. As they face new threats, they uncover deeper secrets about the nature of the Matrix and their own existence. The film combines groundbreaking visual effects, thrilling action sequences, and philosophical themes. With its thought-provoking narrative, intense fight scenes, and iconic moments, The Matrix Reloaded further expands the boundaries of the Matrix universe.',
    trailerLink: 'https://example.com/matrixreloaded-trailer',
    poster: 'https://cinedweller.com/wp-content/uploads/2019/12/Inception-teaser-1000.jpg'
  },
  {
    title: 'Naruto the Movie: Ninja Clash in the Land of Snow',
    releaseDate: 'August 21, 2004',
    director: 'Tensai Okamura',
    cast: ['Junko Takeuchi', 'Noriaki Sugiyama', 'Yuko Kaida'],
    genres: ['Anime', 'Action'],
    description: 'Naruto the Movie: Ninja Clash in the Land of Snow is the first Naruto film, set within the popular Naruto anime and manga series. The story follows Naruto Uzumaki and his friends as they embark on a mission to protect a popular actress from the Land of Snow. Facing dangerous adversaries, Naruto and his companions must utilize their ninja skills to overcome the obstacles that lie ahead. The movie captures the essence of the Naruto series, combining action-packed sequences, heartfelt moments, and the themes of friendship, determination, and the pursuit of dreams.',
    trailerLink: 'https://example.com/narutomovie1-trailer',
    poster: 'https://cinedweller.com/wp-content/uploads/2019/12/Inception-teaser-1000.jpg'
  },
  {
    title: 'Ocean\'s Eleven',
    releaseDate: 'December 7, 2001',
    director: 'Steven Soderbergh',
    cast: ['George Clooney', 'Brad Pitt', 'Julia Roberts'],
    genres: ['Crime', 'Thriller'],
    description: 'Ocean\'s Eleven is a stylish heist film that follows a charismatic group of professional thieves as they plan and execute a daring casino robbery in Las Vegas. Led by Danny Ocean, the crew orchestrates an elaborate scheme to infiltrate the vault of three prominent casinos during a major boxing event. With its sharp dialogue, clever twists, and an ensemble cast delivering charismatic performances, Ocean\'s Eleven provides an entertaining blend of wit, suspense, and high-stakes thrills.',
    trailerLink: 'https://example.com/oceans11-trailer',
    poster: 'https://cinedweller.com/wp-content/uploads/2019/12/Inception-teaser-1000.jpg'
  },
  {
    title: 'Lucy',
    releaseDate: 'July 25, 2014',
    director: 'Luc Besson',
    cast: ['Scarlett Johansson', 'Morgan Freeman', 'Choi Min-sik'],
    genres: ['Sci-Fi', 'Action'],
    description: 'Lucy is a mind-bending science fiction action film that follows the story of a young woman who gains extraordinary mental abilities after inadvertently ingesting a powerful synthetic drug. As her mind expands, Lucy becomes a force to be reckoned with, unlocking her full cognitive potential and facing unimaginable dangers. Directed by Luc Besson, the film delves into themes of human potential, evolution, and the nature of existence. With its captivating premise, visually stunning sequences, and Scarlett Johansson\'s compelling performance, Lucy takes audiences on an exhilarating and thought-provoking journey.',
    trailerLink: 'https://example.com/lucy-trailer',
    poster: 'https://cinedweller.com/wp-content/uploads/2019/12/Inception-teaser-1000.jpg'
  },
  {
    title: 'Pretty Woman',
    releaseDate: 'March 23, 1990',
    director: 'Garry Marshall',
    cast: ['Julia Roberts', 'Richard Gere', 'Jason Alexander'],
    genres: ['Romance', 'Comedy'],
    description: 'Pretty Woman is a classic romantic comedy that tells the story of Vivian, a beautiful and vivacious woman, and Edward, a wealthy businessman. When their paths cross, they form an unlikely connection and embark on a whirlwind romance. Set against the backdrop of Los Angeles, the film explores themes of love, self-discovery, and the power of genuine connections. With its iconic moments, charming performances from Julia Roberts and Richard Gere, and a heartfelt narrative, Pretty Woman continues to captivate audiences with its timeless appeal.',
    trailerLink: 'https://example.com/prettywoman-trailer',
    poster: 'https://cinedweller.com/wp-content/uploads/2019/12/Inception-teaser-1000.jpg'
  },
  {
    title: 'The Dark Knight',
    releaseDate: 'July 18, 2008',
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    genres: ['Action', 'Crime'],
    description: 'The Dark Knight is a critically acclaimed superhero film that follows Batman as he confronts his greatest nemesis, the Joker, who wreaks havoc in Gotham City. Directed by Christopher Nolan, the film delves into the complexities of heroism, morality, and chaos. With its gritty atmosphere, stunning performances, and a gripping storyline, The Dark Knight is an unforgettable cinematic experience that transcends the superhero genre.',
    trailerLink: 'https://example.com/darkknight-trailer',
    poster: 'https://cinedweller.com/wp-content/uploads/2019/12/Inception-teaser-1000.jpg'
  }
];


// let sectP = document.querySelector('section div p:last-child')
let header = document.querySelector('header')
let left = document.createElement('div');
let rightText = document.createElement('h1');
let rightPar = document.createElement('p');
let right = document.createElement('div');
left.classList.add('left');
right.classList.add('right');
var img = document.createElement("img")
header.append(left);
header.append(right);
left.append(img);
right.append(rightText);
right.append(rightPar);
img.src = "https://loremflickr.com/320/240";
left.append(img);

rightTextCont = 'Raad fav movies collection';
rightParCont = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
rightText.insertAdjacentHTML( 'beforeend', rightTextCont );
rightPar.insertAdjacentHTML( 'beforeend', rightParCont );



for (var i = 0; i < collection.length; i++) {

let sect = document.querySelector('section')
let card = document.createElement('div'); //card holder
let moveImg = document.createElement('img');
let moveiGen = document.createElement('p');
let nameMove = document.createElement('h1');
let namedirect = document.createElement('p');
let movieDis = document.createElement('p');
let icons = document.createElement('div');
let line = document.createElement('hr');
movieDis.classList.add('moveieP');

sect.append(card)
card.append(moveImg)
card.append(moveiGen)
card.append(nameMove)
card.append(namedirect)
card.append(movieDis)
card.append(icons)
card.append(line)

let movieImgg = collection[i].poster;
const moveGene = collection[i].genres;
const movieTitle = collection[i].title;
const Direct = collection[i].director;
const movieDic = collection[i].description;


moveImg.src = movieImgg;
moveiGen.insertAdjacentHTML( 'beforeend', moveGene );
nameMove.insertAdjacentHTML( 'beforeend', movieTitle );
movieDis.insertAdjacentHTML( 'beforeend', movieDic );
movieDis.insertAdjacentHTML( 'beforeend', movieTitle );
namedirect.insertAdjacentHTML( 'beforeend', Direct );

}

let sectiona = document.querySelectorAll('.moveieP');
// let div = section.querySelector('div');
// let paragraphs = div.querySelectorAll('p');
// let lastP = paragraphs[paragraphs.length - 1];
// let ind = 10;

// Now you can work with the selected last <p> element

for (var i = 0; i < collection.length; i++) {
  if (sectiona.lenght != 40000 ) {
   sectiona.document.style = 'style,color:blue';
}

};