const searchInput = document.querySelector("#search-input");
const moviesContainer = document.querySelector(".movies");
const searchButton = document.querySelector("#button");

fetch("./data.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network error");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
   
  
    function displayMovies(movies){
      moviesContainer.innerHTML = "";

      movies.forEach (movie =>{
        const movieBox = document.createElement('div')
        movieBox.classList.add('movies-box')

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img')
        movieImg.src = `${movie.poster}`

        const movieTitle = document.createElement('h2');
        movieTitle.classList.add('movie-title')
        movieTitle.textContent = movie.title

        const movieGenre = document.createElement ('p')
        // movieGenre.classList.add('movie-genre');
        movieGenre.textContent = `${movie.year} | ${movie.genre} `;

        const movieRating = document.createElement('p')
        movieRating.classList.add('movie-rating')
        movieRating.textContent= `⭐${movie.rating}`


        movieBox.appendChild(movieImg)
        movieBox.appendChild(movieTitle)
        movieBox.appendChild(movieGenre)
        movieBox.appendChild(movieRating)

        moviesContainer.appendChild(movieBox)
  
      })

    }

    displayMovies(data);

  
  if (!searchInput){
    console.error("search input not found!");
    
  }  
  searchButton.addEventListener("click", () =>{
    const searchValue = searchInput.value.toLowerCase()

  const filteredMovies = data.filter(movie =>
  movie.title.toLowerCase().includes(searchValue)
       
)
  
    displayMovies(filteredMovies)

  })

  })

  .catch(error => console.error("error", error));
  



