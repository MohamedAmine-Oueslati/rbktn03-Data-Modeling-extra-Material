// /\/\/\/\/\/\/\/\/\/\ Exercises /\/\/\/\/\/\/\/\/\/\

// ~~~~~~~~~~~~~~~~~~~~~~ Basic Requirments ~~~~~~~~~~~~~~~~~~~~~~

// 0.Some Terms to know:

//  Data: Strings, booleans, numbers, arrays and objects.
//  Model: A way of representing something as data.
//  Instance: A single representation of something as using a model. For our purposes, this will be an object.
//  Factory function: A function that outputs instances of a model.

// 1. Think about some different attributes of books – what do all books have? Ideas include:

//  Title
//  Author
//  MSRP
//  Genre
//  Number of Pages
//  Description

// 2.In terms of the properties of books that you thought of, represent the following books as data:

//  Harry Potter and the Sorcerer's Stone (J.K. Rowling)
//  Romeo and Juliet (William Shakespeare)
//  Structure and Interpretation of Computer Programs (Gerald Jay Sussman, Hal Abelson)
//  NOTE: Did you account for the possibility of two authors? If not, update your model to handle multiple authors.
//  Three other books (see this list for ideas)
var books = {
title : 'harry potter and the sorcerers stone',
author : 'j.k. rowling',
genre : 'adventure',
numberOfPages : 456,
description : 'it is a great book'
} ; 

// 3.You may have been rewriting the same type of object over and over. We need to stay DRY (Do Not Repeat). Write a function makeBook that takes as arguments different attributes of a book and returns an object representing that book that has the proper structure (we call this a factory function).
function makeBook(title,author,genre,numberOfPages,description){
	return {
		title : title,
		author: author,
		genre : genre,
		numberOfPages : numberOfPages,
		description : description
	}
}

var book1 = makeBook('Romeo and Juliet','William Shakespeare','romance',300,'a very nice book');
var book2 = makeBook('Structure and Interpretation of Computer Programs', 'Gerald Jay Sussman, Hal Abelson', 'computer science',600, 'beneficial book');
var book3 = makeBook('harry potter and the sorcerers stone','j.k. rowling','fantasy',309,'The first novel in the Harry Potter series');
var book4 = makeBook('Ulysses','James Joyce','Modernist novel',730,'one of the most important works of modernist literature');
var book5 = makeBook('Beloved','Toni Morrison','American Literature',324,'inspired by the life of Margaret Garner');


// 4.Look at one of your book objects in the console. This is the object inspector. The object inspector is nice to have, but it will be easier to have a function to display the more important information easily. Write a function called displayBook that takes a book as an argument, and returns the important information in a more readable way, for example:

// var sorcerersStone = { /* ... */ }
//  function displayBook(book) {
//        // ...
//  }
//  displayBook(sorcerersStone);
//  // => 'Harry Potter and the Sorcerer's Stone, by J.K. Rowling -- fantasy, $24.99'
// The output string above is only an example. What information is most important to you? How can you make that information easier to read for people?
function displayBook(books){
	return books.title + ', '+ books.author + ', ' + books.genre ;
}

// 5.Create an array called books that holds all of the books that you created above.
var array = [book1, book2, book3, book4, book5] ;

// 6.Your function displayBook can be used to display a single book as a string. Now, write a function displayBooks that, given an array of books, returns a single string consisting of all of the books. Use the function displayBook to format all of the books. Each book should be numbered and separated with a newline (we also call this a line break) character so that each book is shown on a separate line in the console. The newline character is specified with a special escaped character in a string:

//  // Enter the below line into a console 'Hello /n World!'; // the 'backslash n' character is a newline
//  function displayBooks(books) {
//        // ...
//  }
//  displayBooks(books);
//  // => '1. Harry Potter and the Sorcerer's Stone... /n 2. Snow Crash, ...'
function displayBooks (array) {
 	var display = '';
 	for ( var i = 0 ; i < array.length ; i++ ) {
 		display = display + i + '. ' + displayBook(array[i]) + "\n" ; 
 	}
 	return display ;
 }

// 7.Write a function searchBooks that, given a query and an array of books, searches the array of books for 'matching' books. You will decide what way you want to write your search algorithm. Here are some things to think about: What fields will be searched? Will you search multiple fields simultaneously (it might be best to start with one field, e.g.title)? Should the search be case-sensitive? How will the search work? Will it only work from the beginning of a field, or from anywhere within? some hints:

//  'Harry Potter'.toLowerCase();    // => 'harry potter'
//  'Harry Potter'.substr(0, 5);     // => 'Harry'
//   var query = 'Harry';
//  'Harry Potter'.substr(0, query.length); // => 'Harry'
//  'Harry Potter'.indexOf('Pot');  // => 6
//  'Harry Potter'.indexOf('dog');  // => -1
//  A good starting point would be to write a function isMatch that accepts two arguments – the query and a single book –
//  and returns true if the book is a match, and false otherwise.
function searchBooks (query , array) {
    var str = '' ;
	for ( var i=0 ; i < array.length ; i++) {
		str = array[i].title.toLowerCase() ;
		if (str.indexOf(query.toLowerCase()) !== -1) {
			console.log(array[i]) ;
			return true
		}
	}
		return false
}

// 8.Write a function removeBook that, given a book's title and an array of books, returns a new array of books that does not contain the book with the provided title.
function removeBook(title,array){
	var arr = [] ;
	var j =0
for ( var i =0 ; i<array.length ; i++){
	if(array[i].title.indexOf(title) !== 0){
		arr[j] = array[i] ;
		j++
	}
}
return arr ;
}

// ~~~~~~~~~~~~~~~~~~~~~~ More Practice ~~~~~~~~~~~~~~~~~~~~~~

// 1.As we did before, think about what kinds of aspects of movies you would like to represent. A few ideas are: Title ,Director ,Duration ,Release Date ,Actors/Actresses ,Studio(s) ,Synopsis ,Rating

//  You can make this as detailed as you want. You also need to decide how you will store or present your data.
//  For example, you can use an array to represent the actors/actresses.
//  But if you want to include their roles, maybe you want to use something else. Did he/she win any awards?
//   Even the rating of a movie is open to interpretation –
//  is the rating from critics? Rotten Tomatoes (a famous American website that rates how good movies are)? Some combination?
var movie = {
title : 'twilight',
Director : 'Catherine Hardwicke',
ReleaseDate : 2008 ,
Rating : 5.2 ,

} ; 

// 2.Make five more movie objects using the same format you decided upon.
// 3. Write a factory function for movies. HINT: What is a factory function? We explained it above!
function makeMovie(title,Director,ReleaseDate,Rating,Awards,Stars){
	return {
		title : title,
		Director: Director,
		ReleaseDate : ReleaseDate,
		Rating : Rating,
		Awards : Awards,
		Stars : Stars
	}
}

var Movie1 = makeMovie('the vow','Michael Sucsy', 2012 , 6.8 , [] , [ 'Rachel McAdams', 'Channing Tatum' ] )
var Movie2 = makeMovie('Mirage' , 'Oriol Paulo' , 2018 , 7.4 , [] , ['Adriana Ugarte' , 'Álvaro Morte' , 'Javier Gutiérrez Álvarez'])
var Movie3 = makeMovie('twilight' , 'Catherine Hardwicke' , 2008 , 5.2 , ['MTV Movie Award for Best Kiss','Teen Choice Award for Soundtrack of the Year'] ,  ['Kristen Stewart', 'Robert Pattinson'] )
var Movie4 = makeMovie('Ted','Seth MacFarlane', 2012 , 6.9 , [] , ['Mark Wahlberg'] )
var Movie5 = makeMovie('Titanic' , 'James Cameron' , 1997 , 7.8 , ['Academy Award for Best Original Music Score','MTV Movie & TV Award for Best Movie','Producers Guild of America Award for Best Theatrical Motion Picture']  , ['Leonardo DiCaprio','Kate Winslet'] )


// 4.Write a function displayMovie that works like displayBook, but for movies.
function displayMovie(movie){
	return movie.title + ', '+ movie.Director + ', ' + movie.ReleaseDate +', ' + movie.Rating ;
}

// 5.Write a function displayCast that displays the cast of a movie, including: Role , Actor/Actress name
function displayCast(movie){
	return movie.title + ', '+ movie.Stars + ', ' + movie.Awards ;
}

// 6.Create an array to hold the movies that you created called movies, and add your movies to it.
var Movies = [Movie1, Movie2, Movie3, Movie4, Movie5] ;

// 7.As before, write a displayMovies function that works just like displayBooks.
function displayMovies (array) {
 	var display = '';
 	for ( var i = 0 ; i < array.length ; i++ ) {
 		display = display + i + '. ' + displayMovie(array[i]) + "\n" ; 
 	}
 	return display ;
 }

// 8. Calculate the average length of your movies by writing a function called averageLength that will accept an array of movies as a parameter and output the average length. The difficulty of this problem is dependent on how you have chosen to store the duration.

// How about averageRating?
function averageRating (array) {
       sum = 0 ;
	for (var i = 0 ; i < array.length ; i++) {
		sum += array[i].Rating ;
	}
	return sum / array.length ;
}

// 9.How about searching your movies array? Write a function that works like searchBooks, but for movies.
function searchMovies (Movies , query) {
    var str = '' ;
	for ( var i=0 ; i < Movies.length ; i++) {
		str = Movies[i].title.toLowerCase() ;
		if (str.indexOf(query.toLowerCase()) !== -1) {
			console.log(Movies[i]) ;
			return true
		}
	}
		return false
}

// ~~~~~~~~~~~~~~~~~~~~~~ Advanced ~~~~~~~~~~~~~~~~~~~~~~

// 1.Tagging System: Some books have multiple categories, have won awards, are on a best-seller list, or have other special characteristics. Let's incorporate a tagging system that will allow us to represent all of these. Write functions addTag and removeTag that each accept a book and a tag as parameters, and either add tags or remove tags respectively.

//  Considerations:
//  If you included a genre key, replace it with a tag.
//  What if you use addTag on a book that has no tags yet?
//  What if you attempt to use addTag with the same tag (on the same book) multiple times? Should it be possible to have the same tag twice?
//  Add some tags to multiple books, like 'bestseller' or 'pulitzer'.
//  Extend
//  Extend searchBooks to work with tags.
function removeTag (Movie,Tag){
    for (var i =0 ; i<Movies.length ; i++){
	    if(Movies[i].title === Movie){
		    delete Movies[i][Tag] ;
	}
}
    return Movies ;
}


function addTag (Movie,Tag,element){
    for (var i =0 ; i<Movies.length ; i++){
	    if(Movies[i].title === Movie){
	    	if (Array.isArray(Movies[i][Tag])){
	    		Movies[i][Tag].push(element)
	    	}
	    	else {
	    		Movies[i][Tag] = element ;
	    	}
	}
}
    return Movies ;
}

// 2.Let's revisit your removeBooks function: what would happen if you had two books with the same title, but different authors? Would your algorithm remove both books? This is a common problem that we usually solve by providing a unique identifier for each item.

//  Modify all of your books to contain an id key with a unique value. This can be an integer or a unique string (like an ISBN).
//  Change removeBook to use the book's id for lookups instead of its title.
function addId (array) {
	for (var i = 0 ; i < array.length ; i++) {
		array[i]['Id'] = i ;
	}
	return array ;
}

function removeBook(num,array){
for ( var i =0 ; i<array.length ; i++){
	if(array[i]['Id'] === num){
		array.splice(i,1) ;
	}
}
return array ;
}
// 3.Can you think of a way to write a more abstract displayItem function that works for books and movies (depending on how you have structured your objects, this may or may not work well)?

function displayItem(obj){
	// this works only if both movies and books have the same items ... the same items i can find are (title,releaseDate, genre)
	return obj.title + ', ' + obj.ReleaseDate + ', ' + obj.genre ;
}

// 4.Write a more general searchItems function that accepts as parameters the query, items to search, and an array of keys that should be searched. Refactor searchMovies and searchBooks to use this function.
function searchItems (query , array , item) {
    var str = '' ;
	for ( var i=0 ; i < array.length ; i++) {
		str = array[i].title.toLowerCase() ;
		if (str.indexOf(query.toLowerCase()) !== -1) {
			if (array[i][item]) {
				console.log(array[i][item])
	     		return true
			}
			return 'item not found'
		}
	}
		return 'book or movie not found'
}