//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can udpdate the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings
export var newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "'Nightmare' TV show 'Euphoria — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",
];

export function search() {
  //inputValue is the variable that contains the search string
  const inputValue = document.getElementById("search-input").value;

  return searchNews(inputValue);
}

export function sort(type) {
  var searchResult = search();
  if (type == "ascending") {
    return sortNewsAscending(searchResult);
  } else {
    return sortNewsDescending(searchResult);
  }
}

export function searchNews(inputValue){
  inputValue = inputValue.trim();
  const matchednews = newsList.filter((value) => {
    return (value.indexOf(inputValue) > -1)
  });
  return matchednews;
}

export function sortNewsAscending(news){
  return news.sort();
}

export function sortNewsDescending(news){
  news.sort();
  return news.reverse();
}