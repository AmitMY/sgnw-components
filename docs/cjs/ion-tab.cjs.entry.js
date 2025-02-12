'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-215593b0.js');
const frameworkDelegate = require('./framework-delegate-72815681.js');

const tabCss = ":host(.tab-hidden){display:none !important}";

const Tab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.loaded = false;
    /** @internal */
    this.active = false;
  }
  async componentWillLoad() {
    if (this.active) {
      await this.setActive();
    }
  }
  /** Set the active component for the tab */
  async setActive() {
    await this.prepareLazyLoaded();
    this.active = true;
  }
  changeActive(isActive) {
    if (isActive) {
      this.prepareLazyLoaded();
    }
  }
  prepareLazyLoaded() {
    if (!this.loaded && this.component != null) {
      this.loaded = true;
      try {
        return frameworkDelegate.attachComponent(this.delegate, this.el, this.component, ['ion-page']);
      }
      catch (e) {
        console.error(e);
      }
    }
    return Promise.resolve(undefined);
  }
  render() {
    const { tab, active, component } = this;
    return (index.h(index.Host, { role: "tabpanel", "aria-hidden": !active ? 'true' : null, "aria-labelledby": `tab-button-${tab}`, class: {
        'ion-page': component === undefined,
        'tab-hidden': !active
      } }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "active": ["changeActive"]
  }; }
};
Tab.style = tabCss;

exports.ion_tab = Tab;
