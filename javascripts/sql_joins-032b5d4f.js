(function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}};t=function(){function t(t){var n,r;this.sqlDetails=t,this._appCacheUpdated=e(this._appCacheUpdated,this),this._initAppcache=e(this._initAppcache,this),this._copyButtonInit=e(this._copyButtonInit,this),this._hightlightCode=e(this._hightlightCode,this),this._selectJoinInfo=e(this._selectJoinInfo,this),this._isSelectedCircle=e(this._isSelectedCircle,this),this._selectCircle=e(this._selectCircle,this),this._initSvgControl=e(this._initSvgControl,this),this._sqlJoinsData={"0.0.0":{sql:"",description:"Please select how do you want to do SQL JOIN between two table"},"1.0.0":{sql:"SELECT * FROM TableA A\nLEFT JOIN TableB B ON\nA.key = B.key WHERE B.key IS NULL",description:"To produce the set of records only in Table A, but not in Table B, we perform the left (outer) join, then exclude the records we don't want from the right side via a where clause"},"1.1.0":{sql:"SELECT * FROM TableA A\nLEFT JOIN TableB B ON\nA.key = B.key",description:"Left (outer) join produces a complete set of records from Table A, with the matching records (where available) in Table B. If there is no match, the right side will contain null"},"1.1.1":{sql:"SELECT * FROM TableA A\nFULL OUTER JOIN TableB B ON\nA.key = B.key",description:"Full outer join produces the set of all records in Table A and Table B, with matching records from both sides where available. If there is no match, the missing side will contain null"},"0.1.0":{sql:"SELECT * FROM TableA A\nINNER JOIN TableB B ON\nA.key = B.key",description:"Inner join produces only the set of records that match in both Table A and Table B"},"0.1.1":{sql:"SELECT * FROM TableA A\nRIGHT JOIN TableB B ON\nA.key = B.key",description:"Right (outer) join produces a complete set of records from Table B, with the matching records (where available) in Table A. If there is no match, the left side will contain null"},"0.0.1":{sql:"SELECT * FROM TableA A\nRIGHT JOIN TableB B ON\nA.key = B.key WHERE A.key IS NULL",description:"To produce the set of records only in Table B, but not in Table A, we perform the right (outer) join, then exclude the records we don't want from the right side via a where clause"},"1.0.1":{sql:"SELECT * FROM TableA A\nFULL OUTER JOIN TableB B ON\nA.key = B.key WHERE A.key IS NULL\nOR B.key IS NULL",description:"To produce the set of records unique to Table A and Table B, we perform the full outer join, then exclude the records we don't want from both sides via a where clause"}},this.leftCircle=Snap.select("#leftCircle"),this.intersectOfCircle=Snap.select("#intersectOfCircle"),this.rightCircle=Snap.select("#rightCircle"),this.copyButton=$("button#copyButton"),this._initSvgControl(),this._initAppcache(),this._copyButtonInit(),this._hightlightCode();try{$(document).foundation()}catch(r){n=r,null!=console.warn&&console.warn("Too old browser :(")}}return t.prototype._initSvgControl=function(){return this.leftCircle.click(function(t){return function(e){return t._selectCircle(t.leftCircle,0)}}(this)),Snap.select("#leftCircleText").click(function(t){return function(e){return t._selectCircle(t.leftCircle,0)}}(this)),this.intersectOfCircle.click(function(t){return function(e){return t._selectCircle(t.intersectOfCircle,1)}}(this)),this.rightCircle.click(function(t){return function(e){return t._selectCircle(t.rightCircle,2)}}(this)),Snap.select("#rightCircleText").click(function(t){return function(e){return t._selectCircle(t.rightCircle,2)}}(this))},t.prototype._selectCircle=function(t,e){var n,r,i,o,a,s;return null==e&&(e=0),i=this._isSelectedCircle(t),s=i?[{fill:"rgb(167, 82, 43)"},{fill:"rgb(140, 76, 47)"},{fill:"rgb(113, 70, 51)"},{fill:"rgb(86, 54, 55)"},{fill:"rgb(58, 58, 58)"}]:[{fill:"rgb(86, 54, 55)"},{fill:"rgb(113, 70, 51)"},{fill:"rgb(140, 76, 47)"},{fill:"rgb(167, 82, 43)"},{fill:"rgb(194, 88, 39)"}],(n=function(e){return function(e,r){return t.animate(e[r],50,function(){return r+=1,e.length>=r?n(e,r):void 0})}}(this))(s,0),a=function(){var t,n,a,s;for(a=[this.leftCircle,this.intersectOfCircle,this.rightCircle],s=[],r=t=0,n=a.length;n>t;r=++t)o=a[r],e===r?i?s.push("0"):s.push("1"):this._isSelectedCircle(o)?s.push("1"):s.push("0");return s}.call(this),this._selectJoinInfo(a.join("."))},t.prototype._isSelectedCircle=function(t){return Snap.getRGB(t.attr("fill")).hex===Snap.getRGB("rgb(194, 88, 39)").hex},t.prototype._selectJoinInfo=function(t){var e;return e=this._sqlJoinsData[t],null!=e?(this.sqlDetails.find(".sql_description").text(e.description),this.sqlDetails.find(".sql_info").text(e.sql),e.sql.length?this.copyButton.removeClass("disabled"):this.copyButton.addClass("disabled"),this._hightlightCode()):void 0},t.prototype._hightlightCode=function(){return this.sqlDetails.find(".sql_info").each(function(t,e){return $(e).removeClass("hljs"),hljs.highlightBlock(e)})},t.prototype._copyButtonInit=function(){var t;return ZeroClipboard.config({swfPath:this.sqlDetails.data("copy-swf")}),t=new ZeroClipboard(this.copyButton),t.on("ready",function(e){return function(n){return t.on("aftercopy",function(t){return e.copyButton.hasClass("disabled")?void 0:(e.copyButton.addClass("copied").text("Copied!"),setTimeout(function(){return e.copyButton.removeClass("copied").text("Copy SQL")},1e3))})}}(this)),t.on("error",function(t){return function(t){return console.warn("Clipy error: "+t)}}(this))},t.prototype._initAppcache=function(){return Modernizr.applicationcache===!0?window.applicationCache.addEventListener("updateready",this._appCacheUpdated,!1):void 0},t.prototype._appCacheUpdated=function(t){return window.applicationCache.status===window.applicationCache.UPDATEREADY&&confirm("A new version of this app is available. Load it?")?window.location.reload():void 0},t}(),$(function(){return $("#sqlJoinsInformation").length?new t($("#sqlJoinsInformation")):void 0})}).call(this);