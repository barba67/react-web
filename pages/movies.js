webpackJsonp([1],{0:function(e,t,r){"use strict";var n=r(1),i=n.AppRegistry,o=n.Navigator,a=n.StyleSheet,s=n.Platform,l=n.View,c=r(336),u=r(340),d=function(e,t,r){return"search"===e.name?n.createElement(u,{navigator:t}):"movie"===e.name?n.createElement(l,{style:{flex:1}},n.createElement(c,{style:{flex:1},navigator:t,movie:e.movie})):void 0},h=n.createClass({displayName:"MoviesApp",render:function(){var e={name:"search"};return n.createElement(o,{style:f.container,initialRoute:e,renderScene:d})}}),f=a.create({container:{flex:1,backgroundColor:"white"}});if(i.registerComponent("MoviesApp",function(){return h}),"web"==s.OS){var p=document.createElement("div");document.body.appendChild(p),i.runApplication("MoviesApp",{rootTag:p})}e.exports=h},336:function(e,t,r){"use strict";var n=r(1),i=n.Image,o=n.PixelRatio,a=n.ScrollView,s=n.StyleSheet,l=n.Text,c=n.View,u=r(337),d=r(338),h=r(339),f=n.createClass({displayName:"MovieScreen",render:function(){return n.createElement(a,{contentContainerStyle:y.contentContainer},n.createElement(c,{style:y.mainSection},n.createElement(i,{source:u(this.props.movie,"det"),style:y.detailsImage}),n.createElement(c,{style:y.rightPane},n.createElement(l,{style:y.movieTitle},this.props.movie.title),n.createElement(l,null,this.props.movie.year),n.createElement(c,{style:y.mpaaWrapper},n.createElement(l,{style:y.mpaaText},this.props.movie.mpaa_rating)),n.createElement(p,{ratings:this.props.movie.ratings}))),n.createElement(c,{style:y.separator}),n.createElement(l,null,this.props.movie.synopsis),n.createElement(c,{style:y.separator}),n.createElement(m,{actors:this.props.movie.abridged_cast}))}}),p=n.createClass({displayName:"Ratings",render:function(){var e=this.props.ratings.critics_score,t=this.props.ratings.audience_score;return n.createElement(c,null,n.createElement(c,{style:y.rating},n.createElement(l,{style:y.ratingTitle},"Critics:"),n.createElement(l,{style:[y.ratingValue,d(e)]},h(e))),n.createElement(c,{style:y.rating},n.createElement(l,{style:y.ratingTitle},"Audience:"),n.createElement(l,{style:[y.ratingValue,d(t)]},h(t))))}}),m=n.createClass({displayName:"Cast",render:function(){return this.props.actors?n.createElement(c,null,n.createElement(l,{style:y.castTitle},"Actors"),this.props.actors.map(function(e){return n.createElement(l,{key:e.name,style:y.castActor},"• ",e.name)})):null}}),y=s.create({contentContainer:{padding:10},rightPane:{justifyContent:"space-between",flex:1},movieTitle:{flex:1,fontSize:16,fontWeight:"500"},rating:{marginTop:10},ratingTitle:{fontSize:14},ratingValue:{fontSize:28,fontWeight:"500"},mpaaWrapper:{alignSelf:"flex-start",borderColor:"black",borderWidth:1,paddingHorizontal:3,marginVertical:5},mpaaText:{fontFamily:"Palatino",fontSize:13,fontWeight:"500"},mainSection:{flexDirection:"row"},detailsImage:{width:134,height:200,backgroundColor:"#eaeaea",marginRight:10},separator:{backgroundColor:"rgba(0, 0, 0, 0.1)",height:1/o.get(),marginVertical:10},castTitle:{fontWeight:"500",marginBottom:3},castActor:{marginLeft:2}});e.exports=f},337:function(e,t,r){"use strict";function n(e,t){var r=e&&e.posters?e.posters.thumbnail:null;return r&&t&&(r=r.replace("tmb",t)),{uri:r}}e.exports=n},338:function(e,t,r){"use strict";function n(e){if(0>e)return s.noScore;var t=Math.round(e/100*a);return{color:"rgb("+(a-t)+", "+t+", 0)"}}var i=r(1),o=i.StyleSheet,a=200,s=o.create({noScore:{color:"#999999"}});e.exports=n},339:function(e,t,r){"use strict";function n(e){return e>0?e+"%":"N/A"}e.exports=n},340:function(e,t,r){"use strict";var n=r(1),i=n.ActivityIndicatorIOS,o=n.ListView,a=n.Platform,s=n.ProgressBarAndroid,l=n.StyleSheet,c=n.Text,u=n.View,d=r(257),h=r("web"===a.OS?341:342),f=r(231),p=r(324),m=r(343),y=r(336),g=r(344),v="http://api.rottentomatoes.com/api/public/v1.0/",b=["7waqfqbprs7pajbz28mqf6vz"],w={dataForQuery:{},nextPageNumberForQuery:{},totalForQuery:{}},E={},S=n.createClass({displayName:"SearchScreen",mixins:[d],timeoutID:null,getInitialState:function(){return{isLoading:!1,isLoadingTail:!1,dataSource:new o.DataSource({rowHasChanged:function(e,t){return e!==t}}),filter:"",queryNumber:0}},componentDidMount:function(){this.searchMovies("")},_urlForQueryAndPage:function(e,t){var r=b[this.state.queryNumber%b.length];return e?v+"movies.json?apikey="+r+"&q="+encodeURIComponent(e)+"&page_limit=20&page="+t:v+"lists/movies/in_theaters.json?apikey="+r+"&page_limit=20&page="+t},searchMovies:function(e){var t=this;this.timeoutID=null,this.setState({filter:e});var r=w.dataForQuery[e];return r?void(E[e]?this.setState({isLoading:!0}):this.setState({dataSource:this.getDataSource(r),isLoading:!1})):(E[e]=!0,w.dataForQuery[e]=null,this.setState({isLoading:!0,queryNumber:this.state.queryNumber+1,isLoadingTail:!1}),void h(this._urlForQueryAndPage(e,1)).then(function(e){return e.json()})["catch"](function(r){E[e]=!1,w.dataForQuery[e]=void 0,t.setState({dataSource:t.getDataSource([]),isLoading:!1})}).then(function(r){E[e]=!1,w.totalForQuery[e]=r.total,w.dataForQuery[e]=r.movies,w.nextPageNumberForQuery[e]=2,t.state.filter===e&&t.setState({isLoading:!1,dataSource:t.getDataSource(r.movies)})}).done())},hasMore:function(){var e=this.state.filter;return w.dataForQuery[e]?w.totalForQuery[e]!==w.dataForQuery[e].length:!0},onEndReached:function(){var e=this,t=this.state.filter;if(this.hasMore()&&!this.state.isLoadingTail&&!E[t]){E[t]=!0,this.setState({queryNumber:this.state.queryNumber+1,isLoadingTail:!0});var r=w.nextPageNumberForQuery[t];f(null!=r,'Next page number for "%s" is missing',t),h(this._urlForQueryAndPage(t,r)).then(function(e){return e.json()})["catch"](function(r){console.error(r),E[t]=!1,e.setState({isLoadingTail:!1})}).then(function(r){var n=w.dataForQuery[t].slice();if(E[t]=!1,r.movies){for(var i in r.movies)n.push(r.movies[i]);w.dataForQuery[t]=n,w.nextPageNumberForQuery[t]+=1}else w.totalForQuery[t]=n.length;e.state.filter===t&&e.setState({isLoadingTail:!1,dataSource:e.getDataSource(w.dataForQuery[t])})}).done()}},getDataSource:function(e){return this.state.dataSource.cloneWithRows(e)},selectMovie:function(e){"ios"===a.OS?this.props.navigator.push({title:e.title,component:y,passProps:{movie:e}}):(p(),this.props.navigator.push({title:e.title,name:"movie",movie:e}))},onSearchChange:function(e){var t=this,r=e.nativeEvent.text.toLowerCase();this.clearTimeout(this.timeoutID),this.timeoutID=this.setTimeout(function(){return t.searchMovies(r)},100)},renderFooter:function(){return this.hasMore()&&this.state.isLoadingTail?"ios"===a.OS?n.createElement(i,{style:x.scrollSpinner}):"web"===a.OS?n.createElement(u,{style:{alignItems:"center"}},n.createElement(i,{style:x.scrollSpinner})):n.createElement(u,{style:{alignItems:"center"}},n.createElement(s,{styleAttr:"Large"})):n.createElement(u,{style:x.scrollSpinner})},renderSeparator:function(e,t,r){var i=x.rowSeparator;return r&&(i=[i,x.rowSeparatorHide]),n.createElement(u,{key:"SEP_"+e+"_"+t,style:i})},renderRow:function(e,t,r,i){var o=this;return n.createElement(m,{key:e.id,onSelect:function(){return o.selectMovie(e)},onHighlight:function(){return i(t,r)},onUnhighlight:function(){return i(null,null)},movie:e})},render:function(){var e=this,t=0===this.state.dataSource.getRowCount()?n.createElement(T,{filter:this.state.filter,isLoading:this.state.isLoading}):n.createElement(o,{ref:"listview",renderSeparator:this.renderSeparator,dataSource:this.state.dataSource,renderFooter:this.renderFooter,renderRow:this.renderRow,onEndReached:this.onEndReached,automaticallyAdjustContentInsets:!1,keyboardDismissMode:"on-drag",keyboardShouldPersistTaps:!0,showsVerticalScrollIndicator:!1});return n.createElement(u,{style:x.container},n.createElement(g,{onSearchChange:this.onSearchChange,isLoading:this.state.isLoading,onFocus:function(){return e.refs.listview&&e.refs.listview.getScrollResponder().scrollTo(0,0)}}),n.createElement(u,{style:x.separator}),t)}}),T=n.createClass({displayName:"NoMovies",render:function(){var e="";return this.props.filter?e='No results for "'+this.props.filter+'"':this.props.isLoading||(e="No movies found"),n.createElement(u,{style:[x.container,x.centerText]},n.createElement(c,{style:x.noMoviesText},e))}}),x=l.create({container:{flex:1,backgroundColor:"white"},centerText:{alignItems:"center"},noMoviesText:{marginTop:80,color:"#888888"},separator:{height:1,backgroundColor:"#eeeeee"},scrollSpinner:{marginVertical:20},rowSeparator:{backgroundColor:"rgba(0, 0, 0, 0.1)",height:1,marginLeft:4},rowSeparatorHide:{opacity:0}});e.exports=S},341:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function o(e){try{delete window[e]}catch(t){window[e]=void 0}}function a(e){var t=document.getElementById(e);document.getElementsByTagName("head")[0].removeChild(t)}Object.defineProperty(t,"__esModule",{value:!0});var s=r(329),l=n(s),c={timeout:5e3,jsonpCallback:"callback"},u=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=null!=t.timeout?t.timeout:c.timeout,n=null!=t.jsonpCallback?t.jsonpCallback:c.jsonpCallback,s=void 0;return new l["default"](function(t,c){var u=i();window[u]=function(e){t({ok:!0,json:function(){return l["default"].resolve(e)}}),s&&clearTimeout(s),a(n+"_"+u),o(u)},e+=-1===e.indexOf("?")?"?":"&";var d=document.createElement("script");d.setAttribute("src",e+n+"="+u),d.id=n+"_"+u,document.getElementsByTagName("head")[0].appendChild(d),s=setTimeout(function(){c(new Error("JSONP request to "+e+" timed out")),o(u),a(n+"_"+u)},r)})};t["default"]=u,e.exports=t["default"]},342:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=r(329),o=n(i);if(!self.fetch){var a,s,l;!function(){var e=function(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()},t=function(e){return"string"!=typeof e&&(e=String(e)),e},r=function g(e){this.map={},e instanceof g?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)},n=function(e){return e.bodyUsed?o["default"].reject(new TypeError("Already read")):void(e.bodyUsed=!0)},i=function(e){return new o["default"](function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})},c=function(e){var t=new FileReader;return t.readAsArrayBuffer(e),i(t)},u=function(e){var t=new FileReader;return t.readAsText(e),i(t)},d=function(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,"string"==typeof e)this._bodyText=e;else if(a.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(a.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(e){if(!a.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e))throw new Error("unsupported BodyInit type")}else this._bodyText=""},a.blob?(this.blob=function(){var e=n(this);if(e)return e;if(this._bodyBlob)return o["default"].resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return o["default"].resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(c)},this.text=function(){var e=n(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return o["default"].resolve(this._bodyText)}):this.text=function(){var e=n(this);return e?e:o["default"].resolve(this._bodyText)},a.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this},h=function(e){var t=e.toUpperCase();return s.indexOf(t)>-1?t:e},f=function v(e,t){t=t||{};var n=t.body;if(v.prototype.isPrototypeOf(e)){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new r(e.headers)),this.method=e.method,this.mode=e.mode,n||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=e;if(this.credentials=t.credentials||this.credentials||"omit",(t.headers||!this.headers)&&(this.headers=new r(t.headers)),this.method=h(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)},p=function(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),i=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(i))}}),t},m=function(e){var t=new r,n=e.getAllResponseHeaders().trim().split("\n");return n.forEach(function(e){var r=e.trim().split(":"),n=r.shift().trim(),i=r.join(":").trim();t.append(n,i)}),t},y=function(e,t){t||(t={}),this._initBody(e),this.type="default",this.status=t.status,this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText,this.headers=t.headers instanceof r?t.headers:new r(t.headers),this.url=t.url||""};r.prototype.append=function(r,n){r=e(r),n=t(n);var i=this.map[r];i||(i=[],this.map[r]=i),i.push(n)},r.prototype["delete"]=function(t){delete this.map[e(t)]},r.prototype.get=function(t){var r=this.map[e(t)];return r?r[0]:null},r.prototype.getAll=function(t){return this.map[e(t)]||[]},r.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},r.prototype.set=function(r,n){this.map[e(r)]=[t(n)]},r.prototype.forEach=function(e,t){Object.getOwnPropertyNames(this.map).forEach(function(r){this.map[r].forEach(function(n){e.call(t,n,r,this)},this)},this)},a={blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self},s=["DELETE","GET","HEAD","OPTIONS","POST","PUT"],f.prototype.clone=function(){return new f(this)},d.call(f.prototype),d.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new r(this.headers),url:this.url})},y.error=function(){var e=new y(null,{status:0,statusText:""});return e.type="error",e},l=[301,302,303,307,308],y.redirect=function(e,t){if(-1===l.indexOf(t))throw new RangeError("Invalid status code");return new y(null,{status:t,headers:{location:e}})},self.Headers=r,self.Request=f,self.Response=y,self.fetch=function(e,t){return new o["default"](function(r,n){function i(){return"responseURL"in s?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):void 0}var o;o=f.prototype.isPrototypeOf(e)&&!t?e:new f(e,t);var s=new XMLHttpRequest;s.onload=function(){var e=1223===s.status?204:s.status;if(100>e||e>599)return void n(new TypeError("Network request failed"));var t={status:e,statusText:s.statusText,headers:m(s),url:i()},o="response"in s?s.response:s.responseText;r(new y(o,t))},s.onerror=function(){n(new TypeError("Network request failed"))},s.open(o.method,o.url,!0),"include"===o.credentials&&(s.withCredentials=!0),"responseType"in s&&a.blob&&(s.responseType="blob"),o.headers.forEach(function(e,t){s.setRequestHeader(t,e)}),s.send("undefined"==typeof o._bodyInit?null:o._bodyInit)})},self.fetch.polyfill=!0}()}e.exports=self.fetch},343:function(e,t,r){"use strict";var n=r(1),i=n.Image,o=n.PixelRatio,a=n.Platform,s=n.StyleSheet,l=n.Text,c=n.TouchableHighlight,u=n.TouchableNativeFeedback,d=n.View,h=r(338),f=r(337),p=r(339),m=n.createClass({displayName:"MovieCell",render:function(){var e=this.props.movie.ratings.critics_score,t=c;return"android"===a.OS&&(t=u),n.createElement(d,null,n.createElement(t,{onPress:this.props.onSelect,onShowUnderlay:this.props.onHighlight,onHideUnderlay:this.props.onUnhighlight},n.createElement(d,{style:y.row},n.createElement(i,{source:f(this.props.movie,"det"),style:y.cellImage}),n.createElement(d,{style:y.textContainer},n.createElement(l,{style:y.movieTitle,numberOfLines:2},this.props.movie.title),n.createElement(l,{style:y.movieYear,numberOfLines:1},this.props.movie.year," ","•"," ",n.createElement(l,{style:h(e)},"Critics ",p(e)))))))}}),y=s.create({textContainer:{flex:1},movieTitle:{flex:1,fontSize:16,fontWeight:"500",marginBottom:2},movieYear:{color:"#999999",fontSize:12},row:{alignItems:"center",backgroundColor:"white",flexDirection:"row",padding:5},cellImage:{backgroundColor:"#dddddd",height:93,marginRight:10,width:60},cellBorder:{backgroundColor:"rgba(0, 0, 0, 0.1)",height:1/o.get(),marginLeft:4}});e.exports=m},344:function(e,t,r){"use strict";var n=r(1),i=n.ActivityIndicatorIOS,o=n.TextInput,a=n.StyleSheet,s=n.View,l=n.createClass({displayName:"SearchBar",render:function(){return n.createElement(s,{style:c.searchBar},n.createElement(o,{autoCapitalize:"none",autoCorrect:!1,onChange:this.props.onSearchChange,placeholder:"Search a movie...",onFocus:this.props.onFocus,style:c.searchBarInput}),n.createElement(i,{animating:this.props.isLoading,style:c.spinner}))}}),c=a.create({searchBar:{marginTop:0,padding:3,paddingLeft:8,flexDirection:"row",alignItems:"center"},searchBarInput:{fontSize:15,flex:1,height:30},spinner:{width:30}});e.exports=l}});
//# sourceMappingURL=movies.js.map