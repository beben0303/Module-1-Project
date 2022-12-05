import { searchNews, sortNewsAscending, sortNewsDescending, newsList } from "./main.js";

//Example testing for search function
test("Search function testing", () => {
  expect(searchNews("What films should an aspiring journalist watch? ")).toStrictEqual(["What films should an aspiring journalist watch?"]);
});

test("Search function testing", () => {
  expect(searchNews("What")).toStrictEqual(
    [
      "What films should an aspiring journalist watch?",
      "What books should an aspiring journalist read?"
    ]);
});

test("Search function testing", () => {
  expect(searchNews("te")).toStrictEqual(
    [
      "Buried underpants and tea bags help scientists evaluate soil",
      "Decoder: Mining asteroids for minerals can help spare Earth",
      "Media glare can enrich tennis pros yet imperil mental health",
    ]);
});

test("Sort ascending testing", () => {
  expect(sortNewsAscending(newsList)).toStrictEqual(
    [
      "'Nightmare' TV show 'Euphoria — health threat or high art?",
      "Buried underpants and tea bags help scientists evaluate soil",
      "Decoder: Armenia in a bind as Ukraine war resets global order",
      "Decoder: Mining asteroids for minerals can help spare Earth",
      "Marie Colvin shined a light on war-torn corners of the world",
      "Media glare can enrich tennis pros yet imperil mental health",
      "What books should an aspiring journalist read?",
      "What films should an aspiring journalist watch?",
    ]);
});

test("Sort ascending testing", () => {
  expect(sortNewsDescending(newsList)).toStrictEqual(
    [
      "What films should an aspiring journalist watch?",
      "What books should an aspiring journalist read?",
      "Media glare can enrich tennis pros yet imperil mental health",
      "Marie Colvin shined a light on war-torn corners of the world",
      "Decoder: Mining asteroids for minerals can help spare Earth",
      "Decoder: Armenia in a bind as Ukraine war resets global order",
      "Buried underpants and tea bags help scientists evaluate soil",
      "'Nightmare' TV show 'Euphoria — health threat or high art?",
    ]);
});