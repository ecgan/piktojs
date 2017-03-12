## Note

### How it works

1. When the page is loaded:
 * the app will request for the list of images by calling `GET /images/`, and populate them as thumbnails in the side nav list.  
 * the app will check localStorage whether there is any saved canvas. If yes, load it into the canvas. 
2. Upload an image by selecting an image file and click the Upload button. The image will then be available at the `/images/` endpoint and will be added into the thumbnail list.
3. Click the Add Text button and there will be a prompt for you to key in your text. The text will then be placed on the canvas at the top left corner. You can add multiple texts on the canvas. 
4. Click on a thumbnail to insert the image onto the canvas. You can add multiple images.
5. The texts and images can be re-positioned by dragging around inside the canvas.
6. The texts and images can be removed from the canvas. To do that, hover your mouse over the item. The item will have a gray, dashed line border around it, and an X button at the top left corner. Click the X button to remove the item. 
7. To save your canvas, click the Save button in the side nav. Your canvas will automatically be loaded when you reload your browser. 

### Tech used

* jQuery 3.1.1, minified version, loaded from CDN, HTTP/HTTPS agnostic. 
* jQuery UI 1.12.1, minified version, loaded from CDN, HTTP/HTTPS agnostic.
 * This is used for the [Draggable](https://jqueryui.com/draggable/#constrain-movement) functionality only.
* localStorage to allow the user to save the canvas and reload the canvas upon browser refresh. 

### Future enhancements

* Use cycle.js (a functional and reactive JavaScript framework ) to better separate the application logic and external world effects (e.g. views, user interactions, DOM events, HTTP requests etc).
 * I tried but couldn't make cycle.js work with the app the way I want it to. Time is limited, therefore I had to fallback and use the jQuery library that I'm more familiar with. 

------------------------------------------------------------------------------------------------------

## Instructions

You are required to implement a single page application that allows user to add text and image into canvas.

## Features

Below are the basic features for the application:

- user can see the existing images from folder `images` to the images list
- user can *upload image* to folder `images` and directly added to images list
- user can *add and remove image / text* from the menu to the canvas
- user can *move the image / text* around the canvas

Bonus points if you can provide this feature:

- the created objects on canvas can be saved and repopulated on refresh browser

## Resources

You will be given a HTML and CSS file with simple structure, and a server that allows you to upload and retrieve image. Instruction on how to run the server is included below.

## Requirements

Here are the expected requirements:

- App should have the features listed [above](#features)

- App should work on modern browsers (Chrome / Firefox)

- App logic and data flow are written in a functional and reactive way

    Separate the logic between app state and view / user interactions (unidirectional data flow). 

- Try to avoid using libraries as much as possible

    If you need to use libraries, we recommend ReactJS, RxJS / xstream, CycleJS, and jQuery.

    _note: use native HTML element `<div>` for editor canvas, not `<canvas>`_

Bonus points given for these requirements:

- Code and flow should be properly documented

    Help us understand your flow easier by code comments or a readme file.

- Build automated test for the app


## How to Submit

- Zip your working folder with the name `<your name>-piktojstest`

- Exclude `node_modules` folder from the zip

- If you're using github or any code management tools, you can pass us the link

- You have **one day** to complete the test. If you are not able to finish, do send us whatever you have done, we will evaluate accordingly. If you need more time to fulfill all the features and requirements, we can give you **an extra day**

Have fun programming 😊

## How To Install

To set up the environment dependencies ( node version 5++ )

```
$ npm install
```

To run the node server

```
$ npm run start
```

Server is listening to port `8000`

### API

#### get uploaded images

```
GET /images
```

#### upload image to server

```
POST /uploads
```

### Note

_- The name of the file input has to be `upload` as this is what the server will be reading from_
_- The server only accepts `png` and `jpeg` file format_
_- You are allowed to edit the server.js file_
