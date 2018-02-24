/**
 * Framework7 Plugin 3D Panels 2.0.0
 * Framework7 plugin to add 3d effect for side panels
 * http://framework7.io/plugins/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 24, 2018
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Framework73dPanels = factory());
}(this, (function () { 'use strict';

var Panels3d = {
  enable: function enable() {
    var app = this;
    app.panels3d.enabled = true;
    app.$('html').addClass('with-panels-3d');
  },
  disable: function disable() {
    var app = this;
    app.panels3d.enabled = false;
    app.$('html').removeClass('with-panels-3d');
  },
  onLeftPanelOpen: function onLeftPanelOpen() {
    var app = this;
    if (!app.panels3d.enabled) { return; }
    app.root.children('.views, .view').css({
      '-webkit-transform-origin': '100% center',
      'transform-origin': '100% center',
    });
  },
  onRightPanelOpen: function onRightPanelOpen() {
    var app = this;
    if (!app.panels3d.enabled) { return; }
    app.root.children('.views, .view').css({
      '-webkit-transform-origin': '0% center',
      'transform-origin': '0% center',
    });
  },
  onPanelSwipeOpen: function onPanelSwipeOpen(panel) {
    var app = this;
    panel.panels3dWidth = panel.el.offsetWidth; // eslint-disable-line
    panel.panels3dView = app.root.children('.view, .views'); // eslint-disable-line
  },
  onPanelSwipe: function onPanelSwipe(panel, percentage) {
    var panelWidth = panel.panels3dWidth;
    var $viewEl = panel.panels3dView;

    if (panel.side === 'left') {
      $viewEl.transform(("translate3d(" + (panelWidth * percentage) + "px,0,0) rotateY(" + (-30 * percentage) + "deg)"));
      $viewEl.css({
        '-webkit-transform-origin': '100% center',
        'transform-origin': '100% center',
      });
      panel.$el.transform(("translate3d(" + (-panelWidth * (1 - percentage)) + "px,0,0)"));
    }
    if (panel.side === 'right') {
      $viewEl.transform(("translate3d(" + (-panelWidth * percentage) + "px,0,0) rotateY(" + (30 * percentage) + "deg)"));
      $viewEl.css({
        '-webkit-transform-origin': '0% center',
        'transform-origin': '0% center',
      });
      panel.$el.transform(("translate3d(" + (panelWidth * (1 - percentage)) + "px,0,0)"));
    }
  },
};

var framework7_3dpanels = {
  name: 'panels3d',
  params: {
    panels3d: {
      enabled: false,
    },
  },
  create: function create() {
    var app = this;

    app.panels3d = {
      enabled: app.params.panels3d.enabled,
      enable: Panels3d.enable.bind(app),
      disable: Panels3d.disable.bind(app),
      onLeftPanelOpen: Panels3d.onLeftPanelOpen.bind(app),
      onRightPanelOpen: Panels3d.onRightPanelOpen.bind(app),
      onPanelSwipe: Panels3d.onPanelSwipe.bind(app),
      onPanelSwipeOpen: Panels3d.onPanelSwipeOpen.bind(app),
    };
  },
  on: {
    init: function init() {
      var app = this;
      if (app.params.panels3d.enabled) {
        app.panels3d.enable();
      }
    },
    panelOpen: function panelOpen(panel) {
      var app = this;
      if (!app.panels3d.enabled) { return; }
      if (panel.effect !== 'reveal') { return; }
      if (panel.side === 'left') { app.panels3d.onLeftPanelOpen(); }
      else { app.panels3d.onRightPanelOpen(); }
    },
    panelSwipeOpen: function panelSwipeOpen(panel) {
      var app = this;
      if (!app.panels3d.enabled) { return; }
      if (panel.effect !== 'reveal') { return; }
      app.panels3d.onPanelSwipeOpen(panel);
    },
    panelSwipe: function panelSwipe(panel, percentage) {
      var app = this;
      if (!app.panels3d.enabled) { return; }
      if (panel.effect !== 'reveal') { return; }
      app.panels3d.onPanelSwipe(panel, percentage);
    },
  },
};

return framework7_3dpanels;

})));
