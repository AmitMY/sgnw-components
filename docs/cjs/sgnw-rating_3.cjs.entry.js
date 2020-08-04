'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ef075f17.js');

const sgnwRatingCss = ".rating{color:orange}";

const SgnwRating = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ratingUpdated = index.createEvent(this, "ratingUpdated", 7);
        /** max number of stars */
        this.maxValue = 5;
        /** current number of stars */
        this.value = 0;
        this.starList = [];
    }
    componentWillLoad() {
        this.createStarList(this.value);
    }
    logUpdate() {
        console.log("ratingUpdated");
    }
    setValue(newValue) {
        this.value = newValue;
        this.createStarList(this.value);
        this.ratingUpdated.emit({ value: this.value });
    }
    createStarList(numberOfStars) {
        let starList = [];
        for (let i = 1; i <= this.maxValue; i++) {
            if (i <= numberOfStars) {
                starList.push(index.h("span", { class: "rating", onClick: () => this.setValue(i), onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value) }, "\u2605"));
            }
            else {
                starList.push(index.h("span", { class: "rating", onClick: () => this.setValue(i), onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value) }, "\u2606"));
            }
        }
        this.starList = starList;
    }
    render() {
        return (index.h("div", null, this.starList));
    }
    static get watchers() { return {
        "value": ["componentWillLoad"]
    }; }
};
SgnwRating.style = sgnwRatingCss;

const sgnwSignboxCss = ":host{width:100%;height:400px;background-color:#333;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:7px;touch-action:none}";

const SgnwSignbox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** array of spatials */
    //  @Prop({mutable: true, reflect: true}) spatials: array;
    //  @Watch('spatials')
    //  updateSpatials() {
    //    this.createSymbolList(this.spatials);
    //  }
    handleMouseDown(ev) {
        console.log('mousedown');
    }
    handleTouchStart(ev) {
        console.log('touchstart');
    }
    render() {
        return (index.h("div", null, index.h("slot", null)));
    }
};
SgnwSignbox.style = sgnwSignboxCss;

/* Sutton SignWriting Core Module v1.2.0 (https://github.com/sutton-signwriting/core), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
let o={symbol:"(?:(?:\ud8c0[\udc01-\udfff])|(?:[\ud8c1-\ud8fc][\udc00-\udfff])|(?:\ud8fd[\udc00-\udc80]))",coord:"(?:\ud836[\udc0c-\uddff]){2}",sort:"𝠀",box:"\ud836[\udc01-\udc04]"};o.prefix=`(?:${o.sort}(?:${o.symbol})+)`,o.spatial=`${o.symbol}${o.coord}`,o.signbox=`${o.box}${o.coord}(?:${o.spatial})*`,o.sign=`${o.prefix}?${o.signbox}`,o.sortable=`${o.prefix}${o.signbox}`;const n=e=>parseInt(e.codePointAt(0))-120844+250,s=e=>[n(e.slice(0,2)),n(e.slice(2,4))],l=e=>parseInt(e.codePointAt(0)),f=e=>String.fromCodePoint(e),g=e=>l(e)-262144,d=e=>f(e+262144),x=e=>1+96*(parseInt(e.slice(1,4),16)-256)+16*parseInt(e.slice(4,5),16)+parseInt(e.slice(5,6),16),u=e=>{const o=e-1,t=parseInt(o/96),r=parseInt((o-96*t)/16),n=parseInt(o-96*t-16*r);return "S"+(t+256).toString(16)+r.toString(16)+n.toString(16)},$=e=>{const o=l(e)-262145,t=parseInt(o/96),r=parseInt((o-96*t)/16),n=parseInt(o-96*t-16*r);return "S"+(t+256).toString(16)+r.toString(16)+n.toString(16)},b=e=>f(262145+96*(parseInt(e.slice(1,4),16)-256)+16*parseInt(e.slice(4,5),16)+parseInt(e.slice(5,6),16)),m=e=>{if(!e)return "";let t=e.replace(/𝠀/g,"A").replace(/𝠁/g,"B").replace(/𝠂/g,"L").replace(/𝠃/g,"M").replace(/𝠄/g,"R");const r=t.match(new RegExp(o.symbol,"g"));r&&r.forEach((function(e){t=t.replace(e,$(e));}));const n=t.match(new RegExp(o.coord,"g"));return n&&n.forEach((function(e){t=t.replace(e,s(e).join("x"));})),t};

/* Sutton SignWriting Core Module v1.2.0 (https://github.com/sutton-signwriting/core), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
let o$1={symbol:"S[123][0-9a-f]{2}[0-5][0-9a-f]",coord:"[0-9]{3}x[0-9]{3}",sort:"A",box:"[BLMR]"};o$1.prefix=`(?:${o$1.sort}(?:${o$1.symbol})+)`,o$1.spatial=`${o$1.symbol}${o$1.coord}`,o$1.signbox=`${o$1.box}${o$1.coord}(?:${o$1.spatial})*`,o$1.sign=`${o$1.prefix}?${o$1.signbox}`,o$1.sortable=`${o$1.prefix}${o$1.signbox}`;let s$1={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};s$1.colorbase=`(?:${s$1.colorhex}|${s$1.colorname})`,s$1.color=`_${s$1.colorbase}_`,s$1.colors=`_${s$1.colorbase}(?:,${s$1.colorbase})?_`,s$1.background=`G${s$1.color}`,s$1.detail=`D${s$1.colors}`,s$1.detailsym=`D[0-9]{2}${s$1.colors}`,s$1.classes=`${s$1.classbase}(?: ${s$1.classbase})*`,s$1.full=`-(${s$1.colorize})?(${s$1.padding})?(${s$1.background})?(${s$1.detail})?(${s$1.zoom})?(?:-((?:${s$1.detailsym})*)((?:${s$1.zoomsym})*))?(?:-(${s$1.classes})?!(?:(${s$1.id})!)?)?`;const t=o=>o.split("x").map(o=>parseInt(o)),e={symbol:e=>{const r=`^(${o$1.symbol})(${o$1.coord})?(${s$1.full})?`,l="string"==typeof e?e.match(new RegExp(r)):void 0;return {symbol:l?l[1]:void 0,coord:l&&l[2]?t(l[2]):void 0,style:l?l[3]:void 0}},sign:e=>{const r=`^(${o$1.prefix})?(${o$1.signbox})(${s$1.full})?`,l="string"==typeof e?e.match(new RegExp(r)):void 0;return l?{sequence:l[1]?l[1].slice(1).match(/.{6}/g):void 0,box:l[2][0],max:t(l[2].slice(1,8)),spatials:l[2].length<9?void 0:l[2].slice(8).match(/(.{13})/g).map(o=>({symbol:o.slice(0,6),coord:[parseInt(o.slice(6,9)),parseInt(o.slice(10,13))]})),style:l[3]}:{}}};

/* Sutton SignWriting Core Module v1.2.0 (https://github.com/sutton-signwriting/core), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
let o$2={symbol:"(?:(?:\ud8c0[\udc01-\udfff])|(?:[\ud8c1-\ud8fc][\udc00-\udfff])|(?:\ud8fd[\udc00-\udc80]))",coord:"(?:\ud836[\udc0c-\uddff]){2}",sort:"𝠀",box:"\ud836[\udc01-\udc04]"};o$2.prefix=`(?:${o$2.sort}(?:${o$2.symbol})+)`,o$2.spatial=`${o$2.symbol}${o$2.coord}`,o$2.signbox=`${o$2.box}${o$2.coord}(?:${o$2.spatial})*`,o$2.sign=`${o$2.prefix}?${o$2.signbox}`,o$2.sortable=`${o$2.prefix}${o$2.signbox}`;let e$1={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};e$1.colorbase=`(?:${e$1.colorhex}|${e$1.colorname})`,e$1.color=`_${e$1.colorbase}_`,e$1.colors=`_${e$1.colorbase}(?:,${e$1.colorbase})?_`,e$1.background=`G${e$1.color}`,e$1.detail=`D${e$1.colors}`,e$1.detailsym=`D[0-9]{2}${e$1.colors}`,e$1.classes=`${e$1.classbase}(?: ${e$1.classbase})*`,e$1.full=`-(${e$1.colorize})?(${e$1.padding})?(${e$1.background})?(${e$1.detail})?(${e$1.zoom})?(?:-((?:${e$1.detailsym})*)((?:${e$1.zoomsym})*))?(?:-(${e$1.classes})?!(?:(${e$1.id})!)?)?`;const s$2=o=>parseInt(o.codePointAt(0))-120844+250,t$1=o=>[s$2(o.slice(0,2)),s$2(o.slice(2,4))],l$1={symbol:s=>{const r=`^(${o$2.symbol})(${o$2.coord})?(${e$1.full})?`,c="string"==typeof s?s.match(new RegExp(r)):void 0;return {symbol:c?c[1]:void 0,coord:c&&c[2]?t$1(c[2]):void 0,style:c?c[3]:void 0}},sign:s=>{const r=`^(${o$2.prefix})?(${o$2.signbox})(${e$1.full})?`,c="string"==typeof s?s.match(new RegExp(r)):void 0;return c?{sequence:c[1]?c[1].slice(2).match(/.{2}/g):void 0,box:c[2].slice(0,2),max:t$1(c[2].slice(2,6)),spatials:c[2].length<7?void 0:c[2].slice(6).match(/(.{6})/g).map(o=>({symbol:o.slice(0,2),coord:t$1(o.slice(2))})),style:c[3]}:{}}};

/* Sutton SignWriting TrueType Font Module v1.2.0 (https://github.com/sutton-signwriting/font-ttf), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
const o$3=o=>1+96*(parseInt(o.slice(1,4),16)-256)+16*parseInt(o.slice(4,5),16)+parseInt(o.slice(5,6),16);let t$2={};const e$2=document.createElement("canvas");e$2.width=152,e$2.height=152;const l$2=e$2.getContext("2d"),s$3=function(e){return function(o){if(o in t$2)return [...t$2[o]];l$2.clearRect(0,0,152,152),l$2.font="60px 'SuttonSignWritingLine'",l$2.fillText(String.fromCodePoint(o+983040),0,0);const e=l$2.getImageData(0,0,152,152).data;let s,i,a,n;o:for(s=151;s>=0;s--)for(i=0;i<152;i+=1)for(n=0;n<4;n+=1)if(a=4*s+4*i*152+n,e[a])break o;var r=s;o:for(i=151;i>=0;i--)for(s=0;s<r;s+=1)for(n=0;n<4;n+=1)if(a=4*s+4*i*152+n,e[a])break o;var d=i+1;if(r=Math.ceil(r/2),d=Math.ceil(d/2),14394==o&&(r=19),[10468,10480,10496,10512,10500,10532,10548,10862,10878,10894,11058,11074,11476,11488,11492,11504,11508,11520,10516,10910,10926,11042,11082,10942].includes(o)&&(r=20),31921==o&&(r=22),38460==o&&(r=23),[20164,20212].includes(o)&&(r=25),31894==o&&(r=28),46698==o&&(r=29),29606==o&&(r=30),44855==o&&(r=40),32667==o&&(r=50),[11088,11474,11490,11506].includes(o)&&(d=20),6285==o&&(d=21),40804==o&&(d=31),41475==o&&(d=36),0==r&&0==d){const t={9:[15,30],10:[21,30],11:[30,15],12:[30,21],13:[15,30],14:[21,30]};o in t&&(r=t[o][0],d=t[o][1]);}return 0!=r||0!=d?(t$2[o]=[r,d],[r,d]):void 0}(o$3(e))},i=function(o){return String.fromCodePoint(o+983040)},a=function(o){return String.fromCodePoint(o+1048576)},d$1=function(t){return e=o$3(t),`    <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">${a(e)}</text>\n    <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">${i(e)}</text>`;var e;};let c={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};c.colorbase=`(?:${c.colorhex}|${c.colorname})`,c.color=`_${c.colorbase}_`,c.colors=`_${c.colorbase}(?:,${c.colorbase})?_`,c.background="G"+c.color,c.detail="D"+c.colors,c.detailsym="D[0-9]{2}"+c.colors,c.classes=`${c.classbase}(?: ${c.classbase})*`,c.full=`-(${c.colorize})?(${c.padding})?(${c.background})?(${c.detail})?(${c.zoom})?(?:-((?:${c.detailsym})*)((?:${c.zoomsym})*))?(?:-(${c.classes})?!(?:(${c.id})!)?)?`;const m$1=o=>(new RegExp(`^${c.colorhex}$`).test(o)?"#":"")+o,p=o=>{const t="^"+c.full,e=("string"==typeof o?o.match(new RegExp(t)):[])||[];return {colorize:e[1]?!!e[1]:void 0,padding:e[2]?parseInt(e[2].slice(1)):void 0,background:e[3]?m$1(e[3].slice(2,-1)):void 0,detail:e[4]?e[4].slice(2,-1).split(",").map(m$1):void 0,zoom:e[5]?"Zx"===e[5]?"x":parseFloat(e[5].slice(1)):void 0,detailsym:e[6]?e[6].match(new RegExp(c.detailsym,"g")).map(o=>{const t=o.split("_"),e=t[1].split(",").map(m$1);return {index:parseInt(t[0].slice(1)),detail:e}}):void 0,zoomsym:e[7]?e[7].match(new RegExp(c.zoomsym,"g")).map(o=>{const t=o.split(",");return {index:parseInt(t[0].slice(1)),zoom:parseFloat(t[1]),offset:t[2]?t[2].split("x").map(o=>parseInt(o)-500):void 0}}):void 0,classes:e[8]?e[8]:void 0,id:e[9]?e[9]:void 0}};let f$1={symbol:"S[123][0-9a-f]{2}[0-5][0-9a-f]",coord:"[0-9]{3}x[0-9]{3}",sort:"A",box:"[BLMR]"};f$1.prefix=`(?:${f$1.sort}(?:${f$1.symbol})+)`,f$1.spatial=`${f$1.symbol}${f$1.coord}`,f$1.signbox=`${f$1.box}${f$1.coord}(?:${f$1.spatial})*`,f$1.sign=`${f$1.prefix}?${f$1.signbox}`,f$1.sortable=`${f$1.prefix}${f$1.signbox}`;let g$1={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};g$1.colorbase=`(?:${g$1.colorhex}|${g$1.colorname})`,g$1.color=`_${g$1.colorbase}_`,g$1.colors=`_${g$1.colorbase}(?:,${g$1.colorbase})?_`,g$1.background="G"+g$1.color,g$1.detail="D"+g$1.colors,g$1.detailsym="D[0-9]{2}"+g$1.colors,g$1.classes=`${g$1.classbase}(?: ${g$1.classbase})*`,g$1.full=`-(${g$1.colorize})?(${g$1.padding})?(${g$1.background})?(${g$1.detail})?(${g$1.zoom})?(?:-((?:${g$1.detailsym})*)((?:${g$1.zoomsym})*))?(?:-(${g$1.classes})?!(?:(${g$1.id})!)?)?`;const x$1=o=>o.split("x").map(o=>parseInt(o)),$$1=o=>{const t=`^(${f$1.symbol})(${f$1.coord})?(${g$1.full})?`,e="string"==typeof o?o.match(new RegExp(t)):void 0;return {symbol:e?e[1]:void 0,coord:e&&e[2]?x$1(e[2]):void 0,style:e?e[3]:void 0}},b$1=[256,517,759,767,877,895,903],z=["#0000CC","#CC0000","#FF0099","#006600","#000000","#884411","#FF9900"],v=o=>{const t=$$1(o);let e="#000000";if(t.symbol){const o=parseInt(t.symbol.slice(1,4),16),l=b$1.findIndex(t=>t>o);e=z[l<0?6:l-1];}return e},w=o=>{const t=$$1(o);if(t.symbol){let e=s$3(t.symbol);if(e){let l,s=p(t.style),i=d$1(t.symbol);i=`  <g transform="translate(500,500)">\n${i}\n  </g>`,s.colorize?l=v(t.symbol):s.detail&&(l=s.detail[0]),l&&(i=i.replace(/class="sym-line" fill="black"/,`class="sym-line" fill="${l}"`));let a=s.detail&&s.detail[1];a&&(i=i.replace(/class="sym-fill" fill="white"/,`class="sym-fill" fill="${a}"`));let n=500,r=500,c="";s.padding&&(n-=s.padding,r-=s.padding,e[0]+=2*s.padding,e[1]+=2*s.padding),s.background&&(c=`\n  <rect x="${n}" y="${r}" width="${e[0]}" height="${e[1]}" style="fill:${s.background};" />`);let m="";"x"!=s.zoom&&(m=` width="${e[0]*(s.zoom?s.zoom:1)}" height="${e[1]*(s.zoom?s.zoom:1)}"`);let f="";s.classes&&(f=` class="${s.classes}"`);let g="";return s.id&&(g=` id="${s.id}"`),`<svg${f}${g} version="1.1" xmlns="http://www.w3.org/2000/svg"${m} viewBox="${n} ${r} ${e[0]} ${e[1]}">\n  <text font-size="0">${o}</text>${c}\n${i}\n</svg>`}}return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>'};

const sgnwSymbolCss = "";

const SgnwSymbol = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.sgnw = window.sgnw;
    }
    iidUpdate(newValue, oldValue) {
        var iid = parseInt(newValue);
        if (!isNaN(iid)) {
            if (newValue != oldValue) {
                if (iid > 0 && iid < 65535) {
                    this.fsw = u(iid);
                    this.swu = d(iid);
                }
            }
        }
        else {
            this.iid = 0;
        }
    }
    fswUpdate(newValue, oldValue) {
        if (newValue != oldValue) {
            var fsw = e.symbol(newValue);
            if (fsw && fsw.symbol) {
                this.iid = x(fsw.symbol);
                this.swu = b(fsw.symbol);
            }
        }
    }
    swuUpdate(newValue, oldValue) {
        if (newValue != oldValue) {
            var swu = l$1.symbol(newValue);
            if (swu && swu.symbol) {
                this.iid = g(swu.symbol);
                this.fsw = m(swu.symbol);
            }
        }
    }
    stylingUpdate(newValue, oldValue) {
        console.log(newValue, oldValue);
    }
    connectedCallback() {
        if (!this.sgnw) {
            let self = this;
            function handleSgnw() {
                self.sgnw = window.sgnw;
                window.removeEventListener("sgnw", handleSgnw, false);
            }
            window.addEventListener('sgnw', handleSgnw, false);
        }
        var iid, fsw, swu, styling;
        if (this.fsw) {
            fsw = this.fsw;
        }
        else if (this.swu) {
            swu = this.swu;
        }
        else if (this.iid) {
            iid = this.iid;
        }
        if (this.styling) {
            styling = this.styling;
        }
        if (!(iid || fsw || swu)) {
            var contents = this.el.innerHTML;
            var fswP = e.symbol(contents);
            var swuP = l$1.symbol(contents);
            var iidP = parseInt(contents);
            if (fswP && fswP.symbol) {
                fsw = fswP.symbol + (fswP.style ? fswP.style : "");
            }
            else if (swuP && swuP.symbol) {
                swu = swuP.symbol;
                swu = swuP.symbol + (swuP.style ? swuP.style : "");
            }
            else if (iidP > 0 && iidP < 65535) {
                iid = iidP;
            }
        }
        if (fsw) {
            this.fsw = fsw;
            this.fswUpdate(this.fsw, "");
        }
        else if (swu) {
            this.swu = swu;
            this.swuUpdate(this.swu, "");
        }
        else {
            if (!iid) {
                iid = 0;
            }
            this.iid = iid;
            this.iidUpdate(this.iid.toString(), "0");
        }
        if (styling) {
            this.styling = styling;
        }
    }
    render() {
        //var svgSize = parseFloat(window.getComputedStyle(this.el).getPropertyValue("font-size").slice(0,-2))/30;
        return (index.h(index.Host, { iid: this.iid, fsw: this.fsw, swu: this.swu, styling: this.styling, innerHTML: this.sgnw ? w(this.fsw) : '' }, index.h("slot", null)));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "iid": ["iidUpdate"],
        "fsw": ["fswUpdate"],
        "swu": ["swuUpdate"],
        "styling": ["stylingUpdate"]
    }; }
};
SgnwSymbol.style = sgnwSymbolCss;

exports.sgnw_rating = SgnwRating;
exports.sgnw_signbox = SgnwSignbox;
exports.sgnw_symbol = SgnwSymbol;
