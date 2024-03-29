window.JSON||(window.JSON={}),function(){function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,n,a,o,s=gap,i,u=t[e];switch(u&&"object"==typeof u&&"function"==typeof u.toJSON&&(u=u.toJSON(e)),"function"==typeof rep&&(u=rep.call(t,e,u)),typeof u){case"string":return quote(u);case"number":return isFinite(u)?String(u):"null";case"boolean":case"null":return String(u);case"object":if(!u)return"null";if(gap+=indent,i=[],"[object Array]"===Object.prototype.toString.apply(u)){for(o=u.length,r=0;o>r;r+=1)i[r]=str(r,u)||"null";return a=0===i.length?"[]":gap?"[\n"+gap+i.join(",\n"+gap)+"\n"+s+"]":"["+i.join(",")+"]",gap=s,a}if(rep&&"object"==typeof rep)for(o=rep.length,r=0;o>r;r+=1)n=rep[r],"string"==typeof n&&(a=str(n,u),a&&i.push(quote(n)+(gap?": ":":")+a));else for(n in u)Object.hasOwnProperty.call(u,n)&&(a=str(n,u),a&&i.push(quote(n)+(gap?": ":":")+a));return a=0===i.length?"{}":gap?"{\n"+gap+i.join(",\n"+gap)+"\n"+s+"}":"{"+i.join(",")+"}",gap=s,a}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var JSON=window.JSON,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=t,!t||"function"==typeof t||"object"==typeof t&&"number"==typeof t.length)return str("",{"":e});throw new Error("JSON.stringify")}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var r,n,a=e[t];if(a&&"object"==typeof a)for(r in a)Object.hasOwnProperty.call(a,r)&&(n=walk(a,r),void 0!==n?a[r]=n:delete a[r]);return reviver.call(e,t,a)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"use strict";var r=e.History=e.History||{},n=e.jQuery;if("undefined"!=typeof r.Adapter)throw new Error("History.js Adapter has already been loaded...");r.Adapter={bind:function(e,t,r){n(e).bind(t,r)},trigger:function(e,t,r){n(e).trigger(t,r)},extractEventData:function(e,r,n){var a=r&&r.originalEvent&&r.originalEvent[e]||n&&n[e]||t;return a},onDomLoad:function(e){n(e)}},"undefined"!=typeof r.init&&r.init()}(window),function(e,t){"use strict";var r=e.document,n=e.setTimeout||n,a=e.clearTimeout||a,o=e.setInterval||o,s=e.History=e.History||{};if("undefined"!=typeof s.initHtml4)throw new Error("History.js HTML4 Support has already been loaded...");s.initHtml4=function(){return"undefined"!=typeof s.initHtml4.initialized?!1:(s.initHtml4.initialized=!0,s.enabled=!0,s.savedHashes=[],s.isLastHash=function(e){var t=s.getHashByIndex(),r;return r=e===t},s.saveHash=function(e){return s.isLastHash(e)?!1:(s.savedHashes.push(e),!0)},s.getHashByIndex=function(e){var t=null;return t="undefined"==typeof e?s.savedHashes[s.savedHashes.length-1]:0>e?s.savedHashes[s.savedHashes.length+e]:s.savedHashes[e]},s.discardedHashes={},s.discardedStates={},s.discardState=function(e,t,r){var n=s.getHashByState(e),a;return a={discardedState:e,backState:r,forwardState:t},s.discardedStates[n]=a,!0},s.discardHash=function(e,t,r){var n={discardedHash:e,backState:r,forwardState:t};return s.discardedHashes[e]=n,!0},s.discardedState=function(e){var t=s.getHashByState(e),r;return r=s.discardedStates[t]||!1},s.discardedHash=function(e){var t=s.discardedHashes[e]||!1;return t},s.recycleState=function(e){var t=s.getHashByState(e);return s.discardedState(e)&&delete s.discardedStates[t],!0},s.emulated.hashChange&&(s.hashChangeInit=function(){s.checkerFunction=null;var t="",n,a,i,u;return s.isInternetExplorer()?(n="historyjs-iframe",a=r.createElement("iframe"),a.setAttribute("id",n),a.style.display="none",r.body.appendChild(a),a.contentWindow.document.open(),a.contentWindow.document.close(),i="",u=!1,s.checkerFunction=function(){if(u)return!1;u=!0;var r=s.getHash()||"",n=s.unescapeHash(a.contentWindow.document.location.hash)||"";return r!==t?(t=r,n!==r&&(i=n=r,a.contentWindow.document.open(),a.contentWindow.document.close(),a.contentWindow.document.location.hash=s.escapeHash(r)),s.Adapter.trigger(e,"hashchange")):n!==i&&(i=n,s.setHash(n,!1)),u=!1,!0}):s.checkerFunction=function(){var r=s.getHash();return r!==t&&(t=r,s.Adapter.trigger(e,"hashchange")),!0},s.intervalList.push(o(s.checkerFunction,s.options.hashChangeInterval)),!0},s.Adapter.onDomLoad(s.hashChangeInit)),s.emulated.pushState&&(s.onHashChange=function(t){var n=t&&t.newURL||r.location.href,a=s.getHashByUrl(n),o=null,i=null,u=null,l;return s.isLastHash(a)?(s.busy(!1),!1):(s.doubleCheckComplete(),s.saveHash(a),a&&s.isTraditionalAnchor(a)?(s.Adapter.trigger(e,"anchorchange"),s.busy(!1),!1):(o=s.extractState(s.getFullUrl(a||r.location.href,!1),!0),s.isLastSavedState(o)?(s.busy(!1),!1):(i=s.getHashByState(o),l=s.discardedState(o),l?(s.getHashByIndex(-2)===s.getHashByState(l.forwardState)?s.back(!1):s.forward(!1),!1):(s.pushState(o.data,o.title,o.url,!1),!0))))},s.Adapter.bind(e,"hashchange",s.onHashChange),s.pushState=function(t,n,a,o){if(s.getHashByUrl(a))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(o!==!1&&s.busy())return s.pushQueue({scope:s,callback:s.pushState,args:arguments,queue:o}),!1;s.busy(!0);var i=s.createStateObject(t,n,a),u=s.getHashByState(i),l=s.getState(!1),c=s.getHashByState(l),d=s.getHash();return s.storeState(i),s.expectedStateId=i.id,s.recycleState(i),s.setTitle(i),u===c?(s.busy(!1),!1):u!==d&&u!==s.getShortUrl(r.location.href)?(s.setHash(u,!1),!1):(s.saveState(i),s.Adapter.trigger(e,"statechange"),s.busy(!1),!0)},s.replaceState=function(e,t,r,n){if(s.getHashByUrl(r))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(n!==!1&&s.busy())return s.pushQueue({scope:s,callback:s.replaceState,args:arguments,queue:n}),!1;s.busy(!0);var a=s.createStateObject(e,t,r),o=s.getState(!1),i=s.getStateByIndex(-2);return s.discardState(o,a,i),s.pushState(a.data,a.title,a.url,!1),!0}),s.emulated.pushState&&s.getHash()&&!s.emulated.hashChange&&s.Adapter.onDomLoad(function(){s.Adapter.trigger(e,"hashchange")}),void 0)},"undefined"!=typeof s.init&&s.init()}(window),function(e,t){"use strict";var r=e.console||t,n=e.document,a=e.navigator,o=e.sessionStorage||!1,s=e.setTimeout,i=e.clearTimeout,u=e.setInterval,l=e.clearInterval,c=e.JSON,d=e.alert,p=e.History=e.History||{},h=e.history;if(c.stringify=c.stringify||c.encode,c.parse=c.parse||c.decode,"undefined"!=typeof p.init)throw new Error("History.js Core has already been loaded...");p.init=function(){return"undefined"==typeof p.Adapter?!1:("undefined"!=typeof p.initCore&&p.initCore(),"undefined"!=typeof p.initHtml4&&p.initHtml4(),!0)},p.initCore=function(){if("undefined"!=typeof p.initCore.initialized)return!1;if(p.initCore.initialized=!0,p.options=p.options||{},p.options.hashChangeInterval=p.options.hashChangeInterval||100,p.options.safariPollInterval=p.options.safariPollInterval||500,p.options.doubleCheckInterval=p.options.doubleCheckInterval||500,p.options.storeInterval=p.options.storeInterval||1e3,p.options.busyDelay=p.options.busyDelay||250,p.options.debug=p.options.debug||!1,p.options.initialTitle=p.options.initialTitle||n.title,p.intervalList=[],p.clearAllIntervals=function(){var e,t=p.intervalList;if("undefined"!=typeof t&&null!==t){for(e=0;e<t.length;e++)l(t[e]);p.intervalList=null}},p.debug=function(){(p.options.debug||!1)&&p.log.apply(p,arguments)},p.log=function(){var e="undefined"!=typeof r&&"undefined"!=typeof r.log&&"undefined"!=typeof r.log.apply,t=n.getElementById("log"),a,o,s,i,u;for(e?(i=Array.prototype.slice.call(arguments),a=i.shift(),"undefined"!=typeof r.debug?r.debug.apply(r,[a,i]):r.log.apply(r,[a,i])):a="\n"+arguments[0]+"\n",o=1,s=arguments.length;s>o;++o){if(u=arguments[o],"object"==typeof u&&"undefined"!=typeof c)try{u=c.stringify(u)}catch(l){}a+="\n"+u+"\n"}return t?(t.value+=a+"\n-----\n",t.scrollTop=t.scrollHeight-t.clientHeight):e||d(a),!0},p.getInternetExplorerMajorVersion=function(){var e=p.getInternetExplorerMajorVersion.cached="undefined"!=typeof p.getInternetExplorerMajorVersion.cached?p.getInternetExplorerMajorVersion.cached:function(){for(var e=3,t=n.createElement("div"),r=t.getElementsByTagName("i");(t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&r[0];);return e>4?e:!1}();return e},p.isInternetExplorer=function(){var e=p.isInternetExplorer.cached="undefined"!=typeof p.isInternetExplorer.cached?p.isInternetExplorer.cached:Boolean(p.getInternetExplorerMajorVersion());return e},p.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(a.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(a.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in n)||p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<8)},p.enabled=!p.emulated.pushState,p.bugs={setHash:Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===a.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(a.userAgent)),safariPoll:Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===a.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(a.userAgent)),ieDoubleCheck:Boolean(p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<7)},p.isEmptyObject=function(e){for(var t in e)return!1;return!0},p.cloneObject=function(e){var t,r;return e?(t=c.stringify(e),r=c.parse(t)):r={},r},p.getRootUrl=function(){var e=n.location.protocol+"//"+(n.location.hostname||n.location.host);return n.location.port&&(e+=":"+n.location.port),e+="/"},p.getBaseHref=function(){var e=n.getElementsByTagName("base"),t=null,r="";return 1===e.length&&(t=e[0],r=t.href.replace(/[^\/]+$/,"")),r=r.replace(/\/+$/,""),r&&(r+="/"),r},p.getBaseUrl=function(){var e=p.getBaseHref()||p.getBasePageUrl()||p.getRootUrl();return e},p.getPageUrl=function(){var e=p.getState(!1,!1),t=(e||{}).url||n.location.href,r;return r=t.replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,r){return/\./.test(e)?e:e+"/"})},p.getBasePageUrl=function(){var e=n.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,r){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},p.getFullUrl=function(e,t){var r=e,n=e.substring(0,1);return t="undefined"==typeof t?!0:t,/[a-z]+\:\/\//.test(e)||(r="/"===n?p.getRootUrl()+e.replace(/^\/+/,""):"#"===n?p.getPageUrl().replace(/#.*/,"")+e:"?"===n?p.getPageUrl().replace(/[\?#].*/,"")+e:t?p.getBaseUrl()+e.replace(/^(\.\/)+/,""):p.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),r.replace(/\#$/,"")},p.getShortUrl=function(e){var t=e,r=p.getBaseUrl(),n=p.getRootUrl();return p.emulated.pushState&&(t=t.replace(r,"")),t=t.replace(n,"/"),p.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,"")},p.store={},p.idToState=p.idToState||{},p.stateToId=p.stateToId||{},p.urlToId=p.urlToId||{},p.storedStates=p.storedStates||[],p.savedStates=p.savedStates||[],p.normalizeStore=function(){p.store.idToState=p.store.idToState||{},p.store.urlToId=p.store.urlToId||{},p.store.stateToId=p.store.stateToId||{}},p.getState=function(e,t){"undefined"==typeof e&&(e=!0),"undefined"==typeof t&&(t=!0);var r=p.getLastSavedState();return!r&&t&&(r=p.createStateObject()),e&&(r=p.cloneObject(r),r.url=r.cleanUrl||r.url),r},p.getIdByState=function(e){var t=p.extractId(e.url),r;if(!t)if(r=p.getStateString(e),"undefined"!=typeof p.stateToId[r])t=p.stateToId[r];else if("undefined"!=typeof p.store.stateToId[r])t=p.store.stateToId[r];else{for(;t=(new Date).getTime()+String(Math.random()).replace(/\D/g,""),"undefined"!=typeof p.idToState[t]||"undefined"!=typeof p.store.idToState[t];);p.stateToId[r]=t,p.idToState[t]=e}return t},p.normalizeState=function(e){var t,r;return e&&"object"==typeof e||(e={}),"undefined"!=typeof e.normalized?e:(e.data&&"object"==typeof e.data||(e.data={}),t={},t.normalized=!0,t.title=e.title||"",t.url=p.getFullUrl(p.unescapeString(e.url||n.location.href)),t.hash=p.getShortUrl(t.url),t.data=p.cloneObject(e.data),t.id=p.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,r=!p.isEmptyObject(t.data),(t.title||r)&&(t.hash=p.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=p.getFullUrl(t.hash),(p.emulated.pushState||p.bugs.safariPoll)&&p.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t)},p.createStateObject=function(e,t,r){var n={data:e,title:t,url:r};return n=p.normalizeState(n)},p.getStateById=function(e){e=String(e);var r=p.idToState[e]||p.store.idToState[e]||t;return r},p.getStateString=function(e){var t,r,n;return t=p.normalizeState(e),r={data:t.data,title:e.title,url:e.url},n=c.stringify(r)},p.getStateId=function(e){var t,r;return t=p.normalizeState(e),r=t.id},p.getHashByState=function(e){var t,r;return t=p.normalizeState(e),r=t.hash},p.extractId=function(e){var t,r,n;return r=/(.*)\&_suid=([0-9]+)$/.exec(e),n=r?r[1]||e:e,t=r?String(r[2]||""):"",t||!1},p.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},p.extractState=function(e,t){var r=null,n,a;return t=t||!1,n=p.extractId(e),n&&(r=p.getStateById(n)),r||(a=p.getFullUrl(e),n=p.getIdByUrl(a)||!1,n&&(r=p.getStateById(n)),!r&&t&&!p.isTraditionalAnchor(e)&&(r=p.createStateObject(null,null,a))),r},p.getIdByUrl=function(e){var r=p.urlToId[e]||p.store.urlToId[e]||t;return r},p.getLastSavedState=function(){return p.savedStates[p.savedStates.length-1]||t},p.getLastStoredState=function(){return p.storedStates[p.storedStates.length-1]||t},p.hasUrlDuplicate=function(e){var t=!1,r;return r=p.extractState(e.url),t=r&&r.id!==e.id},p.storeState=function(e){return p.urlToId[e.url]=e.id,p.storedStates.push(p.cloneObject(e)),e},p.isLastSavedState=function(e){var t=!1,r,n,a;return p.savedStates.length&&(r=e.id,n=p.getLastSavedState(),a=n.id,t=r===a),t},p.saveState=function(e){return p.isLastSavedState(e)?!1:(p.savedStates.push(p.cloneObject(e)),!0)},p.getStateByIndex=function(e){var t=null;return t="undefined"==typeof e?p.savedStates[p.savedStates.length-1]:0>e?p.savedStates[p.savedStates.length+e]:p.savedStates[e]},p.getHash=function(){var e=p.unescapeHash(n.location.hash);return e},p.unescapeString=function(t){for(var r=t,n;n=e.unescape(r),n!==r;)r=n;return r},p.unescapeHash=function(e){var t=p.normalizeHash(e);return t=p.unescapeString(t)},p.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},p.setHash=function(e,t){var r,a,o;return t!==!1&&p.busy()?(p.pushQueue({scope:p,callback:p.setHash,args:arguments,queue:t}),!1):(r=p.escapeHash(e),p.busy(!0),a=p.extractState(e,!0),a&&!p.emulated.pushState?p.pushState(a.data,a.title,a.url,!1):n.location.hash!==r&&(p.bugs.setHash?(o=p.getPageUrl(),p.pushState(null,null,o+"#"+r,!1)):n.location.hash=r),p)},p.escapeHash=function(t){var r=p.normalizeHash(t);return r=e.escape(r),p.bugs.hashEscape||(r=r.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),r},p.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=p.unescapeHash(t)},p.setTitle=function(e){var t=e.title,r;t||(r=p.getStateByIndex(0),r&&r.url===e.url&&(t=r.title||p.options.initialTitle));try{n.getElementsByTagName("title")[0].innerHTML=t.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(a){}return n.title=t,p},p.queues=[],p.busy=function(e){if("undefined"!=typeof e?p.busy.flag=e:"undefined"==typeof p.busy.flag&&(p.busy.flag=!1),!p.busy.flag){i(p.busy.timeout);var t=function(){var e,r,n;if(!p.busy.flag)for(e=p.queues.length-1;e>=0;--e)r=p.queues[e],0!==r.length&&(n=r.shift(),p.fireQueueItem(n),p.busy.timeout=s(t,p.options.busyDelay))};p.busy.timeout=s(t,p.options.busyDelay)}return p.busy.flag},p.busy.flag=!1,p.fireQueueItem=function(e){return e.callback.apply(e.scope||p,e.args||[])},p.pushQueue=function(e){return p.queues[e.queue||0]=p.queues[e.queue||0]||[],p.queues[e.queue||0].push(e),p},p.queue=function(e,t){return"function"==typeof e&&(e={callback:e}),"undefined"!=typeof t&&(e.queue=t),p.busy()?p.pushQueue(e):p.fireQueueItem(e),p},p.clearQueue=function(){return p.busy.flag=!1,p.queues=[],p},p.stateChanged=!1,p.doubleChecker=!1,p.doubleCheckComplete=function(){return p.stateChanged=!0,p.doubleCheckClear(),p},p.doubleCheckClear=function(){return p.doubleChecker&&(i(p.doubleChecker),p.doubleChecker=!1),p},p.doubleCheck=function(e){return p.stateChanged=!1,p.doubleCheckClear(),p.bugs.ieDoubleCheck&&(p.doubleChecker=s(function(){return p.doubleCheckClear(),p.stateChanged||e(),!0},p.options.doubleCheckInterval)),p},p.safariStatePoll=function(){var t=p.extractState(n.location.href),r;if(!p.isLastSavedState(t))return r=t,r||(r=p.createStateObject()),p.Adapter.trigger(e,"popstate"),p},p.back=function(e){return e!==!1&&p.busy()?(p.pushQueue({scope:p,callback:p.back,args:arguments,queue:e}),!1):(p.busy(!0),p.doubleCheck(function(){p.back(!1)}),h.go(-1),!0)},p.forward=function(e){return e!==!1&&p.busy()?(p.pushQueue({scope:p,callback:p.forward,args:arguments,queue:e}),!1):(p.busy(!0),p.doubleCheck(function(){p.forward(!1)}),h.go(1),!0)},p.go=function(e,t){var r;if(e>0)for(r=1;e>=r;++r)p.forward(t);else{if(!(0>e))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(r=-1;r>=e;--r)p.back(t)}return p},p.emulated.pushState){var f=function(){};p.pushState=p.pushState||f,p.replaceState=p.replaceState||f}else p.onPopState=function(t,r){var a=!1,o=!1,s,i;return p.doubleCheckComplete(),s=p.getHash(),s?(i=p.extractState(s||n.location.href,!0),i?p.replaceState(i.data,i.title,i.url,!1):(p.Adapter.trigger(e,"anchorchange"),p.busy(!1)),p.expectedStateId=!1,!1):(a=p.Adapter.extractEventData("state",t,r)||!1,o=a?p.getStateById(a):p.expectedStateId?p.getStateById(p.expectedStateId):p.extractState(n.location.href),o||(o=p.createStateObject(null,null,n.location.href)),p.expectedStateId=!1,p.isLastSavedState(o)?(p.busy(!1),!1):(p.storeState(o),p.saveState(o),p.setTitle(o),p.Adapter.trigger(e,"statechange"),p.busy(!1),!0))},p.Adapter.bind(e,"popstate",p.onPopState),p.pushState=function(t,r,n,a){if(p.getHashByUrl(n)&&p.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(a!==!1&&p.busy())return p.pushQueue({scope:p,callback:p.pushState,args:arguments,queue:a}),!1;p.busy(!0);var o=p.createStateObject(t,r,n);return p.isLastSavedState(o)?p.busy(!1):(p.storeState(o),p.expectedStateId=o.id,h.pushState(o.id,o.title,o.url),p.Adapter.trigger(e,"popstate")),!0},p.replaceState=function(t,r,n,a){if(p.getHashByUrl(n)&&p.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(a!==!1&&p.busy())return p.pushQueue({scope:p,callback:p.replaceState,args:arguments,queue:a}),!1;p.busy(!0);var o=p.createStateObject(t,r,n);return p.isLastSavedState(o)?p.busy(!1):(p.storeState(o),p.expectedStateId=o.id,h.replaceState(o.id,o.title,o.url),p.Adapter.trigger(e,"popstate")),!0};if(o){try{p.store=c.parse(o.getItem("History.store"))||{}}catch(g){p.store={}}p.normalizeStore()}else p.store={},p.normalizeStore();p.Adapter.bind(e,"beforeunload",p.clearAllIntervals),p.Adapter.bind(e,"unload",p.clearAllIntervals),p.saveState(p.storeState(p.extractState(n.location.href,!0))),o&&(p.onUnload=function(){var e,t;try{e=c.parse(o.getItem("History.store"))||{}}catch(r){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in p.idToState)p.idToState.hasOwnProperty(t)&&(e.idToState[t]=p.idToState[t]);for(t in p.urlToId)p.urlToId.hasOwnProperty(t)&&(e.urlToId[t]=p.urlToId[t]);for(t in p.stateToId)p.stateToId.hasOwnProperty(t)&&(e.stateToId[t]=p.stateToId[t]);p.store=e,p.normalizeStore(),o.setItem("History.store",c.stringify(e))},p.intervalList.push(u(p.onUnload,p.options.storeInterval)),p.Adapter.bind(e,"beforeunload",p.onUnload),p.Adapter.bind(e,"unload",p.onUnload)),p.emulated.pushState||(p.bugs.safariPoll&&p.intervalList.push(u(p.safariStatePoll,p.options.safariPollInterval)),("Apple Computer, Inc."===a.vendor||"Mozilla"===(a.appCodeName||""))&&(p.Adapter.bind(e,"hashchange",function(){p.Adapter.trigger(e,"popstate")}),p.getHash()&&p.Adapter.onDomLoad(function(){p.Adapter.trigger(e,"hashchange")})))},p.init()}(window),jQuery(document).ready(function($){var e="http://"+(document.location.hostname||document.location.host);$(document).delegate('a[href^="/"],a[href^="'+e+'"]',"click",function(e){e.preventDefault(),History.pushState({},"",this.pathname)}),History.Adapter.bind(window,"statechange",function(){var e=History.getState();$.get(e.url,function(t){document.title=$(t).find("title").text(),$(".content").html($(t).find(".content")),$("body:has(div:not(.url_index))").addClass("work-layer-open").removeClass("work-layer-close"),$("body:has(.url_index)").addClass("work-layer-close").removeClass("work-layer-open"),ga("send","pageview",{page:e.url,title:document.title})})}),$("body:has(div:not(.url_index))").addClass("work-layer-open").removeClass("work-layer-close"),$("body:has(.url_index)").addClass("work-layer-close").removeClass("work-layer-open")}),$(document).ready(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},300),!1}})}),$(document).ready(function(){var e=$(".section"),t=$(".menu"),r=t.outerHeight();$(window).on("scroll",function(){var n=$(this).scrollTop();e.each(function(){var a=$(this).offset().top-r,o=a+$(this).outerHeight();n>=a&&o>=n&&(t.find("a").removeClass("active"),e.removeClass("active"),$(this).addClass("active"),t.find('a[href="#'+$(this).attr("id")+'"]').addClass("active"))})})}),$(document).ready(function(){$(".menu-item").click(function(){$("body").removeClass("work-layer-open")})}),function(){var e,t,r,n,a,o,s,i,u,l,c,d,p,h,f,g,y,m,v,S,b,w,I,H,T,x,k,C,j,A,U,E,O,L,q,B,P,N,M,D,F,R,z,_,J,Q,W,V,X,K=[].slice,G={}.hasOwnProperty,Y=function(e,t){function r(){this.constructor=e}for(var n in t)G.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},$=[].indexOf||function(e){for(var t=0,r=this.length;r>t;t++)if(t in this&&this[t]===e)return t;return-1};for(b={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},j=function(){var e;return null!=(e="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?e:+new Date},U=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,S=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==U&&(U=function(e){return setTimeout(e,50)},S=function(e){return clearTimeout(e)}),O=function(e){var t,r;return t=j(),(r=function(){var n;return n=j()-t,n>=33?(t=j(),e(n,function(){return U(r)})):setTimeout(r,33-n)})()},E=function(){var e,t,r;return r=arguments[0],t=arguments[1],e=3<=arguments.length?K.call(arguments,2):[],"function"==typeof r[t]?r[t].apply(r,e):r[t]},w=function(){var e,t,r,n,a,o,s;for(t=arguments[0],n=2<=arguments.length?K.call(arguments,1):[],o=0,s=n.length;s>o;o++)if(r=n[o])for(e in r)G.call(r,e)&&(a=r[e],null!=t[e]&&"object"==typeof t[e]&&null!=a&&"object"==typeof a?w(t[e],a):t[e]=a);return t},y=function(e){var t,r,n,a,o;for(r=t=0,a=0,o=e.length;o>a;a++)n=e[a],r+=Math.abs(n),t++;return r/t},H=function(e,t){var r,n,a;if(null==e&&(e="options"),null==t&&(t=!0),a=document.querySelector("[data-pace-"+e+"]")){if(r=a.getAttribute("data-pace-"+e),!t)return r;try{return JSON.parse(r)}catch(o){return n=o,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",n):void 0}}},s=function(){function e(){}return e.prototype.on=function(e,t,r,n){var a;return null==n&&(n=!1),null==this.bindings&&(this.bindings={}),null==(a=this.bindings)[e]&&(a[e]=[]),this.bindings[e].push({handler:t,ctx:r,once:n})},e.prototype.once=function(e,t,r){return this.on(e,t,r,!0)},e.prototype.off=function(e,t){var r,n,a;if(null!=(null!=(n=this.bindings)?n[e]:void 0)){if(null==t)return delete this.bindings[e];for(r=0,a=[];r<this.bindings[e].length;)a.push(this.bindings[e][r].handler===t?this.bindings[e].splice(r,1):r++);return a}},e.prototype.trigger=function(){var e,t,r,n,a,o,s,i,u;if(r=arguments[0],e=2<=arguments.length?K.call(arguments,1):[],null!=(s=this.bindings)?s[r]:void 0){for(a=0,u=[];a<this.bindings[r].length;)i=this.bindings[r][a],n=i.handler,t=i.ctx,o=i.once,n.apply(null!=t?t:this,e),u.push(o?this.bindings[r].splice(a,1):a++);return u}},e}(),l=window.Pace||{},window.Pace=l,w(l,s.prototype),A=l.options=w({},b,window.paceOptions,H()),W=["ajax","document","eventLag","elements"],z=0,J=W.length;J>z;z++)P=W[z],A[P]===!0&&(A[P]=b[P]);u=function(e){function t(){return V=t.__super__.constructor.apply(this,arguments)}return Y(t,e),t}(Error),t=function(){function e(){this.progress=0}return e.prototype.getElement=function(){var e;if(null==this.el){if(e=document.querySelector(A.target),!e)throw new u;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=e.firstChild?e.insertBefore(this.el,e.firstChild):e.appendChild(this.el)}return this.el},e.prototype.finish=function(){var e;return e=this.getElement(),e.className=e.className.replace("pace-active",""),e.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},e.prototype.update=function(e){return this.progress=e,this.render()},e.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(e){u=e}return this.el=void 0},e.prototype.render=function(){var e,t,r,n,a,o,s;if(null==document.querySelector(A.target))return!1;for(e=this.getElement(),n="translate3d("+this.progress+"%, 0, 0)",s=["webkitTransform","msTransform","transform"],a=0,o=s.length;o>a;a++)t=s[a],e.children[0].style[t]=n;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(e.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?r="99":(r=this.progress<10?"0":"",r+=0|this.progress),e.children[0].setAttribute("data-progress",""+r)),this.lastRenderedProgress=this.progress},e.prototype.done=function(){return this.progress>=100},e}(),i=function(){function e(){this.bindings={}}return e.prototype.trigger=function(e,t){var r,n,a,o,s;if(null!=this.bindings[e]){for(o=this.bindings[e],s=[],n=0,a=o.length;a>n;n++)r=o[n],s.push(r.call(this,t));return s}},e.prototype.on=function(e,t){var r;return null==(r=this.bindings)[e]&&(r[e]=[]),this.bindings[e].push(t)},e}(),R=window.XMLHttpRequest,F=window.XDomainRequest,D=window.WebSocket,I=function(e,t){var r,n,a,o;o=[];for(n in t.prototype)try{a=t.prototype[n],o.push(null==e[n]&&"function"!=typeof a?e[n]=a:void 0)}catch(s){r=s}return o},k=[],l.ignore=function(){var e,t,r;return t=arguments[0],e=2<=arguments.length?K.call(arguments,1):[],k.unshift("ignore"),r=t.apply(null,e),k.shift(),r},l.track=function(){var e,t,r;return t=arguments[0],e=2<=arguments.length?K.call(arguments,1):[],k.unshift("track"),r=t.apply(null,e),k.shift(),r},B=function(e){var t;if(null==e&&(e="GET"),"track"===k[0])return"force";if(!k.length&&A.ajax){if("socket"===e&&A.ajax.trackWebSockets)return!0;if(t=e.toUpperCase(),$.call(A.ajax.trackMethods,t)>=0)return!0}return!1},c=function(e){function t(){var e,r=this;t.__super__.constructor.apply(this,arguments),e=function(e){var t;return t=e.open,e.open=function(n,a){return B(n)&&r.trigger("request",{type:n,url:a,request:e}),t.apply(e,arguments)}},window.XMLHttpRequest=function(t){var r;return r=new R(t),e(r),r};try{I(window.XMLHttpRequest,R)}catch(n){}if(null!=F){window.XDomainRequest=function(){var t;return t=new F,e(t),t};try{I(window.XDomainRequest,F)}catch(n){}}if(null!=D&&A.ajax.trackWebSockets){window.WebSocket=function(e,t){var n;return n=null!=t?new D(e,t):new D(e),B("socket")&&r.trigger("request",{type:"socket",url:e,protocols:t,request:n}),n};try{I(window.WebSocket,D)}catch(n){}}}return Y(t,e),t}(i),_=null,T=function(){return null==_&&(_=new c),_},q=function(e){var t,r,n,a;for(a=A.ajax.ignoreURLs,r=0,n=a.length;n>r;r++)if(t=a[r],"string"==typeof t){if(-1!==e.indexOf(t))return!0}else if(t.test(e))return!0;return!1},T().on("request",function(t){var r,n,a,o,s;return o=t.type,a=t.request,s=t.url,q(s)?void 0:l.running||A.restartOnRequestAfter===!1&&"force"!==B(o)?void 0:(n=arguments,r=A.restartOnRequestAfter||0,"boolean"==typeof r&&(r=0),setTimeout(function(){var t,r,s,i,u,c;if(t="socket"===o?a.readyState<2:0<(i=a.readyState)&&4>i){for(l.restart(),u=l.sources,c=[],r=0,s=u.length;s>r;r++){if(P=u[r],P instanceof e){P.watch.apply(P,n);break}c.push(void 0)}return c}},r))}),e=function(){function e(){var e=this;this.elements=[],T().on("request",function(){return e.watch.apply(e,arguments)})}return e.prototype.watch=function(e){var t,r,n,a;return n=e.type,t=e.request,a=e.url,q(a)?void 0:(r="socket"===n?new h(t):new f(t),this.elements.push(r))},e}(),f=function(){function e(e){var t,r,n,a,o,s,i=this;if(this.progress=0,null!=window.ProgressEvent)for(r=null,e.addEventListener("progress",function(e){return i.progress=e.lengthComputable?100*e.loaded/e.total:i.progress+(100-i.progress)/2},!1),s=["load","abort","timeout","error"],n=0,a=s.length;a>n;n++)t=s[n],e.addEventListener(t,function(){return i.progress=100},!1);else o=e.onreadystatechange,e.onreadystatechange=function(){var t;return 0===(t=e.readyState)||4===t?i.progress=100:3===e.readyState&&(i.progress=50),"function"==typeof o?o.apply(null,arguments):void 0}}return e}(),h=function(){function e(e){var t,r,n,a,o=this;for(this.progress=0,a=["error","open"],r=0,n=a.length;n>r;r++)t=a[r],e.addEventListener(t,function(){return o.progress=100},!1)}return e}(),n=function(){function e(e){var t,r,n,o;for(null==e&&(e={}),this.elements=[],null==e.selectors&&(e.selectors=[]),o=e.selectors,r=0,n=o.length;n>r;r++)t=o[r],this.elements.push(new a(t))}return e}(),a=function(){function e(e){this.selector=e,this.progress=0,this.check()}return e.prototype.check=function(){var e=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return e.check()},A.elements.checkInterval)},
e.prototype.done=function(){return this.progress=100},e}(),r=function(){function e(){var e,t,r=this;this.progress=null!=(t=this.states[document.readyState])?t:100,e=document.onreadystatechange,document.onreadystatechange=function(){return null!=r.states[document.readyState]&&(r.progress=r.states[document.readyState]),"function"==typeof e?e.apply(null,arguments):void 0}}return e.prototype.states={loading:0,interactive:50,complete:100},e}(),o=function(){function e(){var e,t,r,n,a,o=this;this.progress=0,e=0,a=[],n=0,r=j(),t=setInterval(function(){var s;return s=j()-r-50,r=j(),a.push(s),a.length>A.eventLag.sampleCount&&a.shift(),e=y(a),++n>=A.eventLag.minSamples&&e<A.eventLag.lagThreshold?(o.progress=100,clearInterval(t)):o.progress=100*(3/(e+3))},50)}return e}(),p=function(){function e(e){this.source=e,this.last=this.sinceLastUpdate=0,this.rate=A.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=E(this.source,"progress"))}return e.prototype.tick=function(e,t){var r;return null==t&&(t=E(this.source,"progress")),t>=100&&(this.done=!0),t===this.last?this.sinceLastUpdate+=e:(this.sinceLastUpdate&&(this.rate=(t-this.last)/this.sinceLastUpdate),this.catchup=(t-this.progress)/A.catchupTime,this.sinceLastUpdate=0,this.last=t),t>this.progress&&(this.progress+=this.catchup*e),r=1-Math.pow(this.progress/100,A.easeFactor),this.progress+=r*this.rate*e,this.progress=Math.min(this.lastProgress+A.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},e}(),N=null,L=null,m=null,M=null,g=null,v=null,l.running=!1,x=function(){return A.restartOnPushState?l.restart():void 0},null!=window.history.pushState&&(Q=window.history.pushState,window.history.pushState=function(){return x(),Q.apply(window.history,arguments)}),null!=window.history.replaceState&&(X=window.history.replaceState,window.history.replaceState=function(){return x(),X.apply(window.history,arguments)}),d={ajax:e,elements:n,document:r,eventLag:o},(C=function(){var e,r,n,a,o,s,i,u;for(l.sources=N=[],s=["ajax","elements","document","eventLag"],r=0,a=s.length;a>r;r++)e=s[r],A[e]!==!1&&N.push(new d[e](A[e]));for(u=null!=(i=A.extraSources)?i:[],n=0,o=u.length;o>n;n++)P=u[n],N.push(new P(A));return l.bar=m=new t,L=[],M=new p})(),l.stop=function(){return l.trigger("stop"),l.running=!1,m.destroy(),v=!0,null!=g&&("function"==typeof S&&S(g),g=null),C()},l.restart=function(){return l.trigger("restart"),l.stop(),l.start()},l.go=function(){var e;return l.running=!0,m.render(),e=j(),v=!1,g=O(function(t,r){var n,a,o,s,i,u,c,d,h,f,g,y,S,b,w,I;for(d=100-m.progress,a=g=0,o=!0,u=y=0,b=N.length;b>y;u=++y)for(P=N[u],f=null!=L[u]?L[u]:L[u]=[],i=null!=(I=P.elements)?I:[P],c=S=0,w=i.length;w>S;c=++S)s=i[c],h=null!=f[c]?f[c]:f[c]=new p(s),o&=h.done,h.done||(a++,g+=h.tick(t));return n=g/a,m.update(M.tick(t,n)),m.done()||o||v?(m.update(100),l.trigger("done"),setTimeout(function(){return m.finish(),l.running=!1,l.trigger("hide")},Math.max(A.ghostTime,Math.max(A.minTime-(j()-e),0)))):r()})},l.start=function(e){w(A,e),l.running=!0;try{m.render()}catch(t){u=t}return document.querySelector(".pace")?(l.trigger("start"),l.go()):setTimeout(l.start,50)},"function"==typeof define&&define.amd?define(function(){return l}):"object"==typeof exports?module.exports=l:A.startOnPageLoad&&l.start()}.call(this);