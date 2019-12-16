var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,s){function o(t){try{h(n.next(t))}catch(e){s(e)}}function a(t){try{h(n["throw"](t))}catch(e){s(e)}}function h(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(o,a)}h((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(r)throw new TypeError("Generator is already executing.");for(;h;)try{if(r=1,s&&(o=s[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(s,i[1])).done)return o;switch(s=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,s=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(o=h.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){h.label=i[1];break}if(6===i[0]&&h.label<o[1]){h.label=o[1],o=i;break}if(o&&h.label<o[2]){h.label=o[2],h.ops.push(i);break}o[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(n){i=[6,n],s=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var r,s,o,a,h={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},Stage=function(t){function e(){var e=t.call(this)||this;return e.sw=480,e.sh=800,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.create,e),e}return __extends(e,t),e.prototype.create=function(){},e}(egret.DisplayObjectContainer);__reflect(Stage.prototype,"Stage");var Timer=egret.Timer,Game=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.init,e),e}return __extends(e,t),e.prototype.init=function(){var t=new Game_1;this.addChild(t),console.log("Hello Egret!")},e}(egret.DisplayObjectContainer);__reflect(Game.prototype,"Game");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return[4,this.loadResource()];case 1:return i.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=i.sent(),this.startAnimation(t),[4,platform.login()];case 3:return i.sent(),[4,platform.getUserInfo()];case 4:return e=i.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return i.sent(),this.stage.removeChild(t),[3,4];case 3:return e=i.sent(),console.error(e),[3,4];case 4:return[2]}})})},e.prototype.createGameScene=function(){var t=this.createBitmapByName("bg_jpg");this.addChild(t);var e=this.stage.stageWidth,i=this.stage.stageHeight;t.width=e,t.height=i;var n=new egret.Shape;n.graphics.beginFill(0,.5),n.graphics.drawRect(0,0,e,172),n.graphics.endFill(),n.y=33,this.addChild(n);var r=this.createBitmapByName("egret_icon_png");this.addChild(r),r.x=26,r.y=33;var s=new egret.Shape;s.graphics.lineStyle(2,16777215),s.graphics.moveTo(0,0),s.graphics.lineTo(0,117),s.graphics.endFill(),s.x=172,s.y=61,this.addChild(s);var o=new egret.TextField;o.textColor=16777215,o.width=e-172,o.textAlign="center",o.text="Hello Egret",o.size=24,o.x=172,o.y=80,this.addChild(o);var a=new egret.TextField;this.addChild(a),a.alpha=0,a.width=e-172,a.textAlign=egret.HorizontalAlign.CENTER,a.size=24,a.textColor=16777215,a.x=172,a.y=135,this.textfield=a},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e.prototype.startAnimation=function(t){var e=this,i=new egret.HtmlTextParser,n=t.map(function(t){return i.parse(t)}),r=this.textfield,s=-1,o=function(){s++,s>=n.length&&(s=0);var t=n[s];r.textFlow=t;var i=egret.Tween.get(r);i.to({alpha:1},200),i.wait(2e3),i.to({alpha:0},200),i.call(o,e)};o()},e}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var Actor=function(t){function e(){return t.call(this)||this}return __extends(e,t),e}(egret.Sprite);__reflect(Actor.prototype,"Actor");var tr=egret.sys.tr,is=egret.is,Game_1=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.showNum="0.00",e.nowNum=0,e.isRun=!1,e.msg_text="在6.00时点击停止即挑战成功!",e}return __extends(e,t),e.prototype.create=function(){this.bg=new egret.Sprite,this.bg.graphics.beginFill(16777215),this.bg.graphics.drawRect(0,0,this.sw,this.sh),this.bg.graphics.endFill(),this.bg.x=0,this.bg.y=0,this.bg.width=this.sw,this.bg.height=this.sh,this.initText(),this.initButton(),this.run(),this.addChild(this.bg)},e.prototype.run=function(){this.timer=new Timer(10,0),this.timer.addEventListener(egret.TimerEvent.TIMER,function(){if(this.isRun){switch(this.nowNum+=2,this.showNum=""+this.nowNum/100,this.showNum.length){case 1:this.showNum+=".00";break;case 3:this.showNum+="0"}this.nowNum>=998&&(this.showNum="9.99",this.onStop()),this.num.text=this.showNum}},this)},e.prototype.initText=function(){this.num=new egret.TextField,this.num.text=""+this.showNum,this.num.size=100,this.num.width=this.sw,this.num.y=20,this.num.textColor=65280,this.num.textAlign=egret.HorizontalAlign.CENTER,this.msg1=new egret.TextField,this.msg1.text=this.msg_text,this.msg1.width=this.sw,this.msg1.y=150,this.msg1.textColor=65280,this.msg1.textAlign=egret.HorizontalAlign.CENTER,this.bg.addChild(this.num),this.bg.addChild(this.msg1)},e.prototype.initButton=function(){var t=this.sw/2,e=this.sh/2,i=100;this.btn_text=new egret.TextField,this.btn_text.text="开始",this.btn_text.width=2*i,this.btn_text.size=50,this.btn_text.y=e-25,this.btn_text.x=t-i,this.btn_text.textColor=16777215,this.btn_text.textAlign=egret.HorizontalAlign.CENTER;var n=new egret.Shape;n.graphics.beginFill(65280),n.graphics.drawCircle(t,e,i),n.graphics.endFill(),n.touchEnabled=!0,this.btn_red=new egret.Shape,this.btn_red.graphics.beginFill(16711680),this.btn_red.graphics.drawCircle(t,e,i+2),this.btn_red.graphics.endFill(),this.btn_red.visible=!1,this.btn_red.touchEnabled=!0,n.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){console.log("click_green"),this.btn_red.visible=!0,this.btn_text.text="停止",this.onRun()},this,!0),this.btn_red.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){console.log("click_red"),this.onStop()},this,!0),this.bg.addChild(n),this.bg.addChild(this.btn_red),this.bg.addChild(this.btn_text)},e.prototype.onRun=function(){this.num.textColor=65280,this.showNum="0.00",this.nowNum=0,this.msg1.text=this.msg_text,this.isRun=!0,this.timer.start()},e.prototype.onStop=function(){var t="",e=Math.abs(this.nowNum-600);600==this.nowNum?(t="卧槽牛B啊兄弟！刚刚好！",this.num.textColor=16711680):666==this.nowNum?t="额....只能说一句666了":"9.99"==this.showNum?(this.num.textColor=16719397,t="咋回事啊小老弟,都超时了!"):12>=e?t="哎鸭,就差一点点点点了":30>=e?t="哎鸭,就差一点点了":50>=e?t="这差的有一点点多啊":e>=50&&(t="不行啊兄弟，差的太多了"),this.msg1.text=t,this.btn_red.visible=!1,this.btn_text.text="继续",this.isRun=!1,this.timer.stop()},e}(Stage);__reflect(Game_1.prototype,"Game_1");