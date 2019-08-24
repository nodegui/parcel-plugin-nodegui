# 📦 parcel-plugin-nodegui-stylesheets
> Use actual css (or even sass or less) to style your NodeGUI app!

## General
This plugin allows you to import actual stylesheets into your NodeGUI app and utilize them in your app.

### Example
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

## Usage
### Installation
Run the following command:
```bash
npm install --save-dev parcel-plugin-nodegui-stylesheets
```

And now you're good to go!

### Utilizing CSS in your NodeGUI app
In order to use CSS in your NodeGUI app, simply import or require it:
```js
import * as style from './style.css';
```

Or:
```js
const style = require('./style.css');
```

And use it with the `Window` widget's `styleSheet` property:

```jsx
<Window styleSheet={style}>
  ...
</Window>
```

### Using with pre-processors (SASS \ LESS)
Simply follow the regular guide regarding how to use said pre-processors in your project:
* SASS: https://parceljs.org/scss.html
* LESS: https://parceljs.org/less.html
* Stylus: https://parceljs.org/stylus.html

The plugin will automatically utilize their output CSS in your project.