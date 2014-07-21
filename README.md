Framework7-3D-Panels
====================

Framework7 plugin to add 3d effect for side panels

## Installation

Just grab plugin files from `dist/` folder or using bower:

```
bower install framework7-3d-panels
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

## Demo

Plugin comes with demo example to see how it works and looks. To make demo works you need: 

* install bower dependencies. Go to `demo/` folder and execute in terminal `bower install`
* re-link demo's files from `build/` to `dist/` folder. In demo/index.html change paths from `../build/framework7.3dpanels` to `../dist/framework7.3dpanels` for styles and scripts

## Contribute

All changes should be done only in `src/` folder. This project uses `grunt` to build a distributable version. 

First you need to have `grunt-cli` which you should install globally:

```
$ npm install -g grunt-cli
```

Then install all dependencies:

```
$ npm install
```

Then to build plugin's files for testing run:
```
$ grunt build
```

If you need a local server while you developing you can run:

```
$ grunt server
```

And working demo will be available on `http://localhost:3000/demo/`