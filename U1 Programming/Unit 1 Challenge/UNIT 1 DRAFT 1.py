import random
# Imports the random function

board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
# Defines the board for the game as an array with numbers 0-8

def checkforwin(c, place1, place2, place3):
    if board[place1] == c and board[place2]==c and board[place3]==c:
        return ("Win")
# Function checks whether this is a win
# If the three places are equal to a winning combination, it prints "Win"

def checkforwin2(c):
    if checkforwin(c,0,1,2)=="Win":
        return ("Win")
    elif checkforwin(c,3,4,5)=="Win":
        return ("Win")
    elif checkforwin(c,6,7,8)=="Win":
        return ("Win")
    elif checkforwin(c,0,3,6)=="Win":
        return ("Win")
    elif checkforwin(c,1,4,7)=="Win":
        return ("Win")
    elif checkforwin(c,2,5,8)=="Win":
        return ("Win")
    elif checkforwin(c,0,4,8)=="Win":
        return ("Win")
    elif checkforwin(c,2,4,6)=="Win":
        return ("Win")
# Function lists all winning combinations to check for a win after every turn

print ("Welcome to Tic Tac Toe!")
print ("You are noughts!!")
# Introduction to the game, telling the user the game and what shape they will be in the game

while True:
    userSpot = input("\nSelect a tile (0-8): ")
    userSpot = int(userSpot)
# While loop definea variable which holds a users input of what tile they would like between 0-8
# While loop then converts the input to an integer value

    if board[userSpot] != "x" and board[userSpot] != "o":
        board[userSpot] = "x"
# If statement checks if the tile where the user wanted to place their shape already has a shape in it
# If there is no shape on that tile, the program places the shape there
# If there is a shape there the else statement outputs to the user that the spot is taken

        if checkforwin2("x") == "Win":
            print("USER WINS")
            break
# If statement checks if there is a win using the earlier defined function which lists all the winning combinations
# If the user has a winning combination, it outputs the user has won

        availableSpot = True
        while availableSpot:
            computerOpponent = random.randint(0,8)
            availableSpot = False
# While loop produces a random number for the computer to use as their tile selection
# ONLY produces a number between 0-8

            if board[computerOpponent] != 'o' and board[computerOpponent] != 'o':
                board[computerOpponent] = 'o'
# If statement checks if the tile where the computer generated to place their shape already has a shape in it
# If there is no shape on that tile, the program places the shape there
# If there is a shape there the while loop runs once again to generate a new number

                if checkforwin2("o") == "Win":
                    print("COMPUTER WINS")
                    break
# If statement checks if there is a win using the earlier defined function which lists all the winning combinations
# If the computer has a winning combination, it outputs the computer has won

    else:
        print ("This spot is taken!")
# This else statement follows the if statement from before for if the user enters a tile number where there is already a shape.
