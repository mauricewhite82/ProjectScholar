/*
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let correct = 0;

// 2. Store the rank of a player

let rank;


// 3. Select the <main> HTML element

const main = document.querySelector('main');
/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const answer1 = prompt("Does your child speak english as a first language?");
if ( answer1.toUpperCase() === 'Yes' )
{ correct += 1; }

const answer2 = prompt("Are you a resident of Louisville?");
if ( answer2.toUpperCase() === 'Yes' )
{ correct += 1; }

const answer3 = prompt("Does your child have access to the internet?");
if ( answer3.toUpperCase() === 'Yes' )
{ correct += 1; }

const answer4 = prompt("Does your child have access to a computer of mobile device?");
if ( answer4.toUpperCase() === 'Yes' )
{ correct += 1; }

const answer5 = prompt("Will you be able to meet to discuss childs progress");
if ( answer5.toUpperCase() === 'Yes' )
{ correct += 1; }


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/



if ( correct === 5 ) {
  rank = "Let's get started";
} else if ( correct >= 3 ) {
  rank = "Sorry we won't be able to help";
} else if (correct >= 2 ) {
  rank = "Sorry we won't be able to help";
} else {
  rank = "None :(";
}

// 6. Output results to the <main> element
