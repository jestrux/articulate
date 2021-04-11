# Articulate

Javascript library for dynamic content creation.


## The Basics
In the beginning Articulate started as a generator for articles heavily inspired by medium and if you're working on a client website with blog or article content, this would be a nice thing you add to the blog creation page of the CMS.

![Medium Style Text Editor](/screenshots/sample-blog.jpg?raw=true "Medium Style Text Editor")

Like medium, Articulate provides an option to easily add in article elements beyond just text. Things like quotes, images, youtube videos e.t.c. 

Here's an example on how a user can search an image on unsplash and add it to the article.

![Image picker](/screenshots/image-picker.jpg?raw=true "Image picker")


For a basic usage of Articulate, you just include it in your project, and then all that's left is to add this one line.

```javascript
new Articulate("#articleBody");
```

## Custom UI elements

By default articulate ships with five ui elements `Image`, `Alert`, `Quote` and `Youtube Video` which are are all basic javascript classes. Articulate also provides an easy way to add in your own ui elements should you need to. Here's how you do that:

```javascript
import SomeUiElement from './path/to/SomeUiElement';
new Articulate("#articleBody", {
    uiElements: { SomeUiElement }
});
```


## Composition

Although the initial idea was for articulate to be a simple library for content generation, the latest verion simply composes three core building blocks `ComponentPicker`, `ComponentEditor` and `FieldEditor` each of which can be imported separately and used on its own.

### ComponentPicker

Component picker can be used to pick premade templates, for the default library that was made for building blogs, the premade templates were `Text`, `Image`, `Alert`, `Quote` all of which can be found here 👉. Take a look at them to get a sense of the format for Articulate Templates.


Most times however you'll probably be working with custom components, to see an example of custom components, see the example code below.


```html
<button onclick="addScreen()">
    Add Screen
</button>

<script type="module" src="path/to/articulate.js"></script>

<script type="module">
    // Import your components
    import * as TriviaTemplates from './trivia-game/components';

    window.addEventListener("load", () => {
        window.articulate = new Articulate("#screens", {
            lean: true,
            editOnFocus: true,
            // tell articulate use your components instead of the default components
            uiElements: {...TriviaTemplates},
            uiElements: {...TriviaTemplates},
            className: "TriviaCard"
        });
    });
</script>

<script>
    function addScreen(){
        if(articulate)
            articulate.add();
    }
</script>
```

This code was taken from the trivia code game demo found [here](/public/demos/trivia-game/index.html) and which could be used to make something that looks like this 👇

![Nerd Trivia](/screenshots/nerd-trivia.jpg?raw=true "Nerd Trivia")


If instead you want to add your components on top of the default articulate copmonents, you can do that by using `extend` like so 👇

```javascript
new Articulate("#article", {
    extend: {
        uiElements: { BcCtaBanner }
    }
});
```

You can see the rest of the code above [here](/index.html)

## Other Customizations

|Prop|Description|Default|
|--|--|--|
|`editOnFocus`| Whether to edit on focus or when edit button is clicked | true |

## Contribution

Clone this repository to your machine :

``` bash
git clone https://github.com/jestrux/articulate.git
```

Install dependencies with npm :

``` bash
npm install
```

## Included Commands

|Command|Description|
|--|--|
|`yarn dev`| Run dev server |
|`yarn build`| Build for production |