webpackJsonp([0],[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),l=a.AppRegistry,o=a.StyleSheet,s=a.Text,c=a.TouchableHighlight,u=a.View,d=a.Platform,h=function(){function e(){n(this,e);for(var t=3,r=Array(t),i=0;t>i;i++){for(var a=Array(t),l=0;t>l;l++)a[l]=0;r[i]=a}this.grid=r,this.turn=1}return i(e,[{key:"mark",value:function(e,t,r){return this.grid[e][t]=r,this}},{key:"hasMark",value:function(e,t){return 0!==this.grid[e][t]}},{key:"winner",value:function(){for(var e=0;3>e;e++)if(0!==this.grid[e][0]&&this.grid[e][0]===this.grid[e][1]&&this.grid[e][0]===this.grid[e][2])return this.grid[e][0];for(var e=0;3>e;e++)if(0!==this.grid[0][e]&&this.grid[0][e]===this.grid[1][e]&&this.grid[0][e]===this.grid[2][e])return this.grid[0][e];return 0!==this.grid[0][0]&&this.grid[0][0]===this.grid[1][1]&&this.grid[0][0]===this.grid[2][2]?this.grid[0][0]:0!==this.grid[0][2]&&this.grid[0][2]===this.grid[1][1]&&this.grid[0][2]===this.grid[2][0]?this.grid[0][2]:null}},{key:"tie",value:function(){for(var e=0;3>e;e++)for(var t=0;3>t;t++)if(0===this.grid[e][t])return!1;return null===this.winner()}}]),e}(),f=a.createClass({displayName:"Cell",cellStyle:function(){switch(this.props.player){case 1:return y.cellX;case 2:return y.cellO;default:return null}},textStyle:function(){switch(this.props.player){case 1:return y.cellTextX;case 2:return y.cellTextO;default:return{}}},textContents:function(){switch(this.props.player){case 1:return"X";case 2:return"O";default:return""}},render:function(){return a.createElement(c,{onPress:this.props.onPress,underlayColor:"transparent",activeOpacity:.5},a.createElement(u,{style:[y.cell,this.cellStyle()]},a.createElement(s,{style:[y.cellText,this.textStyle()]},this.textContents())))}}),g=a.createClass({displayName:"GameEndOverlay",render:function(){var e=this.props.board,t=e.tie(),r=e.winner();if(!r&&!t)return a.createElement(u,null);var n;return n=t?"It's a tie!":(1===r?"X":"O")+" wins!",a.createElement(u,{style:y.overlay},a.createElement(s,{style:y.overlayMessage},n),a.createElement(c,{onPress:this.props.onRestart,underlayColor:"transparent",activeOpacity:.5},a.createElement(u,{style:y.newGame},a.createElement(s,{style:y.newGameText},"New Game"))))}}),p=a.createClass({displayName:"TicTacToeApp",getInitialState:function(){return{board:new h,player:1}},restartGame:function(){this.setState(this.getInitialState())},nextPlayer:function(){return 1===this.state.player?2:1},handleCellPress:function(e,t){this.state.board.hasMark(e,t)||this.setState({board:this.state.board.mark(e,t,this.state.player),player:this.nextPlayer()})},render:function(){var e=this,t=this.state.board.grid.map(function(t,r){return a.createElement(u,{key:"row"+r,style:y.row},t.map(function(t,n){return a.createElement(f,{key:"cell"+n,player:t,onPress:e.handleCellPress.bind(e,r,n)})}))});return a.createElement(u,{style:y.container},a.createElement(s,{style:y.title},"EXTREME T3"),a.createElement(u,{style:y.board},t),a.createElement(g,{board:this.state.board,onRestart:this.restartGame}))}}),y=o.create({container:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"},title:{fontFamily:"Chalkduster",fontSize:39,marginBottom:20},board:{padding:5,backgroundColor:"#47525d",borderRadius:10},row:{flexDirection:"row"},cell:{width:80,height:80,borderRadius:5,backgroundColor:"#7b8994",margin:5,flex:1,justifyContent:"center",alignItems:"center"},cellX:{backgroundColor:"#72d0eb"},cellO:{backgroundColor:"#7ebd26"},cellText:{borderRadius:5,fontSize:50,fontFamily:"AvenirNext-Bold"},cellTextX:{color:"#19a9e5"},cellTextO:{color:"#b9dc2f"},overlay:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(221, 221, 221, 0.5)",flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"},overlayMessage:{fontSize:40,marginBottom:20,marginLeft:20,marginRight:20,fontFamily:"AvenirNext-DemiBold",textAlign:"center"},newGame:{backgroundColor:"#887766",padding:20,borderRadius:5},newGameText:{color:"white",fontSize:20,fontFamily:"AvenirNext-DemiBold"}});if(l.registerComponent("TicTacToeApp",function(){return p}),"web"==d.OS){var m=document.createElement("div");document.body.appendChild(m),l.runApplication("TicTacToeApp",{rootTag:m})}else"weex"==d.OS&&l.runApplication("TicTacToeApp",{rootTag:__hack__weexApp});e.exports=p}]);
//# sourceMappingURL=tictactoe.js.map