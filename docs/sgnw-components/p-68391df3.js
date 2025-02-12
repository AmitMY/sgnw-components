import{g as t,c as n}from"./p-a55e3f7b.js";import{b as e,e as o,g as a}from"./p-572b9bd2.js";import{OVERLAY_BACK_BUTTON_PRIORITY as s}from"./p-f2660943.js";let i=0;const r=new WeakMap,c=t=>({create:n=>m(t,n),dismiss:(n,e,o)=>x(document,n,e,t,o),getTop:async()=>h(document,t)}),d=c("ion-alert"),u=c("ion-action-sheet"),p=c("ion-picker"),l=c("ion-popover"),f=t=>{"undefined"!=typeof document&&v(document);const n=i++;t.overlayIndex=n,t.hasAttribute("id")||(t.id="ion-overlay-"+n)},m=(t,n)=>"undefined"!=typeof customElements?customElements.whenDefined(t).then((()=>{const e=document.createElement(t);return e.classList.add("overlay-hidden"),Object.assign(e,n),j(document).appendChild(e),e.componentOnReady()})):Promise.resolve(),y='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',b="input:not([type=hidden]), textarea, button, select",v=t=>{0===i&&(i=1,t.addEventListener("focus",(n=>((t,n)=>{const e=h(n),o=t.target;if(e&&o)if(e===o)e.lastFocus=void 0;else{const t=a(e);if(!t.contains(o))return;const s=t.querySelector(".ion-overlay-wrapper");if(!s)return;if(s.contains(o))e.lastFocus=o;else{const t=e.lastFocus;((t,n)=>{let e=t.querySelector(y);const o=e&&e.shadowRoot;o&&(e=o.querySelector(b)||e),e?e.focus():n.focus()})(s,e),t===n.activeElement&&((t,n)=>{const e=Array.from(t.querySelectorAll(y));let o=e.length>0?e[e.length-1]:null;const a=o&&o.shadowRoot;a&&(o=a.querySelector(b)||o),o?o.focus():n.focus()})(s,e),e.lastFocus=n.activeElement}}})(n,t)),!0),t.addEventListener("ionBackButton",(n=>{const e=h(t);e&&e.backdropDismiss&&n.detail.register(s,(()=>e.dismiss(void 0,z)))})),t.addEventListener("keyup",(n=>{if("Escape"===n.key){const n=h(t);n&&n.backdropDismiss&&n.dismiss(void 0,z)}})))},x=(t,n,e,o,a)=>{const s=h(t,o,a);return s?s.dismiss(n,e):Promise.reject("overlay does not exist")},h=(t,n,e)=>{const o=((t,n)=>(void 0===n&&(n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(t.querySelectorAll(n)).filter((t=>t.overlayIndex>0))))(t,n);return void 0===e?o[o.length-1]:o.find((t=>t.id===e))},w=async(e,o,a,s,i)=>{if(e.presented)return;e.presented=!0,e.willPresent.emit();const r=t(e),c=e.enterAnimation?e.enterAnimation:n.get(o,"ios"===r?a:s);await A(e,c,e.el,i)&&e.didPresent.emit(),"ION-TOAST"!==e.el.tagName&&g(e.el),e.keyboardClose&&e.el.focus()},g=async t=>{let n=document.activeElement;if(!n)return;const e=n&&n.shadowRoot;e&&(n=e.querySelector(b)||n),await t.onDidDismiss(),n.focus()},k=async(e,o,a,s,i,c,d)=>{if(!e.presented)return!1;e.presented=!1;try{e.el.style.setProperty("pointer-events","none"),e.willDismiss.emit({data:o,role:a});const u=t(e),p=e.leaveAnimation?e.leaveAnimation:n.get(s,"ios"===u?i:c);"gesture"!==a&&await A(e,p,e.el,d),e.didDismiss.emit({data:o,role:a}),r.delete(e)}catch(t){console.error(t)}return e.el.remove(),!0},j=t=>t.querySelector("ion-app")||t.body,A=async(t,e,o,a)=>{o.classList.remove("overlay-hidden");const s=e(o.shadowRoot||t.el,a);t.animated&&n.getBoolean("animated",!0)||s.duration(0),t.keyboardClose&&s.beforeAddWrite((()=>{const t=o.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}));const i=r.get(t)||[];return r.set(t,[...i,s]),await s.play(),!0},B=(t,n)=>{let e;const o=new Promise((t=>e=t));return E(t,n,(t=>{e(t.detail)})),o},E=(t,n,a)=>{const s=e=>{o(t,n,s),a(e)};e(t,n,s)},O=t=>"cancel"===t||t===z,P=t=>t(),T=(t,e)=>{if("function"==typeof t)return n.get("_zoneGate",P)((()=>{try{return t(e)}catch(t){console.error(t)}}))},z="backdrop";export{z as B,f as a,p as b,r as c,k as d,B as e,l as f,u as g,d as h,O as i,w as p,T as s}