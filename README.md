# Mist Mobile Js Framework
Mist mobile js framework is developed for creating Android Native like UI on web applications with the help of web technologies with highly advanced UI Security features. 

## UI Security
UI Security in MIST Mobile is too powerfull because MIST Mobile blocks the direct access to the UI Elements by coating every element with an unique Identifier which can be only accessed via <code>app_data</code> and also MIST Uses DOM (Document Object Manupulation) for not pre rendering the UI but render it once the JavaScript has been loaded. Also MIST Mobile supports the pre rendered html version of the whole UI so it also uses the <code>FOZ DTX COLOR EYE ENCRIPTION</code> for encrypting the whole UI Direct HTML as ASCII characters which are not directly human readable.

## Installation
Please download the MIST Mobile whole repository as zip and then follow the steps.

1.) Download the repository as zip.
2.) Create a new directory containing your html files.
3.) Extract the repository in the root directory of your website.
4.) Include the <code>mist.mobile.js</code> in yout html file where you want to use MIST Mobile JS.
5.) Start by writting code.

## Tutorial for Coding
Okay so now i am hoping that you have already completed the installation process successfully. If yes then let's exlpore the coding for MIST Mobile. If not then install it with the steps shown above the page on Installation section.

### Understanding the Syntax
MIST Mobile has an advanced syntax because it is both beggner friendly but also for some advanced programmers from C/C++ background because MIST Mobile was written in mix of JavaScript and C/C++. Whole Widgets part is written in JavaScript but some backend files are written in C++. Example file IO. Yes MIST Mobile provides a JavaScript way for File Input and Output with the help of Web Assembly (WASM) compiled with Emscripten and C++ but these things are still experinmental and may not work properly.

<b>Starting code</b>
```javascript
/*

    Mist Mobile JS Framework for Website development
    Written by ghgltggamer
    at : 11:36am 19 Aug 2024
    Copyright (c) ghgltggamer
    License : MIT License
    README.md contains all the information about project 
    License file : LICENSE.txt

 */```

These lines are classic lines which defines a comment containing all the information about MIST Mobile JS.

### MIST Mobile Config
MIST Mobile Config is an object contains all the information about the MIST Mobile Current version you are using

Here is how this object looks like
```javascript
// Configuration of MIST Mobile
const MIST_Mobile_Config = {
    Version: 1.0,
    Name: "Mist Mobile JS Framework",
    Author: "GHGL TG GAMER",
    Author_Contacts: {
        YouTube: "https://www.youtube.com/@ghgltggamer/",
        SocialCounts: "https://socialcounts.org/youtube-live-subscriber-count/UCr18zQWXLPyXArqlW8g3ytw/embed"
    },
    Author_Contacts_Platforms: ["YouTube", "SocialCounts"],
    VersionName: "Lumpit-Lumkit",
    VersionStatus: "Completed",
    License: "MIT License",
    License_Type: "FIle",
    License_FIle: "LICENSE.txt",
    Readme: "README.md"
}
```
Information:- 
    Version: Tells the current version of MIST Mobile you are using.
    Name: Tells the full name of MIST Mobile you are using.
    Author: Tells the author name
    Author_Contacts_Platforms: Returns an array containing all the names of those platforms where you can contact the author
    Author_Contacts: Is an object containing all the links to the platforms where the author can be contacted
    VersionName: Tells the name of the MIST Mobile version you are using
    VersionStatus: Tells the version status of development this could be ['Completed', 'Beta', 'Expernimental']
    License: Tellsabout which license has been used
    License_Type: Tells about license type which could be ['FIle', 'embeded']
    License_FIle: If License_Type is FIle and this will eligible for accessed and tell the license file name but if not then this will simply don not do anything.
    Readme: Tell you the name of readme file from which you are learning about MIST Mobile.


### Widgets
WIdgets are one of the most important topics in MIST Mobile UI Framework becayse they are designed for making Android like UI on web with JavaScript. You can also use MIST Mobile Widgets for creating your own widgets with ease.

<b>Why would i learn MIST Mobile Widgets? </b>
You should learn widgets in MIST Mobile because these are designed to simplify the development process. for example you are creating an Android App and you want Android Native Style button if you implement it yourself then it would take you a lot of time and effort but with MIST Mobile Widgets just with few lines of code you can build and even re-use your own widgets with ease.

<b>Widgets types</b>
MIST Mobile contains 2 types of widgets .
1.) MIST MOBILE Native
2.) MIST MOBILE External

<b>MIST MOBILE Native</b>: These widgets types are already comes builtin with MIST Mobile and these are so powerfull and versatile widgets which allows you to re use them also.

<b>MIST MOBILE External</b>: These widgets types are not builtin with MIST Mobile exept these widgets needed to be downloaded or create by self,

### Deep Diving into MIST Mobile Widgets
Okay so as you now has theory of Widgets of MIST Mobile now let's start by developing your application with MIST Mobile Powerfull Native Widgets.


### MIST_Mobile_Widgets [class]
<code> MIST_Mobile_Widgets </code>  contains all of the widgets in an order which prevents the naming conflicts. You would need to define this class before accessing any widget othervise you will not be able to draw widgets on your application.

<b> Syntax </b>
The syntax follow standard JavaScript syntax which is

const yourwidget = new MIST_Mobile_Widgets;

make it sure to replace "yourwidget" with anything you want and this variable will be responsible to serving you MIST Mobile builtin native widgets.

for Example :
```javascript

// Accessing the widgets inside myWidgets variable , constable is prefered.
const myWidgets = new MIST_Mobile_Widgets;

```


<b> How to access widgets after class defination </b>
It is important to access widgets after the class has been defined within a variable, It's always recommended to create a new constant variable before acessing any widget because every widget method will return so many things which you really need. 

for Example:
```javascript

// Accessing the widgets inside myWidgets variable , constable is prefered.
const myWidgets = new MIST_Mobile_Widgets;

// Ignore the button method for now we will talk about it later
const myButton = myWidgets.button("Click me");
myButton.render(document.body);

```

Please ignore the button widget function as we will discuss about it later but just for now see the format we have used. 

First we initalised the class <code> MIST_Mobile_Widgets </code> in a variable named myWidgets and then we created a new variable for the button we want to create and then we assigned ows initalisation myWidgets with <code>button()</code> widget and then we used our button widget variable to render it in the body of the webpage , Again i am repeating do not be scared or confused with button() for now we will talk about it later in this documentation in depth so do not be worry.


<b>Note: The Widgets are plural becase MIST Mobile has a lot of Native builtin widgets to use as per version defination so do not be confused with widget and widgets while writting code with MIST Mobile, Widgets are always plural</b>


### MIST_Mobile_Init() [function]
<code>MIST_Mobile_Init()</code> is a function of MIST Mobile which is needed to initalise configuration of your Project for example styles, widgets and any other thing you need. 

<b>Syntax</b>:
MIST_Mobile_Init() follows very simple syntax becuse ot just need an initaliser before processing anything and then it initalises the initaliser if valid.

MIST_Mobile_Init(Initaliser);

Make sure to replace the "inisaliser" with actual initaliser othervise it may through errors.

<b>Initalisers</b>:
Okay so you have learned this function but beleave me without initaliser there is not use of this function so why not to know about what you can initalise with it let's dive deep into it , here are the list of initalisers you can parse in this function for initalising anything you want.

1.) MIST_Mobile_Button
2.) MIST_Mobile_Init_Everything

<b>MIST_Mobile_Button</b>: Initalises the MIST Mobile button widget styles which are needed to be initalised othervise you will see errors on console when ever you will try to draw a button widget.

<b>MIST_Mobile_Init_Everything</b>: This initalise every single initaliser you will need in your project but also this will add a lot of load for some time to the cpu and on slower computer computer it can significiantly increase the reloading time of the webpage so if you are making a complex application then using this is recommended as this saves a lot of time but if you are just creating a simple application then you can initalise what every you want line by line.

One example:
```javascript

// Initalising button only
MIST_Mobile_Init(MIST_Mobile_Button);

// Initalising everything
MIST_Mobile_Init(MIST_Mobile_Init_Everything); // This will save your effort to initalising everything line by line yet by adding a lot of load for the cpu

```


### MIST_Mobile_Random() [function]
<code> MIST_Mobile_Random() </code> genrates a complex yet random and unique string which doesnot has a fixed length everytime the page has been reloaded or the function has been called it will generate unique and random complex strings. This method was using in a lot of builtin widgets of MIST Mobile for differentiating the widgets.

<b>Syntax</b>:
As it returns the complex string so you will need a variable to store that string so define a variable the assing this function to it.

const myRandom = MIST_Mobile_Random();

Makesure to replace the "myRandom" name with anything you want.

<b>How does it looks like?</b>
It looks like this
<pre>
    <code>
{get_number: 'MIST_MOBILE_RANDOM_9.8660051817136442.446459747843…408043901447674.21540218049090852.871706712045936', get_number_remove_random: 9.866005181713644, get_number_add_random: ƒ}get_number: "MIST_MOBILE_RANDOM_9.8660051817136442.44645974784321047.3586350601029183.6174832207935256.3611212472150427.6611819602040228.6912032613864752.61013549081757330.090063358094363280.52102005941118131.58331174201182818.5687565734187239.4819498127758385.1455803697692470.239128428982346998.3939270082743027.5936234863306236.2590106797305791.7552689402142230.53673685254697738.598726975948720.7408043901447674.21540218049090852.871706712045936"get_number_add_random: ƒ get_number_add_random(random)get_number_remove_random: 9.866005181713644[[Prototype]]: Object
    </code>
</pre>

<b>Why did it looked like that?</b>
If you are a professional JavaScript programmer then you might have noticed that It retuned an object containing some methods if yes then you are right it looked like this because it was a object renturned.

<b>Methods</b>
Now as you know that MIST_Mobile_Random() never directly returns the random number but once it is called it actually processes the number for you and then provides you some methods to access it. and those are

1.) get_number
2.) get_number_remove_random
3.) get_number_add_random() 

<b>get_number</b>: This is a variable returns the actuall random number which looks like this <code>MIST_MOBILE_RANDOM_2.24027399910744054.0434452436380249.668683602326624.6686803154319831.05474544223679976.6736099420237739.549404707193575.7488296065544335.7926618451807232.2730734819490954.286292510822361.85111340559464658.3637017978920783.47885921801875948.803821124377660.83945116527536227.4863508889964051.32089679615245318.2426718504085387.0117941560518431.73426902341524471.83064900907670146.09060716501556956.122805073537217</code> and this is a complex string not an float value as this contains MIST_MOBILE_RANDOM_ which is an indicator of that it is a MIST_MOBILE_RANDOM type generated alpha numeric string and this has been widely used for developing complex applications. Hut you really do not need to only focus on these because for simpler applications next method is great.

<b>get_number_remove_random</b>: This is another variable which contains the floating point value of the number looks like this <code>9.473919755176343</code> a large floating point value right but this is actually usefull and used many times for applications with <code>Math.floor</code> method as it only generated random but large floating point values in between 0 to 10.

<b>get_number_add_random()</b>: This method allows you add your own Random starting point to the final number which will be replaced with "MIST_MOBILE_RANDOM_" string and i can not show you the output for this because it needs an parameter which will be later used to replacing the random default keywords on starting.

for Example:
```javascript

// Creating a random alphanumeric string
const myString = MIST_Mobile_Random().get_number;

// Creating a random floating point value
const myFloat = MIST_Mobile_Random().get_number_remove_random;

// Creating a random integer 
const myFloat = Math.floor(MIST_Mobile_Random().get_number_remove_random);

// Creating a custom starting random string
const myRandString = MIST_Mobile_Random().get_number_add_random('MyRandom');
// Replace MyRandom with anything you want

```



### Understanding the Widget Fundamental
MIST Mobile has it's own Widget structure and fundamental let's explore those before learning our first MIST Mobile Widget because this is important for any type of application developed with MIST Mobile Widget.

<b>Fundamental</b>
Every single widget and element created with MIST Mobile is both parent and child but independent.

<b>What does it means?</b>
It means that every widget you will draw will be independent means you will have full controll on it even you can manipulate or kill that widget because this is the power which MIST Mobile offers you. Every single widget is also both child and parent means that parent says that you can put anything to parent widgets and the thing you put into it will be child of it and you can put something in that child so that it will become the parent of it but child of it's own parent and the parent widget you drawn will be the child of the document means it follows a tree where everything is both child and parent. but you will have full controll to it.

<b>for Example</b>
You have created a button widget and not it's a child of the document but MIST Mobile allows you to make the button a new parent and put any widget as a children to it. and then you ca directly manipulate all of those with MIST Mobile provided methods for example if you dekete that button then it's children will be also deleted. or you can , add, remove anyt particular children or direct play with root of the button which is the identity of the button from where it can be fully controlled but MIST Mobile not stops till here but it can also give you the access to direct button element where you can easily manipulate and even destroy it. also you can remove all the childrens of that button in seconds.