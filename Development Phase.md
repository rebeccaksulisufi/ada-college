# Development Phase

## Draft 1

### Draft 1 code

![](draft 1 p1.png)
![](draft 1 p2.png)


In my first draft of the code I have developed a few basic features.
I start by importing the random function, then defining the board as an empty array with numbers 0-8 in the array. I then define a function which checks the board for a win. The second function i implement is a function which lists all possible combinations of all wins possible. The first function uses the second function to determine a win. There is then an introduction to the game and then the main code starts off with a while loop. Inside the while loop, the user is asked to select a tile between 0 and 8 and it then converts it into an interger. I then defined an if statement which checks if the tile where the user wanted to place their shape already has a shape in it, if there is no shape on that tile then the program will place the shape there, however if there is a shape there then the statement outputs to the user that the spot is taken. After, another if statement will check if there is a win using the earlier defined function which lists all of the possible winning combinations. If the user has a winning combination, it will output to the user that they have won. A while loop then produces a random number between 0 and 8 for the computer to use as their tile selection. The program then runs an if statement to check if the tile which the computer generated to place their shape already has a shape on it. If there is no shape on the tle, the program places the shape there. If there is a shape already there, the while loop runs again to generate a new number. Another if statement is run to check if there is a win using the earlier defined function which lists all the wunning combinations. If the computer has a winning combinatin, it outputs that the computer has won.

### Running and trial of draft 1 code

![](draft 1 o1.png)

In this trial of the game. The program introduced the game and then promopted me to select a tile. Upon selecting a tile, the program prompted me to select another and keeps going. The computer then stated I had won as I had a horizontal win.
***
![](draft 1 o2.png)

In this trial of the game.The program introduced the  game and prompted me to select a tile. Once I selected a tile, when the program prompted me again, I entered the same number to see if my program would detect it as invalid. The program, as expected outputted that the spot was taken and prompted me to enter a valid input again.

### Evaluation of draft 1

Overall the program is extremely basic and is not completely robust. To improve my program, the next steps in my implementation would be to display a physical board to the user so they can visually see where they are placing their shapes. Also, a error message should be outputted whent he user types in an invalid input when asked where the would like to place their shape instead of the program just ending. I would also like to implement a choice for 2 players to play against eachother rather than 1 player against the computer.

## Draft 2

In my second draft it is similar to my first one but I changed certain aspects of the code. I started by importing the random function and then defining the baord as an empty array with numbers 0-8. I then defined a function which checks the board for a win. The second function lists all possible combinations for a win. *I then defined a new function which was to create a visual board. It lists all*


I start by importing the random function, then defining the board as an empty array with numbers 0-8 in the array. I then define a function which checks the board for a win. The second function i implement is a function which lists all possible combinations of all wins possible. The first function uses the second function to determine a win. There is then an introduction to the game and then the main code starts off with a while loop. Inside the while loop, the user is asked to select a tile between 0 and 8 and it then converts it into an interger. I then defined an if statement which checks if the tile where the user wanted to place their shape already has a shape in it, if there is no shape on that tile then the program will place the shape there, however if there is a shape there then the statement outputs to the user that the spot is taken. After, another if statement will check if there is a win using the earlier defined function which lists all of the possible winning combinations. If the user has a winning combination, it will output to the user that they have won. A while loop then produces a random number between 0 and 8 for the computer to use as their tile selection. The program then runs an if statement to check if the tile which the computer generated to place their shape already has a shape on it. If there is no shape on the tle, the program places the shape there. If there is a shape already there, the while loop runs again to generate a new number. Another if statement is run to check if there is a win using the earlier defined function which lists all the wunning combinations. If the computer has a winning combinatin, it outputs that the computer has won.





***
DEVELOPMENT DIARY  and CODE: For each stage in development (each MVP) you should write up
What features are being developed
Show the code and annotate with comments or other
Show testing for functionality and debugging
***
Program uses accurate syntax and indentation throughout
Organisation has logical structure and commenting is consistently clear and informative, allowing for the code to be easily maintained by a third party. Code is highly efficient and optimised; uses appropriate and accurate programming conventions throughout. Uses precise logical operations throughout to create a fully functional, error-free program that meets the given criteria. Program outputs are accurate and informative allowing a novice user to easily use the program. Program uses accurate validation and checking procedures throughout, resulting in a robust program that minimises errors and handles unexpected events.
