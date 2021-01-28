# Mega Man Memory Game

![Mega-Man-Memory-Game-Logo](assets/photos/megamanlogocropped.png)

There's been a lot of debating and ideas for considering my Second project. After considering my options, I decided to create a memory game inspired by one of my favourite [Capcom](http://www.capcom-europe.com/) game franchise called "Mega Man," which is known as "Rockman" in Japan. 

The First time I played Mega Man 1, I was very addicted to the game, as I found it very entertaining, and the challenges on every stage of the game were worth playing it. 

The younger me always looked forward to the succeeding Mega Man game series. What I found interesting about the game is the theme of every robot bosses and their special powers. 

I put a lot of inspiration in creating this memory game. Whether you're a fan of Mega Man or have just heard of Mega Man, I hope this game entertains you! 

- [UX](#ux)
  * [Project Goals](#project-goals)
  * [User Goals](#user-goals)
  * [User Stories](#user-stories)
- [Wireframes](#wireframes)
  * [Wireframes Update:](#wireframes-update-)
- [Features](#features)
  * [How To Play The Game](#how-to-play-the-game)
  * [Start Text](#start-text)
  * [Timer](#timer)
  * [Flips](#flips)
  * [Mute On and Off Button](#mute-on-and-off-button)
  * [Restart Button](#restart-button)
  * [Win and Game Over Message](#win-and-game-over-message)
- [The Game Theme](#the-game-theme)
  * [The Game characters](#the-game-characters)
    + [Mega Man](#mega-man)
    + [Guts Man](#guts-man)
    + [Air Man](#air-man)
    + [Snake Man](#snake-man)
    + [Toad Man](#toad-man)
    + [Gravity Man](#gravity-man)
  * [Back Card](#back-card)
  * [Game Background Photo](#game-background-photo)
  * [The Mega Man Logo](#the-mega-man-logo)
  * [Mega Man Cursor](#mega-man-cursor)
  * [The Game Music](#the-game-music)
    + [Start Game Music Background](#start-game-music-background)
    + [Card Picker](#card-picker)
    + [Cards Match](#cards-match)
    + [Game Over Sound](#game-over-sound)
- [Colour Theme](#colour-theme)
    + [Mega Man Image](#mega-man-image)
    + [Proto Man Image](#proto-man-image)
- [Google Fonts](#google-fonts)
- [Deployment](#deployment)
  * [Cloning Mega Man Memory Game from GitHub](#cloning-mega-man-memory-game-from-github)
- [Testing](#testing)
  * [Testing this game based on the User Stories found in the UX section](#testing-this-game-based-on-the-user-stories-found-in-the-ux-section)
  * [Bugs](#bugs)
  * [Other Tests Carried Out](#other-tests-carried-out)
- [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
- [Credits](#credits)
  * [Photos and Logo](#photos-and-logo)
  * [Music](#music)
  * [Colour](#colour)
  * [Game Character Information](#game-character-information)
  * [Acknowledgements](#acknowledgements)
- [Site Disclaimer](#site-disclaimer)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# UX 

## Project Goals

I wanted to create a memory card game for this project using a theme and characters that I felt inspired to use. After considering many options, I went for one of my all-time favourite game called “Mega Man.” Mega Man is a famous Capcom classic game, which is also known as Rockman in Japan. I was so drawn to creating a game inspired by the characters from Mega Man 1-5, that I chose 6 of them to be included in this memory card game. 

In addition, my goal in creating this game is:

* To attract users with the theme and look of the game.
* To create a game targeting Mega Man fans.
* To attract non-Mega Man fans to play the game.
* To create a 12 card memory game that includes 6 characters that can be found in Mega Man 1-5 game within 60 seconds.
* To inspire Mega Man fans like me to reminisce some of the characters of Mega Man 1-5.
* To attract different demographics to play the game.

## User Goals 

* Completing all the 12 memory cards.
* Completing the game within 60 seconds. 
* To remind Mega Man fans of the characters in Mega Man 1-5 games (Mega Man Fans).
* To have fun with the game. 
* To play a game that has a different theme (Especially non-Mega Man fans).

## User Stories

As a user:

* I want to play a game that is fun, colourful, interactive, and conceptual. 
* I want to play a game that provides me instructions on how to play it. 
* I want to play I game that works on a laptop, desktop, tablet, and mobile. 
* I want to play a game that tests and challenges my memory skills within a timeframe. 
* I want a game that lets me play repeatedly.
* I want to experience playing a game inspired by one of the classic games that is nostalgic.
* I want a game that I can control the music or sound at my convenience. 

# Wireframes 

My wireframes were all created using [Balsamiq wireframes](https://balsamiq.com/). I’ve individually created wireframes for Desktop, Tablet, and Mobile versions. 

All my wireframes can be viewed here: [Wireframes](https://github.com/GlobetrotterG/mega-man-memory-game/tree/master/wireframes).

## Wireframes Update: 

* Due to the time constraint of creating this project, I have decided to condense my original 6-page Wireframe, to one page. These are the changes to the Wireframes: 

    * The game page starts with a "Click to Start" text, where it takes them to the game with the deck of cards instead of the "Tap to Start."
    * The deck of cards was originally 16, but reduced to 12. 
    * When the game begins, the time was changed to timer count instead of a bar.
    * Number of Flips was added that wasn't on the Wireframes. 
    * Mute on and off button which is the bell icon is a text box saying "Mute On / Mute Off"
    * Instead of a separate page or modal that pops out when the user wins or lose, a text saying "You Win! Click to Restart" or "Game Over! Click to Restart" pops out after the game.

I would like to re-create this game at some point and revert this back to the original Wireframes.

# Features
 
## How To Play The Game 

* The Mega Man Memory Game is a deck of 12 cards with using 6 characters. To play the game, the user must match 2 similar cards within 60 seconds to win the game. 
* For an additional challenge to the game, I added a number of flips to the game for the user to track the number of times they have turned a card. 

## Start Text 

* Before the game starts, a "Start Game" is displayed on the screen. 
* Once that's pressed, the game starts, with the background music playing on a loop and the timer starts counting.

## Timer 

* Timer has been set to 60 seconds to make the game more fun and challenging for the user. 

## Flips

* The number of flips feature was included in order for the user to assess the number of flips they've made within 60 seconds. 
* It's a fun feature to add as it challenges the user. 

## Mute On and Off Button

* Is added for the user to control the music of the game and giving them the option to play the game with or without music. 
* This can be controlled by pressing the button. 

## Restart Button

* I added a Restart button in order for user to restart the game at their own convenience. 
* This can be controlled by pressing the button. 

## Win and Game Over Message

* If all 12 cards have been matched within 60 seconds, a "You win!" message comes out, and the game will restart once pressed. A sound effect can be heard.
* If all 12 cards have not been matched within 60 seconds, then a "Game Over!" comes out, and will restart once pressed. A sound effect can be heard.

# The Game Theme 

If this is the First time you've heard of the Mega Man game, you will ask yourself... Who is Mega Man?. 

As per [Wikipedia](https://en.wikipedia.org/wiki/Mega_Man#:~:text=In%20the%20story%20behind%20the,Dr.%20Wily%20as%20his%20partner.&text=After%20defeating%20a%20Robot%20Master,that%20Robot%20Master's%20special%20weapon.), here is a brief summary about Mega Man: 

>In the story behind the original series, Mega Man is a robot originally named Rock, created as a lab assistant by the scientist Dr. Light with Dr. Wily as his partner. Following treachery by Dr. Wily in which he reprogrammed most of Dr. Light's robots, Rock volunteered to be converted into a fighting robot to defend the world from Wily's violent robotic threats, thus becoming Mega Man.

>Though all incarnations of Mega Man feature unique stories, settings, and characters, they share several common features. All main Mega Man games released prior to 1997 are side-scrolling action platformers. The player character must fight through the levels using Mega Man's "Mega Buster"—a cannon attached to his arm—to shoot the robotic enemies inhabiting his environment. When Mega Man was released in 1987, the characteristic that made it revolutionary was the choice given to the player of which robot master to attempt first. After defeating a Robot Master—the boss of a level—Mega Man gains the ability to use that Robot Master's special weapon.

The First-ever [Mega Man 1](https://en.wikipedia.org/wiki/Mega_Man_(1987_video_game)) had so much influence on my love for the game, and have even downloaded a Mega Man game app on Google Play. 

This game uses inspiration from a selected 5 robot characters from Mega Man 1 - 5 and Mega Man himself to complete the deck of 12 chards for this game. The background music, sound effects, and backdrop for the game itself have all been inspired by the game itself. 

## The Game characters

### Mega Man

Is the main character
![Mega-Man](assets/photos/megamancard.png)
* Photo source link on [Clipartmax](https://bit.ly/3opkqCf)
* Character information [here](https://bit.ly/3mNA2z6)

### Guts Man

Is a character from Mega Man 1
![Guts-Man](assets/photos/gutsman.png)
* Photo source link on [favpng](https://bit.ly/2IjnmRx)
* Character information [here](https://bit.ly/3ot2N4l)

### Air Man

Is a character from Mega Man 2
![Air-Man](assets/photos/airman.png)
* Photo source link on [favpng](https://bit.ly/3otCICs)
* Character information [here](https://bit.ly/36LBrj)

### Snake Man

Is a character from Mega Man 3
![Snake-Man](assets/photos/snakeman.png)
* Photo source link on [favpng](https://bit.ly/3gfa19g)
* Character information [here](https://bit.ly/33MRUCL)

### Toad Man

![Toad-Man](assets/photos/toadman.png)

Is a character from Mega Man 4
* Photo source link on [favpng](https://bit.ly/2LcIVEp)
* Character information [here](https://bit.ly/2Ipaj0Y)

### Gravity Man

Is a character from Mega Man 5
![Gravity-Man](assets/photos/gravityman.png)
* Photo source link on [Clipartmax](https://bit.ly/2JwC20k)
* Character information [here](https://bit.ly/39KMyLQ)

## Back Card
For the back card of the game, I used Mega Man's helmet as the picture which complimented the theme of the game.

Mega Man Helmet Photo
![Mega-Man-Helemt](assets/photos/megamanhat.png)
* Photo source link on [Clipartmax](https://bit.ly/2JyCF9E)

## Game Background Photo 
The background photo was taken from the Title screen in Mega Man 2. It compliments the game, and gives that Mega Man universe vibe. 
![Background-Game-Photo](assets/photos/megamanwallpaper3.png)
* Photo source link on [Wallpaperaccess](https://wallpaperaccess.com/mega-man)

## The Mega Man Logo

The Mega Man vector logo used was taken from a link called [Sprites-inc](http://sprites-inc.co.uk/thread-1889.html) from one of the site members called gaemon. 

To make it more immersive and relevant to the name of the Mega Man-themed memory game, I added the text "Memory Game." This was edited using [Canva](https://www.canva.com/). The text that was used is called "Squartiqa."

## Mega Man Cursor

On a Desktop and Laptop, I have added a Mega Man cursor to make the gaming experience more immersive and fun. The cursor can be found on 
[cursors-4u](http://www.cursors-4u.com/cursor/2009/02/17/mega-man-2.html)

![Mega-Man-Cursor](assets/photos/megamancursor.png)

## The Game Music

* Once the "Start Game" is pressed, the game begins with the background music played on a loop. 
* 4 other sound effects can be heard: 
    * When choosing a card
    * When 2 cards are match 
    * When it's Game Over 
    * When you win the game
* Selection of the music and sound effects have been carefully selected to compliment the game itself. For Mega Man fans, this will also reminisce their gaming experience when they are playing a Mega Man game. 

Music were downloaded from [khinsider](https://bit.ly/3qzSSMr) and [101soundboards](https://bit.ly/2JY49VG).

### Start Game Music Background
* Check the music link [here](https://bit.ly/36OjOzS)

### Card Picker
* Check the music link [here - Number 6](https://bit.ly/36O8GmK)

### Cards Match
* Check the music link [here - Number 26](https://bit.ly/3gnH0Z5)

### Game Over Sound 
* Check the music link [here](https://bit.ly/3lM0Jmj)

# Colour Theme

* Choosing the colour theme for this game was mainly inspired from the colour palette's of both Mega Man and Proto Man characters. 
* Mega Man has elements of Blue, while Proto Man has elements of Red. 
* Colour palette for Mega Man was idea was taken from the color-hex link created by a user named [dunstontc](https://www.color-hex.com/color-palette/25174).
* Colour palette for Proto Man was idea was taken from a site called [diariesofanessexgirl](https://diariesofanessexgirl.com/retro-proto-man-color-palette) and created by a user named [Joshua Margolin](https://diariesofanessexgirl.com/retro-proto-man-color-palette/).
* I've compiled all the colour palette ideas incorporated in the game from a site called [coolors](https://coolors.co).

![colour-pallette](assets/photos/megamangamecolours.png)

### Mega Man Image
![Mega-Man](assets/photos/megaman1.jpg)

### Proto Man Image
![Proto-Man](assets/photos/protoman.jpg)

Character information [here](https://bit.ly/33RGxJK)

# Google Fonts

I went for 2 fonts to compliment the theme of the game using [Google Fonts](https://fonts.google.com/). They are: 

* [Rubik Mono One](https://bit.ly/3lVUL2x) - For the Timer and Flip text.
* [Press Start 2P](https://bit.ly/3gdH4us) - For the Start Game, You Win, and Game Over Text.

# Deployment

Mega Man Memory Game was developed on GitPod, using git and GitHub to host the repository.

When deploying Mega Man Memory Game using GitHub Pages, the following steps were made: 

* Opened up **GitHub** in the browser.
* Signed in using username and password. 
* Selected my **repositories**.
* Navigated to **'/GlobetrotterG/mega-man-memory-game'**.
* In the top navigation clicked **'settings'**.
* Scrolled down to the **GitHub Pages** area.
* Selected **'Master Branch'** from the **'Source'** dropdown menu.
* Clicked to confirm my selection. 
* Love Cebu! is now live on GitHub pages.

## Cloning Mega Man Memory Game from GitHub

* Navigate to **'/GlobetrotterG/mega-man-memory-game'**.
* Click the green **'Clone or Download'** button.
* Copy the url in the dropdown box. 
* Using your favourite **IDE,** open up your preferred **terminal**. 
* Navigate to your desired file location. 
* Copy the following **code** and input it into your terminal to clone Mega Man Memory Game.

```
git clone: https://github.com/GlobetrotterG/mega-man-memory-game.git
```

# Testing 

## Testing this game based on the User Stories found in the UX section

* User Story 1: As a user, I want to play a game that is fun, colourful, interactive and conceptual. 

    * Plan
      I want to create a Memory Card game that is inspired by the Capcom game called "Mega Man," and decided to choose 6 characters from Mega Man's 1-5. Every Mega Man game has elements of colours, and this is visible with the overall theme of the game, from the charcters to text choice to synopsis of the 5 games. I wanted a concept that felt like you are in the world of Mega Man.
    
    * Implementation
      After carefully selecting the characters for this game, I made sure that they were colourful, and appealing to the user. Something that catches their attention. I selected my favourite for every part of the 5 Mega Man games. I also made sure that Mega Man himself was included as a character. The characters chosen were colourful. I made sure that the choice of background music and sound effects will make it interactive and fun for the user. In addition, a Mega Man cursor was added to the game to add an element of fun to it when used on a desktop. 
    * Test 
      I coded all the cards to include the 6 characters. Coded the audio music on JS, and decided to style the character cards that when cards match, it dances. Added the cursor link in CSS.

    * Result 
      The outcome turned out the way I wanted it to be. The characters were pleasing to the eyes, the background music when the game starts made the game upbeat and fun. The music that you hear when you win or lose, or even when you pick a card or match has that proper retro video game that sounds fun and catchy. They mini Mega Man cursor made the game even more fun and interactive.

    * Verdict
       The test has passed and meets user expectations. 

* User Story 2: As a user, I want to play a game that provides me instructions on how to play it.

    * Plan
      I want the user to see an instruction on how to play the game before they started the game. My plan was to create a separate page for the user to read the instruction on how to play the game.
    
    * Implementation
      Due to the time constraint in creating this project, I decided to add the instructions when the user starts playing the game which is shown on top of the deck of cards. 

    * Test 
      I wrote a H1 Text on HTML to provide instructions on how to play the game. Everytime I test the game, I kept questioning myself if it would be best to add it to the Start Game Text before they entered the game, as the timer and music will automatically start the moment they enter and will not have time to read the instruction, and therefore, will feel short-changed with the time they play the game.

    * Result 
      After considering placing the instruction message together with the Start Game text, I felt it was more suitable for the user to know what is expected of the game before they start playing. 

    * Verdict
      This achieves user stories expectation.

* User Story 3: As a user, I want a game that works on a laptop, desktop, tablet and mobile. 

    * Plan
      My plan is to create a game that can be played on any device. The thought process initially was how this game can be responsive on all devices. 
    
    * Implementation
      Making the game responsive was finalised on the last steps of creating this game. I was thinking whether to use Bootstrap, CSS grids, or Media Query. Due to the time constraint, I didn't want to change any codes the last minute. So had to weigh my options, and went for the Media query option. 
   
    * Test 
      I had to experiment with a few styling to get the right level of responsiveness of the game, especially on a mobile device and used Media Query on my CSS. I experimented putting the cards on a row of 2, 3 and 4 to see how it works on a mobile. I also tested the text of the starting and closing of the text to check its responsiveness. I styled my media query appropriately, to include the card and all the text in, and customised them to make it responsive to the mobile version, which meant reducing the font size and the size of the cards. 

    * Result 
      After testing the rows of 2, it felt tedious for the game to played to the mobile, as you have to keep scrolling down to find the match which is frustrating. With the row, I noticed that this didn't work. I tried it on the Chrome Developer, mainly testing it using the iPhoneX option, the left card isn't showing on the screen. I felt that using the row of 3 was a better option. After how many attempts of getting the right style, I was able to make it responsive on the mobile. The only issue I've just noticed now is that when using an iPhone device, some cards were facing front, even when I restarted the game. 

    * Verdict
      For the Samsung device, this game is showing that it's responsive and no issues with the deck of cards turning back. But on the iOS, it seems like there's a bug when the game is played. Due to the lack of time troubleshooting this, I will look into this after project submission. It's partially, achieved the user expectations.

* User Story 4: As a user, I want to play a game tests and challenges my memory skills within a timeframe. 

    * Plan
      My plan is to create 16 deck of cards and give a time limit of 1 Minute and 30 Seconds. This gives enough time for the user to complete the game within the set timeframe, or challenges them to familiarise the characters and would make it easier for them to remember the positioning of the cards to be matched. 
    
    * Implementation
      Due to the time constraint and simplyfying this game, I decided that a deck of 12 cards would be a suitable option, that still gives the user challenges to play the game, and have also reduced the timer to 60 seconds. The cards have been coded to have it shuffled everytime they restart the game. I also included the number of flips, in order for the user to assess the number of times when they flip the cards. This is a way for the user to be more challenged with how many times they should flip the cards and identifying where the matched cards are located. It adds to the challenge the user is expecting. The challenge begins when the user clicks the Start Game on the screen, and the timer starts to signal that the game has already started. 

    * Test 
      I have tested the cards a few times, and they were all successfully shuffled. There was an instance when I restarted the game by using the refresh button that I noticed that the card doesn't flip back and were all left front facing. I carefully inspected the code in JS, but couldn't find any mistakes. 

    * Result
      After a few attempts with checking the code, I didn't experience the problem again and cards were turned back when restarted. 

    * Verdict
      After a few tests and seeing if cards shuffled, and cards were facing back before the start of the game. The test passed, and this meets the expectation of the user.
    
* User Story 5: As a user, I want a game that lets me play repeatedly.

    * Plan
      My plan is to come up with ways for the game to be played multiple times for the enjoyment of the user. Whether this is during or after the game.  
    
    * Implementation
      I decided to include a restart button on the screen when the user is playing and also when they have won or lost the game as a text. When they click the text, this would restart the game. 

    * Test 
      The restart text was tested several times to see if it takes the user back to the game. I also checked if the cards have turned back and re-shuffled. For the restart button, I've created the button together with the mute/unmute button. 

    * Result 
      After several test both of the reset features, they have worked, and the game restarts with the cards facing back and re-shuffled. 

    * Verdict
      The test has passed and meets user expectations.

* User Story 6: As a user, I want to experience playing a game inspired by one of the classic games that is nostalgic. 

    * Plan
      My plan was to create a game that was inspired by one of the most popular video games created by Capcom in the lates 80's until the early 90's, and Mega Man came up. This was one of the most popular games back then, and when I First played it, it was one of the best video game experienced I had. I discovered recently that Google Play has several Mega Man games available to download, which I did. This is one of the most nostalgic game, and Capcom afficionados, and even Manga fans would still talk about Mega Man, or you would see Cosplay costumes worn that is Mega Man.   
    
    * Implementation
      Choosing Mega Man as the theme for this memory game had a lot of thought being put in it. Choosing the classic characters, which were from the First 5 games, to the music selection, text and background photo used for the game. All these and the 12 deck of memory cards were added to this game. Background photo was selected as this came from Mega Man 2, and was one of the most iconic title page picture in the Mega Man game. The music was also the title page soundtrack from Mega Man 2, which has that retro vibe. 

    * Test 
      Carefully selected the characters for the card. As they were downloaded using 2 different sites, one came out as a jpg and png. The background colour of the pictures were visible, so had to remove them using Canva. The music and soundtrack were carefully selected to set the tone an ambiance of the games theme. The font of the messages showing if the user has won or lost, or even before they start the game was also selected and chosen from Google Fonts to see if it compliments the games theme. The font called Press Start 2P was selected and tested.
      
    * Result 
      After removing the background colour from the files of the characters this worked only if the colour of the front card was White, as some files had the characters colour transparent. The music selected complimented the theme of the game, as well as the font selected from Google font complimented the games theme. It gave the game a retro vibe, and especially when a Mega Man hears it, they will recognise which Mega Man game the music was used. 

    * Verdict
      The test has passed and meets user expectations.

* User Story 7: As a user, I want a game that I can control the music or sound at my convenience. 

    * Plan
      My plan is to come up with an option for the user to mute and unmute the music of the game. There might be instances were the user would like to play the game without any audio distractions, and I want to make sure I find a way to achieve this.   
    
    * Implementation
      I decided to create a mute/unmute in one button. In addition to this, I have paired this with another button which is the restart button. When the user clicks the mute/unmute button, this will silence the audio background, and any other sounds effects associated to the game. They can press the mute/unmute once again to unmute the audio background. This can be done at the users convenience. 

    * Test 
      I've tested the functionality of this button throughout playing the game to see if it does mute or unmute the audio background. 

    * Result 
      The button works as planned, and mutes when I press the button, and then unmutes when I press the same button.   

    * Verdict
      The test has passed and meets user expectations.   

## Bugs

* On the initial creation of this project, I've noticed a lag on the game when using a desktop, but as I progressed with coding this project, the lag was auto corrected. 
* As I was testing the finalised game on iOS devices, I have noticed a lag with the cards. After how many attempts of restarting it, the issue still persists. When I inspected the project on Google Chrome Developer tools, and used the iPhone options, I didn't see any lags or issues. Due to the time constraint, I will not be able to fully investigate and fully troubleshoot this, but I will definitely need to further troubleshoot this after project submission. 
* In addition to the issue, I inspected the console log on Google Chrome development tools, it didn't show any Red messages or errors for me to identify any bug issues. 

## Other Tests Carried Out 

* Site was coded using a Dell XPS 13 laptop and also used it to test website responsiveness on laptop.
* Mobile site version was tested using an iphone 7, iphone 7 Plus, and Samsung Galaxy S10+. 
* Tablet site version was tested on an ipad Air.
* To test overall website responsiveness for Laptop, Desktop, Mobile and Tablet, I also used Google Chrome DevTools.
* HTML code was tested using [W3C Markup Validation Service](https://validator.w3.org/)
* CSS code was tested using [W3C CSS Markup Validation Service - Jigsaw](https://jigsaw.w3.org/css-validator/)
* JavaScript code was tested using [JSHint](https://jshint.com/)

# Technologies Used

## Languages Used

* HTML 
* CSS 
* JavaScript

Tools and Libraries
* Chrome Developer Tools
* Google Fonts 
* Bootstrap
* GitPod
* GitHub
* bitly
* W3schools
* MDN web docs
* TutorialRepublic

# Credits

## Photos and Logo

* For the the photos, logo, cursor used in this project, including the editing of it, I want to give credit to the following: 

    * [Clipartmax](https://www.clipartmax.com/)
    * [favpng](https://favpng.com/)
    * [Canva](https://www.canva.com/)
    * [Sprites-inc](http://sprites-inc.co.uk/)
    * [Wallpaperaccess](https://wallpaperaccess.com/mega-man)
    * [cursors-4u](http://www.cursors-4u.com/cursor/2009/02/17/mega-man-2.html)

## Music

* For the Music and Sound effects, I want to give credit to the following: 

    * [khinsider](https://downloads.khinsider.com/)
    * [101soundboards](https://www.101soundboards.com/)

## Colour

* For the Colour themes, I want to give credit to the following: 
    * [color-hex](https://www.color-hex.com/)
    * [diaries of an essex girl](https://diariesofanessexgirl.com)
    * [Coolors](https://coolors.co/)

* I used [Coolors](https://coolors.co/) to remove the background on the character's photos.

## Game Character Information 

* For the additional information provided here in README for the backstory of Mega Man and the Robot characters, I want to give credit to the following: 

    * [Wikipedia](https://en.wikipedia.org/)
    * [Fandom](https://www.fandom.com/)

## Acknowledgements

I want to extend my biggest gratitude to the following: 

* Once again, I want to thank my amazing mentor, [Simen Daehlin](www.github.com/Eventyret), whose been very inspiring and motivating throughout this project. This was one of the most challenging projects I've faced, but he gave me the "You can do it!" mindset. Fast forward, and now I am able to create this project with his motivation. Thank you, Simen! 
* I also want to thank the Code Institute community via Slack. We have such an amazing group who shares the same passion and interest in what we do! The guys in Slack have been very helpful with any questions I may have, or any students who may have similar questions to me.  
* I want to thank [Capcom](http://www.capcom-europe.com/) for creating a game that made waves in the games industry. Without their creation of the Mega Man game, I would have not been able to draw inspiration in creating this project! 

Throughout the behind-the-scenes in creating this project, and having a lot of experimenting and checking what works for this project, I want to thank these content creators and developers who are masters of their crafts in the world of Software development, as I've drawn inspiration and insights for this project by checking their tutorials, and also researching using w3schools and MDN web docs: 

* [How To Code A Card Game In Plain JavaScript - Spooky Halloween Edition by PortEXE](https://www.youtube.com/watch?v=3uuQ3g92oPQ)
* [Memory Card Game - JavaScript Tutorial by freecodecamp.org](https://www.youtube.com/watch?v=ZniVgo8U7ek&t=876s)
* [How to Code a Card Matching Game by Web Dev Simplified](https://www.youtube.com/watch?v=28VfzEiJgy4&t=168s)
* [Make MEMORY GAME in JavaScript, HTML and CSS for your porfolio by Code with Ania Kubów](https://www.youtube.com/watch?v=tjyDOHzKN0w&t=317s)
* [How to code Card Memory Game with Javascript 10 mins by codeTonight](https://www.youtube.com/watch?v=QrTCHHhoUQU)
* [How to build a Memory Matching Game in JavaScript](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript)


# Site Disclaimer 

* This game site and its contents were created for educational purposes. No Copyright infringement intended to [Capcom](http://www.capcom-europe.com/).