(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return CalculationContext}));var _home_monika_playground_calculator_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),CalculationContext=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),CalculationProvider=function CalculationProvider(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),_useState2=Object(_home_monika_playground_calculator_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),result=_useState2[0],setResult=_useState2[1],calculate=function calculate(expression){setResult(eval(expression))};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CalculationContext.Provider,{value:{calculate:calculate,result:result}},props.children)};__webpack_exports__.b=CalculationProvider},,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=a.n(c),_=(a(10),a(11),a(2)),o=a(1),u=function(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(n.useContext)(o.a).calculate,u=function(e){var t=e.target.name;a.length>0&&"="===t?(r(a),c("")):c(a+t)};return l.a.createElement("div",null,l.a.createElement("span",null,"Data: "),a,l.a.createElement("div",null,l.a.createElement("button",{name:"(",onClick:u},"("),l.a.createElement("button",{name:"CE",onClick:u},"CE"),l.a.createElement("button",{name:")",onClick:u},")"),l.a.createElement("button",{name:"C",onClick:u},"C"),l.a.createElement("br",null),l.a.createElement("button",{name:"1",onClick:u},"1"),l.a.createElement("button",{name:"2",onClick:u},"2"),l.a.createElement("button",{name:"3",onClick:u},"3"),l.a.createElement("button",{name:"+",onClick:u},"+"),l.a.createElement("br",null),l.a.createElement("button",{name:"4",onClick:u},"4"),l.a.createElement("button",{name:"5",onClick:u},"5"),l.a.createElement("button",{name:"6",onClick:u},"6"),l.a.createElement("button",{name:"-",onClick:u},"-"),l.a.createElement("br",null),l.a.createElement("button",{name:"7",onClick:u},"7"),l.a.createElement("button",{name:"8",onClick:u},"8"),l.a.createElement("button",{name:"9",onClick:u},"9"),l.a.createElement("button",{name:"*",onClick:u},"x"),l.a.createElement("br",null),l.a.createElement("button",{name:".",onClick:u},"."),l.a.createElement("button",{name:"0",onClick:u},"0"),l.a.createElement("button",{name:"=",onClick:u},"="),l.a.createElement("button",{name:"/",onClick:u},"\xf7"),l.a.createElement("br",null)))},i=function(){var e=Object(n.useContext)(o.a).result;return console.log("kalkulacja",e),l.a.createElement("div",null,l.a.createElement("span",null,"Result: "),e)};var m=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.b,null,l.a.createElement(i,null),l.a.createElement(u,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.27a984f1.chunk.js.map