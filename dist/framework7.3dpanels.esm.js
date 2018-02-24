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

const Panels3d = {
  enable() {
    const app = this;
    app.panels3d.enabled = true;
    app.$('html').addClass('with-panels-3d');
  },
  disable() {
    const app = this;
    app.panels3d.enabled = false;
    app.$('html').removeClass('with-panels-3d');
  },
  onLeftPanelOpen() {
    const app = this;
    if (!app.panels3d.enabled) return;
    app.root.children('.views, .view').css({
      '-webkit-transform-origin': '100% center',
      'transform-origin': '100% center',
    });
  },
  onRightPanelOpen() {
    const app = this;
    if (!app.panels3d.enabled) return;
    app.root.children('.views, .view').css({
      '-webkit-transform-origin': '0% center',
      'transform-origin': '0% center',
    });
  },
  onPanelSwipeOpen(panel) {
    const app = this;
    panel.panels3dWidth = panel.el.offsetWidth; // eslint-disable-line
    panel.panels3dView = app.root.children('.view, .views'); // eslint-disable-line
  },
  onPanelSwipe(panel, percentage) {
    const panelWidth = panel.panels3dWidth;
    const $viewEl = panel.panels3dView;

    if (panel.side === 'left') {
      $viewEl.transform(`translate3d(${panelWidth * percentage}px,0,0) rotateY(${-30 * percentage}deg)`);
      $viewEl.css({
        '-webkit-transform-origin': '100% center',
        'transform-origin': '100% center',
      });
      panel.$el.transform(`translate3d(${-panelWidth * (1 - percentage)}px,0,0)`);
    }
    if (panel.side === 'right') {
      $viewEl.transform(`translate3d(${-panelWidth * percentage}px,0,0) rotateY(${30 * percentage}deg)`);
      $viewEl.css({
        '-webkit-transform-origin': '0% center',
        'transform-origin': '0% center',
      });
      panel.$el.transform(`translate3d(${panelWidth * (1 - percentage)}px,0,0)`);
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
  create() {
    const app = this;

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
    init() {
      const app = this;
      if (app.params.panels3d.enabled) {
        app.panels3d.enable();
      }
    },
    panelOpen(panel) {
      const app = this;
      if (!app.panels3d.enabled) return;
      if (panel.effect !== 'reveal') return;
      if (panel.side === 'left') app.panels3d.onLeftPanelOpen();
      else app.panels3d.onRightPanelOpen();
    },
    panelSwipeOpen(panel) {
      const app = this;
      if (!app.panels3d.enabled) return;
      if (panel.effect !== 'reveal') return;
      app.panels3d.onPanelSwipeOpen(panel);
    },
    panelSwipe(panel, percentage) {
      const app = this;
      if (!app.panels3d.enabled) return;
      if (panel.effect !== 'reveal') return;
      app.panels3d.onPanelSwipe(panel, percentage);
    },
  },
};

export default framework7_3dpanels;
