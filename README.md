## [scrimble]

# Description

"Scrimble" is a single-player, timed, word scrambling game themed to the Adult Swim original program "Tim & Eric Awesome Show, Great Job!"  The game randomly selects a single word from an array of popular words used in the show, randomly scrambles the characters of that word and then displays the newly scrambled word (the "scrimble") to the player.  To advance, the player must key in the correct unscrambled version of the word within the allotted time.  If correct, the game randomly selects a new randomized word from the array and appends it to the display (removing the previous word from the array so that it cannot appear twice); the player is also awarded a single point.  If the player's input does not match the correct word, the "scrimble" will stay displayed until the correct word is entered or until the timer reaches zero.  The player wins the game by progressing through three rounds within the allotted timeframe.  Each round requires three correct answers for a total of nine correct responses.  If the player cannot win all three rounds within the specified timeframe, the game ends.

## Wireframes

# Landing Page
<img src="https://i.imgur.com/2I62BUy.png">
This is the Scrimble landing page.  Here the user sees an irreverent Tim & Eric background image; the title of the game and the start button which will prompt the user to enter their name.

---
# User Name Prompt
<img src="https://i.imgur.com/mwEC0m6.png">
This is the Scrimble name prompt page.  After clicking the "Start" button on the previous page, the user is asked to enter their name which will append, along with other player metrics, underneath the game title.

---
# First Word Appended To Display (Game Starts)
<img src="https://i.imgur.com/ZOQAxA1.png">
Immediately after entering their username, the user's name and key game metrics (including the timer) are appended underneath the game title.  The game has now officially begun.  Along with the first randomly selected, randomly scrambled word appending to the display, a user-input box also appends underneath the word.  At this point the timer will also begin it's countdown (in seconds).

---
# Correct Answer Entered
<img src="https://i.imgur.com/S87ea6j.png">
If the user enters the correct answer, a newly selected/scrambled word will append to the display.  The user's score will incrase by 1 point.

---
# Incorrect Answer Entered
<img src="https://i.imgur.com/HLASmZN.png">
If the user enteres an incorrect response the scrambled word will continue to display until the correct answer is given or the timer reaches 0.

---
# Round Completion
<img src="https://i.imgur.com/hUIKHSO.png">
After the user correctly unscrambles 3 words, their round metric incrases by 1 point and the game continues with a new randomly selected/scrambled word appending to the display.

---
# Game Won
<img src="https://i.imgur.com/mU5yobd.png">
If the user correctly unscrambles a total of nine words (3 rounds of 3 words each) they have won the game and are prompted accordingly.  After winning, they are given the option to play again and, if selected, the game will reset to the landing page.

---
# Game Lost
<img src="https://i.imgur.com/azrnV5L.png">
If the user cannot correctly unscramble a total of nine words (3 rounds of 3 words each) within the allotted time frame, they have lost the game and are prompted accordingly.  After losing, they are given the option to play again and, if selected, the game will reset to the landing page.

## Gameplay
<img src="http://www.giphy.com/gifs/VzpyiteMV7f77D9AMX" width=640>
The above GIF is an example of a succesfully completed game of Scrimble.
