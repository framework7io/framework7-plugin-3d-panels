<a href="https://www.patreon.com/vladimirkharlampidi"><img src="https://cdn.framework7.io/i/support-badge.png" height="20"></a>

# Framework7 3D Panels Plugin

Framework7 plugin to add 3d effect for side panels

## Installation

Just grab plugin files from `dist/` folder or using npm:

```
npm install framework7-plugin-3d-panels
```

And link them to your app's right AFTER Framework7's scripts and styles:

```
<link rel="stylesheet" href="path/to/framework7.min.css">
<link rel="stylesheet" href="path/to/framework7.3dpanels.css">
...
<script src="path/to/framework7.min.js"></script>
<script src="path/to/framework7.3dpanels.js"></script>
```

## Usage

This plugin doesn't add new effect, it just converts "reveal"-effect panels to 3d panels. So make sure that you have "reveal" panel in your layout:

```
<div class="panel panel-left panel-reveal">...</div>
```

## Install & Enable Plugin

After you included plugin script file, you need to install plugin:

```js
// install plugin to Framework7
Framework7.use(Framework73dPanels);

// init app and enable plugin
var app = new Framework7({
  // enable plugin
  panels3d: {
    enabled: true,
  }
})
```

## ES Module

This plugin comes with ready to use ES module:
```js
import Framework7 from 'framework7';
import Framework73dPanels from 'framework7-plugin-3d-panels';

// install plugin
Framework7.use(Framework73dPanels);

// init app and enable plugin
var app = new Framework7({
  // enable plugin
  panels3d: {
    enabled: true,
  }
})
```

## API

When plugin installed to Framework7 with `Framework7.use(Framework73dPanels)`, it will extend app instance with two additional methods:
  * `app.panels3d.enable()` - enables 3d panels
  * `app.panels3d.disable()` - disables 3d panels

## Demo

Plugin comes with demo example to see how it works and looks. To make demo works you need to run in terminal:

```
$ npm run prod
```

## Contribute

All changes should be done only in `src/` folder. This project uses `gulp` and `rollup` to build a distributable version.

First you need to install all dependencies:

```
$ npm install
```

Then to build plugin's files for testing run:
```
$ npm run build:dev
```

If you need a local server while you developing you can run:

```
$ gulp server
```
or
```
$ npm run dev
```

And working demo will be available on `http://localhost:3000/demo/`

## Live Preview

https://framework7io.github.io/framework7-plugin-3d-panels/
