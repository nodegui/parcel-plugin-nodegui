# 📦 parcel-plugin-nodegui
> Use and bundle assets with your nodegui app

## General
This plugin allows you to import actual assets, such as css and image files, into your NodeGUI app and utilize them in your app.

## Features
* Utilize CSS files in your code using `require` (much like web and React Native) 🎨
* Import image assets and utilize them with QImage widgets using `require` 🖼

## Installation
Run the following command:
```bash
npm install --save-dev parcel-plugin-nodegui
```

## Plugins
### CSS
Import and use css with your NodeGUI windows's `styleSheet` prop.

#### Usage
In order to use CSS in your NodeGUI app, simply require it:
```js
const style = require('./style.css');
```

And use it with the `Window` widget's `styleSheet` property:

```jsx
<Window styleSheet={style}>
  ...
</Window>
```

> Note: Do not forget that selectors in NodeGUI apps are the elements' ids, and therefore you should use the `#thisIsId` selector in your stylesheets.

#### Example
_style.css_
```css
#container {
  flex: 1;
  flex-direction: column;
  min-height: '100%';
  background: #4B4B4B;
}

#text {
  color: white;
}
```

_app.jsx_
```jsx
const App = () => {
  return (
    <Window
      styleSheet={require('./style.css')}
    >
      <View id="container">
        <Text id="text">Hello, world</Text>
      </View>
    </Window>
  );
};
```

#### Using with pre-processors (SASS \ LESS)
Simply follow the regular guide regarding how to use said pre-processors in your project:
* SASS: https://parceljs.org/scss.html
* LESS: https://parceljs.org/less.html
* Stylus: https://parceljs.org/stylus.html

The plugin will automatically utilize their output CSS in your project.

### Images
Import and use image files with your NodeGUI's `Image` components.

#### Usage
In order to use image assets in your NodeGUI app, simply require them:
```js
const image = require('./image.png');
```

And use them with the `Image` widget's `src` property:

```jsx
<Image src={image} />
```
