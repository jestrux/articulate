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

![Component picker](/screenshots/pick-component.png?raw=true "Component picker")

Component picker can be used to pick premade templates, for the default library that was made for building blogs, the premade templates were `Text`, `Image`, `Alert`, `Quote` all of which can be found [here 👉](/src/components/UIElements). Take a look at them to get a sense of the format for Articulate Templates.

Here's a quick example of how to use the component picker.

```html
<button onclick="addItem()">Add Item</button>

<script src="path/to/component-picker.js"></script>
<script type="module">
    import ImageGrid from "./image-grid-component.js";
    window.ImageGrid = ImageGrid;

    const { pickComponent } = new ArticulateComponentPicker();

    window.addItem = pickComponent(component => {
        if(component != undefined){
            const div = document.createElement('div');
            div.innerHTML += component.render();
            document.body.appendChild(div.firstChild);
        }
    });
</script>
```

#### Other Customizations

|Prop|Description|Default|
|--|--|--|
|`centerComponentPicker`| Show component picker at the center of the screen  | false |
|`blurComponentPicker`| Add blur effect to component picker, see demo image above | false |


### ComponentEditor

![Component editor](/screenshots/component-editor.gif?raw=true "Component editor")

Component editor can be used to edit components. Now while this is intended to work with premade templates. 

Here's how you can use the `ComponentEditor`

```html
<script src="path/to/component-editor.js"></script>
<script type="module">
    import ImageGrid from "./image-grid-component.js";
    window.ImageGrid = ImageGrid;

    const { editComponent, uiElements } = new ArticulateComponentEditor({
        uiElements: { ImageGrid }
    });

    const usersGrid = {
        label: "Image Grid",
        component: "ImageGrid"
    };

    editComponent(usersGrid, ({options}) => {
        grid.values = {
            ...grid.values, ...options
        };

        usersImageGridWrapper.innerHTML = grid.render();
    });
</script>
```
#### Other Customizations

|Prop|Description|Default|
|--|--|--|
|`onComponentSaved`| If set, a submit button will be shown at the bottom of all fields and will call this function when clicked | null |


### FieldEditor

![Field editor](/screenshots/field-editor.gif?raw=true "Field editor")

Field Editor is used to edit sinlge fields, to do that pass an object of the field properties such as label and type. The type can be `text`, `long text`, `image`, `link`, `choice`, `radio` or `boolean`.

Here's how you can use the `FieldEditor`

```html
<button onclick="editFunExperiencesCard(event)">
    Edit Card Background
</button>

<script src="path/to/field-editor.js"></script>
<script>
    const { editField } = new ArticulateFieldEditor();

    function editFunExperiencesCard(event){
        let card = event.target;
        if(!card.classList.contains('funExperiencesCard'))
            card = card.closest('.funExperiencesCard');
        
        const field = {
            label: "Fun Experiences Card",
            type: "radio",
            choiceType: "color",
            choices: ["black", "silver", "burlywood", "mediumaquamarine", "darksalmon", "cornflowerblue", "peachpuff", "cadetblue", "lavender", "skyblue", "wheat"],
            value: card.style.backgroundColor,
            autoSave: true
        }

        editField(field, (value) => {
            if(!value) return;

            card.style.backgroundColor = value;
            card.style.color = value == "black" ? "white" : "black";
        });
    }
</script>
```

The code above and the gif demo was captured from the content-editor demo [here 👉](/src/demos/content-editor/index.html).

#### Other Customizations

|Prop|Description|Default|
|--|--|--|
|`choiceType`| If set to color, and type is radio, the radio buttons will look like color  | null |
|`colors`| If you want to have different values for value and displayed color | null |
|`autoSave`| If set to true, field editor will automaticlly close when any change is made | false |
|`onSaveCustomField`| If set, a submit button will be shown at the bottom and will call this function when clicked | null |


## Full Demos

### Trivia Game Creator

![Nerd Trivia](/screenshots/nerd-trivia.jpg?raw=true "Nerd Trivia")

Show case of using the full Articulate to create screens for a trivia game based on three preset templates.

See the code here: [here 👉](/src/demos/trivia-game/index.html).


### Inline Content Editor

![Content Editor](/screenshots/content-editor.jpg?raw=true "Content Editor")

See how field and component editors can be used(with some imagination 😅) to change a site's content and layouts inline.

See the code here: [here 👉](/src/demos/content-editor/index.html).


## Contribution

Clone this repository to your machine :

``` bash
git clone https://github.com/jestrux/articulate-preact.git
```

Install dependencies with yarn :

``` bash
yarn
```

## Included Commands

|Command|Description|
|--|--|
|`yarn dev`| Run dev server |
|`yarn build`| Build for production |