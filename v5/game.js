var _TEXT = {
    "Game": {
        "MoreGames": "More Games",
        "Settings": "Settings",
        "GamePause": "PAUSE",
        "GameOver": "Game Over",
        "GameMode": "Select Game Mode",
        "GameSize": "Select Game Size",
        "PrivateGame": "Private Game",
        "Tutorial": "Tap your avatar to activate/deactivate the auto-mode!"
    },
    "Network": {
        "Connecting":"Connecting",
        "CancelGameRequest":"Cancelling game request",
        "ServerDisconnected":"Server disconnected",
        "ServerConnectionFailed":"Server connection failed",
        "NoServerConnected":"No game server connected!",
        "SearchingGame":"Waiting for player",
        "SearchingGames":"Waiting for players",
        "Left":" has left!",
        "UserOnline":" player online",
        "UsersOnline":" players online",
        "Players":" players",
        "Offline":"Offline",
        "LeftGame":"You have been kicked out due to inactivity",
        "Cheated":"You have been kicked out due to cheating",
        "KickedOut":" has been kicked out due to cheating",
        "NoPlayer":"No player!",
        "Reconnecting":"Waiting until your turn"
    }
};

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*!
 *  howler.js v2.0.13
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */
  var HowlerGlobal = function() {
    this.init();
  };
  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function() {
      var self = this || Howler;

      // Create a global ID counter.
      self._counter = 1000;

      // Internal properties.
      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

      // Public properties.
      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null;

      // Set to false to disable the auto iOS enabler.
      self.mobileAutoEnable = true;

      // Setup the various state values for global tracking.
      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this || Howler;
      vol = parseFloat(vol);

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol;

        // Don't update any of the nodes if we are muted.
        if (self._muted) {
          return self;
        }

        // When using Web Audio, we just need to adjust the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
        }

        // Loop through and change volume for all HTML5 audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and change the volumes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function(muted) {
      var self = this || Howler;

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted;

      // With Web Audio, we just need to mute the master gain.
      if (self.usingWebAudio) {
        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
      }

      // Loop through and mute all HTML5 Audio nodes.
      for (var i=0; i<self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds();

          // Loop through all sounds and mark the audio node as muted.
          for (var j=0; j<ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = (muted) ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function() {
      var self = this || Howler;

      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].unload();
      }

      // Create a new AudioContext to make sure it is fully reset.
      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function() {
      var self = this || Howler;

      // Keeps track of the suspend/resume state of the AudioContext.
      self.state = self.ctx ? self.ctx.state || 'running' : 'running';

      // Automatically begin the 30-second suspend process
      self._autoSuspend();

      // Check if audio is available.
      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio();

            // Check if the canplaythrough event is available.
            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch(e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      }

      // Test to make sure audio isn't disabled in Internet Explorer.
      try {
        var test = new Audio();
        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {}

      // Check for supported codecs.
      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function() {
      var self = this || Howler;
      var audioTest = null;

      // Must wrap in a try/catch because IE11 in server mode throws an error.
      try {
        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
      var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };

      return self;
    },

    /**
     * Mobile browsers will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _enableMobileAudio: function() {
      var self = this || Howler;

      // Only run this on mobile devices if audio isn't already eanbled.
      var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator && self._navigator.userAgent);
      var isTouch = !!(('ontouchend' in window) || (self._navigator && self._navigator.maxTouchPoints > 0) || (self._navigator && self._navigator.msMaxTouchPoints > 0));
      if (self._mobileEnabled || !self.ctx || (!isMobile && !isTouch)) {
        return;
      }

      self._mobileEnabled = false;

      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      }

      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684
      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

      // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.
      var unlock = function() {
        // Fix Android can not play in suspend state.
        Howler._autoResume();

        // Create an empty buffer.
        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination);

        // Play the empty buffer.
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        }

        // Setup a timeout to check that we are unlocked on the next event loop.
        source.onended = function() {
          source.disconnect(0);

          // Update the unlocked state and prevent this check from happening again.
          self._mobileEnabled = true;
          self.mobileAutoEnable = false;

          // Remove the touch start listener.
          document.removeEventListener('touchstart', unlock, true);
          document.removeEventListener('touchend', unlock, true);
        };
      };

      // Setup a touch start listener to attempt an unlock in.
      document.addEventListener('touchstart', unlock, true);
      document.addEventListener('touchend', unlock, true);

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      // Check if any sounds are playing.
      for (var i=0; i<self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j=0; j<self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      }

      // If no sound has played after 30 seconds, suspend the context.
      self._suspendTimer = setTimeout(function() {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';
        self.ctx.suspend().then(function() {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;
            self._autoResume();
          }
        });
      }, 30000);

      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended') {
        self.ctx.resume().then(function() {
          self.state = 'running';

          // Emit to all Howls that the audio has resumed.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  };

  // Setup the global audio controller.
  var Howler = new HowlerGlobal();

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */
  var Howl = function(o) {
    var self = this;

    // Throw an error if no source is provided.
    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };
  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function(o) {
      var self = this;

      // If we don't have an AudioContext created yet, run the setup.
      if (!Howler.ctx) {
        setupAudioContext();
      }

      // Setup user-defined default properties.
      self._autoplay = o.autoplay || false;
      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;
      self._xhrWithCredentials = o.xhrWithCredentials || false;

      // Setup all other default properties.
      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];
      self._playLock = false;

      // Setup event listeners.
      self._onend = o.onend ? [{fn: o.onend}] : [];
      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
      self._onload = o.onload ? [{fn: o.onload}] : [];
      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
      self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
      self._onresume = [];

      // Web Audio or HTML5 Audio?
      self._webAudio = Howler.usingWebAudio && !self._html5;

      // Automatically try to enable audio on iOS.
      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.mobileAutoEnable) {
        Howler._enableMobileAudio();
      }

      // Keep track of this Howl group in the global controller.
      Howler._howls.push(self);

      // If they selected autoplay, add a play event to the load queue.
      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function() {
            self.play();
          }
        });
      }

      // Load the source file unless otherwise specified.
      if (self._preload) {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function() {
      var self = this;
      var url = null;

      // If no audio is available, quit immediately.
      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');
        return;
      }

      // Make sure our source is in an array.
      if (typeof self._src === 'string') {
        self._src = [self._src];
      }

      // Loop through the sources and pick the first one that is compatible.
      for (var i=0; i<self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];
          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
            continue;
          }

          // Extract the file extension from the URL or base64 data URI.
          ext = /^data:audio\/([^;,]+);/i.exec(str);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        }

        // Log a warning if no extension was found.
        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        }

        // Check if this extension is available.
        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');
        return;
      }

      self._src = url;
      self._state = 'loading';

      // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.
      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      }

      // Create a new sound object and add it to the pool.
      new Sound(self);

      // Load and decode the audio data for playback.
      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function(sprite, internal) {
      var self = this;
      var id = null;

      // Determine if a sprite, sound id or nothing was passed
      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default';

        // Check if there is a single paused sound that isn't ended.
        // If there is, play that sound. If not, continue as usual.
        var num = 0;
        for (var i=0; i<self._sounds.length; i++) {
          if (self._sounds[i]._paused && !self._sounds[i]._ended) {
            num++;
            id = self._sounds[i]._id;
          }
        }

        if (num === 1) {
          sprite = null;
        } else {
          id = null;
        }
      }

      // Get the selected node, or get one from the pool.
      var sound = id ? self._soundById(id) : self._inactiveSound();

      // If the sound doesn't exist, do nothing.
      if (!sound) {
        return null;
      }

      // Select the sprite definition.
      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      }

      // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.
      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite;

        // Makr this sounded as not ended in case another sound is played before this one loads.
        sound._ended = false;

        // Add the sound to the queue to be played on load.
        var soundId = sound._id;
        self._queue.push({
          event: 'play',
          action: function() {
            self.play(soundId);
          }
        });

        return soundId;
      }

      // Don't play the sound if an id was passed and it is already playing.
      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          self._loadQueue('play');
        }

        return sound._id;
      }

      // Make sure the AudioContext isn't suspended, and resume it if it is.
      if (self._webAudio) {
        Howler._autoResume();
      }

      // Determine how long to play for and where to start playing.
      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
      var timeout = (duration * 1000) / Math.abs(sound._rate);

      // Update the parameters of the sound
      sound._paused = false;
      sound._ended = false;
      sound._sprite = sprite;
      sound._seek = seek;
      sound._start = self._sprite[sprite][0] / 1000;
      sound._stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      sound._loop = !!(sound._loop || self._sprite[sprite][2]);

      // Begin the actual playback.
      var node = sound._node;
      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function() {
          self._refreshBuffer(sound);

          // Setup the playback params.
          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime;

          // Play the sound using the supported method.
          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          }

          // Start a new timer if none is present.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function() {
              self._emit('play', sound._id);
            }, 0);
          }
        };

        if (Howler.state === 'running') {
          playWebAudio();
        } else {
          self.once('resume', playWebAudio);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate;

          // Mobile browsers will throw an error if this is called without user interaction.
          try {
            var play = node.play();

            // Support older browsers that don't support promises, and thus don't have this issue.
            if (typeof Promise !== 'undefined' && play instanceof Promise) {
              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
              self._playLock = true;

              // Releases the lock and executes queued actions.
              var runLoadQueue = function() {
                self._playLock = false;
                if (!internal) {
                  self._emit('play', sound._id);
                }
              };
              play.then(runLoadQueue, runLoadQueue);
            } else if (!internal) {
              self._emit('play', sound._id);
            }

            // Setting rate before playing won't work in IE, so we set it again here.
            node.playbackRate = sound._rate;

            // If the node is still paused, then we can assume there was a playback issue.
            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                'on mobile devices where playback was not within a user interaction.');
              return;
            }

            // Setup the end timer on sprites or listen for the ended event.
            if (sprite !== '__default' || sound._loop) {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } else {
              self._endTimers[sound._id] = function() {
                // Fire ended on this audio node.
                self._ended(sound);

                // Clear this listener.
                node.removeEventListener('ended', self._endTimers[sound._id], false);
              };
              node.addEventListener('ended', self._endTimers[sound._id], false);
            }
          } catch (err) {
            self._emit('playerror', sound._id, err);
          }
        };

        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
        var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
        if (node.readyState >= 3 || loadedNoReadyState) {
          playHtml5();
        } else {
          var listener = function() {
            // Begin playback.
            playHtml5();

            // Clear this listener.
            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };
          node.addEventListener(Howler._canPlayEvent, listener, false);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'pause',
          action: function() {
            self.pause(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be paused.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              }

              // Clean up the buffer source.
              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        }

        // Fire the pause event, unless `true` is passed as the 2nd argument.
        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function(id, internal) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to stop when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'stop',
          action: function() {
            self.stop(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be stopped.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;
              sound._node.pause();
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function(muted, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to mute when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'mute',
          action: function() {
            self.mute(muted, id);
          }
        });

        return self;
      }

      // If applying mute/unmute to all sounds, update the group's value.
      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      }

      // If no id is passed, get all ID's to be muted.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted;

          // Cancel active fade and set the volume to the end value.
          if (sound._interval) {
            self._stopFade(sound._id);
          }

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function() {
      var self = this;
      var args = arguments;
      var vol, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the volume or return the current volume.
      var sound;
      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded') {
          self._queue.push({
            event: 'volume',
            action: function() {
              self.volume.apply(self, args);
            }
          });

          return self;
        }

        // Set the group volume.
        if (typeof id === 'undefined') {
          self._volume = vol;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol;

            // Stop currently running fades.
            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function(from, to, len, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to fade when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'fade',
          action: function() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      }

      // Set the volume to the start position.
      self.volume(from, id);

      // Fade the volume of one or all sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        // Create a linear fade or fall back to timeouts with HTML5 Audio.
        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          }

          // If we are using Web Audio, let the native methods do the actual fade.
          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + (len / 1000);
            sound._volume = from;
            sound._node.gain.setValueAtTime(from, currentTime);
            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
        }
      }

      return self;
    },

    /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */
    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
      var self = this;
      var vol = from;
      var diff = to - from;
      var steps = Math.abs(diff / 0.01);
      var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
      var lastTick = Date.now();

      // Store the value being faded to.
      sound._fadeTo = to;

      // Update the volume value on each interval tick.
      sound._interval = setInterval(function() {
        // Update the volume based on the time since the last tick.
        var tick = (Date.now() - lastTick) / len;
        lastTick = Date.now();
        vol += diff * tick;

        // Make sure the volume is in the right bounds.
        vol = Math.max(0, vol);
        vol = Math.min(1, vol);

        // Round to within 2 decimal points.
        vol = Math.round(vol * 100) / 100;

        // Change the volume.
        if (self._webAudio) {
          sound._volume = vol;
        } else {
          self.volume(vol, sound._id, true);
        }

        // Set the group's volume.
        if (isGroup) {
          self._volume = vol;
        }

        // When the fade is complete, stop it and fire event.
        if ((to < from && vol <= to) || (to > from && vol >= to)) {
          clearInterval(sound._interval);
          sound._interval = null;
          sound._fadeTo = null;
          self.volume(to, sound._id);
          self._emit('fade', sound._id);
        }
      }, stepLen);
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function(id) {
      var self = this;
      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self.volume(sound._fadeTo, id);
        sound._fadeTo = null;
        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function() {
      var self = this;
      var args = arguments;
      var loop, id, sound;

      // Determine the values for loop and id.
      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      }

      // If no id is passed, get all ID's to be looped.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;
          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;
            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function() {
      var self = this;
      var args = arguments;
      var rate, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the playback rate or return the current value.
      var sound;
      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded') {
          self._queue.push({
            event: 'rate',
            action: function() {
              self.rate.apply(self, args);
            }
          });

          return self;
        }

        // Set the group rate.
        if (typeof id === 'undefined') {
          self._rate = rate;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            sound._rateSeek = self.seek(id[i]);
            sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            sound._rate = rate;

            // Change the playback rate.
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            }

            // Reset the timers.
            var seek = self.seek(id[i]);
            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Start a new end timer if sound is already playing.
            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);
              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function() {
      var self = this;
      var args = arguments;
      var seek, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current position of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else if (self._sounds.length) {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // If there is no ID, bail out.
      if (typeof id === 'undefined') {
        return self;
      }

      // If the sound hasn't loaded, add it to the load queue to seek when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'seek',
          action: function() {
            self.seek.apply(self, args);
          }
        });

        return self;
      }

      // Get the sound.
      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);
          if (playing) {
            self.pause(id, true);
          }

          // Move the position of the track and cancel timer.
          sound._seek = seek;
          sound._ended = false;
          self._clearTimer(id);

          // Restart the playback if the sound was playing.
          if (playing) {
            self.play(id, true);
          }

          // Update the seek position for HTML5 Audio.
          if (!self._webAudio && sound._node) {
            sound._node.currentTime = seek;
          }

          // Wait for the play lock to be unset before emitting (HTML5 Audio).
          if (playing && !self._webAudio) {
            var emitSeek = function() {
              if (!self._playLock) {
                self._emit('seek', id);
              } else {
                setTimeout(emitSeek, 0);
              }
            };
            setTimeout(emitSeek, 0);
          } else {
            self._emit('seek', id);
          }
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function(id) {
      var self = this;

      // Check the passed sound ID (if any).
      if (typeof id === 'number') {
        var sound = self._soundById(id);
        return sound ? !sound._paused : false;
      }

      // Otherwise, loop through all sounds and check if any are playing.
      for (var i=0; i<self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function(id) {
      var self = this;
      var duration = self._duration;

      // If we pass an ID, get the sound and return the sprite length.
      var sound = self._soundById(id);
      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function() {
      var self = this;

      // Stop playing any active sounds.
      var sounds = self._sounds;
      for (var i=0; i<sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        }

        // Remove the source or disconnect.
        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
          if (!checkIE) {
            sounds[i]._node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
          }

          // Remove any event listeners.
          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
        }

        // Empty out all of the nodes.
        delete sounds[i]._node;

        // Make sure all timers are cleared out.
        self._clearTimer(sounds[i]._id);
      }

      // Remove the references in the global Howler object.
      var index = Howler._howls.indexOf(self);
      if (index >= 0) {
        Howler._howls.splice(index, 1);
      }

      // Delete this sound from the cache (if no other Howl is using it).
      var remCache = true;
      for (i=0; i<Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      }

      // Clear global errors.
      Howler.noAudio = false;

      // Clear out `self`.
      self._state = 'unloaded';
      self._sounds = [];
      self = null;

      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0;

      // Allow passing just an event and ID.
      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i=0; i<events.length; i++) {
          var isId = (id === events[i].id);
          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);
        for (i=0; i<keys.length; i++) {
          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function(event, fn, id) {
      var self = this;

      // Setup the event listener.
      self.on(event, fn, id, 1);

      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function(event, id, msg) {
      var self = this;
      var events = self['_on' + event];

      // Loop through event store and fire all functions.
      for (var i=events.length-1; i>=0; i--) {
        // Only fire the listener if the correct ID is used.
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function(fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0);

          // If this event was setup with `once`, remove it.
          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      }

      // Pass the event type into load queue so that it can continue stepping.
      self._loadQueue(event);

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function(event) {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0];

        // Remove this task if a matching event was passed.
        if (task.event === event) {
          self._queue.shift();
          self._loadQueue();
        }

        // Run the task if no event type is passed.
        if (!event) {
          task.action();
        }
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function(sound) {
      var self = this;
      var sprite = sound._sprite;

      // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.
      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      }

      // Should this sound loop?
      var loop = !!(sound._loop || self._sprite[sprite][2]);

      // Fire the ended event.
      self._emit('end', sound._id);

      // Restart the playback for HTML5 Audio loop.
      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      }

      // Restart this timer if on a Web Audio loop.
      if (self._webAudio && loop) {
        self._emit('play', sound._id);
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;

        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      }

      // Mark the node as paused.
      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        self._clearTimer(sound._id);

        // Clean up the buffer source.
        self._cleanBuffer(sound._node);

        // Attempt to auto-suspend AudioContext if no sounds are still playing.
        Howler._autoSuspend();
      }

      // When using a sprite, end the track.
      if (!self._webAudio && !loop) {
        self.stop(sound._id, true);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function(id) {
      var self = this;

      if (self._endTimers[id]) {
        // Clear the timeout or remove the ended listener.
        if (typeof self._endTimers[id] !== 'function') {
          clearTimeout(self._endTimers[id]);
        } else {
          var sound = self._soundById(id);
          if (sound && sound._node) {
            sound._node.removeEventListener('ended', self._endTimers[id], false);
          }
        }

        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function(id) {
      var self = this;

      // Loop through all sounds and find the one with this ID.
      for (var i=0; i<self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function() {
      var self = this;

      self._drain();

      // Find the first inactive node to recycle.
      for (var i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      }

      // If no inactive node was found, create a new one.
      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0;

      // If there are less sounds than the max pool size, we are done.
      if (self._sounds.length < limit) {
        return;
      }

      // Count the number of inactive sounds.
      for (i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      }

      // Remove excess inactive sounds, going in reverse order.
      for (i=self._sounds.length - 1; i>=0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          }

          // Remove sounds until we have the pool size.
          self._sounds.splice(i, 1);
          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];
        for (var i=0; i<self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function(sound) {
      var self = this;

      // Setup the buffer source for playback.
      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src];

      // Connect to the correct node.
      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      }

      // Setup looping and playback rate.
      sound._node.bufferSource.loop = sound._loop;
      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop;
      }
      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function(node) {
      var self = this;

      if (Howler._scratchBuffer && node.bufferSource) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);
        try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
      }
      node.bufferSource = null;

      return self;
    }
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */
  var Sound = function(howl) {
    this._parent = howl;
    this.init();
  };
  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function() {
      var self = this;
      var parent = self._parent;

      // Setup the default parameters.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a unique ID for this sound.
      self._id = ++Howler._counter;

      // Add itself to the parent's pool.
      parent._sounds.push(self);

      // Create the new node.
      self.create();

      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function() {
      var self = this;
      var parent = self._parent;
      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
        self._node.paused = true;
        self._node.connect(Howler.masterGain);
      } else {
        self._node = new Audio();

        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
        self._errorFn = self._errorListener.bind(self);
        self._node.addEventListener('error', self._errorFn, false);

        // Listen for 'canplaythrough' event to let us know the sound is ready.
        self._loadFn = self._loadListener.bind(self);
        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

        // Setup the new audio node.
        self._node.src = parent._src;
        self._node.preload = 'auto';
        self._node.volume = volume * Howler.volume();

        // Begin loading the source.
        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function() {
      var self = this;
      var parent = self._parent;

      // Reset all of the parameters of this sound.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a new ID so that it isn't confused with the previous sound.
      self._id = ++Howler._counter;

      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function() {
      var self = this;

      // Fire an error event and pass back the code.
      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

      // Clear the event listener.
      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function() {
      var self = this;
      var parent = self._parent;

      // Round up the duration to account for the lower precision in HTML5 Audio.
      parent._duration = Math.ceil(self._node.duration * 10) / 10;

      // Setup a sprite if none is defined.
      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {__default: [0, parent._duration * 1000]};
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';
        parent._emit('load');
        parent._loadQueue();
      }

      // Clear the event listener.
      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    }
  };

  /** Helper Methods **/
  /***************************************************************************/

  var cache = {};

  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */
  var loadBuffer = function(self) {
    var url = self._src;

    // Check if the buffer has already been cached and use it instead.
    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration;

      // Load the sound into this Howl.
      loadSound(self);

      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);
      for (var i=0; i<data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.withCredentials = self._xhrWithCredentials;
      xhr.responseType = 'arraybuffer';
      xhr.onload = function() {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];
        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
          return;
        }

        decodeAudioData(xhr.response, self);
      };
      xhr.onerror = function() {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };
      safeXhrSend(xhr);
    }
  };

  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */
  var safeXhrSend = function(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };

  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */
  var decodeAudioData = function(arraybuffer, self) {
    // Decode the buffer into an audio source.
    Howler.ctx.decodeAudioData(arraybuffer, function(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      }
    }, function() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    });
  };

  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */
  var loadSound = function(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {__default: [0, self._duration * 1000]};
    }

    // Fire the loaded event.
    if (self._state !== 'loaded') {
      self._state = 'loaded';
      self._emit('load');
      self._loadQueue();
    }
  };

  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */
  var setupAudioContext = function() {
    // Check if we are using Web Audio and setup the AudioContext if we are.
    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch(e) {
      Howler.usingWebAudio = false;
    }

    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.
    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var version = appVersion ? parseInt(appVersion[1], 10) : null;
    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
      if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
        Howler.usingWebAudio = false;
      }
    }

    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    if (Howler.usingWebAudio) {
      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : 1, Howler.ctx.currentTime);
      Howler.masterGain.connect(Howler.ctx.destination);
    }

    // Re-run the setup on Howler.
    Howler._setup();
  };

  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    });
  }

  // Add support for CommonJS libraries such as browserify.
  if (typeof exports !== 'undefined') {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // Define globally in case AMD is not available or unused.
  if (typeof window !== 'undefined') {
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  } else if (typeof global !== 'undefined') { // Add to global in Node.js (for testing, etc).
    global.HowlerGlobal = HowlerGlobal;
    global.Howler = Howler;
    global.Howl = Howl;
    global.Sound = Sound;
  }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.0.13
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  // Setup default properties.
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */
  HowlerGlobal.prototype.stereo = function(pan) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Loop through all Howls and update their stereo panning.
    for (var i=self._howls.length-1; i>=0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };

  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */
  HowlerGlobal.prototype.pos = function(x, y, z) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._pos[1] : y;
    z = (typeof z !== 'number') ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];

      if (typeof self.ctx.listener.positionX !== 'undefined') {
        self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
      }
    } else {
      return self._pos;
    }

    return self;
  };

  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */
  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    var or = self._orientation;
    y = (typeof y !== 'number') ? or[1] : y;
    z = (typeof z !== 'number') ? or[2] : z;
    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];

      if (typeof self.ctx.listener.forwardX !== 'undefined') {
        self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
      }
    } else {
      return or;
    }

    return self;
  };

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */
  Howl.prototype.init = (function(_super) {
    return function(o) {
      var self = this;

      // Setup user-defined default properties.
      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      };

      // Setup event listeners.
      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

      // Complete initilization with howler.js core's init function.
      return _super.call(this, o);
    };
  })(Howl.prototype.init);

  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */
  Howl.prototype.stereo = function(pan, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function() {
          self.stereo(pan, id);
        }
      });

      return self;
    }

    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

    // Setup the group's stereo panning if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    }

    // Change the streo panning of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower';

            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(pan, 0, 0);
              }
            } else {
              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */
  Howl.prototype.pos = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change position when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? 0 : y;
    z = (typeof z !== 'number') ? -0.5 : z;

    // Setup the group's spatial position if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    }

    // Change the spatial position of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.positionX !== 'undefined') {
              sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setOrientation(x, y, z);
            }
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */
  Howl.prototype.orientation = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._orientation[1] : y;
    z = (typeof z !== 'number') ? self._orientation[2] : z;

    // Setup the group's spatial orientation if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    }

    // Change the spatial orientation of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
            sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
            sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */
  Howl.prototype.pannerAttr = function() {
    var self = this;
    var args = arguments;
    var o, id, sound;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // Determine the values based on arguments.
    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (typeof args[0] === 'object') {
        o = args[0];

        // Set the grou's panner attribute values.
        if (typeof id === 'undefined') {
          if (!o.pannerAttr) {
            o.pannerAttr = {
              coneInnerAngle: o.coneInnerAngle,
              coneOuterAngle: o.coneOuterAngle,
              coneOuterGain: o.coneOuterGain,
              distanceModel: o.distanceModel,
              maxDistance: o.maxDistance,
              refDistance: o.refDistance,
              rolloffFactor: o.rolloffFactor,
              panningModel: o.panningModel
            };
          }

          self._pannerAttr = {
            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    }

    // Update the values of the specified sounds.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
        };

        // Update the panner values or create a new panner if none exists.
        var panner = sound._panner;
        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
          panner.panningModel = pa.panningModel;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          }

          // Create a new panner node.
          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */
  Sound.prototype.init = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Setup user-defined default properties.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete initilization with howler.js core Sound's init function.
      _super.call(this);

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  })(Sound.prototype.init);

  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */
  Sound.prototype.reset = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Reset all spatial plugin properties on this sound.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      } else if (self._panner) {
        // Disconnect the panner.
        self._panner.disconnect(0);
        self._panner = undefined;
        parent._refreshBuffer(self);
      }

      // Complete resetting of the sound.
      return _super.call(this);
    };
  })(Sound.prototype.reset);

  /** Helper Methods **/
  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */
  var setupPanner = function(sound, type) {
    type = type || 'spatial';

    // Create the new panner node.
    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.panningModel = sound._pannerAttr.panningModel;

      if (typeof sound._panner.positionX !== 'undefined') {
        sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
        sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
        sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      }

      if (typeof sound._panner.orientationX !== 'undefined') {
        sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
        sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
        sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
      }
    } else {
      sound._panner = Howler.ctx.createStereoPanner();
      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
    }

    sound._panner.connect(sound._node);

    // Update the connections.
    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id, true);
    }
  };
})();


this.jukebox = {};
/*
 * The first parameter @settings {Map} defines the settings of
 * the created instance which overwrites the {#defaults}.
 *
 * The second optional parameter @origin {Number} is a unique id of
 * another {jukebox.Player} instance, but it is only used internally
 * by the {jukebox.Manager} for creating and managing clones.
 */
jukebox.Player = function(settings, origin) {
	this.id = ++jukebox.__jukeboxId;
	this.origin = origin || null;


	this.settings = {};

	for (var d in this.defaults) {
		this.settings[d] = this.defaults[d];
	}

	if (Object.prototype.toString.call(settings) === '[object Object]') {
		for (var s in settings) {
			this.settings[s] = settings[s];
		}
	}


	/**
	 * #break(jukebox.Manager)
	 */

	// Pseudo-Singleton to prevent double-initializaion
	if (Object.prototype.toString.call(jukebox.Manager) === '[object Function]') {
		jukebox.Manager = new jukebox.Manager();
	}


	this.isPlaying = null;
	this.resource = null;


	// Get playable resources via Feature / Codec Detection
	if (Object.prototype.toString.call(jukebox.Manager) === '[object Object]') {
		this.resource = jukebox.Manager.getPlayableResource(this.settings.resources);
	} else {
		this.resource = this.settings.resources[0] || null;
	}


	if (this.resource === null) {
		throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
	} else {
		this.__init();
	}


	return this;

};

jukebox.__jukeboxId = 0;

jukebox.Player.prototype = {

	/*
	 * The defaults which are overwritten by the {#constructor}'s
	 * settings parameter.
	 *
	 * @resources contains an {Array} of File URL {String}s
	 * @spritemap is a Hashmap containing multiple @sprite-entry {Object}
	 *
	 * @autoplay is an optional {String} that autoplays a @sprite-entry
	 *
	 * @flashMediaElement is an optional setting that contains the
	 * relative URL {String} to the FlashMediaElement.swf for flash fallback.
	 *
	 * @timeout is a {Number} in milliseconds that is used if no "canplaythrough"
	 * event is fired on the Audio Node.
	 */
	defaults: {
		resources: [],
		autoplay: false,
		spritemap: {},
		flashMediaElement: './swf/FlashMediaElement.swf',
		timeout: 1000
	},


	/*
	 * PRIVATE API
	 */
	__addToManager: function(event) {

		if (this.__wasAddedToManager !== true) {
			jukebox.Manager.add(this);
			this.__wasAddedToManager = true;
		}

	},

	/*
	__log: function(title, desc) {

		if (!this.__logElement) {
			this.__logElement = document.createElement('ul');
			document.body.appendChild(this.__logElement);
		}

		var that = this;
		window.setTimeout(function() {
			var item = document.createElement('li');
			item.innerHTML = '<b>' + title + '</b>: ' + (desc ? desc : '');
			that.__logElement.appendChild(item);
		}, 0);

	},

	__updateBuffered: function(event) {

		var buffer = this.context.buffered;

		if (buffer) {

			for (var b = 0; b < buffer.length; b++) {
				this.__log(event.type, buffer.start(b).toString() + ' / ' + buffer.end(b).toString());
			}

		}

	},
	*/


	__init: function() {

		var that = this,
			settings = this.settings,
			features = {},
			api;

		if (jukebox.Manager && jukebox.Manager.features !== undefined) {
			features = jukebox.Manager.features;
		}

		// HTML5 Audio
		if (features.html5audio === true) {

			this.context = new Audio();
			this.context.src = this.resource;

			if (this.origin === null) {

				// This will add the stream to the manager's stream cache,
				// there's a fallback timeout if the canplaythrough event wasn't fired
				var addFunc = function(event){ that.__addToManager(event); };
				this.context.addEventListener('canplaythrough', addFunc, true);

				// Uh, Oh, What is it good for? Uh, Oh ...
				/*
					var bufferFunc = function(event) { that.__updateBuffered(event); };
					this.context.addEventListener('loadedmetadata', bufferFunc, true);
					this.context.addEventListener('progress', bufferFunc, true);
				*/

				// This is the timeout, we will penetrate the currentTime anyways.
				window.setTimeout(function(){
					that.context.removeEventListener('canplaythrough', addFunc, true);
					addFunc('timeout');
				}, settings.timeout);

			}

			// old WebKit
			this.context.autobuffer = true;

			// new WebKit
			this.context.preload = true;


			// FIXME: This is the hacky API, but got no more generic idea for now =/
			for (api in this.HTML5API) {
				this[api] = this.HTML5API[api];
			}

			if (features.channels > 1) {

				if (settings.autoplay === true) {
					this.context.autoplay = true;
				} else if (settings.spritemap[settings.autoplay] !== undefined) {
					this.play(settings.autoplay);
				}

			} else if (features.channels === 1 && settings.spritemap[settings.autoplay] !== undefined) {

				this.backgroundMusic = settings.spritemap[settings.autoplay];
				this.backgroundMusic.started = Date.now ? Date.now() : +new Date();

				// Initial playback will do the trick for iOS' security model
				this.play(settings.autoplay);

			}

			// Pause audio on screen timeout because it can't be controlled then.
			if (features.channels == 1 && settings.canPlayBackground !== true) {
				// This does not work in iOS < 5.0 and Windows Phone.
				// Calling audio.pause() after onbeforeunload event on Windows Phone may
				// remove all audio from the browser until you restart the device.
				window.addEventListener('pagehide', function() {
					if (that.isPlaying !== null) {
						that.pause();
						that.__wasAutoPaused = true;
					}
				});
				window.addEventListener('pageshow', function() {
					if (that.__wasAutoPaused) {
						that.resume();
						delete that._wasAutoPaused;
					}
				});
			}


		// Flash Audio
		} else if (features.flashaudio === true) {

			// FIXME: This is the hacky API, but got no more generic idea for now =/
			for (api in this.FLASHAPI) {
				this[api] = this.FLASHAPI[api];
			}

			var flashVars = [
				'id=jukebox-flashstream-' + this.id,
				'autoplay=' + settings.autoplay,
				'file=' + window.encodeURIComponent(this.resource)
			];

			// Too much crappy code, have this in a crappy function instead.
			this.__initFlashContext(flashVars);

			if (settings.autoplay === true) {
				this.play(0);
			} else if (settings.spritemap[settings.autoplay]) {
				this.play(settings.autoplay);
			}

		} else {

			throw "Your Browser does not support Flash Audio or HTML5 Audio.";

		}

	},

	/*
	 * This is not that simple, better code structure with a helper function
	 */
	__initFlashContext: function(flashVars) {

		var context,
			url = this.settings.flashMediaElement,
			p;

		var params = {
			'flashvars': flashVars.join('&'),
			'quality': 'high',
			'bgcolor': '#000000',
			'wmode': 'transparent',
			'allowscriptaccess': 'always',
			'allowfullscreen': 'true'
		};

		/*
		 * IE will only render a Shockwave Flash file if there's this crappy outerHTML used.
		 */
		if (navigator.userAgent.match(/MSIE/)) {

			context = document.createElement('div');

			// outerHTML only works in IE when context is already in DOM
			document.getElementsByTagName('body')[0].appendChild(context);


			var object = document.createElement('object');

			object.id = 'jukebox-flashstream-' + this.id;
			object.setAttribute('type', 'application/x-shockwave-flash');
			object.setAttribute('classid', 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000');
			object.setAttribute('width', '0');
			object.setAttribute('height', '0');


			// IE specific params
			params.movie = url + '?x=' + (Date.now ? Date.now() : +new Date());
			params.flashvars = flashVars.join('&amp;');



			for (p in params) {

				var element = document.createElement('param');
				element.setAttribute('name', p);
				element.setAttribute('value', params[p]);
				object.appendChild(element);

			}

			context.outerHTML = object.outerHTML;

			this.context = document.getElementById('jukebox-flashstream-' + this.id);


		/*
		 * This is the case for a cool, but outdated Browser
		 * ... like Netscape or so ;)
		 */
		} else {

			context = document.createElement('embed');
			context.id = 'jukebox-flashstream-' + this.id;
			context.setAttribute('type', 'application/x-shockwave-flash');
			context.setAttribute('width', '100');
			context.setAttribute('height', '100');

			params.play = false;
			params.loop = false;
			params.src = url + '?x=' + (Date.now ? Date.now() : +new Date());

			for (p in params) {
				context.setAttribute(p, params[p]);
			}

			document.getElementsByTagName('body')[0].appendChild(context);

			this.context = context;

		}

	},

	/*
	 * This is the background hack for iOS and other single-channel systems
	 * It allows playback of a background music, which will be overwritten by playbacks
	 * of other sprite entries. After these entries, background music continues.
	 *
	 * This allows us to trick out the iOS Security Model after initial playback =)
	 */
	backgroundHackForiOS: function() {

		if (this.backgroundMusic === undefined) {
			return;
		}

		var now = Date.now ? Date.now() : +new Date();

		if (this.backgroundMusic.started === undefined) {

			this.backgroundMusic.started = now;
			this.setCurrentTime(this.backgroundMusic.start);

		} else {

			this.backgroundMusic.lastPointer = (( now - this.backgroundMusic.started) / 1000) % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start;
			this.play(this.backgroundMusic.lastPointer);

		}

	},



	/*
	 * PUBLIC API
	 */

	/*
	 * This method will try to playback a given @pointer position of the stream.
	 * The @pointer position can be either a {String} of a sprite entry inside
	 * {#settings.spritemap} or a {Number} in seconds.
	 *
	 * The optional parameter @enforce is a {Boolean} that enforces the stream
	 * playback and avoids queueing or work delegation to a free clone.
	 */
	play: function(pointer, enforce) {

		if (this.isPlaying !== null && enforce !== true) {

			if (jukebox.Manager !== undefined) {
				jukebox.Manager.addToQueue(pointer, this.id);
			}

			return;

		}

		var spritemap = this.settings.spritemap,
			newPosition;

		// Spritemap Entry Playback
		if (spritemap[pointer] !== undefined) {

			newPosition = spritemap[pointer].start;

		// Seconds-Position Playback (find out matching spritemap entry)
		} else if (typeof pointer === 'number') {

			newPosition = pointer;

			for (var s in spritemap) {

				if (newPosition >= spritemap[s].start && newPosition <= spritemap[s].end) {
					pointer = s;
					break;
				}

			}

		}

		if (newPosition !== undefined && Object.prototype.toString.call(spritemap[pointer]) === '[object Object]') {

			this.isPlaying = this.settings.spritemap[pointer];

			// Start Playback, stream position will be corrected by jukebox.Manager
			if (this.context.play) {
				this.context.play();
			}

			// Locking due to slow Implementation on Mobile Devices
			this.wasReady = this.setCurrentTime(newPosition);

		}

	},

	/*
	 * This method will stop the current playback and resets the pointer that is
	 * cached by {#pause} method calls.
	 *
	 * It automatically starts the backgroundMusic for single-stream environments.
	 */
	stop: function() {

		this.__lastPosition = 0; // reset pointer
		this.isPlaying = null;

		// Was a Background Music played already?
		if (this.backgroundMusic) {
			this.backgroundHackForiOS();
		} else {
			this.context.pause();
		}

		return true;

	},

	/*
	 * {Number} This method will pause the current playback and cache the current position
	 * that is used by {#resume} on its next call.
	 *
	 * It returns the last position {Number} in seconds, so that you can optionally
	 * use it in the {#resume} method call.
	 */
	pause: function() {

		this.isPlaying = null;

		this.__lastPosition = this.getCurrentTime();
		this.context.pause();

		return this.__lastPosition;

	},

	/*
	 * {Boolean} This method will resume playback. If the optional parameter @position
	 * {Number} is not used, it will try to playback the last cached position from the
	 * last {#pause} method call.
	 *
	 * If no @position and no cached position is available, it will start playback - no
	 * matter where the stream is currently at.
	 *
	 * It returns {True} if a cached position was used. If no given and no cached
	 * position was used for playback, it will return {False}
	 */
	resume: function(position) {

		position = typeof position === 'number' ? position : this.__lastPosition;

		if (position !== null) {

			this.play(position);
			this.__lastPosition = null;
			return true;

		} else {

			this.context.play();
			return false;

		}

	},



	/*
	 * HTML5 Audio API abstraction layer
	 */
	HTML5API: {

		/*
		 * {Number} This method will return the current volume as a {Number}
		 * from 0 to 1.0.
		 */
		getVolume: function() {
			return this.context.volume || 1;
		},

		/*
		 * This method will set the volume to a given @value that is a {Number}
		 * from 0 to 1.0.
		 */
		setVolume: function(value) {

			this.context.volume = value;

			// This is apparently only for mobile implementations
			if (Math.abs(this.context.volume - value) < 0.0001) {
				return true;
			}


			return false;

		},

		/*
		 * {Number} This method will return the current pointer position in
		 * the stream in seconds.
		 */
		getCurrentTime: function() {
			return this.context.currentTime || 0;
		},

		/*
		 * {Boolean} This method will set the current pointer position to a
		 * new @value {Number} in seconds.
		 *
		 * It returns {True} on success, {False} if the stream wasn't ready
		 * at the given stream position @value.
		 */
		setCurrentTime: function(value) {

			try {
				// DOM Exceptions are fired when Audio Element isn't ready yet.
				this.context.currentTime = value;
				return true;
			} catch(e) {
				return false;
			}

		}

	},



	/*
	 * Flash Audio API abstraction layer
	 */
	FLASHAPI: {

		/*
		 * {Number} This method will return the current volume of the stream as
		 * a {Number} from 0 to 1.0, considering the Flash JavaScript API is
		 * ready for access.
		 */
		getVolume: function() {

			// Avoid stupid exceptions, wait for JavaScript API to be ready
			if (this.context && typeof this.context.getVolume === 'function') {
				return this.context.getVolume();
			}

			return 1;

		},

		/*
		 * {Boolean} This method will set the volume to a given @value which is
		 * a {Number} from 0 to 1.0. It will return {True} if the Flash
		 * JavaScript API is ready for access. It returns {False} if the Flash
		 * JavaScript API wasn't ready.
		 */
		setVolume: function(value) {

			// Avoid stupid exceptions, wait for JavaScript API to be ready
			if (this.context && typeof this.context.setVolume === 'function') {
				this.context.setVolume(value);
				return true;
			}

			return false;

		},

		/*
		 * {Number} This method will return the pointer position in the stream in
		 * seconds.
		 *
		 * If the Flash JavaScript API wasn't ready, the pointer position is 0.
		 */
		getCurrentTime: function() {

			// Avoid stupid exceptions, wait for JavaScript API to be ready
			if (this.context && typeof this.context.getCurrentTime === 'function') {
				return this.context.getCurrentTime();
			}

			return 0;

		},

		/*
		 * {Boolean} This method will set the pointer position to a given @value {Number}
		 * in seconds.
		 *
		 * It will return {True} if the Flash JavaScript API was ready. If not, it
		 * will return {False}.
		 */
		setCurrentTime: function(value) {

			// Avoid stupid exceptions, wait for JavaScript API to be ready
			if (this.context && typeof this.context.setCurrentTime === 'function') {
				return this.context.setCurrentTime(value);
			}

			return false;

		}

	}

};

if (this.jukebox === undefined) {
	throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly."
}


/*
 * This is the transparent jukebox.Manager that runs in the background.
 * You shouldn't have to call this constructor, only if you want to overwrite the
 * defaults for having an own gameloop.
 *
 * The first parameter @settings {Map} overwrites the {#defaults}.
 */
jukebox.Manager = function(settings) {

	this.features = {};
	this.codecs = {};

	// Correction, Reset & Pause
	this.__players = {};
	this.__playersLength = 0;

	// Queuing functionality
	this.__clones = {};
	this.__queue = [];


	this.settings = {};

	for (var d in this.defaults) {
		this.settings[d] = this.defaults[d];
	}

	if (Object.prototype.toString.call(settings) === '[object Object]') {
		for (var s in settings) {
			this.settings[s] = settings[s];
		}
	}


	this.__detectFeatures();


	// If you don't want to use an own game loop
	if (this.settings.useGameLoop === false) {

		jukebox.Manager.__initialized = window.setInterval(function() {
			jukebox.Manager.loop();
		}, 20);

	} else {
		jukebox.Manager.__initialized = true;
	}

};

jukebox.Manager.prototype = {

	/*
	 * The defaults {Map} consist of two different flags.
	 *
	 * The @useFlash {Boolean} which is available for enforcing flash
	 * usage and the @useGameLoop {Boolean} that allows you to use your
	 * own game loop for avoiding multiple intervals inside the Browser.
	 *
	 * If @useGameLoop is set to {True} you will have to call the
	 * {#jukebox.Manager.loop} method everytime in your gameloop.
	 */
	defaults: {
		useFlash: false,
		useGameLoop: false
	},

	__detectFeatures: function() {

		/*
		 * HTML5 Audio Support
		 */
		var audio = window.Audio && new Audio();

		if (audio && audio.canPlayType && this.settings.useFlash === false) {

			// Codec Detection MIME List
			var mimeList = [
				// e = extension, m = mime type
				{ e: '3gp', m: [ 'audio/3gpp', 'audio/amr' ] },
				// { e: 'avi', m: 'video/x-msvideo' }, // avi container allows pretty everything, impossible to detect -.-
				{ e: 'aac', m: [ 'audio/aac', 'audio/aacp' ] },
				{ e: 'amr', m: [ 'audio/amr', 'audio/3gpp' ] },
				// iOS aiff container that uses IMA4 (4:1 compression) on diff
				{ e: 'caf', m: [ 'audio/IMA-ADPCM', 'audio/x-adpcm', 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"' ] },
				{ e: 'm4a', m: [ 'audio/mp4', 'audio/mp4; codecs="mp4a.40.2,avc1.42E01E"', 'audio/mpeg4', 'audio/mpeg4-generic', 'audio/mp4a-latm', 'audio/MP4A-LATM', 'audio/x-m4a' ] },
				{ e: 'mp3', m: [ 'audio/mp3', 'audio/mpeg', 'audio/mpeg; codecs="mp3"', 'audio/MPA', 'audio/mpa-robust' ] }, // mpeg was name for mp2 and mp3! avi container was mp4/m4a
				{ e: 'mpga', m: [ 'audio/MPA', 'audio/mpa-robust', 'audio/mpeg', 'video/mpeg' ] },
				{ e: 'mp4', m: [ 'audio/mp4', 'video/mp4' ] },
				{ e: 'ogg', m: [ 'application/ogg', 'audio/ogg', 'audio/ogg; codecs="theora, vorbis"', 'video/ogg', 'video/ogg; codecs="theora, vorbis"' ] },
				{ e: 'wav', m: [ 'audio/wave', 'audio/wav', 'audio/wav; codecs="1"', 'audio/x-wav', 'audio/x-pn-wav' ] },
				{ e: 'webm', m: [ 'audio/webm', 'audio/webm; codecs="vorbis"', 'video/webm' ] }
			];

			var mime, extension;
			for (var m = 0, l = mimeList.length; m < l; m++) {

				extension = mimeList[m].e;

				if (mimeList[m].m.length && typeof mimeList[m].m === 'object') {

					for (var mm = 0, mml = mimeList[m].m.length; mm < mml; mm++) {

						mime = mimeList[m].m[mm];

						// Supported Codec was found for Extension, so skip redundant checks
						if (audio.canPlayType(mime) !== "") {
							this.codecs[extension] = mime;
							break;

						// Flag the unsupported extension (that it is also not supported for Flash Fallback)
						} else if (!this.codecs[extension]) {
							this.codecs[extension] = false;
						}

					}

				}

				// Go, GC, Go for it!
				mime = null;
				extension = null;

			}

			// Browser supports HTML5 Audio API theoretically, but support depends on Codec Implementations
			this.features.html5audio = !!(this.codecs.mp3 || this.codecs.ogg || this.codecs.webm || this.codecs.wav);

			// Default Channel Amount is 8, known to work with all Browsers
			this.features.channels = 8;

			// Detect Volume support
			audio.volume = 0.1337;
			this.features.volume = !!(Math.abs(audio.volume - 0.1337) < 0.0001);


			// FIXME: HACK, but there's no way to detect these crappy implementations
			if (
				// navigator.userAgent.match(/MSIE 9\.0/) ||
				navigator.userAgent.match(/iPhone|iPod|iPad/i)) {
				this.features.channels = 1;
			}

		}



		/*
		 * Flash Audio Support
		 * Hint: All Android devices support Flash, even Android 1.6 ones
		 */
		this.features.flashaudio = !!navigator.mimeTypes['application/x-shockwave-flash'] || !!navigator.plugins['Shockwave Flash'] || false;

		// Internet Explorer
		if (window.ActiveXObject){
			try {
				var flash = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.10');
				this.features.flashaudio = true;
			} catch(e) {
				// Throws an error if the version isn't available
			}
		}

		// Allow enforce of Flash Usage
		if (this.settings.useFlash === true) {
			this.features.flashaudio = true;
		}

		if (this.features.flashaudio === true) {

			// Overwrite Codecs only if there's no HTML5 Audio support
			if (!this.features.html5audio) {

				// Known to work with every Flash Implementation
				this.codecs.mp3 = 'audio/mp3';
				this.codecs.mpga = 'audio/mpeg';
				this.codecs.mp4 = 'audio/mp4';
				this.codecs.m4a = 'audio/mp4';


				// Flash Runtime on Android also supports GSM codecs, but impossible to detect
				this.codecs['3gp'] = 'audio/3gpp';
				this.codecs.amr = 'audio/amr';


				// TODO: Multi-Channel support on ActionScript-side
				this.features.volume = true;
				this.features.channels = 1;

			}

		}

	},


	__getPlayerById: function(id) {

		if (this.__players && this.__players[id] !== undefined) {
			return this.__players[id];
		}

		return null;

	},

	__getClone: function(origin, settings) {

		// Search for a free clone
		for (var cloneId in this.__clones) {

			var clone = this.__clones[cloneId];
			if (
				clone.isPlaying === null
				&& clone.origin === origin
			) {
				return clone;
			}

		}


		// Create a new clone
		if (Object.prototype.toString.call(settings) === '[object Object]') {

			var cloneSettings = {};
			for (var s in settings) {
				cloneSettings[s] = settings[s];
			}

			// Clones just don't autoplay. Just don't :)
			cloneSettings.autoplay = false;

			var newClone = new jukebox.Player(cloneSettings, origin);
			newClone.isClone = true;
			newClone.wasReady = false;

			this.__clones[newClone.id] = newClone;

			return newClone;

		}

		return null;

	},



	/*
	 * PUBLIC API
	 */

	/*
	 * This method is the stream-correction sound loop.
	 *
	 * In case you have overwritten the {jukebox.Manager} instance
	 * by yourself (with calling the constructor) and in case you
	 * have set the #settings.useGameLoop to {True}, you will have to
	 * call this method every time inside your gameloop.
	 */
	loop: function() {

		// Nothing to do
		if (
			this.__playersLength === 0
			// || jukebox.Manager.__initialized !== true
		) {
			return;
		}


		// Queue Functionality for Clone-supporting environments
		if (
			this.__queue.length
			&& this.__playersLength < this.features.channels
		) {

			var queueEntry = this.__queue[0],
				originPlayer = this.__getPlayerById(queueEntry.origin);

			if (originPlayer !== null) {

				var freeClone = this.__getClone(queueEntry.origin, originPlayer.settings);

				// Use free clone for playback
				if (freeClone !== null) {

					if (this.features.volume === true) {
						var originPlayer = this.__players[queueEntry.origin];
						originPlayer && freeClone.setVolume(originPlayer.getVolume());
					}

					this.add(freeClone);
					freeClone.play(queueEntry.pointer, true);

				}

			}

			// Remove Queue Entry. It's corrupt if nothing happened.
			this.__queue.splice(0, 1);

			return;


		// Queue Functionality for Single-Mode (iOS)
		} else if (
			this.__queue.length
			&& this.features.channels === 1
		) {

			var queueEntry = this.__queue[0],
				originPlayer = this.__getPlayerById(queueEntry.origin);

			if (originPlayer !== null) {
				originPlayer.play(queueEntry.pointer, true);
			}

			// Remove Queue Entry. It's corrupt if nothing happened
			this.__queue.splice(0, 1);

		}



		for (var id in this.__players) {

			var player = this.__players[id],
				playerPosition = player.getCurrentTime() || 0;


			// Correction
			if (player.isPlaying && player.wasReady === false) {

				player.wasReady = player.setCurrentTime(player.isPlaying.start);

			// Reset / Stop
			} else if (player.isPlaying && player.wasReady === true){

				if (playerPosition > player.isPlaying.end) {

					if (player.isPlaying.loop === true) {
						player.play(player.isPlaying.start, true);
					} else {
						player.stop();
					}

				}


			// Remove Idling Clones
			} else if (player.isClone && player.isPlaying === null) {

				this.remove(player);
				continue;


			// Background Music for Single-Mode (iOS)
			} else if (player.backgroundMusic !== undefined && player.isPlaying === null) {

				if (playerPosition > player.backgroundMusic.end) {
					player.backgroundHackForiOS();
				}

			}

		}


	},

	/*
	 * {String|Null} This method will check a @resources {Array} for playable resources
	 * due to codec and feature detection.
	 *
	 * It will return a {String} containing the preferred resource and {Null} if no
	 * playable resources was found.
	 *
	 * Hint: The highest preferred is the 0-index in the @resources {Array}. The latest
	 * index is the one with lowest preference.
	 */
	getPlayableResource: function(resources) {

		if (Object.prototype.toString.call(resources) !== '[object Array]') {
			resources = [ resources ];
		}


		for (var r = 0, l = resources.length; r < l; r++) {

			var resource = resources[r],
				extension = resource.match(/\.([^\.]*)$/)[1];

			// Yay! We found a supported resource!
			if (extension && !!this.codecs[extension]) {
				return resource;
			}

		}

		return null;

	},

	/*
	 * {Boolean} This method will add a @player {jukebox.Player} instance to the stream-correction
	 * sound loop.
	 *
	 * It will return {True} if the {jukebox.Player} instance was successfully added
	 * and {False} if the @player was an invalid parameter.
	 */
	add: function(player) {

		if (
			player instanceof jukebox.Player
			&& this.__players[player.id] === undefined
		) {
			this.__playersLength++;
			this.__players[player.id] = player;
			return true;
		}

		return false;

	},

	/*
	 * {Boolean} This method will remove a @player {jukebox.Player} instance from
	 * the stream-correction sound loop.
	 *
	 * It will return {True} if the {jukebox.Player} instance was successfully removed
	 * and {False} if the @player was an invalid parameter.
	 */
	remove: function(player) {

		if (
			player instanceof jukebox.Player
			&& this.__players[player.id] !== undefined
		) {
			this.__playersLength--;
			delete this.__players[player.id];
			return true;
		}

		return false;

	},

	/*
	 * This method is kindof public, but only used internally
	 *
	 * DON'T USE IT!
	 */
	addToQueue: function(pointer, playerId) {

		if (
			(typeof pointer === 'string' || typeof pointer === 'number')
			&& this.__players[playerId] !== undefined
		) {

			this.__queue.push({
				pointer: pointer,
				origin: playerId
			});

			return true;

		}

		return false;

	}

};




(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.io = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

module.exports =  _dereq_('./lib/');

},{"./lib/":2}],2:[function(_dereq_,module,exports){

module.exports = _dereq_('./socket');

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = _dereq_('engine.io-parser');

},{"./socket":3,"engine.io-parser":19}],3:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var transports = _dereq_('./transports');
var Emitter = _dereq_('component-emitter');
var debug = _dereq_('debug')('engine.io-client:socket');
var index = _dereq_('indexof');
var parser = _dereq_('engine.io-parser');
var parseuri = _dereq_('parseuri');
var parsejson = _dereq_('parsejson');
var parseqs = _dereq_('parseqs');

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Noop function.
 *
 * @api private
 */

function noop(){}

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket(uri, opts){
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' == typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure :
    (global.location && 'https:' == location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (global.location ? location.hostname : 'localhost');
  this.port = opts.port || (global.location && location.port ?
       location.port :
       (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.readyState = '';
  this.writeBuffer = [];
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;

  // other options for Node.js client
  var freeGlobal = typeof global == 'object' && global;
  if (freeGlobal.global === freeGlobal) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }
  }

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = _dereq_('./transport');
Socket.transports = _dereq_('./transports');
Socket.parser = _dereq_('engine.io-parser');

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    agent: this.agent,
    hostname: this.hostname,
    port: this.port,
    secure: this.secure,
    path: this.path,
    query: query,
    forceJSONP: this.forceJSONP,
    jsonp: this.jsonp,
    forceBase64: this.forceBase64,
    enablesXDR: this.enablesXDR,
    timestampRequests: this.timestampRequests,
    timestampParam: this.timestampParam,
    policyPort: this.policyPort,
    socket: this,
    pfx: this.pfx,
    key: this.key,
    passphrase: this.passphrase,
    cert: this.cert,
    ca: this.ca,
    ciphers: this.ciphers,
    rejectUnauthorized: this.rejectUnauthorized,
    perMessageDeflate: this.perMessageDeflate,
    extraHeaders: this.extraHeaders
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function() {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function(transport){
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function(){
    self.onDrain();
  })
  .on('packet', function(packet){
    self.onPacket(packet);
  })
  .on('error', function(e){
    self.onError(e);
  })
  .on('close', function(){
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 })
    , failed = false
    , self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen(){
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' == msg.type && 'probe' == msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' == transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' == self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport() {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  //Handle any error that happens while probing
  function onerror(err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose(){
    onerror("transport closed");
  }

  //When the socket is closed while we're probing
  function onclose(){
    onerror("socket closed");
  }

  //When the socket is upgraded while we're probing
  function onupgrade(to){
    if (transport && to.name != transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  //Remove all listeners on the transport and on self
  function cleanup(){
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();

};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(parsejson(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if  ('closed' == this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' == self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function(){
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function() {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' != this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if('function' == typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' == typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' == this.readyState || 'closed' == this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function() {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close() {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose() {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade() {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i<j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./transport":4,"./transports":5,"component-emitter":15,"debug":17,"engine.io-parser":19,"indexof":23,"parsejson":26,"parseqs":27,"parseuri":28}],4:[function(_dereq_,module,exports){
/**
 * Module dependencies.
 */

var parser = _dereq_('engine.io-parser');
var Emitter = _dereq_('component-emitter');

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' == this.readyState || '' == this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function(packets){
  if ('open' == this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function(data){
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

},{"component-emitter":15,"engine.io-parser":19}],5:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies
 */

var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
var XHR = _dereq_('./polling-xhr');
var JSONP = _dereq_('./polling-jsonp');
var websocket = _dereq_('./websocket');

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts){
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (global.location) {
    var isSSL = 'https:' == location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname != location.hostname || port != opts.port;
    xs = opts.secure != isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./polling-jsonp":6,"./polling-xhr":7,"./websocket":9,"xmlhttprequest-ssl":10}],6:[function(_dereq_,module,exports){
(function (global){

/**
 * Module requirements.
 */

var Polling = _dereq_('./polling');
var inherit = _dereq_('component-inherit');

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Callbacks count.
 */

var index = 0;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!global.___eio) global.___eio = [];
    callbacks = global.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (global.document && global.addEventListener) {
    global.addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function(e){
    self.onError('jsonp poll error',e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  }
  else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
  
  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch(e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function(){
      if (self.iframe.readyState == 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./polling":8,"component-inherit":16}],7:[function(_dereq_,module,exports){
(function (global){
/**
 * Module requirements.
 */

var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
var Polling = _dereq_('./polling');
var Emitter = _dereq_('component-emitter');
var inherit = _dereq_('component-inherit');
var debug = _dereq_('debug')('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty(){}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR(opts){
  Polling.call(this, opts);

  if (global.location) {
    var isSSL = 'https:' == location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname != global.location.hostname ||
      port != opts.port;
    this.xs = opts.secure != isSSL;
  } else {
    this.extraHeaders = opts.extraHeaders;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function(opts){
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function(data, fn){
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function(err){
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function(){
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function(data){
    self.onData(data);
  });
  req.on('error', function(err){
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request(opts){
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined != opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function(){
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}
    if (this.supportsBinary) {
      // This has to be done after open because Firefox is stupid
      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
      xhr.responseType = 'arraybuffer';
    }

    if ('POST' == this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.hasXDR()) {
      xhr.onload = function(){
        self.onLoad();
      };
      xhr.onerror = function(){
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function(){
        if (4 != xhr.readyState) return;
        if (200 == xhr.status || 1223 == xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function(){
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function() {
      self.onError(e);
    }, 0);
    return;
  }

  if (global.document) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function(){
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function(data){
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function(err){
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function(fromError){
  if ('undefined' == typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch(e) {}
  }

  if (global.document) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function(){
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response;
    } else {
      if (!this.supportsBinary) {
        data = this.xhr.responseText;
      } else {
        try {
          data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
        } catch (e) {
          var ui8Arr = new Uint8Array(this.xhr.response);
          var dataArray = [];
          for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
            dataArray.push(ui8Arr[idx]);
          }

          data = String.fromCharCode.apply(null, dataArray);
        }
      }
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function(){
  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function(){
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

if (global.document) {
  Request.requestsCount = 0;
  Request.requests = {};
  if (global.attachEvent) {
    global.attachEvent('onunload', unloadHandler);
  } else if (global.addEventListener) {
    global.addEventListener('beforeunload', unloadHandler, false);
  }
}

function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./polling":8,"component-emitter":15,"component-inherit":16,"debug":17,"xmlhttprequest-ssl":10}],8:[function(_dereq_,module,exports){
/**
 * Module dependencies.
 */

var Transport = _dereq_('../transport');
var parseqs = _dereq_('parseqs');
var parser = _dereq_('engine.io-parser');
var inherit = _dereq_('component-inherit');
var yeast = _dereq_('yeast');
var debug = _dereq_('debug')('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function() {
  var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling(opts){
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function(){
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function(onPause){
  var pending = 0;
  var self = this;

  this.readyState = 'pausing';

  function pause(){
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function(){
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function(){
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function(){
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function(data){
  var self = this;
  debug('polling got data %s', data);
  var callback = function(packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' == self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' == packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' != this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' == this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function(){
  var self = this;

  function close(){
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' == this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function(packets){
  var self = this;
  this.writable = false;
  var callbackfn = function() {
    self.writable = true;
    self.emit('drain');
  };

  var self = this;
  parser.encodePayload(packets, this.supportsBinary, function(data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function(){
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' == schema && this.port != 443) ||
     ('http' == schema && this.port != 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

},{"../transport":4,"component-inherit":16,"debug":17,"engine.io-parser":19,"parseqs":27,"xmlhttprequest-ssl":10,"yeast":30}],9:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var Transport = _dereq_('../transport');
var parser = _dereq_('engine.io-parser');
var parseqs = _dereq_('parseqs');
var inherit = _dereq_('component-inherit');
var yeast = _dereq_('yeast');
var debug = _dereq_('debug')('engine.io-client:websocket');
var BrowserWebSocket = global.WebSocket || global.MozWebSocket;

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocket = BrowserWebSocket;
if (!WebSocket && typeof window === 'undefined') {
  try {
    WebSocket = _dereq_('ws');
  } catch (e) { }
}

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS(opts){
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function(){
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var self = this;
  var uri = this.uri();
  var protocols = void(0);
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }

  this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'buffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function(){
  var self = this;

  this.ws.onopen = function(){
    self.onOpen();
  };
  this.ws.onclose = function(){
    self.onClose();
  };
  this.ws.onmessage = function(ev){
    self.onData(ev.data);
  };
  this.ws.onerror = function(e){
    self.onError('websocket error', e);
  };
};

/**
 * Override `onData` to use a timer on iOS.
 * See: https://gist.github.com/mloughran/2052006
 *
 * @api private
 */

if ('undefined' != typeof navigator
  && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
  WS.prototype.onData = function(data){
    var self = this;
    setTimeout(function(){
      Transport.prototype.onData.call(self, data);
    }, 0);
  };
}

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function(packets){
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function(packet) {
      parser.encodePacket(packet, self.supportsBinary, function(data) {
        if (!BrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        //Sometimes the websocket has already been closed but the browser didn't
        //have a chance of informing us about it yet, in that case send will
        //throw an error
        try {
          if (BrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e){
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done(){
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function(){
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function(){
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function(){
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function(){
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' == schema && this.port != 443)
    || ('ws' == schema && this.port != 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function(){
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"../transport":4,"component-inherit":16,"debug":17,"engine.io-parser":19,"parseqs":27,"ws":undefined,"yeast":30}],10:[function(_dereq_,module,exports){
// browser shim for xmlhttprequest module
var hasCORS = _dereq_('has-cors');

module.exports = function(opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch(e) { }
  }
}

},{"has-cors":22}],11:[function(_dereq_,module,exports){
module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}

},{}],12:[function(_dereq_,module,exports){
/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};

},{}],13:[function(_dereq_,module,exports){
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(chars){
  "use strict";

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = chars.indexOf(base64[i]);
      encoded2 = chars.indexOf(base64[i+1]);
      encoded3 = chars.indexOf(base64[i+2]);
      encoded4 = chars.indexOf(base64[i+3]);

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

},{}],14:[function(_dereq_,module,exports){
(function (global){
/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = global.BlobBuilder
  || global.WebKitBlobBuilder
  || global.MSBlobBuilder
  || global.MozBlobBuilder;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  for (var i = 0; i < ary.length; i++) {
    var chunk = ary[i];
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      ary[i] = buf;
    }
  }
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary);

  for (var i = 0; i < ary.length; i++) {
    bb.append(ary[i]);
  }

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  mapArrayBufferViews(ary);
  return new Blob(ary, options || {});
};

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],15:[function(_dereq_,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],16:[function(_dereq_,module,exports){

module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};
},{}],17:[function(_dereq_,module,exports){

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = _dereq_('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // is webkit? http://stackoverflow.com/a/16459606/376773
  return ('WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  return JSON.stringify(v);
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs() {
  var args = arguments;
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return args;

  var c = 'color: ' + this.color;
  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
  return args;
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}
  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage(){
  try {
    return window.localStorage;
  } catch (e) {}
}

},{"./debug":18}],18:[function(_dereq_,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = _dereq_('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lowercased letter, i.e. "n".
 */

exports.formatters = {};

/**
 * Previously assigned color.
 */

var prevColor = 0;

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 *
 * @return {Number}
 * @api private
 */

function selectColor() {
  return exports.colors[prevColor++ % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function debug(namespace) {

  // define the `disabled` version
  function disabled() {
  }
  disabled.enabled = false;

  // define the `enabled` version
  function enabled() {

    var self = enabled;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // add the `color` if not set
    if (null == self.useColors) self.useColors = exports.useColors();
    if (null == self.color && self.useColors) self.color = selectColor();

    var args = Array.prototype.slice.call(arguments);

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %o
      args = ['%o'].concat(args);
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    if ('function' === typeof exports.formatArgs) {
      args = exports.formatArgs.apply(self, args);
    }
    var logFn = enabled.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }
  enabled.enabled = true;

  var fn = exports.enabled(namespace) ? enabled : disabled;

  fn.namespace = namespace;

  return fn;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":25}],19:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var keys = _dereq_('./keys');
var hasBinary = _dereq_('has-binary');
var sliceBuffer = _dereq_('arraybuffer.slice');
var base64encoder = _dereq_('base64-arraybuffer');
var after = _dereq_('after');
var utf8 = _dereq_('utf8');

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = navigator.userAgent.match(/Android/i);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = _dereq_('blob');

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if ('function' == typeof supportsBinary) {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if ('function' == typeof utf8encode) {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (Blob && data instanceof global.Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    packet.data = fr.result;
    exports.encodePacket(packet, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (Blob && packet.data instanceof global.Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += global.btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  // String data
  if (typeof data == 'string' || data === undefined) {
    if (data.charAt(0) == 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      try {
        data = utf8.decode(data);
      } catch (e) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!global.ArrayBuffer) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary == 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data != 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data == '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = ''
    , n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (':' != chr) {
      length += chr;
    } else {
      if ('' == length || (length != (n = Number(length)))) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      msg = data.substr(i + 1, n);

      if (length != msg.length) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      if (msg.length) {
        packet = exports.decodePacket(msg, binaryType, true);

        if (err.type == packet.type && err.data == packet.data) {
          // parser error in individual packet - ignoring payload
          return callback(err, 0, 1);
        }

        var ret = callback(packet, i + n, l);
        if (false === ret) return;
      }

      // advance cursor
      i += n;
      length = '';
    }
  }

  if (length != '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  var numberTooLong = false;
  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] == 255) break;

      if (msgLength.length > 310) {
        numberTooLong = true;
        break;
      }

      msgLength += tailArray[i];
    }

    if(numberTooLong) return callback(err, 0, 1);

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./keys":20,"after":11,"arraybuffer.slice":12,"base64-arraybuffer":13,"blob":14,"has-binary":21,"utf8":29}],20:[function(_dereq_,module,exports){

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};

},{}],21:[function(_dereq_,module,exports){
(function (global){

/*
 * Module requirements.
 */

var isArray = _dereq_('isarray');

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Right now only Buffer and ArrayBuffer are supported..
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(data) {

  function _hasBinary(obj) {
    if (!obj) return false;

    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
         (global.Blob && obj instanceof Blob) ||
         (global.File && obj instanceof File)
        ) {
      return true;
    }

    if (isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
          if (_hasBinary(obj[i])) {
              return true;
          }
      }
    } else if (obj && 'object' == typeof obj) {
      if (obj.toJSON) {
        obj = obj.toJSON();
      }

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
          return true;
        }
      }
    }

    return false;
  }

  return _hasBinary(data);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"isarray":24}],22:[function(_dereq_,module,exports){

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

},{}],23:[function(_dereq_,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],24:[function(_dereq_,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],25:[function(_dereq_,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options){
  options = options || {};
  if ('string' == typeof val) return parse(val);
  return options.long
    ? long(val)
    : short(val);
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = '' + str;
  if (str.length > 10000) return;
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) return;
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function short(ms) {
  if (ms >= d) return Math.round(ms / d) + 'd';
  if (ms >= h) return Math.round(ms / h) + 'h';
  if (ms >= m) return Math.round(ms / m) + 'm';
  if (ms >= s) return Math.round(ms / s) + 's';
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function long(ms) {
  return plural(ms, d, 'day')
    || plural(ms, h, 'hour')
    || plural(ms, m, 'minute')
    || plural(ms, s, 'second')
    || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) return;
  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],26:[function(_dereq_,module,exports){
(function (global){
/**
 * JSON parse.
 *
 * @see Based on jQuery#parseJSON (MIT) and JSON2
 * @api private
 */

var rvalidchars = /^[\],:{}\s]*$/;
var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
var rtrimLeft = /^\s+/;
var rtrimRight = /\s+$/;

module.exports = function parsejson(data) {
  if ('string' != typeof data || !data) {
    return null;
  }

  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

  // Attempt to parse using the native JSON parser first
  if (global.JSON && JSON.parse) {
    return JSON.parse(data);
  }

  if (rvalidchars.test(data.replace(rvalidescape, '@')
      .replace(rvalidtokens, ']')
      .replace(rvalidbraces, ''))) {
    return (new Function('return ' + data))();
  }
};
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],27:[function(_dereq_,module,exports){
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};

},{}],28:[function(_dereq_,module,exports){
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};

},{}],29:[function(_dereq_,module,exports){
(function (global){
/*! https://mths.be/utf8js v2.0.0 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			checkScalarValue(codePoint);
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string) {
		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol() {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			var byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				checkScalarValue(codePoint);
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString) {
		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol()) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.0.0',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define(function() {
			return utf8;
		});
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = utf8;
		} else { // in Narwhal or RingoJS v0.7.0-
			var object = {};
			var hasOwnProperty = object.hasOwnProperty;
			for (var key in utf8) {
				hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.utf8 = utf8;
	}

}(this));

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],30:[function(_dereq_,module,exports){
'use strict';

var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

},{}],31:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var url = _dereq_('./url');
var parser = _dereq_('socket.io-parser');
var Manager = _dereq_('./manager');
var debug = _dereq_('debug')('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup(uri, opts) {
  if (typeof uri == 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }

  return io.socket(parsed.path);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = _dereq_('./manager');
exports.Socket = _dereq_('./socket');

},{"./manager":32,"./socket":34,"./url":35,"debug":39,"socket.io-parser":47}],32:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var eio = _dereq_('engine.io-client');
var Socket = _dereq_('./socket');
var Emitter = _dereq_('component-emitter');
var parser = _dereq_('socket.io-parser');
var on = _dereq_('./on');
var bind = _dereq_('component-bind');
var debug = _dereq_('debug')('socket.io-client:manager');
var indexOf = _dereq_('indexof');
var Backoff = _dereq_('backo2');

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager(uri, opts){
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' == typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  this.encoder = new parser.Encoder();
  this.decoder = new parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function() {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function(){
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.engine.id;
    }
  }
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function(v){
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function(v){
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function(v){
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function(v){
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function(v){
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function(v){
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function() {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};


/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function(fn){
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function() {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function(data){
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function(){
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function(){
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function(){
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function(){
  this.lastPing = new Date;
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function(){
  this.emitAll('pong', new Date - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function(data){
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function(packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function(err){
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function(nsp){
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function(){
      socket.id = self.engine.id;
    });

    if (this.autoConnect) {
      // manually call here since connecting evnet is fired before listening
      onConnecting();
    }
  }

  function onConnecting() {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function(socket){
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function(packet){
  debug('writing packet %j', packet);
  var self = this;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function(encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function() {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function(){
  debug('cleanup');

  var sub;
  while (sub = this.subs.shift()) sub.destroy();

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function(){
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' == this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function(reason){
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function(){
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function(){
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function(err){
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function(){
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function(){
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

},{"./on":33,"./socket":34,"backo2":36,"component-bind":37,"component-emitter":38,"debug":39,"engine.io-client":1,"indexof":42,"socket.io-parser":47}],33:[function(_dereq_,module,exports){

/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function(){
      obj.removeListener(ev, fn);
    }
  };
}

},{}],34:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var parser = _dereq_('socket.io-parser');
var Emitter = _dereq_('component-emitter');
var toArray = _dereq_('to-array');
var on = _dereq_('./on');
var bind = _dereq_('component-bind');
var debug = _dereq_('debug')('socket.io-client:socket');
var hasBin = _dereq_('has-binary');

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket(io, nsp){
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function() {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function(){
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' == this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function(){
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function(ev){
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var parserType = parser.EVENT; // default
  if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
  var packet = { type: parserType, data: args };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' == typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  delete this.flags;

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function(packet){
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function(){
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' != this.nsp) {
    this.packet({ type: parser.CONNECT });
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function(reason){
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function(packet){
  if (packet.nsp != this.nsp) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function(packet){
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function(id){
  var self = this;
  var sent = false;
  return function(){
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
    self.packet({
      type: type,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function(packet){
  var ack = this.acks[packet.id];
  if ('function' == typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function(){
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function(){
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function(){
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function(){
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function(){
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function(compress){
  this.flags = this.flags || {};
  this.flags.compress = compress;
  return this;
};

},{"./on":33,"component-bind":37,"component-emitter":38,"debug":39,"has-binary":41,"socket.io-parser":47,"to-array":51}],35:[function(_dereq_,module,exports){
(function (global){

/**
 * Module dependencies.
 */

var parseuri = _dereq_('parseuri');
var debug = _dereq_('debug')('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url(uri, loc){
  var obj = uri;

  // default to window.location
  var loc = loc || global.location;
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' == typeof uri) {
    if ('/' == uri.charAt(0)) {
      if ('/' == uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' != typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    }
    else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port == obj.port ? '' : (':' + obj.port));

  return obj;
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"debug":39,"parseuri":45}],36:[function(_dereq_,module,exports){

/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};


},{}],37:[function(_dereq_,module,exports){
/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};

},{}],38:[function(_dereq_,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],39:[function(_dereq_,module,exports){
arguments[4][17][0].apply(exports,arguments)
},{"./debug":40,"dup":17}],40:[function(_dereq_,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"dup":18,"ms":44}],41:[function(_dereq_,module,exports){
(function (global){

/*
 * Module requirements.
 */

var isArray = _dereq_('isarray');

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Right now only Buffer and ArrayBuffer are supported..
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(data) {

  function _hasBinary(obj) {
    if (!obj) return false;

    if ( (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
         (global.Blob && obj instanceof Blob) ||
         (global.File && obj instanceof File)
        ) {
      return true;
    }

    if (isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
          if (_hasBinary(obj[i])) {
              return true;
          }
      }
    } else if (obj && 'object' == typeof obj) {
      // see: https://github.com/Automattic/has-binary/pull/4
      if (obj.toJSON && 'function' == typeof obj.toJSON) {
        obj = obj.toJSON();
      }

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
          return true;
        }
      }
    }

    return false;
  }

  return _hasBinary(data);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"isarray":43}],42:[function(_dereq_,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"dup":23}],43:[function(_dereq_,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],44:[function(_dereq_,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],45:[function(_dereq_,module,exports){
arguments[4][28][0].apply(exports,arguments)
},{"dup":28}],46:[function(_dereq_,module,exports){
(function (global){
/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = _dereq_('isarray');
var isBuf = _dereq_('./is-buffer');

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet){
  var buffers = [];
  var packetData = packet.data;

  function _deconstructPacket(data) {
    if (!data) return data;

    if (isBuf(data)) {
      var placeholder = { _placeholder: true, num: buffers.length };
      buffers.push(data);
      return placeholder;
    } else if (isArray(data)) {
      var newData = new Array(data.length);
      for (var i = 0; i < data.length; i++) {
        newData[i] = _deconstructPacket(data[i]);
      }
      return newData;
    } else if ('object' == typeof data && !(data instanceof Date)) {
      var newData = {};
      for (var key in data) {
        newData[key] = _deconstructPacket(data[key]);
      }
      return newData;
    }
    return data;
  }

  var pack = packet;
  pack.data = _deconstructPacket(packetData);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  var curPlaceHolder = 0;

  function _reconstructPacket(data) {
    if (data && data._placeholder) {
      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
      return buf;
    } else if (isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        data[i] = _reconstructPacket(data[i]);
      }
      return data;
    } else if (data && 'object' == typeof data) {
      for (var key in data) {
        data[key] = _reconstructPacket(data[key]);
      }
      return data;
    }
    return data;
  }

  packet.data = _reconstructPacket(packet.data);
  packet.attachments = undefined; // no longer useful
  return packet;
};

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((global.Blob && obj instanceof Blob) ||
        (global.File && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./is-buffer":48,"isarray":43}],47:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var debug = _dereq_('debug')('socket.io-parser');
var json = _dereq_('json3');
var isArray = _dereq_('isarray');
var Emitter = _dereq_('component-emitter');
var binary = _dereq_('./binary');
var isBuf = _dereq_('./is-buffer');

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'BINARY_EVENT',
  'ACK',
  'BINARY_ACK',
  'ERROR'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
    encodeAsBinary(obj, callback);
  }
  else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {
  var str = '';
  var nsp = false;

  // first is type
  str += obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
    str += obj.attachments;
    str += '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' != obj.nsp) {
    nsp = true;
    str += obj.nsp;
  }

  // immediately followed by the id
  if (null != obj.id) {
    if (nsp) {
      str += ',';
      nsp = false;
    }
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    if (nsp) str += ',';
    str += json.stringify(obj.data);
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if ('string' == typeof obj) {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  }
  else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  }
  else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var p = {};
  var i = 0;

  // look up type
  p.type = Number(str.charAt(0));
  if (null == exports.types[p.type]) return error();

  // look up attachments if type binary
  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
    var buf = '';
    while (str.charAt(++i) != '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) != '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' == str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' == c) break;
      p.nsp += c;
      if (i == str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i == str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    try {
      p.data = json.parse(str.substr(i));
    } catch(e){
      return error();
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error(data){
  return {
    type: exports.ERROR,
    data: 'parser error'
  };
}

},{"./binary":46,"./is-buffer":48,"component-emitter":49,"debug":39,"isarray":43,"json3":50}],48:[function(_dereq_,module,exports){
(function (global){

module.exports = isBuf;

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],49:[function(_dereq_,module,exports){
arguments[4][15][0].apply(exports,arguments)
},{"dup":15}],50:[function(_dereq_,module,exports){
(function (global){
/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
;(function () {
  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader = typeof define === "function" && define.amd;

  // A set of types used to distinguish objects from primitives.
  var objectTypes = {
    "function": true,
    "object": true
  };

  // Detect the `exports` object exposed by CommonJS implementations.
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  // Use the `global` object exposed by Node (including Browserify via
  // `insert-module-globals`), Narwhal, and Ringo as the default context,
  // and the `window` object in browsers. Rhino exports a `global` function
  // instead.
  var root = objectTypes[typeof window] && window || this,
      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
    root = freeGlobal;
  }

  // Public: Initializes JSON 3 using the given `context` object, attaching the
  // `stringify` and `parse` functions to the specified `exports` object.
  function runInContext(context, exports) {
    context || (context = root["Object"]());
    exports || (exports = root["Object"]());

    // Native constructor aliases.
    var Number = context["Number"] || root["Number"],
        String = context["String"] || root["String"],
        Object = context["Object"] || root["Object"],
        Date = context["Date"] || root["Date"],
        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
        TypeError = context["TypeError"] || root["TypeError"],
        Math = context["Math"] || root["Math"],
        nativeJSON = context["JSON"] || root["JSON"];

    // Delegate to the native `stringify` and `parse` implementations.
    if (typeof nativeJSON == "object" && nativeJSON) {
      exports.stringify = nativeJSON.stringify;
      exports.parse = nativeJSON.parse;
    }

    // Convenience aliases.
    var objectProto = Object.prototype,
        getClass = objectProto.toString,
        isProperty, forEach, undef;

    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
    var isExtended = new Date(-3509827334573292);
    try {
      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
      // results for certain dates in Opera >= 10.53.
      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        // Safari < 2.0.2 stores the internal millisecond time value correctly,
        // but clips the values returned by the date methods to the range of
        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    } catch (exception) {}

    // Internal: Determines whether the native `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    function has(name) {
      if (has[name] !== undef) {
        // Return cached feature test result.
        return has[name];
      }
      var isSupported;
      if (name == "bug-string-char-index") {
        // IE <= 7 doesn't support accessing string characters using square
        // bracket notation. IE 8 only supports this for primitives.
        isSupported = "a"[0] != "a";
      } else if (name == "json") {
        // Indicates whether both `JSON.stringify` and `JSON.parse` are
        // supported.
        isSupported = has("json-stringify") && has("json-parse");
      } else {
        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        // Test `JSON.stringify`.
        if (name == "json-stringify") {
          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
          if (stringifySupported) {
            // A test function object with a custom `toJSON` method.
            (value = function () {
              return 1;
            }).toJSON = value;
            try {
              stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                stringify(0) === "0" &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                stringify(new Number()) === "0" &&
                stringify(new String()) == '""' &&
                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                stringify(getClass) === undef &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                // FF 3.1b3 pass this test.
                stringify(undef) === undef &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the value is omitted entirely.
                stringify() === undef &&
                // FF 3.1b1, 2 throw an error if the given value is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                stringify(value) === "1" &&
                stringify([value]) == "[1]" &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                stringify([undef]) == "[null]" &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                stringify(null) == "null" &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                // elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                stringify([undef, getClass, null]) == "[null,null,null]" &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                stringify(null, value) === "1" &&
                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                // serialize extended years.
                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                // The milliseconds are optional in ES 5, but required in 5.1.
                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                // four-digit years instead of six-digit years. Credits: @Yaffle.
                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                // values less than 1000. Credits: @Yaffle.
                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
            } catch (exception) {
              stringifySupported = false;
            }
          }
          isSupported = stringifySupported;
        }
        // Test `JSON.parse`.
        if (name == "json-parse") {
          var parse = exports.parse;
          if (typeof parse == "function") {
            try {
              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
              // Conforming implementations should also coerce the initial argument to
              // a string prior to parsing.
              if (parse("0") === 0 && !parse(false)) {
                // Simple parsing test.
                value = parse(serialized);
                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                if (parseSupported) {
                  try {
                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                    parseSupported = !parse('"\t"');
                  } catch (exception) {}
                  if (parseSupported) {
                    try {
                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                      // certain octal literals.
                      parseSupported = parse("01") !== 1;
                    } catch (exception) {}
                  }
                  if (parseSupported) {
                    try {
                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                      // points. These environments, along with FF 3.1b1 and 2,
                      // also allow trailing commas in JSON objects and arrays.
                      parseSupported = parse("1.") !== 1;
                    } catch (exception) {}
                  }
                }
              }
            } catch (exception) {
              parseSupported = false;
            }
          }
          isSupported = parseSupported;
        }
      }
      return has[name] = !!isSupported;
    }

    if (!has("json")) {
      // Common `[[Class]]` name aliases.
      var functionClass = "[object Function]",
          dateClass = "[object Date]",
          numberClass = "[object Number]",
          stringClass = "[object String]",
          arrayClass = "[object Array]",
          booleanClass = "[object Boolean]";

      // Detect incomplete support for accessing string characters by index.
      var charIndexBuggy = has("bug-string-char-index");

      // Define additional utility methods if the `Date` methods are buggy.
      if (!isExtended) {
        var floor = Math.floor;
        // A mapping between the months of the year and the number of days between
        // January 1st and the first of the respective month.
        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        // Internal: Calculates the number of days between the Unix epoch and the
        // first day of the given month.
        var getDay = function (year, month) {
          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
        };
      }

      // Internal: Determines if a property is a direct property of the given
      // object. Delegates to the native `Object#hasOwnProperty` method.
      if (!(isProperty = objectProto.hasOwnProperty)) {
        isProperty = function (property) {
          var members = {}, constructor;
          if ((members.__proto__ = null, members.__proto__ = {
            // The *proto* property cannot be set multiple times in recent
            // versions of Firefox and SeaMonkey.
            "toString": 1
          }, members).toString != getClass) {
            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
            // supports the mutable *proto* property.
            isProperty = function (property) {
              // Capture and break the object's prototype chain (see section 8.6.2
              // of the ES 5.1 spec). The parenthesized expression prevents an
              // unsafe transformation by the Closure Compiler.
              var original = this.__proto__, result = property in (this.__proto__ = null, this);
              // Restore the original prototype chain.
              this.__proto__ = original;
              return result;
            };
          } else {
            // Capture a reference to the top-level `Object` constructor.
            constructor = members.constructor;
            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
            // other environments.
            isProperty = function (property) {
              var parent = (this.constructor || constructor).prototype;
              return property in this && !(property in parent && this[property] === parent[property]);
            };
          }
          members = null;
          return isProperty.call(this, property);
        };
      }

      // Internal: Normalizes the `for...in` iteration algorithm across
      // environments. Each enumerated key is yielded to a `callback` function.
      forEach = function (object, callback) {
        var size = 0, Properties, members, property;

        // Tests for bugs in the current environment's `for...in` algorithm. The
        // `valueOf` property inherits the non-enumerable flag from
        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
        (Properties = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;

        // Iterate over a new instance of the `Properties` class.
        members = new Properties();
        for (property in members) {
          // Ignore all properties inherited from `Object.prototype`.
          if (isProperty.call(members, property)) {
            size++;
          }
        }
        Properties = members = null;

        // Normalize the iteration algorithm.
        if (!size) {
          // A list of non-enumerable properties inherited from `Object.prototype`.
          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
          // properties.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, length;
            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
            for (property in object) {
              // Gecko <= 1.0 enumerates the `prototype` property of functions under
              // certain conditions; IE does not.
              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                callback(property);
              }
            }
            // Manually invoke the callback for each non-enumerable property.
            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
          };
        } else if (size == 2) {
          // Safari <= 2.0.4 enumerates shadowed properties twice.
          forEach = function (object, callback) {
            // Create a set of iterated properties.
            var members = {}, isFunction = getClass.call(object) == functionClass, property;
            for (property in object) {
              // Store each property name to prevent double enumeration. The
              // `prototype` property of functions is not enumerated due to cross-
              // environment inconsistencies.
              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                callback(property);
              }
            }
          };
        } else {
          // No bugs detected; use the standard `for...in` algorithm.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
            for (property in object) {
              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                callback(property);
              }
            }
            // Manually invoke the callback for the `constructor` property due to
            // cross-environment inconsistencies.
            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
              callback(property);
            }
          };
        }
        return forEach(object, callback);
      };

      // Public: Serializes a JavaScript `value` as a JSON string. The optional
      // `filter` argument may specify either a function that alters how object and
      // array members are serialized, or an array of strings and numbers that
      // indicates which properties should be serialized. The optional `width`
      // argument may be either a string or number that specifies the indentation
      // level of the output.
      if (!has("json-stringify")) {
        // Internal: A map of control characters and their escaped equivalents.
        var Escapes = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };

        // Internal: Converts `value` into a zero-padded string such that its
        // length is at least equal to `width`. The `width` must be <= 6.
        var leadingZeroes = "000000";
        var toPaddedString = function (width, value) {
          // The `|| 0` expression is necessary to work around a bug in
          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
          return (leadingZeroes + (value || 0)).slice(-width);
        };

        // Internal: Double-quotes a string `value`, replacing all ASCII control
        // characters (characters with code unit values between 0 and 31) with
        // their escaped equivalents. This is an implementation of the
        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
        var unicodePrefix = "\\u00";
        var quote = function (value) {
          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
          for (; index < length; index++) {
            var charCode = value.charCodeAt(index);
            // If the character is a control character, append its Unicode or
            // shorthand escape sequence; otherwise, append the character as-is.
            switch (charCode) {
              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
                result += Escapes[charCode];
                break;
              default:
                if (charCode < 32) {
                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                  break;
                }
                result += useCharIndex ? symbols[index] : value.charAt(index);
            }
          }
          return result + '"';
        };

        // Internal: Recursively serializes an object. Implements the
        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
          try {
            // Necessary for host object support.
            value = object[property];
          } catch (exception) {}
          if (typeof value == "object" && value) {
            className = getClass.call(value);
            if (className == dateClass && !isProperty.call(value, "toJSON")) {
              if (value > -1 / 0 && value < 1 / 0) {
                // Dates are serialized according to the `Date#toJSON` method
                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                // for the ISO 8601 date time string format.
                if (getDay) {
                  // Manually compute the year, month, date, hours, minutes,
                  // seconds, and milliseconds if the `getUTC*` methods are
                  // buggy. Adapted from @Yaffle's `date-shim` project.
                  date = floor(value / 864e5);
                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                  date = 1 + date - getDay(year, month);
                  // The `time` value specifies the time within the day (see ES
                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                  // to compute `A modulo B`, as the `%` operator does not
                  // correspond to the `modulo` operation for negative numbers.
                  time = (value % 864e5 + 864e5) % 864e5;
                  // The hours, minutes, seconds, and milliseconds are obtained by
                  // decomposing the time within the day. See section 15.9.1.10.
                  hours = floor(time / 36e5) % 24;
                  minutes = floor(time / 6e4) % 60;
                  seconds = floor(time / 1e3) % 60;
                  milliseconds = time % 1e3;
                } else {
                  year = value.getUTCFullYear();
                  month = value.getUTCMonth();
                  date = value.getUTCDate();
                  hours = value.getUTCHours();
                  minutes = value.getUTCMinutes();
                  seconds = value.getUTCSeconds();
                  milliseconds = value.getUTCMilliseconds();
                }
                // Serialize extended years correctly.
                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                  // Months, dates, hours, minutes, and seconds should have two
                  // digits; milliseconds should have three.
                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                  // Milliseconds are optional in ES 5.0, but required in 5.1.
                  "." + toPaddedString(3, milliseconds) + "Z";
              } else {
                value = null;
              }
            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
              // ignores all `toJSON` methods on these objects unless they are
              // defined directly on an instance.
              value = value.toJSON(property);
            }
          }
          if (callback) {
            // If a replacement function was provided, call it to obtain the value
            // for serialization.
            value = callback.call(object, property, value);
          }
          if (value === null) {
            return "null";
          }
          className = getClass.call(value);
          if (className == booleanClass) {
            // Booleans are represented literally.
            return "" + value;
          } else if (className == numberClass) {
            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
            // `"null"`.
            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
          } else if (className == stringClass) {
            // Strings are double-quoted and escaped.
            return quote("" + value);
          }
          // Recursively serialize objects and arrays.
          if (typeof value == "object") {
            // Check for cyclic structures. This is a linear search; performance
            // is inversely proportional to the number of unique nested objects.
            for (length = stack.length; length--;) {
              if (stack[length] === value) {
                // Cyclic structures cannot be serialized by `JSON.stringify`.
                throw TypeError();
              }
            }
            // Add the object to the stack of traversed objects.
            stack.push(value);
            results = [];
            // Save the current indentation level and indent one additional level.
            prefix = indentation;
            indentation += whitespace;
            if (className == arrayClass) {
              // Recursively serialize array elements.
              for (index = 0, length = value.length; index < length; index++) {
                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                results.push(element === undef ? "null" : element);
              }
              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
            } else {
              // Recursively serialize object members. Members are selected from
              // either a user-specified list of property names, or the object
              // itself.
              forEach(properties || value, function (property) {
                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                if (element !== undef) {
                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                  // is not the empty string, let `member` {quote(property) + ":"}
                  // be the concatenation of `member` and the `space` character."
                  // The "`space` character" refers to the literal space
                  // character, not the `space` {width} argument provided to
                  // `JSON.stringify`.
                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                }
              });
              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
            }
            // Remove the object from the traversed object stack.
            stack.pop();
            return result;
          }
        };

        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
        exports.stringify = function (source, filter, width) {
          var whitespace, callback, properties, className;
          if (objectTypes[typeof filter] && filter) {
            if ((className = getClass.call(filter)) == functionClass) {
              callback = filter;
            } else if (className == arrayClass) {
              // Convert the property names array into a makeshift set.
              properties = {};
              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
            }
          }
          if (width) {
            if ((className = getClass.call(width)) == numberClass) {
              // Convert the `width` to an integer and create a string containing
              // `width` number of space characters.
              if ((width -= width % 1) > 0) {
                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
              }
            } else if (className == stringClass) {
              whitespace = width.length <= 10 ? width : width.slice(0, 10);
            }
          }
          // Opera <= 7.54u2 discards the values associated with empty string keys
          // (`""`) only if they are used directly within an object member list
          // (e.g., `!("" in { "": 1})`).
          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
        };
      }

      // Public: Parses a JSON source string.
      if (!has("json-parse")) {
        var fromCharCode = String.fromCharCode;

        // Internal: A map of escaped control characters and their unescaped
        // equivalents.
        var Unescapes = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };

        // Internal: Stores the parser state.
        var Index, Source;

        // Internal: Resets the parser state and throws a `SyntaxError`.
        var abort = function () {
          Index = Source = null;
          throw SyntaxError();
        };

        // Internal: Returns the next token, or `"$"` if the parser has reached
        // the end of the source string. A token may be a string, number, `null`
        // literal, or Boolean literal.
        var lex = function () {
          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
          while (Index < length) {
            charCode = source.charCodeAt(Index);
            switch (charCode) {
              case 9: case 10: case 13: case 32:
                // Skip whitespace tokens, including tabs, carriage returns, line
                // feeds, and space characters.
                Index++;
                break;
              case 123: case 125: case 91: case 93: case 58: case 44:
                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                // the current position.
                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                Index++;
                return value;
              case 34:
                // `"` delimits a JSON string; advance to the next character and
                // begin parsing the string. String tokens are prefixed with the
                // sentinel `@` character to distinguish them from punctuators and
                // end-of-string tokens.
                for (value = "@", Index++; Index < length;) {
                  charCode = source.charCodeAt(Index);
                  if (charCode < 32) {
                    // Unescaped ASCII control characters (those with a code unit
                    // less than the space character) are not permitted.
                    abort();
                  } else if (charCode == 92) {
                    // A reverse solidus (`\`) marks the beginning of an escaped
                    // control character (including `"`, `\`, and `/`) or Unicode
                    // escape sequence.
                    charCode = source.charCodeAt(++Index);
                    switch (charCode) {
                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                        // Revive escaped control characters.
                        value += Unescapes[charCode];
                        Index++;
                        break;
                      case 117:
                        // `\u` marks the beginning of a Unicode escape sequence.
                        // Advance to the first character and validate the
                        // four-digit code point.
                        begin = ++Index;
                        for (position = Index + 4; Index < position; Index++) {
                          charCode = source.charCodeAt(Index);
                          // A valid sequence comprises four hexdigits (case-
                          // insensitive) that form a single hexadecimal value.
                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                            // Invalid Unicode escape sequence.
                            abort();
                          }
                        }
                        // Revive the escaped character.
                        value += fromCharCode("0x" + source.slice(begin, Index));
                        break;
                      default:
                        // Invalid escape sequence.
                        abort();
                    }
                  } else {
                    if (charCode == 34) {
                      // An unescaped double-quote character marks the end of the
                      // string.
                      break;
                    }
                    charCode = source.charCodeAt(Index);
                    begin = Index;
                    // Optimize for the common case where a string is valid.
                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                      charCode = source.charCodeAt(++Index);
                    }
                    // Append the string as-is.
                    value += source.slice(begin, Index);
                  }
                }
                if (source.charCodeAt(Index) == 34) {
                  // Advance to the next character and return the revived string.
                  Index++;
                  return value;
                }
                // Unterminated string.
                abort();
              default:
                // Parse numbers and literals.
                begin = Index;
                // Advance past the negative sign, if one is specified.
                if (charCode == 45) {
                  isSigned = true;
                  charCode = source.charCodeAt(++Index);
                }
                // Parse an integer or floating-point value.
                if (charCode >= 48 && charCode <= 57) {
                  // Leading zeroes are interpreted as octal literals.
                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                    // Illegal octal literal.
                    abort();
                  }
                  isSigned = false;
                  // Parse the integer component.
                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                  // Floats cannot contain a leading decimal point; however, this
                  // case is already accounted for by the parser.
                  if (source.charCodeAt(Index) == 46) {
                    position = ++Index;
                    // Parse the decimal component.
                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal trailing decimal.
                      abort();
                    }
                    Index = position;
                  }
                  // Parse exponents. The `e` denoting the exponent is
                  // case-insensitive.
                  charCode = source.charCodeAt(Index);
                  if (charCode == 101 || charCode == 69) {
                    charCode = source.charCodeAt(++Index);
                    // Skip past the sign following the exponent, if one is
                    // specified.
                    if (charCode == 43 || charCode == 45) {
                      Index++;
                    }
                    // Parse the exponential component.
                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal empty exponent.
                      abort();
                    }
                    Index = position;
                  }
                  // Coerce the parsed value to a JavaScript number.
                  return +source.slice(begin, Index);
                }
                // A negative sign may only precede numbers.
                if (isSigned) {
                  abort();
                }
                // `true`, `false`, and `null` literals.
                if (source.slice(Index, Index + 4) == "true") {
                  Index += 4;
                  return true;
                } else if (source.slice(Index, Index + 5) == "false") {
                  Index += 5;
                  return false;
                } else if (source.slice(Index, Index + 4) == "null") {
                  Index += 4;
                  return null;
                }
                // Unrecognized token.
                abort();
            }
          }
          // Return the sentinel `$` character if the parser has reached the end
          // of the source string.
          return "$";
        };

        // Internal: Parses a JSON `value` token.
        var get = function (value) {
          var results, hasMembers;
          if (value == "$") {
            // Unexpected end of input.
            abort();
          }
          if (typeof value == "string") {
            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
              // Remove the sentinel `@` character.
              return value.slice(1);
            }
            // Parse object and array literals.
            if (value == "[") {
              // Parses a JSON array, returning a new JavaScript array.
              results = [];
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing square bracket marks the end of the array literal.
                if (value == "]") {
                  break;
                }
                // If the array literal contains elements, the current token
                // should be a comma separating the previous element from the
                // next.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "]") {
                      // Unexpected trailing `,` in array literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each array element.
                    abort();
                  }
                }
                // Elisions and leading commas are not permitted.
                if (value == ",") {
                  abort();
                }
                results.push(get(value));
              }
              return results;
            } else if (value == "{") {
              // Parses a JSON object, returning a new JavaScript object.
              results = {};
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing curly brace marks the end of the object literal.
                if (value == "}") {
                  break;
                }
                // If the object literal contains members, the current token
                // should be a comma separator.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "}") {
                      // Unexpected trailing `,` in object literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each object member.
                    abort();
                  }
                }
                // Leading commas are not permitted, object property names must be
                // double-quoted strings, and a `:` must separate each property
                // name and value.
                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                  abort();
                }
                results[value.slice(1)] = get(lex());
              }
              return results;
            }
            // Unexpected token encountered.
            abort();
          }
          return value;
        };

        // Internal: Updates a traversed object member.
        var update = function (source, property, callback) {
          var element = walk(source, property, callback);
          if (element === undef) {
            delete source[property];
          } else {
            source[property] = element;
          }
        };

        // Internal: Recursively traverses a parsed JSON object, invoking the
        // `callback` function for each value. This is an implementation of the
        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
        var walk = function (source, property, callback) {
          var value = source[property], length;
          if (typeof value == "object" && value) {
            // `forEach` can't be used to traverse an array in Opera <= 8.54
            // because its `Object#hasOwnProperty` implementation returns `false`
            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
            if (getClass.call(value) == arrayClass) {
              for (length = value.length; length--;) {
                update(value, length, callback);
              }
            } else {
              forEach(value, function (property) {
                update(value, property, callback);
              });
            }
          }
          return callback.call(source, property, value);
        };

        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
        exports.parse = function (source, callback) {
          var result, value;
          Index = 0;
          Source = "" + source;
          result = get(lex());
          // If a JSON string contains multiple tokens, it is invalid.
          if (lex() != "$") {
            abort();
          }
          // Reset the parser state.
          Index = Source = null;
          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
        };
      }
    }

    exports["runInContext"] = runInContext;
    return exports;
  }

  if (freeExports && !isLoader) {
    // Export for CommonJS environments.
    runInContext(root, freeExports);
  } else {
    // Export for web browsers and JavaScript engines.
    var nativeJSON = root.JSON,
        previousJSON = root["JSON3"],
        isRestored = false;

    var JSON3 = runInContext(root, (root["JSON3"] = {
      // Public: Restores the original value of the global `JSON` object and
      // returns a reference to the `JSON3` object.
      "noConflict": function () {
        if (!isRestored) {
          isRestored = true;
          root.JSON = nativeJSON;
          root["JSON3"] = previousJSON;
          nativeJSON = previousJSON = null;
        }
        return JSON3;
      }
    }));

    root.JSON = {
      "parse": JSON3.parse,
      "stringify": JSON3.stringify
    };
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    define(function () {
      return JSON3;
    });
  }
}).call(this);

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],51:[function(_dereq_,module,exports){
module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}

},{}]},{},[31])(31)
});

var network = {};

network.MessageType = {
    /*COMMON*/
    ERROR: 0,
    PLAYER_UPDATE: 51,
    GAME_EVENT: 52,
    SYNC_TIME: 53,
    START_TIME: 54,
    EMOJI: 55,
    /*SERVER*/
    USER_CONNECTED: 1,
    USER_DISCONNECTED: 2,
    PLAYER_JOIN: 3,
    PLAYER_LEFT: 4,
    REQUEST_ROOM_CONFIRMED: 5,
    REQUEST_ROOM_REJECTED: 6,
    GAMESTATE: 7,
    KICKED: 8,
    LEAVE_ROOM_COMPLETED: 9,
    FIX_GAMESTATE: 10,
    /*CLIENT*/
    REQUEST_ROOM: 20,
    REQUEST_GAMESTATE: 21,
    LEAVE_ROOM: 22,
    KICK_PLAYER: 23,
    GAMESTATE_FIXED: 24,
    REQUEST_PRIVATE_ROOM: 25
};


network.Errors = {
    UNKNOWN: 0,
    INVALID_REQUEST: 1,
    VERSION_MISMATCH: 2,
    INVALID_NAME: 3,
    KICKED_DUE_TO_INACTIVITY: 4,
};

network.Events = {
    GAME_START: 0,
    DICE_ROLLING: 1,
    RANDOM_VALUE: 2,
    NEXT_TURN: 3,
    HORSE_MOVE: 4,
    CHECK_AUTO: 5,
    INACTIVE: 6,
    ACTIVE: 7,
    PLAYER_CHEATED: 8,
    CHECK_DICE: 9,
    UPDATE_HORSE: 10,
    RANDOM_HORSE: 11,
    GAME_END: 12,
    PLAYER_COMPLETE: 13
    // ,CLEAR_LAST_EVENT: 14
};

if (typeof module !== "undefined") {
    module.exports.network = network;
}
(function(window){"use strict";Number.prototype.map=function(istart,istop,ostart,ostop){return ostart+(ostop-ostart)*((this-istart)/(istop-istart));};Number.prototype.limit=function(min,max){return Math.min(max,Math.max(min,this));};Number.prototype.round=function(precision){precision=Math.pow(10,precision||0);return Math.round(this*precision)/precision;};Number.prototype.floor=function(){return Math.floor(this);};Number.prototype.ceil=function(){return Math.ceil(this);};Number.prototype.toInt=function(){return(this|0);};Number.prototype.toRad=function(){return(this/180)*Math.PI;};Number.prototype.toDeg=function(){return(this*180)/Math.PI;};Array.prototype.erase=function(item){for(var i=this.length;i--;){if(this[i]===item){this.splice(i,1);}}
return this;};Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)];};Function.prototype.bind=Function.prototype.bind||function(oThis){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");}
var aArgs=Array.prototype.slice.call(arguments,1),fToBind=this,fNOP=function(){},fBound=function(){return fToBind.apply((this instanceof fNOP&&oThis?this:oThis),aArgs.concat(Array.prototype.slice.call(arguments)));};fNOP.prototype=this.prototype;fBound.prototype=new fNOP();return fBound;};window.ig={game:null,debug:null,version:'1.23',global:window,modules:{},resources:[],ready:false,baked:false,nocache:'',ua:{},prefix:(window.ImpactPrefix||''),lib:'lib/',_current:null,_loadQueue:[],_waitForOnload:0,$:function(selector){return selector.charAt(0)=='#'?document.getElementById(selector.substr(1)):document.getElementsByTagName(selector);},$new:function(name){return document.createElement(name);},copy:function(object){if(!object||typeof(object)!='object'||object instanceof HTMLElement||object instanceof ig.Class){return object;}
else if(object instanceof Array){var c=[];for(var i=0,l=object.length;i<l;i++){c[i]=ig.copy(object[i]);}
return c;}
else{var c={};for(var i in object){c[i]=ig.copy(object[i]);}
return c;}},merge:function(original,extended){for(var key in extended){var ext=extended[key];if(typeof(ext)!='object'||ext instanceof HTMLElement||ext instanceof ig.Class||ext===null){original[key]=ext;}
else{if(!original[key]||typeof(original[key])!='object'){original[key]=(ext instanceof Array)?[]:{};}
ig.merge(original[key],ext);}}
return original;},ksort:function(obj){if(!obj||typeof(obj)!='object'){return[];}
var keys=[],values=[];for(var i in obj){keys.push(i);}
keys.sort();for(var i=0;i<keys.length;i++){values.push(obj[keys[i]]);}
return values;},setVendorAttribute:function(el,attr,val){var uc=attr.charAt(0).toUpperCase()+attr.substr(1);if(typeof(el.imageSmoothingEnabled)!=='undefined')
{el[attr]=el['ms'+uc]=el['moz'+uc]=el['o'+uc]=val;}
else
{el[attr]=el['ms'+uc]=el['moz'+uc]=el['webkit'+uc]=el['o'+uc]=val;}},getVendorAttribute:function(el,attr){var uc=attr.charAt(0).toUpperCase()+attr.substr(1);if(typeof(el.imageSmoothingEnabled)!=='undefined')
{return el[attr]||el['ms'+uc]||el['moz'+uc]||el['o'+uc];}
else
{return el[attr]||el['ms'+uc]||el['moz'+uc]||el['webkit'+uc]||el['o'+uc];}},normalizeVendorAttribute:function(el,attr){var prefixedVal=ig.getVendorAttribute(el,attr);if(!el[attr]&&prefixedVal){el[attr]=prefixedVal;}},getImagePixels:function(image,x,y,width,height){var canvas=ig.$new('canvas');canvas.width=image.width;canvas.height=image.height;var ctx=canvas.getContext('2d');ig.System.SCALE.CRISP(canvas,ctx);var ratio=ig.getVendorAttribute(ctx,'backingStorePixelRatio')||1;ig.normalizeVendorAttribute(ctx,'getImageDataHD');var realWidth=image.width/ratio,realHeight=image.height/ratio;canvas.width=Math.ceil(realWidth);canvas.height=Math.ceil(realHeight);ctx.drawImage(image,0,0,realWidth,realHeight);return(ratio===1)?ctx.getImageData(x,y,width,height):ctx.getImageDataHD(x,y,width,height);},module:function(name){if(ig._current){throw("Module '"+ig._current.name+"' defines nothing");}
if(ig.modules[name]&&ig.modules[name].body){throw("Module '"+name+"' is already defined");}
ig._current={name:name,requires:[],loaded:false,body:null};ig.modules[name]=ig._current;ig._loadQueue.push(ig._current);return ig;},requires:function(){ig._current.requires=Array.prototype.slice.call(arguments);return ig;},defines:function(body){ig._current.body=body;ig._current=null;ig._initDOMReady();},addResource:function(resource){ig.resources.push(resource);},setNocache:function(set){ig.nocache=set?'?'+Date.now():'';},log:function(){},assert:function(condition,msg){},show:function(name,number){},mark:function(msg,color){},_loadScript:function(name,requiredFrom){ig.modules[name]={name:name,requires:[],loaded:false,body:null};ig._waitForOnload++;var path=ig.prefix+ig.lib+name.replace(/\./g,'/')+'.js'+ig.nocache;var script=ig.$new('script');script.type='text/javascript';script.src=path;script.onload=function(){ig._waitForOnload--;ig._execModules();};script.onerror=function(){throw('Failed to load module '+name+' at '+path+' '+'required from '+requiredFrom);};ig.$('head')[0].appendChild(script);},_execModules:function(){var modulesLoaded=false;for(var i=0;i<ig._loadQueue.length;i++){var m=ig._loadQueue[i];var dependenciesLoaded=true;for(var j=0;j<m.requires.length;j++){var name=m.requires[j];if(!ig.modules[name]){dependenciesLoaded=false;ig._loadScript(name,m.name);}
else if(!ig.modules[name].loaded){dependenciesLoaded=false;}}
if(dependenciesLoaded&&m.body){ig._loadQueue.splice(i,1);m.loaded=true;m.body();modulesLoaded=true;i--;}}
if(modulesLoaded){ig._execModules();}
else if(!ig.baked&&ig._waitForOnload==0&&ig._loadQueue.length!=0){var unresolved=[];for(var i=0;i<ig._loadQueue.length;i++){var unloaded=[];var requires=ig._loadQueue[i].requires;for(var j=0;j<requires.length;j++){var m=ig.modules[requires[j]];if(!m||!m.loaded){unloaded.push(requires[j]);}}
unresolved.push(ig._loadQueue[i].name+' (requires: '+unloaded.join(', ')+')');}
throw("Unresolved (or circular?) dependencies. "+"Most likely there's a name/path mismatch for one of the listed modules "+"or a previous syntax error prevents a module from loading:\n"+
unresolved.join('\n'));}},_DOMReady:function(){if(!ig.modules['dom.ready'].loaded){if(!document.body){return setTimeout(ig._DOMReady,13);}
ig.modules['dom.ready'].loaded=true;ig._waitForOnload--;ig._execModules();}
return 0;},_boot:function(){if(document.location.href.match(/\?nocache/)){ig.setNocache(true);}
ig.ua.pixelRatio=window.devicePixelRatio||1;ig.ua.viewport={width:window.innerWidth,height:window.innerHeight};ig.ua.screen={width:window.screen.availWidth*ig.ua.pixelRatio,height:window.screen.availHeight*ig.ua.pixelRatio};ig.ua.iPhone=/iPhone/i.test(navigator.userAgent);ig.ua.iPhone4=(ig.ua.iPhone&&ig.ua.pixelRatio==2);ig.ua.iPad=/iPad/i.test(navigator.userAgent);ig.ua.android=/android/i.test(navigator.userAgent);ig.ua.winPhone=/Windows Phone/i.test(navigator.userAgent);ig.ua.is_uiwebview=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);ig.ua.is_safari_or_uiwebview=/(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);ig.ua.iOS=ig.ua.iPhone||ig.ua.iPad;ig.ua.iOS6_tag=/OS 6_/i.test(navigator.userAgent);ig.ua.iOS6=(ig.ua.iPhone||ig.ua.iPad)&&ig.ua.iOS6_tag;ig.ua.iOSgt5=ig.ua.iOS&&parseInt((navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/)[1])>5;ig.ua.HTCONE=/HTC_One/i.test(navigator.userAgent);ig.ua.winPhone=/Windows Phone/i.test(navigator.userAgent);ig.ua.Kindle=/Silk/i.test(navigator.userAgent);ig.ua.touchDevice=(('ontouchstart'in window)||(window.navigator.msMaxTouchPoints));ig.ua.mobile=ig.ua.iOS||ig.ua.android||ig.ua.iOS6||ig.ua.winPhone||ig.ua.Kindle||/mobile/i.test(navigator.userAgent);},_initDOMReady:function(){if(ig.modules['dom.ready']){ig._execModules();return;}
ig._boot();ig.modules['dom.ready']={requires:[],loaded:false,body:null};ig._waitForOnload++;if(document.readyState==='complete'){ig._DOMReady();}
else{document.addEventListener('DOMContentLoaded',ig._DOMReady,false);window.addEventListener('load',ig._DOMReady,false);}}};ig.normalizeVendorAttribute(window,'requestAnimationFrame');if(window.requestAnimationFrame){var next=1,anims={};window.ig.setAnimation=function(callback,element){var current=next++;anims[current]=true;var animate=function(){if(!anims[current]){return;}
window.requestAnimationFrame(animate,element);callback();};window.requestAnimationFrame(animate,element);return current;};window.ig.clearAnimation=function(id){delete anims[id];};}
else{window.ig.setAnimation=function(callback,element){return window.setInterval(callback,1000/60);};window.ig.clearAnimation=function(id){window.clearInterval(id);};}
var initializing=false,fnTest=/xyz/.test(function(){xyz;})?/\bparent\b/:/.*/;var lastClassId=0;window.ig.Class=function(){};var inject=function(prop){var proto=this.prototype;var parent={};for(var name in prop){if(typeof(prop[name])=="function"&&typeof(proto[name])=="function"&&fnTest.test(prop[name])){parent[name]=proto[name];proto[name]=(function(name,fn){return function(){var tmp=this.parent;this.parent=parent[name];var ret=fn.apply(this,arguments);this.parent=tmp;return ret;};})(name,prop[name]);}
else{proto[name]=prop[name];}}};window.ig.Class.extend=function(prop){var parent=this.prototype;initializing=true;var prototype=new this();initializing=false;for(var name in prop){if(typeof(prop[name])=="function"&&typeof(parent[name])=="function"&&fnTest.test(prop[name])){prototype[name]=(function(name,fn){return function(){var tmp=this.parent;this.parent=parent[name];var ret=fn.apply(this,arguments);this.parent=tmp;return ret;};})(name,prop[name]);}
else{prototype[name]=prop[name];}}
function Class(){if(!initializing){if(this.staticInstantiate){var obj=this.staticInstantiate.apply(this,arguments);if(obj){return obj;}}
for(var p in this){if(typeof(this[p])=='object'){this[p]=ig.copy(this[p]);}}
if(this.init){this.init.apply(this,arguments);}}
return this;}
Class.prototype=prototype;Class.prototype.constructor=Class;Class.extend=window.ig.Class.extend;Class.inject=inject;Class.classId=prototype.classId=++lastClassId;return Class;};if(window.ImpactMixin){ig.merge(ig,window.ImpactMixin);}})(window);

// lib/impact/image.js
ig.baked=true;ig.module('impact.image').defines(function(){"use strict";ig.Image=ig.Class.extend({data:null,width:0,height:0,loaded:false,failed:false,loadCallback:null,path:'',staticInstantiate:function(path){return ig.Image.cache[path]||null;},init:function(path){this.path=path;this.load();},load:function(loadCallback){if(this.loaded){if(loadCallback){loadCallback(this.path,true);}
return;}
else if(!this.loaded&&ig.ready){this.loadCallback=loadCallback||null;this.data=new Image();this.data.onload=this.onload.bind(this);this.data.onerror=this.onerror.bind(this);this.data.src=ig.prefix+this.path+ig.nocache;}
else{ig.addResource(this);}
ig.Image.cache[this.path]=this;},reload:function(){this.loaded=false;this.data=new Image();this.data.onload=this.onload.bind(this);this.data.src=this.path+'?'+Date.now();},onload:function(event){this.width=this.data.width;this.height=this.data.height;this.loaded=true;if(ig.system.scale!=1){this.resize(ig.system.scale);}
if(this.loadCallback){this.loadCallback(this.path,true);}},onerror:function(event){this.failed=true;if(this.loadCallback){this.loadCallback(this.path,false);}},resize:function(scale){var origPixels=ig.getImagePixels(this.data,0,0,this.width,this.height);var widthScaled=this.width*scale;var heightScaled=this.height*scale;var scaled=ig.$new('canvas');scaled.width=widthScaled;scaled.height=heightScaled;var scaledCtx=scaled.getContext('2d');var scaledPixels=scaledCtx.getImageData(0,0,widthScaled,heightScaled);for(var y=0;y<heightScaled;y++){for(var x=0;x<widthScaled;x++){var index=(Math.floor(y/scale)*this.width+Math.floor(x/scale))*4;var indexScaled=(y*widthScaled+x)*4;scaledPixels.data[indexScaled]=origPixels.data[index];scaledPixels.data[indexScaled+1]=origPixels.data[index+1];scaledPixels.data[indexScaled+2]=origPixels.data[index+2];scaledPixels.data[indexScaled+3]=origPixels.data[index+3];}}
scaledCtx.putImageData(scaledPixels,0,0);this.data=scaled;},draw:function(targetX,targetY,sourceX,sourceY,width,height){if(!this.loaded){return;}
var scale=ig.system.scale;sourceX=sourceX?sourceX*scale:0;sourceY=sourceY?sourceY*scale:0;width=(width?width:this.width)*scale;height=(height?height:this.height)*scale;ig.system.context.drawImage(this.data,sourceX,sourceY,width,height,ig.system.getDrawPos(targetX),ig.system.getDrawPos(targetY),width,height);ig.Image.drawCount++;},drawTile:function(targetX,targetY,tile,tileWidth,tileHeight,flipX,flipY){tileHeight=tileHeight?tileHeight:tileWidth;if(!this.loaded||tileWidth>this.width||tileHeight>this.height){return;}
var scale=ig.system.scale;var tileWidthScaled=Math.floor(tileWidth*scale);var tileHeightScaled=Math.floor(tileHeight*scale);var scaleX=flipX?-1:1;var scaleY=flipY?-1:1;if(flipX||flipY){ig.system.context.save();ig.system.context.scale(scaleX,scaleY);}
ig.system.context.drawImage(this.data,(Math.floor(tile*tileWidth)%this.width)*scale,(Math.floor(tile*tileWidth/this.width)*tileHeight)*scale,tileWidthScaled,tileHeightScaled,ig.system.getDrawPos(targetX)*scaleX-(flipX?tileWidthScaled:0),ig.system.getDrawPos(targetY)*scaleY-(flipY?tileHeightScaled:0),tileWidthScaled,tileHeightScaled);if(flipX||flipY){ig.system.context.restore();}
ig.Image.drawCount++;}});ig.Image.drawCount=0;ig.Image.cache={};ig.Image.reloadCache=function(){for(var path in ig.Image.cache){ig.Image.cache[path].reload();}};});

// lib/impact/font.js
ig.baked=true;ig.module('impact.font').requires('impact.image').defines(function(){"use strict";ig.Font=ig.Image.extend({widthMap:[],indices:[],firstChar:32,alpha:1,letterSpacing:1,lineSpacing:0,onload:function(ev){this._loadMetrics(this.data);this.parent(ev);},widthForString:function(text){if(text.indexOf('\n')!==-1){var lines=text.split('\n');var width=0;for(var i=0;i<lines.length;i++){width=Math.max(width,this._widthForLine(lines[i]));}
return width;}
else{return this._widthForLine(text);}},_widthForLine:function(text){var width=0;for(var i=0;i<text.length;i++){width+=this.widthMap[text.charCodeAt(i)-this.firstChar]+this.letterSpacing;}
return width;},heightForString:function(text){return text.split('\n').length*(this.height+this.lineSpacing);},draw:function(text,x,y,align){if(typeof(text)!='string'){text=text.toString();}
if(text.indexOf('\n')!==-1){var lines=text.split('\n');var lineHeight=this.height+this.lineSpacing;for(var i=0;i<lines.length;i++){this.draw(lines[i],x,y+i*lineHeight,align);}
return;}
if(align==ig.Font.ALIGN.RIGHT||align==ig.Font.ALIGN.CENTER){var width=this._widthForLine(text);x-=align==ig.Font.ALIGN.CENTER?width/2:width;}
if(this.alpha!==1){ig.system.context.globalAlpha=this.alpha;}
for(var i=0;i<text.length;i++){var c=text.charCodeAt(i);x+=this._drawChar(c-this.firstChar,x,y);}
if(this.alpha!==1){ig.system.context.globalAlpha=1;}
ig.Image.drawCount+=text.length;},_drawChar:function(c,targetX,targetY){if(!this.loaded||c<0||c>=this.indices.length){return 0;}
var scale=ig.system.scale;var charX=this.indices[c]*scale;var charY=0;var charWidth=this.widthMap[c]*scale;var charHeight=(this.height-2)*scale;ig.system.context.drawImage(this.data,charX,charY,charWidth,charHeight,ig.system.getDrawPos(targetX),ig.system.getDrawPos(targetY),charWidth,charHeight);return this.widthMap[c]+this.letterSpacing;},_loadMetrics:function(image){this.height=image.height-1;this.widthMap=[];this.indices=[];var px=ig.getImagePixels(image,0,image.height-1,image.width,1);var currentChar=0;var currentWidth=0;for(var x=0;x<image.width;x++){var index=x*4+3;if(px.data[index]>127){currentWidth++;}
else if(px.data[index]<128&&currentWidth){this.widthMap.push(currentWidth);this.indices.push(x-currentWidth);currentChar++;currentWidth=0;}}
this.widthMap.push(currentWidth);this.indices.push(x-currentWidth);}});ig.Font.ALIGN={LEFT:0,RIGHT:1,CENTER:2};});

// lib/impact/sound.js
ig.baked=true;ig.module('impact.sound').defines(function(){"use strict";ig.SoundManager=ig.Class.extend({clips:{},volume:1,format:null,init:function(){if(!ig.Sound.enabled||!window.Audio){ig.Sound.enabled=false;return;}
var probe=new Audio();for(var i=0;i<ig.Sound.use.length;i++){var format=ig.Sound.use[i];if(probe.canPlayType(format.mime)){this.format=format;break;}}
if(!this.format){ig.Sound.enabled=false;}},load:function(path,multiChannel,loadCallback){var realPath=ig.prefix+path.replace(/[^\.]+$/,this.format.ext)+ig.nocache;if(this.clips[path]){if(multiChannel&&this.clips[path].length<ig.Sound.channels){for(var i=this.clips[path].length;i<ig.Sound.channels;i++){var a=new Audio(realPath);a.load();this.clips[path].push(a);}}
return this.clips[path][0];}
var clip=new Audio(realPath);if(loadCallback){clip.addEventListener('canplaythrough',function cb(ev){clip.removeEventListener('canplaythrough',cb,false);loadCallback(path,true,ev);},false);clip.addEventListener('error',function(ev){loadCallback(path,false,ev);},false);}
clip.preload='auto';clip.load();this.clips[path]=[clip];if(multiChannel){for(var i=1;i<ig.Sound.channels;i++){var a=new Audio(realPath);a.load();this.clips[path].push(a);}}
return clip;},get:function(path){var channels=this.clips[path];for(var i=0,clip;clip=channels[i++];){if(clip.paused||clip.ended){if(clip.ended){clip.currentTime=0;}
return clip;}}
channels[0].pause();channels[0].currentTime=0;return channels[0];}});ig.Music=ig.Class.extend({tracks:[],namedTracks:{},currentTrack:null,currentIndex:0,random:false,_volume:1,_loop:false,_fadeInterval:0,_fadeTimer:null,_endedCallbackBound:null,init:function(){this._endedCallbackBound=this._endedCallback.bind(this);if(Object.defineProperty){Object.defineProperty(this,"volume",{get:this.getVolume.bind(this),set:this.setVolume.bind(this)});Object.defineProperty(this,"loop",{get:this.getLooping.bind(this),set:this.setLooping.bind(this)});}
else if(this.__defineGetter__){this.__defineGetter__('volume',this.getVolume.bind(this));this.__defineSetter__('volume',this.setVolume.bind(this));this.__defineGetter__('loop',this.getLooping.bind(this));this.__defineSetter__('loop',this.setLooping.bind(this));}},add:function(music,name){if(!ig.Sound.enabled){return;}
var path=music instanceof ig.Sound?music.path:music;var track=ig.soundManager.load(path,false);track.loop=this._loop;track.volume=this._volume;track.addEventListener('ended',this._endedCallbackBound,false);this.tracks.push(track);if(name){this.namedTracks[name]=track;}
if(!this.currentTrack){this.currentTrack=track;}},next:function(){if(!this.tracks.length){return;}
this.stop();this.currentIndex=this.random?Math.floor(Math.random()*this.tracks.length):(this.currentIndex+1)%this.tracks.length;this.currentTrack=this.tracks[this.currentIndex];this.play();},pause:function(){if(!this.currentTrack){return;}
this.currentTrack.pause();},stop:function(){if(!this.currentTrack){return;}
this.currentTrack.pause();this.currentTrack.currentTime=0;},play:function(name){if(name&&this.namedTracks[name]){var newTrack=this.namedTracks[name];if(newTrack!=this.currentTrack){this.stop();this.currentTrack=newTrack;}}
else if(!this.currentTrack){return;}
this.currentTrack.play();},getLooping:function(){return this._loop;},setLooping:function(l){this._loop=l;for(var i in this.tracks){this.tracks[i].loop=l;}},getVolume:function(){return this._volume;},setVolume:function(v){this._volume=v.limit(0,1);for(var i in this.tracks){this.tracks[i].volume=this._volume;}},fadeOut:function(time){if(!this.currentTrack){return;}
clearInterval(this._fadeInterval);this.fadeTimer=new ig.Timer(time);this._fadeInterval=setInterval(this._fadeStep.bind(this),50);},_fadeStep:function(){var v=this.fadeTimer.delta().map(-this.fadeTimer.target,0,1,0).limit(0,1)*this._volume;if(v<=0.01){this.stop();this.currentTrack.volume=this._volume;clearInterval(this._fadeInterval);}
else{this.currentTrack.volume=v;}},_endedCallback:function(){if(this._loop){this.play();}
else{this.next();}}});ig.Sound=ig.Class.extend({path:'',volume:1,currentClip:null,multiChannel:true,init:function(path,multiChannel){this.path=path;this.multiChannel=(multiChannel!==false);this.load();},load:function(loadCallback){if(!ig.Sound.enabled){if(loadCallback){loadCallback(this.path,true);}
return;}
if(ig.ready){ig.soundManager.load(this.path,this.multiChannel,loadCallback);}
else{ig.addResource(this);}},play:function(){if(!ig.Sound.enabled){return;}
this.currentClip=ig.soundManager.get(this.path);this.currentClip.volume=ig.soundManager.volume*this.volume;this.currentClip.play();},stop:function(){if(this.currentClip){this.currentClip.pause();this.currentClip.currentTime=0;}}});ig.Sound.FORMAT={MP3:{ext:'mp3',mime:'audio/mpeg'},M4A:{ext:'m4a',mime:'audio/mp4; codecs=mp4a'},OGG:{ext:'ogg',mime:'audio/ogg; codecs=vorbis'},WEBM:{ext:'webm',mime:'audio/webm; codecs=vorbis'},CAF:{ext:'caf',mime:'audio/x-caf'}};ig.Sound.use=[ig.Sound.FORMAT.OGG,ig.Sound.FORMAT.MP3];ig.Sound.channels=4;ig.Sound.enabled=true;});

// lib/impact/loader.js
ig.baked=true;ig.module('impact.loader').requires('impact.image','impact.font','impact.sound').defines(function(){"use strict";ig.Loader=ig.Class.extend({resources:[],gameClass:null,status:0,done:false,_unloaded:[],_drawStatus:0,_intervalId:0,_loadCallbackBound:null,init:function(gameClass,resources){this.gameClass=gameClass;this.resources=resources;this._loadCallbackBound=this._loadCallback.bind(this);for(var i=0;i<this.resources.length;i++){this._unloaded.push(this.resources[i].path);}},load:function(){ig.system.clear('#125024');if(!this.resources.length){this.end();return;}
for(var i=0;i<this.resources.length;i++){this.loadResource(this.resources[i]);}
this._intervalId=setInterval(this.draw.bind(this),16);},loadResource:function(res){res.load(this._loadCallbackBound);},end:function(){if(this.done){return;}
this.done=true;clearInterval(this._intervalId);},draw:function(){},_loadCallback:function(path,status){if(status){this._unloaded.erase(path);}
else{throw('Failed to load resource: '+path);}
this.status=1-(this._unloaded.length/this.resources.length);if(this._unloaded.length==0){setTimeout(this.end.bind(this),250);}}});});

// lib/impact/timer.js
ig.baked=true;ig.module('impact.timer').defines(function(){"use strict";ig.Timer=ig.Class.extend({target:0,base:0,last:0,pausedAt:0,init:function(seconds){this.base=ig.Timer.time;this.last=ig.Timer.time;this.target=seconds||0;},set:function(seconds){this.target=seconds||0;this.base=ig.Timer.time;this.pausedAt=0;},reset:function(){this.base=ig.Timer.time;this.pausedAt=0;},tick:function(){var delta=ig.Timer.time-this.last;this.last=ig.Timer.time;return(this.pausedAt?0:delta);},delta:function(){return(this.pausedAt||ig.Timer.time)-this.base-this.target;},pause:function(){if(!this.pausedAt){this.pausedAt=ig.Timer.time;}},unpause:function(){if(this.pausedAt){this.base+=ig.Timer.time-this.pausedAt;this.pausedAt=0;}}});ig.Timer._last=0;ig.Timer.time=Number.MIN_VALUE;ig.Timer.timeScale=1;ig.Timer.maxStep=0.05;ig.Timer.step=function(){var current=Date.now();var delta=(current-ig.Timer._last)/1000;ig.Timer.time+=Math.min(delta,ig.Timer.maxStep)*ig.Timer.timeScale;ig.Timer._last=current;};});

// lib/impact/system.js
ig.baked=true;ig.module('impact.system').requires('impact.timer','impact.image').defines(function(){"use strict";ig.System=ig.Class.extend({fps:30,width:320,height:240,realWidth:320,realHeight:240,scale:1,tick:0,animationId:0,newGameClass:null,running:false,delegate:null,clock:null,canvas:null,context:null,init:function(canvasId,fps,width,height,scale){this.fps=fps;this.clock=new ig.Timer();this.canvas=ig.$(canvasId);this.resize(width,height,scale);this.context=this.canvas.getContext('2d');this.getDrawPos=ig.System.drawMode;if(this.scale!=1){ig.System.scaleMode=ig.System.SCALE.CRISP;}
ig.System.scaleMode(this.canvas,this.context);},resize:function(width,height,scale){this.width=width;this.height=height;this.scale=scale||this.scale;this.realWidth=this.width*this.scale;this.realHeight=this.height*this.scale;this.canvas.width=this.realWidth;this.canvas.height=this.realHeight;},setGame:function(gameClass){if(this.running){this.newGameClass=gameClass;}
else{this.setGameNow(gameClass);}},setGameNow:function(gameClass){ig.game=new(gameClass)();ig.system.setDelegate(ig.game);},setDelegate:function(object){if(typeof(object.run)=='function'){this.delegate=object;this.startRunLoop();}else{throw('System.setDelegate: No run() function in object');}},stopRunLoop:function(){ig.clearAnimation(this.animationId);this.running=false;},startRunLoop:function(){this.stopRunLoop();this.animationId=ig.setAnimation(this.run.bind(this),this.canvas);this.running=true;},clear:function(color){this.context.fillStyle=color;this.context.fillRect(0,0,this.realWidth,this.realHeight);},run:function(){ig.Timer.step();this.tick=this.clock.tick();this.delegate.run();ig.input.clearPressed();if(this.newGameClass){this.setGameNow(this.newGameClass);this.newGameClass=null;}},getDrawPos:null});ig.System.DRAW={AUTHENTIC:function(p){return Math.round(p)*this.scale;},SMOOTH:function(p){return Math.round(p*this.scale);},SUBPIXEL:function(p){return p*this.scale;}};ig.System.drawMode=ig.System.DRAW.SMOOTH;ig.System.SCALE={CRISP:function(canvas,context){ig.setVendorAttribute(context,'imageSmoothingEnabled',false);canvas.style.imageRendering='-moz-crisp-edges';canvas.style.imageRendering='-o-crisp-edges';canvas.style.imageRendering='-webkit-optimize-contrast';canvas.style.imageRendering='crisp-edges';canvas.style.msInterpolationMode='nearest-neighbor';},SMOOTH:function(canvas,context){ig.setVendorAttribute(context,'imageSmoothingEnabled',true);canvas.style.imageRendering='';canvas.style.msInterpolationMode='';}};ig.System.scaleMode=ig.System.SCALE.SMOOTH;});

// lib/impact/input.js
ig.baked=true;ig.module('impact.input').defines(function(){"use strict";ig.KEY={'MOUSE1':-1,'MOUSE2':-3,'MWHEEL_UP':-4,'MWHEEL_DOWN':-5,'BACKSPACE':8,'TAB':9,'ENTER':13,'PAUSE':19,'CAPS':20,'ESC':27,'SPACE':32,'PAGE_UP':33,'PAGE_DOWN':34,'END':35,'HOME':36,'LEFT_ARROW':37,'UP_ARROW':38,'RIGHT_ARROW':39,'DOWN_ARROW':40,'INSERT':45,'DELETE':46,'_0':48,'_1':49,'_2':50,'_3':51,'_4':52,'_5':53,'_6':54,'_7':55,'_8':56,'_9':57,'A':65,'B':66,'C':67,'D':68,'E':69,'F':70,'G':71,'H':72,'I':73,'J':74,'K':75,'L':76,'M':77,'N':78,'O':79,'P':80,'Q':81,'R':82,'S':83,'T':84,'U':85,'V':86,'W':87,'X':88,'Y':89,'Z':90,'NUMPAD_0':96,'NUMPAD_1':97,'NUMPAD_2':98,'NUMPAD_3':99,'NUMPAD_4':100,'NUMPAD_5':101,'NUMPAD_6':102,'NUMPAD_7':103,'NUMPAD_8':104,'NUMPAD_9':105,'MULTIPLY':106,'ADD':107,'SUBSTRACT':109,'DECIMAL':110,'DIVIDE':111,'F1':112,'F2':113,'F3':114,'F4':115,'F5':116,'F6':117,'F7':118,'F8':119,'F9':120,'F10':121,'F11':122,'F12':123,'SHIFT':16,'CTRL':17,'ALT':18,'PLUS':187,'COMMA':188,'MINUS':189,'PERIOD':190};ig.Input=ig.Class.extend({bindings:{},actions:{},presses:{},locks:{},delayedKeyup:{},isUsingMouse:false,isUsingKeyboard:false,isUsingAccelerometer:false,mouse:{x:0,y:0},accel:{x:0,y:0,z:0},initMouse:function(){if(this.isUsingMouse){return;}
this.isUsingMouse=true;var mouseWheelBound=this.mousewheel.bind(this);ig.system.canvas.addEventListener('mousewheel',mouseWheelBound,false);ig.system.canvas.addEventListener('DOMMouseScroll',mouseWheelBound,false);ig.system.canvas.addEventListener('contextmenu',this.contextmenu.bind(this),false);ig.system.canvas.addEventListener('mousedown',this.keydown.bind(this),false);ig.system.canvas.addEventListener('mouseup',this.keyup.bind(this),false);ig.system.canvas.addEventListener('mousemove',this.mousemove.bind(this),false);if(ig.ua.touchDevice){ig.system.canvas.addEventListener('touchstart',this.keydown.bind(this),false);ig.system.canvas.addEventListener('touchend',this.keyup.bind(this),false);ig.system.canvas.addEventListener('touchmove',this.mousemove.bind(this),false);ig.system.canvas.addEventListener('MSPointerDown',this.keydown.bind(this),false);ig.system.canvas.addEventListener('MSPointerUp',this.keyup.bind(this),false);ig.system.canvas.addEventListener('MSPointerMove',this.mousemove.bind(this),false);ig.system.canvas.style.msTouchAction='none';}},initKeyboard:function(){if(this.isUsingKeyboard){return;}
this.isUsingKeyboard=true;window.addEventListener('keydown',this.keydown.bind(this),false);window.addEventListener('keyup',this.keyup.bind(this),false);},initAccelerometer:function(){if(this.isUsingAccelerometer){return;}
window.addEventListener('devicemotion',this.devicemotion.bind(this),false);},mousewheel:function(event){var delta=event.wheelDelta?event.wheelDelta:(event.detail*-1);var code=delta>0?ig.KEY.MWHEEL_UP:ig.KEY.MWHEEL_DOWN;var action=this.bindings[code];if(action){this.actions[action]=true;this.presses[action]=true;this.delayedKeyup[action]=true;event.stopPropagation();event.preventDefault();}},mousemove:function(event){var internalWidth=parseInt(ig.system.canvas.offsetWidth)||ig.system.realWidth;if(ig.ua.mobile){internalWidth=ig.system.realWidth;}
var scale=ig.system.scale*(internalWidth/ig.system.realWidth);var pos={left:0,top:0};if(ig.system.canvas.getBoundingClientRect){pos=ig.system.canvas.getBoundingClientRect();}
var ev=event.touches?event.touches[0]:event;this.mouse.x=(ev.clientX-pos.left)/scale;this.mouse.y=(ev.clientY-pos.top)/scale;},contextmenu:function(event){if(this.bindings[ig.KEY.MOUSE2]){event.stopPropagation();event.preventDefault();}},keydown:function(event){var tag=event.target.tagName;if(tag=='INPUT'||tag=='TEXTAREA'){return;}
var code=event.type=='keydown'?event.keyCode:(event.button==2?ig.KEY.MOUSE2:ig.KEY.MOUSE1);if(event.type=='touchstart'||event.type=='mousedown'){this.mousemove(event);}
var action=this.bindings[code];if(action){this.actions[action]=true;if(!this.locks[action]){this.presses[action]=true;this.locks[action]=true;}
event.stopPropagation();event.preventDefault();}},keyup:function(event){var tag=event.target.tagName;if(tag=='INPUT'||tag=='TEXTAREA'){return;}
var code=event.type=='keyup'?event.keyCode:(event.button==2?ig.KEY.MOUSE2:ig.KEY.MOUSE1);var action=this.bindings[code];if(action){this.delayedKeyup[action]=true;event.stopPropagation();event.preventDefault();}},devicemotion:function(event){this.accel=event.accelerationIncludingGravity;},bind:function(key,action){if(key<0){this.initMouse();}else if(key>0){this.initKeyboard();}
this.bindings[key]=action;},bindTouch:function(selector,action){var element=ig.$(selector);var that=this;element.addEventListener('touchstart',function(ev){that.touchStart(ev,action);},false);element.addEventListener('touchend',function(ev){that.touchEnd(ev,action);},false);element.addEventListener('MSPointerDown',function(ev){that.touchStart(ev,action);},false);element.addEventListener('MSPointerUp',function(ev){that.touchEnd(ev,action);},false);},unbind:function(key){var action=this.bindings[key];this.delayedKeyup[action]=true;this.bindings[key]=null;},unbindAll:function(){this.bindings={};this.actions={};this.presses={};this.locks={};this.delayedKeyup={};},state:function(action){return this.actions[action];},pressed:function(action){return this.presses[action];},released:function(action){return!!this.delayedKeyup[action];},clearPressed:function(){for(var action in this.delayedKeyup){this.actions[action]=false;this.locks[action]=false;}
this.delayedKeyup={};this.presses={};},touchStart:function(event,action){this.actions[action]=true;this.presses[action]=true;event.stopPropagation();event.preventDefault();return false;},touchEnd:function(event,action){this.delayedKeyup[action]=true;event.stopPropagation();event.preventDefault();return false;}});});

// lib/impact/impact.js
ig.baked=true;ig.module('impact.impact').requires('dom.ready','impact.loader','impact.system','impact.input','impact.sound').defines(function(){"use strict";ig.main=function(canvasId,gameClass,fps,width,height,scale,loaderClass){ig.system=new ig.System(canvasId,fps,width,height,scale||1);ig.input=new ig.Input();ig.soundManager=new ig.SoundManager();ig.music=new ig.Music();ig.ready=true;var loader=new(loaderClass||ig.Loader)(gameClass,ig.resources);loader.load();};});

// lib/impact/animation.js
ig.baked=true;ig.module('impact.animation').requires('impact.timer','impact.image').defines(function(){"use strict";ig.AnimationSheet=ig.Class.extend({width:8,height:8,image:null,init:function(path,width,height){this.width=width;this.height=height;this.image=new ig.Image(path);}});ig.Animation=ig.Class.extend({sheet:null,timer:null,sequence:[],flip:{x:false,y:false},pivot:{x:0,y:0},frame:0,tile:0,loopCount:0,alpha:1,angle:0,init:function(sheet,frameTime,sequence,stop){this.sheet=sheet;this.pivot={x:sheet.width/2,y:sheet.height/2};this.timer=new ig.Timer();this.frameTime=frameTime;this.sequence=sequence;this.stop=!!stop;this.tile=this.sequence[0];},rewind:function(){this.timer.set();this.loopCount=0;this.frame=0;this.tile=this.sequence[0];return this;},gotoFrame:function(f){this.timer.set(this.frameTime*-f-0.0001);this.update();},gotoRandomFrame:function(){this.gotoFrame(Math.floor(Math.random()*this.sequence.length))},update:function(){var frameTotal=Math.floor(this.timer.delta()/this.frameTime);this.loopCount=Math.floor(frameTotal/this.sequence.length);if(this.stop&&this.loopCount>0){this.frame=this.sequence.length-1;}
else{this.frame=frameTotal%this.sequence.length;}
this.tile=this.sequence[this.frame];},draw:function(targetX,targetY){var bbsize=Math.max(this.sheet.width,this.sheet.height);if(targetX>ig.system.width||targetY>ig.system.height||targetX+bbsize<0||targetY+bbsize<0){return;}
if(this.alpha!=1){ig.system.context.globalAlpha=this.alpha;}
if(this.angle==0){this.sheet.image.drawTile(targetX,targetY,this.tile,this.sheet.width,this.sheet.height,this.flip.x,this.flip.y);}
else{ig.system.context.save();ig.system.context.translate(ig.system.getDrawPos(targetX+this.pivot.x),ig.system.getDrawPos(targetY+this.pivot.y));ig.system.context.rotate(this.angle);this.sheet.image.drawTile(-this.pivot.x,-this.pivot.y,this.tile,this.sheet.width,this.sheet.height,this.flip.x,this.flip.y);ig.system.context.restore();}
if(this.alpha!=1){ig.system.context.globalAlpha=1;}}});});

// lib/impact/entity.js
ig.baked=true;ig.module('impact.entity').requires('impact.animation','impact.impact').defines(function(){"use strict";ig.Entity=ig.Class.extend({id:0,settings:{},size:{x:16,y:16},offset:{x:0,y:0},pos:{x:0,y:0},last:{x:0,y:0},vel:{x:0,y:0},accel:{x:0,y:0},friction:{x:0,y:0},maxVel:{x:100,y:100},zIndex:0,gravityFactor:1,standing:false,bounciness:0,minBounceVelocity:40,anims:{},animSheet:null,currentAnim:null,health:10,type:0,checkAgainst:0,collides:0,_killed:false,slopeStanding:{min:(44).toRad(),max:(136).toRad()},init:function(x,y,settings){this.id=++ig.Entity._lastId;this.pos.x=this.last.x=x;this.pos.y=this.last.y=y;ig.merge(this,settings);},reset:function(x,y,settings){var proto=this.constructor.prototype;this.pos.x=x;this.pos.y=y;this.last.x=x;this.last.y=y;this.vel.x=proto.vel.x;this.vel.y=proto.vel.y;this.accel.x=proto.accel.x;this.accel.y=proto.accel.y;this.health=proto.health;this._killed=proto._killed;this.standing=proto.standing;this.type=proto.type;this.checkAgainst=proto.checkAgainst;this.collides=proto.collides;ig.merge(this,settings);},addAnim:function(name,frameTime,sequence,stop){if(!this.animSheet){throw('No animSheet to add the animation '+name+' to.');}
var a=new ig.Animation(this.animSheet,frameTime,sequence,stop);this.anims[name]=a;if(!this.currentAnim){this.currentAnim=a;}
return a;},update:function(){this.last.x=this.pos.x;this.last.y=this.pos.y;this.vel.y+=ig.game.gravity*ig.system.tick*this.gravityFactor;this.vel.x=this.getNewVelocity(this.vel.x,this.accel.x,this.friction.x,this.maxVel.x);this.vel.y=this.getNewVelocity(this.vel.y,this.accel.y,this.friction.y,this.maxVel.y);var mx=this.vel.x*ig.system.tick;var my=this.vel.y*ig.system.tick;var res=ig.game.collisionMap.trace(this.pos.x,this.pos.y,mx,my,this.size.x,this.size.y);this.handleMovementTrace(res);if(this.currentAnim){this.currentAnim.update();}},getNewVelocity:function(vel,accel,friction,max){if(accel){return(vel+accel*ig.system.tick).limit(-max,max);}
else if(friction){var delta=friction*ig.system.tick;if(vel-delta>0){return vel-delta;}
else if(vel+delta<0){return vel+delta;}
else{return 0;}}
return vel.limit(-max,max);},handleMovementTrace:function(res){this.standing=false;if(res.collision.y){if(this.bounciness>0&&Math.abs(this.vel.y)>this.minBounceVelocity){this.vel.y*=-this.bounciness;}
else{if(this.vel.y>0){this.standing=true;}
this.vel.y=0;}}
if(res.collision.x){if(this.bounciness>0&&Math.abs(this.vel.x)>this.minBounceVelocity){this.vel.x*=-this.bounciness;}
else{this.vel.x=0;}}
if(res.collision.slope){var s=res.collision.slope;if(this.bounciness>0){var proj=this.vel.x*s.nx+this.vel.y*s.ny;this.vel.x=(this.vel.x-s.nx*proj*2)*this.bounciness;this.vel.y=(this.vel.y-s.ny*proj*2)*this.bounciness;}
else{var lengthSquared=s.x*s.x+s.y*s.y;var dot=(this.vel.x*s.x+this.vel.y*s.y)/lengthSquared;this.vel.x=s.x*dot;this.vel.y=s.y*dot;var angle=Math.atan2(s.x,s.y);if(angle>this.slopeStanding.min&&angle<this.slopeStanding.max){this.standing=true;}}}
this.pos=res.pos;},draw:function(){if(this.currentAnim){this.currentAnim.draw(this.pos.x-this.offset.x-ig.game._rscreen.x,this.pos.y-this.offset.y-ig.game._rscreen.y);}},kill:function(){ig.game.removeEntity(this);},receiveDamage:function(amount,from){this.health-=amount;if(this.health<=0){this.kill();}},touches:function(other){return!(this.pos.x>=other.pos.x+other.size.x||this.pos.x+this.size.x<=other.pos.x||this.pos.y>=other.pos.y+other.size.y||this.pos.y+this.size.y<=other.pos.y);},distanceTo:function(other){var xd=(this.pos.x+this.size.x/2)-(other.pos.x+other.size.x/2);var yd=(this.pos.y+this.size.y/2)-(other.pos.y+other.size.y/2);return Math.sqrt(xd*xd+yd*yd);},angleTo:function(other){return Math.atan2((other.pos.y+other.size.y/2)-(this.pos.y+this.size.y/2),(other.pos.x+other.size.x/2)-(this.pos.x+this.size.x/2));},check:function(other){},collideWith:function(other,axis){},ready:function(){},erase:function(){}});ig.Entity._lastId=0;ig.Entity.COLLIDES={NEVER:0,LITE:1,PASSIVE:2,ACTIVE:4,FIXED:8};ig.Entity.TYPE={NONE:0,A:1,B:2,BOTH:3};ig.Entity.checkPair=function(a,b){if(a.checkAgainst&b.type){a.check(b);}
if(b.checkAgainst&a.type){b.check(a);}
if(a.collides&&b.collides&&a.collides+b.collides>ig.Entity.COLLIDES.ACTIVE){ig.Entity.solveCollision(a,b);}};ig.Entity.solveCollision=function(a,b){var weak=null;if(a.collides==ig.Entity.COLLIDES.LITE||b.collides==ig.Entity.COLLIDES.FIXED){weak=a;}
else if(b.collides==ig.Entity.COLLIDES.LITE||a.collides==ig.Entity.COLLIDES.FIXED){weak=b;}
if(a.last.x+a.size.x>b.last.x&&a.last.x<b.last.x+b.size.x){if(a.last.y<b.last.y){ig.Entity.seperateOnYAxis(a,b,weak);}
else{ig.Entity.seperateOnYAxis(b,a,weak);}
a.collideWith(b,'y');b.collideWith(a,'y');}
else if(a.last.y+a.size.y>b.last.y&&a.last.y<b.last.y+b.size.y){if(a.last.x<b.last.x){ig.Entity.seperateOnXAxis(a,b,weak);}
else{ig.Entity.seperateOnXAxis(b,a,weak);}
a.collideWith(b,'x');b.collideWith(a,'x');}};ig.Entity.seperateOnXAxis=function(left,right,weak){var nudge=(left.pos.x+left.size.x-right.pos.x);if(weak){var strong=left===weak?right:left;weak.vel.x=-weak.vel.x*weak.bounciness+strong.vel.x;var resWeak=ig.game.collisionMap.trace(weak.pos.x,weak.pos.y,weak==left?-nudge:nudge,0,weak.size.x,weak.size.y);weak.pos.x=resWeak.pos.x;}
else{var v2=(left.vel.x-right.vel.x)/2;left.vel.x=-v2;right.vel.x=v2;var resLeft=ig.game.collisionMap.trace(left.pos.x,left.pos.y,-nudge/2,0,left.size.x,left.size.y);left.pos.x=Math.floor(resLeft.pos.x);var resRight=ig.game.collisionMap.trace(right.pos.x,right.pos.y,nudge/2,0,right.size.x,right.size.y);right.pos.x=Math.ceil(resRight.pos.x);}};ig.Entity.seperateOnYAxis=function(top,bottom,weak){var nudge=(top.pos.y+top.size.y-bottom.pos.y);if(weak){var strong=top===weak?bottom:top;weak.vel.y=-weak.vel.y*weak.bounciness+strong.vel.y;var nudgeX=0;if(weak==top&&Math.abs(weak.vel.y-strong.vel.y)<weak.minBounceVelocity){weak.standing=true;nudgeX=strong.vel.x*ig.system.tick;}
var resWeak=ig.game.collisionMap.trace(weak.pos.x,weak.pos.y,nudgeX,weak==top?-nudge:nudge,weak.size.x,weak.size.y);weak.pos.y=resWeak.pos.y;weak.pos.x=resWeak.pos.x;}
else if(ig.game.gravity&&(bottom.standing||top.vel.y>0)){var resTop=ig.game.collisionMap.trace(top.pos.x,top.pos.y,0,-(top.pos.y+top.size.y-bottom.pos.y),top.size.x,top.size.y);top.pos.y=resTop.pos.y;if(top.bounciness>0&&top.vel.y>top.minBounceVelocity){top.vel.y*=-top.bounciness;}
else{top.standing=true;top.vel.y=0;}}
else{var v2=(top.vel.y-bottom.vel.y)/2;top.vel.y=-v2;bottom.vel.y=v2;var nudgeX=bottom.vel.x*ig.system.tick;var resTop=ig.game.collisionMap.trace(top.pos.x,top.pos.y,nudgeX,-nudge/2,top.size.x,top.size.y);top.pos.y=resTop.pos.y;var resBottom=ig.game.collisionMap.trace(bottom.pos.x,bottom.pos.y,0,nudge/2,bottom.size.x,bottom.size.y);bottom.pos.y=resBottom.pos.y;}};});

// lib/impact/map.js
ig.baked=true;ig.module('impact.map').defines(function(){"use strict";ig.Map=ig.Class.extend({tilesize:8,width:1,height:1,data:[[]],name:null,init:function(tilesize,data){this.tilesize=tilesize;this.data=data;this.height=data.length;this.width=data[0].length;this.pxWidth=this.width*this.tilesize;this.pxHeight=this.height*this.tilesize;},getTile:function(x,y){var tx=Math.floor(x/this.tilesize);var ty=Math.floor(y/this.tilesize);if((tx>=0&&tx<this.width)&&(ty>=0&&ty<this.height)){return this.data[ty][tx];}
else{return 0;}},setTile:function(x,y,tile){var tx=Math.floor(x/this.tilesize);var ty=Math.floor(y/this.tilesize);if((tx>=0&&tx<this.width)&&(ty>=0&&ty<this.height)){this.data[ty][tx]=tile;}}});});

// lib/impact/collision-map.js
ig.baked=true;ig.module('impact.collision-map').requires('impact.map').defines(function(){"use strict";ig.CollisionMap=ig.Map.extend({lastSlope:1,tiledef:null,init:function(tilesize,data,tiledef){this.parent(tilesize,data);this.tiledef=tiledef||ig.CollisionMap.defaultTileDef;for(var t in this.tiledef){if(t|0>this.lastSlope){this.lastSlope=t|0;}}},trace:function(x,y,vx,vy,objectWidth,objectHeight){var res={collision:{x:false,y:false,slope:false},pos:{x:x,y:y},tile:{x:0,y:0}};var steps=Math.ceil(Math.max(Math.abs(vx),Math.abs(vy))/this.tilesize);if(steps>1){var sx=vx/steps;var sy=vy/steps;for(var i=0;i<steps&&(sx||sy);i++){this._traceStep(res,x,y,sx,sy,objectWidth,objectHeight,vx,vy,i);x=res.pos.x;y=res.pos.y;if(res.collision.x){sx=0;vx=0;}
if(res.collision.y){sy=0;vy=0;}
if(res.collision.slope){break;}}}
else{this._traceStep(res,x,y,vx,vy,objectWidth,objectHeight,vx,vy,0);}
return res;},_traceStep:function(res,x,y,vx,vy,width,height,rvx,rvy,step){res.pos.x+=vx;res.pos.y+=vy;var t=0;if(vx){var pxOffsetX=(vx>0?width:0);var tileOffsetX=(vx<0?this.tilesize:0);var firstTileY=Math.max(Math.floor(y/this.tilesize),0);var lastTileY=Math.min(Math.ceil((y+height)/this.tilesize),this.height);var tileX=Math.floor((res.pos.x+pxOffsetX)/this.tilesize);var prevTileX=Math.floor((x+pxOffsetX)/this.tilesize);if(step>0||tileX==prevTileX||prevTileX<0||prevTileX>=this.width){prevTileX=-1;}
if(tileX>=0&&tileX<this.width){for(var tileY=firstTileY;tileY<lastTileY;tileY++){if(prevTileX!=-1){t=this.data[tileY][prevTileX];if(t>1&&t<=this.lastSlope&&this._checkTileDef(res,t,x,y,rvx,rvy,width,height,prevTileX,tileY)){break;}}
t=this.data[tileY][tileX];if(t==1||t>this.lastSlope||(t>1&&this._checkTileDef(res,t,x,y,rvx,rvy,width,height,tileX,tileY))){if(t>1&&t<=this.lastSlope&&res.collision.slope){break;}
res.collision.x=true;res.tile.x=t;x=res.pos.x=tileX*this.tilesize-pxOffsetX+tileOffsetX;rvx=0;break;}}}}
if(vy){var pxOffsetY=(vy>0?height:0);var tileOffsetY=(vy<0?this.tilesize:0);var firstTileX=Math.max(Math.floor(res.pos.x/this.tilesize),0);var lastTileX=Math.min(Math.ceil((res.pos.x+width)/this.tilesize),this.width);var tileY=Math.floor((res.pos.y+pxOffsetY)/this.tilesize);var prevTileY=Math.floor((y+pxOffsetY)/this.tilesize);if(step>0||tileY==prevTileY||prevTileY<0||prevTileY>=this.height){prevTileY=-1;}
if(tileY>=0&&tileY<this.height){for(var tileX=firstTileX;tileX<lastTileX;tileX++){if(prevTileY!=-1){t=this.data[prevTileY][tileX];if(t>1&&t<=this.lastSlope&&this._checkTileDef(res,t,x,y,rvx,rvy,width,height,tileX,prevTileY)){break;}}
t=this.data[tileY][tileX];if(t==1||t>this.lastSlope||(t>1&&this._checkTileDef(res,t,x,y,rvx,rvy,width,height,tileX,tileY))){if(t>1&&t<=this.lastSlope&&res.collision.slope){break;}
res.collision.y=true;res.tile.y=t;res.pos.y=tileY*this.tilesize-pxOffsetY+tileOffsetY;break;}}}}},_checkTileDef:function(res,t,x,y,vx,vy,width,height,tileX,tileY){var def=this.tiledef[t];if(!def){return false;}
var lx=(tileX+def[0])*this.tilesize,ly=(tileY+def[1])*this.tilesize,lvx=(def[2]-def[0])*this.tilesize,lvy=(def[3]-def[1])*this.tilesize,solid=def[4];var tx=x+vx+(lvy<0?width:0)-lx,ty=y+vy+(lvx>0?height:0)-ly;if(lvx*ty-lvy*tx>0){if(vx*-lvy+vy*lvx<0){return solid;}
var length=Math.sqrt(lvx*lvx+lvy*lvy);var nx=lvy/length,ny=-lvx/length;var proj=tx*nx+ty*ny;var px=nx*proj,py=ny*proj;if(px*px+py*py>=vx*vx+vy*vy){return solid||(lvx*(ty-vy)-lvy*(tx-vx)<0.5);}
res.pos.x=x+vx-px;res.pos.y=y+vy-py;res.collision.slope={x:lvx,y:lvy,nx:nx,ny:ny};return true;}
return false;}});var H=1/2,N=1/3,M=2/3,SOLID=true,NON_SOLID=false;ig.CollisionMap.defaultTileDef={5:[0,1,1,M,SOLID],6:[0,M,1,N,SOLID],7:[0,N,1,0,SOLID],3:[0,1,1,H,SOLID],4:[0,H,1,0,SOLID],2:[0,1,1,0,SOLID],10:[H,1,1,0,SOLID],21:[0,1,H,0,SOLID],32:[M,1,1,0,SOLID],43:[N,1,M,0,SOLID],54:[0,1,N,0,SOLID],27:[0,0,1,N,SOLID],28:[0,N,1,M,SOLID],29:[0,M,1,1,SOLID],25:[0,0,1,H,SOLID],26:[0,H,1,1,SOLID],24:[0,0,1,1,SOLID],11:[0,0,H,1,SOLID],22:[H,0,1,1,SOLID],33:[0,0,N,1,SOLID],44:[N,0,M,1,SOLID],55:[M,0,1,1,SOLID],16:[1,N,0,0,SOLID],17:[1,M,0,N,SOLID],18:[1,1,0,M,SOLID],14:[1,H,0,0,SOLID],15:[1,1,0,H,SOLID],13:[1,1,0,0,SOLID],8:[H,1,0,0,SOLID],19:[1,1,H,0,SOLID],30:[N,1,0,0,SOLID],41:[M,1,N,0,SOLID],52:[1,1,M,0,SOLID],38:[1,M,0,1,SOLID],39:[1,N,0,M,SOLID],40:[1,0,0,N,SOLID],36:[1,H,0,1,SOLID],37:[1,0,0,H,SOLID],35:[1,0,0,1,SOLID],9:[1,0,H,1,SOLID],20:[H,0,0,1,SOLID],31:[1,0,M,1,SOLID],42:[M,0,N,1,SOLID],53:[N,0,0,1,SOLID],12:[0,0,1,0,NON_SOLID],23:[1,1,0,1,NON_SOLID],34:[1,0,1,1,NON_SOLID],45:[0,1,0,0,NON_SOLID]};ig.CollisionMap.staticNoCollision={trace:function(x,y,vx,vy){return{collision:{x:false,y:false,slope:false},pos:{x:x+vx,y:y+vy},tile:{x:0,y:0}};}};});

// lib/impact/background-map.js
ig.baked=true;ig.module('impact.background-map').requires('impact.map','impact.image').defines(function(){"use strict";ig.BackgroundMap=ig.Map.extend({tiles:null,scroll:{x:0,y:0},distance:1,repeat:false,tilesetName:'',foreground:false,enabled:true,preRender:false,preRenderedChunks:null,chunkSize:512,debugChunks:false,anims:{},init:function(tilesize,data,tileset){this.parent(tilesize,data);this.setTileset(tileset);},setTileset:function(tileset){this.tilesetName=tileset instanceof ig.Image?tileset.path:tileset;this.tiles=new ig.Image(this.tilesetName);this.preRenderedChunks=null;},setScreenPos:function(x,y){this.scroll.x=x/this.distance;this.scroll.y=y/this.distance;},preRenderMapToChunks:function(){var totalWidth=this.width*this.tilesize*ig.system.scale,totalHeight=this.height*this.tilesize*ig.system.scale;this.chunkSize=Math.min(Math.max(totalWidth,totalHeight),this.chunkSize);var chunkCols=Math.ceil(totalWidth/this.chunkSize),chunkRows=Math.ceil(totalHeight/this.chunkSize);this.preRenderedChunks=[];for(var y=0;y<chunkRows;y++){this.preRenderedChunks[y]=[];for(var x=0;x<chunkCols;x++){var chunkWidth=(x==chunkCols-1)?totalWidth-x*this.chunkSize:this.chunkSize;var chunkHeight=(y==chunkRows-1)?totalHeight-y*this.chunkSize:this.chunkSize;this.preRenderedChunks[y][x]=this.preRenderChunk(x,y,chunkWidth,chunkHeight);}}},preRenderChunk:function(cx,cy,w,h){var tw=w/this.tilesize/ig.system.scale+1,th=h/this.tilesize/ig.system.scale+1;var nx=(cx*this.chunkSize/ig.system.scale)%this.tilesize,ny=(cy*this.chunkSize/ig.system.scale)%this.tilesize;var tx=Math.floor(cx*this.chunkSize/this.tilesize/ig.system.scale),ty=Math.floor(cy*this.chunkSize/this.tilesize/ig.system.scale);var chunk=ig.$new('canvas');chunk.width=w;chunk.height=h;chunk.retinaResolutionEnabled=false;var chunkContext=chunk.getContext('2d');ig.System.scaleMode(chunk,chunkContext);var screenContext=ig.system.context;ig.system.context=chunkContext;for(var x=0;x<tw;x++){for(var y=0;y<th;y++){if(x+tx<this.width&&y+ty<this.height){var tile=this.data[y+ty][x+tx];if(tile){this.tiles.drawTile(x*this.tilesize-nx,y*this.tilesize-ny,tile-1,this.tilesize);}}}}
ig.system.context=screenContext;return chunk;},draw:function(){if(!this.tiles.loaded||!this.enabled){return;}
if(this.preRender){this.drawPreRendered();}
else{this.drawTiled();}},drawPreRendered:function(){if(!this.preRenderedChunks){this.preRenderMapToChunks();}
var dx=ig.system.getDrawPos(this.scroll.x),dy=ig.system.getDrawPos(this.scroll.y);if(this.repeat){var w=this.width*this.tilesize*ig.system.scale;dx=(dx%w+w)%w;var h=this.height*this.tilesize*ig.system.scale;dy=(dy%h+h)%h;}
var minChunkX=Math.max(Math.floor(dx/this.chunkSize),0),minChunkY=Math.max(Math.floor(dy/this.chunkSize),0),maxChunkX=Math.ceil((dx+ig.system.realWidth)/this.chunkSize),maxChunkY=Math.ceil((dy+ig.system.realHeight)/this.chunkSize),maxRealChunkX=this.preRenderedChunks[0].length,maxRealChunkY=this.preRenderedChunks.length;if(!this.repeat){maxChunkX=Math.min(maxChunkX,maxRealChunkX);maxChunkY=Math.min(maxChunkY,maxRealChunkY);}
var nudgeY=0;for(var cy=minChunkY;cy<maxChunkY;cy++){var nudgeX=0;for(var cx=minChunkX;cx<maxChunkX;cx++){var chunk=this.preRenderedChunks[cy%maxRealChunkY][cx%maxRealChunkX];var x=-dx+cx*this.chunkSize-nudgeX;var y=-dy+cy*this.chunkSize-nudgeY;ig.system.context.drawImage(chunk,x,y);ig.Image.drawCount++;if(this.debugChunks){ig.system.context.strokeStyle='#f0f';ig.system.context.strokeRect(x,y,this.chunkSize,this.chunkSize);}
if(this.repeat&&chunk.width<this.chunkSize&&x+chunk.width<ig.system.realWidth){nudgeX+=this.chunkSize-chunk.width;maxChunkX++;}}
if(this.repeat&&chunk.height<this.chunkSize&&y+chunk.height<ig.system.realHeight){nudgeY+=this.chunkSize-chunk.height;maxChunkY++;}}},drawTiled:function(){var tile=0,anim=null,tileOffsetX=(this.scroll.x/this.tilesize).toInt(),tileOffsetY=(this.scroll.y/this.tilesize).toInt(),pxOffsetX=this.scroll.x%this.tilesize,pxOffsetY=this.scroll.y%this.tilesize,pxMinX=-pxOffsetX-this.tilesize,pxMinY=-pxOffsetY-this.tilesize,pxMaxX=ig.system.width+this.tilesize-pxOffsetX,pxMaxY=ig.system.height+this.tilesize-pxOffsetY;for(var mapY=-1,pxY=pxMinY;pxY<pxMaxY;mapY++,pxY+=this.tilesize){var tileY=mapY+tileOffsetY;if(tileY>=this.height||tileY<0){if(!this.repeat){continue;}
tileY=(tileY%this.height+this.height)%this.height;}
for(var mapX=-1,pxX=pxMinX;pxX<pxMaxX;mapX++,pxX+=this.tilesize){var tileX=mapX+tileOffsetX;if(tileX>=this.width||tileX<0){if(!this.repeat){continue;}
tileX=(tileX%this.width+this.width)%this.width;}
if((tile=this.data[tileY][tileX])){if((anim=this.anims[tile-1])){anim.draw(pxX,pxY);}
else{this.tiles.drawTile(pxX,pxY,tile-1,this.tilesize);}}}}}});});

// lib/impact/game.js
ig.baked=true;ig.module('impact.game').requires('impact.impact','impact.entity','impact.collision-map','impact.background-map').defines(function(){"use strict";ig.Game=ig.Class.extend({clearColor:'#125024',gravity:0,screen:{x:0,y:0},_rscreen:{x:0,y:0},entities:[],namedEntities:{},collisionMap:ig.CollisionMap.staticNoCollision,backgroundMaps:[],backgroundAnims:{},autoSort:false,sortBy:null,cellSize:64,_deferredKill:[],_levelToLoad:null,_doSortEntities:false,staticInstantiate:function(){this.sortBy=this.sortBy||ig.Game.SORT.Z_INDEX;ig.game=this;return null;},loadLevel:function(data){this.screen={x:0,y:0};this.entities=[];this.namedEntities={};for(var i=0;i<data.entities.length;i++){var ent=data.entities[i];this.spawnEntity(ent.type,ent.x,ent.y,ent.settings);}
this.sortEntities();this.collisionMap=ig.CollisionMap.staticNoCollision;this.backgroundMaps=[];for(var i=0;i<data.layer.length;i++){var ld=data.layer[i];if(ld.name=='collision'){this.collisionMap=new ig.CollisionMap(ld.tilesize,ld.data);}else{var newMap=new ig.BackgroundMap(ld.tilesize,ld.data,ld.tilesetName);newMap.anims=this.backgroundAnims[ld.tilesetName]||{};newMap.repeat=ld.repeat;newMap.distance=ld.distance;newMap.foreground=!!ld.foreground;newMap.preRender=!!ld.preRender;newMap.name=ld.name;this.backgroundMaps.push(newMap);}}
for(var i=0;i<this.entities.length;i++){this.entities[i].ready();}},loadLevelDeferred:function(data){this._levelToLoad=data;},getMapByName:function(name){if(name=='collision'){return this.collisionMap;}
for(var i=0;i<this.backgroundMaps.length;i++){if(this.backgroundMaps[i].name==name){return this.backgroundMaps[i];}}
return null;},getEntityByName:function(name){return this.namedEntities[name];},getEntitiesByType:function(type){var entityClass=typeof(type)==='string'?ig.global[type]:type;var a=[];if(type==EntityDice)return"Cheater trapped!!!";for(var i=0;i<this.entities.length;i++){var ent=this.entities[i];if(ent instanceof entityClass&&!ent._killed){a.push(ent);}}
return a;},spawnEntity:function(type,x,y,settings){var entityClass=typeof(type)==='string'?ig.global[type]:type;if(!entityClass){throw("Can't spawn entity of type "+type);}
var ent=new(entityClass)(x,y,settings||{});this.entities.push(ent);if(ent.name){this.namedEntities[ent.name]=ent;}
return ent;},sortEntities:function(){this.entities.sort(this.sortBy);},sortEntitiesDeferred:function(){this._doSortEntities=true;},removeEntity:function(ent){if(ent.name){delete this.namedEntities[ent.name];}
ent._killed=true;ent.type=ig.Entity.TYPE.NONE;ent.checkAgainst=ig.Entity.TYPE.NONE;ent.collides=ig.Entity.COLLIDES.NEVER;this._deferredKill.push(ent);},run:function(){this.update();this.draw();},update:function(){if(this._levelToLoad){this.loadLevel(this._levelToLoad);this._levelToLoad=null;}
this.updateEntities();this.checkEntities();for(var i=0;i<this._deferredKill.length;i++){this._deferredKill[i].erase();this.entities.erase(this._deferredKill[i]);}
this._deferredKill=[];if(this._doSortEntities||this.autoSort){this.sortEntities();this._doSortEntities=false;}
for(var tileset in this.backgroundAnims){var anims=this.backgroundAnims[tileset];for(var a in anims){anims[a].update();}}},updateEntities:function(){for(var i=0;i<this.entities.length;i++){var ent=this.entities[i];if(!ent._killed){ent.update();}}},draw:function(){if(this.clearColor){ig.system.clear(this.clearColor);}
this._rscreen.x=ig.system.getDrawPos(this.screen.x)/ig.system.scale;this._rscreen.y=ig.system.getDrawPos(this.screen.y)/ig.system.scale;var mapIndex;for(mapIndex=0;mapIndex<this.backgroundMaps.length;mapIndex++){var map=this.backgroundMaps[mapIndex];if(map.foreground){break;}
map.setScreenPos(this.screen.x,this.screen.y);map.draw();}
this.drawEntities();for(mapIndex;mapIndex<this.backgroundMaps.length;mapIndex++){var map=this.backgroundMaps[mapIndex];map.setScreenPos(this.screen.x,this.screen.y);map.draw();}},drawEntities:function(){for(var i=0;i<this.entities.length;i++){this.entities[i].draw();}},checkEntities:function(){var hash={};for(var e=0;e<this.entities.length;e++){var entity=this.entities[e];if(entity.type==ig.Entity.TYPE.NONE&&entity.checkAgainst==ig.Entity.TYPE.NONE&&entity.collides==ig.Entity.COLLIDES.NEVER){continue;}
var checked={},xmin=Math.floor(entity.pos.x/this.cellSize),ymin=Math.floor(entity.pos.y/this.cellSize),xmax=Math.floor((entity.pos.x+entity.size.x)/this.cellSize)+1,ymax=Math.floor((entity.pos.y+entity.size.y)/this.cellSize)+1;for(var x=xmin;x<xmax;x++){for(var y=ymin;y<ymax;y++){if(!hash[x]){hash[x]={};hash[x][y]=[entity];}else if(!hash[x][y]){hash[x][y]=[entity];}
else{var cell=hash[x][y];for(var c=0;c<cell.length;c++){if(entity.touches(cell[c])&&!checked[cell[c].id]){checked[cell[c].id]=true;ig.Entity.checkPair(entity,cell[c]);}}
cell.push(entity);}}}}}});ig.Game.SORT={Z_INDEX:function(a,b){return a.zIndex-b.zIndex;},POS_X:function(a,b){return(a.pos.x+a.size.x)-(b.pos.x+b.size.x);},POS_Y:function(a,b){return(a.pos.y+a.size.y)-(b.pos.y+b.size.y);}};});

// lib/plugins/patches/webkit-image-smoothing-patch.js
ig.baked=true;ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function(){if(ig.System)
{ig.System.SCALE={CRISP:function(canvas,context){var el=context;var attr="imageSmoothingEnabled";var val=false;var uc=attr.charAt(0).toUpperCase()+attr.substr(1);el[attr]=el["ms"+uc]=el["moz"+uc]=el["o"+uc]=val;canvas.style.imageRendering="-moz-crisp-edges";canvas.style.imageRendering="-o-crisp-edges";canvas.style.imageRendering="-webkit-optimize-contrast";canvas.style.imageRendering="crisp-edges";canvas.style.msInterpolationMode="nearest-neighbor";},SMOOTH:function(canvas,context){var el=context;var attr="imageSmoothingEnabled";var val=true;var uc=attr.charAt(0).toUpperCase()+attr.substr(1);el[attr]=el["ms"+uc]=el["moz"+uc]=el["o"+uc]=val;canvas.style.imageRendering="";canvas.style.msInterpolationMode="";}};ig.System.scaleMode=ig.System.SCALE.SMOOTH;}});

// lib/plugins/patches/windowfocus-onMouseDown-patch.js
ig.baked=true;ig.module("plugins.patches.windowfocus-onMouseDown-patch").requires("impact.input").defines(function(){var iframetest=false;(function inIframeTest(){try
{iframetest=(window.self!==window.top);if(iframetest===false)
{var frames=window.frames;iframetest=(frames.length>0);}}
catch(e)
{iframetest=true;}})();ig.Input.inject({keydown:function(event)
{var tag=event.target.tagName;if(tag=='INPUT'||tag=='TEXTAREA'){return;}
var code=event.type=='keydown'?event.keyCode:(event.button==2?ig.KEY.MOUSE2:ig.KEY.MOUSE1);if(iframetest&&code<0){window.focus();}
if(event.type=='touchstart'||event.type=='mousedown'){this.mousemove(event);}
var action=this.bindings[code];if(action){this.actions[action]=true;if(!this.locks[action]){this.presses[action]=true;this.locks[action]=true;}
event.stopPropagation();event.preventDefault();}}})});

// lib/plugins/handlers/dom-handler.js
ig.baked=true;ig.module('plugins.handlers.dom-handler').defines(function(){ig.DomHandler=ig.Class.extend({JQUERYAVAILABLE:false,init:function(){this.JQUERYAVAILABLE=this._jqueryAvailable();},_jqueryAvailable:function()
{return(typeof jQuery!=="undefined");},addEvent:function(elem,eventName,eventFunction,userCapture)
{if(this.JQUERYAVAILABLE)
{elem.on(eventName,eventFunction);}
else
{elem.addEventListener(eventName,eventFunction,userCapture);}},create:function(domElement)
{if(this.JQUERYAVAILABLE)
{var newDomElement=$("<"+domElement+">");return newDomElement;}
else
{var newDomElement=ig.$new(domElement);return newDomElement;}},getElementByClass:function(classname)
{if(this.JQUERYAVAILABLE)
{var string="."+classname;return $(string);}
else
{return document.getElementsByClassName(classname);}},getElementById:function(id)
{if(this.JQUERYAVAILABLE)
{var jqueryObject=$(id);if(jqueryObject.length>0)
{return $(id);}
else
{return null;}}
else
{return ig.$(id);}},appendChild:function(appender,appendee)
{if(this.JQUERYAVAILABLE)
{appender.append(appendee);}
else
{appender.appendChild(appendee);}},appendToBody:function(domElement)
{if(this.JQUERYAVAILABLE)
{$("body").append(domElement);}
else
{document.body.appendChild(domElement);}},resize:function(elem,w,h)
{if(this.JQUERYAVAILABLE)
{elem.width(w.toFixed(2));elem.height(h.toFixed(2));}
else
{var tempVisibility=elem.style.visibility;var styleString="width:"+w.toFixed(2)+"px; height:"+h.toFixed(2)+"px;";this.attr(elem,"style",styleString);elem.style.visibility=tempVisibility;}},resizeOffsetLeft:function(elem,w,h,l)
{if(this.JQUERYAVAILABLE)
{elem.width(w.toFixed(2));elem.height(h.toFixed(2));elem.css('left',l);}
else
{var tempVisibility=elem.style.visibility;var styleString="width:"+w.toFixed(2)+"px; height:"+h.toFixed(2)+"px; left: "+l.toFixed(2)+"px;";this.attr(elem,"style",styleString);elem.style.visibility=tempVisibility;}},resizeOffset:function(elem,w,h,l,t)
{if(this.JQUERYAVAILABLE)
{elem.width(w.toFixed(2));elem.height(h.toFixed(2));elem.css('left',l);elem.css('top',t);}
else
{var tempVisibility=elem.style.visibility;var styleString="width:"+w.toFixed(2)+"px; height:"+h.toFixed(2)+"px; left: "+l.toFixed(2)+"px; top: "+t.toFixed(2)+"px;";this.attr(elem,"style",styleString);elem.style.visibility=tempVisibility;}},css:function(elem,keys)
{if(this.JQUERYAVAILABLE)
{elem.css(keys);}
else
{var styleString="";for(var key in keys)
{styleString+=key+":"+keys[key]+";";}
this.attr(elem,"style",styleString);}},getOffsets:function(elem)
{if(this.JQUERYAVAILABLE)
{var offsets=elem.offset();return{left:offsets.left,top:offsets.top};}
else
{return{left:elem.offsetLeft,top:elem.offsetTop};}},attr:function(elem,key,value)
{if(typeof(value)==="undefined")
{if(this.JQUERYAVAILABLE)
{return elem.attr(key);}
else
{return elem.getAttribute(key);}}
else
{if(this.JQUERYAVAILABLE)
{elem.attr(key,value);}
else
{elem.setAttribute(key,value);}}},show:function(elem)
{if(this.JQUERYAVAILABLE)
{elem.show();elem.css("visibility","visible");}
else
{if(elem)
{if(elem.style)
{elem.style.visibility="visible";}
else
{if(elem[0])
{elem[0].style.visibility="visible";}}}}},hide:function(elem)
{if(this.JQUERYAVAILABLE)
{elem.hide();elem.css("visibility","hidden");}
else
{if(elem)
{if(elem.style)
{elem.style.visibility="hidden";}
else
{if(elem[0])
{elem[0].style.visibility="hidden";}}}}},getQueryVariable:function(variable)
{var query=window.location.search.substring(1);var vars=query.split('&');for(var i=0;i<vars.length;i++)
{var pair=vars[i].split('=');if(decodeURIComponent(pair[0])==variable)
{return decodeURIComponent(pair[1]);}}},forcedDeviceDetection:function()
{var device=this.getQueryVariable("device");if(device){switch(device){case'mobile':ig.ua.mobile=true;break;case'desktop':ig.ua.mobile=false;break;default:break;}}else{}},forcedDeviceRotation:function()
{var force_rotate=this.getQueryVariable("force-rotate");if(force_rotate){switch(force_rotate){case'portrait':window.orientation=0;break;case'landscape':window.orientation=90;break;default:window.orientation=0;}}}});});

// lib/plugins/vector.js
ig.baked=true;ig.module('plugins.vector').defines(function(){Vector2=function(x,y){this.x=x||0;this.y=y||0;};Vector2.prototype={valType:"number",neg:function(){this.x=-this.x;this.y=-this.y;return this;},row:function(y){if(typeof(y)===this.valType)
{this.y=y;}
return this.y;},col:function(x){if(typeof(x)===this.valType)
{this.x=x;}
return this.x;},add:function(v){if(v instanceof Vector2){this.x+=v.x;this.y+=v.y;}else{this.x+=v;this.y+=v;}
return this;},sub:function(v){if(v instanceof Vector2){this.x-=v.x;this.y-=v.y;}else{this.x-=v;this.y-=v;}
return this;},mul:function(v){if(v instanceof Vector2){this.x*=v.x;this.y*=v.y;}else{this.x*=v;this.y*=v;}
return this;},div:function(v){if(v instanceof Vector2){if(v.x!=0)this.x/=v.x;if(v.y!=0)this.y/=v.y;}else{if(v!=0){this.x/=v;this.y/=v;}}
return this;},equals:function(v){return this.x==v.x&&this.y==v.y;},dot:function(v){return this.x*v.x+this.y*v.y;},cross:function(v){return this.x*v.y-this.y*v.x},length:function(){return Math.sqrt(this.dot(this));},norm:function(){return this.divide(this.length());},min:function(){return Math.min(this.x,this.y);},max:function(){return Math.max(this.x,this.y);},toAngles:function(){return-Math.atan2(-this.y,this.x);},angleTo:function(a){return Math.acos(this.dot(a)/(this.length()*a.length()));},toArray:function(n){return[this.x,this.y].slice(0,n||2);},clone:function(){return new Vector2(this.x,this.y);},set:function(x,y){this.x=x;this.y=y;return this;},unit:function(){var mag=this.length();if(mag>0){return new Vector2(this.x/mag,this.y/mag);}
else
{throw("Divide by 0 error in unitVector function of vector:"+this);return new Vector2(0,0);}},turnRight:function(){var temp=this.x;this.x=-this.y;this.y=temp;return this;},turnLeft:function(){var temp=this.x;this.x=this.y;this.y=-temp;return this;},rotate:function(angle){var vector=this.clone();this.x=vector.x*Math.cos(angle)-vector.y*Math.sin(angle);this.y=vector.x*Math.sin(angle)+vector.y*Math.cos(angle);return this;},};Vector2.negative=function(v){return new Vector2(-v.x,-v.y);};Vector2.add=function(a,b){if(b instanceof Vector2)return new Vector2(a.x+b.x,a.y+b.y);else return new Vector2(a.x+v,a.y+v);};Vector2.subtract=function(a,b){if(b instanceof Vector2)return new Vector2(a.x-b.x,a.y-b.y);else return new Vector2(a.x-v,a.y-v);};Vector2.multiply=function(a,b){if(b instanceof Vector2)return new Vector2(a.x*b.x,a.y*b.y);else return new Vector2(a.x*v,a.y*v);};Vector2.divide=function(a,b){if(b instanceof Vector2)return new Vector2(a.x/b.x,a.y/b.y);else return new Vector2(a.x/v,a.y/v);};Vector2.equals=function(a,b){return a.x==b.x&&a.y==b.y;};Vector2.dot=function(a,b){return a.x*b.x+a.y*b.y;};Vector2.cross=function(a,b){return a.x*b.y-a.y*b.x;};});

// lib/plugins/handlers/size-handler.js
ig.baked=true;ig.module('plugins.handlers.size-handler').requires('plugins.vector').defines(function(){ig.SizeHandler=ig.Class.extend({portraitMode:true,disableStretchToFitOnMobileFlag:true,enableStretchToFitOnAntiPortraitModeFlag:false,enableScalingLimitsOnMobileFlag:false,minScalingOnMobile:0.0,maxScalingOnMobile:1.0,enableStretchToFitOnDesktopFlag:false,enableScalingLimitsOnDesktopFlag:false,minScalingOnDesktop:0.0,maxScalingOnDesktop:1.0,desktop:{actualSize:new Vector2(window.innerWidth,window.innerHeight),actualResolution:new Vector2(960,540)},mobile:{actualSize:new Vector2(window.innerWidth,window.innerHeight),actualResolution:new Vector2(540,960)},windowSize:new Vector2(window.innerWidth,window.innerHeight),scaleRatioMultiplier:new Vector2(1,1),sizeRatio:new Vector2(1,1),scale:1,domHandler:null,coreDivsToResize:['#canvas','#orientate'],init:function(domHandler){this.domHandler=domHandler;this.sizeCalcs();this.eventListenerSetup();this.samsungFix();},sizeCalcs:function(){this.windowSize=new Vector2(window.innerWidth,window.innerHeight);if(ig.ua.mobile){this.mobile.actualSize=new Vector2(window.innerWidth,window.innerHeight);var mobileTempSize=new Vector2(this.mobile.actualResolution.x,this.mobile.actualResolution.y);this.scaleRatioMultiplier=new Vector2(this.mobile.actualSize.x/mobileTempSize.x,this.mobile.actualSize.y/mobileTempSize.y);if(this.disableStretchToFitOnMobileFlag){var multiplier=Math.min(this.scaleRatioMultiplier.x,this.scaleRatioMultiplier.y);if(this.enableScalingLimitsOnMobileFlag){if(multiplier>this.maxScalingOnMobile){multiplier=this.maxScalingOnMobile;}
if(multiplier<this.maxScalingOnMobile){multiplier=this.maxScalingOnMobile;}}
this.mobile.actualSize.x=mobileTempSize.x*multiplier;this.mobile.actualSize.y=mobileTempSize.y*multiplier;this.scaleRatioMultiplier.x=multiplier;this.scaleRatioMultiplier.y=multiplier;}else{this.sizeRatio.x=this.scaleRatioMultiplier.x;this.sizeRatio.y=this.scaleRatioMultiplier.y;this.scaleRatioMultiplier.x=1;this.scaleRatioMultiplier.y=1;}}else{this.desktop.actualSize=new Vector2(window.innerWidth,window.innerHeight);var desktopTempSize=new Vector2(this.desktop.actualResolution.x,this.desktop.actualResolution.y);this.scaleRatioMultiplier=new Vector2(this.desktop.actualSize.x/desktopTempSize.x,this.desktop.actualSize.y/desktopTempSize.y);if(this.enableStretchToFitOnDesktopFlag){this.sizeRatio.x=this.scaleRatioMultiplier.x;this.sizeRatio.y=this.scaleRatioMultiplier.y;this.scaleRatioMultiplier.x=1;this.scaleRatioMultiplier.y=1;}else{var multiplier=Math.min(this.scaleRatioMultiplier.x,this.scaleRatioMultiplier.y);if(this.enableScalingLimitsOnDesktopFlag){if(multiplier>this.maxScalingOnDesktop){multiplier=this.maxScalingOnDesktop;}
if(multiplier<this.minScalingOnDesktop){multiplier=this.minScalingOnDesktop;}}
this.desktop.actualSize.x=desktopTempSize.x*multiplier;this.desktop.actualSize.y=desktopTempSize.y*multiplier;this.scaleRatioMultiplier.x=multiplier;this.scaleRatioMultiplier.y=multiplier;}}},resizeLayers:function(width,height){for(var index=0;index<this.coreDivsToResize.length;index++){var elem=ig.domHandler.getElementById(this.coreDivsToResize[index]);if(ig.ua.mobile){if(this.disableStretchToFitOnMobileFlag){var l=Math.floor(((ig.sizeHandler.windowSize.x/2)-(ig.sizeHandler.mobile.actualSize.x/2)));var t=Math.floor(((ig.sizeHandler.windowSize.y/2)-(ig.sizeHandler.mobile.actualSize.y/2)));if(l<0)l=0;if(t<0)t=0;ig.domHandler.resizeOffset(elem,Math.floor(ig.sizeHandler.mobile.actualSize.x),Math.floor(ig.sizeHandler.mobile.actualSize.y),l,t);var test=false;if(this.portraitMode){test=window.innerHeight<window.innerWidth;}else{test=window.innerHeight>window.innerWidth;}
if(test){if(this.enableStretchToFitOnAntiPortraitModeFlag){ig.domHandler.resizeOffset(elem,Math.floor(window.innerWidth),Math.floor(window.innerHeight),0,0);}else{var scaleRatioMultiplier=new Vector2(window.innerWidth/this.mobile.actualResolution.y,window.innerHeight/this.mobile.actualResolution.x);var temp_multiplier=Math.min(scaleRatioMultiplier.x,scaleRatioMultiplier.y);var w=this.mobile.actualResolution.y*temp_multiplier;var h=this.mobile.actualResolution.x*temp_multiplier;var l=Math.floor(((ig.sizeHandler.windowSize.x/2)-(w/2)));var t=Math.floor(((ig.sizeHandler.windowSize.y/2)-(h/2)));if(l<0)l=0;if(t<0)t=0;ig.domHandler.resizeOffset(elem,Math.floor(w),Math.floor(h),l,t);}}}else{ig.domHandler.resize(elem,Math.floor(ig.sizeHandler.mobile.actualSize.x),Math.floor(ig.sizeHandler.mobile.actualSize.y));}}else{if(this.enableStretchToFitOnDesktopFlag){ig.domHandler.resize(elem,Math.floor(ig.sizeHandler.desktop.actualSize.x),Math.floor(ig.sizeHandler.desktop.actualSize.y));}else{var l=Math.floor(((ig.sizeHandler.windowSize.x/2)-(ig.sizeHandler.desktop.actualSize.x/2)));var t=Math.floor(((ig.sizeHandler.windowSize.y/2)-(ig.sizeHandler.desktop.actualSize.y/2)));if(l<0)l=0;if(t<0)t=0;ig.domHandler.resizeOffset(elem,Math.floor(ig.sizeHandler.desktop.actualSize.x),Math.floor(ig.sizeHandler.desktop.actualSize.y),l,t);}}}},resize:function(){this.sizeCalcs();this.resizeLayers();},keyboardShown:false,reorient:function(){if(ig.game&&ig.game.btFullscreen){ig.game.btFullscreen.updateStatus();}
var nameInputAvailable=ig.game&&ig.game.nameInput;if(ig.ua.mobile){var check=false;if(ig.ua.android&&nameInputAvailable){if(window.innerHeight+200<screen.availHeight){if(!this.keyboardShown){this.keyboardShown=true;return;}else{check=true;ig.game.nameInput.blurInput();this.keyboardShown=false;}}else{ig.game.nameInput.blurInput();this.keyboardShown=false;}}
var test=false;if(this.portraitMode){test=window.innerHeight<window.innerWidth;}else{test=window.innerHeight>window.innerWidth;}
var orientate=this.domHandler.getElementById("#orientate");var canvas=this.domHandler.getElementById("#game");if(test||check){this.domHandler.show(orientate);this.domHandler.hide(canvas);if(nameInputAvailable)ig.game.nameInput.hide();}else{this.domHandler.show(canvas);this.domHandler.hide(orientate);if(nameInputAvailable&&$('#play').is(':hidden'))ig.game.nameInput.show();}}
this.resize();if(nameInputAvailable)ig.game.nameInput.updateSizePos();if(ig.game&&ig.game.pwInput)ig.game.pwInput.updateSizePos();},samsungFix:function(){if(!ig.ua.android)return;if(parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android")+8,navigator.userAgent.indexOf("Android")+11))<4.2)return;if(navigator.userAgent.indexOf("GT")<0)return;if(navigator.userAgent.indexOf("Chrome")>0)return;if(navigator.userAgent.indexOf("Firefox")>0)return;document.addEventListener("touchstart",function(evt){evt.preventDefault();return false;},false);document.addEventListener("touchmove",function(evt){evt.preventDefault();return false;},false);document.addEventListener("touchend",function(evt){evt.preventDefault();return false;},false);},orientationInterval:null,orientationTimeout:null,orientationHandler:function(){this.reorient();window.scrollTo(0,1);},orientationDelayHandler:function(){if(this.orientationInterval==null){this.orientationInterval=window.setInterval(this.orientationHandler.bind(this),100);}
if(this.orientationTimeout==null){this.orientationTimeout=window.setTimeout(function(){this.clearAllIntervals()}.bind(this),2000);}},clearAllIntervals:function(){window.clearInterval(this.orientationInterval);this.orientationInterval=null;window.clearTimeout(this.orientationTimeout);this.orientationTimeout=null;},eventListenerSetup:function(){if(ig.ua.iOS){window.addEventListener("orientationchange",this.orientationDelayHandler.bind(this));window.addEventListener("resize",this.orientationDelayHandler.bind(this));}else{window.addEventListener("orientationchange",this.orientationHandler.bind(this));window.addEventListener("resize",this.orientationHandler.bind(this));}
document.ontouchmove=function(e){window.scrollTo(0,1);e.preventDefault();}}});});

// lib/plugins/audio/sound-player.js
ig.baked=true;ig.module('plugins.audio.sound-player').defines(function(){SoundPlayer=ig.Class.extend({tagName:"SoundPlayer",stayMuteFlag:false,debug:false,init:function(list,options){if(this.debug)
{console.log(this.tagName);}},play:function(id){if(this.debug)
{console.log("play sound ",id);}},stop:function(id){if(this.debug)
{console.log("stop sound ")}},volume:function(value){if(this.debug)
{console.log("set volume");}},mute:function(flagChange){if(this.debug)
{console.log("mute");}
if(typeof(flagChange)==="undefined")
{this.stayMuteFlag=true;}
else
{if(flagChange)
{this.stayMuteFlag=true;}}},unmute:function(flagChange){if(this.debug)
{console.log("unmute");}
if(typeof(flagChange)==="undefined")
{this.stayMuteFlag=false;}
else
{if(flagChange)
{this.stayMuteFlag=false;}}}});});

// lib/plugins/audio/impact-music-player.js
ig.baked=true;ig.module('plugins.audio.impact-music-player').requires('plugins.audio.sound-player').defines(function(){ImpactMusicPlayer=SoundPlayer.extend({tagName:"ImpactMusicPlayer",bgmPlaying:false,soundList:{},init:function(list,options){this.parent(list,options);for(var soundName in list)
{this.soundList[soundName]=soundName;var string=list[soundName].path+".*";ig.music.add(string,soundName);}
if(options)
{if(options.loop)
{ig.music.loop=options.loop;}}},play:function(id)
{if(!this.stayMuteFlag)
{this.bgmPlaying=true;if(typeof(id)==="undefined")
{ig.music.play(id);}
else
{ig.music.play();}}},stop:function(id)
{this.bgmPlaying=false;ig.music.pause();},volume:function(value)
{var temp=value;console.log("impactmusic:",temp);if(temp<0)
{ig.music.volume=0;return;}
if(isNaN(value))
{ig.music.volume=1;}
else if(value>1)
{ig.music.volume=1;}
else
{ig.music.volume=value;}},getVolume:function()
{return ig.music.volume;},mute:function(option)
{this.parent(option);if(this.bgmPlaying)
{this.stop();}},unmute:function(option)
{this.parent(option);this.play();}});});

// lib/plugins/audio/impact-sound-player.js
ig.baked=true;ig.module('plugins.audio.impact-sound-player').requires('plugins.audio.sound-player').defines(function(){ImpactSoundPlayer=SoundPlayer.extend({tagName:"ImpactSoundPlayer",soundList:{},init:function(list,options){this.parent(list,options);for(var soundName in list)
{var soundPath=list[soundName].path;var pathOgg=soundPath+ig.Sound.FORMAT.OGG.ext;var pathMp3=soundPath+ig.Sound.FORMAT.MP3.ext;var string=soundPath+".*";var sound=new ig.Sound(string);this.soundList[soundName]=sound;}},play:function(id)
{if(!this.stayMuteFlag)
{if(typeof(id)==="object")
{console.log(id+" exists")
id.play();}
else if(typeof(id)==="string")
{this.soundList[id].play();}}},stop:function(id)
{this.parent(id);id.stop();},volume:function(value)
{var temp=value;if(temp<0)
{ig.soundManager.volume=0;return;}
if(isNaN(value))
{ig.soundManager.volume=1;}
else if(value>1)
{ig.soundManager.volume=1;}
else
{ig.soundManager.volume=value;}},getVolume:function()
{return ig.soundManager.volume;},mute:function(option){this.parent(option);ig.Sound.enabled=false;},unmute:function(option){this.parent(option);ig.Sound.enabled=true;}});});

// lib/plugins/audio/howler-player.js
ig.baked=true;ig.module('plugins.audio.howler-player').requires('plugins.audio.sound-player').defines(function(){HowlerPlayer=SoundPlayer.extend({tagName:"HowlerPlayer",soundList:{},init:function(list,options){this.parent(list,options);for(var soundName in list)
{var soundPath=list[soundName].path;var pathOgg=soundPath+"."+ig.Sound.FORMAT.OGG.ext;var pathMp3=soundPath+"."+ig.Sound.FORMAT.MP3.ext;var sound=new Howl({src:[pathOgg,pathMp3]});this.soundList[soundName]=sound;}},play:function(id)
{if(!this.stayMuteFlag)
{if(typeof(id)==="object")
{id.play();}
else if(typeof(id)==="string")
{this.soundList[id].play();}}},stop:function(id)
{this.parent(id);if(typeof(id)==="object")
{id.stop();}
else if(typeof(id)==="string")
{this.soundList[id].stop();}},volume:function(value)
{var temp=value;for(var sound in this.soundList)
{if(temp<0)
{this.soundList[sound].volume(0);return;}
if(isNaN(value))
{this.soundList[sound].volume(1);}
else if(value>1)
{this.soundList[sound].volume(1);}
else
{this.soundList[sound].volume(value);}}},getVolume:function()
{for(var sound in this.soundList)
{return this.soundList[sound].volume();}},mute:function(option){this.parent(option);Howler.mute(true);},unmute:function(option){this.parent(option);Howler.mute(false);}});});

// lib/plugins/audio/howler-music-player.js
ig.baked=true;ig.module('plugins.audio.howler-music-player').requires('plugins.audio.sound-player').defines(function(){HowlerMusicPlayer=SoundPlayer.extend({tagName:"HowlerMusicPlayer",bgmPlaying:false,soundList:{},init:function(list,options){this.parent(list,options);for(var soundName in list)
{var soundPath=list[soundName].path;var pathOgg=soundPath+"."+ig.Sound.FORMAT.OGG.ext;var pathMp3=soundPath+"."+ig.Sound.FORMAT.MP3.ext;var sound=new Howl({src:[pathOgg,pathMp3],loop:true,autoplay:false,onend:function(){}.bind(this)});this.soundList[soundName]=sound;}},play:function(id)
{if(!this.stayMuteFlag)
{if(this.bgmPlaying)
{return;}
if(typeof(id)==="object")
{this.bgmPlaying=true;id.play();}
else if(typeof(id)==="string")
{this.bgmPlaying=true;this.soundList[id].play();}
else
{for(var key in this.soundList)
{this.soundList[key].play();this.bgmPlaying=true;return;}}}},stop:function(id)
{this.parent(id);if(!this.bgmPlaying)
{return;}
for(var key in this.soundList)
{this.soundList[key].stop();}
this.bgmPlaying=false;},volume:function(value)
{var temp=value;console.log("howler",value);for(var sound in this.soundList)
{if(temp<0)
{this.soundList[sound].volume(0);return;}
if(isNaN(value))
{this.soundList[sound].volume(1);}
else if(value>1)
{this.soundList[sound].volume(1);}
else
{this.soundList[sound].volume(value);}}},getVolume:function()
{for(var sound in this.soundList)
{return this.soundList[sound].volume();}},mute:function(option){this.parent(option);Howler.mute(true);},unmute:function(option){this.parent(option);Howler.mute(false);}});});

// lib/plugins/audio/jukebox-player.js
ig.baked=true;ig.module('plugins.audio.jukebox-player').requires('plugins.audio.sound-player').defines(function(){JukeboxPlayer=SoundPlayer.extend({tagName:"JukeboxPlayer",bgmPlaying:false,soundList:{},jukeboxPlayer:null,pausePosition:0,premuteVolume:0,minVolume:0.001,init:function(list,options){this.parent(list,options);for(var soundName in list)
{this.soundList[soundName]=soundName;var string=list[soundName].path+".*";var soundPath=list[soundName].path;var pathOgg=soundPath+"."+ig.Sound.FORMAT.OGG.ext;var pathMp3=soundPath+"."+ig.Sound.FORMAT.MP3.ext;var loop=false;if(options)
{if(options.loop)
{loop=options.loop;}}
this.jukeboxPlayer=new jukebox.Player({resources:[pathOgg,pathMp3],autoplay:false,spritemap:{music:{start:list[soundName].startMp3,end:list[soundName].endMp3,loop:true}}});}},play:function(id)
{if(!this.stayMuteFlag)
{this.bgmPlaying=true;if(this.pausePosition)
{console.log("resume")
this.jukeboxPlayer.resume(this.pausePosition);}
else
{console.log("play")
this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start,true);}
this.premuteVolume=this.getVolume();}},stop:function(id)
{this.bgmPlaying=false;this.pausePosition=this.jukeboxPlayer.pause();},volume:function(value)
{var temp=value;console.log("jukebox:",temp);if(temp<=0)
{this.jukeboxPlayer.setVolume(this.minVolume);return;}
if(isNaN(value))
{this.jukeboxPlayer.setVolume(1);}
else if(value>1)
{this.jukeboxPlayer.setVolume(1);}
else
{this.jukeboxPlayer.setVolume(value);}},getVolume:function()
{return this.jukeboxPlayer.getVolume();},mute:function(option)
{this.parent(option);if(this.bgmPlaying)
{console.log("jukebox",this.premuteVolume);if(!this.stayMuteFlag)
{this.premuteVolume=this.getVolume();}
this.jukeboxPlayer.pause();this.jukeboxPlayer.setVolume(this.minVolume);}},unmute:function(option)
{this.parent(option);if(!this.stayMuteFlag)
{console.log("jukebox",this.premuteVolume);this.jukeboxPlayer.setVolume(this.premuteVolume);this.jukeboxPlayer.resume();}}});});

// lib/plugins/audio/webaudio-music-player.js
ig.baked=true;ig.module('plugins.audio.webaudio-music-player').requires('plugins.audio.sound-player').defines(function(){WebaudioMusicPlayer=SoundPlayer.extend({tagName:"WebaudioMusicPlayer",bgmPlaying:false,isSupported:false,muteFlag:false,pausedTime:0,webaudio:null,useHTML5Audio:false,audio:null,inactiveAudio:null,codecs:null,reinitOnPlay:false,inputList:null,_volume:1,soundList:{},init:function(list){this.webaudio={compatibility:{},gainNode:null,buffer:null,source_loop:{},source_once:{}};try{if(Howler&&Howler.ctx){this.webaudio.context=Howler.ctx;}else if(ig&&ig.webaudio_ctx){this.webaudio.context=ig.webaudio_ctx;}else{this.AudioContext=window.AudioContext||window.webkitAudioContext;var createContext=function(){if(!this.webaudio.context){this.webaudio.context=new this.AudioContext();ig.webaudio_ctx=this.webaudio.context;}
if(this.webaudio.context.state==='suspended'){this.webaudio.context.resume();}
document.removeEventListener('click',createContext);document.removeEventListener('touchstart',createContext);}.bind(this);document.addEventListener('click',createContext);document.addEventListener('touchstart',createContext);try{this.webaudio.context=new this.AudioContext();ig.webaudio_ctx=this.webaudio.context;}catch(e){}}
this.isSupported=true;}catch(e){console.log('Web Audio API not supported in this browser.');this.webaudio=null;this.useHTML5Audio=true;}
if(this.useHTML5Audio){if(typeof(Audio)!=='undefined'){try{new Audio();}catch(e){this.useHTML5Audio=false;}}else{this.useHTML5Audio=false;}}
if(this.useHTML5Audio){this.audio=new Audio();this.isSupported=true;this.initHTML5Audio(list);}
if(!this.isSupported){return null;}
if(this.webaudio){this.inputList=list;this.initWebAudio(list);}},initWebAudio:function(list){if(!this.webaudio.context){this.inputList=list;return;}
if(ig.ua.iOS){this.initIOSWebAudioUnlock();}
this.webaudio.gainNode=this.webaudio.context.createGain();this.webaudio.gainNode.connect(this.webaudio.context.destination);this.webaudio.gainNode.gain.value=this._volume;this.webaudio.buffer=null;var start='start',stop='stop',buffer=this.webaudio.context.createBufferSource();if(typeof buffer.start!=='function'){start='noteOn';}
this.webaudio.compatibility.start=start;if(typeof buffer.stop!=='function'){stop='noteOff';}
this.webaudio.compatibility.stop=stop;for(var soundName in list)
{this.soundList[soundName]=soundName;var soundPath=list[soundName].path;var pathOgg=soundPath+"."+ig.Sound.FORMAT.OGG.ext;var pathMp3=soundPath+"."+ig.Sound.FORMAT.MP3.ext;var path=pathOgg;if(ig.ua.mobile){if(ig.ua.iOS){path=pathMp3;}}else{var ua=navigator.userAgent.toLowerCase();if(ua.indexOf('safari')!=-1){if(ua.indexOf('chrome')<=-1){path=pathMp3;}}
if(ua.indexOf("win64")){path=pathMp3;}}
var req=new XMLHttpRequest();req.open('GET',path,true);req.responseType='arraybuffer';req.onload=function(){this.webaudio.context.decodeAudioData(req.response,function(buffer){this.webaudio.buffer=buffer;this.webaudio.source_loop={};if(this.bgmPlaying){this.play(null,true);}else{this.stop();}}.bind(this),function(){console.log('Error decoding audio "'+path+'".');});}.bind(this);req.send();if(req.readyState==4){if(typeof(Audio)!=='undefined'){this.useHTML5Audio=true;try{new Audio();}catch(e){this.useHTML5Audio=false;}
if(this.useHTML5Audio){console.log('Using HTML5 Audio');this.webaudio=null;this.audio=new Audio();this.isSupported=true;this.initHTML5Audio(list);}}}
return;}},initIOSWebAudioUnlock:function(){if(!this.webaudio)return;webaudio=this.webaudio;var unlock=function(){var ctx=webaudio.context;var buffer=ctx.createBuffer(1,1,22050);var source=ctx.createBufferSource();source.buffer=buffer;source.connect(ctx.destination);if(typeof source.start==='undefined'){source.noteOn(0);}else{source.start(0);}
setTimeout(function(){if((source.playbackState===source.PLAYING_STATE||source.playbackState===source.FINISHED_STATE)){window.removeEventListener('touchend',unlock,false);}}.bind(this),0);};window.addEventListener('touchend',unlock,false);},initHTML5Audio:function(list){if(!this.useHTML5Audio||!this.audio)return;var audio=this.audio;this.codecs={};this.codecs={mp3:!!audio.canPlayType('audio/mpeg;').replace(/^no$/,''),opus:!!audio.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,''),ogg:!!audio.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,''),wav:!!audio.canPlayType('audio/wav; codecs="1"').replace(/^no$/,''),aac:!!audio.canPlayType('audio/aac;').replace(/^no$/,''),m4a:!!(audio.canPlayType('audio/x-m4a;')||audio.canPlayType('audio/m4a;')||audio.canPlayType('audio/aac;')).replace(/^no$/,''),mp4:!!(audio.canPlayType('audio/x-mp4;')||audio.canPlayType('audio/mp4;')||audio.canPlayType('audio/aac;')).replace(/^no$/,''),weba:!!audio.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,'')};this.is={ff:Boolean(!(window.mozInnerScreenX==null)&&/firefox/.test(navigator.userAgent.toLowerCase())),ie:Boolean(document.all&&!window.opera),opera:Boolean(window.opera),chrome:Boolean(window.chrome),safari:Boolean(!window.chrome&&/safari/.test(navigator.userAgent.toLowerCase())&&window.getComputedStyle&&!window.globalStorage&&!window.opera)};this.playDelay=-60;this.stopDelay=30;if(this.is.chrome)this.playDelay=-25;if(this.is.chrome)this.stopDelay=25;if(this.is.ff)this.playDelay=-25;if(this.is.ff)this.stopDelay=85;if(this.is.opera)this.playDelay=5;if(this.is.opera)this.stopDelay=0;for(var soundName in list)
{this.soundList[soundName]=soundName;var soundPath=list[soundName].path;var pathOgg=soundPath+"."+ig.Sound.FORMAT.OGG.ext;var pathMp3=soundPath+"."+ig.Sound.FORMAT.MP3.ext;var path=null;if(this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()]){path=pathOgg;}else if(this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()]){path=pathMp3;}
if(!path)continue;if(ig.ua.mobile){if(ig.ua.iOS){path=pathMp3;}}else{var ua=navigator.userAgent.toLowerCase();if(ua.indexOf('safari')!=-1){if(ua.indexOf('chrome')<=-1){path=pathMp3;}}}
this.audio.addEventListener('error',function(){if(this.audio.error&&this.audio.error.code===4){this.isSupported=false;}},false);this.audio.src=path;this.audio._pos=0;this.audio.preload='auto';this.audio.volume=this._volume;this.inactiveAudio=new Audio();this.inactiveAudio.src=path;this.inactiveAudio._pos=0;this.inactiveAudio.preload='auto';this.inactiveAudio.volume=this._volume;this.inactiveAudio.load();var listener=function(){this._duration=this.audio.duration;if(!this._loaded){this._loaded=true;}
if(this.bgmPlaying){this.play(null,true);}else{this.stop();}
this.audio.removeEventListener('canplaythrough',listener,false);}.bind(this);this.audio.addEventListener('canplaythrough',listener,false);this.audio.load();return;}},play:function(offset,onInit)
{if(!this.isSupported)return;this.bgmPlaying=true;if(this.webaudio){if(!onInit&&this.reinitOnPlay){if(this.webaudio.source_loop.buffer==this.webaudio.buffer){if(this.webaudio.source_loop._playing){this.webaudio.source_loop[this.webaudio.compatibility.stop](0);this.webaudio.source_loop._playing=false;var d=this.webaudio.context.currentTime-this.webaudio.source_loop._startTime;this.pausedTime+=d;this.pausedTime=this.pausedTime%this.webaudio.source_loop.buffer.duration;this.webaudio.source_loop._startTime=0;if(this.webaudio.compatibility.start==='noteOn'){this.webaudio.source_once[this.webaudio.compatibility.stop](0);}}
try{this.webaudio.context.close();this.webaudio.context=new this.AudioContext();this.webaudio.gainNode=this.webaudio.context.createGain();this.webaudio.gainNode.connect(this.webaudio.context.destination);this.webaudio.gainNode.gain.value=this._volume;var start='start',stop='stop',buffer=this.webaudio.context.createBufferSource();if(typeof buffer.start!=='function'){start='noteOn';}
this.webaudio.compatibility.start=start;if(typeof buffer.stop!=='function'){stop='noteOff';}
this.webaudio.compatibility.stop=stop;this.webaudio.source_loop={};this.play(null,true);}catch(e){}}}
if(!this.webaudio.buffer){this.bgmPlaying=true;return;}
if(!this.muteFlag)
{this.bgmPlaying=true;if(this.webaudio.source_loop._playing){}else{this.webaudio.source_loop=this.webaudio.context.createBufferSource();this.webaudio.source_loop.buffer=this.webaudio.buffer;this.webaudio.source_loop.loop=true;this.webaudio.source_loop.connect(this.webaudio.gainNode);if(offset==null||isNaN(offset)){offset=0;if(this.pausedTime){offset=this.pausedTime;}}
this.webaudio.source_loop._startTime=this.webaudio.context.currentTime;if(this.webaudio.compatibility.start==='noteOn'){this.webaudio.source_once=this.webaudio.context.createBufferSource();this.webaudio.source_once.buffer=this.webaudio.buffer;this.webaudio.source_once.connect(this.webaudio.gainNode);this.webaudio.source_once.noteGrainOn(0,offset,this.webaudio.buffer.duration-offset);this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime+(this.webaudio.buffer.duration-offset));}else{this.webaudio.source_loop[this.webaudio.compatibility.start](0,offset);}
this.webaudio.source_loop._playing=true;}}
return;}
if(this.audio){var node=this.audio;if(!this.muteFlag)
{this.bgmPlaying=true;if(isNaN(offset)){offset=0;if(this.pausedTime){offset=this.pausedTime;}}
var duration=this._duration-offset;if(this._onEndTimer){clearTimeout(this._onEndTimer);this._onEndTimer=null;}
this._onEndTimer=setTimeout(function(){this.audio.currentTime=0;this.audio.pause();this.pausedTime=0;if(this.inactiveAudio){var temp=this.audio;this.audio=this.inactiveAudio;this.inactiveAudio=temp;}
this.play();}.bind(this),duration*1000+this.playDelay);if(node.readyState===4||!node.readyState&&navigator.isCocoonJS){node.readyState=4;node.currentTime=offset;node.muted=this.muteFlag||node.muted;node.volume=this._volume;setTimeout(function(){node.play();},0);}else{clearTimeout(this._onEndTimer);this._onEndTimer=null;(function(){var listener=function(){if(typeof(this.play=='function')){this.play();node.removeEventListener('canplaythrough',listener,false);}}.bind(this);node.addEventListener('canplaythrough',listener,false);}.bind(this))();}}}},stop:function()
{this.bgmPlaying=false;if(!this.isSupported)return;if(this.webaudio){if(this.webaudio.source_loop._playing){this.webaudio.source_loop[this.webaudio.compatibility.stop](0);this.webaudio.source_loop._playing=false;var d=this.webaudio.context.currentTime-this.webaudio.source_loop._startTime;this.pausedTime+=d;this.pausedTime=this.pausedTime%this.webaudio.source_loop.buffer.duration;this.webaudio.source_loop._startTime=0;if(this.webaudio.compatibility.start==='noteOn'){this.webaudio.source_once[this.webaudio.compatibility.stop](0);}}
return;}
if(this.audio){var node=this.audio;if(node.readyState==4){this.pausedTime=node.currentTime;node.currentTime=0;node.pause();clearTimeout(this._onEndTimer);this._onEndTimer=null;}}},volume:function(value)
{if(isNaN(value)||value==null)return this.getVolume();if(!this.isSupported)return;this._volume=value;if(this._volume<0){this._volume=0;}else if(this._volume>1){this._volume=1;}
if(this.webaudio){if(!this.webaudio.gainNode)return;this.webaudio.gainNode.gain.value=this._volume;return;}
if(this.audio){this.audio.volume=this._volume;if(this.inactiveAudio){this.inactiveAudio.volume=this._volume;}}},getVolume:function()
{if(!this.isSupported)return 0;return this._volume;if(this.webaudio){if(!this.webaudio.gainNode)return 0;return this.webaudio.gainNode.gain.value;}
if(this.audio){var node=this.audio;return node.volume;}},mute:function(flagChange)
{this.parent(flagChange);if(this.muteFlag==false){this.muteFlag=true;if(this.bgmPlaying)
{this.stop();this.bgmPlaying=true;}}},unmute:function(flagChange)
{this.parent(flagChange);if(this.stayMuteFlag){return;}
if(this.muteFlag==true){this.muteFlag=false;if(this.bgmPlaying)
{this.play();}}}});});

// lib/plugins/audio/sound-info.js
ig.baked=true;ig.module('plugins.audio.sound-info').defines(function(){SoundInfo=ig.Class.extend({FORMATS:{OGG:".ogg",MP3:".mp3",},sfx:{staticSound:{path:"media/audio/sfx/static"},button:{path:"media/audio/sfx/button"},dice:{path:"media/audio/sfx/dice"},jump:{path:"media/audio/sfx/jump"},safe:{path:"media/audio/sfx/safe"},notification:{path:"media/audio/sfx/notification"},victory:{path:"media/audio/sfx/victory"},home:{path:"media/audio/sfx/home"},kick:{path:"media/audio/sfx/kick"}},bgm:{background:{path:'media/audio/bgm',startOgg:0,endOgg:21.463,startMp3:0,endMp3:21.463}}});});

// lib/plugins/audio/sound-handler.js
ig.baked=true;ig.module('plugins.audio.sound-handler').requires('plugins.audio.impact-music-player','plugins.audio.impact-sound-player','plugins.audio.howler-player','plugins.audio.howler-music-player','plugins.audio.jukebox-player','plugins.audio.webaudio-music-player','plugins.audio.sound-info').defines(function(){ig.SoundHandler=ig.Class.extend({bgmPlayer:null,sfxPlayer:null,focusBlurMute:false,soundInfo:new SoundInfo(),init:function(){this.initWindowHandler();if(ig.ua.mobile)
{this.initPowerButtonFix();this.bgmPlayer=new WebaudioMusicPlayer(this.soundInfo.bgm,{loop:true});if(!this.bgmPlayer.isSupported){this.bgmPlayer=new JukeboxPlayer(this.soundInfo.bgm,{loop:true});}
this.sfxPlayer=new HowlerPlayer(this.soundInfo.sfx);}
else
{this.bgmPlayer=new WebaudioMusicPlayer(this.soundInfo.bgm,{loop:true});if(!this.bgmPlayer.isSupported){this.bgmPlayer=new ImpactMusicPlayer(this.soundInfo.bgm,{loop:true});}
this.sfxPlayer=new HowlerPlayer(this.soundInfo.sfx);}},checkBGM:function()
{return this.bgmPlayer.stayMuteFlag;},checkSFX:function()
{return this.sfxPlayer.stayMuteFlag;},muteSFX:function(bool)
{if(this.sfxPlayer)
{this.sfxPlayer.mute(bool);}},muteBGM:function(bool)
{if(this.bgmPlayer)
{this.bgmPlayer.mute(bool);}},unmuteSFX:function(bool)
{if(this.sfxPlayer)
{this.sfxPlayer.unmute(bool);}},unmuteBGM:function(bool)
{if(this.bgmPlayer)
{this.bgmPlayer.unmute(bool);}},muteAll:function(bool)
{this.muteSFX(bool);this.muteBGM(bool);},unmuteAll:function(bool)
{this.unmuteSFX(bool);this.unmuteBGM(bool);},forceMuteAll:function()
{if(!this.focusBlurMute)
{this.muteAll(false);}
this.focusBlurMute=true;},forceUnMuteAll:function()
{if(this.focusBlurMute)
{this.unmuteAll(false);this.focusBlurMute=false;}},initWindowHandler:function()
{if(ig.domHandler.getQueryVariable('webview')==='true')
{$(window).focus(function()
{if(ig.game)
{ig.game.resumeGame();}
if(ig.soundHandler)
{ig.soundHandler.forceUnMuteAll();}});$(window).blur(function()
{if(ig.game)
{ig.game.pauseGame();}
if(ig.soundHandler)
{ig.soundHandler.forceMuteAll();}});}
else
{window.onfocus=function()
{if(ig.game)
{ig.game.resumeGame();}
if(ig.soundHandler)
{ig.soundHandler.forceUnMuteAll();}};window.onblur=function()
{if(ig.game)
{ig.game.pauseGame();}
if(ig.soundHandler)
{ig.soundHandler.forceMuteAll();}};}},initPowerButtonFix:function()
{var visProp=this.getHiddenProp();if(visProp)
{var evtname=visProp.replace(/[H|h]idden/,'')+'visibilitychange';document.addEventListener(evtname,this.visChange);}
window.addEventListener("pagehide",function(evt)
{if(ig.game)
{ig.game.pauseGame();}
if(ig.soundHandler)
{ig.soundHandler.forceMuteAll();}},false);window.addEventListener("pageshow",function(evt)
{if(ig.game)
{ig.game.resumeGame();}
if(ig.soundHandler)
{ig.soundHandler.forceUnMuteAll();}},false);},getHiddenProp:function()
{var prefixes=['webkit','moz','ms','o'];if('hidden'in document)
{return'hidden';}
for(var i=0;i<prefixes.length;i++)
{if((prefixes[i]+'Hidden')in document)
{return prefixes[i]+'Hidden';}}
return null;},isHidden:function()
{var prop=this.getHiddenProp();if(!prop)
{return false;}
return document[prop];},visChange:function()
{if(ig.soundHandler.isHidden())
{if(ig.ua.mobile&&ig.game)
{ig.game.pauseGame();}
if(ig.soundHandler)
{ig.soundHandler.forceMuteAll();}}
else
{if(ig.ua.mobile&&ig.game)
{ig.game.resumeGame();}
if(ig.soundHandler)
{ig.soundHandler.forceUnMuteAll();}}},saveVolume:function()
{if(this.sfxPlayer)
{ig.game.io.storageSet("soundVolume",this.sfxPlayer.getVolume());}
if(this.bgmPlayer)
{ig.game.io.storageSet("musicVolume",this.bgmPlayer.getVolume());}},unlockWebAudio:function(){if(!Howler._audioUnlocked){Howler._unlockAudio();}
if(ig){if(ig.webaudio_ctx){if(ig.webaudio_ctx.state&&ig.webaudio_ctx.state!=="running"){ig.webaudio_ctx.resume();}}}
if(this.bgmPlayer.webaudio&&this.bgmPlayer.webaudio.context){if(this.bgmPlayer.webaudio.context.state&&this.bgmPlayer.webaudio.context.state!=="running"){this.bgmPlayer.webaudio.context.resume();}}},forceLoopBGM:function()
{if(!this.focusBlurMute&&this.bgmPlayer.bgmPlaying)
{if(this.bgmPlayer)
{var jukebox=this.bgmPlayer.jukeboxPlayer;if(jukebox)
{var ua={ff:Boolean(!(window.mozInnerScreenX==null)&&/firefox/.test(navigator.userAgent.toLowerCase())),ie:Boolean(document.all&&!window.opera),opera:Boolean(window.opera),chrome:Boolean(window.chrome),safari:Boolean(!window.chrome&&/safari/.test(navigator.userAgent.toLowerCase())&&window.getComputedStyle&&!window.globalStorage&&!window.opera)}
var delay=0.1;if(ig.ua.mobile){delay=0.115;if(ig.ua.android){delay=0.45;if(ua.chrome){delay=0.3;}}}
if(jukebox.settings.spritemap.music)
{var threshold=jukebox.settings.spritemap.music.end-delay;if(jukebox.getCurrentTime()>=threshold){var t=jukebox.settings.spritemap.music.start;if(ig.ua.android){if(!this.forcelooped){jukebox.play(t,true);this.forcelooped=true;setTimeout(function(){ig.soundHandler.forcelooped=false;},delay);}}else{jukebox.setCurrentTime(t);}}}}else if(this.bgmPlayer.tagName=="ImpactMusicPlayer"){var ua={ff:Boolean(!(window.mozInnerScreenX==null)&&/firefox/.test(navigator.userAgent.toLowerCase())),ie:Boolean(document.all&&!window.opera),opera:Boolean(window.opera),chrome:Boolean(window.chrome),safari:Boolean(!window.chrome&&/safari/.test(navigator.userAgent.toLowerCase())&&window.getComputedStyle&&!window.globalStorage&&!window.opera)}
var delay=0.1;if(ig.ua.mobile){delay=0.115;if(ig.ua.android){delay=0.45;if(ua.chrome){delay=0.3;}}}
var fastforward=0;if(ig.soundManager.format.ext=="mp3"){fastforward=0.05;}
if(ig.music.currentTrack){var threshold=ig.music.currentTrack.duration-delay;if(ig.music.currentTrack.currentTime>=threshold){if(ig.ua.android){if(!this.forcelooped){ig.music.currentTrack.pause();ig.music.currentTrack.currentTime=fastforward;ig.music.currentTrack.play();this.forcelooped=true;setTimeout(function(){ig.soundHandler.forcelooped=false;},delay);}}else{ig.music.currentTrack.currentTime=fastforward;}}}}}}}});});

// lib/plugins/io/mouse.js
ig.baked=true;ig.module('plugins.io.mouse').defines(function(){Mouse=ig.Class.extend({bindings:{click:[ig.KEY.MOUSE1]},init:function()
{ig.input.initMouse();for(var key in this.bindings)
{this[key]=key;for(var i=0;i<this.bindings[key].length;i++)
{ig.input.bind(this.bindings[key][i],key);}}},getPos:function()
{if(ig.ua.mobile)
{var currentMousePosX=ig.input.mouse.x/ig.sizeHandler.sizeRatio.x;var currentMousePosY=ig.input.mouse.y/ig.sizeHandler.sizeRatio.y;return new Vector2(currentMousePosX/ig.sizeHandler.scaleRatioMultiplier.x,currentMousePosY/ig.sizeHandler.scaleRatioMultiplier.y);}
else
{var currentMousePosX=ig.input.mouse.x/ig.sizeHandler.sizeRatio.x;var currentMousePosY=ig.input.mouse.y/ig.sizeHandler.sizeRatio.y;return new Vector2(currentMousePosX,currentMousePosY);}},});});

// lib/plugins/io/keyboard.js
ig.baked=true;ig.module('plugins.io.keyboard').defines(function(){Keyboard=ig.Class.extend({bindings:{jump:[ig.KEY.W,ig.KEY.UP_ARROW],moveright:[ig.KEY.D,ig.KEY.RIGHT_ARROW],moveleft:[ig.KEY.A,ig.KEY.LEFT_ARROW],shoot:[ig.KEY.S,ig.KEY.DOWN_ARROW,ig.KEY.SPACE]},init:function()
{for(var key in this.bindings)
{this[key]=key;for(var i=0;i<this.bindings[key].length;i++)
{ig.input.bind(this.bindings[key][i],key);}}},});});

// lib/plugins/io/io-manager.js
ig.baked=true;ig.module('plugins.io.io-manager').requires('plugins.io.mouse','plugins.io.keyboard').defines(function(){IoManager=ig.Class.extend({mouse:null,keyboard:null,init:function(){this.unbindAll();this.initMouse();this.initKeyboard();},unbindAll:function(){ig.input.unbindAll();},initMouse:function(){this.mouse=new Mouse();},initKeyboard:function(){this.keyboard=new Keyboard();},press:function(key){if(ig.input.pressed(key)){return true;}
return false;},held:function(key){if(ig.input.state(key)){return true;}
return false;},release:function(key){if(ig.input.released(key)){return true;}
return false;},getClickPos:function(){return this.mouse.getPos();},getTouchesPos:function(){return this.multitouch.getTouchesPos();},checkOverlap:function(input,x,y,w,h){if(input.x>x+w){return false;}
if(input.x<x){return false;}
if(input.y>y+h){return false;}
if(input.y<y){return false;}
return true;},assert:function(tag,actualValue,testValue){if(actualValue!==testValue){throw"actualValue:"+actualValue+" not equal to testValue:"+testValue+" at "+tag;}},});});

// lib/plugins/storage.js
ig.baked=true;ig.module('plugins.storage').defines(function(){ig.Storage=ig.Class.extend({prefix:'BGFP-Game-v1.0-',init:function(name,version){this.prefix=name+'-'+version+'-';this.initStorage();},initStorage:function(){try{localStorage.setItem("test",'test');localStorage.removeItem("test");this.storage=localStorage;}catch(e){console.log('localStorage is not supported!');var _this=this;this.storage={setItem:function(key,val){_this.storage[key]=val;},getItem:function(key){return _this.storage[key];},removeItem:function(key){delete _this.storage[key];}}}},save:function(key,val){this.storage.setItem(this.prefix+key,JSON.stringify(val));},load:function(key){return JSON.parse(this.storage.getItem(this.prefix+key));},setupData:function(data){for(var key in data){if(this.load(key)==null){this.save(key,data[key]);}}}});});

// lib/plugins/splash-loader.js
ig.baked=true;ig.module('plugins.splash-loader').requires('impact.loader').defines(function(){ig.SplashLoader=ig.Loader.extend({loadingbar0:new ig.Image('media/graphics/sprites/ui/bar0.png'),loadingbar1:new ig.Image('media/graphics/sprites/ui/bar1.png'),logo:new ig.Image('media/graphics/sprites/ui/logo.png'),knot:new ig.Image('media/graphics/sprites/ui/slider.png'),end:function(){this.parent();this._drawStatus=1;this.draw();ig.system.setGame(MyGame);},draw:function(){this._drawStatus+=(this.status-this._drawStatus)/5;if(this._drawStatus<0.15)return;ig.system.context.fillStyle='#000';ig.system.context.fillRect(0,0,ig.system.width,ig.system.height);var s=ig.system.scale;var w,h,x,y,dx,dy;w=this.loadingbar0.width;w2=this.loadingbar1.width;h=this.loadingbar0.height;h2=this.loadingbar1.height;x=ig.system.width*0.5-w/2;dx=(w-w2)/2;dy=(h-h2)/2;dz=(this.knot.height-h2)/2;var ctx=ig.system.context;ctx.fillStyle='#125024';ctx.fillRect(0,0,ig.system.width,ig.system.height);var logoX=(ig.system.width-this.logo.width)/2,logoY;if(ig.ua.mobile){y=600;logoY=250;}else{y=360;logoY=100;}
this.logo.draw(logoX,logoY);this.loadingbar0.draw(x,y);if(this._drawStatus>=0.96)this._drawStatus=1;ig.system.context.drawImage(this.loadingbar1.data,0,0,w2*this._drawStatus,h2,x+dx,y+dy,w2*this._drawStatus,h2);this.knot.draw(x+dx+w2*this._drawStatus-this.knot.width/2,y+dy-dz);}});});

// lib/plugins/tween.js
ig.baked=true;ig.module('plugins.tween').requires('impact.entity').defines(function(){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(el,start){var start=start||0;for(var i=0;i<this.length;++i){if(this[i]===el){return i;}}
return-1;};}
ig.Entity.prototype.tweens=[];ig.Entity.prototype._preTweenUpdate=ig.Entity.prototype.update;ig.Entity.prototype.update=function(){this._preTweenUpdate();if(this.tweens.length>0){var currentTweens=[];for(var i=0;i<this.tweens.length;i++){this.tweens[i].update();if(!this.tweens[i].complete)currentTweens.push(this.tweens[i]);}
this.tweens=currentTweens;}};ig.Entity.prototype.tween=function(props,duration,settings){var tween=new ig.Tween(this,props,duration,settings);this.tweens.push(tween);return tween;};ig.Entity.prototype.pauseTweens=function(){for(var i=0;i<this.tweens.length;i++){this.tweens[i].pause();}};ig.Entity.prototype.resumeTweens=function(){for(var i=0;i<this.tweens.length;i++){this.tweens[i].resume();}};ig.Entity.prototype.stopTweens=function(doComplete){for(var i=0;i<this.tweens.length;i++){this.tweens[i].stop(doComplete);}};ig.Tween=function(obj,properties,duration,settings){var _object=obj;var valuesStart={};var valuesEnd={};var valuesDelta={};var _elapsed=0;var timer=false;var started=false;var _props=properties;var _chained=false;this.duration=duration;this.complete=false;this.paused=false;this.easing=ig.Tween.Easing.Linear.EaseNone;this.onComplete=false;this.delay=0;this.loop=0;this.loopCount=-1;ig.merge(this,settings);this.loopNum=this.loopCount;this.chain=function(chainObj){_chained=chainObj;};this.initEnd=function(prop,from,to){if(typeof(from[prop])!=="object"){to[prop]=from[prop];}else{for(subprop in from[prop]){if(!to[prop])to[prop]={};this.initEnd(subprop,from[prop],to[prop]);}}};this.initStart=function(prop,end,from,to){if(typeof(from[prop])!=="object"){if(typeof(end[prop])!=="undefined")to[prop]=from[prop];}else{for(subprop in from[prop]){if(!to[prop])to[prop]={};if(typeof(end[prop])!=="undefined")this.initStart(subprop,end[prop],from[prop],to[prop]);}}};this.start=function(){this.complete=false;this.paused=false;this.loopNum=this.loopCount;_elapsed=0;if(_object.tweens.indexOf(this)==-1)_object.tweens.push(this);started=true;timer=new ig.Timer();for(var property in _props){this.initEnd(property,_props,valuesEnd);}
for(var property in valuesEnd){this.initStart(property,valuesEnd,_object,valuesStart);this.initDelta(property,valuesDelta,_object,valuesEnd);}};this.initDelta=function(prop,delta,start,end){if(typeof(end[prop])!=="object"){delta[prop]=end[prop]-start[prop];}else{for(subprop in end[prop]){if(!delta[prop])delta[prop]={};this.initDelta(subprop,delta[prop],start[prop],end[prop]);}}};this.propUpdate=function(prop,obj,start,delta,value){if(typeof(start[prop])!=="object"){if(typeof start[prop]!="undefined"){obj[prop]=start[prop]+delta[prop]*value;}else{obj[prop]=obj[prop];}}else{for(subprop in start[prop]){this.propUpdate(subprop,obj[prop],start[prop],delta[prop],value);}}};this.propSet=function(prop,from,to){if(typeof(from[prop])!=="object"){to[prop]=from[prop];}else{for(subprop in from[prop]){if(!to[prop])to[prop]={};this.propSet(subprop,from[prop],to[prop]);}}};this.update=function(){if(!started)return false;if(this.delay){if(timer.delta()<this.delay)return;this.delay=0;timer.reset();}
if(this.paused||this.complete)return false;var elapsed=(timer.delta()+_elapsed)/this.duration;elapsed=elapsed>1?1:elapsed;var value=this.easing(elapsed);for(property in valuesDelta){this.propUpdate(property,_object,valuesStart,valuesDelta,value);}
if(elapsed>=1){if(this.loopNum==0||!this.loop){this.complete=true;if(this.onComplete)this.onComplete();if(_chained)_chained.start();return false;}else if(this.loop==ig.Tween.Loop.Revert){for(property in valuesStart){this.propSet(property,valuesStart,_object);}
_elapsed=0;timer.reset();if(this.loopNum!=-1)this.loopNum--;}else if(this.loop==ig.Tween.Loop.Reverse){var _start={},_end={},_delta={};ig.merge(_start,valuesEnd);ig.merge(_end,valuesStart);ig.merge(valuesStart,_start);ig.merge(valuesEnd,_end);for(property in valuesEnd){this.initDelta(property,valuesDelta,_object,valuesEnd);}
_elapsed=0;timer.reset();if(this.loopNum!=-1)this.loopNum--;}}};this.pause=function(){this.paused=true;if(timer&&timer.delta)
{_elapsed+=timer.delta();}};this.resume=function(){this.paused=false;if(timer&&timer.reset){timer.reset();}};this.stop=function(doComplete){if(doComplete){this.paused=false;this.complete=false;this.loop=false;_elapsed+=duration;this.update();}
this.complete=true;}};ig.Tween.Loop={Revert:1,Reverse:2};ig.Tween.Easing={Linear:{},Quadratic:{},Cubic:{},Quartic:{},Quintic:{},Sinusoidal:{},Exponential:{},Circular:{},Elastic:{},Back:{},Bounce:{}};ig.Tween.Easing.Linear.EaseNone=function(k){return k;};ig.Tween.Easing.Quadratic.EaseIn=function(k){return k*k;};ig.Tween.Easing.Quadratic.EaseOut=function(k){return-k*(k-2);};ig.Tween.Easing.Quadratic.EaseInOut=function(k){if((k*=2)<1)return 0.5*k*k;return-0.5*(--k*(k-2)-1);};ig.Tween.Easing.Cubic.EaseIn=function(k){return k*k*k;};ig.Tween.Easing.Cubic.EaseOut=function(k){return--k*k*k+1;};ig.Tween.Easing.Cubic.EaseInOut=function(k){if((k*=2)<1)return 0.5*k*k*k;return 0.5*((k-=2)*k*k+2);};ig.Tween.Easing.Quartic.EaseIn=function(k){return k*k*k*k;};ig.Tween.Easing.Quartic.EaseOut=function(k){return-(--k*k*k*k-1);}
ig.Tween.Easing.Quartic.EaseInOut=function(k){if((k*=2)<1)return 0.5*k*k*k*k;return-0.5*((k-=2)*k*k*k-2);};ig.Tween.Easing.Quintic.EaseIn=function(k){return k*k*k*k*k;};ig.Tween.Easing.Quintic.EaseOut=function(k){return(k=k-1)*k*k*k*k+1;};ig.Tween.Easing.Quintic.EaseInOut=function(k){if((k*=2)<1)return 0.5*k*k*k*k*k;return 0.5*((k-=2)*k*k*k*k+2);};ig.Tween.Easing.Sinusoidal.EaseIn=function(k){return-Math.cos(k*Math.PI/2)+1;};ig.Tween.Easing.Sinusoidal.EaseOut=function(k){return Math.sin(k*Math.PI/2);};ig.Tween.Easing.Sinusoidal.EaseInOut=function(k){return-0.5*(Math.cos(Math.PI*k)-1);};ig.Tween.Easing.Exponential.EaseIn=function(k){return k==0?0:Math.pow(2,10*(k-1));};ig.Tween.Easing.Exponential.EaseOut=function(k){return k==1?1:-Math.pow(2,-10*k)+1;};ig.Tween.Easing.Exponential.EaseInOut=function(k){if(k==0)return 0;if(k==1)return 1;if((k*=2)<1)return 0.5*Math.pow(2,10*(k-1));return 0.5*(-Math.pow(2,-10*(k-1))+2);};ig.Tween.Easing.Circular.EaseIn=function(k){return-(Math.sqrt(1-k*k)-1);};ig.Tween.Easing.Circular.EaseOut=function(k){return Math.sqrt(1-(--k*k));};ig.Tween.Easing.Circular.EaseInOut=function(k){if((k/=0.5)<1)return-0.5*(Math.sqrt(1-k*k)-1);return 0.5*(Math.sqrt(1-(k-=2)*k)+1);};ig.Tween.Easing.Elastic.EaseIn=function(k){var s,a=0.1,p=0.4;if(k==0)return 0;if(k==1)return 1;if(!p)p=0.3;if(!a||a<1){a=1;s=p/4;}
else s=p/(2*Math.PI)*Math.asin(1/a);return-(a*Math.pow(2,10*(k-=1))*Math.sin((k-s)*(2*Math.PI)/p));};ig.Tween.Easing.Elastic.EaseOut=function(k){var s,a=0.1,p=0.4;if(k==0)return 0;if(k==1)return 1;if(!p)p=0.3;if(!a||a<1){a=1;s=p/4;}
else s=p/(2*Math.PI)*Math.asin(1/a);return(a*Math.pow(2,-10*k)*Math.sin((k-s)*(2*Math.PI)/p)+1);};ig.Tween.Easing.Elastic.EaseInOut=function(k){var s,a=0.1,p=0.4;if(k==0)return 0;if(k==1)return 1;if(!p)p=0.3;if(!a||a<1){a=1;s=p/4;}
else s=p/(2*Math.PI)*Math.asin(1/a);if((k*=2)<1)return-0.5*(a*Math.pow(2,10*(k-=1))*Math.sin((k-s)*(2*Math.PI)/p));return a*Math.pow(2,-10*(k-=1))*Math.sin((k-s)*(2*Math.PI)/p)*0.5+1;};ig.Tween.Easing.Back.EaseIn=function(k){var s=1.70158;return k*k*((s+1)*k-s);};ig.Tween.Easing.Back.EaseOut=function(k){var s=1.70158;return(k=k-1)*k*((s+1)*k+s)+1;};ig.Tween.Easing.Back.EaseInOut=function(k){var s=1.70158*1.525;if((k*=2)<1)return 0.5*(k*k*((s+1)*k-s));return 0.5*((k-=2)*k*((s+1)*k+s)+2);};ig.Tween.Easing.Bounce.EaseIn=function(k){return 1-ig.Tween.Easing.Bounce.EaseOut(1-k);};ig.Tween.Easing.Bounce.EaseOut=function(k){if((k/=1)<(1/2.75)){return 7.5625*k*k;}else if(k<(2/2.75)){return 7.5625*(k-=(1.5/2.75))*k+0.75;}else if(k<(2.5/2.75)){return 7.5625*(k-=(2.25/2.75))*k+0.9375;}else{return 7.5625*(k-=(2.625/2.75))*k+0.984375;}};ig.Tween.Easing.Bounce.EaseInOut=function(k){if(k<0.5)return ig.Tween.Easing.Bounce.EaseIn(k*2)*0.5;return ig.Tween.Easing.Bounce.EaseOut(k*2-1)*0.5+0.5;};ig.Tween.Interpolation={Linear:function(v,k){var m=v.length-1;var f=m*k;var i=Math.floor(f);var fn=TWEEN.Interpolation.Utils.Linear;if(k<0){return fn(v[0],v[1],f);}
if(k>1){return fn(v[m],v[m-1],m-f);}
return fn(v[i],v[i+1>m?m:i+1],f-i);},};});

// lib/plugins/tweens-handler.js
ig.baked=true;ig.module('plugins.tweens-handler').requires('impact.entity','plugins.tween').defines(function(){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(el,start){var start=start||0;for(var i=0;i<this.length;++i){if(this[i]===el){return i;}}
return-1;};};ig.TweensHandler=ig.Class.extend({_tweens:[],_systemPausedTweens:[],init:function(){},getAll:function(){return this._tweens;},removeAll:function(){this._tweens=[];},add:function(tween){this._tweens.push(tween);},remove:function(tween){var i=this._tweens.indexOf(tween);if(i!==-1){this._tweens.splice(i,1);}},onSystemPause:function(){if(this._tweens.length===0){return false;}
var i=0,tween=null;while(i<this._tweens.length){tween=this._tweens[i];if(tween._isPlaying){this._systemPausedTweens.push(tween);tween.pause();}
i++;}
return true;},onSystemResume:function(){if(this._systemPausedTweens.length===0){return false;}
var i=0;while(i<this._systemPausedTweens.length){this._systemPausedTweens[i].resume();i++;}
this._systemPausedTweens=[];return true;},update:function(time,preserve){if(this._tweens.length===0){return false;}
var i=0;time=time!==undefined?time:ig.game.tweens.now();while(i<this._tweens.length){if(this._tweens[i].update(time)||preserve){i++;}
else
{this._tweens.splice(i,1);}}
return true;},now:function(){return Date.now();}});ig.TweenDef=ig.Class.extend({_ent:null,_valuesStart:{},_valuesEnd:{},_valuesStartRepeat:{},_duration:1000,_repeat:0,_yoyo:false,_isPlaying:false,_reversed:false,_delayTime:0,_startTime:null,_pauseTime:null,_easingFunction:ig.Tween.Easing.Linear.EaseNone,_interpolationFunction:ig.Tween.Interpolation.Linear,_chainedTweens:[],_onStartCallback:null,_onStartCallbackFired:false,_onUpdateCallback:null,_onCompleteCallback:null,_onStopCallback:null,_onPauseCallback:null,_onResumeCallback:null,_currentElapsed:0,init:function(object){this._object=object;},to:function(properties,duration){this._valuesEnd=properties;if(duration!==undefined){this._duration=duration;}
return this;},start:function(time){if(this._isPlaying){return this;}
ig.game.tweens.add(this);this._isPlaying=true;this._onStartCallbackFired=false;this._startTime=time!==undefined?time:ig.game.tweens.now();this._startTime+=this._delayTime;for(var property in this._valuesEnd){if(this._valuesEnd[property]instanceof Array){if(this._valuesEnd[property].length===0){continue;}
this._valuesEnd[property]=[this._object[property]].concat(this._valuesEnd[property]);}
if(this._object[property]===undefined){continue;}
this._valuesStart[property]=this._object[property];if((this._valuesStart[property]instanceof Array)===false){this._valuesStart[property]*=1.0;}
this._valuesStartRepeat[property]=this._valuesStart[property]||0;}
return this;},stop:function(){if(!this._isPlaying){return this;}
ig.game.tweens.remove(this);this._isPlaying=false;if(this._onStopCallback!==null){this._onStopCallback.call(this._object,this._object);}
this.stopChainedTweens();return this;},pause:function(){if(!this._isPlaying){return this;}
ig.game.tweens.remove(this);this._isPlaying=false;this._pauseTime=ig.game.tweens.now();if(this._onPauseCallback!==null){this._onPauseCallback.call(this._object,this._object);}
return this;},resume:function(){if(this._isPlaying){return this;}
if(!this._pauseTime){return this;}
var compensation=ig.game.tweens.now()-this._pauseTime;this._startTime+=compensation;ig.game.tweens.add(this);this._isPlaying=true;if(this._onResumeCallback!==null){this._onResumeCallback.call(this._object,this._object);}
this._pauseTime=null;return this;},end:function(){this.update(this._startTime+this._duration);return this;},stopChainedTweens:function(){for(var i=0,numChainedTweens=this._chainedTweens.length;i<numChainedTweens;i++){this._chainedTweens[i].stop();}},delay:function(amount){this._delayTime=amount;return this;},repeat:function(times){this._repeat=times;return this;},repeatDelay:function(amount){this._repeatDelayTime=amount;return this;},yoyo:function(yoyo){this._yoyo=yoyo;return this;},easing:function(easing){this._easingFunction=easing;return this;},interpolation:function(interpolation){this._interpolationFunction=interpolation;return this;},chain:function(){this._chainedTweens=arguments;return this;},onStart:function(callback){this._onStartCallback=callback;return this;},onUpdate:function(callback){this._onUpdateCallback=callback;return this;},onComplete:function(callback){this._onCompleteCallback=callback;return this;},onStop:function(callback){this._onStopCallback=callback;return this;},onPause:function(callback){this._onPauseCallback=callback;return this;},onResume:function(callback){this._onResumeCallback=callback;return this;},update:function(time){var property;var elapsed;var value;if(time<this._startTime){return true;}
if(this._onStartCallbackFired===false){if(this._onStartCallback!==null){this._onStartCallback.call(this._object,this._object);}
this._onStartCallbackFired=true;}
elapsed=(time-this._startTime)/this._duration;elapsed=elapsed>1?1:elapsed;this._currentElapsed=elapsed;value=this._easingFunction(elapsed);for(property in this._valuesEnd){if(this._valuesStart[property]===undefined){continue;}
var start=this._valuesStart[property]||0;var end=this._valuesEnd[property];if(end instanceof Array){this._object[property]=this._interpolationFunction(end,value);}else{if(typeof(end)==='string'){if(end.charAt(0)==='+'||end.charAt(0)==='-'){end=start+parseFloat(end);}else{end=parseFloat(end);}}
if(typeof(end)==="number"){this._object[property]=start+(end-start)*value;}}}
if(this._onUpdateCallback!==null){this._onUpdateCallback.call(this._object,this._object,value);}
if(elapsed===1){if(this._repeat>0){if(isFinite(this._repeat)){this._repeat--;}
for(property in this._valuesStartRepeat){if(typeof(this._valuesEnd[property])==='string'){this._valuesStartRepeat[property]=_valuesStartRepeat[property]+parseFloat(_valuesEnd[property]);}
if(this._yoyo){var tmp=this._valuesStartRepeat[property];this._valuesStartRepeat[property]=this._valuesEnd[property];this._valuesEnd[property]=tmp;}
this._valuesStart[property]=this._valuesStartRepeat[property];}
if(this._yoyo){this._reversed=!this._reversed;}
if(this._repeatDelayTime!==undefined){this._startTime=time+this._repeatDelayTime;}else{this._startTime=time+this._delayTime;}
return true;}else{if(this._onCompleteCallback!==null){this._onCompleteCallback.call(this._object,this._object);}
for(var i=0,numChainedTweens=this._chainedTweens.length;i<numChainedTweens;i++){this._chainedTweens[i].start(this._startTime+this._duration);}
return false;}}
return true;}});ig.Tween.Interpolation={Linear:function(v,k){var m=v.length-1;var f=m*k;var i=Math.floor(f);var fn=ig.Tween.Interpolation.Utils.Linear;if(k<0){return fn(v[0],v[1],f);}
if(k>1){return fn(v[m],v[m-1],m-f);}
return fn(v[i],v[i+1>m?m:i+1],f-i);},Bezier:function(v,k){var b=0;var n=v.length-1;var pw=Math.pow;var bn=ig.Tween.Interpolation.Utils.Bernstein;for(var i=0;i<=n;i++){b+=pw(1-k,n-i)*pw(k,i)*v[i]*bn(n,i);}
return b;},CatmullRom:function(v,k){var m=v.length-1;var f=m*k;var i=Math.floor(f);var fn=ig.Tween.Interpolation.Utils.CatmullRom;if(v[0]===v[m]){if(k<0){i=Math.floor(f=m*(1+k));}
return fn(v[(i-1+m)%m],v[i],v[(i+1)%m],v[(i+2)%m],f-i);}else{if(k<0){return v[0]-(fn(v[0],v[0],v[1],v[1],-f)-v[0]);}
if(k>1){return v[m]-(fn(v[m],v[m],v[m-1],v[m-1],f-m)-v[m]);}
return fn(v[i?i-1:0],v[i],v[m<i+1?m:i+1],v[m<i+2?m:i+2],f-i);}},Utils:{Linear:function(p0,p1,t){return(p1-p0)*t+p0;},Bernstein:function(n,i){var fc=ig.Tween.Interpolation.Utils.Factorial;return fc(n)/fc(i)/fc(n-i);},Factorial:(function(){var a=[1];return function(n){var s=1;if(a[n]){return a[n];}
for(var i=n;i>1;i--){s*=i;}
a[n]=s;return s;};})(),CatmullRom:function(p0,p1,p2,p3,t){var v0=(p2-p0)*0.5;var v1=(p3-p1)*0.5;var t2=t*t;var t3=t*t2;return(2*p1-2*p2+v0+v1)*t3+(-3*p1+3*p2-2*v0-v1)*t2+v0*t+p1;}}};});

// lib/plugins/director.js
ig.baked=true;ig.module('plugins.director').requires('impact.impact').defines(function(){ig.Director=ig.Class.extend({init:function(theGame,initialLevels){this.game=theGame;this.levels=[];this.currentLevel=0;this.append(initialLevels);return;},loadLevel:function(levelNumber){for(var key in ig.sizeHandler.dynamicClickableEntityDivs)
{var div=ig.domHandler.getElementById("#"+key);ig.domHandler.hide(div);}
this.currentLevel=levelNumber;this.game.loadLevel(this.levels[levelNumber]);return true;},loadLevelWithoutEntities:function(levelNumber){this.currentLevel=levelNumber;this.game.loadLevelWithoutEntities(this.levels[levelNumber]);return true;},append:function(levels){newLevels=[];if(typeof(levels)==='object'){if(levels.constructor===(new Array).constructor){newLevels=levels;}
else{newLevels[0]=levels;}
this.levels=this.levels.concat(newLevels);return true;}
else{return false;}},nextLevel:function(){if(this.currentLevel+1<this.levels.length){return this.loadLevel(this.currentLevel+1);}
else{return false;}},previousLevel:function(){if(this.currentLevel-1>=0){return this.loadLevel(this.currentLevel-1);}
else{return false;}},jumpTo:function(requestedLevel){var levelNumber=null;for(i=0;i<this.levels.length;i++){if(this.levels[i]==requestedLevel){levelNumber=i;}}
if(levelNumber>=0){return this.loadLevel(levelNumber);}
else{return false;}},firstLevel:function(){return this.loadLevel(0);},lastLevel:function(){return this.loadLevel(this.levels.length-1);},reloadLevel:function(){return this.loadLevel(this.currentLevel);}});});

// lib/plugins/nimpact.js
ig.baked=true;ig.module('plugins.nimpact').requires('impact.entity').defines(function(){ig.Entity.inject({anchor:{x:0,y:0},scale:{x:1,y:1},maxVel:{x:1000,y:1000},collides:ig.Entity.COLLIDES.NEVER,type:ig.Entity.TYPE.NONE,children:[],init:function(x,y,settings){this.parent(x,y,settings);},draw:function(){var ctx=ig.system.context;ctx.save();ctx.translate(ig.system.getDrawPos(this.pos.x.round()-ig.game.screen.x),ig.system.getDrawPos(this.pos.y.round()-ig.game.screen.y));ctx.scale(this.scale.x,this.scale.y);if(this.currentAnim!=null){this.currentAnim.draw(0,0);}
ctx.restore();},setScale:function(x,y){var oX=this.size.x,oY=this.size.y;this.scale.x=x;this.scale.y=y||this.scale.x;var sX=this.scale.x/ig.system.scale;var sY=this.scale.y/ig.system.scale;var sizeX=oX*sX;var sizeY=oY*sY;this.size.x=(sizeX>=0)?sizeX:-sizeX;this.size.y=(sizeY>=0)?sizeY:-sizeY;if(sizeX>0)this.pos.x+=(oX-sizeX)*this.anchor.x;else this.pos.x+=(oX-sizeX)*this.anchor.x-sizeX;if(sizeY>0)this.pos.y+=(oY-sizeY)*this.anchor.y;else this.pos.y+=(oX-sizeY)*this.anchor.y-sizeY;for(var key in this.anims){this.anims[key].flip.x=(sX<0?true:false);this.anims[key].flip.y=(sY<0?true:false);};},setAnchor:function(x,y){this.anchor.x=x;if(y==null)this.anchor.y=x;else this.anchor.y=y;this.pos.x-=this.size.x*this.anchor.x;this.pos.y-=this.size.y*this.anchor.y;},nSetPos:function(x,y){this.pos.x=x;this.pos.y=y;this.setAnchor(this.anchor.x,this.anchor.y);this.setScale(this.scale.x,this.scale.y);},getCenter:function(){return{x:this.pos.x+this.size.x/2,y:this.pos.y+this.size.y/2};},getCenterX:function(){return(this.pos.x+this.size.x/2);},getCenterY:function(){return(this.pos.y+this.size.y/2);},spawnEntity:function(e,x,y,settings){var id={zIndex:this.zIndex+1,parents:this}
var params=ig.merge(id,settings);var newe=ig.game.spawnEntity(e,x,y,params);this.children.push(newe);return newe;;},kill:function(){for(var i=0;i<this.children.length;i++){if(this.children[i]!=null){ig.game.removeEntity(this.children[i]);}}
ig.game.removeEntity(this);}});});

// lib/plugins/time-handler.js
ig.baked=true;ig.module('plugins.time-handler').requires('impact.game').defines(function(){ig.Timeout=ig.Class.extend({init:function(callback,delay){this.delay=delay;this.callback=callback;this.resume();return this;},clear:function(){clearTimeout(this.timerId);},pause:function(){this.clear();this.delay-=new Date()-this.start;},resume:function(){this.start=Date.now();this.clear();this.timerId=window.setTimeout(this.callback,this.delay);}});ig.Interval=ig.Class.extend({timerId:-1,init:function(callback,interval){this.delay=this.remaining=interval;this.callback=callback;this.resume();return this;},clear:function(){clearTimeout(this.timerId);},pause:function(){this.clear();this.remaining-=new Date()-this.start;},resume:function(){this.start=Date.now();this.clear();this.timerId=window.setTimeout(function(){this.remaining=this.delay;this.resume();this.callback();}.bind(this),this.remaining);}});});

// lib/game/entities/ui/input.js
ig.baked=true;ig.module('game.entities.ui.input').requires('impact.entity').defines(function(){EntityInput=ig.Entity.extend({zIndex:2000,name:"name",fontSize:25,padding:6,isShown:true,focus:false,placeHolder:'NAME',init:function(x,y,settings){this.parent(x,y,settings);this.boxWidth=240;this.iy=320;this.iyUp=50;if(ig.game.isMobile){this.iyUp=this.iy=505;}
this.ix=ig.game.centerX-this.boxWidth/2;this.createInputField();this.moveTo(this.ix,this.iy);this.hide();},val:function(value){var box=this.getBox();if(!box)return;if(value==null)return box.val();else box.val(value);console.log("Input value set to: "+value);},empty:function(){var box=this.getBox();if(!box)return;box.val("");ig.domHandler.css(box,{display:"none",visibility:"hidden"});console.log("Input emptied");},moveTo:function(x,y){this.pos.x=x;this.pos.y=y;this.updateSizePos();},createInputField:function(){var box=this.getBox();if(box){return;}
box=ig.domHandler.create("input");ig.domHandler.attr(box,"id",this.name+"Box");ig.domHandler.appendToBody(box);ig.domHandler.attr(box,"type","text");ig.domHandler.attr(box,"placeholder",this.placeHolder);ig.domHandler.attr(box,"maxLength","12");if(ig.ua.mobile){ig.domHandler.attr(box,"onfocus",'if(ig.game.homecontrol)ig.game.homecontrol.inputFocus();');ig.domHandler.attr(box,"onblur",'if(ig.game.homecontrol)ig.game.homecontrol.inputBlur();');}
ig.domHandler.css(box,{position:"absolute",margin:"0",padding:this.padding+"px",background:"#FFF",border:"none",textAlign:"center",outline:"none",zIndex:2000,fontFamily:"text",color:"#519548",borderRadius:"10px",fontSize:this.fontSize+'px',boxSizing:"border-box",border:"4px solid #F00"});this.updateSizePos();},blurInput:function(){var box=this.getBox();if(box)box.blur();},updateSizePos:function(){var box=this.getBox();var canvas=ig.domHandler.getElementById("#canvas");var border=4*canvas.width()/1120;if(border<2)border=2;else if(border>4)border=4;var offsets=ig.domHandler.getOffsets(canvas);var offsetLeft=offsets.left;var offsetTop=offsets.top;ig.domHandler.css(box,{width:this.boxWidth*ig.sizeHandler.scaleRatioMultiplier.x+"px",left:offsetLeft+this.pos.x*ig.sizeHandler.scaleRatioMultiplier.x+"px",top:offsetTop+this.pos.y*ig.sizeHandler.scaleRatioMultiplier.y+"px",fontSize:Math.floor(this.fontSize*ig.sizeHandler.scaleRatioMultiplier.y)+"px",padding:Math.floor(this.padding*ig.sizeHandler.scaleRatioMultiplier.y)+"px",borderWidth:border+"px"});},hide:function(){if(!this.isShown)return;var box=this.getBox();if(box){ig.domHandler.css(box,{display:"none"});}
this.isShown=false;},show:function(){if(this.isShown)return;var box=this.getBox();if(box){ig.domHandler.css(box,{display:"block"});}
this.isShown=true;},fadeIn:function(){if(this.isShown)return;this.isShown=true;var box=this.getBox();if(box){box.fadeIn(150,"linear",function(){this.isShown=true;}.bind(this));}},fadeOut:function(){if(!this.isShown)return;this.isShown=false;var box=this.getBox();if(box){box.fadeOut(150,"linear",function(){this.isShown=false;}.bind(this));}},getBox:function(){var boxName=this.name+"Box";var box=ig.domHandler.getElementById("#"+boxName);return box;}});});

// lib/networking/client.js
ig.baked=true;ig.module("networking.client").defines(function(){ig.NetworkClient=ig.Class.extend({MESSAGE_TAG:"bgfp_msg",PING_TAG:"bgfp_ping",PING_REPLY_TAG:"bgfp_ping_reply",server_ip:"https://multiplayer-app.game2wins.com",socket:null,portHTTP:'1000',portHTTPS:'1001',round_trip_time:0,time_diff:0,last_ping_time:0,latency_average:0,latency_log:[],latency_log_size:10,onServerConnectHandlers:[],onServerDisconnectHandlers:[],onServerMessageHandlers:[],onServerPingHandlers:[],onServerPingReplyHandlers:[],getServerTime:function(){var time=Date.now()-this.time_diff;return time;},connect:function(successFunc,failFunc){var connecting=false;this.latency_log=[];this.latency_average=0;this.round_trip_time=0;this.time_diff=0;this.last_ping_time=0;this.last_pong_time=0;if(!this.socket){if(typeof(this.server_ip)=='undefined'||!this.server_ip){if(typeof(SERVER_IP)=='undefined'||!SERVER_IP){this.server_ip='localhost';}else{this.server_ip=SERVER_IP;}}
var serverUrl=this.server_ip;if(!serverUrl.includes('http://')&&!serverUrl.includes('https://')){var port=this.portHTTP;if(document.location.protocol&&typeof(document.location.protocol.includes)=='function'&&document.location.protocol.includes("https")){port=this.portHTTPS;}
serverUrl+=":"+port;}
this.socket=io(serverUrl,{withCredentials:false,transports:['polling', 'websocket']});if(this.socket){connecting=true;}}else{if(this.socket.disconnected){this.socket.connect();connecting=true;}}
if(connecting){this.socket.off();this.socket.on('connect',function(){this.onServerConnect();this.socket.off('disconnect');this.socket.on('disconnect',function(){this.onServerDisconnect();}.bind(this));this.socket.off(this.MESSAGE_TAG);this.socket.on(this.MESSAGE_TAG,function(data){this.onServerMessage(data);}.bind(this));this.socket.off(this.PING_TAG);this.socket.on(this.PING_TAG,function(data){this.onServerPing(data);}.bind(this));this.socket.off(this.PING_REPLY_TAG);this.socket.on(this.PING_REPLY_TAG,function(data){this.onServerPingReply(data);}.bind(this));if(typeof(successFunc)=='function'){successFunc();}}.bind(this));this.socket.on('connect_error',function(){if(typeof(failFunc)=='function')failFunc();}.bind(this));}},disconnect:function(successFunc,failFunc){if(this.socket){if(!this.socket.disconnected){this.socket.once('disconnect',function(){if(typeof(successFunc)=='function')successFunc();}.bind(this));this.socket.disconnect();return true;}}
if(typeof(failFunc)=='function')failFunc();return false;},onServerConnect:function(){for(var i=0,il=this.onServerConnectHandlers.length;i<il;i++){var handler=this.onServerConnectHandlers[i];if(typeof(handler)==='function')handler();}},onServerDisconnect:function(){for(var i=0,il=this.onServerDisconnectHandlers.length;i<il;i++){var handler=this.onServerDisconnectHandlers[i];if(typeof(handler)==='function')handler();}},onServerMessage:function(data){if(!data)return;for(var i=0,il=this.onServerMessageHandlers.length;i<il;i++){var handler=this.onServerMessageHandlers[i];if(typeof(handler)==='function')handler(data);}},onServerPing:function(data){data.pongTime=Date.now();this.socket.emit(this.PING_REPLY_TAG,data);this.last_ping_time=Date.now();for(var i=0,il=this.onServerPingHandlers.length;i<il;i++){var handler=this.onServerPingHandlers[i];if(typeof(handler)==='function')handler(data);}},onServerPingReply:function(data){if(!data)return;if(isNaN(data.pingTime)||data.pingTime===null||isNaN(data.pongTime)||data.pongTime===null){return;}
this.last_ping_time=Date.now();this.round_trip_time=Date.now()-data.pingTime;this.time_diff=Date.now()-data.pongTime+this.round_trip_time/2;var latency=Math.floor(this.round_trip_time/2);this.recalculateTimeDiff(latency,data.pongTime);for(var i=0,il=this.onServerPingReplyHandlers.length;i<il;i++){var handler=this.onServerPingReplyHandlers[i];if(typeof(handler)==='function')handler(data);}},pingServer:function(){if(!this.socket)return;var data={};data.pingTime=Date.now();this.socket.emit(this.PING_TAG,data);},sendMessage:function(data){if(this.socket)this.socket.emit(this.MESSAGE_TAG,data);},recalculateTimeDiff:function(latency,pongTime){if(latency===null||isNaN(latency)||pongTime===null||isNaN(pongTime)){return;}
if(this.latency_log.length>=this.latency_log_size){this.latency_log.shift();}
this.latency_log.push(latency);var sum=0;for(var i=0,il=this.latency_log.length;i<il;i++){sum+=this.latency_log[i];}
this.latency_average=Math.round(sum/this.latency_log.length);this.time_diff=Date.now()-(pongTime+this.latency_average);},});});

// lib/networking/network-overlay.js
ig.baked=true;ig.module('networking.network-overlay').requires('impact.entity').defines(function(){EntityNetworkOverlay=ig.Entity.extend({alpha:0,zIndex:3000,text:_TEXT.Network.Connecting,fontSize:20,lineHeight:30,padding:20,width:380,init:function(x,y,settings){this.parent(x,y,settings);this.savedLayer=ig.game.currentLayer;ig.game.currentLayer=ig.game.layers.OVERLAY;this.pos.x=ig.game.screen.x;this.pos.y=ig.game.screen.y;this.size.x=ig.system.width;this.size.y=ig.system.height;this.border={};this.border.r=5;this.border.w=this.width;this.border.x=ig.game.centerX-this.border.w/2;if(ig.game.isMobile)this.fontSize=20;this.font=this.fontSize+"px text";this.texts=ig.game.wrapText2(this.text,this.border.w-2*this.padding,this.font);var len=this.texts.length;this.border.h=len*this.lineHeight+2*this.padding;if(this.border.h<110){this.border.h=110;}
this.border.y=ig.game.centerY-this.border.h/2;this.textY0=this.border.y+(this.border.h-len*this.lineHeight)*0.5+this.lineHeight-this.fontSize/2;this.textX=ig.game.centerX+2;this.fadeIn();},draw:function(){ig.system.context.fillStyle="rgba(0,0,0,"+this.alpha+")";ig.system.context.fillRect(0,0,ig.system.width,ig.system.height);ig.system.context.fillStyle="#125024";ig.game.setStrokeStyle('#FFF',4);ig.game.roundRect(this.border.x,this.border.y,this.border.w,this.border.h,this.border.r);ig.game.setTextStyle(this.font,"#FFF","center");ig.game.drawTextMultiLines(this.texts,this.textX,this.textY0,this.lineHeight);},fadeIn:function(){this.tween({alpha:0.5},0.2).start();var overlay=$('#overlay');if(overlay)overlay.fadeIn(0.2);},fadeOut:function(){this.stopTweens();this.tween({alpha:0},0.2,{onComplete:function(){ig.game.currentLayer=this.savedLayer;this.callback();this.kill();}.bind(this)}).start();var overlay=$('#overlay');if(overlay)overlay.fadeOut(0.2);},callback:function(){},dispose:function(){ig.game.currentLayer=this.savedLayer;this.kill();}});});

// lib/game/entities/buttons/button-2-images.js
ig.baked=true;ig.module('game.entities.buttons.button-2-images').requires('impact.entity').defines(function(){EntityButton2Images=ig.Entity.extend({collides:ig.Entity.COLLIDES.NEVER,type:ig.Entity.TYPE.A,layer:0,isClicked:false,image:new ig.Image('media/graphics/sprites/ui/buttons/arrow.png'),imagePressed:new ig.Image('media/graphics/sprites/ui/buttons/arrow-pressed.png'),enabled:true,isShown:true,alpha:1,dy:0,dy0:5,anchor:{x:0.5,y:0},init:function(x,y,settings){this.parent(x,y,settings);this.setAnim();this.setAnchor(this.anchor.x,this.anchor.y);this.layer=ig.game.currentLayer;},ready:function(){this.parent();this.clickTime=ig.system.clock.delta();},setAnim:function(){var animSheet=new ig.AnimationSheet(this.image.path,this.image.width,this.image.height);this.currentAnim=this.animIdle=new ig.Animation(animSheet,1,[0],true);animSheet=new ig.AnimationSheet(this.imagePressed.path,this.imagePressed.width,this.imagePressed.height);this.animPressed=new ig.Animation(animSheet,1,[0],true);this.size.x=this.image.width;this.size.y=this.image.height;},setupDrawing:function(){this.drawX=this.pos.x-this.parents.oriX;this.drawY=this.pos.y-this.parents.oriY;},draw2:function(){this.currentAnim.draw(this.drawX,this.drawY);},clicked:function(){var temp=this.clickTime;this.clickTime=ig.system.clock.delta();if(this.clickTime-temp<0.35){return;}
if(!this.enabled)return;if(ig.game.currentLayer!=this.layer)return;this.isClicked=true;this.currentAnim=this.animPressed;this.dy=this.dy0;ig.soundHandler.sfxPlayer.play("button");},released:function(){if(this.isClicked&&this.enabled){ig.domHandler.getElementById("#canvas").css("cursor","default");this.isClicked=false;this.currentAnim=this.animIdle;this.dy=0;this.callback();}},leave:function(){ig.domHandler.getElementById("#canvas").css("cursor","default");if(this.isClicked){this.currentAnim=this.animIdle;this.dy=0;this.isClicked=false;}},over:function(){if(ig.game.currentLayer==this.layer&&this.enabled){ig.domHandler.getElementById("#canvas").css("cursor","pointer");}},draw:function(){if(this.isShown){var ctx=ig.system.context;ctx.save();ctx.globalAlpha=this.alpha;this.currentAnim.draw(ig.system.getDrawPos(this.pos.x.round()-ig.game.screen.x),ig.system.getDrawPos(this.pos.y.round()-ig.game.screen.y+this.dy));ctx.restore();}},callback:function(){},setShown:function(isShown){this.isShown=this.enabled=isShown;},fadeIn:function(){this.setShown(true);this.tween({alpha:1},0.2).start();},fadeOut:function(){this.stopTweens();this.tween({alpha:0},0.2,{onComplete:function(){this.setShown(false);}.bind(this)}).start();},});});

// lib/game/entities/buttons/button-home.js
ig.baked=true;ig.module('game.entities.buttons.button-home').requires('game.entities.buttons.button-2-images').defines(function(){EntityButtonHome=EntityButton2Images.extend({image:new ig.Image('media/graphics/sprites/ui/buttons/home.png'),imagePressed:new ig.Image('media/graphics/sprites/ui/buttons/home-pressed.png'),callback:function(){var control=ig.game.getEntityByName('GameController');if(control&&control.ranking&&ig.game.gameInitData){var mainPlayerRank=null;var completedPlayers=0;var totalPlayers=control.ranking.length;for(var i=0;i<control.ranking.length;i++){if(control.ranking[i].rankNo&&control.ranking[i].rankNo<5){completedPlayers++;}
if(control.ranking[i].isMainPlayer){mainPlayerRank=control.ranking[i].rankNo;}}
if(!mainPlayerRank||mainPlayerRank===5){mainPlayerRank=totalPlayers;}
console.log('🚪 PLAYER EXITING - Current Rankings:');for(var i=0;i<control.ranking.length;i++){var player=control.ranking[i];var rank=player.rankNo||'In Progress';console.log('Rank '+rank+': '+player.playerName+
(player.isMainPlayer?' (YOU - EXITING with rank '+mainPlayerRank+')':''));}
if(typeof sendScore==='function'){console.log('📊 Sending score on exit with rank:',mainPlayerRank);sendScore(mainPlayerRank);}
if(ig.game.botMode){window.GAME_EXIT_MESSAGE=mainPlayerRank===1?'You Won!':'You Lost!';}}
ig.game.gameClient.leaveGame();this.fadeOut();ig.game.director.jumpTo(LevelHome);}});});

// lib/networking/button-close.js
ig.baked=true;ig.module('networking.button-close').requires('game.entities.buttons.button-2-images').defines(function(){EntityButtonClose=EntityButton2Images.extend({image:new ig.Image('media/graphics/sprites/ui/buttons/close.png'),imagePressed:new ig.Image('media/graphics/sprites/ui/buttons/close-pressed.png'),callback:function(){if(this.parents.homeController)this.parents.homeController.overlayClosed=true;this.parents.fadeOut();this.fadeOut();}});});

// lib/networking/network-error.js
ig.baked=true;ig.module('networking.network-error').requires('networking.network-overlay','game.entities.buttons.button-home','networking.button-close').defines(function(){EntityNetworkError=EntityNetworkOverlay.extend({text:'ERROR',init:function(x,y,settings){this.parent(x,y,settings);var bt;this.homeController=ig.game.getEntityByName('HomeController');if(this.homeController!=null){ig.game.nameInput.hide();if(this.homeController.btMoregames)this.homeController.btMoregames.hide();bt=this.spawnEntity(EntityButtonClose,ig.game.screen.x+ig.game.centerX,this.border.y+this.border.h+20,{alpha:0});}else if(ig.game.botMode){bt=this.spawnEntity(EntityButtonClose,ig.game.screen.x+ig.game.centerX,this.border.y+this.border.h+20,{alpha:0});}else{bt=this.spawnEntity(EntityButtonHome,ig.game.screen.x+ig.game.centerX,this.border.y+this.border.h+20,{alpha:0});}
ig.game.sortEntitiesDeferred();bt.fadeIn();},callback:function(){if(this.homeController!=null){if(this.homeController.btMoregames)this.homeController.btMoregames.show();}}});});

// lib/networking/network-processing.js
ig.baked=true;ig.module('networking.network-processing').requires('networking.network-overlay','networking.button-close').defines(function(){EntityNetworkProcessing=EntityNetworkOverlay.extend({text:'Processing...',controller:null,showPlayersNum:false,hasCloseBtn:true,init:function(x,y,settings){this.parent(x,y,settings);if(this.hasCloseBtn){this.btClose=this.spawnEntity(EntityButtonClose,ig.game.screen.x+ig.game.centerX,this.border.y+this.border.h+20000,{alpha:0});this.btClose.fadeIn();}
ig.game.sortEntitiesDeferred();var n=4;var s0=this.etc='... ';this.interval=setInterval(function(){this.etc=(s0.slice(0,-n));--n;if(n<1)n=4;}.bind(this),350);ig.system.context.font=this.font;var w=ig.system.context.measureText(this.texts[0]).width;this.etcX=ig.game.centerX+w/2;if(this.showPlayersNum){this.textY0-=this.lineHeight/2;if(ig.game.privateMode&&ig.game.gameInitData&&ig.game.gameInitData.roomNumber){this.border.h+=40;this.border.y=ig.game.centerY-this.border.h/2.5;}}},draw:function(){this.parent();ig.system.context.textAlign='left';ig.game.drawText(this.etc,this.etcX,this.textY0);if(this.showPlayersNum){ig.system.context.textAlign='center';ig.game.drawText('('+ig.game.gameClient.numOfPlayers+' / '+ig.game.roomSize+_TEXT.Network.Players+')',ig.game.centerX,this.textY0+this.lineHeight+3);if(ig.game.privateMode&&ig.game.gameInitData&&ig.game.gameInitData.roomNumber){ig.system.context.font='24px text';ig.game.drawText('Room Code: '+ig.game.gameInitData.roomNumber,ig.game.centerX,this.textY0+this.lineHeight*2+10);ig.system.context.font=this.font;}}},changeText:function(txt){this.texts[0]=txt;ig.system.context.font=this.font;var w=ig.system.context.measureText(this.texts[0]).width;this.etcX=ig.game.centerX+w/2-16;},kill:function(){clearInterval(this.interval);this.parent();}});});

// lib/networking/network-alert.js
ig.baked=true;ig.module('networking.network-alert').requires('networking.network-overlay','game.entities.buttons.button-home').defines(function(){EntityNetworkAlert=EntityNetworkOverlay.extend({text:'Alert',init:function(x,y,settings){this.parent(x,y,settings);this.btClose=this.spawnEntity(EntityButtonClose,ig.game.screen.x+ig.game.centerX,this.border.y+this.border.h+20,{alpha:0});this.btClose.fadeIn();ig.game.sortEntitiesDeferred();this.homeController=ig.game.getEntityByName('HomeController');if(this.homeController!=null){ig.game.nameInput.hide();if(this.homeController.btMoregames)this.homeController.btMoregames.hide();}},kill:function(){if(this.homeController!=null){if(this.homeController.btMoregames)this.homeController.btMoregames.show();}
this.parent();}});});

// lib/networking/gameclient.js
ig.baked=true;ig.module('networking.gameclient').requires('networking.network-error','networking.network-processing','networking.network-alert').defines(function(){GameClient=ig.Class.extend({network_client:null,clientVersion:1,clientRequestGameTime:0,gameJoinedServerTime:0,gameJoinedLocalTime:0,initialGameState:null,roomId:null,playerId:null,newMessage:0,numOfPlayers:1,init:function(network_client){this.userCountText=_TEXT.Network.Offline;if(!network_client)return;this.network_client=network_client;this.network_client.onServerConnectHandlers.push(this.onServerConnect.bind(this));this.network_client.onServerDisconnectHandlers.push(this.onServerDisconnect.bind(this));this.network_client.onServerMessageHandlers.push(this.onServerMessage.bind(this));},getServerTime:function(){if(!this.network_client||!this.network_client.socket)return 0;return this.network_client.getServerTime();},getStartTime:function(){if(!this.network_client||!this.network_client.socket)return 0;this.sendMessage(network.MessageType.START_TIME);},sendMessage:function(eventType,data){var msg={type:eventType}
if(typeof data!='undefined')msg.data=data;this.network_client.sendMessage(msg);},onServerConnect:function(){var overlays=ig.game.getEntitiesByType(EntityNetworkOverlay);var control=ig.game.getEntitiesByType(EntityGameController)[0];for(var i=0;i<overlays.length;i++){if(!control)
overlays[i].fadeOut();}
var btReconnect=ig.game.getEntitiesByType(EntityButtonReconnect)[0];if(btReconnect)btReconnect.fadeOut();if(ig.game.connectInterval){clearInterval(ig.game.connectInterval);ig.game.connectInterval=null;}},onServerDisconnect:function(){this.userCountText=_TEXT.Network.Offline;ig.game.shouldConnect=false;var control=ig.game.getEntityByName('HomeController');if(control){control.spawnButtonReconnect();}else{control=ig.game.getEntityByName('GameController');if(control&&control.loadingOverlay)control.loadingOverlay.kill();}
this.showNetworkError(_TEXT.Network.ServerDisconnected);},onServerMessage:function(msg){if(!msg)return;if(!network)return;switch(msg.type){case network.MessageType.ERROR:this.onError(msg.data);break;case network.MessageType.USER_CONNECTED:this.onUserConnected(msg.data);break;case network.MessageType.USER_DISCONNECTED:this.onUserDisconnected(msg.data);break;case network.MessageType.REQUEST_ROOM_CONFIRMED:this.onRequestRoomConfirmed(msg.data);break;case network.MessageType.REQUEST_ROOM_REJECTED:this.onRequestRoomRejected(msg.data);break;case network.MessageType.GAMESTATE:this.onGameStateReply(msg);break;case network.MessageType.PLAYER_JOIN:this.onPlayerJoin(msg.data);break;case network.MessageType.PLAYER_LEFT:this.onPlayerLeft(msg.data);break;case network.MessageType.EMOJI:this.onEmoji(msg.data);break;case network.MessageType.GAME_EVENT:this.handleEvent(msg.data);break;case network.MessageType.KICKED:this.handleKicked(msg.data);break;case network.MessageType.LEAVE_ROOM_COMPLETED:this.handleLeaveRoom();break;case network.MessageType.SYNC_TIME:this.syncTime(msg.data.pauseDuration);break;case network.MessageType.START_TIME:var control=ig.game.getEntityByName('GameController');if(control){var dt=Date.now()-msg.data;control.syncTime(dt);}
break;case network.MessageType.FIX_GAMESTATE:ig.global.stateUpdate=msg.data;var control=ig.game.getEntityByName('GameController');if(control){control.updateHorses();this.sendMessage(network.MessageType.GAMESTATE_FIXED);}
break;};},pingTimeForOther:function(playerId){if(ig.game.botMode)return;this.sendMessage(network.MessageType.SYNC_TIME,{playerId:playerId,getTime:false});},pingTime:function(){if(ig.game.botMode)return;this.sendMessage(network.MessageType.SYNC_TIME,{getTime:false});},getTime:function(){if(ig.game.botMode)return;this.sendMessage(network.MessageType.SYNC_TIME,{getTime:true});},syncTime:function(pauseDuration){var control=ig.game.getEntityByName("GameController");if(!control)return;control.syncTime(pauseDuration);},handleLeaveRoom:function(){var control=ig.game.getEntityByName("HomeController");if(!control)return;control.leaveRoomCompleted();},handleKicked:function(isCheated){var control=ig.game.getEntityByName("GameController");if(!control)return;control.kickedOut(isCheated);},handleEvent:function(msg){var control;if(msg.event==network.Events.GAME_START){ig.global.gameState=msg.data;ig.global.firstPlayerId=msg.firstPlayerId;ig.global.colorID=msg.colorID;ig.global.gameStarted=true;control=ig.game.getEntityByName("HomeController");if(control)control.startGame();return;}
if(ig.game.isHidden||(ig.game.requestingState&&msg.event!=network.Events.GAME_END&&msg.event!=network.Events.PLAYER_COMPLETE))return;control=ig.game.getEntityByName("GameController");if(!control||control.stopUpdating)return;switch(msg.event){case network.Events.DICE_ROLLING:control.diceRolling();break;case network.Events.NEXT_TURN:control.nextPlayer(msg.data);break;case network.Events.HORSE_MOVE:control.horseMove(msg.data.horseId);break;case network.Events.RANDOM_VALUE:control.dice.setValue(msg.data);break;case network.Events.PLAYER_CHEATED:control.kickCheatedPlayer(msg.data);break;case network.Events.RANDOM_HORSE:control.randomMove();break;case network.Events.GAME_END:control.handleGameEnd(msg.data);break;case network.Events.PLAYER_COMPLETE:control.handleGameEnd(msg.data);break;}},emitEvent:function(event,data){if(ig.game.botMode){return;}
var dt={"event":event}
if(event==network.Events.DICE_ROLLING){dt.isBot=ig.game.botMode;}
if(typeof data!='undefined'){dt.data=data;}
this.sendMessage(network.MessageType.GAME_EVENT,dt);},onError:function(data){var error='';switch(data){case network.Errors.UNKNOWN:error='Server Error: UNKNOWN';break;case network.Errors.INVALID_REQUEST:error='Server Error: INVALID_REQUEST';break;case network.Errors.VERSION_MISMATCH:error='Server Error: VERSION_MISMATCH';break;case network.Errors.INVALID_NAME:error='Server Error: INVALID_NAME';break;case network.Errors.KICKED_DUE_TO_INACTIVITY:error='Server Error: KICKED_DUE_TO_INACTIVITY';break;}
this.showNetworkError(error);},onUserConnected:function(data){var endPart=(data<2)?_TEXT.Network.UserOnline:_TEXT.Network.UsersOnline;this.userCountText=data+endPart;},onUserDisconnected:function(data){var endPart=(data<2)?_TEXT.Network.UserOnline:_TEXT.Network.UsersOnline;this.userCountText=data+endPart;},onRequestRoomConfirmed:function(data){this.roomId=data.roomId;this.playerId=data.playerId;var latency=Math.floor(data.latency/2);this.network_client.recalculateTimeDiff(latency,data.joinTimeServer);var control=ig.game.getEntityByName("HomeController");if(control)control.requestRoomConfirmed(data);},onRequestRoomRejected:function(data){this.roomId=null;this.playerId=null;var control=ig.game.getEntityByName("HomeController");if(control)control.requestRoomRejected();this.onError(data);},onGameStateReply:function(msg){ig.global.stateUpdate=msg.data;var control=ig.game.getEntityByName("GameController");if(control){if(msg.updateHorse){control.updateHorses();if(msg.clearOverlay){if(control.loadingOverlay!=null){control.loadingOverlay.fadeOut();}}}else control.updateGameState(msg);}},onPlayerJoin:function(data){this.numOfPlayers=data.gameState.length;},onPlayerLeft:function(data){this.numOfPlayers=data.gameState.length;var control=ig.game.getEntityByName("GameController");if(!control)return;var playerId=data.playerId,players=ig.global.gameState,playerName;for(var i=0;i<players.length;i++){if(players[i].playerId==playerId){playerName=players[i].name;break;}}
console.log('🚪 Player Left: '+playerName+' (ID: '+playerId+')');console.log('Remaining players: '+data.gameState.length);control.removePlayer(playerId);var msg=playerName+_TEXT.Network.Left;ig.global.gameState=data.gameState;if(data.gameState.length>1){}else{console.log('🏆 Only 1 player remaining - You win by default!');if(!ig.game.botMode&&ig.game.gameInitData&&typeof sendScore==='function'){sendScore(1);}
this.showNetworkError(msg);control.gameEnd=true;}},onEmoji:function(data){if(ig.game.control){ig.game.control.handleEmoji(data);}},requestGameState:function(){if(!this.network_client||!this.network_client.socket){return false;}
this.sendMessage(network.MessageType.REQUEST_GAMESTATE);return true;},leaveGame:function(){if(!this.network_client||!this.network_client.socket||this.roomId==null){return false;}
this.sendMessage(network.MessageType.LEAVE_ROOM);this.roomId=null;this.playerId=null;this.queuedEvents=[];return true;},requestGame:function(requestInfo){if(!this.network_client||!this.network_client.socket){return false;}
this.clientRequestGameTime=Date.now();this.queuedEvents=[];ig.global.gameStarted=false;ig.global.gameState=null;ig.global.stateUpdate=null;requestInfo.clientVersion=this.clientVersion;var msg=network.MessageType.REQUEST_ROOM;if(ig.game.privateMode){msg=network.MessageType.REQUEST_PRIVATE_ROOM;requestInfo.pw=ig.game.pwInput.val().trim();requestInfo.pw=requestInfo.pw.toLowerCase();}
this.sendMessage(msg,requestInfo);return true;},cancelRequestGame:function(){if(!this.network_client||!this.network_client.socket)return false;this.sendMessage(network.MessageType.LEAVE_ROOM);return true;},showNetworkError:function(error){var overlays=ig.game.getEntitiesByType(EntityNetworkOverlay);for(var i=0;i<overlays.length;i++){overlays[i].dispose();}
ig.game.spawnEntity(EntityNetworkError,0,0,{text:error});},showNetworkAlert:function(msg,width){if(ig.game.requestingState)return;var overlays=ig.game.getEntitiesByType(EntityNetworkOverlay);for(var i=0;i<overlays.length;i++){overlays[i].dispose();}
var settings={text:msg}
if(width)settings.width=width;ig.game.spawnEntity(EntityNetworkAlert,0,0,settings);},kickPlayer:function(serverId){this.sendMessage(network.MessageType.KICK_PLAYER,{playerId:serverId});}});});

// lib/game/entities/pointer.js
ig.baked=true;ig.module('game.entities.pointer').requires('impact.entity').defines(function(){EntityPointer=ig.Entity.extend({checkAgainst:ig.Entity.TYPE.BOTH,size:new Vector2(4,4),isFirstPressed:false,isPressed:false,isReleased:false,isHovering:false,hoveringItem:null,objectArray:[],clickedObjectList:[],ignorePause:true,zIndex:5500,check:function(other){this.objectArray.push(other);},clickObject:function(targetobject){if(this.isFirstPressed){if(typeof(targetobject.clicked)=='function'){targetobject.clicked();this.addToClickedObjectList(targetobject);}}
if(this.isPressed&&!this.isReleased){if(typeof(targetobject.clicking)=='function'){targetobject.clicking();}}
if(this.isReleased){if(typeof(targetobject.released)=='function'){targetobject.released();this.removeFromClickedObjectList(targetobject);}}},refreshPos:function(){this.pos=ig.game.io.getClickPos();this.pos.x+=ig.game.screen.x;this.pos.y+=ig.game.screen.y;this.pos.x-=this.size.x*0.5;this.pos.y-=this.size.y*0.5;},update:function(){this.parent();this.refreshPos();var targetObject=null;var highestIndex=-1;for(a=this.objectArray.length-1;a>-1;a--){if(this.objectArray[a].zIndex>highestIndex){highestIndex=this.objectArray[a].zIndex;targetObject=this.objectArray[a];}}
if(targetObject!=null){if(this.hoveringItem!=null){if(this.hoveringItem!=targetObject){if(typeof(this.hoveringItem.leave)=='function'){this.hoveringItem.leave();}
if(typeof(targetObject.over)=='function'){targetObject.over();}}}else{if(typeof(targetObject.over)=='function'){targetObject.over();}}
this.hoveringItem=targetObject;this.clickObject(targetObject);this.objectArray=[];}else{if(this.hoveringItem!=null&&typeof(this.hoveringItem.leave)=='function'){this.hoveringItem.leave();this.hoveringItem=null;}
if(this.isReleased){for(var i=0;i<this.clickedObjectList.length;i++){var targetobject=this.clickedObjectList[i];if(typeof(targetobject.releasedOutside)=='function'){targetobject.releasedOutside();}}
this.clickedObjectList=[];}}
this.isFirstPressed=ig.input.pressed('click');this.isReleased=ig.input.released('click');this.isPressed=ig.input.state('click');},addToClickedObjectList:function(targetObject){this.clickedObjectList.push(targetObject);},removeFromClickedObjectList:function(targetObject){var temp=[];for(var i=0;i<this.clickedObjectList.length;i++){var obj=this.clickedObjectList[i];if(obj!=targetObject){temp.push(obj);}}
this.clickedObjectList=temp;}});});

// lib/game/entities/ui/fade.js
ig.baked=true;ig.module('game.entities.ui.fade').requires('impact.entity').defines(function(){EntityFade=ig.Entity.extend({size:{x:2,y:2},name:'fade',alpha:0,fadeOut:false,end:false,zIndex:3000,init:function(x,y,settings){this.parent(x,y,settings);if(!this.fadeOut)this.alpha=1;},update:function(){if(this.end)return;if(this.fadeOut){var al=this.alpha+0.06;if(al<1){this.alpha=al;}else{this.alpha=1;this.end=true;this.callback();this.kill();}}else{var al=this.alpha-0.07;if(al>0){this.alpha=al;}else{this.alpha=0;this.end=true;this.kill();}}},draw:function(){ig.system.context.save();ig.system.context.globalAlpha=this.alpha;ig.system.context.fillStyle="#000";ig.system.context.fillRect(0,0,ig.system.width,ig.system.height);ig.system.context.globalAlpha=1;ig.system.context.restore();},callback:function(){}});});

// lib/game/entities/buttons/button-back.js
ig.baked=true;ig.module('game.entities.buttons.button-back').requires('game.entities.buttons.button-2-images').defines(function(){EntityButtonBack=EntityButton2Images.extend({image:new ig.Image('media/graphics/sprites/ui/buttons/back.png'),imagePressed:new ig.Image('media/graphics/sprites/ui/buttons/back-pressed.png'),image2:new ig.Image('media/graphics/sprites/ui/buttons/back2.png'),imagePressed2:new ig.Image('media/graphics/sprites/ui/buttons/back2-pressed.png'),greenStyle:false,showPopupSize:false,anchor:{x:0.5,y:0},init:function(x,y,settings){if(settings&&settings.greenStyle){this.image=this.image2;this.imagePressed=this.imagePressed2;}
this.parent(x,y,settings);},callback:function(){this.parents.scaleOut();},draw2:function(){if(this.isClicked)this.imagePressed.draw(this.drawX,this.drawY);else this.image.draw(this.drawX,this.drawY);}});});

// lib/game/entities/buttons/button-play.js
ig.baked=true;ig.module('game.entities.buttons.button-play').requires('game.entities.buttons.button-2-images').defines(function(){EntityButtonPlay=EntityButton2Images.extend({image:new ig.Image('media/graphics/sprites/ui/buttons/play.png'),imagePressed:new ig.Image('media/graphics/sprites/ui/buttons/play-pressed.png'),anchor:{x:0,y:0.5},callback:function(){ig.game.privateMode=false;ig.storage.save('avatarId',ig.game.avatarId);ig.game.playerName=ig.game.nameInput.val().trim();ig.storage.save('playerName',ig.game.playerName);if(ig.game.playerName==""){ig.game.playerName=ig.game.randomInArray(ig.game.playerNames);}
ig.game.spawnEntity(EntityPopupMode,0,0);ig.game.nameInput.hide();try{ig.soundHandler.unlockWebAudio();}catch(error){}}});});

// lib/game/entities/ui/popup.js
ig.baked=true;ig.module('game.entities.ui.popup').requires('impact.entity').defines(function(){EntityPopup=ig.Entity.extend({zIndex:1000,title:"",scale:0.1,alpha:0,size:{x:400,y:450},titleSize:50,titleDy:90,init:function(x,y,settings){this.parent(x,y,settings);ig.game.currentLayer=ig.game.layers.POPUP;this.halfX=this.size.x/2;this.halfY=this.size.y/2;this.pos.x=ig.game.centerX-this.halfX+ig.game.screen.x;this.pos.y=ig.game.centerY-this.halfY+ig.game.screen.y;this.oriX=this.pos.x+this.halfX;this.oriY=this.pos.y+this.halfY;this.titleY=this.pos.y+this.titleDy-this.oriY;this.titleFont=this.titleSize+'px title';this.spawnElements();for(var i=0;i<this.children.length;i++){this.children[i].setupDrawing();}
this.scaleIn();},spawnElements:function(){},scaleIn:function(){var _this=this;this.tween({scale:1,alpha:1},0.2,{easing:ig.Tween.Easing.Back.EaseOut,onComplete:function(){_this.callbackIn();}}).start();var overlay=$('#overlay');if(overlay)overlay.show();},scaleOut:function(params){var _this=this;this.tween({scale:0.1,alpha:0},0.2,{easing:ig.Tween.Easing.Back.EaseIn,onComplete:function(){if(params!==2){ig.game.currentLayer=ig.game.layers.BASE;var overlay=$('#overlay');if(overlay)overlay.hide();}
_this.callback(params);_this.kill();}}).start();},draw:function(){ig.game.drawBlackOverlay();this.parent();var ctx=ig.system.context;ctx.save();ctx.translate(this.oriX,this.oriY);ctx.scale(this.scale,this.scale);ctx.globalAlpha=this.alpha;ctx.fillStyle='#4d9a03';ig.game.setStrokeStyle('#FFF',5);ig.game.roundRect(-this.halfX,-this.halfY,this.size.x,this.size.y,5);ig.game.setTextStyle(this.titleFont,"#FFF","center");ig.game.drawText(this.title,0,this.titleY);for(var i=0;i<this.children.length;i++){this.children[i].draw2();}
this.drawExtra();ctx.restore();},callback:function(params){},callbackIn:function(){},drawExtra:function(){}});});

// lib/game/entities/buttons/button-players.js
ig.baked=true;ig.module('game.entities.buttons.button-players').requires('game.entities.buttons.button-2-images').defines(function(){EntityButtonPlayers=EntityButton2Images.extend({image:new ig.Image('media/graphics/sprites/ui/buttons/player2.png'),image2:new ig.Image('media/graphics/sprites/ui/buttons/player4.png'),imagePressed:new ig.Image('media/graphics/sprites/ui/buttons/player2-pressed.png'),imagePressed2:new ig.Image('media/graphics/sprites/ui/buttons/player4-pressed.png'),numOfPlayers:2,init:function(x,y,settings){if(settings.numOfPlayers==4){this.image=this.image2;this.imagePressed=this.imagePressed2;}
this.parent(x,y,settings);},callback:function(){ig.game.roomSize=this.numOfPlayers;this.parents.kill();ig.game.currentLayer=ig.game.layers.BASE;if(ig.game.homeControl){if(ig.game.botMode)ig.game.homeControl.startGame();else if(ig.game.privateMode)ig.game.spawnEntity(EntityPopupPrivate,0,0);else ig.game.homeControl.requestGame();}},draw2:function(){if(this.isClicked)this.imagePressed.draw(this.drawX,this.drawY);else this.image.draw(this.drawX,this.drawY);}});});

// lib/game/entities/ui/popup-size.js
ig.baked=true;ig.module('game.entities.ui.popup-size').requires('game.entities.ui.popup','game.entities.buttons.button-players').defines(function(){EntityPopupSize=EntityPopup.extend({size:{x:460,y:300},titleSize:42,titleDy:60,init:function(x,y,settings){if(ig.game.isMobile){this.size.x=300;this.size.y=460;this.titleDy=-40;}
this.parent(x,y,settings);this.title=_TEXT.Game.GameSize;this.autoSelectTriggered=false;},spawnElements:function(){var bt1X,bt1Y,bt2X,bt2Y,btBackY,btAnchorY=0;if(ig.game.isMobile){bt1X=bt2X=ig.game.centerX;bt1Y=ig.game.centerY-100;bt2Y=ig.game.centerY+100;btBackY=this.pos.y+this.size.y+40;btAnchorY=0.5;}else{bt1X=ig.game.centerX-100;bt2X=ig.game.centerX+100;bt1Y=bt2Y=ig.game.centerY-50;btBackY=this.pos.y+this.size.y-35;}
this.spawnEntity(EntityButtonPlayers,bt1X,bt1Y,{isShown:false,anchor:{y:btAnchorY}});this.spawnEntity(EntityButtonPlayers,bt2X,bt2Y,{isShown:false,numOfPlayers:4,anchor:{y:btAnchorY}});this.spawnEntity(EntityButtonBack,ig.game.centerX,btBackY,{isShown:false});ig.game.sortEntitiesDeferred();},update:function(){this.parent();if(!this.autoSelectTriggered&&this.scale>=1&&ig.game.gameInitData&&ig.game.gameInitData.playerCount){console.log('✅ Auto-selecting player count:',ig.game.gameInitData.playerCount);this.autoSelectTriggered=true;var playerCount=ig.game.gameInitData.playerCount;setTimeout(function(){var buttons=ig.game.getEntitiesByType(EntityButtonPlayers);var button=null;for(var i=0;i<buttons.length;i++){if(buttons[i].numOfPlayers===playerCount){button=buttons[i];break;}}
if(button&&button.callback){console.log('✅ Clicking',playerCount,'players button');button.callback();}},200);}},callback:function(){ig.game.spawnEntity(EntityPopupMode,0,0);}});});

// lib/game/entities/buttons/button-online-mode.js
ig.baked=true;ig.module('game.entities.buttons.button-online-mode').requires('game.entities.buttons.button-2-images').defines(function(){EntityButtonOnlineMode=EntityButton2Images.extend({image:new ig.Image('media/graphics/sprites/ui/buttons/online.png'),imagePressed:new ig.Image('media/graphics/sprites/ui/buttons/online-pressed.png'),callback:function(){ig.game.botMode=false;this.parents.scaleOut(2);},draw2:function(){if(this.isClicked)this.imagePressed.draw(this.drawX,this.drawY);else this.image.draw(this.drawX,this.drawY);}});});

// lib/game/entities/buttons/button-private.js
ig.baked=true;ig.module('game.entities.buttons.button-private').requires('game.entities.buttons.button-2-images').defines(function(){EntityButtonPrivate=EntityButton2Images.extend({image:new ig.Image('media/graphics/sprites/ui/buttons/private.png'),imagePressed:new ig.Image('media/graphics/sprites/ui/buttons/private-pressed.png'),callback:function(){ig.game.botMode=false;ig.game.privateMode=true;this.parents.scaleOut(2);},draw2:function(){if(this.isClicked)this.imagePressed.draw(this.drawX,this.drawY);else this.image.draw(this.drawX,this.drawY);}});});

// lib/game/entities/buttons/button-connect.js
ig.baked=true;ig.module('game.entities.buttons.button-connect').requires('game.entities.buttons.button-2-images').defines(function(){EntityButtonConnect=EntityButton2Images.extend({image:new ig.Image('media/graphics/sprites/ui/buttons/connect.png'),imagePressed:new ig.Image('media/graphics/sprites/ui/buttons/connect-pressed.png'),callback:function(){var pw=ig.game.pwInput.val();if(pw.trim()=="")return;ig.game.pwInput.hide();this.parents.kill();ig.game.currentLayer=ig.game.layers.BASE;ig.game.homeControl.requestGame();},draw2:function(){if(this.isClicked)this.imagePressed.draw(this.drawX,this.drawY);else this.image.draw(this.drawX,this.drawY);}});});

// lib/game/entities/ui/popup-private.js
ig.baked=true;ig.module('game.entities.ui.popup-private').requires('game.entities.ui.popup','game.entities.buttons.button-connect').defines(function(){EntityPopupPrivate=EntityPopup.extend({size:{x:460,y:300},titleSize:42,titleDy:60,init:function(x,y,settings){if(ig.game.isMobile){this.size.x=360;this.size.y=180;this.titleDy=-40;}
this.parent(x,y,settings);this.title=_TEXT.Game.PrivateGame;this.autoConnectTriggered=false;},spawnElements:function(){var btBackY,btConnectY=0;if(ig.game.isMobile){btBackY=this.pos.y+this.size.y+40;btAnchorY=0.5;btConnectY=this.pos.y+100;}else{btBackY=this.pos.y+this.size.y-35;btConnectY=this.pos.y+170;}
this.spawnEntity(EntityButtonBack,ig.game.centerX,btBackY,{isShown:false});this.spawnEntity(EntityButtonConnect,ig.game.centerX,btConnectY,{isShown:false});ig.game.sortEntitiesDeferred();},update:function(){this.parent();if(!this.autoConnectTriggered&&this.scale>=1&&ig.game.gameInitData&&ig.game.gameInitData.gameType==='private'&&ig.game.gameInitData.roomNumber){this.autoConnectTriggered=true;console.log('✅ Auto-filling private room password:',ig.game.gameInitData.roomNumber);setTimeout(function(){if(ig.game.pwInput){ig.game.pwInput.val(ig.game.gameInitData.roomNumber);}
setTimeout(function(){var connectButton=ig.game.getEntitiesByType(EntityButtonConnect)[0];if(connectButton&&connectButton.callback){console.log('✅ Auto-clicking connect button');connectButton.callback();}},300);},200);}},callbackIn:function(){ig.game.pwInput.val("");ig.game.pwInput.fadeIn();},callback:function(){ig.game.spawnEntity(EntityPopupMode,0,0);},scaleOut:function(params){this.parent(params);ig.game.pwInput.fadeOut();ig.game.privateMode=false;}});});

// lib/game/entities/buttons/button-bot-mode.js
ig.baked=true;ig.module('game.entities.buttons.button-bot-mode').requires('game.entities.buttons.button-2-images').defines(function(){EntityButtonBotMode=EntityButton2Images.extend({image:new ig.Image('media/graphics/sprites/ui/buttons/bot.png'),imagePressed:new ig.Image('media/graphics/sprites/ui/buttons/bot-pressed.png'),callback:function(){ig.game.botMode=true;this.parents.scaleOut(2);},draw2:function(){if(this.isClicked)this.imagePressed.draw(this.drawX,this.drawY);else this.image.draw(this.drawX,this.drawY);}});});

// lib/game/entities/ui/popup-mode.js
ig.baked=true;ig.module('game.entities.ui.popup-mode').requires('game.entities.ui.popup','game.entities.buttons.button-online-mode','game.entities.buttons.button-private','game.entities.ui.popup-private','game.entities.buttons.button-bot-mode').defines(function(){EntityPopupMode=EntityPopup.extend({size:{x:600,y:300},titleSize:42,titleDy:60,init:function(x,y,settings){if(ig.game.isMobile){this.size.x=300;this.size.y=600;this.titleDy=-40;}
this.parent(x,y,settings);this.title=_TEXT.Game.GameMode;this.autoSelectTriggered=false;},spawnElements:function(){var bt1X,bt1Y,bt2X,bt2Y,bt3X,bt3Y,btBackY,btAnchorY=0;if(ig.game.isMobile){bt1X=bt2X=bt3X=ig.game.centerX;bt1Y=ig.game.centerY-186;bt2Y=ig.game.centerY;bt3Y=ig.game.centerY+186;btBackY=this.pos.y+this.size.y+40;btAnchorY=0.5;}else{bt1X=ig.game.centerX-186;bt2X=ig.game.centerX;bt3X=ig.game.centerX+186;bt1Y=bt2Y=bt3Y=ig.game.centerY-50;btBackY=this.pos.y+this.size.y-35;}
this.spawnEntity(EntityButtonBotMode,bt1X,bt1Y,{isShown:false,anchor:{y:btAnchorY}});this.spawnEntity(EntityButtonOnlineMode,bt2X,bt2Y,{isShown:false,anchor:{y:btAnchorY}});this.spawnEntity(EntityButtonPrivate,bt3X,bt3Y,{isShown:false,anchor:{y:btAnchorY}});this.spawnEntity(EntityButtonBack,ig.game.centerX,btBackY,{isShown:false});ig.game.sortEntitiesDeferred();},update:function(){this.parent();if(!this.autoSelectTriggered&&this.scale>=1&&ig.game.gameInitData&&ig.game.gameInitData.gameType){console.log('✅ Auto-selecting game mode:',ig.game.gameInitData.gameType);this.autoSelectTriggered=true;var gameType=ig.game.gameInitData.gameType;setTimeout(function(){var button=null;if(gameType==='bots'){button=ig.game.getEntitiesByType(EntityButtonBotMode)[0];}else if(gameType==='online'){button=ig.game.getEntitiesByType(EntityButtonOnlineMode)[0];}else if(gameType==='private'){button=ig.game.getEntitiesByType(EntityButtonPrivate)[0];}
if(button&&button.callback){console.log('✅ Clicking',gameType,'button');button.callback();}},200);}},callback:function(params){if(params==null){}else{ig.game.spawnEntity(EntityPopupSize,0,0);}}});});

// lib/game/entities/ui/slider.js
ig.baked=true;ig.module('game.entities.ui.slider').requires('impact.entity').defines(function(){EntitySlider=ig.Entity.extend({collides:ig.Entity.COLLIDES.NEVER,type:ig.Entity.TYPE.A,bar0:new ig.Image("media/graphics/sprites/ui/bar0.png"),bar1:new ig.Image("media/graphics/sprites/ui/bar1.png"),slider:new ig.Image("media/graphics/sprites/ui/slider.png"),isMusic:true,isClicked:false,icon:null,init:function(x,y,settings){this.parent(x,y,settings);this.size.x=this.bar1.width;this.size.y=this.slider.height;this.bar1Dy=(this.size.y-this.bar1.height)/2;this.bar0Dy=(this.size.y-this.bar0.height)/2;this.minX=this.pos.x-3;this.maxX=this.pos.x+this.size.x-this.slider.width+3;var vol=1;if(this.isMusic){vol=ig.storage.load("music");}else{vol=ig.storage.load("sound");}
this.sliderX=this.minX+vol*(this.maxX-this.minX);this.sliderHalfWidth=this.slider.width/2;this.iconX=this.pos.x-this.icon.width-13;this.iconDY=(this.size.y-this.icon.height)/2;},draw:function(){},setupDrawing:function(){this.bar0X=this.pos.x-this.parents.oriX;this.bar0Y=this.pos.y+this.bar0Dy-this.parents.oriY;this.iconX-=this.parents.oriX;this.iconY=this.pos.y+this.iconDY-this.parents.oriY;this.drawX=this.pos.x-this.parents.oriX;this.drawY=this.pos.y+this.bar1Dy-this.parents.oriY;this.sliderY=this.pos.y-this.parents.oriY;},draw2:function(){this.bar0.draw(this.bar0X,this.bar0Y);var x=this.sliderX-this.minX+this.sliderHalfWidth;ig.system.context.drawImage(this.bar1.data,0,0,x,this.bar1.height,this.drawX,this.drawY,x,this.bar1.height);this.slider.draw(this.sliderX-this.parents.oriX,this.sliderY);this.icon.draw(this.iconX,this.iconY);},clicking:function(){if(this.isClicked==false)return;var x=ig.game.io.getClickPos().x-this.slider.width/2;if(x<this.minX)this.sliderX=this.minX;else if(x>this.maxX)this.sliderX=this.maxX;else this.sliderX=x;},clicked:function(){this.isClicked=true;},update:function(){this.parent();if(ig.input.released("click")&&this.isClicked){this.isClicked=false;var vol=(this.sliderX-this.minX)/(this.maxX-this.minX);if(this.isMusic){ig.storage.save('music',vol);ig.soundHandler.bgmPlayer.volume(vol);}else{ig.storage.save('sound',vol);ig.soundHandler.sfxPlayer.volume(vol);}
ig.soundHandler.sfxPlayer.play("button");}}});});

// lib/game/entities/ui/slider-sound.js
ig.baked=true;ig.module('game.entities.ui.slider-sound').requires('game.entities.ui.slider').defines(function(){EntitySliderSound=EntitySlider.extend({icon:new ig.Image("media/graphics/sprites/ui/sound.png"),isMusic:false,init:function(x,y,settings){this.parent(x,y,settings);}});});

// lib/game/entities/ui/slider-music.js
ig.baked=true;ig.module('game.entities.ui.slider-music').requires('game.entities.ui.slider').defines(function(){EntitySliderMusic=EntitySlider.extend({icon:new ig.Image("media/graphics/sprites/ui/music.png"),init:function(x,y,settings){this.parent(x,y,settings);},clicking:function(){this.parent();var vol=(this.sliderX-this.minX)/(this.maxX-this.minX);ig.soundHandler.bgmPlayer.volume(vol);}});});

// lib/game/entities/ui/popup-settings.js
ig.baked=true;ig.module('game.entities.ui.popup-settings').requires('game.entities.ui.popup','game.entities.ui.slider-sound','game.entities.ui.slider-music','game.entities.buttons.button-back').defines(function(){EntityPopupSettings=EntityPopup.extend({init:function(x,y,settings){this.parent(x,y,settings);this.title=_TEXT.Game.Settings;ig.game.nameInput.hide();},spawnElements:function(){this.spawnEntity(EntitySliderSound,this.pos.x+105,this.pos.y+140);this.spawnEntity(EntitySliderMusic,this.pos.x+105,this.pos.y+230);this.spawnEntity(EntityButtonBack,this.oriX,this.pos.y+315,{anchor:{x:0.5},isShown:false,greenStyle:true});ig.game.sortEntitiesDeferred();},callback:function(){}});});

// lib/game/entities/buttons/button-settings.js
ig.baked=true;ig.module('game.entities.buttons.button-settings').requires('game.entities.buttons.button-2-images','game.entities.ui.popup-settings').defines(function(){EntityButtonSettings=EntityButton2Images.extend({image:new ig.Image('media/graphics/sprites/ui/buttons/setting.png'),imagePressed:new ig.Image('media/graphics/sprites/ui/buttons/setting-pressed.png'),anchor:{x:1,y:0.5},callback:function(){ig.game.spawnEntity(EntityPopupSettings,0,0);try{ig.soundHandler.unlockWebAudio();}catch(error){}},});});

// lib/game/entities/buttons/button-reconnect.js
ig.baked=true;ig.module('game.entities.buttons.button-reconnect').requires('game.entities.buttons.button-2-images').defines(function(){EntityButtonReconnect=EntityButton2Images.extend({image:new ig.Image('media/graphics/sprites/ui/buttons/reconnect.png'),imagePressed:new ig.Image('media/graphics/sprites/ui/buttons/reconnect-pressed.png'),init:function(x,y,settings){this.parent(x,y,settings);this.pos.x=10;this.pos.y=ig.system.height-35-this.image.height;this.pos0=ig.copy(this.pos);},callback:function(){if(!ig.game.network_client.socket||ig.game.network_client.socket.disconnected){ig.game.nameInput.hide();this.parents.connect();ig.game.connectInterval=setInterval(function(){ig.game.network_client.connect();},3000);}else{this.fadeOut();}},fadeOut:function(){this.stopTweens();this.tween({alpha:0},0.2,{onComplete:function(){this.kill();}.bind(this)}).start();},update:function(){this.parent();this.pos.x=ig.game.screen.x+this.pos0.x;this.pos.y=ig.game.screen.y+this.pos0.y;}});});

// lib/game/entities/buttons/button.js
ig.baked=true;ig.module('game.entities.buttons.button').requires('impact.entity').defines(function(){EntityButton=ig.Entity.extend({collides:ig.Entity.COLLIDES.NEVER,type:ig.Entity.TYPE.A,fillColor:null,layer:0,isClicked:false,scale:{x:1,y:1},animImage:new ig.Image('media/graphics/sprites/ui/buttons/pause.png'),enabled:true,isShown:true,withText:false,alpha:1,anchor:{x:0.5,y:0},buttonText:"",init:function(x,y,settings){this.parent(x,y,settings);this.setAnim();this.setAnchor(this.anchor.x,this.anchor.y);this.layer=ig.game.currentLayer;this.scaleX0=this.scale.x;this.scaleY0=this.scale.y;this.scaleX1=this.scaleX0*0.9;this.scaleY1=this.scaleY0*0.9;this.scaleX2=this.scaleX0*1.04;this.scaleY2=this.scaleY0*1.04;},ready:function(){this.parent();this.clickTime=ig.system.clock.delta();},setAnim:function(){this.animSheet=new ig.AnimationSheet(this.animImage.path,this.animImage.width,this.animImage.height);this.addAnim("idle",1,[0],true);this.size.x=this.animSheet.width*this.scale.x;this.size.y=this.animSheet.height*this.scale.y;},clicked:function(){var temp=this.clickTime;this.clickTime=ig.system.clock.delta();if(this.clickTime-temp<0.35){return;}
if(!this.enabled)return;if(ig.game.currentLayer!=this.layer)return;this.isClicked=true;this.tween({scale:{x:this.scaleX1,y:this.scaleY1}},0.025).start();ig.soundHandler.sfxPlayer.play("button");},released:function(){if(this.isClicked&&this.enabled){ig.domHandler.getElementById("#canvas").css("cursor","default");this.isClicked=false;this.tween({scale:{x:this.scaleX0,y:this.scaleY0}},0.025,{onComplete:function(){this.callback();}.bind(this)}).start();}},leave:function(){this.isClicked=false;ig.domHandler.getElementById("#canvas").css("cursor","default");this.tween({scale:{x:this.scaleX0,y:this.scaleY0}},0.025).start();},over:function(){if(ig.game.currentLayer==this.layer&&this.enabled){ig.domHandler.getElementById("#canvas").css("cursor","pointer");this.tween({scale:{x:this.scaleX2,y:this.scaleY2}},0.025).start();}},draw:function(){if(this.isShown){var ctx=ig.system.context;ctx.save();ctx.globalAlpha=this.alpha;ctx.translate(ig.system.getDrawPos(this.pos.x.round()-ig.game.screen.x+this.size.x/2-this.offset.x),ig.system.getDrawPos(this.pos.y.round()-ig.game.screen.y+this.size.y/2-this.offset.y));ctx.scale(this.scale.x,this.scale.y);if(this.currentAnim){this.currentAnim.draw(-this.size.x/2,-this.size.y/2);}
if(this.withText){this.drawText();}
ctx.restore();}},setupDrawing:function(){this.drawX=this.pos.x-this.parents.oriX;this.drawY=this.pos.y-this.parents.oriY;},draw2:function(){this.currentAnim.draw(this.drawX,this.drawY);},callback:function(){},drawText:function(){ig.game.setTextStyle('28px title','#FFF','center');ig.game.drawText(this.buttonText,0,10);},setShown:function(isShown){this.isShown=this.enabled=isShown;},fadeIn:function(){this.tween({alpha:1},0.2).start();},fadeOut:function(){this.stopTweens();this.tween({alpha:0},0.2).start();},});});

// lib/game/entities/buttons/button-switch.js
ig.baked=true;ig.module('game.entities.buttons.button-switch').requires('game.entities.buttons.button').defines(function(){EntityButtonSwitch=EntityButton.extend({isOn:true,animImageON:null,animImageOFF:null,init:function(x,y,settings){this.parent(x,y,settings);},setAnim:function(){var animSheetON=new ig.AnimationSheet(this.animImageON.path,this.animImageON.width,this.animImageON.height);this.anims.on=new ig.Animation(animSheetON,1,[0],true);var animSheetOFF=new ig.AnimationSheet(this.animImageOFF.path,this.animImageOFF.width,this.animImageOFF.height);this.anims.off=new ig.Animation(animSheetOFF,1,[0],true);this.getStatus();this.setStatus();this.size.x=this.animImageON.width*this.scale.x;this.size.y=this.animImageON.height*this.scale.y;},getStatus:function(){},setStatus:function(){if(this.isOn){this.currentAnim=this.anims.on;}else{this.currentAnim=this.anims.off;}},released:function(){if(this.isClicked&&this.enabled){this.isClicked=false;this.tween({scale:{x:this.scaleX0,y:this.scaleY0}},0.025,{onComplete:function(){this.isOn=!this.isOn;this.setStatus();this.callback();}.bind(this)}).start();}}});});

// lib/game/entities/buttons/clickable-layer.js
ig.baked=true;ig.module('game.entities.buttons.clickable-layer').requires('impact.entity').defines(function(){ClickableLayer=ig.Class.extend({linkID:0,init:function(entity){this.entity=entity;if(typeof ig.game.linkID==='undefined'){ig.game.linkID=0;}else{ig.game.linkID++;}
if(typeof ig.game.clickableLayers==='undefined'){ig.game.clickableLayers=[];}
ig.game.clickableLayers.push(this);this.createLayer();},createLayer:function(){this.linkID=ig.game.linkID;var linkName="_link"+this.linkID;var linkElement=ig.domHandler.create("a");ig.domHandler.attr(linkElement,"id",linkName);ig.domHandler.appendToBody(linkElement);var link=ig.domHandler.getElementById("#"+linkName);ig.domHandler.css(link,{position:"absolute",margin:"0",padding:"0",fontSize:"0px",zIndex:"20000"});this.updateSizePos();if(this.entity.link){link.attr('href',this.entity.link);link.attr('target','_blank');}else{link.click(function(e){e.preventDefault();this.entity.callback();}.bind(this));}},updateSizePos:function(){var linkName="_link"+this.linkID;var link=ig.domHandler.getElementById("#"+linkName);if(ig.ua.mobile){ig.domHandler.css(link,{width:this.entity.size.x*ig.sizeHandler.sizeRatio.x+"px",height:this.entity.size.y*ig.sizeHandler.sizeRatio.x+"px",left:this.entity.pos.x*ig.sizeHandler.sizeRatio.x+"px",top:this.entity.pos.y*ig.sizeHandler.sizeRatio.y+"px"});}else{var canvas=ig.domHandler.getElementById("#canvas");var offsets=ig.domHandler.getOffsets(canvas);var offsetLeft=offsets.left;var offsetTop=offsets.top;ig.domHandler.css(link,{width:this.entity.size.x*ig.sizeHandler.scaleRatioMultiplier.x+"px",height:this.entity.size.y*ig.sizeHandler.scaleRatioMultiplier.x+"px",left:offsetLeft+this.entity.pos.x*ig.sizeHandler.scaleRatioMultiplier.x+"px",top:offsetTop+this.entity.pos.y*ig.sizeHandler.scaleRatioMultiplier.y+"px"});}},hide:function(){var linkName="_link"+this.linkID;var link=ig.domHandler.getElementById("#"+linkName);if(link){ig.domHandler.css(link,{display:"none"});}},show:function(){var linkName="_link"+this.linkID;var link=ig.domHandler.getElementById("#"+linkName);if(link){ig.domHandler.css(link,{display:"block"});}},remove:function(){var linkName="_link"+this.linkID;var link=ig.domHandler.getElementById("#"+linkName);if(link){link.remove();}}});ig.Director.inject({loadLevel:function(levelNumber){if(ig.game&&ig.game.clickableLayers){for(var i=0;i<ig.game.clickableLayers.length;i++){ig.game.clickableLayers[i].remove();}
ig.game.clickableLayers.length=0;}
return this.parent(levelNumber)}});});

// lib/game/entities/buttons/button-fullscreen.js
ig.baked=true;ig.module('game.entities.buttons.button-fullscreen').requires('game.entities.buttons.button-switch','game.entities.buttons.clickable-layer').defines(function(){EntityButtonFullscreen=EntityButtonSwitch.extend({animImageON:new ig.Image("media/graphics/misc/zoom-out.png"),animImageOFF:new ig.Image("media/graphics/misc/zoom-in.png"),position:3,zIndex:50000,init:function(x,y,settings){this.parent(x,y,settings);this.setAnchor(0);switch(this.position){case 1:this.pos.x=this.pos.y=10;break;case 2:this.pos.x=ig.system.width-10-this.size.x;this.pos.y=10;break;case 3:this.pos.x=ig.system.width-10-this.size.x;this.pos.y=ig.system.height-10-this.size.y;break;case 4:this.pos.x=10;this.pos.y=ig.system.height-10-this.size.y;break;}
new ClickableLayer(this);this.updateStatus();ig.game.btFullscreen=this;},callback:function(){if(this.isFullscreen()){this.exitFullscreen();this.currentAnim=this.anims.off;}else{this.requestFullscreen();this.currentAnim=this.anims.on;}},updateStatus:function(){this.isOn=this.isFullscreen();this.setStatus();},isFullscreen:function(){if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)return true;return false;},requestFullscreen:function(){var elem=document.documentElement;if(elem.requestFullscreen){elem.requestFullscreen();return;}
if(elem.webkitRequestFullscreen){elem.webkitRequestFullscreen();return;}
if(elem.mozRequestFullScreen){elem.mozRequestFullScreen();return;}
if(elem.msRequestFullscreen){elem.msRequestFullscreen();return;}},exitFullscreen:function(){if(document.exitFullscreen){document.exitFullscreen();return;}
if(document.webkitExitFullscreen){document.webkitExitFullscreen();return;}
if(document.mozCancelFullScreen){document.mozCancelFullScreen();return;}
if(document.msExitFullscreen){document.msExitFullscreen();return;}}});});

// lib/game/entities/buttons/button-arrow.js
ig.baked=true;ig.module('game.entities.buttons.button-arrow').requires('game.entities.buttons.button-2-images').defines(function(){EntityButtonArrow=EntityButton2Images.extend({image:new ig.Image('media/graphics/sprites/ui/buttons/arrow.png'),imagePressed:new ig.Image('media/graphics/sprites/ui/buttons/arrow-pressed.png'),isNext:true,anchor:{x:0.5,y:0.5},init:function(x,y,settings){this.parent(x,y,settings);if(this.isNext){this.animIdle.flip.x=true;this.animPressed.flip.x=true;}},callback:function(){if(this.isNext)this.parents.goNext();else this.parents.goPrev();},});});

// lib/game/entities/ui/avatar-select.js
ig.baked=true;ig.module('game.entities.ui.avatar-select').requires('game.entities.buttons.button-arrow').defines(function(){EntityAvatarSelect=ig.Entity.extend({avatarBg:new ig.Image('media/graphics/sprites/ui/avatar-bg.png'),avatars:[new ig.Image('media/graphics/sprites/avatars/avatar0.png'),new ig.Image('media/graphics/sprites/avatars/avatar1.png'),new ig.Image('media/graphics/sprites/avatars/avatar2.png'),new ig.Image('media/graphics/sprites/avatars/avatar3.png'),new ig.Image('media/graphics/sprites/avatars/avatar4.png'),new ig.Image('media/graphics/sprites/avatars/avatar5.png'),new ig.Image('media/graphics/sprites/avatars/avatar6.png'),new ig.Image('media/graphics/sprites/avatars/avatar7.png'),new ig.Image('media/graphics/sprites/avatars/avatar8.png'),new ig.Image('media/graphics/sprites/avatars/avatar9.png'),new ig.Image('media/graphics/sprites/avatars/avatar10.png'),new ig.Image('media/graphics/sprites/avatars/avatar11.png')],nAlpha:0,init:function(x,y,settings){this.parent(x,y,settings);this.pos.x=ig.game.centerX-this.avatarBg.width/2;this.setupAvatar();this.btNext=this.spawnEntity(EntityButtonArrow,this.pos.x+this.avatarBg.width,this.pos.y+this.avatarBg.height/2);this.btPrev=this.spawnEntity(EntityButtonArrow,this.pos.x,this.pos.y+this.avatarBg.height/2,{isNext:false});ig.game.sortEntitiesDeferred();},setupAvatar:function(){this.avatar=this.avatars[ig.game.avatarId];this.avatarX=this.pos.x+(this.avatarBg.width-this.avatar.width)/2;this.avatarY=this.pos.y+(this.avatarBg.height-this.avatar.height)/2;this.fadeAvatarIn();},draw:function(){ig.system.context.save();ig.system.context.globalAlpha=this.nAlpha;this.avatar.draw(this.avatarX-ig.game.screen.x,this.avatarY);ig.system.context.restore();},fadeAvatarIn:function(){this.tween({nAlpha:1,},0.25).start();},fadeAvatarOut:function(){this.tween({nAlpha:0,},0.25,{onComplete:function(){this.setupAvatar();}.bind(this)}).start();},goNext:function(){ig.game.avatarId++;if(ig.game.avatarId==this.avatars.length){ig.game.avatarId=0;}
this.fadeAvatarOut();},goPrev:function(){ig.game.avatarId--;if(ig.game.avatarId==-1){ig.game.avatarId=this.avatars.length-1;}
this.fadeAvatarOut();}});});

// lib/game/entities/controllers/home-controller.js
ig.baked=true;ig.module('game.entities.controllers.home-controller').requires('game.entities.buttons.button-play','game.entities.ui.popup-size','game.entities.ui.popup-mode','game.entities.buttons.button-settings','game.entities.buttons.button-reconnect','game.entities.buttons.button-fullscreen','game.entities.ui.avatar-select').defines(function(){EntityHomeController=ig.Entity.extend({logo:new ig.Image('media/graphics/sprites/ui/logo.png'),name:'HomeController',totalRoomRequest:5,init:function(x,y,settings){this.parent(x,y,settings);var overlay=$('#overlay');if(overlay&&overlay.is(":visible"))overlay.hide();ig.game.homeControl=this;if(ig.game.nameInput){ig.game.nameInput.hide();}
ig.game.currentLayer=ig.game.layers.BASE;var p=ig.game.getEntitiesByType(EntityPointer);if(p.length==0)ig.game.spawnEntity(EntityPointer,0,0);ig.game.botMode=false;this.screen=ig.game.screen;if(window.GAME_EXIT_MESSAGE){this.exitMessage=window.GAME_EXIT_MESSAGE;this.exitMessageAlpha=1;window.GAME_EXIT_MESSAGE=null;}
var y0=450,avatarY=185;if(ig.game.isMobile){y0=650;avatarY=350;this.logoY=166;}else{this.logoY=20;}
this.logoX=(ig.system.width-this.logo.width)/2;this.spawnEntity(EntityButtonPlay,ig.game.centerX+20,y0);this.spawnEntity(EntityButtonSettings,ig.game.centerX-45,y0);this.spawnEntity(EntityAvatarSelect,0,avatarY);if(ig.game.gameClient.userCountText==_TEXT.Network.Offline){this.spawnButtonReconnect();}
if(ig.game.shouldConnect&&(!ig.game.network_client.socket||ig.game.network_client.socket.disconnected)){this.connect();}else{ig.game.shouldConnect=true;}
this.requestingGame=false;ig.game.spawnEntity(EntityFade,0,0);$('ul#chatContent').empty();ig.game.gameClient.newMessage=0;this.userOnlineY=ig.system.height-10;this.userOnlineX=10;this.userOnlineTextAlign='left';ig.game.sortEntitiesDeferred();if(window.GAME_AUTO_START&&ig.game.gameInitData){window.GAME_AUTO_START=false;setTimeout(function(){var playButton=ig.game.getEntitiesByType(EntityButtonPlay)[0];if(playButton){playButton.callback();}},500);}},spawnButtonReconnect:function(){this.spawnEntity(EntityButtonReconnect,0,0);},connect:function(){this.overlay=ig.game.spawnEntity(EntityNetworkProcessing,0,0,{text:_TEXT.Network.Connecting,controller:this});this.overlayClosed=false;this.overlay.callback=function(){if(this.overlayClosed)ig.game.network_client.disconnect();}.bind(this);ig.game.network_client.connect();},playWithBot:function(){this.startGame();},draw:function(){var ctx=ig.system.context;ctx.fillStyle='#0d3d1f';ctx.fillRect(0,0,ig.system.width,ig.system.height);this.logo.draw(this.logoX-ig.game.screen.x,this.logoY);if(this.exitMessage&&this.exitMessageAlpha>0){ctx.save();ctx.globalAlpha=this.exitMessageAlpha;ig.game.setTextStyle('35px text','#ff4444','center');ig.game.drawText(this.exitMessage,ig.game.centerX,ig.game.centerY-50);ctx.restore();this.exitMessageAlpha-=0.01;if(this.exitMessageAlpha<=0){this.exitMessage=null;}}
if(ig.game.playerName){var avatarY=ig.game.isMobile?350:185;var playButtonY=ig.game.isMobile?650:450;var nameY=avatarY+(playButtonY-avatarY)/2+40;ig.game.setTextStyle('25px text','#ffffff','center');ig.game.drawText(ig.game.playerName,ig.game.centerX,nameY);}
ig.game.setTextStyle('18px text','#FFF',this.userOnlineTextAlign);ig.game.drawText(ig.game.gameClient.userCountText,this.userOnlineX,this.userOnlineY);},leaveRoomCompleted:function(){if(this.requestOverlay){if(this.cancelRequest){this.requestOverlay.fadeOut();}}},requestRoomConfirmed:function(data){},requestRoomRejected:function(){this.requestingGame=false;if(this.requestOverlay)this.requestOverlay.fadeOut();},requestGame:function(){if(this.requestingGame)return;if(!ig.game.network_client.socket||ig.game.network_client.socket.disconnected){ig.game.gameClient.showNetworkError(_TEXT.Network.NoServerConnected);return;}
this.requestingGame=true;this.cancelRequest=false;ig.game.gameClient.numOfPlayers=1;var overlayText=ig.game.roomSize==2?_TEXT.Network.SearchingGame:_TEXT.Network.SearchingGames;this.requestOverlay=ig.game.spawnEntity(EntityNetworkProcessing,0,0,{text:overlayText,controller:this,showPlayersNum:true});this.requestOverlay.callback=function(){this.requestingGame=false;}.bind(this);this.requestOverlay.btClose.callback=function(){ig.game.gameClient.cancelRequestGame();this.cancelRequest=true;this.requestOverlay.changeText(_TEXT.Network.CancelGameRequest);}.bind(this);ig.game.requestingState=false;this.performRequest();},performRequest:function(){var requestInfo={};requestInfo.playerName=ig.game.playerName;requestInfo.avatarId=ig.game.avatarId;requestInfo.roomSize=ig.game.roomSize;if(ig.game.gameInitData){if(ig.game.gameInitData.gameType){requestInfo.roomType=ig.game.gameInitData.gameType;}
if(ig.game.gameInitData.payAmount){requestInfo.payAmount=ig.game.gameInitData.payAmount;}}
console.log('🎯 Requesting room with filters:',{roomSize:requestInfo.roomSize,roomType:requestInfo.roomType,payAmount:requestInfo.payAmount});ig.game.gameClient.requestGame(requestInfo);},startGame:function(){ig.game.spawnEntity(EntityFade,0,0,{fadeOut:true,callback:function(){ig.game.director.jumpTo(LevelGame);}});},});});

// lib/game/levels/home.js
ig.baked=true;ig.module('game.levels.home').requires('game.entities.controllers.home-controller').defines(function(){LevelHome={"entities":[{"type":"EntityHomeController","x":0,"y":0}],"layer":[]};});

// lib/game/entities/ui/popup-pause.js
ig.baked=true;ig.module('game.entities.ui.popup-pause').requires('game.entities.ui.popup','game.entities.ui.slider-sound','game.entities.ui.slider-music','game.entities.buttons.button-home','game.entities.buttons.button-back').defines(function(){EntityPopupPause=EntityPopup.extend({init:function(x,y,settings){this.parent(x,y,settings);this.title=_TEXT.Game.GamePause;this.control=ig.game.getEntityByName('GameController');if(ig.game.botMode)this.control.pause();},spawnElements:function(){this.spawnEntity(EntitySliderSound,this.pos.x+105,this.pos.y+140);this.spawnEntity(EntitySliderMusic,this.pos.x+105,this.pos.y+230);this.spawnEntity(EntityButtonBack,this.oriX-60,this.pos.y+315,{isShown:false,greenStyle:true});this.spawnEntity(EntityButtonHome,this.oriX+60,this.pos.y+315,{isShown:false});ig.game.sortEntitiesDeferred();},callback:function(){if(ig.game.botMode)this.control.unpause();}});});

// lib/game/entities/buttons/button-pause.js
ig.baked=true;ig.module('game.entities.buttons.button-pause').requires('game.entities.buttons.button-2-images','game.entities.ui.popup-pause').defines(function(){EntityButtonPause=EntityButton2Images.extend({image:new ig.Image('media/graphics/sprites/ui/buttons/pause.png'),imagePressed:new ig.Image('media/graphics/sprites/ui/buttons/pause-pressed.png'),init:function(x,y,settings){this.parent(x,y,settings);if(ig.game.isMobile){this.pos.x=10;this.pos.y=ig.system.height-10-this.size.y;}else{this.pos.x=ig.system.width-10-this.size.x;this.pos.y=10;}},callback:function(){ig.game.spawnEntity(EntityPopupPause,0,0);},});});

// lib/game/entities/board.js
ig.baked=true;ig.module('game.entities.board').requires('impact.entity').defines(function(){EntityBoard=ig.Entity.extend({image:new ig.Image('media/graphics/sprites/ludo_board.png'),angle:0,emptyTile:new ig.Image('media/graphics/sprites/tile0.png'),leftSticker:new ig.Image('media/graphics/sprites/left.png'),tileImages:[new ig.Image('media/graphics/sprites/tile-purple.png'),new ig.Image('media/graphics/sprites/tile-green.png'),new ig.Image('media/graphics/sprites/tile-red.png'),new ig.Image('media/graphics/sprites/tile-blue.png')],tileImagesStars:[new ig.Image('media/graphics/sprites/star-purple.png'),new ig.Image('media/graphics/sprites/star-green.png'),new ig.Image('media/graphics/sprites/star-red.png'),new ig.Image('media/graphics/sprites/star-blue.png')],tileImagesArrows:[new ig.Image('media/graphics/sprites/1.png'),new ig.Image('media/graphics/sprites/2.png'),new ig.Image('media/graphics/sprites/3.png'),new ig.Image('media/graphics/sprites/4.png')],homePosImages:[new ig.Image('media/graphics/sprites/blue-start.png'),new ig.Image('media/graphics/sprites/blue-start.png'),new ig.Image('media/graphics/sprites/blue-start.png'),new ig.Image('media/graphics/sprites/blue-start.png')],safePosImages:[new ig.Image('media/graphics/sprites/safe-blue.png'),new ig.Image('media/graphics/sprites/safe-blue.png'),new ig.Image('media/graphics/sprites/safe-blue.png'),new ig.Image('media/graphics/sprites/safe-blue.png')],stickerPos:[],init:function(x,y,settings){this.parent(x,y,settings);this.size.x=this.image.width;this.size.y=this.image.height;this.halfSize=this.size.x/2;if(ig.game.isMobile){this.pos.x=ig.game.centerX-this.image.width/2;this.pos.y=ig.game.centerY-this.image.height/2-70;}else{this.pos.x=ig.game.centerX-this.image.width/2-70;this.pos.y=ig.game.centerY-this.image.height/2+4;}
this.centerPos=this.getCenter();var ds=ig.game.cellSize;this.movingArray=[{dx:0,dy:-ds},{dx:0,dy:-ds},{dx:0,dy:-ds},{dx:0,dy:-ds},{dx:0,dy:-ds},{dx:-ds,dy:-ds},{dx:-ds,dy:0},{dx:-ds,dy:0},{dx:-ds,dy:0},{dx:-ds,dy:0},{dx:-ds,dy:0},{dx:0,dy:-ds},{dx:0,dy:-ds},{dx:ds,dy:0},{dx:ds,dy:0},{dx:ds,dy:0},{dx:ds,dy:0},{dx:ds,dy:0},{dx:ds,dy:-ds},{dx:0,dy:-ds},{dx:0,dy:-ds},{dx:0,dy:-ds},{dx:0,dy:-ds},{dx:0,dy:-ds},{dx:ds,dy:0},{dx:ds,dy:0},{dx:0,dy:ds},{dx:0,dy:ds},{dx:0,dy:ds},{dx:0,dy:ds},{dx:0,dy:ds},{dx:ds,dy:ds},{dx:ds,dy:0},{dx:ds,dy:0},{dx:ds,dy:0},{dx:ds,dy:0},{dx:ds,dy:0},{dx:0,dy:ds},{dx:0,dy:ds},{dx:-ds,dy:0},{dx:-ds,dy:0},{dx:-ds,dy:0},{dx:-ds,dy:0},{dx:-ds,dy:0},{dx:-ds,dy:ds},{dx:0,dy:ds},{dx:0,dy:ds},{dx:0,dy:ds},{dx:0,dy:ds},{dx:0,dy:ds},{dx:-ds,dy:0},{dx:-ds,dy:0}];this.tileMap=[[0,1,0],[0,1,0],[0,1,0],[0,1,2],[3,1,0],[0,4,0]];var tileSize=32,ds=2;this.tileX=-tileSize*1.5-ds;this.tileY=52;this.dTile=tileSize+ds;this.homePos=[[{x:125,y:431},{x:125,y:388},{x:82,y:388},{x:82,y:431}],[{x:125,y:125},{x:125,y:82},{x:82,y:82},{x:82,y:125}],[{x:431,y:125},{x:431,y:82},{x:388,y:82},{x:388,y:125}],[{x:431,y:431},{x:431,y:388},{x:388,y:388},{x:388,y:431}]];this.homePos0=ig.copy(this.homePos);for(var i=0;i<4;i++){for(var j=0;j<4;j++){this.homePos[i][j].x+=this.pos.x;this.homePos[i][j].y+=this.pos.y;this.homePos0[i][j].x+=this.pos.x-18;this.homePos0[i][j].y+=this.pos.y-18;}}},rotateHomePosImages:function(){for(var i=0;i<this.parents.boardRotation;i++){this.mutableRotateLeft(this.homePosImages);}},mutableRotateRight:function(arr){arr.unshift(arr.pop())
return arr;},mutableRotateLeft:function(arr){arr.push(arr.shift());return arr;},drawSticker:function(pos){this.stickerPos.push(pos);},draw:function(){ig.system.context.save();ig.system.context.translate(this.centerPos.x,this.centerPos.y);ig.system.context.rotate(this.angle);this.image.draw(-this.halfSize,-this.halfSize);for(var t=0;t<4;t++){if(t>0){ig.system.context.rotate(Math.PI/2);}
for(var i=0;i<6;i++){for(var j=0;j<3;j++){var tile;switch(this.tileMap[i][j]){case 0:tile=this.emptyTile;break;case 1:tile=this.tileImages[t];break;case 2:tile=this.safePosImages[t];break;case 3:tile=this.tileImagesStars[t];break;case 4:tile=this.tileImagesArrows[t];break;}
var tX=this.tileX+j*this.dTile,tY=this.tileY+i*this.dTile;tile.draw(tX,tY);}}}
ig.system.context.restore();for(var i=0;i<4;i++){var img=this.homePosImages[i];for(var j=0;j<4;j++){var p=this.homePos0[i][j];img.draw(p.x,p.y);}}
for(var i=0;i<this.stickerPos.length;i++){var pos=this.stickerPos[i];this.leftSticker.draw(pos.x,pos.y);}}});});

// lib/game/entities/tutorial-hand.js
ig.baked=true;ig.module('game.entities.tutorial-hand').requires('impact.entity').defines(function(){EntityTutorialHand=ig.Entity.extend({zIndex:1000,image:new ig.Image('media/graphics/sprites/ui/hand.png'),isShown:false,init:function(x,y,settings){this.parent(x,y,settings);this.animSheet=new ig.AnimationSheet(this.image.path,this.image.width,this.image.height);this.size.x=this.animSheet.width;this.size.y=this.animSheet.height;this.addAnim('idle',1,[0],true);if(ig.game.isMobile)this.currentAnim.flip.y=-1;this.currentAnim.alpha=0;},setupPos:function(pos,nextY){this.nextY=nextY;this.pos.x=this.posX0=pos.x;this.pos.y=this.posY0=pos.y;},draw:function(){if(this.isShown)this.parent();},fadeIn:function(){if(this.isShown)return;this.isShown=true;this.tween({currentAnim:{alpha:1}},0.3,{onComplete:function(){this.animates();}.bind(this)}).start();},fadeOut:function(){if(!this.isShown)return;this.tween({currentAnim:{alpha:0}},0.15,{onComplete:function(){this.isShown=false;this.stopTweens();this.pos.x=this.posX0;this.pos.y=this.posY0;}.bind(this)}).start();},animates:function(){this.tween({pos:{y:this.nextY}},0.45,{loop:ig.Tween.Loop.Reverse,loopCount:-1}).start();}});});

// lib/game/entities/dice.js
ig.baked=true;ig.module('game.entities.dice').requires('impact.entity','game.entities.tutorial-hand').defines(function(){EntityDice=ig.Entity.extend({type:ig.Entity.TYPE.A,image:new ig.Image('media/graphics/sprites/dice.png'),readyImage:new ig.Image('media/graphics/sprites/dice-ready.png'),value:1,alpha:0,clickReady:false,isPaused:false,init:function(x,y,settings){this.parent(x,y,settings);this.size.x=this.size.y=this.image.width/3;this.rollingTimer=new ig.Timer(0.02);this.rollingTimer.pause();this.rollingTimes=0;this.totalRolls=24;this.xangle=0;this.halfSize=this.size.x/2;this.hand=this.spawnEntity(EntityTutorialHand,0,0);var handPos,nextY;if(ig.game.isMobile){handPos={x:139.5+(this.size.x-this.hand.size.x)/2,y:692.5+this.size.y+8};nextY=handPos.y+30;}else{handPos={x:35.5+(this.size.x-this.hand.size.x)/2,y:325.5-8-this.hand.size.y};nextY=handPos.y-30;}
this.hand.setupPos(handPos,nextY);},setReady:function(){this.parents.checkSmallHorses();this.setReady0();},setReady0:function(){this.tween({alpha:0,},0.2,{onComplete:function(){this.pos.x=this.parents.currentPlayer.dicePos.x;this.pos.y=this.parents.currentPlayer.dicePos.y;this.centerX=this.getCenterX();this.centerY=this.getCenterY();this.isRolling=false;this.isReady=true;this.tween({alpha:1},0.2,{onComplete:function(){if(ig.game.botMode){if(this.parents.currentPlayer.isMainPlayer){this.readyPlaying();this.parents.currentPlayer.checkAuto();}else{setTimeout(function(){this.rollingBot();}.bind(this),450);}}else if(this.parents.players.length>1){this.parents.currentPlayer.startCountdown();ig.game.gameClient.emitEvent(network.Events.CHECK_AUTO);if(this.parents.currentPlayer.isMainPlayer){this.readyPlaying();this.parents.currentPlayer.checkAuto();}}}.bind(this)}).start();}.bind(this)}).start();},readyPlaying:function(){this.hand.fadeIn();this.clickReady=true;},draw:function(){ig.system.context.save();ig.system.context.globalAlpha=this.alpha;if(this.isReady){this.readyImage.draw(this.pos.x-5,this.pos.y-7);}else if(this.isRolling){ig.system.context.translate(this.centerX,this.centerY);ig.system.context.rotate(this.xangle);this.image.drawTile(-this.halfSize,-this.halfSize,this.value-1,this.size.x,this.size.y);}else{this.image.drawTile(this.pos.x,this.pos.y,this.value-1,this.size.x,this.size.y);}
ig.system.context.restore();},rolling:function(){if(this.clickReady&&this.parents.currentPlayer.isMainPlayer){this.rollingBot();}},rollingBot:function(){if(this.isRolling)return;this.showRolling();this.hand.fadeOut();var currentState=this.parents.getCurrentState();ig.game.gameClient.emitEvent(network.Events.DICE_ROLLING,currentState);},showRolling:function(){if(!this.isRolling)ig.soundHandler.sfxPlayer.play("dice");this.isReady=false;this.clickReady=false;this.isRolling=true;this.rollingTimes=0;this.parents.currentPlayer.stopCountdown();this.rollingTimer.unpause();},getRandomValue:function(){return Math.floor(Math.random()*6)+1;},stopRolling:function(){this.isRolling=false;this.rollingTimer.reset();this.rollingTimer.pause();},update:function(){if(this.isPaused)return;this.parent();if(this.isRolling&&this.rollingTimer.delta()>0){this.rollingTimer.reset();this.value=this.getRandomValue();this.rollingTimes++;this.xangle=this.rollingTimes*Math.PI/6;if(ig.game.botMode&&this.rollingTimes==this.totalRolls){this.stopRolling();if(!this.parents.currentPlayer.hasStarted&&this.value!=6){if(Math.random()<0.5)this.value=6;}
this.parents.currentPlayer.checkResult();}}},setValue:function(value){this.value=value;this.stopRolling();if(this.parents.currentPlayer.isMainPlayer){this.parents.currentPlayer.checkResult();}else{this.parents.currentPlayer.checkMovableHorses();}},clicked:function(){if(ig.game.currentLayer!=ig.game.layers.BASE||this.parents.currentPlayer.autoMode)return;this.rolling();}});});

// lib/game/entities/horse.js
ig.baked=true;ig.module('game.entities.horse').requires('impact.entity').defines(function(){EntityHorse=ig.Entity.extend({images:[new ig.Image('media/graphics/sprites/purple.png'),new ig.Image('media/graphics/sprites/green.png'),new ig.Image('media/graphics/sprites/red.png'),new ig.Image('media/graphics/sprites/blue.png')],animImages:[new ig.Image('media/graphics/sprites/purple-anim.png'),new ig.Image('media/graphics/sprites/green-anim.png'),new ig.Image('media/graphics/sprites/red-anim.png'),new ig.Image('media/graphics/sprites/blue-anim.png')],selectImages:[new ig.Image('media/graphics/sprites/purple-select.png'),new ig.Image('media/graphics/sprites/green-select.png'),new ig.Image('media/graphics/sprites/red-select.png'),new ig.Image('media/graphics/sprites/blue-select.png')],type:ig.Entity.TYPE.A,horseId:0,totalSteps:57,usedSteps:0,isReady:false,drawSel:false,movable:false,isSmall:false,isJumping:false,isMoving:false,moveStep:0,scale:1,backSteps:0,isPaused:false,isSelecting:false,init:function(x,y,settings){this.parent(x,y,settings);this.image=this.images[this.parents.colorId];this.imageSelection=this.selectImages[this.parents.colorId];var animImage=this.animImages[this.parents.colorId];var animSheet=new ig.AnimationSheet(animImage.path,animImage.width/3,animImage.height);this.jumpAnim=new ig.Animation(animSheet,0.05,[0,1,2,1,0],true);this.size.x=this.image.width;this.size.y=this.image.height;this.dice=this.parents.dice;this.selectionDx=(this.image.width-this.imageSelection.width)/2;this.selectionDy=(this.image.height-this.imageSelection.height)/2;var selectionAnimSheet=new ig.AnimationSheet(this.imageSelection.path,this.imageSelection.width,this.imageSelection.height);this.selectionAnim=new ig.Animation(selectionAnimSheet,0.25,[0,1]);this.gameController=this.parents.parents;this.homePos={};if(x==0)this.pos.x=this.homePos.x=this.parents.homePos[this.horseId].x-0.5;if(y==0)this.pos.y=this.homePos.y=this.parents.homePos[this.horseId].y+1;this.movingPos=this.parents.parents.board.movingArray;},update:function(){if(this.isPaused)return;this.parent();this.selectionAnim.update();this.jumpAnim.update();},draw:function(){var ctx=ig.system.context;ctx.save();ctx.translate(this.pos.x,this.pos.y);ctx.scale(this.scale,this.scale);if(this.isJumping)this.jumpAnim.draw(0,-25);else{this.image.draw(0,0);if(this.drawSel){this.selectionAnim.draw(this.selectionDx,this.selectionDy);}}
ctx.restore();},drawSelection:function(){if(this.movable){this.drawSel=true;}},checkPosibilities:function(){this.movable=false;if(this.isReady){if(this.usedSteps+this.dice.value<=this.totalSteps){this.movable=true;}}else if(this.dice.value==6){this.movable=true;}
return this.movable;},setReady:function(){this.isReady=true;if(!this.parents.hasStarted)this.parents.hasStarted=true;this.usedSteps=1;ig.soundHandler.sfxPlayer.play("jump");this.tween({pos:{x:this.parents.startPos.x,y:this.parents.startPos.y}},0.3,{onComplete:function(){this.checkOpponents(true);this.handleZindex();if(!ig.game.botMode&&this.parents.isMainPlayer&&this.gameController.nextEvent!='okay')
this.gameController.nextEvent='ready';else
this.dice.setReady();}.bind(this)}).start();},goForward:function(){if(this.movable&&this.parents.isMainPlayer){this.moves();}},moves:function(){if(this.parents.countdowning)this.parents.stopCountdown();var data={horseId:this.horseId,steps:this.dice.value}
ig.game.gameClient.emitEvent(network.Events.HORSE_MOVE,data);this.gameController.nextEvent='none';this.goForward2();},goForward2:function(){this.checkSelect();if(this.parents.countdowning)this.parents.stopCountdown();this.parents.disableHorsesMoving(this);if(this.isReady){if(this.isSmall)this.restoreSize();this.moveStep=this.dice.value;this.nextSteps();}else{this.setReady();}},updateState:function(steps){if(this.isSmall){this.restoreSize();}
if(steps==0){this.isReady=false;this.usedSteps=0;this.pos.x=this.homePos.x;this.pos.y=this.homePos.y;return;}
this.usedSteps=1;this.isReady=true;this.pos.x=this.parents.startPos.x;this.pos.y=this.parents.startPos.y;steps--;while(steps>0){if(this.usedSteps>50){this.pos.x+=this.parents.finalSteps.dx;this.pos.y+=this.parents.finalSteps.dy;}else{var id=this.getBaseId();var ds=this.movingPos[id];this.pos.x+=ds.dx;this.pos.y+=ds.dy;}
steps--;this.usedSteps++;}},clicked:function(){if(ig.game.botMode){if(this.movable)this.goForward2();}else{this.goForward();}},checkSelect:function(){if(this.isSelecting||this.isSmall){if(this.isSelecting)this.isSelecting=false;else this.restoreSize();var horses=this.gameController.horses;var horseGroup=[];var baseId=this.getBaseId();for(var i=0;i<horses.length;i++){var horse=horses[i];if(horse!=this&&baseId==horse.getBaseId()){horseGroup.push(horse);if(horse.isSmall)horse.restoreSize();}}
if(horseGroup.length==0){var check=false;for(var i=0;i<horses.length;i++){if(horses[i].isSmall){horses[i].restoreSize();if(!check)check=true;}}
if(check){for(var i=0;i<horses.length;i++){horses[i].checkOpponents();}}
return;}
if(horseGroup.length==1){horseGroup[0].restoreSize();}else{this.shareHouse(horseGroup);}}},nextSteps:function(){var nextX,nextY;if(this.usedSteps>50){nextX=this.pos.x+this.parents.finalSteps.dx;nextY=this.pos.y+this.parents.finalSteps.dy;}else{var id=this.getBaseId();var ds=this.movingPos[id];nextX=this.pos.x+ds.dx;nextY=this.pos.y+ds.dy;}
this.isJumping=true;this.isMoving=true;this.jumpAnim.rewind();this.tween({pos:{x:nextX,y:nextY}},0.2,{onComplete:function(){this.pos.x=nextX;this.pos.y=nextY;ig.soundHandler.sfxPlayer.play("jump");this.isJumping=false;this.moveStep--;this.usedSteps++;if(this.moveStep<=0){this.isMoving=false;var kickOpponent=this.checkOpponents(true);this.handleZindex();if(this.usedSteps==this.totalSteps){this.gameController.boomStars(this.getCenterX(),this.getCenterY());var finished=this.parents.addHorseComplete();if(finished||this.gameController.gameEnd)return;this.dice.setReady();return;}
if(this.gameController.gameEnd)return;if(kickOpponent){return;}
if(this.dice.value==6){if(!ig.game.botMode&&this.parents.isMainPlayer&&this.gameController.nextEvent!='okay')
this.gameController.nextEvent='ready';else
this.dice.setReady();}else{if(!ig.game.botMode&&this.parents.isMainPlayer&&this.gameController.nextEvent!='okay')
this.gameController.nextEvent='next';else
this.gameController.nextTurn();}}else{this.nextSteps();}}.bind(this)}).start();},handleZindex:function(){this.gameController.sortHorseZindex();},returnHome:function(){var id=(this.usedSteps+this.parents.dStep-1)%this.movingPos.length;var ds=this.movingPos[id];if(!ds)return;var nextX=this.pos.x-ds.dx,nextY=this.pos.y-ds.dy;this.tween({pos:{x:nextX,y:nextY}},0.08,{onComplete:function(){this.usedSteps--;if(this.usedSteps==1){this.isReady=false;this.usedSteps=0;this.tween({pos:{x:this.homePos.x,y:this.homePos.y}},0.24,{onComplete:function(){if(!ig.game.botMode&&this.parents.isMainPlayer&&this.gameController.nextEvent!='okay')
this.gameController.nextEvent='ready';else
this.dice.setReady();}.bind(this)}).start();}else{this.returnHome();}}.bind(this)}).start();},checkOpponents:function(playSound){var baseId=this.getBaseId();if(baseId==-1)return false;var horses=this.gameController.horses;var horseGroup=[],kickOpponent=false;var safeZone=[1,9,14,22,27,35,40,48];var safeSound=false;if(safeZone.indexOf(baseId)>-1){safeSound=true;}
for(var i=0;i<horses.length;i++){var horse=horses[i];if(horse!=this&&baseId==horse.getBaseId()){horseGroup.push(horse);}}
switch(horseGroup.length){case 0:break;case 1:if(horseGroup[0].parents.posId!=this.parents.posId&&safeZone.indexOf(baseId)==-1){horseGroup[0].returnHome();kickOpponent=true;ig.soundHandler.sfxPlayer.play("kick");var data={horseId:horseGroup[0].horseId,playerId:horseGroup[0].parents.serverId}
ig.game.gameClient.emitEvent(network.Events.UPDATE_HORSE,data);}else{horseGroup.push(this);this.shareHouse(horseGroup);safeSound=true;}
break;default:horseGroup.push(this);this.shareHouse(horseGroup);safeSound=true;break;}
if(playSound&&safeSound){ig.soundHandler.sfxPlayer.play("safe");}
return kickOpponent;},getBaseId:function(){if(this.isReady){if(this.usedSteps>51){return this.usedSteps+this.parents.dStep;}else
return(this.usedSteps+this.parents.dStep)%this.movingPos.length;}else return-1;},checkSmall:function(){var baseId=this.getBaseId();if(baseId==-1)return;var horses=this.gameController.horses;var horseGroup=[];for(var i=0;i<horses.length;i++){var horse=horses[i];if(horse!=this&&baseId==horse.getBaseId()){horseGroup.push(horse);}}
switch(horseGroup.length){case 0:this.restoreSize();break;default:horseGroup.push(this);this.shareHouse(horseGroup);break;}},shareHouse:function(horses){switch(horses.length){case 0:case 1:break;case 2:horses[0].setupPos(1);horses[1].setupPos(3);break;case 3:horses[0].setupPos(1);horses[1].setupPos(2);horses[2].setupPos(3);break;case 4:horses[0].setupPos(1);horses[1].setupPos(2);horses[2].setupPos(3);horses[3].setupPos(4);break;default:horses[0].setupPos(1);horses[1].setupPos(2);horses[2].setupPos(3);horses[3].setupPos(4);for(var i=4;i<horses.length;i++){horses[i].setupPos(5);}
break;}
this.handleZindex();},setupPos:function(id){if(!this.isSmall){this.cellCenterX=this.getCenterX();this.cellCenterY=this.pos.y+this.size.y-6;this.changeScale(0.59);}
var cellSize=ig.game.cellSize;var ds=cellSize/4+7;switch(id){case 1:this.pos.x=this.cellCenterX-ds/2;this.pos.y=this.cellCenterY;break;case 2:this.pos.x=this.cellCenterX+ds/2;this.pos.y=this.cellCenterY;break;case 3:this.pos.x=this.cellCenterX+ds/2;this.pos.y=this.cellCenterY+ds;break;case 4:this.pos.x=this.cellCenterX-ds/2;this.pos.y=this.cellCenterY+ds;break;case 5:this.pos.x=this.cellCenterX;this.pos.y=this.cellCenterY+ds/2;break;}
this.pos.x-=this.size.x/2;this.pos.y-=this.size.y+6;},changeScale:function(scale){if(scale<1)this.isSmall=true;else this.isSmall=false;this.scale=scale;this.size.x=scale*this.image.width;this.size.y=scale*this.image.height;},selecting:function(){this.isSelecting=true;this.restoreSize();this.zIndex=this.gameController.board.pos.y+this.gameController.board.size.y;ig.game.sortEntitiesDeferred();},deselecting:function(){this.isSelecting=false;var horses=this.gameController.horses;var horseGroup=[];var baseId=this.getBaseId();for(var i=0;i<horses.length;i++){var horse=horses[i];if(baseId==horse.getBaseId()){horseGroup.push(horse);}}
this.shareHouse(horseGroup);},restoreSize:function(){this.changeScale(1);this.pos.x=this.cellCenterX-this.size.x/2;this.pos.y=this.cellCenterY-this.size.y+6;}});});

// lib/game/entities/ui/emoji-anim.js
ig.baked=true;ig.module('game.entities.ui.emoji-anim').requires('impact.entity').defines(function(){EntityEmojiAnim=ig.Entity.extend({zIndex:1000,emojis:[new ig.Image('media/graphics/sprites/emojis/0.png'),new ig.Image('media/graphics/sprites/emojis/1.png'),new ig.Image('media/graphics/sprites/emojis/2.png'),new ig.Image('media/graphics/sprites/emojis/3.png'),new ig.Image('media/graphics/sprites/emojis/4.png'),new ig.Image('media/graphics/sprites/emojis/5.png')],alpha:0,eID:0,init:function(x,y,settings){this.parent(x,y,settings);this.emoji=this.emojis[this.eID];this.pos.x=x-this.emoji.width/2;this.pos.y=y-this.emoji.height/2;this.tween({alpha:1},0.2,{onComplete:function(){this.tween({alpha:0},0.8,{delay:1}).start();}.bind(this),}).start();var targetX=ig.game.control.board.centerPos.x-this.emoji.width/2,targetY=ig.game.control.board.centerPos.y-this.emoji.height/2;this.tween({pos:{x:targetX,y:targetY}},2,{onComplete:function(){this.kill();}.bind(this),}).start();},draw:function(){var ctx=ig.system.context;ctx.save();ctx.globalAlpha=this.alpha;this.emoji.draw(this.pos.x,this.pos.y);ctx.restore();}});});

// lib/game/entities/player.js
ig.baked=true;ig.module('game.entities.player').requires('game.entities.horse','game.entities.ui.emoji-anim').defines(function(){EntityPlayer=ig.Entity.extend({avatars:[new ig.Image('media/graphics/sprites/avatars/avatar0.png'),new ig.Image('media/graphics/sprites/avatars/avatar1.png'),new ig.Image('media/graphics/sprites/avatars/avatar2.png'),new ig.Image('media/graphics/sprites/avatars/avatar3.png'),new ig.Image('media/graphics/sprites/avatars/avatar4.png'),new ig.Image('media/graphics/sprites/avatars/avatar5.png'),new ig.Image('media/graphics/sprites/avatars/avatar6.png'),new ig.Image('media/graphics/sprites/avatars/avatar7.png'),new ig.Image('media/graphics/sprites/avatars/avatar8.png'),new ig.Image('media/graphics/sprites/avatars/avatar9.png'),new ig.Image('media/graphics/sprites/avatars/avatar10.png'),new ig.Image('media/graphics/sprites/avatars/avatar11.png')],autoImage:new ig.Image('media/graphics/sprites/auto.png'),colorId:0,posId:0,dice6:0,horsesComplete:0,playerName:'Player',avatarId:0,isMainPlayer:false,isBot:false,hasTurn:false,hasStarted:false,rankNo:5,autoMode:false,isAuto:false,isPaused:false,completed:false,inactiveTimes:0,skippedTimes:0,init:function(x,y,settings){this.parent(x,y,settings);if(this.isMainPlayer){this.playerName=ig.game.playerName;this.type=ig.Entity.TYPE.A;this.clickTime=ig.system.clock.delta();if(ig.game.playerImage!=null&&ig.game.playerImage!=""){this.avatar=ig.game.playerImage;try{this.avatar.draw(-500,-500);}catch(e){this.avatar=null;this.avatarId=ig.game.avatarId;}}else{this.avatarId=ig.game.avatarId;}}else if(this.isBot){this.avatarId=Math.floor(Math.random()*this.avatars.length);var names=ig.game.playerNames;this.playerName=ig.game.randomInArray(names);var nid=names.indexOf(this.playerName);names.splice(nid,1);}
if(!this.avatar)
this.avatar=this.avatars[this.avatarId];this.size.x=this.avatar.width;this.size.y=this.avatar.height;this.dice=this.parents.dice;this.diceValue=0;this.setupPos();if(this.isMainPlayer){this.pos.x=this.avatarX;this.pos.y=this.avatarY;this.autoX=this.avatarX+(this.avatar.width-this.autoImage.width)/2;this.autoY=this.avatarY-5;}
this.horses=[];for(var i=0;i<4;i++){this.horses[i]=this.spawnEntity(EntityHorse,0,0,{horseId:i});this.parents.horses.push(this.horses[i]);}
this.countdownTime=15.6;this.timer=new ig.Timer(this.countdownTime);this.timer.pause();this.countdowning=false;this.radius=this.avatar.width/2;this.centerX=this.avatarX+this.radius;this.centerY=this.avatarY+this.radius;this.PI2=Math.PI*2;this.rAngle=0;},showEmoji:function(eID){ig.game.spawnEntity(EntityEmojiAnim,this.avatarX+this.avatar.width/2,this.avatarY+this.avatar.height/2,{eID:eID});},pause:function(){if(this.countdowning)this.timer.pause();},unpause:function(){if(this.countdowning)this.timer.unpause();},clicked:function(){return;},autoPlay:function(){if(this.parents.gameEnd)return;if(this.timeOut==null){this.timeOut=setTimeout(function(){if(this==this.parents.currentPlayer&&!this.parents.dice.isRolling){if(this.parents.dice.isReady){this.parents.dice.rollingBot();}else{if(this.checkHorseJumping())this.checkSelecting();}}
clearTimeout(this.timeOut);this.timeOut=null;}.bind(this),550);}},checkSelecting:function(){var selectingHorses=[];for(var i=0;i<4;i++){if(this.horses[i].movable){selectingHorses.push(this.horses[i]);}}
if(selectingHorses.length>0){var randomHorse=ig.game.randomInArray(selectingHorses);randomHorse.clicked();}},checkHorseJumping:function(){var noHorseJumping=true;for(var i=0;i<4;i++){if(this.horses[i].isJumping){noHorseJumping=false;break;}}
return noHorseJumping;},checkAuto:function(){if(this.autoMode&&this.timeOut==null){this.timeOut=setTimeout(function(){if(this.autoMode&&!this.parents.dice.isRolling){this.parents.dice.rollingBot();}
clearTimeout(this.timeOut);this.timeOut=null;}.bind(this),450);}},startCountdown:function(){this.countdowning=true;this.timer.unpause();this.rAngle=0;},stopCountdown:function(){this.countdowning=false;this.timer.set(this.countdownTime);this.timer.pause();this.dice.hand.fadeOut();},setupPos:function(){var diceSide=ig.game.diceSize,dX=28,ds=20,dStep=ig.game.cellSize,boardSide=ig.game.boardSize,board=this.parents.board,textHeight=20;var tileDX=32+2,tileDY=52+32*4.5+2*4;this.homePos=board.homePos[this.posId];this.stickerPos={x:(this.homePos[0].x+this.homePos[3].x-this.parents.board.leftSticker.width)/2,y:(this.homePos[0].y+this.homePos[1].y-this.parents.board.leftSticker.height)/2}
switch(this.posId){case 0:this.startPos={x:board.halfSize-tileDX,y:board.halfSize+tileDY}
this.finalSteps={dx:0,dy:-dStep}
if(ig.game.isMobile){this.avatarX=board.pos.x+10;this.avatarY=board.pos.y+board.size.y+10;this.dicePos={x:this.avatarX+this.avatar.width+20,y:this.avatarY+(this.avatar.height-diceSide)/2}}else{this.avatarX=board.pos.x-this.avatar.width-10-dX;this.avatarY=board.pos.y+board.size.y-this.avatar.width-10-textHeight;this.dicePos={x:this.avatarX+this.avatar.width/2-diceSide/2,y:board.pos.y+boardSide-diceSide-ds-this.avatar.height-10-textHeight}}
break;case 1:this.startPos={x:board.halfSize-tileDY,y:board.halfSize-tileDX}
this.finalSteps={dx:dStep,dy:0}
if(ig.game.isMobile){this.avatarX=board.pos.x+10;this.avatarY=board.pos.y-this.avatar.height-textHeight-10;this.dicePos={x:this.avatarX+this.avatar.width+20,y:this.avatarY+(this.avatar.height-diceSide)/2}}else{this.avatarX=board.pos.x-this.avatar.width-10-dX;this.avatarY=board.pos.y+10;this.dicePos={x:this.avatarX+this.avatar.width/2-diceSide/2,y:board.pos.y+ds+this.avatar.height+10+textHeight}}
break;case 2:this.startPos={x:board.halfSize+tileDX,y:board.halfSize-tileDY}
this.finalSteps={dx:0,dy:dStep}
if(ig.game.isMobile){this.avatarX=board.pos.x+board.size.x-this.avatar.width-10;this.avatarY=board.pos.y-this.avatar.height-textHeight-10;this.dicePos={x:this.avatarX-diceSide-20,y:this.avatarY+(this.avatar.height-diceSide)/2}}else{this.avatarX=board.pos.x+board.size.x+10+dX;this.avatarY=board.pos.y+10;this.dicePos={x:this.avatarX+this.avatar.width/2-diceSide/2,y:board.pos.y+ds+this.avatar.height+10+textHeight}}
break;case 3:this.startPos={x:board.halfSize+tileDY,y:board.halfSize+tileDX}
this.finalSteps={dx:-dStep,dy:0}
if(ig.game.isMobile){this.avatarX=board.pos.x+board.size.x-this.avatar.width-10;this.avatarY=board.pos.y+board.size.y+10;this.dicePos={x:this.avatarX-diceSide-20,y:this.avatarY+(this.avatar.height-diceSide)/2}}else{this.avatarX=board.pos.x+board.size.x+10+dX;this.avatarY=board.pos.y+board.size.y-this.avatar.width-10-textHeight;this.dicePos={x:this.avatarX+this.avatar.width/2-diceSide/2,y:board.pos.y+boardSide-diceSide-ds-this.avatar.height-10-textHeight}}
break;}
this.shiftPos();this.dStep=this.posId*13;this.nameX=this.avatarX+this.avatar.width/2;this.nameY=this.avatarY+this.avatar.height+textHeight;},shiftPos:function(){var board=this.parents.board;var dw=ig.game.horseW/2,dh=ig.game.horseH-6;for(var i=0;i<this.homePos.length;i++){this.homePos[i].x-=dw;this.homePos[i].y-=dh;}
this.startPos.x+=board.pos.x-dw;this.startPos.y+=board.pos.y-dh;},checkResult:function(){if(this.dice.value==6){if(this.dice6==2){this.parents.nextTurn();return;}else{this.dice6++;}}
var movableHorses=[];for(var i=0;i<this.horses.length;i++){if(this.horses[i].checkPosibilities())movableHorses.push(this.horses[i]);}
if(movableHorses.length==0)this.parents.nextTurn(450);else if(movableHorses.length==1){movableHorses[0].clicked();}else{var baseId=movableHorses[0].getBaseId(),randomGo=true;for(var i=1;i<movableHorses.length;i++){if(movableHorses[i].getBaseId()!=baseId){randomGo=false;break;}}
if(randomGo){movableHorses[0].clicked();}else if(this.isBot||this.autoMode||this.isAuto){var randomHorse=ig.game.randomInArray(movableHorses);randomHorse.clicked();}else{var mSmallHorses=[];for(var i=0;i<movableHorses.length;i++){var mh=movableHorses[i];if(this.isMainPlayer)mh.drawSelection();if(mh.isSmall)mSmallHorses.push(mh);}
if(mSmallHorses.length>0){mSmallHorses[0].selecting();var baseId=mSmallHorses[0].getBaseId();switch(mSmallHorses.length){case 2:if(mSmallHorses[1].getBaseId()!=baseId)mSmallHorses[1].selecting();break;case 3:var baseId2=mSmallHorses[1].getBaseId();if(baseId2!=baseId)mSmallHorses[1].selecting();var baseId3=mSmallHorses[2].getBaseId();if(baseId3!=baseId&&baseId3!=baseId2)mSmallHorses[2].selecting();break;case 4:var baseId2=mSmallHorses[1].getBaseId();if(baseId2!=baseId)mSmallHorses[1].selecting();var baseId3=mSmallHorses[2].getBaseId();if(baseId3!=baseId&&baseId3!=baseId2)mSmallHorses[2].selecting();var baseId4=mSmallHorses[3].getBaseId();if(baseId4!=baseId&&baseId4!=baseId2&&baseId4!=baseId3)mSmallHorses[3].selecting();break;}}
if(this.isMainPlayer)ig.soundHandler.sfxPlayer.play("notification");if(!ig.game.botMode){movableHorses[0].parents.startCountdown();}}}},checkMovableHorses:function(){var movableHorses=0;for(var i=0;i<this.horses.length;i++){if(this.horses[i].checkPosibilities())movableHorses++;}
if(movableHorses>1){this.startCountdown();}},disableHorsesMoving:function(hs){var sHorses=[];for(var i=0;i<this.horses.length;i++){var horse=this.horses[i];if(horse.movable)horse.movable=false;if(horse.drawSel)horse.drawSel=false;if(horse!=hs&&horse.isSelecting){sHorses.push(horse);}}
if(sHorses.length>0){sHorses[0].deselecting();var baseId=sHorses[0].getBaseId();switch(sHorses.length){case 2:if(sHorses[1].getBaseId()!=baseId)sHorses[1].deselecting();break;case 3:var baseId2=sHorses[1].getBaseId();if(baseId2!=baseId)sHorses[1].deselecting();var baseId3=sHorses[2].getBaseId();if(baseId3!=baseId&&baseId3!=baseId2)sHorses[2].deselecting();break;}}},addHorseComplete:function(){this.horsesComplete++;var finished=false;if(this.horsesComplete==4){this.parents.handleRanking(this);this.completed=finished=true;}
return finished;},update:function(){this.parent();if(this.countdowning){if(this.timer.delta()<0){this.rAngle=(1+this.timer.delta()/this.countdownTime)*this.PI2;}else{this.stopCountdown();}}},adjustTimer:function(pauseDuration){var t=this.timer.delta();this.timer.set(-t-pauseDuration);},removeHorses:function(){var horses=this.parents.horses;for(var i=0;i<4;i++){var horse=this.horses[i];var id=horses.indexOf(horse);horses.splice(id,1);}},draw:function(){ig.system.context.drawImage(this.avatar.data,this.avatarX,this.avatarY,96,96);ig.game.setTextStyle('18px text','#fff','center');ig.game.drawText(this.playerName,this.nameX,this.nameY);if(this.autoMode){this.autoImage.draw(this.autoX,this.autoY);}else if(this.countdowning){var ctx=ig.system.context;ctx.beginPath();ctx.moveTo(this.centerX,this.centerY);ctx.arc(this.centerX,this.centerY,this.radius,this.rAngle,this.PI2);ctx.lineTo(this.centerX,this.centerY);ctx.closePath();ctx.fillStyle='rgba(252, 219, 3, 0.5)';ctx.fill();}}});});

// lib/game/entities/star.js
ig.baked=true;ig.module('game.entities.star').requires('impact.entity').defines(function(){EntityStar=ig.Entity.extend({zIndex:1000,image:new ig.Image('media/graphics/sprites/star.png'),init:function(x,y,settings){this.parent(x,y,settings);this.animSheet=new ig.AnimationSheet(this.image.path,this.image.width,this.image.height);this.size.x=this.animSheet.width;this.size.y=this.animSheet.height;this.addAnim('idle',1,[0],true);var randomScale=Math.random()*0.7+0.3;this.setScale(randomScale);this.pos.x-=12;this.pos.y-=18;var angle=-Math.random()*Math.PI*2,speed=Math.random()*500+20;this.vel.x=speed*Math.cos(angle);this.vel.y=speed*Math.sin(angle);var rt=Math.random()*0.5+0.5;this.tween({currentAnim:{alpha:0}},rt,{onComplete:function(){this.kill();}.bind(this)}).start();}});});

// lib/game/entities/buttons/button-close-small.js
ig.baked=true;ig.module('game.entities.buttons.button-close-small').requires('game.entities.buttons.button-2-images').defines(function(){EntityButtonCloseSmall=EntityButton2Images.extend({image:new ig.Image('media/graphics/sprites/ui/buttons/close-small.png'),imagePressed:new ig.Image('media/graphics/sprites/ui/buttons/close-small-pressed.png'),callback:function(){this.parents.moveOut();}});});

// lib/game/entities/ui/popup-over.js
ig.baked=true;ig.module('game.entities.ui.popup-over').requires('game.entities.ui.popup','game.entities.buttons.button-home','game.entities.buttons.button-close-small').defines(function(){EntityPopupOver=EntityPopup.extend({titleDY:-75,players:null,init:function(x,y,settings){var pops=ig.game.getEntitiesByType(EntityPopupOver);for(var i=0;i<pops.length;i++){pops[i].kill();}
var overlays=ig.game.getEntitiesByType(EntityNetworkOverlay);for(var i=0;i<overlays.length;i++){overlays[i].dispose();}
this.parent(x,y,settings);this.title=_TEXT.Game.GameOver;try{sessionEnd(ig.game.roomSize);}catch(error){console.log('SDK is not ready');}
if(this.players==null)this.players=this.controller.ranking;var maxRank=0;for(var i=0;i<this.players.length;i++){if(this.players[i].rankNo&&this.players[i].rankNo<5&&this.players[i].rankNo>maxRank){maxRank=this.players[i].rankNo;}}
var nextRank=maxRank+1;for(var i=0;i<this.players.length;i++){if(!this.players[i].rankNo||this.players[i].rankNo===5){this.players[i].rankNo=nextRank++;}}
this.players.sort(function(a,b){return a.rankNo-b.rankNo;});console.log('🏁 GAME OVER - Final Rankings:');for(var i=0;i<this.players.length;i++){console.log('Rank '+this.players[i].rankNo+': '+this.players[i].playerName+
(this.players[i].isMainPlayer?' (YOU)':''));}
console.log('Full player data:',this.players);if(ig.game.gameInitData){for(var i=0;i<this.players.length;i++){if(this.players[i].isMainPlayer){if(this.players[i].rankNo===1){console.log('🏆 Winner detected! Sending score for rank 1');if(typeof sendScore==='function'){sendScore(1);}}else if(ig.game.botMode){console.log('🤖 Bot mode - Player lost. Sending score with Bot Wins!');if(typeof sendScore==='function'){sendScore(this.players[i].rankNo,'Bot Wins!');}}
break;}}}
ig.system.context.font='30px text';var maxW=0,len=this.players.length;for(var i=0;i<len;i++){var w=ig.system.context.measureText(this.players[i].playerName).width;if(w>maxW)maxW=w;}
this.x0=this.getCenterX()-maxW/2-16;this.dy=this.size.y/2-(36+(len-1)*50)/2+10;this.btDY=303;if(len==2){this.titleDY=-90;this.btDY=280;this.dy-=4;}else if(len==3){this.dy-=4;}
this.drawOverlay=false;ig.game.sortEntitiesDeferred();},spawnElements:function(){this.spawnEntity(EntityButtonHome,ig.game.centerX,this.pos.y+327,{isShown:false});ig.game.sortEntitiesDeferred();},drawExtra:function(){ig.system.context.font='30px text';ig.system.context.textAlign='left';for(var i=0;i<this.players.length;i++){if(this.players[i].isMainPlayer)ig.system.context.fillStyle='#efff41';else ig.system.context.fillStyle='#FFF';var id=i+1;if(this.players[i].rankNo==5)id='?'
ig.game.drawText(id+'. '+this.players[i].playerName,this.x0-this.oriX,this.pos.y+this.dy+i*50-this.oriY);}},moveIn:function(){setTimeout(function(){var _this=this;ig.soundHandler.sfxPlayer.play("victory");this.tween({pos:{y:this.y0}},this.dt,{easing:this.easingIn}).start();this.drawOverlay=true;}.bind(this),1100);}});});

// lib/game/entities/ui/emoji-select.js
ig.baked=true;ig.module('game.entities.ui.emoji-select').requires('impact.entity').defines(function(){EntityEmojiSelect=ig.Entity.extend({alpha:0,enabled:true,isFadingOut:false,init:function(x,y,settings){this.parent(x,y,settings);var w=70,padding=10,ds=w+padding;this.size.x=3*ds+padding;this.size.y=2*ds+padding;this.pos.x=this.parents.pos.x+this.parents.size.x-this.size.x,this.pos.y=this.parents.pos.y+this.parents.size.y-this.size.y;var x0=this.pos.x+padding,y0=this.pos.y+padding;for(var i=0;i<6;i++){this.spawnEntity(EntityEmoji,x0+i%3*ds,y0+Math.floor(i/3)*ds,{eID:i});}
this.fadeIn();ig.game.sortEntitiesDeferred();},update:function(){this.parent();if(ig.input.pressed('click')&&!this.isFadingOut){this.fadeOut();}},draw:function(){var ctx=ig.system.context;ctx.save();ctx.globalAlpha=this.alpha;ctx.fillStyle='#125024';ig.game.setStrokeStyle('#FFF',5);ig.game.roundRect(this.pos.x,this.pos.y,this.size.x,this.size.y,5);ctx.restore();},fadeIn:function(){this.tween({alpha:1,},0.25).start();},fadeOut:function(){this.isFadingOut=true;this.tween({alpha:0,},0.25,{onComplete:function(){this.parents.fadeIn();this.kill();}.bind(this)}).start();}});EntityEmoji=ig.Entity.extend({collides:ig.Entity.COLLIDES.NEVER,type:ig.Entity.TYPE.A,emojis:[new ig.Image('media/graphics/sprites/emojis/0.png'),new ig.Image('media/graphics/sprites/emojis/1.png'),new ig.Image('media/graphics/sprites/emojis/2.png'),new ig.Image('media/graphics/sprites/emojis/3.png'),new ig.Image('media/graphics/sprites/emojis/4.png'),new ig.Image('media/graphics/sprites/emojis/5.png')],alpha:0,eID:0,isHovering:false,init:function(x,y,settings){this.parent(x,y,settings);this.emoji=this.emojis[this.eID];this.size.x=this.emoji.width;this.size.y=this.emoji.height;},draw:function(){var ctx=ig.system.context;ctx.save();ctx.globalAlpha=this.parents.alpha;this.emoji.draw(this.pos.x,this.pos.y);if(this.isHovering){ctx.strokeStyle="#F00";ctx.lineWidth=2;ctx.strokeRect(this.pos.x,this.pos.y,this.size.x,this.size.y);}
ctx.restore();},clicked:function(){if(this.parents.enabled){this.parents.enabled=false;this.parents.fadeOut();ig.game.gameClient.sendMessage(network.MessageType.EMOJI,this.eID);}},over:function(){this.isHovering=true;},leave:function(){this.isHovering=false;}});});

// lib/game/entities/buttons/button-emoji.js
ig.baked=true;ig.module('game.entities.buttons.button-emoji').requires('game.entities.buttons.button-2-images','game.entities.ui.emoji-select').defines(function(){EntityButtonEmoji=EntityButton2Images.extend({image:new ig.Image('media/graphics/sprites/emojis/0.png'),imagePressed:new ig.Image('media/graphics/sprites/emojis/0.png'),anchor:{x:1,y:1},callback:function(){if(ig.game.control.emojiNo==30){this.kill();return;}
ig.game.control.emojiNo++;this.fadeOut();this.spawnEntity(EntityEmojiSelect,0,0);}});});

// lib/game/entities/controllers/game-controller.js
ig.baked=true;ig.module('game.entities.controllers.game-controller').requires('game.entities.buttons.button-pause','game.entities.board','game.entities.dice','game.entities.player','game.entities.star','game.entities.ui.popup-over','game.entities.buttons.button-emoji').defines(function(){EntityGameController=ig.Entity.extend({name:'GameController',players:[],currentPlayer:null,gameEnd:false,boardRotation:0,name:'GameController',transferingTurn:false,stopUpdating:false,completed:false,rankNo:1,emojiNo:0,nextEvent:'none',init:function(x,y,settings){this.parent(x,y,settings);try{sessionStart(ig.game.roomSize);}catch(error){console.log('SDK is not ready');}
ig.game.currentLayer=ig.game.layers.BASE;var p=ig.game.getEntitiesByType(EntityPointer);if(p.length==0)ig.game.spawnEntity(EntityPointer,0,0);this.spawnEntity(EntityButtonPause,0,0);this.board=this.spawnEntity(EntityBoard,0,0);this.dice=this.spawnEntity(EntityDice,50,200);this.horses=[];var cIds=[0,1,2,3];var r;if(ig.game.botMode)r=Math.floor(Math.random()*cIds.length);else{var pls=ig.global.gameState;var mainId=0;for(var i=0;i<pls.length;i++){if(pls[i].playerId==ig.game.gameClient.playerId){mainId=i;break;}}
if(ig.game.roomSize==4)
r=(ig.global.colorID+mainId)%4;else r=(ig.global.colorID+2*mainId)%4;}
this.boardRotation=r;this.board.rotateHomePosImages();var cId=cIds[r];var player=this.spawnEntity(EntityPlayer,0,0,{posId:0,colorId:cId,isMainPlayer:true,isReady:true});this.players.push(player);this.board.angle=-r*Math.PI/2;if(!ig.game.botMode&&ig.game.gameClient.numOfPlayers==1){ig.game.gameClient.showNetworkError(_TEXT.Network.NoPlayer);return;}
if(ig.game.botMode){if(ig.game.roomSize==2){r=(r+2)%4;cId=cIds[r];player=this.spawnEntity(EntityPlayer,0,0,{posId:2,colorId:cId,isBot:true});this.players.push(player);}else{for(var i=1;i<4;i++){r=(r+1)%4;cId=cIds[r];player=this.spawnEntity(EntityPlayer,0,0,{posId:i,colorId:cId,isBot:true});this.players.push(player);}}
this.currentPlayerId=0;}else{var players=ig.global.gameState;this.players[0].serverId=ig.game.gameClient.playerId;if(players.length==2){var otherPlayer=players[0].playerId==ig.game.gameClient.playerId?players[1]:players[0];r=(r+2)%4;cId=cIds[r];player=this.spawnEntity(EntityPlayer,0,0,{posId:2,colorId:cId,playerName:otherPlayer.name,avatarId:otherPlayer.avatarId,serverId:otherPlayer.playerId});this.players.push(player);this.currentPlayerId=ig.game.gameClient.playerId==ig.global.firstPlayerId?0:1;}else{var dId=0;for(var i=0;i<players.length;i++){if(players[i].playerId==ig.game.gameClient.playerId){dId=i;break;}}
var i=dId+1,j=1;this.currentPlayerId=0;while(i%4!=dId){var nid=i%4;if(players[nid].playerId==ig.global.firstPlayerId){this.currentPlayerId=j;}
var pId=j;var r0=(pId+r)%4;cId=cIds[r0];player=this.spawnEntity(EntityPlayer,0,0,{posId:pId,colorId:cId,playerName:players[nid].name,avatarId:players[nid].avatarId,serverId:players[nid].playerId});this.players.push(player);i++;j++;}}
this.spawnEntity(EntityButtonEmoji,ig.system.width-10,ig.system.height-10);}
this.ranking=ig.copy(this.players);this.currentPlayer=this.players[this.currentPlayerId];if(ig.game.showTutorial){ig.game.gameClient.showNetworkAlert(_TEXT.Game.Tutorial,460);ig.storage.save('tutorial',false);ig.game.showTutorial=false;}
this.dice.setReady();if(!ig.game.botMode&&ig.game.requestingState)this.requestState();ig.game.spawnEntity(EntityFade,0,0);ig.game.sortEntitiesDeferred();ig.game.control=this;},handleEmoji:function(data){var player=this.getPlayerById(data.playerID);player.showEmoji(data.eID);},getCurrentState:function(){var state={};for(var i=0;i<this.horses.length;i++){var horse=this.horses[i],playerId=horse.parents.serverId;state[playerId+'H'+horse.horseId]=horse.usedSteps;}
return state;},draw:function(){var ctx=ig.system.context;ctx.fillStyle='#0d3d1f';ctx.fillRect(0,0,ig.system.width,ig.system.height);},nextTurn:function(delay){if(typeof delay=='undefined')var delay=300;if(ig.game.botMode)this.nextPlayer(delay);else ig.game.gameClient.emitEvent(network.Events.NEXT_TURN,delay);},nextPlayer:function(delay){this.currentPlayer.stopCountdown();this.currentPlayer.disableHorsesMoving();this.transferingTurn=true;this.dice.hand.fadeOut();if(this.currentPlayer.dice6>0)this.currentPlayer.dice6=0;var nextId=this.currentPlayerId+1;if(nextId>=this.players.length)nextId=0;var nextPlayer=this.players[nextId];setTimeout(function(){this.currentPlayer=nextPlayer;this.currentPlayerId=this.players.indexOf(this.currentPlayer);this.transferingTurn=false;this.dice.setReady();}.bind(this),delay);},boomStars:function(x,y){for(var i=0;i<50;i++){ig.game.spawnEntity(EntityStar,x,y);}
ig.game.sortEntitiesDeferred();ig.soundHandler.sfxPlayer.play("home");},handleGameEnd:function(playerRanks){this.gameEnd=true;this.completed=true;this.stopUpdating=true;ig.game.requestingState=false;this.currentPlayer.stopCountdown();this.dice.stopRolling;this.dice.hand.fadeOut();var idList=[];for(var i=0;i<playerRanks.length;i++){idList.push(playerRanks[i].playerId);if(playerRanks[i].playerId==ig.game.gameClient.playerId){playerRanks[i].isMainPlayer=true;}else{playerRanks[i].isMainPlayer=false;}}
if(playerRanks.length==this.players.length-1){if(idList.indexOf(ig.game.gameClient.playerId)==-1){for(var i=0;i<this.ranking.length;i++){var player=this.ranking[i];if(player.serverId==ig.game.gameClient.playerId){playerRanks.push({playerName:player.playerName,rankNo:4,isMainPlayer:true});break;}}
playerRanks.push({playerName:player.playerName,rankNo:5,isMainPlayer:player.isMainPlayer});}}else if(playerRanks.length<this.players.length){for(var i=0;i<this.ranking.length;i++){var player=this.ranking[i];if(idList.indexOf(player.serverId)==-1){playerRanks.push({playerName:player.playerName,rankNo:5,isMainPlayer:player.isMainPlayer});}}}
playerRanks.sort(function(a,b){return a.rankNo-b.rankNo});ig.game.spawnEntity(EntityPopupOver,0,0,{controller:this,players:playerRanks});},handleRanking:function(player){player.rankNo=this.rankNo++;if(player.isMainPlayer&&player.rankNo===1){try{sendWin(1,ig.game.userData.playerImage,ig.game.userData.gameImage,ig.game.userData.gameSlug,ig.game.userData.userName,ig.game.userData.gameId,ig.game.userData.userId,ig.game.userData.token);}catch(error){console.log('SDK is not ready');}}
var cellSize=ig.game.cellSize,pos=player.homePos[0];var x=pos.x+cellSize/2,y=pos.y;this.boomStars(x,y);var t=this.currentPlayerId+1;if(t>=this.players.length)t=0;var nextPlayer=this.players[t];var id=this.players.indexOf(player);this.players.splice(id,1);ig.game.gameClient.emitEvent(network.Events.PLAYER_COMPLETE,{playerId:player.serverId,rankNo:player.rankNo});this.ranking.sort(function(a,b){return a.rankNo-b.rankNo});if(this.players.length==1){this.gameEnd=true;this.players[0].rankNo=this.rankNo;ig.game.spawnEntity(EntityPopupOver,0,0,{controller:this});var playerRanks=[];for(var i=0;i<this.ranking.length;i++){playerRanks.push({playerName:this.ranking[i].playerName,rankNo:this.ranking[i].rankNo,playerId:this.ranking[i].serverId});}
ig.game.gameClient.emitEvent(network.Events.GAME_END,playerRanks);if(this.currentPlayer.countdowning)this.currentPlayer.stopCountdown();return;}
if(player.isMainPlayer){ig.game.spawnEntity(EntityPopupOver,0,0,{controller:this});this.completed=true;}
this.transferingTurn=true;setTimeout(function(){this.currentPlayer=nextPlayer;this.currentPlayerId=this.players.indexOf(this.currentPlayer);this.dice.setReady();this.transferingTurn=false;}.bind(this),300);},updateHorses:function(){var gameState=ig.global.stateUpdate;var leftPlayerId=[];for(var i=0;i<this.horses.length;i++){var horse=this.horses[i],pid=horse.parents.serverId,horseId=pid+'H'+horse.horseId;if(gameState.hasOwnProperty(horseId)){if(horse.drawSel)horse.drawSel=false;if(horse.movable)horse.movable=false;if(horse.isJumping)horse.isJumping=false;horse.updateState(gameState[horseId]);}else{if(leftPlayerId.indexOf(pid)==-1)leftPlayerId.push(pid);}}
for(var i=0;i<leftPlayerId.length;i++){this.removePlayer(leftPlayerId[i]);}
for(var i=0;i<this.horses.length;i++){this.horses[i].checkOpponents();}
this.sortHorseZindex();},updateGameState:function(msg){var playerRanks=msg.playerRanks;if(playerRanks.length==this.players.length-1){this.handleGameEnd(playerRanks);return;}
if(playerRanks.length>0){var check=false;this.rankNo=playerRanks.length+1;for(var i=0;i<playerRanks.length;i++){var pl0=playerRanks[i];if(pl0.playerId==ig.game.gameClient.playerId){check=true;break;}
for(var t=0;t<this.players.length;t++){if(this.players[t].serverId==pl0.playerId){this.players[t].rankNo=pl0.rankNo;this.players[t].completed=true;this.players.splice(t,1);break;}}}
if(check){handleGameEnd(playerRanks);return;}}
this.currentPlayerId=0;this.currentPlayer=this.players[this.currentPlayerId];this.updateHorses();this.dice.setReady();if(msg.timePast)this.currentPlayer.adjustTimer(msg.timePast/1000);ig.game.gameClient.emitEvent(network.Events.CHECK_AUTO);ig.game.requestingState=false;if(this.loadingOverlay!=null){this.loadingOverlay.fadeOut();}},sortHorseZindex:function(){var horses=this.horses;for(var i=0;i<horses.length;i++){horses[i].zIndex=horses[i].pos.y+horses[i].size.y;}
ig.game.sortEntitiesDeferred();},kickedOut:function(isCheated){ig.game.requestingState=false;ig.game.director.jumpTo(LevelHome);var msg=isCheated?_TEXT.Network.Cheated:_TEXT.Network.LeftGame;ig.game.gameClient.showNetworkAlert(msg);this.pause;},kickCheatedPlayer:function(playerID){var player=this.getPlayerById(playerID);if(player){this.removePlayer(playerID);if(this.players.length==1){ig.game.gameClient.showNetworkError(player.playerName+_TEXT.Network.KickedOut);}}},diceRolling:function(){this.dice.showRolling();this.currentPlayer.isSkipped=false;},horseMove:function(horseId){var selected=this.currentPlayer.horses[horseId];if(selected.parents.isMainPlayer){if(this.nextEvent!='none'){setTimeout(function(){if(this.nextEvent=='ready'){this.dice.setReady();}else{this.nextTurn();}}.bind(this),1000);}else{this.nextEvent='okay';}}else if(!selected.randomMove){selected.goForward2();}
if(selected.randomMove){selected.randomMove=false;}},checkSmallHorses:function(){for(var i=1;i<this.horses.length;i++){var horse=this.horses[i];if(horse.isSmall)horse.checkSmall();}},randomMove:function(){var movableHorses=[];for(var i=0;i<this.currentPlayer.horses.length;i++){var h=this.currentPlayer.horses[i];if(h.movable)
movableHorses.push(h);}
var len=movableHorses.length,id=len-1;if(len>0){movableHorses[id].randomMove=true;movableHorses[id].moves();}else{this.nextTurn();}},horseFastMove:function(data){var player;for(var i=0;i<this.players.length;i++){if(this.players[i].serverId==data.playerId){player=this.players[i];break;}}
if(player)player.horses[data.horseId].goFastForward(data.steps);},removePlayer:function(playerId){for(var i=0;i<this.players.length;i++){var player=this.players[i];if(player.serverId==playerId){if(playerId==this.currentPlayer.serverId){this.nextPlayer();}
this.players.splice(i,1);if(playerId!=this.currentPlayer.serverId){this.currentPlayerId=this.players.indexOf(this.currentPlayer);}
if(this.players.length==1){this.currentPlayer.stopCountdown();this.currentPlayer.disableHorsesMoving();}
this.board.drawSticker(player.stickerPos);player.removeHorses();player.kill();break;}}},pause:function(){this.dice.isPaused=true;this.currentPlayer.pause();for(var i=0;i<this.horses.length;i++){this.horses[i].isPaused=true;}},unpause:function(){var control=ig.game.getEntityByName('GameController');if(!control)return;this.dice.isPaused=false;this.currentPlayer.unpause();for(var i=0;i<this.horses.length;i++){this.horses[i].isPaused=false;}},syncTime:function(pauseDuration){if(this.currentPlayer.isMainPlayer){this.currentPlayer.adjustTimer(pauseDuration/1000);}},getPlayerById:function(playerId){var player;for(var i=0;i<this.players.length;i++){var p=this.players[i];if(p.serverId==playerId){player=p;break;}}
return player;},playerInactive:function(){if(!ig.game.botMode){ig.game.gameClient.emitEvent(network.Events.INACTIVE);}},playerActive:function(){if(ig.game.botMode)return;if(ig.game.gameClient.numOfPlayers==1){ig.game.gameClient.showNetworkError(_TEXT.Network.NoPlayer);return;}
var control=ig.game.getEntityByName('GameController');if(!control)return;if(!control.gameEnd)this.requestState();},requestState:function(){ig.game.requestingState=true;var overlays=ig.game.getEntitiesByType(EntityNetworkOverlay);for(var i=0;i<overlays.length;i++){overlays[i].dispose();}
this.loadingOverlay=ig.game.spawnEntity(EntityNetworkProcessing,0,0,{text:_TEXT.Network.Reconnecting,controller:this,hasCloseBtn:false});ig.game.gameClient.requestGameState();}});});

// lib/game/levels/game.js
ig.baked=true;ig.module('game.levels.game').requires('game.entities.controllers.game-controller').defines(function(){LevelGame={"entities":[{"type":"EntityGameController","x":0,"y":0}],"layer":[]};});

// lib/game/main.js
ig.baked=true;ig.module('game.main').requires('impact.game','plugins.patches.webkit-image-smoothing-patch','plugins.patches.windowfocus-onMouseDown-patch','plugins.handlers.dom-handler','plugins.handlers.size-handler','plugins.audio.sound-handler','plugins.io.io-manager','plugins.storage','plugins.splash-loader','plugins.tween','plugins.tweens-handler','plugins.director','plugins.nimpact','plugins.time-handler','game.entities.ui.input','networking.client','networking.gameclient','game.entities.pointer','game.entities.ui.fade','game.entities.buttons.button-back','game.levels.home','game.levels.game').defines(function(){MyGame=ig.Game.extend({name:"BGFP-Ludo-Online",version:"1.2",sessionData:{},io:null,paused:false,tweens:null,layers:{BASE:0,POPUP:600,OVERLAY:800},avatarId:0,roomSize:2,playerName:'',inputElements:[],botMode:false,cellSize:34,boardSize:512,horseW:26,horseH:41,diceSize:64,isHidden:false,shouldConnect:true,inputMoved:false,isLoadingData:false,playerNames:["Rob","Luke","Eric","Tony","John","Andy","Tim","Bob","Andy","Noah","William","James","Lucas","Tom","Angela","Andrea","Chloe","Emily","Daisy","Janesh","Sarah","Hannah","Anna","Olivia","Isabella","Sophia","Mia"],init:function(){this.tweens=new ig.TweensHandler();this.setupStorage();this.network_client=new ig.NetworkClient();this.gameClient=new GameClient(this.network_client);document.addEventListener("visibilitychange",function(){var control=ig.game.getEntityByName('GameController');this.isHidden=document.hidden;if(control){if(this.isHidden){control.playerInactive();}else{control.playerActive();}}else{if(this.isHidden)ig.game.requestingState=true;}}.bind(this),false);this.io=new IoManager();this.removeLoadingWheel();this.setupAudio();this.isMobile=ig.ua.mobile;this.centerX=ig.system.width/2;this.centerY=ig.system.height/2;this.nameInput=ig.game.spawnEntity(EntityInput,0,0);this.nameInput.hide();this.pwInput=ig.game.spawnEntity(EntityInput,0,0,{name:'pw',placeHolder:'Enter a password'});if(this.isMobile)
this.pwInput.moveTo(this.pwInput.pos.x,this.pwInput.pos.y-83);else this.pwInput.moveTo(this.pwInput.pos.x,this.pwInput.pos.y-100);this.avatarId=ig.storage.load('avatarId');this.playerName=ig.storage.load('playerName');if(window.GAME_INIT_DATA){var initData=window.GAME_INIT_DATA;this.gameInitData=initData;if(initData.user&&initData.user.name){this.playerName=initData.user.name;ig.storage.save('playerName',this.playerName);}
if(initData.gameType==='bots'){this.botMode=true;}
if(initData.playerCount){this.roomSize=initData.playerCount;}
console.log('Game initialized with data:',initData);}
var urlParams=new URLSearchParams(window.location.search);var playerIdFromUrl=urlParams.get('playerID');if(playerIdFromUrl){this.playerName=playerIdFromUrl;ig.storage.save('playerName',playerIdFromUrl);}
this.nameInput.val(this.playerName);this.showTutorial=ig.storage.load('tutorial');ig.game.start();},handleUserData:function(playerImage,gameImage,gameSlug,userName,gameId,userId,token){this.userData.playerImage=playerImage;try{this.playerImage=new ig.Image(playerImage);}catch(e){this.playerImage="";}
this.userData.gameImage=gameImage;this.userData.gameSlug=gameSlug;this.userData.userName=userName;this.userData.gameId=gameId;this.userData.userId=userId;this.userData.token=token;this.playerName=userName;ig.storage.save('playerName',userName);this.nameInput.val(userName);console.log('User data received from SDK:',this.userData);},iRandBetween:function(min,max){return Math.floor(Math.random()*(max-min))+min;},fRandBetween:function(min,max){return Math.random()*(max-min)+min;},randomInArray:function(arr){var r=Math.floor(Math.random()*arr.length);return arr[r];},roundRect:function(x,y,width,height,radius){var ctx=ig.system.context;ctx.beginPath();ctx.moveTo(x+radius,y);ctx.lineTo(x+width-radius,y);ctx.quadraticCurveTo(x+width,y,x+width,y+radius);ctx.lineTo(x+width,y+height-radius);ctx.quadraticCurveTo(x+width,y+height,x+width-radius,y+height);ctx.lineTo(x+radius,y+height);ctx.quadraticCurveTo(x,y+height,x,y+height-radius);ctx.lineTo(x,y+radius);ctx.quadraticCurveTo(x,y,x+radius,y);ctx.closePath();ctx.stroke();ctx.fill();},wrapText:function(text,maxWidth,font){var words=text.split(' ');var line='';var lines=[];var testLine="";var metrics;var testWidth=0;ig.system.context.font=font;for(var n=0;n<words.length;n++){testLine=line+words[n]+' ';metrics=ig.system.context.measureText(testLine);testWidth=metrics.width;if(testWidth>maxWidth){lines.push(line);line=words[n]+' ';}else{line=testLine;}}
lines.push(line);return lines;},wrapText2:function(text,maxWidth,font){var lines=[];var texts=text.split('\n');for(var i=0;i<texts.length;i++){lines=lines.concat(this.wrapText(texts[i],maxWidth,font));}
return lines;},drawBlackOverlay:function(){ig.system.context.fillStyle="rgba(0,0,0,0.5)";ig.system.context.fillRect(0,0,ig.system.width,ig.system.height);},setTextStyle:function(font,color,align){ig.system.context.textBaseline='alphabetic';ig.system.context.font=font;ig.system.context.fillStyle=color;ig.system.context.textAlign=align;},setStrokeStyle:function(color,lineWidth){ig.system.context.strokeStyle=color;ig.system.context.lineWidth=lineWidth;ig.system.context.lineJoin='round';},drawText:function(text,x,y){ig.system.context.fillText(text,x,y);},drawTextStrokeMultiLines:function(textArray,x,y,lineHeight){for(var i=0;i<textArray.length;i++){ig.game.drawTextStroke(textArray[i],x,y+i*lineHeight);}},drawTextMultiLines:function(textArray,x,y,lineHeight){for(var i=0;i<textArray.length;i++){ig.system.context.fillText(textArray[i],x,y+i*lineHeight);}},drawTextStroke:function(text,x,y){ig.system.context.strokeText(text,x,y);ig.system.context.fillText(text,x,y);},drawTextShadow:function(text,x,y){ig.system.context.fillText(text,x,y);ig.system.context.fillStyle="rgba(0,0,0,0.8)";ig.system.context.fillText(text,x+3,y+3);},setupStorage:function(){ig.storage=new ig.Storage(this.name,this.version);ig.storage.setupData({sound:0.8,music:0.25,playerName:'',avatarId:0,tutorial:true});},setupAudio:function(){var vol=ig.storage.load('music');ig.soundHandler.bgmPlayer.volume(vol);vol=ig.storage.load('sound');ig.soundHandler.sfxPlayer.volume(vol);},removeLoadingWheel:function(){try{$('#gloader').css('background','none');}catch(err){console.log(err)}},start:function(){this.director=new ig.Director(this,[LevelHome,LevelGame]);this.director.loadLevel(this.director.currentLevel);ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);},requestFullscreen:function(){var elem=document.documentElement;if(elem.requestFullscreen){elem.requestFullscreen();return;}
if(elem.webkitRequestFullscreen){elem.webkitRequestFullscreen();return;}
if(elem.mozRequestFullScreen){elem.mozRequestFullScreen();return;}
if(elem.msRequestFullscreen){elem.msRequestFullscreen();return;}},pauseGame:function(){},resumeGame:function(){},update:function(){this.parent();this.tweens.update(this.tweens.now());},requestFullscreen:function(event){var elem=document.documentElement;if(elem.requestFullscreen){elem.requestFullscreen();return;}
if(elem.webkitRequestFullscreen){elem.webkitRequestFullscreen();return;}
if(elem.mozRequestFullScreen){elem.mozRequestFullScreen();return;}
if(elem.msRequestFullscreen){elem.msRequestFullscreen();return;}}});ig.domHandler=null;ig.domHandler=new ig.DomHandler();ig.domHandler.forcedDeviceDetection();ig.domHandler.forcedDeviceRotation();ig.sizeHandler=new ig.SizeHandler(ig.domHandler);var fps=60;if(ig.ua.mobile){ig.Sound.enabled=false;ig.main('#canvas',MyGame,fps,ig.sizeHandler.mobile.actualResolution.x,ig.sizeHandler.mobile.actualResolution.y,ig.sizeHandler.scale,ig.SplashLoader);ig.sizeHandler.resize();}else{ig.main('#canvas',MyGame,fps,ig.sizeHandler.desktop.actualResolution.x,ig.sizeHandler.desktop.actualResolution.y,ig.sizeHandler.scale,ig.SplashLoader);}
ig.soundHandler=null;ig.soundHandler=new ig.SoundHandler();ig.sizeHandler.reorient();});