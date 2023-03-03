import{a as Ee,o as de,b as fe,e as w,F as Re,k as xe,t as H,f as Oe}from"./entry.ccb6c607.js";var Ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ge={},Se={get exports(){return ge},set exports(Z){ge=Z}};/* @license
Papa Parse
v5.4.0
https://github.com/mholt/PapaParse
License: MIT
*/(function(Z,me){(function(re,k){Z.exports=k()})(Ae,function re(){var k=typeof self<"u"?self:typeof window<"u"?window:k!==void 0?k:{},G=!k.document&&!!k.postMessage,ae=k.IS_PAPA_WORKER||!1,M={},we=0,l={parse:function(t,e){var r=(e=e||{}).dynamicTyping||!1;if(p(r)&&(e.dynamicTypingFunction=r,r={}),e.dynamicTyping=r,e.transform=!!p(e.transform)&&e.transform,e.worker&&l.WORKERS_SUPPORTED){var n=function(){if(!l.WORKERS_SUPPORTED)return!1;var h=(T=k.URL||k.webkitURL||null,b=re.toString(),l.BLOB_URL||(l.BLOB_URL=T.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",b,")();"],{type:"text/javascript"})))),d=new k.Worker(h),T,b;return d.onmessage=Ce,d.id=we++,M[d.id]=d}();return n.userStep=e.step,n.userChunk=e.chunk,n.userComplete=e.complete,n.userError=e.error,e.step=p(e.step),e.chunk=p(e.chunk),e.complete=p(e.complete),e.error=p(e.error),delete e.worker,void n.postMessage({input:t,config:e,workerId:n.id})}var s=null;return l.NODE_STREAM_INPUT,typeof t=="string"?(t=function(h){return h.charCodeAt(0)===65279?h.slice(1):h}(t),s=e.download?new oe(e):new ie(e)):t.readable===!0&&p(t.read)&&p(t.on)?s=new he(e):(k.File&&t instanceof File||t instanceof Object)&&(s=new ue(e)),s.stream(t)},unparse:function(t,e){var r=!1,n=!0,s=",",h=`\r
`,d='"',T=d+d,b=!1,a=null,C=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||l.BAD_DELIMITERS.filter(function(i){return e.delimiter.indexOf(i)!==-1}).length||(s=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(r=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(b=e.skipEmptyLines),typeof e.newline=="string"&&(h=e.newline),typeof e.quoteChar=="string"&&(d=e.quoteChar),typeof e.header=="boolean"&&(n=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");a=e.columns}e.escapeChar!==void 0&&(T=e.escapeChar+d),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(C=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var u=new RegExp(se(d),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return q(null,t,b);if(typeof t[0]=="object")return q(a||Object.keys(t[0]),t,b)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||a),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),q(t.fields||[],t.data||[],b);throw new Error("Unable to serialize unrecognized input");function q(i,m,D){var E="";typeof i=="string"&&(i=JSON.parse(i)),typeof m=="string"&&(m=JSON.parse(m));var I=Array.isArray(i)&&0<i.length,O=!Array.isArray(m[0]);if(I&&n){for(var A=0;A<i.length;A++)0<A&&(E+=s),E+=L(i[A],A);0<m.length&&(E+=h)}for(var o=0;o<m.length;o++){var f=I?i.length:m[o].length,y=!1,S=I?Object.keys(m[o]).length===0:m[o].length===0;if(D&&!I&&(y=D==="greedy"?m[o].join("").trim()==="":m[o].length===1&&m[o][0].length===0),D==="greedy"&&I){for(var _=[],F=0;F<f;F++){var R=O?i[F]:F;_.push(m[o][R])}y=_.join("").trim()===""}if(!y){for(var g=0;g<f;g++){0<g&&!S&&(E+=s);var Q=I&&O?i[g]:g;E+=L(m[o][Q],g)}o<m.length-1&&(!D||0<f&&!S)&&(E+=h)}}return E}function L(i,m){if(i==null)return"";if(i.constructor===Date)return JSON.stringify(i).slice(1,25);var D=!1;C&&typeof i=="string"&&C.test(i)&&(i="'"+i,D=!0);var E=i.toString().replace(u,T);return(D=D||r===!0||typeof r=="function"&&r(i,m)||Array.isArray(r)&&r[m]||function(I,O){for(var A=0;A<O.length;A++)if(-1<I.indexOf(O[A]))return!0;return!1}(E,l.BAD_DELIMITERS)||-1<E.indexOf(s)||E.charAt(0)===" "||E.charAt(E.length-1)===" ")?d+E+d:E}}};if(l.RECORD_SEP=String.fromCharCode(30),l.UNIT_SEP=String.fromCharCode(31),l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!G&&!!k.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=ce,l.ParserHandle=ye,l.NetworkStreamer=oe,l.FileStreamer=ue,l.StringStreamer=ie,l.ReadableStreamStreamer=he,k.jQuery){var ne=k.jQuery;ne.fn.parse=function(t){var e=t.config||{},r=[];return this.each(function(h){if(!(ne(this).prop("tagName").toUpperCase()==="INPUT"&&ne(this).attr("type").toLowerCase()==="file"&&k.FileReader)||!this.files||this.files.length===0)return!0;for(var d=0;d<this.files.length;d++)r.push({file:this.files[d],inputElem:this,instanceConfig:ne.extend({},e)})}),n(),this;function n(){if(r.length!==0){var h,d,T,b,a=r[0];if(p(t.before)){var C=t.before(a.file,a.inputElem);if(typeof C=="object"){if(C.action==="abort")return h="AbortError",d=a.file,T=a.inputElem,b=C.reason,void(p(t.error)&&t.error({name:h},d,T,b));if(C.action==="skip")return void s();typeof C.config=="object"&&(a.instanceConfig=ne.extend(a.instanceConfig,C.config))}else if(C==="skip")return void s()}var u=a.instanceConfig.complete;a.instanceConfig.complete=function(q){p(u)&&u(q,a.file,a.inputElem),s()},l.parse(a.file,a.instanceConfig)}else p(t.complete)&&t.complete()}function s(){r.splice(0,1),n()}}}function W(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var r=pe(e);r.chunkSize=parseInt(r.chunkSize),e.step||e.chunk||(r.chunkSize=null),this._handle=new ye(r),(this._handle.streamer=this)._config=r}.call(this,t),this.parseChunk=function(e,r){if(this.isFirstChunk&&p(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);n!==void 0&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var h=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var d=h.meta.cursor;this._finished||(this._partialLine=s.substring(d-this._baseIndex),this._baseIndex=d),h&&h.data&&(this._rowCount+=h.data.length);var T=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(ae)k.postMessage({results:h,workerId:l.WORKER_ID,finished:T});else if(p(this._config.chunk)&&!r){if(this._config.chunk(h,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);h=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(h.data),this._completeResults.errors=this._completeResults.errors.concat(h.errors),this._completeResults.meta=h.meta),this._completed||!T||!p(this._config.complete)||h&&h.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),T||h&&h.meta.paused||this._nextChunk(),h}this._halted=!0},this._sendError=function(e){p(this._config.error)?this._config.error(e):ae&&this._config.error&&k.postMessage({workerId:l.WORKER_ID,error:e,finished:!1})}}function oe(t){var e;(t=t||{}).chunkSize||(t.chunkSize=l.RemoteChunkSize),W.call(this,t),this._nextChunk=G?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(r){this._input=r,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),G||(e.onload=$(this._chunkLoaded,this),e.onerror=$(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!G),this._config.downloadRequestHeaders){var r=this._config.downloadRequestHeaders;for(var n in r)e.setRequestHeader(n,r[n])}if(this._config.chunkSize){var s=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+s)}try{e.send(this._config.downloadRequestBody)}catch(h){this._chunkError(h.message)}G&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(r){var n=r.getResponseHeader("Content-Range");return n===null?-1:parseInt(n.substring(n.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(r){var n=e.statusText||r;this._sendError(new Error(n))}}function ue(t){var e,r;(t=t||{}).chunkSize||(t.chunkSize=l.LocalChunkSize),W.call(this,t);var n=typeof FileReader<"u";this.stream=function(s){this._input=s,r=s.slice||s.webkitSlice||s.mozSlice,n?((e=new FileReader).onload=$(this._chunkLoaded,this),e.onerror=$(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var s=this._input;if(this._config.chunkSize){var h=Math.min(this._start+this._config.chunkSize,this._input.size);s=r.call(s,this._start,h)}var d=e.readAsText(s,this._config.encoding);n||this._chunkLoaded({target:{result:d}})},this._chunkLoaded=function(s){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(s.target.result)},this._chunkError=function(){this._sendError(e.error)}}function ie(t){var e;W.call(this,t=t||{}),this.stream=function(r){return e=r,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var r,n=this._config.chunkSize;return n?(r=e.substring(0,n),e=e.substring(n)):(r=e,e=""),this._finished=!e,this.parseChunk(r)}}}function he(t){W.call(this,t=t||{});var e=[],r=!0,n=!1;this.pause=function(){W.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){W.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(s){this._input=s,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):r=!0},this._streamData=$(function(s){try{e.push(typeof s=="string"?s:s.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(h){this._streamError(h)}},this),this._streamError=$(function(s){this._streamCleanUp(),this._sendError(s)},this),this._streamEnd=$(function(){this._streamCleanUp(),n=!0,this._streamData("")},this),this._streamCleanUp=$(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function ye(t){var e,r,n,s=Math.pow(2,53),h=-s,d=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,T=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,b=this,a=0,C=0,u=!1,q=!1,L=[],i={data:[],errors:[],meta:{}};if(p(t.step)){var m=t.step;t.step=function(o){if(i=o,I())E();else{if(E(),i.data.length===0)return;a+=o.data.length,t.preview&&a>t.preview?r.abort():(i.data=i.data[0],m(i,b))}}}function D(o){return t.skipEmptyLines==="greedy"?o.join("").trim()==="":o.length===1&&o[0].length===0}function E(){return i&&n&&(A("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),n=!1),t.skipEmptyLines&&(i.data=i.data.filter(function(o){return!D(o)})),I()&&function(){if(!i)return;function o(y,S){p(t.transformHeader)&&(y=t.transformHeader(y,S)),L.push(y)}if(Array.isArray(i.data[0])){for(var f=0;I()&&f<i.data.length;f++)i.data[f].forEach(o);i.data.splice(0,1)}else i.data.forEach(o)}(),function(){if(!i||!t.header&&!t.dynamicTyping&&!t.transform)return i;function o(y,S){var _,F=t.header?{}:[];for(_=0;_<y.length;_++){var R=_,g=y[_];t.header&&(R=_>=L.length?"__parsed_extra":L[_]),t.transform&&(g=t.transform(g,R)),g=O(R,g),R==="__parsed_extra"?(F[R]=F[R]||[],F[R].push(g)):F[R]=g}return t.header&&(_>L.length?A("FieldMismatch","TooManyFields","Too many fields: expected "+L.length+" fields but parsed "+_,C+S):_<L.length&&A("FieldMismatch","TooFewFields","Too few fields: expected "+L.length+" fields but parsed "+_,C+S)),F}var f=1;return!i.data.length||Array.isArray(i.data[0])?(i.data=i.data.map(o),f=i.data.length):i.data=o(i.data,0),t.header&&i.meta&&(i.meta.fields=L),C+=f,i}()}function I(){return t.header&&L.length===0}function O(o,f){return y=o,t.dynamicTypingFunction&&t.dynamicTyping[y]===void 0&&(t.dynamicTyping[y]=t.dynamicTypingFunction(y)),(t.dynamicTyping[y]||t.dynamicTyping)===!0?f==="true"||f==="TRUE"||f!=="false"&&f!=="FALSE"&&(function(S){if(d.test(S)){var _=parseFloat(S);if(h<_&&_<s)return!0}return!1}(f)?parseFloat(f):T.test(f)?new Date(f):f===""?null:f):f;var y}function A(o,f,y,S){var _={type:o,code:f,message:y};S!==void 0&&(_.row=S),i.errors.push(_)}this.parse=function(o,f,y){var S=t.quoteChar||'"';if(t.newline||(t.newline=function(R,g){R=R.substring(0,1048576);var Q=new RegExp(se(g)+"([^]*?)"+se(g),"gm"),U=(R=R.replace(Q,"")).split("\r"),B=R.split(`
`),K=1<B.length&&B[0].length<U[0].length;if(U.length===1||K)return`
`;for(var P=0,v=0;v<U.length;v++)U[v][0]===`
`&&P++;return P>=U.length/2?`\r
`:"\r"}(o,S)),n=!1,t.delimiter)p(t.delimiter)&&(t.delimiter=t.delimiter(o),i.meta.delimiter=t.delimiter);else{var _=function(R,g,Q,U,B){var K,P,v,x;B=B||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var V=0;V<B.length;V++){var c=B[V],te=0,j=0,ee=0;v=void 0;for(var J=new ce({comments:U,delimiter:c,newline:g,preview:10}).parse(R),X=0;X<J.data.length;X++)if(Q&&D(J.data[X]))ee++;else{var Y=J.data[X].length;j+=Y,v!==void 0?0<Y&&(te+=Math.abs(Y-v),v=Y):v=Y}0<J.data.length&&(j/=J.data.length-ee),(P===void 0||te<=P)&&(x===void 0||x<j)&&1.99<j&&(P=te,K=c,x=j)}return{successful:!!(t.delimiter=K),bestDelimiter:K}}(o,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);_.successful?t.delimiter=_.bestDelimiter:(n=!0,t.delimiter=l.DefaultDelimiter),i.meta.delimiter=t.delimiter}var F=pe(t);return t.preview&&t.header&&F.preview++,e=o,r=new ce(F),i=r.parse(e,f,y),E(),u?{meta:{paused:!0}}:i||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,r.abort(),e=p(t.chunk)?"":e.substring(r.getCharIndex())},this.resume=function(){b.streamer._halted?(u=!1,b.streamer.parseChunk(e,!0)):setTimeout(b.resume,3)},this.aborted=function(){return q},this.abort=function(){q=!0,r.abort(),i.meta.aborted=!0,p(t.complete)&&t.complete(i),e=""}}function se(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ce(t){var e,r=(t=t||{}).delimiter,n=t.newline,s=t.comments,h=t.step,d=t.preview,T=t.fastMode,b=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(b=t.escapeChar),(typeof r!="string"||-1<l.BAD_DELIMITERS.indexOf(r))&&(r=","),s===r)throw new Error("Comment character same as delimiter");s===!0?s="#":(typeof s!="string"||-1<l.BAD_DELIMITERS.indexOf(s))&&(s=!1),n!==`
`&&n!=="\r"&&n!==`\r
`&&(n=`
`);var a=0,C=!1;this.parse=function(u,q,L){if(typeof u!="string")throw new Error("Input must be a string");var i=u.length,m=r.length,D=n.length,E=s.length,I=p(h),O=[],A=[],o=[],f=a=0;if(!u)return z();if(t.header){var y=u.split(n)[0].split(r),S=[],_={},F=!1;for(var R in y){var g=y[R];p(t.transformHeader)&&(g=t.transformHeader(g,R));var Q=g,U=_[g]||0;0<U&&(F=!0,Q=g+"_"+U),_[g]=U+1,S.push(Q)}if(F){var B=u.split(n);B[0]=S.join(r),u=B.join(n)}}if(T||T!==!1&&u.indexOf(e)===-1){for(var K=u.split(n),P=0;P<K.length;P++){if(o=K[P],a+=o.length,P!==K.length-1)a+=n.length;else if(L)return z();if(!s||o.substring(0,E)!==s){if(I){if(O=[],ee(o.split(r)),le(),C)return z()}else ee(o.split(r));if(d&&d<=P)return O=O.slice(0,d),z(!0)}}return z()}for(var v=u.indexOf(r,a),x=u.indexOf(n,a),V=new RegExp(se(b)+se(e),"g"),c=u.indexOf(e,a);;)if(u[a]!==e)if(s&&o.length===0&&u.substring(a,a+E)===s){if(x===-1)return z();a=x+D,x=u.indexOf(n,a),v=u.indexOf(r,a)}else if(v!==-1&&(v<x||x===-1))o.push(u.substring(a,v)),a=v+m,v=u.indexOf(r,a);else{if(x===-1)break;if(o.push(u.substring(a,x)),Y(x+D),I&&(le(),C))return z();if(d&&O.length>=d)return z(!0)}else for(c=a,a++;;){if((c=u.indexOf(e,c+1))===-1)return L||A.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:O.length,index:a}),X();if(c===i-1)return X(u.substring(a,c).replace(V,e));if(e!==b||u[c+1]!==b){if(e===b||c===0||u[c-1]!==b){v!==-1&&v<c+1&&(v=u.indexOf(r,c+1)),x!==-1&&x<c+1&&(x=u.indexOf(n,c+1));var te=J(x===-1?v:Math.min(v,x));if(u.substr(c+1+te,m)===r){o.push(u.substring(a,c).replace(V,e)),u[a=c+1+te+m]!==e&&(c=u.indexOf(e,a)),v=u.indexOf(r,a),x=u.indexOf(n,a);break}var j=J(x);if(u.substring(c+1+j,c+1+j+D)===n){if(o.push(u.substring(a,c).replace(V,e)),Y(c+1+j+D),v=u.indexOf(r,a),c=u.indexOf(e,a),I&&(le(),C))return z();if(d&&O.length>=d)return z(!0);break}A.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:O.length,index:a}),c++}}else c++}return X();function ee(N){O.push(N),f=a}function J(N){var be=0;if(N!==-1){var _e=u.substring(c+1,N);_e&&_e.trim()===""&&(be=_e.length)}return be}function X(N){return L||(N===void 0&&(N=u.substring(a)),o.push(N),a=i,ee(o),I&&le()),z()}function Y(N){a=N,ee(o),o=[],x=u.indexOf(n,a)}function z(N){return{data:O,errors:A,meta:{delimiter:r,linebreak:n,aborted:C,truncated:!!N,cursor:f+(q||0)}}}function le(){h(z()),O=[],A=[]}},this.abort=function(){C=!0},this.getCharIndex=function(){return a}}function Ce(t){var e=t.data,r=M[e.workerId],n=!1;if(e.error)r.userError(e.error,e.file);else if(e.results&&e.results.data){var s={abort:function(){n=!0,ve(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:ke,resume:ke};if(p(r.userStep)){for(var h=0;h<e.results.data.length&&(r.userStep({data:e.results.data[h],errors:e.results.errors,meta:e.results.meta},s),!n);h++);delete e.results}else p(r.userChunk)&&(r.userChunk(e.results,s,e.file),delete e.results)}e.finished&&!n&&ve(e.workerId,e.results)}function ve(t,e){var r=M[t];p(r.userComplete)&&r.userComplete(e),r.terminate(),delete M[t]}function ke(){throw new Error("Not implemented.")}function pe(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var r in t)e[r]=pe(t[r]);return e}function $(t,e){return function(){t.apply(e,arguments)}}function p(t){return typeof t=="function"}return ae&&(k.onmessage=function(t){var e=t.data;if(l.WORKER_ID===void 0&&e&&(l.WORKER_ID=e.workerId),typeof e.input=="string")k.postMessage({workerId:l.WORKER_ID,results:l.parse(e.input,e.config),finished:!0});else if(k.File&&e.input instanceof File||e.input instanceof Object){var r=l.parse(e.input,e.config);r&&k.postMessage({workerId:l.WORKER_ID,results:r,finished:!0})}}),(oe.prototype=Object.create(W.prototype)).constructor=oe,(ue.prototype=Object.create(W.prototype)).constructor=ue,(ie.prototype=Object.create(ie.prototype)).constructor=ie,(he.prototype=Object.create(W.prototype)).constructor=he,l})})(Se);const Te={data(){return{playerList:[]}},mounted(){this.getPlayerStats()},methods:{async getPlayerStats(){await ge.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTCukHpB9YZ-z3unlA-hArkaWaSkeVXXFFD5cwC7WfandM6xN_tz6tYdN9TkKBwC1iA9540iS8F14PS/pub?gid=0&single=true&output=csv",{download:!0,header:!0,complete:Z=>{this.playerList=Z.data}})}}},Ie={class:"section table-container mt-6"},Le={class:"table is-hoverable is-fullwidth"},De=w("thead",null,[w("tr",null,[w("th",null,"Number"),w("th",null,"Player"),w("th",null,"Matches Played"),w("th",null,"Match W/L %"),w("th",null,"Rounds Played"),w("th",null,"Rounds W/L %"),w("th",null,"Flag Captures"),w("th",null,"Total Points"),w("th",null,"Match Score Average")])],-1);function Fe(Z,me,re,k,G,ae){return de(),fe("section",Ie,[w("table",Le,[De,w("tbody",null,[(de(!0),fe(Re,null,xe(G.playerList,M=>(de(),fe("tr",{key:M},[w("td",null,H(M.Number),1),w("td",null,H(M.Player),1),w("td",null,H(M["Matches Played"]),1),w("td",null,H(M["Match W/L %"]),1),w("td",null,H(M["Rounds Played"]),1),w("td",null,H(M["Rounds W/L %"]),1),w("td",null,H(M["Flag Captures"]),1),w("td",null,H(M["Total Points"]),1),w("td",null,H(M["Match Score Average"]),1)]))),128))])])])}const Me=Ee(Te,[["render",Fe]]),Pe={};function ze(Z,me){const re=Me;return de(),fe("section",null,[Oe(re)])}const Ue=Ee(Pe,[["render",ze]]);export{Ue as default};
