import{_ as be,c as he,o as le,a as S,F as Re,k as Se,t as H,b as Ce}from"./D6okcrTg.js";var de={exports:{}};/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/var xe=de.exports,ve;function Oe(){return ve||(ve=1,function(V,ie){((G,b)=>{V.exports=b()})(xe,function G(){var b=typeof self<"u"?self:typeof window<"u"?window:b!==void 0?b:{},J,X=!b.document&&!!b.postMessage,F=b.IS_PAPA_WORKER||!1,se={},we=0,u={};function W(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(t){var r=ce(t);r.chunkSize=parseInt(r.chunkSize),t.step||t.chunk||(r.chunkSize=null),this._handle=new _e(r),(this._handle.streamer=this)._config=r}).call(this,e),this.parseChunk=function(t,r){var i=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<i){let d=this._config.newline;d||(n=this._config.quoteChar||'"',d=this._handle.guessLineEndings(t,n)),t=[...t.split(d).slice(i)].join(d)}this.isFirstChunk&&y(this._config.beforeFirstChunk)&&(n=this._config.beforeFirstChunk(t))!==void 0&&(t=n),this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+t,n=(this._partialLine="",this._handle.parse(i,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(t=n.meta.cursor,i=(this._finished||(this._partialLine=i.substring(t-this._baseIndex),this._baseIndex=t),n&&n.data&&(this._rowCount+=n.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),F)b.postMessage({results:n,workerId:u.WORKER_ID,finished:i});else if(y(this._config.chunk)&&!r){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=n=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!i||!y(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),i||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(t){y(this._config.error)?this._config.error(t):F&&this._config.error&&b.postMessage({workerId:u.WORKER_ID,error:t,finished:!1})}}function ae(e){var t;(e=e||{}).chunkSize||(e.chunkSize=u.RemoteChunkSize),W.call(this,e),this._nextChunk=X?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(r){this._input=r,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),X||(t.onload=$(this._chunkLoaded,this),t.onerror=$(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!X),this._config.downloadRequestHeaders){var r,i=this._config.downloadRequestHeaders;for(r in i)t.setRequestHeader(r,i[r])}var n;this._config.chunkSize&&(n=this._start+this._config.chunkSize-1,t.setRequestHeader("Range","bytes="+this._start+"-"+n));try{t.send(this._config.downloadRequestBody)}catch(d){this._chunkError(d.message)}X&&t.status===0&&this._chunkError()}},this._chunkLoaded=function(){t.readyState===4&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(r=>(r=r.getResponseHeader("Content-Range"))!==null?parseInt(r.substring(r.lastIndexOf("/")+1)):-1)(t),this.parseChunk(t.responseText)))},this._chunkError=function(r){r=t.statusText||r,this._sendError(new Error(r))}}function oe(e){(e=e||{}).chunkSize||(e.chunkSize=u.LocalChunkSize),W.call(this,e);var t,r,i=typeof FileReader<"u";this.stream=function(n){this._input=n,r=n.slice||n.webkitSlice||n.mozSlice,i?((t=new FileReader).onload=$(this._chunkLoaded,this),t.onerror=$(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var n=this._input,d=(this._config.chunkSize&&(d=Math.min(this._start+this._config.chunkSize,this._input.size),n=r.call(n,this._start,d)),t.readAsText(n,this._config.encoding));i||this._chunkLoaded({target:{result:d}})},this._chunkLoaded=function(n){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(n.target.result)},this._chunkError=function(){this._sendError(t.error)}}function ee(e){var t;W.call(this,e=e||{}),this.stream=function(r){return t=r,this._nextChunk()},this._nextChunk=function(){var r,i;if(!this._finished)return r=this._config.chunkSize,t=r?(i=t.substring(0,r),t.substring(r)):(i=t,""),this._finished=!t,this.parseChunk(i)}}function ue(e){W.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){W.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){W.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(n){this._input=n,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&t.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=$(function(n){try{t.push(typeof n=="string"?n:n.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(d){this._streamError(d)}},this),this._streamError=$(function(n){this._streamCleanUp(),this._sendError(n)},this),this._streamEnd=$(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=$(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function _e(e){var t,r,i,n,d=Math.pow(2,53),x=-d,M=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,z=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,f=this,w=0,a=0,T=!1,h=!1,c=[],s={data:[],errors:[],meta:{}};function O(p){return e.skipEmptyLines==="greedy"?p.join("").trim()==="":p.length===1&&p[0].length===0}function C(){if(s&&i&&(j("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines&&(s.data=s.data.filter(function(o){return!O(o)})),I()){let o=function(R,A){y(e.transformHeader)&&(R=e.transformHeader(R,A)),c.push(R)};if(s)if(Array.isArray(s.data[0])){for(var p=0;I()&&p<s.data.length;p++)s.data[p].forEach(o);s.data.splice(0,1)}else s.data.forEach(o)}function g(o,R){for(var A=e.header?{}:[],m=0;m<o.length;m++){var k=m,_=o[m],_=((N,l)=>(v=>(e.dynamicTypingFunction&&e.dynamicTyping[v]===void 0&&(e.dynamicTyping[v]=e.dynamicTypingFunction(v)),(e.dynamicTyping[v]||e.dynamicTyping)===!0))(N)?l==="true"||l==="TRUE"||l!=="false"&&l!=="FALSE"&&((v=>{if(M.test(v)&&(v=parseFloat(v),x<v&&v<d))return 1})(l)?parseFloat(l):z.test(l)?new Date(l):l===""?null:l):l)(k=e.header?m>=c.length?"__parsed_extra":c[m]:k,_=e.transform?e.transform(_,k):_);k==="__parsed_extra"?(A[k]=A[k]||[],A[k].push(_)):A[k]=_}return e.header&&(m>c.length?j("FieldMismatch","TooManyFields","Too many fields: expected "+c.length+" fields but parsed "+m,a+R):m<c.length&&j("FieldMismatch","TooFewFields","Too few fields: expected "+c.length+" fields but parsed "+m,a+R)),A}var E;s&&(e.header||e.dynamicTyping||e.transform)&&(E=1,!s.data.length||Array.isArray(s.data[0])?(s.data=s.data.map(g),E=s.data.length):s.data=g(s.data,0),e.header&&s.meta&&(s.meta.fields=c),a+=E)}function I(){return e.header&&c.length===0}function j(p,g,E,o){p={type:p,code:g,message:E},o!==void 0&&(p.row=o),s.errors.push(p)}y(e.step)&&(n=e.step,e.step=function(p){s=p,I()?C():(C(),s.data.length!==0&&(w+=p.data.length,e.preview&&w>e.preview?r.abort():(s.data=s.data[0],n(s,f))))}),this.parse=function(p,g,E){var o=e.quoteChar||'"',o=(e.newline||(e.newline=this.guessLineEndings(p,o)),i=!1,e.delimiter?y(e.delimiter)&&(e.delimiter=e.delimiter(p),s.meta.delimiter=e.delimiter):((o=((R,A,m,k,_)=>{var N,l,v,Q;_=_||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var Y=0;Y<_.length;Y++){for(var U,re=_[Y],D=0,q=0,L=0,P=(v=void 0,new fe({comments:k,delimiter:re,newline:A,preview:10}).parse(R)),K=0;K<P.data.length;K++)m&&O(P.data[K])?L++:(U=P.data[K].length,q+=U,v===void 0?v=U:0<U&&(D+=Math.abs(U-v),v=U));0<P.data.length&&(q/=P.data.length-L),(l===void 0||D<=l)&&(Q===void 0||Q<q)&&1.99<q&&(l=D,N=re,Q=q)}return{successful:!!(e.delimiter=N),bestDelimiter:N}})(p,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=o.bestDelimiter:(i=!0,e.delimiter=u.DefaultDelimiter),s.meta.delimiter=e.delimiter),ce(e));return e.preview&&e.header&&o.preview++,t=p,r=new fe(o),s=r.parse(t,g,E),C(),T?{meta:{paused:!0}}:s||{meta:{paused:!1}}},this.paused=function(){return T},this.pause=function(){T=!0,r.abort(),t=y(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){f.streamer._halted?(T=!1,f.streamer.parseChunk(t,!0)):setTimeout(f.resume,3)},this.aborted=function(){return h},this.abort=function(){h=!0,r.abort(),s.meta.aborted=!0,y(e.complete)&&e.complete(s),t=""},this.guessLineEndings=function(R,o){R=R.substring(0,1048576);var o=new RegExp(te(o)+"([^]*?)"+te(o),"gm"),E=(R=R.replace(o,"")).split("\r"),o=R.split(`
`),R=1<o.length&&o[0].length<E[0].length;if(E.length===1||R)return`
`;for(var A=0,m=0;m<E.length;m++)E[m][0]===`
`&&A++;return A>=E.length/2?`\r
`:"\r"}}function te(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function fe(e){var t=(e=e||{}).delimiter,r=e.newline,i=e.comments,n=e.step,d=e.preview,x=e.fastMode,M=null,z=!1,f=e.quoteChar==null?'"':e.quoteChar,w=f;if(e.escapeChar!==void 0&&(w=e.escapeChar),(typeof t!="string"||-1<u.BAD_DELIMITERS.indexOf(t))&&(t=","),i===t)throw new Error("Comment character same as delimiter");i===!0?i="#":(typeof i!="string"||-1<u.BAD_DELIMITERS.indexOf(i))&&(i=!1),r!==`
`&&r!=="\r"&&r!==`\r
`&&(r=`
`);var a=0,T=!1;this.parse=function(h,c,s){if(typeof h!="string")throw new Error("Input must be a string");var O=h.length,C=t.length,I=r.length,j=i.length,p=y(n),g=[],E=[],o=[],R=a=0;if(!h)return D();if(x||x!==!1&&h.indexOf(f)===-1){for(var A=h.split(r),m=0;m<A.length;m++){if(o=A[m],a+=o.length,m!==A.length-1)a+=r.length;else if(s)return D();if(!i||o.substring(0,j)!==i){if(p){if(g=[],Q(o.split(t)),q(),T)return D()}else Q(o.split(t));if(d&&d<=m)return g=g.slice(0,d),D(!0)}}return D()}for(var k=h.indexOf(t,a),_=h.indexOf(r,a),N=new RegExp(te(w)+te(f),"g"),l=h.indexOf(f,a);;)if(h[a]===f)for(l=a,a++;;){if((l=h.indexOf(f,l+1))===-1)return s||E.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:g.length,index:a}),U();if(l===O-1)return U(h.substring(a,l).replace(N,f));if(f===w&&h[l+1]===w)l++;else if(f===w||l===0||h[l-1]!==w){k!==-1&&k<l+1&&(k=h.indexOf(t,l+1));var v=Y((_=_!==-1&&_<l+1?h.indexOf(r,l+1):_)===-1?k:Math.min(k,_));if(h.substr(l+1+v,C)===t){o.push(h.substring(a,l).replace(N,f)),h[a=l+1+v+C]!==f&&(l=h.indexOf(f,a)),k=h.indexOf(t,a),_=h.indexOf(r,a);break}if(v=Y(_),h.substring(l+1+v,l+1+v+I)===r){if(o.push(h.substring(a,l).replace(N,f)),re(l+1+v+I),k=h.indexOf(t,a),l=h.indexOf(f,a),p&&(q(),T))return D();if(d&&g.length>=d)return D(!0);break}E.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:g.length,index:a}),l++}}else if(i&&o.length===0&&h.substring(a,a+j)===i){if(_===-1)return D();a=_+I,_=h.indexOf(r,a),k=h.indexOf(t,a)}else if(k!==-1&&(k<_||_===-1))o.push(h.substring(a,k)),a=k+C,k=h.indexOf(t,a);else{if(_===-1)break;if(o.push(h.substring(a,_)),re(_+I),p&&(q(),T))return D();if(d&&g.length>=d)return D(!0)}return U();function Q(L){g.push(L),R=a}function Y(L){var P=0;return P=L!==-1&&(L=h.substring(l+1,L))&&L.trim()===""?L.length:P}function U(L){return s||(L===void 0&&(L=h.substring(a)),o.push(L),a=O,Q(o),p&&q()),D()}function re(L){a=L,Q(o),o=[],_=h.indexOf(r,a)}function D(L){if(e.header&&!c&&g.length&&!z){var P=g[0],K={},pe=new Set(P);let ye=!1;for(let Z=0;Z<P.length;Z++){let B=P[Z];if(K[B=y(e.transformHeader)?e.transformHeader(B,Z):B]){let ne,ke=K[B];for(;ne=B+"_"+ke,ke++,pe.has(ne););pe.add(ne),P[Z]=ne,K[B]++,ye=!0,(M=M===null?{}:M)[ne]=B}else K[B]=1,P[Z]=B;pe.add(B)}ye&&console.warn("Duplicate headers found and renamed."),z=!0}return{data:g,errors:E,meta:{delimiter:t,linebreak:r,aborted:T,truncated:!!L,cursor:R+(c||0),renamedHeaders:M}}}function q(){n(D()),g=[],E=[]}},this.abort=function(){T=!0},this.getCharIndex=function(){return a}}function Ee(e){var t=e.data,r=se[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,ge(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:me,resume:me};if(y(r.userStep)){for(var d=0;d<t.results.data.length&&(r.userStep({data:t.results.data[d],errors:t.results.errors,meta:t.results.meta},n),!i);d++);delete t.results}else y(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&ge(t.workerId,t.results)}function ge(e,t){var r=se[e];y(r.userComplete)&&r.userComplete(t),r.terminate(),delete se[e]}function me(){throw new Error("Not implemented.")}function ce(e){if(typeof e!="object"||e===null)return e;var t,r=Array.isArray(e)?[]:{};for(t in e)r[t]=ce(e[t]);return r}function $(e,t){return function(){e.apply(t,arguments)}}function y(e){return typeof e=="function"}return u.parse=function(e,t){var r=(t=t||{}).dynamicTyping||!1;if(y(r)&&(t.dynamicTypingFunction=r,r={}),t.dynamicTyping=r,t.transform=!!y(t.transform)&&t.transform,!t.worker||!u.WORKERS_SUPPORTED)return r=null,u.NODE_STREAM_INPUT,typeof e=="string"?(e=(i=>i.charCodeAt(0)!==65279?i:i.slice(1))(e),r=new(t.download?ae:ee)(t)):e.readable===!0&&y(e.read)&&y(e.on)?r=new ue(t):(b.File&&e instanceof File||e instanceof Object)&&(r=new oe(t)),r.stream(e);(r=(()=>{var i;return!!u.WORKERS_SUPPORTED&&(i=(()=>{var n=b.URL||b.webkitURL||null,d=G.toString();return u.BLOB_URL||(u.BLOB_URL=n.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",d,")();"],{type:"text/javascript"})))})(),(i=new b.Worker(i)).onmessage=Ee,i.id=we++,se[i.id]=i)})()).userStep=t.step,r.userChunk=t.chunk,r.userComplete=t.complete,r.userError=t.error,t.step=y(t.step),t.chunk=y(t.chunk),t.complete=y(t.complete),t.error=y(t.error),delete t.worker,r.postMessage({input:e,config:t,workerId:r.id})},u.unparse=function(e,t){var r=!1,i=!0,n=",",d=`\r
`,x='"',M=x+x,z=!1,f=null,w=!1,a=((()=>{if(typeof t=="object"){if(typeof t.delimiter!="string"||u.BAD_DELIMITERS.filter(function(c){return t.delimiter.indexOf(c)!==-1}).length||(n=t.delimiter),typeof t.quotes!="boolean"&&typeof t.quotes!="function"&&!Array.isArray(t.quotes)||(r=t.quotes),typeof t.skipEmptyLines!="boolean"&&typeof t.skipEmptyLines!="string"||(z=t.skipEmptyLines),typeof t.newline=="string"&&(d=t.newline),typeof t.quoteChar=="string"&&(x=t.quoteChar),typeof t.header=="boolean"&&(i=t.header),Array.isArray(t.columns)){if(t.columns.length===0)throw new Error("Option columns is empty");f=t.columns}t.escapeChar!==void 0&&(M=t.escapeChar+x),t.escapeFormulae instanceof RegExp?w=t.escapeFormulae:typeof t.escapeFormulae=="boolean"&&t.escapeFormulae&&(w=/^[=+\-@\t\r].*$/)}})(),new RegExp(te(x),"g"));if(typeof e=="string"&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return T(null,e,z);if(typeof e[0]=="object")return T(f||Object.keys(e[0]),e,z)}else if(typeof e=="object")return typeof e.data=="string"&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||f),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:typeof e.data[0]=="object"?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||typeof e.data[0]=="object"||(e.data=[e.data])),T(e.fields||[],e.data||[],z);throw new Error("Unable to serialize unrecognized input");function T(c,s,O){var C="",I=(typeof c=="string"&&(c=JSON.parse(c)),typeof s=="string"&&(s=JSON.parse(s)),Array.isArray(c)&&0<c.length),j=!Array.isArray(s[0]);if(I&&i){for(var p=0;p<c.length;p++)0<p&&(C+=n),C+=h(c[p],p);0<s.length&&(C+=d)}for(var g=0;g<s.length;g++){var E=(I?c:s[g]).length,o=!1,R=I?Object.keys(s[g]).length===0:s[g].length===0;if(O&&!I&&(o=O==="greedy"?s[g].join("").trim()==="":s[g].length===1&&s[g][0].length===0),O==="greedy"&&I){for(var A=[],m=0;m<E;m++){var k=j?c[m]:m;A.push(s[g][k])}o=A.join("").trim()===""}if(!o){for(var _=0;_<E;_++){0<_&&!R&&(C+=n);var N=I&&j?c[_]:_;C+=h(s[g][N],_)}g<s.length-1&&(!O||0<E&&!R)&&(C+=d)}}return C}function h(c,s){var O,C;return c==null?"":c.constructor===Date?JSON.stringify(c).slice(1,25):(C=!1,w&&typeof c=="string"&&w.test(c)&&(c="'"+c,C=!0),O=c.toString().replace(a,M),(C=C||r===!0||typeof r=="function"&&r(c,s)||Array.isArray(r)&&r[s]||((I,j)=>{for(var p=0;p<j.length;p++)if(-1<I.indexOf(j[p]))return!0;return!1})(O,u.BAD_DELIMITERS)||-1<O.indexOf(n)||O.charAt(0)===" "||O.charAt(O.length-1)===" ")?x+O+x:O)}},u.RECORD_SEP="",u.UNIT_SEP="",u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!X&&!!b.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=fe,u.ParserHandle=_e,u.NetworkStreamer=ae,u.FileStreamer=oe,u.StringStreamer=ee,u.ReadableStreamStreamer=ue,b.jQuery&&((J=b.jQuery).fn.parse=function(e){var t=e.config||{},r=[];return this.each(function(d){if(!(J(this).prop("tagName").toUpperCase()==="INPUT"&&J(this).attr("type").toLowerCase()==="file"&&b.FileReader)||!this.files||this.files.length===0)return!0;for(var x=0;x<this.files.length;x++)r.push({file:this.files[x],inputElem:this,instanceConfig:J.extend({},t)})}),i(),this;function i(){if(r.length===0)y(e.complete)&&e.complete();else{var d,x,M,z,f=r[0];if(y(e.before)){var w=e.before(f.file,f.inputElem);if(typeof w=="object"){if(w.action==="abort")return d="AbortError",x=f.file,M=f.inputElem,z=w.reason,void(y(e.error)&&e.error({name:d},x,M,z));if(w.action==="skip")return void n();typeof w.config=="object"&&(f.instanceConfig=J.extend(f.instanceConfig,w.config))}else if(w==="skip")return void n()}var a=f.instanceConfig.complete;f.instanceConfig.complete=function(T){y(a)&&a(T,f.file,f.inputElem),n()},u.parse(f.file,f.instanceConfig)}}function n(){r.splice(0,1),i()}}),F&&(b.onmessage=function(e){e=e.data,u.WORKER_ID===void 0&&e&&(u.WORKER_ID=e.workerId),typeof e.input=="string"?b.postMessage({workerId:u.WORKER_ID,results:u.parse(e.input,e.config),finished:!0}):(b.File&&e.input instanceof File||e.input instanceof Object)&&(e=u.parse(e.input,e.config))&&b.postMessage({workerId:u.WORKER_ID,results:e,finished:!0})}),(ae.prototype=Object.create(W.prototype)).constructor=ae,(oe.prototype=Object.create(W.prototype)).constructor=oe,(ee.prototype=Object.create(ee.prototype)).constructor=ee,(ue.prototype=Object.create(W.prototype)).constructor=ue,u})}(de)),de.exports}var Ae=Oe();const Le={data(){return{playerList:[]}},mounted(){this.getPlayerStats()},methods:{async getPlayerStats(){await Ae.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTCukHpB9YZ-z3unlA-hArkaWaSkeVXXFFD5cwC7WfandM6xN_tz6tYdN9TkKBwC1iA9540iS8F14PS/pub?gid=0&single=true&output=csv",{download:!0,header:!0,complete:V=>{this.playerList=V.data}})}}},Ie={class:"section table-container has-bg-img"},Te={class:"table is-hoverable is-fullwidth"};function De(V,ie,G,b,J,X){return le(),he("section",Ie,[S("table",Te,[ie[0]||(ie[0]=S("thead",null,[S("tr",null,[S("th",null,"Number"),S("th",null,"Player"),S("th",null,"Matches Played"),S("th",null,"Match W/L %"),S("th",null,"Rounds Played"),S("th",null,"Rounds W/L %"),S("th",null,"Flag Captures"),S("th",null,"Total Points"),S("th",null,"Match Score Average")])],-1)),S("tbody",null,[(le(!0),he(Re,null,Se(J.playerList,F=>(le(),he("tr",{key:F},[S("td",null,H(F.Number),1),S("td",null,H(F.Player),1),S("td",null,H(F["Matches Played"]),1),S("td",null,H(F["Match W/L %"]),1),S("td",null,H(F["Rounds Played"]),1),S("td",null,H(F["Rounds W/L %"]),1),S("td",null,H(F["Flag Captures"]),1),S("td",null,H(F["Total Points"]),1),S("td",null,H(F["Match Score Average"]),1)]))),128))])])])}const Fe=be(Le,[["render",De],["__scopeId","data-v-653d1b3f"]]),Pe={};function Me(V,ie){const G=Fe;return le(),he("section",null,[Ce(G)])}const je=be(Pe,[["render",Me]]);export{je as default};
