# 📦 parcel-plugin-nodegui
> Use and bundle assets with your nodegui app

## General
This plugin allows you to import actual assets, such as css and image files, into your NodeGUI app and utilize them in your app.

You can see an example project that uses parcel and this plugin [here](https://github.com/illBeRoy/nodegui-parcel-example).

> Disclaimer: this plugin is in its early stages. Bugs are probable. Feature requests, bug reports and contributions are most welcome!

## Features
* Utilize CSS files in your code using `require` (much like web and React Native) 🎨
* Import image assets and utilize them with QImage widgets using `require` 🖼

## Getting Started
### Prerequisites
As this is a `parcel` plugin, your project has to use `parcel` for managing its bundle. Read about it [here](https://parceljs.org/).

### Installation
Run the following command inside your project to install this :
```bash
npm install --save-dev parcel-plugin-nodegui
```

### Building for NodeGUI
Make sure that you select the `node` target when bundling your projects for the NodeGUI platform (using the `build` and `watch` commands). Read about project targets [here](https://parceljs.org/cli.html#target).

#### Example
Building for node target:
```bash
npx parcel build --target node src/index.tsx
```

Watching for node target (auto bundle build upon file save):
```bash
npx parcel watch --target node src/index.tsx
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


## Maintainers ✨

People maintaining this project.

<!-- prettier-ignore -->
<table>
  <tr>
<td align="center"><a href="https://www.linkedin.com/in/roysommer/"><img src="https://avatars2.githubusercontent.com/u/6681893?v=4" width="100px;" alt="Roy Sommer"/><br /><sub><b>Roy Sommer</b></sub></a></td>
  </tr>
</table>
