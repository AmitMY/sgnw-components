(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1275:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(464);module._StorybookPreserveDecorators=!0,Object(_storybook_html__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1299),__webpack_require__(1300),__webpack_require__(1301)],module)}.call(this,__webpack_require__(1276)(module))},1299:function(module,exports,__webpack_require__){var map={"./readme.stories.mdx":450};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1299},1300:function(module,exports,__webpack_require__){var map={"./introduction.stories.mdx":447};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1300},1301:function(module,exports,__webpack_require__){var map={"./components/sgnw-symbol/sgnw-symbol.stories.js":1318,"./introduction.stories.mdx":447,"./readme.stories.mdx":450};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1301},1318:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"fsw",(function(){return sgnw_symbol_stories_fsw})),__webpack_require__.d(__webpack_exports__,"swu",(function(){return sgnw_symbol_stories_swu})),__webpack_require__.d(__webpack_exports__,"iswa",(function(){return iswa}));__webpack_require__(41),__webpack_require__(23),__webpack_require__(12),__webpack_require__(410),__webpack_require__(33);var stencil_core=__webpack_require__(192),convert_min=__webpack_require__(105),fsw_min=__webpack_require__(293),swu_min=__webpack_require__(294),fsw_fsw_min=__webpack_require__(465);function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}var sgnw_symbol_SgnwSymbol=function(){function SgnwSymbol(){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,SgnwSymbol),this.sgnw=window.sgnw}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(SgnwSymbol,[{key:"iidUpdate",value:function iidUpdate(newValue,oldValue){var iid=parseInt(newValue);isNaN(iid)?this.iid=0:newValue!=oldValue&&0<iid&&65535>iid&&(this.fsw=Object(convert_min.a)(iid),this.swu=Object(convert_min.b)(iid))}},{key:"fswUpdate",value:function fswUpdate(newValue,oldValue){if(newValue!=oldValue){var fsw=fsw_min.a.symbol(newValue);fsw&&fsw.symbol&&(this.iid=Object(convert_min.c)(fsw.symbol),this.swu=Object(convert_min.d)(fsw.symbol))}}},{key:"swuUpdate",value:function swuUpdate(newValue,oldValue){if(newValue!=oldValue){var swu=swu_min.a.symbol(newValue);swu&&swu.symbol&&(this.iid=Object(convert_min.f)(swu.symbol),this.fsw=Object(convert_min.e)(swu.symbol))}}},{key:"stylingUpdate",value:function stylingUpdate(newValue,oldValue){console.log(newValue,oldValue)}},{key:"connectedCallback",value:function connectedCallback(){if(!this.sgnw){var handleSgnw=function(){self.sgnw=window.sgnw,window.removeEventListener("sgnw",handleSgnw,!1)},self=this;window.addEventListener("sgnw",handleSgnw,!1)}var iid,fsw,swu,styling;if(this.fsw?fsw=this.fsw:this.swu?swu=this.swu:this.iid&&(iid=this.iid),this.styling&&(styling=this.styling),!(iid||fsw||swu)){var contents=this.el.innerHTML,fswP=fsw_min.a.symbol(contents),swuP=swu_min.a.symbol(contents),iidP=parseInt(contents);fswP&&fswP.symbol?fsw=fswP.symbol+(fswP.style?fswP.style:""):swuP&&swuP.symbol?(swu=swuP.symbol,swu=swuP.symbol+(swuP.style?swuP.style:"")):0<iidP&&65535>iidP&&(iid=iidP)}fsw?(this.fsw=fsw,this.fswUpdate(this.fsw,"")):swu?(this.swu=swu,this.swuUpdate(this.swu,"")):(iid||(iid=0),this.iid=iid,this.iidUpdate(this.iid.toString(),"0")),styling&&(this.styling=styling)}},{key:"render",value:function render(){return Object(stencil_core.h)(stencil_core.Host,{iid:this.iid,fsw:this.fsw,swu:this.swu,styling:this.styling,innerHTML:this.sgnw?Object(fsw_fsw_min.a)(this.fsw):""},Object(stencil_core.h)("slot",null))}}],[{key:"is",get:function get(){return"sgnw-symbol"}},{key:"encapsulation",get:function get(){return"shadow"}},{key:"originalStyleUrls",get:function get(){return{$:["sgnw-symbol.css"]}}},{key:"styleUrls",get:function get(){return{$:["sgnw-symbol.css"]}}},{key:"properties",get:function get(){return{iid:{type:"number",mutable:!0,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"ISWA 2010 ID"},attribute:"iid",reflect:!0},fsw:{type:"string",mutable:!0,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Formal SignWriting in ASCII (FSW) for symbol with optional style string"},attribute:"fsw",reflect:!0},swu:{type:"string",mutable:!0,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"SignWriting in Unicode (SWU) for symbol with optional style string"},attribute:"swu",reflect:!0},styling:{type:"unknown",mutable:!0,complexType:{original:"object",resolved:"object",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Styling Object for symbol"}}}}},{key:"states",get:function get(){return{sgnw:{}}}},{key:"elementRef",get:function get(){return"el"}},{key:"watchers",get:function get(){return[{propName:"iid",methodName:"iidUpdate"},{propName:"fsw",methodName:"fswUpdate"},{propName:"swu",methodName:"swuUpdate"},{propName:"styling",methodName:"stylingUpdate"}]}}]),SgnwSymbol}(),esm=(__webpack_require__(2),__webpack_require__(8),__webpack_require__(3),__webpack_require__(4),__webpack_require__(0),__webpack_require__(16)),blocks=__webpack_require__(42),readme=__webpack_require__(190);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Description,{markdown:readme.a,mdxType:"Description"}),Object(esm.mdx)("h2",{id:"basic-example"},"Basic Example"),Object(esm.mdx)("p",null,"A basic example."),Object(esm.mdx)(blocks.Story,{id:"sgnw-components-component-sgnw-symbol--fsw",mdxType:"Story"}),Object(esm.mdx)("p",null,"A collection of samples."),Object(esm.mdx)(blocks.Preview,{mdxType:"Preview"},Object(esm.mdx)(blocks.Story,{id:"sgnw-components-component-sgnw-symbol--iswa",mdxType:"Story"}),Object(esm.mdx)(blocks.Story,{id:"sgnw-components-component-sgnw-symbol--swu",mdxType:"Story"})))}MDXContent.isMDXComponent=!0;var _parameters,dist=__webpack_require__(189),addon_actions_dist=__webpack_require__(466),lib=__webpack_require__(193);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__(182).withSource;var addSourceDecorator=__webpack_require__(182).addSource,__SOURCE_PREFIX__=(__webpack_require__(182).withSource,addSourceDecorator=__webpack_require__(182).addSource,"/mnt/c/Users/slevi/Desktop/sutton-signwriting/sgnw-components/src/components/sgnw-symbol"),__STORY__="import {SgnwSymbol} from '../../../dist/collection/components/sgnw-symbol/sgnw-symbol';\r\nimport docs from './sgnw-symbol.docs.mdx';\r\nimport { withKnobs, text, number } from '@storybook/addon-knobs';\r\nimport { action } from '@storybook/addon-actions';\r\nimport { h } from 'jsx-dom';\r\n\r\nexport default {\r\n  title: 'sgnw-components|Component/sgnw-symbol',\r\n  component: SgnwSymbol,\r\n  parameters: { \r\n    docs: { page: docs },\r\n    knobs: { disabled: true },\r\n    actions: { disabled: true }\r\n  },\r\n  decorators: [withKnobs]\r\n};\r\n\r\nexport const fsw = () => {\r\n  const fsw = text('fsw','S10000');\r\n  return (\r\n    <sgnw-symbol \r\n      fsw={fsw}\r\n      onClick={action('clicked')}\r\n    ></sgnw-symbol>\r\n  );\r\n}\r\nfsw.story = {\r\n  parameters: { \r\n    knobs: { disabled: false },\r\n    actions: { disabled: false }\r\n  }\r\n};\r\n\r\nexport const swu = () => <sgnw-symbol swu=\"񄵡\"></sgnw-symbol>;\r\n\r\nexport const iswa = () => <sgnw-symbol iid=\"1\"></sgnw-symbol>;\r\n",__ADDS_MAP__={"sgnw-components-component-sgnw-symbol--fsw":{startLoc:{col:19,line:18},endLoc:{col:1,line:26},startBody:{col:19,line:18},endBody:{col:1,line:26}},"sgnw-components-component-sgnw-symbol--swu":{startLoc:{col:19,line:34},endLoc:{col:61,line:34},startBody:{col:19,line:34},endBody:{col:61,line:34}},"sgnw-components-component-sgnw-symbol--iswa":{startLoc:{col:20,line:36},endLoc:{col:61,line:36},startBody:{col:20,line:36},endBody:{col:61,line:36}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},sgnw_symbol_stories_fsw=(__webpack_exports__.default={title:"sgnw-components|Component/sgnw-symbol",component:sgnw_symbol_SgnwSymbol,parameters:(_parameters={storySource:{source:'\n\n// @ts-nocheck\n// @ts-ignore\nvar withSourceLoader = require(\'@storybook/source-loader/preview\').withSource;\n// @ts-ignore\nvar addSourceDecorator = require("@storybook/source-loader/preview").addSource;\n// @ts-ignore\nvar __SOURCE_PREFIX__ = "/mnt/c/Users/slevi/Desktop/sutton-signwriting/sgnw-components/src/components/sgnw-symbol";\n// @ts-ignore\nvar __STORY__ = "import {SgnwSymbol} from \'../../../dist/collection/components/sgnw-symbol/sgnw-symbol\';\\r\\nimport docs from \'./sgnw-symbol.docs.mdx\';\\r\\nimport { withKnobs, text, number } from \'@storybook/addon-knobs\';\\r\\nimport { action } from \'@storybook/addon-actions\';\\r\\nimport { h } from \'jsx-dom\';\\r\\n\\r\\nexport default {\\r\\n  title: \'sgnw-components|Component/sgnw-symbol\',\\r\\n  component: SgnwSymbol,\\r\\n  parameters: { \\r\\n    docs: { page: docs },\\r\\n    knobs: { disabled: true },\\r\\n    actions: { disabled: true }\\r\\n  },\\r\\n  decorators: [withKnobs]\\r\\n};\\r\\n\\r\\nexport const fsw = () => {\\r\\n  const fsw = text(\'fsw\',\'S10000\');\\r\\n  return (\\r\\n    <sgnw-symbol \\r\\n      fsw={fsw}\\r\\n      onClick={action(\'clicked\')}\\r\\n    ></sgnw-symbol>\\r\\n  );\\r\\n}\\r\\nfsw.story = {\\r\\n  parameters: { \\r\\n    knobs: { disabled: false },\\r\\n    actions: { disabled: false }\\r\\n  }\\r\\n};\\r\\n\\r\\nexport const swu = () => <sgnw-symbol swu=\\"񄵡\\"></sgnw-symbol>;\\r\\n\\r\\nexport const iswa = () => <sgnw-symbol iid=\\"1\\"></sgnw-symbol>;\\r\\n";\n// @ts-ignore\nvar __ADDS_MAP__ = {"sgnw-components-component-sgnw-symbol--fsw":{"startLoc":{"col":19,"line":18},"endLoc":{"col":1,"line":26},"startBody":{"col":19,"line":18},"endBody":{"col":1,"line":26}},"sgnw-components-component-sgnw-symbol--swu":{"startLoc":{"col":19,"line":34},"endLoc":{"col":61,"line":34},"startBody":{"col":19,"line":34},"endBody":{"col":61,"line":34}},"sgnw-components-component-sgnw-symbol--iswa":{"startLoc":{"col":20,"line":36},"endLoc":{"col":61,"line":36},"startBody":{"col":20,"line":36},"endBody":{"col":61,"line":36}}};\n// @ts-ignore\nvar __MAIN_FILE_LOCATION__ = "/sgnw-symbol.stories.js";\n// @ts-ignore\nvar __MODULE_DEPENDENCIES__ = [];\n// @ts-ignore\nvar __LOCAL_DEPENDENCIES__ = {};\n// @ts-ignore\nvar __IDS_TO_FRAMEWORKS__ = {};\n        \nimport {SgnwSymbol} from \'../../../dist/collection/components/sgnw-symbol/sgnw-symbol\';\r\nimport docs from \'./sgnw-symbol.docs.mdx\';\r\nimport { withKnobs, text, number } from \'@storybook/addon-knobs\';\r\nimport { action } from \'@storybook/addon-actions\';\r\nimport { h } from \'jsx-dom\';\r\n\r\nexport default {\r\n  title: \'sgnw-components|Component/sgnw-symbol\',\r\n  component: SgnwSymbol,\r\n  parameters: {"storySource":{"source":"import {SgnwSymbol} from \'../../../dist/collection/components/sgnw-symbol/sgnw-symbol\';\\r\\nimport docs from \'./sgnw-symbol.docs.mdx\';\\r\\nimport { withKnobs, text, number } from \'@storybook/addon-knobs\';\\r\\nimport { action } from \'@storybook/addon-actions\';\\r\\nimport { h } from \'jsx-dom\';\\r\\n\\r\\nexport default {\\r\\n  title: \'sgnw-components|Component/sgnw-symbol\',\\r\\n  component: SgnwSymbol,\\r\\n  parameters: { \\r\\n    docs: { page: docs },\\r\\n    knobs: { disabled: true },\\r\\n    actions: { disabled: true }\\r\\n  },\\r\\n  decorators: [withKnobs]\\r\\n};\\r\\n\\r\\nexport const fsw = () => {\\r\\n  const fsw = text(\'fsw\',\'S10000\');\\r\\n  return (\\r\\n    <sgnw-symbol \\r\\n      fsw={fsw}\\r\\n      onClick={action(\'clicked\')}\\r\\n    ></sgnw-symbol>\\r\\n  );\\r\\n}\\r\\nfsw.story = {\\r\\n  parameters: { \\r\\n    knobs: { disabled: false },\\r\\n    actions: { disabled: false }\\r\\n  }\\r\\n};\\r\\n\\r\\nexport const swu = () => <sgnw-symbol swu=\\"񄵡\\"></sgnw-symbol>;\\r\\n\\r\\nexport const iswa = () => <sgnw-symbol iid=\\"1\\"></sgnw-symbol>;\\r\\n","locationsMap":{"sgnw-components-component-sgnw-symbol--fsw":{"startLoc":{"col":19,"line":18},"endLoc":{"col":1,"line":26},"startBody":{"col":19,"line":18},"endBody":{"col":1,"line":26}},"sgnw-components-component-sgnw-symbol--swu":{"startLoc":{"col":19,"line":34},"endLoc":{"col":61,"line":34},"startBody":{"col":19,"line":34},"endBody":{"col":61,"line":34}},"sgnw-components-component-sgnw-symbol--iswa":{"startLoc":{"col":20,"line":36},"endLoc":{"col":61,"line":36},"startBody":{"col":20,"line":36},"endBody":{"col":61,"line":36}}}}, \r\n    docs: { page: docs },\r\n    knobs: { disabled: true },\r\n    actions: { disabled: true }\r\n  },\r\n  decorators: [withKnobs]\r\n};\r\n\r\nexport const fsw = addSourceDecorator(() => {\r\n  const fsw = text(\'fsw\',\'S10000\');\r\n  return (\r\n    <sgnw-symbol \r\n      fsw={fsw}\r\n      onClick={action(\'clicked\')}\r\n    ></sgnw-symbol>\r\n  );\r\n}, {__STORY__, __ADDS_MAP__,__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__});\r\nfsw.story = {\r\n  parameters: { \r\n    knobs: { disabled: false },\r\n    actions: { disabled: false }\r\n  }\r\n};\r\n\r\nexport const swu = addSourceDecorator(() => <sgnw-symbol swu="񄵡"></sgnw-symbol>, {__STORY__, __ADDS_MAP__,__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__});;\r\n\r\nexport const iswa = addSourceDecorator(() => <sgnw-symbol iid="1"></sgnw-symbol>, {__STORY__, __ADDS_MAP__,__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__});\r\n',locationsMap:{"sgnw-components-component-sgnw-symbol--fsw":{startLoc:{col:19,line:40},endLoc:{col:139,line:48},startBody:{col:19,line:40},endBody:{col:139,line:48}},"sgnw-components-component-sgnw-symbol--swu":{startLoc:{col:19,line:56},endLoc:{col:218,line:56},startBody:{col:19,line:56},endBody:{col:218,line:56}},"sgnw-components-component-sgnw-symbol--iswa":{startLoc:{col:20,line:58},endLoc:{col:218,line:58},startBody:{col:20,line:58},endBody:{col:218,line:58}}}}},_defineProperty(_parameters,"storySource",{source:"import {SgnwSymbol} from '../../../dist/collection/components/sgnw-symbol/sgnw-symbol';\r\nimport docs from './sgnw-symbol.docs.mdx';\r\nimport { withKnobs, text, number } from '@storybook/addon-knobs';\r\nimport { action } from '@storybook/addon-actions';\r\nimport { h } from 'jsx-dom';\r\n\r\nexport default {\r\n  title: 'sgnw-components|Component/sgnw-symbol',\r\n  component: SgnwSymbol,\r\n  parameters: { \r\n    docs: { page: docs },\r\n    knobs: { disabled: true },\r\n    actions: { disabled: true }\r\n  },\r\n  decorators: [withKnobs]\r\n};\r\n\r\nexport const fsw = () => {\r\n  const fsw = text('fsw','S10000');\r\n  return (\r\n    <sgnw-symbol \r\n      fsw={fsw}\r\n      onClick={action('clicked')}\r\n    ></sgnw-symbol>\r\n  );\r\n}\r\nfsw.story = {\r\n  parameters: { \r\n    knobs: { disabled: false },\r\n    actions: { disabled: false }\r\n  }\r\n};\r\n\r\nexport const swu = () => <sgnw-symbol swu=\"񄵡\"></sgnw-symbol>;\r\n\r\nexport const iswa = () => <sgnw-symbol iid=\"1\"></sgnw-symbol>;\r\n",locationsMap:{"sgnw-components-component-sgnw-symbol--fsw":{startLoc:{col:19,line:18},endLoc:{col:1,line:26},startBody:{col:19,line:18},endBody:{col:1,line:26}},"sgnw-components-component-sgnw-symbol--swu":{startLoc:{col:19,line:34},endLoc:{col:61,line:34},startBody:{col:19,line:34},endBody:{col:61,line:34}},"sgnw-components-component-sgnw-symbol--iswa":{startLoc:{col:20,line:36},endLoc:{col:61,line:36},startBody:{col:20,line:36},endBody:{col:61,line:36}}}}),_defineProperty(_parameters,"docs",{page:MDXContent}),_defineProperty(_parameters,"knobs",{disabled:!0}),_defineProperty(_parameters,"actions",{disabled:!0}),_parameters),decorators:[dist.withKnobs]},addSourceDecorator(addSourceDecorator((function(){var fsw=Object(dist.text)("fsw","S10000");return Object(lib.a)("sgnw-symbol",{fsw:fsw,onClick:Object(addon_actions_dist.action)("clicked")})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/sgnw-symbol.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/sgnw-symbol.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}));sgnw_symbol_stories_fsw.story={parameters:{knobs:{disabled:!1},actions:{disabled:!1}}};var sgnw_symbol_stories_swu=addSourceDecorator(addSourceDecorator((function(){return Object(lib.a)("sgnw-symbol",{swu:"񄵡"})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/sgnw-symbol.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/sgnw-symbol.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),iswa=addSourceDecorator(addSourceDecorator((function(){return Object(lib.a)("sgnw-symbol",{iid:"1"})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/sgnw-symbol.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/sgnw-symbol.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},190:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="# sgnw-symbol\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property  | Attribute | Description                                                             | Type     | Default     |\n| --------- | --------- | ----------------------------------------------------------------------- | -------- | ----------- |\n| `fsw`     | `fsw`     | Formal SignWriting in ASCII (FSW) for symbol with optional style string | `string` | `undefined` |\n| `iid`     | `iid`     | ISWA 2010 ID                                                            | `number` | `undefined` |\n| `styling` | --        | Styling Object for symbol                                               | `object` | `undefined` |\n| `swu`     | `swu`     | SignWriting in Unicode (SWU) for symbol with optional style string      | `string` | `undefined` |\n\n\n----------------------------------------------\n\n\n"},447:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(2),__webpack_require__(44),__webpack_require__(32),__webpack_require__(8),__webpack_require__(3),__webpack_require__(60),__webpack_require__(41),__webpack_require__(445),__webpack_require__(446),__webpack_require__(4),__webpack_require__(36),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(16),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(42),_components_sgnw_symbol_readme_md__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(190);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_13__.Meta,{title:"sgnw-components|Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("h2",{id:"introduction"},"Introduction"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("p",null,"A variety of web components are available."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_13__.Description,{markdown:_components_sgnw_symbol_readme_md__WEBPACK_IMPORTED_MODULE_14__.a,mdxType:"Description"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_13__.Preview,{mdxSource:"%0A%3Csgnw-symbol%3ES10000%3C/sgnw-symbol%3E%0A",mdxType:"Preview"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("sgnw-symbol",null,"S10000")))}MDXContent.isMDXComponent=!0;var __page=function(){throw new Error("Docs-only story")};__page.story={parameters:{docsOnly:!0}};var componentMeta={title:"sgnw-components|Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=_objectSpread(_objectSpread({},componentMeta.parameters.docs||{}),{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_13__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},450:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(2),__webpack_require__(44),__webpack_require__(32),__webpack_require__(8),__webpack_require__(3),__webpack_require__(60),__webpack_require__(41),__webpack_require__(445),__webpack_require__(446),__webpack_require__(4),__webpack_require__(36),__webpack_require__(0);var esm=__webpack_require__(16),blocks=__webpack_require__(42);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Description,{markdown:"# @sutton-signwriting/sgnw-components\n\n[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sutton-signwriting/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)\n[![version](https://img.shields.io/npm/v/@sutton-signwriting/sgnw-components)](https://www.npmjs.com/package/@sutton-signwriting/sgnw-components)\n[![npm downloads](https://img.shields.io/npm/dm/@sutton-signwriting/sgnw-components)](https://npm-stat.com/charts.html?package=@sutton-signwriting/sgnw-components&from=2020-07-24)\n\n@sutton-signwriting/sgnw-components is a javascript package for the browser that includes a collection of web components built with https://stenciljs.com/\n\nThis is an early release for testing and development.\nFeedback is welcome.\n\nThis package supports both Formal SignWriting in ASCII (FSW) and SignWriting in Unicode (SWU) character sets, along with the associated query languages and style string.  See [draft-slevinski-formal-signwriting](https://tools.ietf.org/id/draft-slevinski-formal-signwriting-07.html) for detailed specification.\n\n> Author: https://SteveSlevinski.me  \n> Channel: https://www.youtube.com/channel/UCXu4AXlG0rXFtk_5SzumDow  \n> Support: https://www.patreon.com/signwriting  \n\n## Useful links\n\n- Source: https://github.com/sutton-signwriting/sgnw-components\n- Distribution: https://unpkg.com/browse/@sutton-signwriting/sgnw-components/\n- Documentation: https://sutton-signwriting.github.io/sgnw-components/\n- Issue Tracker: https://github.com/sutton-signwriting/sgnw-components/issues\n- Online Discussion: https://gitter.im/sutton-signwriting/community\n\n\n## Using the Sutton SignWriting Web Components\n\n### Script tag\n\n- Put a script tag similar to this `<script src='https://unpkg.com/@sutton-signwriting/sgnw-components@0.1.0/dist/sgnw-components.js'><\/script>` in the head of your index.html\n- Then you can use the elements anywhere in your template, JSX, html etc\n\n### Node Modules\n- Run `npm install @sutton-signwriting/sgnw-components --save`\n- Put a script tag similar to this `<script src='node_modules/@sutton-signwriting/sgnw-components/dist/sgnw-components.js'><\/script>` in the head of your index.html\n- Then you can use the element anywhere in your template, JSX, html etc\n\n### In a stencil-starter app\n- Run `npm install @sutton-signwriting/sgnw-components --save`\n- Add an import to the npm packages `import @sutton-signwriting/sgnw-components;`\n- Then you can use the element anywhere in your template, JSX, html etc\n\n\n## License\nMIT\n\n## SignWriting General Interest\n- SignWriting Website: https://signwriting.org/\n- Wikipedia page: https://en.wikipedia.org/wiki/SignWriting\n- Email Discussion: https://www.signwriting.org/forums/swlist/\n- Facebook Group: https://www.facebook.com/groups/SuttonSignWriting/\n",mdxType:"Description"}),Object(esm.mdx)(blocks.Meta,{title:"sgnw-components|Read Me",mdxType:"Meta"}))}MDXContent.isMDXComponent=!0;var __page=function(){throw new Error("Docs-only story")};__page.story={parameters:{docsOnly:!0}};var componentMeta={title:"sgnw-components|Read Me",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=_objectSpread(_objectSpread({},componentMeta.parameters.docs||{}),{},{page:function page(){return Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null))}});__webpack_exports__.default=componentMeta},467:function(module,exports,__webpack_require__){__webpack_require__(468),__webpack_require__(614),__webpack_require__(615),__webpack_require__(1266),module.exports=__webpack_require__(1275)},532:function(module,exports){}},[[467,1,2]]]);
//# sourceMappingURL=main.167712cb475ed9da50a9.bundle.js.map