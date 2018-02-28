require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({7:[function(require,module,exports) {
"use strict";function t(t,e,i){var a=e.width,h=e.height,c=t.width,d=t.height,n=new tracking.ObjectTracker(["face"]);n.setInitialScale(Math.min(c,d)/150),n.on("track",function(t){if(0!==t.data.length){var e=t.data[0],n=e.x,r=e.y,g=e.width,s=e.height,x={x:n+g/2-a/2,y:r+s/2-h/2,width:a,height:h,faces:t.data};x.x<0&&(x.x=0),x.y<0&&(x.y=0),x.x+x.width>c&&(x.x=c-a),x.y+x.height>d&&(x.y=d-h),i(x)}else i({x:(c-a)/2,y:(d-h)/2,width:a,height:h,faces:[]})}),tracking.track(t,n)}exports.__esModule=!0,exports.default=t;
},{}],9:[function(require,module,exports) {
module.exports="4f366d71d530d3fc9eda96ed50b8dff6.jpg";
},{}],8:[function(require,module,exports) {
module.exports="aa767004f28971cc5ed89d641b25c2c5.jpg";
},{}],13:[function(require,module,exports) {
module.exports="05d278f15685b419a49387d9fb789851.jpg";
},{}],10:[function(require,module,exports) {
module.exports="6a406dc4f59ba72fbb5f885dd495fb9d.jpg";
},{}],11:[function(require,module,exports) {
module.exports="4c7ff41c0928ca99aa0c504e7c995c64.jpg";
},{}],12:[function(require,module,exports) {
module.exports="f910ace724fa47cf9a15fabece91d814.jpg";
},{}],15:[function(require,module,exports) {
module.exports="f2484be56c98cf31fd272c6f47e07582.jpg";
},{}],14:[function(require,module,exports) {
module.exports="404de7345381220b3c1f11b7693f3138.jpg";
},{}],20:[function(require,module,exports) {
module.exports="5995750bcd69fa9f5c7b75627d8e4518.jpg";
},{}],18:[function(require,module,exports) {
module.exports="2be41117d2a4f880c67588273b1eceb6.jpg";
},{}],19:[function(require,module,exports) {
module.exports="3b437665e9ef55fb9a8fc046c8f80b80.jpg";
},{}],16:[function(require,module,exports) {
module.exports="c107a4e5ea995137674f429dabf612ed.jpg";
},{}],17:[function(require,module,exports) {
module.exports="6fc6251f8df3407328378e8409725045.jpg";
},{}],23:[function(require,module,exports) {
module.exports="db8a508e74e6902674f67ab80fbb66ca.jpg";
},{}],38:[function(require,module,exports) {
module.exports="7751e9935ec068f9d18080dcc6b05f86.jpg";
},{}],21:[function(require,module,exports) {
module.exports="a19fbf204371214360aaae1c8460355b.jpg";
},{}],24:[function(require,module,exports) {
module.exports="729239789283c0f07f102c7a5691b6ca.jpg";
},{}],22:[function(require,module,exports) {
module.exports="63aefa5f79c106b451791b1e23ecd144.jpg";
},{}],26:[function(require,module,exports) {
module.exports="55eb49f131477fde8a2da8d3e50c365f.jpg";
},{}],30:[function(require,module,exports) {
module.exports="a35e1eb9b335411949e4ababee74735a.jpg";
},{}],25:[function(require,module,exports) {
module.exports="84ea4de978a98e7f41247753afde9925.jpg";
},{}],29:[function(require,module,exports) {
module.exports="a2fca7d25395d93c98415fd5dd14d7ff.jpg";
},{}],27:[function(require,module,exports) {
module.exports="6793e61af3e2c0bb9da910a1972095c2.jpg";
},{}],28:[function(require,module,exports) {
module.exports="c9634f60d2578703ada816981918aadd.jpg";
},{}],33:[function(require,module,exports) {
module.exports="fba73fef795f9569e7d8ad7f4b84737b.jpg";
},{}],31:[function(require,module,exports) {
module.exports="d841a5229b3ad678700a7e80475f180f.jpg";
},{}],36:[function(require,module,exports) {
module.exports="eb330b4485cd0c3d11eab9be7f227601.jpg";
},{}],49:[function(require,module,exports) {
module.exports="1b65b7f58dadfd4d3e987e1fe1afbf2f.jpg";
},{}],32:[function(require,module,exports) {
module.exports="040c8557fc2f1c6e9729c1a298a18e8c.jpg";
},{}],58:[function(require,module,exports) {
module.exports="2bce60b34e0248b6aa7523820cc2a2bc.jpg";
},{}],34:[function(require,module,exports) {
module.exports="2dd13ea4f7eb401e9b15f8742bf45199.jpg";
},{}],35:[function(require,module,exports) {
module.exports="79ba856afa7de4bcd4d1e7cb7ffd8cca.jpg";
},{}],37:[function(require,module,exports) {
module.exports="96257c35ce689d59fb80dce97b2ef368.jpg";
},{}],41:[function(require,module,exports) {
module.exports="45095dbab69371f1de325666a8c8d5c2.jpg";
},{}],42:[function(require,module,exports) {
module.exports="420aa5e2db78e87e86e511b544cdedee.jpg";
},{}],39:[function(require,module,exports) {
module.exports="5ff63886a29abdcdaf68da10aea66360.jpg";
},{}],40:[function(require,module,exports) {
module.exports="fd848e234390fd7e7542a55b39584464.jpg";
},{}],43:[function(require,module,exports) {
module.exports="4cae4e5fc7a99e2da444811916d6b9f3.jpg";
},{}],45:[function(require,module,exports) {
module.exports="7dab2a808d62f2e61853ad5d3a5a5403.jpg";
},{}],46:[function(require,module,exports) {
module.exports="e94a73880904d0049b8140501f4a8644.jpg";
},{}],44:[function(require,module,exports) {
module.exports="efcc4aa806c2bd1fad24e697d14004c2.jpg";
},{}],48:[function(require,module,exports) {
module.exports="b26199ca3c490f01d1378fa6265a01b6.jpg";
},{}],47:[function(require,module,exports) {
module.exports="d35aaeb1471270945889e35223fc5709.jpg";
},{}],51:[function(require,module,exports) {
module.exports="6f117f839078e07131f2db2ca8f39085.jpg";
},{}],54:[function(require,module,exports) {
module.exports="3f416b010472568a24465dd894d74355.jpg";
},{}],50:[function(require,module,exports) {
module.exports="d5e7294be57484c992b55bb8138018d7.jpg";
},{}],53:[function(require,module,exports) {
module.exports="868c4162293bbf2f0012139a23b340db.jpg";
},{}],91:[function(require,module,exports) {
module.exports="9d4012f984e32a5f1d7224c9648fa7d0.jpg";
},{}],52:[function(require,module,exports) {
module.exports="4442991167fccd31c0dbd8911428795d.jpg";
},{}],56:[function(require,module,exports) {
module.exports="98c61dc1766d2168e422e485929039b6.jpg";
},{}],55:[function(require,module,exports) {
module.exports="0835a6fbbdb239eccb33b66e3d6dbe34.jpg";
},{}],57:[function(require,module,exports) {
module.exports="ba8d1bea6b570661761946575bd05ad9.jpg";
},{}],75:[function(require,module,exports) {
module.exports="6bb76150c34bf097bce3afa404000384.jpg";
},{}],62:[function(require,module,exports) {
module.exports="270fc8f671655fec8f7716093a8c792a.jpg";
},{}],61:[function(require,module,exports) {
module.exports="019398303f1b0d4cdac9375468cdea83.jpg";
},{}],59:[function(require,module,exports) {
module.exports="abc818a95cb5915ce22da1d47151d47d.jpg";
},{}],64:[function(require,module,exports) {
module.exports="e5e51c87a92eab2a862c5c646d833ac6.jpg";
},{}],60:[function(require,module,exports) {
module.exports="118d18e24b9968bb57f2e4c93a4abb6e.jpg";
},{}],63:[function(require,module,exports) {
module.exports="a384325c312f777ee507c7e45be5560b.jpg";
},{}],66:[function(require,module,exports) {
module.exports="985ee669b163bd4192708b60dedd0997.jpg";
},{}],73:[function(require,module,exports) {
module.exports="07b7c12961c1d62445e6fa3c349b7ba7.jpg";
},{}],67:[function(require,module,exports) {
module.exports="e4fbfb96a563a2c06358351e2b1546cd.jpg";
},{}],65:[function(require,module,exports) {
module.exports="93cae29f81296b9caef36268f955243c.jpg";
},{}],90:[function(require,module,exports) {
module.exports="06fd18795d42b4775c1c00be6f7823a7.jpg";
},{}],68:[function(require,module,exports) {
module.exports="3d5d3f8ff8de19e2731a29b61f8665a8.jpg";
},{}],70:[function(require,module,exports) {
module.exports="e6edd4965345f487343612bf9bce7c21.jpg";
},{}],69:[function(require,module,exports) {
module.exports="187f5ddb496660bc6e6d7cf079f76131.jpg";
},{}],72:[function(require,module,exports) {
module.exports="179c45fa41c21cb71c0ef82f2df9ab75.jpg";
},{}],71:[function(require,module,exports) {
module.exports="2355f63e486ae892213ba034315fb65a.jpg";
},{}],74:[function(require,module,exports) {
module.exports="448a5ef8e218e5181e44d5fa749c0ba9.jpg";
},{}],78:[function(require,module,exports) {
module.exports="486a88d0cb1f9e09dd7b789f43c62e10.jpg";
},{}],76:[function(require,module,exports) {
module.exports="bd66a061701b6e20294c0a1f017708bd.jpg";
},{}],86:[function(require,module,exports) {
module.exports="75b07f9d9ecad45a0e630f757d54d52d.jpg";
},{}],77:[function(require,module,exports) {
module.exports="1baae5589e59c2d201f3a0d967204aa7.jpg";
},{}],80:[function(require,module,exports) {
module.exports="484f40818e134604a1129384c330f50b.jpg";
},{}],79:[function(require,module,exports) {
module.exports="1bd1ecbbd80ab06d4c6d419155b84c33.jpg";
},{}],84:[function(require,module,exports) {
module.exports="01824b0bdf7304156ded05d79e55bb92.jpg";
},{}],81:[function(require,module,exports) {
module.exports="c5214944086b6efebbfe9a4c9cdb873b.jpg";
},{}],82:[function(require,module,exports) {
module.exports="17221e96f20c61b3828ed206b6b4fce2.jpg";
},{}],93:[function(require,module,exports) {
module.exports="9d3dd7cbda21e100a9940a0c36fc725c.jpg";
},{}],83:[function(require,module,exports) {
module.exports="141109bfc7e2b201ddf59b6a509e9ac5.jpg";
},{}],101:[function(require,module,exports) {
module.exports="66d8ead22a046f1acf025055a1a93158.jpg";
},{}],100:[function(require,module,exports) {
module.exports="5fcdcfffbaa3a6e631dcb756ea8fc887.jpg";
},{}],85:[function(require,module,exports) {
module.exports="2451a2d72e4d035e30443df7f46ca947.jpg";
},{}],87:[function(require,module,exports) {
module.exports="98e3b329d901477e0e7b40fdf420faff.jpg";
},{}],88:[function(require,module,exports) {
module.exports="e5dcb93963c1c829738d0bb0668abadf.jpg";
},{}],89:[function(require,module,exports) {
module.exports="7e93bd17425cb8887f6692b64ecb6311.jpg";
},{}],92:[function(require,module,exports) {
module.exports="c026e0912ffd1ff1cb4c6eaa6c066402.jpg";
},{}],103:[function(require,module,exports) {
module.exports="68e531ad0ceaac451a8bc1b1b6f495e3.jpg";
},{}],94:[function(require,module,exports) {
module.exports="27e23811aba3c56fbc404333b7af1982.jpg";
},{}],96:[function(require,module,exports) {
module.exports="af21dfd4db94333b137549f74d3ba43c.jpg";
},{}],95:[function(require,module,exports) {
module.exports="fa163b7aa08ad3824ec8b5d7b954456d.jpg";
},{}],99:[function(require,module,exports) {
module.exports="e56598bc8f54c389b3e3b7568a8bc05c.jpg";
},{}],98:[function(require,module,exports) {
module.exports="de27deed7e21d2eacf8c73525a9286df.jpg";
},{}],102:[function(require,module,exports) {
module.exports="850fc19cf20e8929f2aca503830248eb.jpg";
},{}],97:[function(require,module,exports) {
module.exports="dc28235b4afd0a312b19262e9e029cb5.jpg";
},{}],107:[function(require,module,exports) {
module.exports="d958f76c1572b32b96803f07d96c34d5.jpg";
},{}],106:[function(require,module,exports) {
module.exports="e112eceaea943b028e98eaced67149d3.jpg";
},{}],104:[function(require,module,exports) {
module.exports="9bea5685fd342b79bc8c1b80fdbfa8e8.jpg";
},{}],105:[function(require,module,exports) {
module.exports="eb385364597ee09cc244582920fbecc6.jpg";
},{}],6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=[require("./img/001.jpg"),require("./img/002.jpg"),require("./img/003.jpg"),require("./img/004.jpg"),require("./img/005.jpg"),require("./img/006.jpg"),require("./img/007.jpg"),require("./img/008.jpg"),require("./img/009.jpg"),require("./img/010.jpg"),require("./img/011.jpg"),require("./img/012.jpg"),require("./img/013.jpg"),require("./img/014.jpg"),require("./img/015.jpg"),require("./img/016.jpg"),require("./img/017.jpg"),require("./img/018.jpg"),require("./img/019.jpg"),require("./img/020.jpg"),require("./img/021.jpg"),require("./img/022.jpg"),require("./img/023.jpg"),require("./img/024.jpg"),require("./img/025.jpg"),require("./img/026.jpg"),require("./img/027.jpg"),require("./img/028.jpg"),require("./img/029.jpg"),require("./img/030.jpg"),require("./img/031.jpg"),require("./img/032.jpg"),require("./img/033.jpg"),require("./img/034.jpg"),require("./img/035.jpg"),require("./img/036.jpg"),require("./img/037.jpg"),require("./img/038.jpg"),require("./img/039.jpg"),require("./img/040.jpg"),require("./img/041.jpg"),require("./img/042.jpg"),require("./img/043.jpg"),require("./img/044.jpg"),require("./img/045.jpg"),require("./img/046.jpg"),require("./img/047.jpg"),require("./img/048.jpg"),require("./img/049.jpg"),require("./img/050.jpg"),require("./img/051.jpg"),require("./img/052.jpg"),require("./img/053.jpg"),require("./img/054.jpg"),require("./img/055.jpg"),require("./img/056.jpg"),require("./img/057.jpg"),require("./img/058.jpg"),require("./img/059.jpg"),require("./img/060.jpg"),require("./img/061.jpg"),require("./img/062.jpg"),require("./img/063.jpg"),require("./img/064.jpg"),require("./img/065.jpg"),require("./img/066.jpg"),require("./img/067.jpg"),require("./img/068.jpg"),require("./img/069.jpg"),require("./img/070.jpg"),require("./img/071.jpg"),require("./img/072.jpg"),require("./img/073.jpg"),require("./img/074.jpg"),require("./img/075.jpg"),require("./img/076.jpg"),require("./img/077.jpg"),require("./img/078.jpg"),require("./img/079.jpg"),require("./img/080.jpg"),require("./img/081.jpg"),require("./img/082.jpg"),require("./img/083.jpg"),require("./img/084.jpg"),require("./img/085.jpg"),require("./img/086.jpg"),require("./img/087.jpg"),require("./img/088.jpg"),require("./img/089.jpg"),require("./img/090.jpg"),require("./img/091.jpg"),require("./img/092.jpg"),require("./img/093.jpg"),require("./img/094.jpg"),require("./img/095.jpg"),require("./img/096.jpg"),require("./img/097.jpg"),require("./img/098.jpg"),require("./img/099.jpg"),require("./img/100.jpg")];
},{"./img/001.jpg":9,"./img/002.jpg":8,"./img/003.jpg":13,"./img/004.jpg":10,"./img/005.jpg":11,"./img/006.jpg":12,"./img/007.jpg":15,"./img/008.jpg":14,"./img/009.jpg":20,"./img/010.jpg":18,"./img/011.jpg":19,"./img/012.jpg":16,"./img/013.jpg":17,"./img/014.jpg":23,"./img/015.jpg":38,"./img/016.jpg":21,"./img/017.jpg":24,"./img/018.jpg":22,"./img/019.jpg":26,"./img/020.jpg":30,"./img/021.jpg":25,"./img/022.jpg":29,"./img/023.jpg":27,"./img/024.jpg":28,"./img/025.jpg":33,"./img/026.jpg":31,"./img/027.jpg":36,"./img/028.jpg":49,"./img/029.jpg":32,"./img/030.jpg":58,"./img/031.jpg":34,"./img/032.jpg":35,"./img/033.jpg":37,"./img/034.jpg":41,"./img/035.jpg":42,"./img/036.jpg":39,"./img/037.jpg":40,"./img/038.jpg":43,"./img/039.jpg":45,"./img/040.jpg":46,"./img/041.jpg":44,"./img/042.jpg":48,"./img/043.jpg":47,"./img/044.jpg":51,"./img/045.jpg":54,"./img/046.jpg":50,"./img/047.jpg":53,"./img/048.jpg":91,"./img/049.jpg":52,"./img/050.jpg":56,"./img/051.jpg":55,"./img/052.jpg":57,"./img/053.jpg":75,"./img/054.jpg":62,"./img/055.jpg":61,"./img/056.jpg":59,"./img/057.jpg":64,"./img/058.jpg":60,"./img/059.jpg":63,"./img/060.jpg":66,"./img/061.jpg":73,"./img/062.jpg":67,"./img/063.jpg":65,"./img/064.jpg":90,"./img/065.jpg":68,"./img/066.jpg":70,"./img/067.jpg":69,"./img/068.jpg":72,"./img/069.jpg":71,"./img/070.jpg":74,"./img/071.jpg":78,"./img/072.jpg":76,"./img/073.jpg":86,"./img/074.jpg":77,"./img/075.jpg":80,"./img/076.jpg":79,"./img/077.jpg":84,"./img/078.jpg":81,"./img/079.jpg":82,"./img/080.jpg":93,"./img/081.jpg":83,"./img/082.jpg":101,"./img/083.jpg":100,"./img/084.jpg":85,"./img/085.jpg":87,"./img/086.jpg":88,"./img/087.jpg":89,"./img/088.jpg":92,"./img/089.jpg":103,"./img/090.jpg":94,"./img/091.jpg":96,"./img/092.jpg":95,"./img/093.jpg":99,"./img/094.jpg":98,"./img/095.jpg":102,"./img/096.jpg":97,"./img/097.jpg":107,"./img/098.jpg":106,"./img/099.jpg":104,"./img/100.jpg":105}],3:[function(require,module,exports) {
"use strict";var e=require("../src/index"),t=i(e),n=require("./img-list"),l=i(n);function i(e){return e&&e.__esModule?e:{default:e}}const a=document.getElementById("app");for(let e=0;e<100;e++){const t=document.createElement("div");t.className="img-container";const n=document.createElement("img");n.className="img",n.onload=(()=>{const e=n.naturalWidth,t=n.naturalHeight;e>t?(n.style.height="100px",n.style.marginLeft=-(e/t*100-100)/2):(n.style.width="100px",n.style.marginTop=-(t/e*100-100)/2)}),n.src=l.default[e],t.appendChild(n),a.appendChild(t)}document.getElementById("start").addEventListener("click",()=>{const e=Date.now();let n=0;for(let l=0;l<100;l++){const i=document.querySelectorAll(".img")[l];i.style.opacity=1,(0,t.default)(i,{width:100,height:100},({x:t,y:l,width:a,height:o,faces:s})=>{100===++n&&(document.getElementById("stdout").innerHTML="Total time: "+(Date.now()-e)),0===s.length&&(i.style.opacity=.3),s.length>0&&(i.style.marginLeft=-t,i.style.marginTop=-l)})}});
},{"../src/index":7,"./img-list":6}]},{},[3])