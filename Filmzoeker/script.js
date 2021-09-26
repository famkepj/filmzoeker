const addMoviesToDom = movies.map((films) => {
  return films;
}) 

const zoekfunctie = document.querySelector("nav"); 
// const zoekfunctie = Array.from(document.querySelectorAll('input[name="filter"]'));

zoekfunctie.addEventListener('change', function(e){
  // console.log("hallo");
  let target = e.target;
  switch (target.id) {
    case 'new':
       filmlist = new_movie;

       var filmlijst = document.getElementById("films");
        while (filmlijst.hasChildNodes()) {  
        filmlijst.removeChild(filmlijst.firstChild);
        }

       filmlist.forEach((item) => {
        var newLi = document.createElement ("li");
        var newImg = document.createElement ("img");
        var filmlijst = document.getElementById("films");
        newImg.src= item.Poster;
        newImg.alt= item.Title;
        filmlijst.appendChild(newLi);
        newLi.appendChild(newImg);
      }); 
      // console.log('hey ik ben een film > 2014'); 
    break;
    case 'avenger':
     filmlist = filterMovies("Avenger");

     var filmlijst = document.getElementById("films");
     while (filmlijst.hasChildNodes()) {  
     filmlijst.removeChild(filmlijst.firstChild);
     }

     filmlist.forEach((item) => {
      var newLi = document.createElement ("li");
      var newImg = document.createElement ("img");
      var filmlijst = document.getElementById("films");
      newImg.src= item.Poster;
      newImg.alt= item.Title;
      filmlijst.appendChild(newLi);
      newLi.appendChild(newImg);
    }); 
      // console.log('hey ik ben een Avanger films');
    break;
    case 'x-men':
      filmlist = filterMovies("X-Men");

      var filmlijst = document.getElementById("films");
     while (filmlijst.hasChildNodes()) {  
     filmlijst.removeChild(filmlijst.firstChild);
     }

     filmlist.forEach((item) => {
      var newLi = document.createElement ("li");
      var newImg = document.createElement ("img");
      var filmlijst = document.getElementById("films");
      newImg.src= item.Poster;
      newImg.alt= item.Title;
      filmlijst.appendChild(newLi);
      newLi.appendChild(newImg);
    }); 
      // console.log('hey ik ben een X-men films');
    break;
    case 'princess':
      filmlist = filterMovies("Princess");

      var filmlijst = document.getElementById("films");
     while (filmlijst.hasChildNodes()) {  
     filmlijst.removeChild(filmlijst.firstChild);
     }

     filmlist.forEach((item) => {
      var newLi = document.createElement ("li");
      var newImg = document.createElement ("img");
      var filmlijst = document.getElementById("films");
      newImg.src= item.Poster;
      newImg.alt= item.Title;
      filmlijst.appendChild(newLi);
      newLi.appendChild(newImg);
    }); 
      // console.log('hey ik ben een Princess films');
    break;
    case 'batman':
      filmlist = filterMovies("Batman");

      var filmlijst = document.getElementById("films");
     while (filmlijst.hasChildNodes()) {  
     filmlijst.removeChild(filmlijst.firstChild);
     }

     filmlist.forEach((item) => {
      var newLi = document.createElement ("li");
      var newImg = document.createElement ("img");
      var filmlijst = document.getElementById("films");
      newImg.src= item.Poster;
      newImg.alt= item.Title;
      filmlijst.appendChild(newLi);
      newLi.appendChild(newImg);
    }); 
      //  console.log ('hey ik ben een Batman films');
    break;
  }
});

const filterMovies = (wordInMovieTitle) => {
  return (movies).filter((movie) => movie.Title.includes(wordInMovieTitle));
} 

const new_movie = movies.filter((movie) => movie.Year > 2013)

addMoviesToDom.forEach((item) => {
  var newLi = document.createElement ("li");
  var newImg = document.createElement ("img");
  var newA = document.createElement ("a");
  var filmlijst = document.getElementById("films");
  newA.href= item.imdbID;
  newImg.src= item.Poster;
  newImg.alt= item.Title;
  filmlijst.appendChild(newLi);
  newLi.appendChild(newA);
  newA.appendChild(newImg);
}); 


