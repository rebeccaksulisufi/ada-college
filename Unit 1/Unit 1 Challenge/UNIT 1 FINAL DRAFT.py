import random
# Imports the random function

player1score = 0
player2score = 0
# Sets the starting scores for player 1 and player 2 to 0

def player1():
# This function contains the whole code for 1 player vs the computer
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

    def visualboard():
        print (board[0], "|",board[1], "|",board[2])
        print ("----------")
        print (board[3], "|",board[4], "|",board[5])
        print ("----------")
        print (board[6], "|",board[7], "|",board[8])
# This function uses the array for the board from before
# Creates a visual board for the user to see

    print ("You are noughts!!")
# Introduction to the game, telling the user the game and what shape they will be in the game

    while True:
        userSpot = input("\nSelect a tile (0-8): ")
        userSpot = int(userSpot)
    # While loop defines a variable which holds a users input of what tile they would like between 0-8
    # While loop then convers the input to an integer value

        if userSpot not in range (0,9):
            print ("That is not a valid input")
    # Validates whether what the user has inputted is a valid interger between 0-8

        if board[userSpot] != "x" and board[userSpot] != "o":
            board[userSpot] = "x"
    # If statement checks if the tile where the user wanted to place their shape already has a shape in it
    # If there is no shape on that tile, the program places the shape there
    # If there is a shape there the else statement outputs to the user that the spot is taken

            if checkforwin2("x") == "Win":
                visualboard()
                print("USER WINS")
                break
    # If statement checks if there is a win using the earlier defined function which lists all the winning combinations
    # If the user has a winning combination, it outputs the user has won

            availableSpot = True
            while availableSpot:
                random.seed
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
                        visualboard()
                        print("COMPUTER WINS")
                        break
    # If statement checks if there is a win using the earlier defined function which lists all the winning combinations
    # If the computer has a winning combination, it outputs the computer has won


        else:
            print ("This spot is taken!")
        visualboard()
    # This else statement follows the if statement from before for if the user enters a tile number where there is already a shape.


def player2():
# This functions contains the whole code for 2 users to play against eachother

    player1score = 0
    player2score = 0
# Set player 1 and player 2 scores to 0

    def tic_tac_toe():
# Holds the code for all of the functions not including the main loop
        board = [0,1,2,3,4,5,6,7,8]
# Defines array as tiles on the board
        end = False
        combinationToWin = ((0, 1, 2), (3, 4, 5), (6, 7, 8), (0, 3, 6), (1, 4, 7), (2, 5, 8), (0, 4, 8), (2, 4, 6))
# List of all the possible combinations to win

        def visualboard():
            print (board[0], "|",board[1], "|",board[2])
            print ("----------")
            print (board[3], "|",board[4], "|",board[5])
            print ("----------")
            print (board[6], "|",board[7], "|",board[8])
            print()
# This function uses the array for the board from before
# Creates a visual board for the user to see

        def player1():
# This function holds the code for player 1's input
            userinput1 = choose_number()
            if board[userinput1] == "X" or board[userinput1] == "O":
                print("\nThere has already been a move placed there. Please select somewhere else.")
                player1()
# Checks whether the tile where player 1 wanted to play their shape is occupied
# If there is already a shape there, the programs outputs that the user needs to select somehwere else and runs the function again
# If the tile is available, the program places player 1's shape there.
            else:
                board[userinput1] = "X"

        def player2():
            userinput2 = choose_number()
            if board[userinput2] == "X" or board[userinput2] == "O":
                print("\nThere has already been a move placed there. Please select somewhere else.")
                player2()
# Checks whether the tile where player 2 wanted to play their shape is occupied
# If there is already a shape there, the programs outputs that the user needs to select somehwere else and runs the function again
# If the tile is available, the program places player 2's shape there.
            else:
                board[userinput2] = "O"


        def choose_number():
# This function holds the program where the user enters their chosen position for their shape
            while True:
                while True:
                    userPosition = input()
                    try:
# Uses try and except function to check whether the input is valid
                        userPosition  = int(userPosition)
                        if userPosition in range(0, 9):
                            return userPosition
                        else:
                            print("\nThere has already been a move placed there. Please select somewhere else.")
                            continue
# If the user enters a value where there is already a shape, the program should output an error message and tell the user to select another position
                    except ValueError:
                        print("\nThat is not a valid input.")
                        continue
# If the user enters an invalid input, the program should output an error message and tell the user to input their choice again

        def check_board():
# This function contains the code to check whether a player has won
            count = 0
            for position in combinationToWin:
                if board[position[0]] == board[position[1]] == board[position[2]] == "X":
                    print("Player 1 Wins!\n")
                    print("Congratulations!\n")
# This checks whether player 1 has a winning combination
# If player 1 wins, it will output they have won
                    global player2score
                    global player1score
                    player1score += 1
                    print("Player 1 Score = ", player1score)
                    print("Player 2 Score = ", player2score)
                    return True
# If player 1 wins, it will add 1 to player 1's score
# It will then display player 1 and player 2's overall score


                if board[position[0]] == board[position[1]] == board[position[2]] == "O":
                    print("Player 2 Wins!\n")
                    print("Congratulations!\n")
# This checks whether player 1 has a winning combination
# If player 1 wins, it will output they have won


                    player2score += 1
                    print("Player 1 Score = ", player1score)
                    print("Player 2 Score = ", player2score)
                    return True
# If player 1 wins, it will add 1 to player 1's score
# It will then display player 1 and player 2's overall score


            for position in range(9):
                if board[position] == "X" or board[position] == "O":
                    count += 1
                if count == 9:
                    print("The game ends in a Tie\n")
                    return True
# If the total number of turns is 9 is means the matrix is full and there is no more moves
# Therefore outputs that the game was a tie


        while not end:
            visualboard()
            end = check_board()

            if end == True:
                break
            print("Player 1 choose where to place a cross")
            player1()
            print()
            visualboard()
            end = check_board()
            # Outputs to the players that its player 1's turn
            # Runs the function that contains the code for player 1's turns


            if end == True:
                break
            print("Player 2 choose where to place a nought")
            player2()
            print()
            # Outputs to the players that its player 2's turn
            # Runs the function that contains the code for player 2's turns

        if input("Play again (y/n)\n") == "y":
            print()
            tic_tac_toe()
# Asks the user whether they would like to play against
# If they say yes, the program will call the function which contains the entire game code
    tic_tac_toe()

print("Welcome to Tic Tac Toe!")

while True:
# This is the main loop for the program

    amountOfPlayers = input("How many players? 1 or 2? \n")
# This asks the user to enter how many players are playing the game. 1 or 2

    if amountOfPlayers == "1":
        player1()
    elif amountOfPlayers == "2":
        player2()
    else:
        print ("That is not a valid input.")
# If statement to validate whether the player has entered 1 or not
# If the user enters an invalid input the program will display an error message
