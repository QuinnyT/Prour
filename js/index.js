var raindropBoxDom, raindrop;
var myAnimation = [];
// var logoDom, centerDrop;
var centerDropDom, centerDrop;
var logoGroup, logo;
var seeds = [];

gsap.registerPlugin(MotionPathPlugin);
// setTimeout(() => {

// }, 500);

function action() {}


document.getElementById("raindrop-box").addEventListener('load', () => {
    raindropBoxDom = document.getElementById("raindrop-box").getSVGDocument();
    raindrop = raindropBoxDom.getElementById("Drops").querySelectorAll("path");
    centerDrop = raindropBoxDom.getElementById("CenterDrop");
    logoGroup = raindropBoxDom.getElementById("Logo-Group");
    logo = raindropBoxDom.getElementById("Logo").querySelectorAll("path");
    logoGroup.style.opacity = 0;
    console.log("centerDrop", centerDrop)
    // console.log("raindrop", raindrop)

    seeds[0] = raindropBoxDom.getElementById("Seed1")
    seeds[1] = raindropBoxDom.getElementById("Seed2")
    seeds[2] = raindropBoxDom.getElementById("Seed3")


    raindrop.forEach((ele, i) => {
        // console.log("ele", ele.id)

        if (ele.id !== "CenterDrop") {
            myAnimation[i] = gsap.to(ele, {
                y: 1080,
                duration: "random(3, 5)",
                repeat: -1,
                onRepeat: function () {
                    myAnimation[i].duration(gsap.utils.random(3, 5))
                    // console.log("myAnimation", myAnimation)
                }
            })
            // let myAnimation = gsap.timeline()
            //     .fromTo(ele, {
            //         opacity: 0,
            //         y: -10,
            //     }, {
            //         y: 1080,
            //         duration: "random(3, 5)",
            //     })
            //     .fromTo(ele, {
            //         opacity: 1,
            //         y: -10,
            //     }, {
            //         y: 1080,
            //         duration: "random(3, 5)",
            //         repeat: -1
            //     })

            // let dropToLogo = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: '#page2',
            //         scrub: true,
            //         start: "top bottom",
            //         end: "center bottom"
            //     }
            // })
            // dropToLogo.to(raindrop[43], {
            //     scale: 2,
            //     strokeWidth: 5,
            //     y: 1180,
            //     duration: 1,
            //     onStart: function () {
            //         myAnimation.pause();
            //     }
            // })
        }


    });

    raindropAnimation
    // .to(raindrop, {
    //     y: 1800,
    //     // duration: gsap.utils.random(0.3, 1),
    //     duration: 1,
    // })
    // .to(".text1-box", {
    //     y: -1000,
    //     duration: 1,
    // })
    // .to("#info2", {
    //     y: -800,
    //     duration: 1,
    // }, "<")

    // .to(logoGroup, {
    //     y: -1000,
    //     // opacity: 1,
    //     dration: 1
    // }, "<")
    // .from(logo, 1, {
    //     drawSVG: 0,
    // })

    // .to(centerDrop, {
    //     y: 1080,
    //     duration: 1
    // }, "<")

    console.log("$(window).height()", $(window).height())

    dropToLogoAnimation
        .to(centerDrop, {
            // y: $(window).height() * 1.63,
            // y: "+=1220",
            y: 1290,
            dration: 10
        })
        .to(centerDrop, {
            scale: 2.25,
            strokeWidth: 5,
            transformOrigin: "center center",
            dration: 2
        })
        .to(raindrop, {
            opacity: 0,
            dration: 2
        })
        .to(logoGroup, {
            opacity: 1,
            dration: 3
        })
        .to(".text2-box", {
            opacity: 1,
            dration: 3
        })

    logoToSeedAnimation
        .to(seeds[0], {
            y: 1182,
            // x: -540,
            // y: $(window).height() * 1,
            x: -$(window).width() * 0.3,
            rotation: -58,
            scale: 3.5,
            transformOrigin: "center center"
        })
        .to(seeds[1], {
            y: 1130,
            // y: $(window).height() * 0.95,
            scale: 3.5,
            transformOrigin: "center center"
        }, "<")
        .to(seeds[2], {
            y: 1182,
            // x: 540,
            // y: $(window).height() * 1,
            x: $(window).width() * 0.3,
            rotation: 58,
            scale: 3.5,
            transformOrigin: "center center"
        }, "<")

}, false)


// document.getElementById("logo-center").addEventListener('load', (e) => {
//     logoDom = document.getElementById("logo-center").getSVGDocument();
//     centerDrop = logoDom.getElementById("centerDrop");
//     console.log("centerDrop", centerDrop)
// }, false)

let raindropAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: '#triggerSection',
        scrub: true,
        // pin: true,
        start: "top top",
        // end: "+=200%",
        end: "bottom bottom",
        onLeave: function () {
            // console.log("myAnimation", myAnimation)
            console.log("raindropAnimation", raindropAnimation)
            // for (let i=0; i<raindrop.length; i++) {
            //     myAnimation[i].pause()
            // }
            // gsap
            // .to("#raindrop-box", {
            //     opacity: 0,
            //     duration: 1
            // })

            // gsap.timeline()
            // .fromTo(centerDrop, {
            //     opacity: 1,
            //     scale: .2,
            //     y: -500,
            // },{
            //     y: 0,
            //     attr: {
            //         "stroke-width": 5
            //     },
            //     duration: 1
            // })
            // .to(centerDrop, {
            //     scale: 1,
            // })
            // .to("#logo-center", {
            //     opacity: 1,
            //     duration: 0.8
            // }, "<")
            // .to("#raindrop-box", {
            //     opacity: 0,
            //     duration: 1
            // }, "<2")
            // .to(".text2-box", {
            //     opacity: 1,
            //     duration: 1
            // })


            // gsap.timeline()
            // .to(centerDrop, {
            //     y: 370,
            //     dration: 2
            // })
            // .to(raindrop, {
            //     opacity: 0,
            //     dration: 5
            // }, "<")
            // .to(centerDrop, {
            //     scale: 3,
            //     strokeWidth: 3,
            //     transformOrigin:"center center",
            //     dration: 2
            // })
            // .to(logoGroup, {
            //     opacity: 1,
            //     dration: 3
            // })
            // .to(".text2-box", {
            //     opacity: 1,
            //     dration: 3
            // })


            // $("#page1").css({"position": "absolute", "top": "100vh"})
        }
    }
})
let dropToLogoAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: '#triggerSection',
        scrub: true,
        start: "33% bottom",
        end: "66% bottom",
    }
})
let logoToSeedAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: '#triggerSection',
        scrub: true,
        start: "66% bottom",
        end: "bottom bottom",
    }
})

// ScrollTrigger.create({
//     trigger: '#page1',
//     scrub: true,
//     start: "center top",
//     end: "+=200%",
//     onEnter: function () {
//         gsap.to(".text1-box", {
//             y: -1000,
//             duration: 1
//         })
//     }
// })

window.addEventListener('resize', function () {
    console.log("raindropBoxDom", raindropBoxDom)
    console.log("width", $(window).width())
});



function loadMap() {
    // window.map = initMap({
    //     heading: 0,
    //     tilt: 10,
    //     zoom: 17,
    //     center: [114.0657731159577, 22.547424971755734],
    // });
    var myMap = new BMapGL.Map("map",
        // {
        //     style: [{
        //         featureType: 'water',
        //         elementType: 'all',
        //         stylers: {
        //             color: '#021019ff'
        //         }
        //     }, {
        //         featureType: 'highway',
        //         elementType: 'geometry.fill',
        //         stylers: {
        //             color: '#000000ff'
        //         }
        //     }, {
        //         featureType: 'highway',
        //         elementType: 'geometry.stroke',
        //         stylers: {
        //             color: '#147a92ff'
        //         }
        //     }, {
        //         featureType: 'arterial',
        //         elementType: 'geometry.fill',
        //         stylers: {
        //             color: '#000000ff'
        //         }
        //     }, {
        //         featureType: 'arterial',
        //         elementType: 'geometry.stroke',
        //         stylers: {
        //             color: '#0b3d51ff'
        //         }
        //     }, {
        //         featureType: 'local',
        //         elementType: 'geometry',
        //         stylers: {
        //             color: '#000000ff'
        //         }
        //     }, {
        //         featureType: 'railway',
        //         elementType: 'geometry.fill',
        //         stylers: {
        //             color: '#000000ff'
        //         }
        //     }, {
        //         featureType: 'railway',
        //         elementType: 'geometry.stroke',
        //         stylers: {
        //             color: '#08304bff'
        //         }
        //     }, {
        //         featureType: 'subway',
        //         elementType: 'geometry',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'all',
        //         elementType: 'labels.text.fill',
        //         stylers: {
        //             color: '#857f7fff'
        //         }
        //     }, {
        //         featureType: 'all',
        //         elementType: 'labels.text.stroke',
        //         stylers: {
        //             color: '#000000ff'
        //         }
        //     }, {
        //         featureType: 'green',
        //         elementType: 'geometry',
        //         stylers: {
        //             color: '#062032ff'
        //         }
        //     }, {
        //         featureType: 'manmade',
        //         elementType: 'geometry',
        //         stylers: {
        //             color: '#022338ff'
        //         }
        //     }, {
        //         featureType: 'poilabel',
        //         elementType: 'all',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'all',
        //         elementType: 'labels.icon',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'water',
        //         elementType: 'all',
        //         stylers: {
        //             visibility: 'on',
        //             color: '#505565ff'
        //         }
        //     }, {
        //         featureType: 'green',
        //         elementType: 'all',
        //         stylers: {
        //             color: '#353b4dff'
        //         }
        //     }, {
        //         featureType: 'road',
        //         elementType: 'geometry.fill',
        //         stylers: {
        //             visibility: 'on',
        //             color: '#2a2e3bff'
        //         }
        //     }, {
        //         featureType: 'road',
        //         elementType: 'geometry.stroke',
        //         stylers: {
        //             color: '#4b5163ff'
        //         }
        //     }, {
        //         featureType: 'administrative',
        //         elementType: 'labels.text.fill',
        //         stylers: {
        //             color: '#8e99bdff'
        //         }
        //     }, {
        //         featureType: 'administrative',
        //         elementType: 'labels.text.stroke',
        //         stylers: {
        //             color: '#2f3547ff'
        //         }
        //     }, {
        //         featureType: 'poilabel',
        //         elementType: 'labels.text.fill',
        //         stylers: {
        //             color: '#727c9aff'
        //         }
        //     }, {
        //         featureType: 'road',
        //         elementType: 'labels.text.stroke',
        //         stylers: {
        //             color: '#293045ff'
        //         }
        //     }, {
        //         featureType: 'road',
        //         elementType: 'labels.text.fill',
        //         stylers: {
        //             color: '#777e93ff'
        //         }
        //     }, {
        //         featureType: 'town',
        //         elementType: 'all',
        //         stylers: {
        //             visibility: 'on'
        //         }
        //     }, {
        //         featureType: 'subway',
        //         elementType: 'labels.text.fill',
        //         stylers: {
        //             visibility: 'off',
        //             color: '#787f95ff'
        //         }
        //     }, {
        //         featureType: 'subway',
        //         elementType: 'labels.text.stroke',
        //         stylers: {
        //             color: '#40475eff'
        //         }
        //     }, {
        //         featureType: 'building',
        //         elementType: 'geometry.fill',
        //         stylers: {
        //             color: '#485161ff'
        //         }
        //     }, {
        //         featureType: 'manmade',
        //         elementType: 'geometry.fill',
        //         stylers: {
        //             color: '#374053ff'
        //         }
        //     }, {
        //         featureType: 'manmade',
        //         elementType: 'labels.text.fill',
        //         stylers: {
        //             color: '#8792adff'
        //         }
        //     }, {
        //         featureType: 'manmade',
        //         elementType: 'labels.text.stroke',
        //         stylers: {
        //             color: '#292f48ff'
        //         }
        //     }, {
        //         featureType: 'scenicspotslabel',
        //         elementType: 'labels',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'railway',
        //         elementType: 'geometry',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'scenicspotslabel',
        //         elementType: 'labels.icon',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'highwaysign',
        //         elementType: 'labels',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'highwaysign',
        //         elementType: 'labels.icon',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'nationalwaysign',
        //         elementType: 'labels.icon',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'nationalwaysign',
        //         elementType: 'labels',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'provincialwaysign',
        //         elementType: 'labels.icon',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'provincialwaysign',
        //         elementType: 'labels',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'tertiarywaysign',
        //         elementType: 'labels.icon',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'tertiarywaysign',
        //         elementType: 'labels',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'subwaylabel',
        //         elementType: 'labels.icon',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'subwaylabel',
        //         elementType: 'labels',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'village',
        //         elementType: 'labels',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'town',
        //         elementType: 'labels',
        //         stylers: {
        //             visibility: 'off'
        //         }
        //     }, {
        //         featureType: 'land',
        //         elementType: 'geometry',
        //         stylers: {
        //             color: '#40495aff',
        //             visibility: 'on'
        //         }
        //     }]
        // }
    );
    myMap.setMapStyleV2({
        styleId: '777ff60397df2a8123ad7e2f632fd9f6'
    })
    var point = new BMapGL.Point(114.0657731159577, 22.547424971755734);
    myMap.centerAndZoom(point, 14);
    // myMap.enableScrollWheelZoom(true);
    addCustomizedMarker();

    function addCustomizedMarker() {
        function ComplexCustomOverlay(point, text, mouseoverText, size){
            this._point = point;
            this._text = text;
            this._overText = mouseoverText;
            this._size = size;
          }
          ComplexCustomOverlay.prototype = new BMapGL.Overlay();
          ComplexCustomOverlay.prototype.initialize = function(map){
            this._map = map;
            var div = this._div = document.createElement("div");
            div.style.position = "absolute";
            div.style.zIndex = BMapGL.Overlay.getZIndex(this._point.lat);
            // div.style.backgroundColor = "#EE5D5B";
            // div.style.border = "1px solid #BC3B3A";
            div.style.color = "white";
            div.style.width = "51.5px";
            div.style.height = "34px";
            // div.style.padding = "2px";
            // div.style.lineHeight = "18px";
            // div.style.whiteSpace = "nowrap";
            // div.style.MozUserSelect = "none";
            // div.style.fontSize = "12px"

            // var span = this._span = document.createElement("span");
            // div.appendChild(span);
            // span.appendChild(document.createTextNode(this._text));      
            var that = this;
      
            // var arrow = this._arrow = document.createElement("div");
            // arrow.style.background = "url(//map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
            // arrow.style.position = "absolute";
            // arrow.style.width = "11px";
            // arrow.style.height = "10px";
            // arrow.style.top = "22px";
            // arrow.style.left = "10px";
            // arrow.style.overflow = "hidden";
            // div.appendChild(arrow);
           
            var defualtImg = this._arrow = document.createElement("img");
            defualtImg.src = "../src/mapMarker_Default.png";
            defualtImg.style.position = "absolute";
            defualtImg.style.width = "100%";
            defualtImg.style.height = "100%";
            defualtImg.style.top = "0";
            defualtImg.style.left = "0";
            defualtImg.style.overflow = "hidden";
            div.appendChild(defualtImg);

            var hoverImg = document.createElement("img");
            hoverImg.src = "../src/mapMarker_Hover.svg";
            hoverImg.style.position = "absolute";
            hoverImg.style.width = "100%";
            hoverImg.style.height = "100%";
            hoverImg.style.top = "0";
            hoverImg.style.left = "0";
            hoverImg.style.overflow = "hidden";
            hoverImg.style.display = "none";
            hoverImg.style.opacity = "0";
            div.appendChild(hoverImg);

            div.onmouseover = function(){
            //   this.style.backgroundColor = "#6BADCA";
            //   this.style.width = "348px";
            //   this.style.height = "277px";
              gsap.to(this.style, {
                width: that._size[0] * 2 + "px",
                height: that._size[1] * 2 + "px",
                duration: 0.5 
              })
            //   gsap.to(defualtImg, {
            //     opacity: 0,
            //     display: "none",
            //     duration: 0.5 
            //   })
              gsap.to(hoverImg, {
                display: "block",
                opacity: 1,
                duration: 0.5
              })
            //   this.style.borderColor = "#0000ff";
            //   this.getElementsByTagName("span")[0].innerHTML = that._overText;
            //   arrow.style.backgroundPosition = "0px -20px";
            }
      
            div.onmouseout = function(){
            //   this.style.background = "none";
              gsap.to(this.style, {
                width: that._size[0] + "px",
                height: that._size[1] + "px",
                duration: 0.5 
              })
              gsap.to(hoverImg, {
                opacity: 0,
                display: "none",
                duration: 0.5
              })
            //   gsap.to(defualtImg, {
            //     display: "block",
            //     opacity: 1,
            //     duration: 0.5
            //   })
            //   this.style.borderColor = "#BC3B3A";
            //   this.getElementsByTagName("span")[0].innerHTML = that._text;
            //   arrow.style.backgroundPosition = "0px 0px";
            }
      
            myMap.getPanes().labelPane.appendChild(div);
            
            return div;
          }
          ComplexCustomOverlay.prototype.draw = function(){
            var map = this._map;
            var pixel = map.pointToOverlayPixel(this._point);
            this._div.style.left = pixel.x - this._size[0]/2 + "px";
            this._div.style.top  = pixel.y - this._size[1]/2  + "px";
          }
          var txt = "银湖海岸城", mouseoverTxt = txt + " " + parseInt(Math.random() * 1000,10) + "套" ;
              
          var community1 = new ComplexCustomOverlay(new BMapGL.Point(114.065629,22.559708), "莲花山公园",mouseoverTxt, [100, 34]);
          var community2 = new ComplexCustomOverlay(new BMapGL.Point(114.078134,22.543353), "岗厦村",mouseoverTxt, [51.5, 34]);
      
          myMap.addOverlay(community1);
          myMap.addOverlay(community2);
          console.log(myMap.getPanes(),'ddddd');
    };
    function addCustomizedMarker_ORIGINAL() {
        function ComplexCustomOverlay(point, text, mouseoverText){
            this._point = point;
            this._text = text;
            this._overText = mouseoverText;
          }
          ComplexCustomOverlay.prototype = new BMapGL.Overlay();
          ComplexCustomOverlay.prototype.initialize = function(map){
            this._map = map;
            var div = this._div = document.createElement("div");
            div.style.position = "absolute";
            div.style.zIndex = BMapGL.Overlay.getZIndex(this._point.lat);
            div.style.backgroundColor = "#EE5D5B";
            div.style.border = "1px solid #BC3B3A";
            div.style.color = "white";
            div.style.height = "18px";
            div.style.padding = "2px";
            div.style.lineHeight = "18px";
            div.style.whiteSpace = "nowrap";
            div.style.MozUserSelect = "none";
            div.style.fontSize = "12px"
            var span = this._span = document.createElement("span");
            div.appendChild(span);
            span.appendChild(document.createTextNode(this._text));      
            var that = this;
      
            var arrow = this._arrow = document.createElement("div");
            arrow.style.background = "url(//map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
            arrow.style.position = "absolute";
            arrow.style.width = "11px";
            arrow.style.height = "10px";
            arrow.style.top = "22px";
            arrow.style.left = "10px";
            arrow.style.overflow = "hidden";
            div.appendChild(arrow);
           
            div.onmouseover = function(){
              this.style.backgroundColor = "#6BADCA";
              this.style.borderColor = "#0000ff";
              this.getElementsByTagName("span")[0].innerHTML = that._overText;
              arrow.style.backgroundPosition = "0px -20px";
            }
      
            div.onmouseout = function(){
              this.style.backgroundColor = "#EE5D5B";
              this.style.borderColor = "#BC3B3A";
              this.getElementsByTagName("span")[0].innerHTML = that._text;
              arrow.style.backgroundPosition = "0px 0px";
            }
      
            myMap.getPanes().labelPane.appendChild(div);
            
            return div;
          }
          ComplexCustomOverlay.prototype.draw = function(){
            var map = this._map;
            var pixel = map.pointToOverlayPixel(this._point);
            this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
            this._div.style.top  = pixel.y - 30 + "px";
          }
          var txt = "银湖海岸城", mouseoverTxt = txt + " " + parseInt(Math.random() * 1000,10) + "套" ;
              
          var myCompOverlay = new ComplexCustomOverlay(new BMapGL.Point(114.0657731159577, 22.547424971755734), "银湖海岸城",mouseoverTxt);
      
          myMap.addOverlay(myCompOverlay);
          console.log(myMap.getPanes(),'ddddd');
    }

}
loadMap();



function addSvgMarker() {
    var opo = 1;

    function animation() {
        opo++
        console.log(opo % 10000);
        window.requestAnimationFrame(animation);
    }

    function startAnimation() {
        window.requestAnimationFrame(animation);
    }
    // startAnimation()
    const size = 200;

    function CustomSymbol(_size, _anchor) {
        BMapGL.Symbol.call(this, _size, _anchor);
        this.width = _size.width;
        this.height = _size.height;
        // 需要再addOverlay之前设置true，需要保证纹理大小不变化
        this.isReDraw = true;
    }
    CustomSymbol.prototype = new BMapGL.Symbol();
    CustomSymbol.prototype.constructor = CustomSymbol;
    CustomSymbol.prototype.add = function () {
        const canvas = document.createElement('canvas');
        canvas.width = this.width * 2;
        canvas.height = this.height * 2;
        this.context = canvas.getContext('2d');
        this.isReDraw = false;

    }
    CustomSymbol.prototype.render = function (map) {
        const duration = 1500;
        const t = (performance.now() % duration) / duration;

        // 可以通过修改 0.3 0.7
        const radius = (this.width / 2) * 0.1;
        const outerRadius = (this.width / 2) * 0.5 * t + radius;
        const context = this.context;
        context.save();
        // 2倍图
        context.scale(2, 2);
        context.clearRect(0, 0, this.width, this.height);

        // 扩散圆
        context.beginPath();
        context.arc(
            this.width / 2,
            this.height / 2,
            outerRadius,
            0,
            Math.PI * 2
        );
        context.fillStyle = `rgba(38,1,252, ${1 - t})`;
        context.fill();

        // 中间圆
        context.beginPath();
        context.arc(
            this.width / 2,
            this.height / 2,
            radius,
            0,
            Math.PI * 2
        );
        context.fillStyle = 'rgba(38,1,252, 1)';
        context.strokeStyle = 'rgba(38,1,252, .1)';
        // 圆描边宽度动态展示
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

        context.restore();

        // 更新图像的像素数据
        this.data = context.getImageData(
            0,
            0,
            this.context.canvas.width,
            this.context.canvas.height
        );
        return true;
    }
    var custom = new CustomSymbol(new BMapGL.Size(size, size), new BMapGL.Size(size / 2, size / 2));
    var map = new BMapGL.Map('map');
    var point = new BMapGL.Point(116.404, 39.925);
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(true);
    // var marker = new BMapGL.Marker(new BMapGL.Point(116.404, 39.925));
    // map.addOverlay(marker);


    var marker1 = new BMapGL.Marker(new BMapGL.Point(116.404, 39.925), {
        icon: custom,
        enableDragging: false
    });
    // map.addOverlay(marker1);

    function start() {
        custom.isReDraw = true;
        canvasOverlay.isReDraw = true;

    }
    //停止动画
    function stop() {
        custom.isReDraw = false;
        canvasOverlay.isReDraw = false;
    }

    // 自定义canvas
    const canvas = document.createElement('canvas');
    canvas.width = size * 2;
    canvas.height = size * 2;

    function getTextureCanvas() {
        const duration = 1000;
        const t = (performance.now() % duration) / duration;

        const radius = (size / 2) * 0.3;
        const outerRadius = (size / 2) * 0.7 * t + radius;
        const context = canvas.getContext('2d');
        context.save();
        // 2倍图
        context.scale(2, 2);
        // Draw the outer circle.
        context.clearRect(0, 0, size, size);
        context.beginPath();
        context.arc(
            size / 2,
            size / 2,
            outerRadius,
            0,
            Math.PI * 2
        );
        context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
        context.fill();

        // Draw the inner circle.
        context.beginPath();
        context.arc(
            size / 2,
            size / 2,
            radius,
            0,
            Math.PI * 2
        );
        context.fillStyle = 'rgba(255, 100, 100, 1)';
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();
        context.restore();

    }

    let angle = Math.PI / 3;
    let speed = Math.PI / 100;
    let scanBegin = 0;
    let scanEnd = angle;
    // 画布的宽高
    const cWidth = canvas.width;
    const cHeight = canvas.height;
    // 中心点
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    // 半径
    const radius = centerX * 0.9;
    let blob = 50;
    let increase = 0;

    // 绘制雷达扫描
    function getRadarTextureCanvas() {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, cWidth, cHeight);

        var sAngle = scanBegin;
        var eAngle = scanEnd;

        if (sAngle < eAngle) {
            increase = (eAngle - sAngle) / blob;
        } else if (sAngle > eAngle) {
            increase = (Math.PI * 2 - sAngle + eAngle) / blob;
        } else {
            return;
        }

        let angle1 = sAngle;
        let angle2 = sAngle + increase;
        for (let i = 0; i < blob; i++) {
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, angle1, angle2);
            ctx.fillStyle = "rgba(255,101,116," + i / blob + ")";
            ctx.fill();
            angle1 = angle2;
            angle2 = angle1 + increase;
            if (angle2 >= Math.PI * 2) {
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.arc(centerX, centerY, radius, angle1, Math.PI * 2);
                ctx.fillStyle = "rgba(255,101,100," + i / blob + ")";
                angle1 = 0;
                angle2 = angle1 + increase;
            }
        }

        scanBegin += speed;
        scanEnd = scanBegin + angle;
        // 超过阈值变为初始值
        if (scanBegin >= Math.PI * 2) {
            scanBegin = 0;
            scanEnd = scanBegin + angle;
        }
    }
    var pStart = new BMapGL.Point(116.416717, 39.922173);
    var pEnd = new BMapGL.Point(116.426125, 39.929475);
    var bounds = new BMapGL.Bounds(new BMapGL.Point(pStart.lng, pEnd.lat), new BMapGL.Point(pEnd.lng, pStart.lat));
    var canvasOverlay = new BMapGL.GroundOverlay(bounds, {
        type: 'canvas',
        url: canvas,
        opacity: .9,
        isReDraw: true,
        drawHook: getRadarTextureCanvas
    });
    getTextureCanvas();
    // map.addOverlay(canvasOverlay);

    // 雨点的动画
    var STROKE = 0.08,
        TAU = 2.0 * Math.PI,
        TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);

    function circle(ctx, x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, TAU, false);
        ctx.fill();
    }

    function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
        var c = Math.cos(t * TAU),
            s = Math.sin(t * TAU);

        rmax -= rmin;

        circle(
            ctx,
            cx - s * rx,
            cy + c * 0.35 * ry + rmax * 0.5,
            rmin + (1 - c * 0.5) * rmax
        );
    }

    function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
        var i;

        for (i = 5; i--;)
            puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
    }

    function cloudObject(ctx, t, cx, cy, cw, s, color) {
        t /= 30000;

        var a = cw * 0.21,
            b = cw * 0.12,
            c = cw * 0.24,
            d = cw * 0.28;

        ctx.fillStyle = color;
        puffs(ctx, t, cx, cy, a, b, c, d);

        // ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = '#999';
        puffs(ctx, t, cx, cy, a, b, c - s, d - s);
        ctx.globalCompositeOperation = 'source-over';
    }

    function rainObject(ctx, t, cx, cy, cw, s, color) {
        t /= 1350;

        var a = cw * 0.16,
            b = TAU * 11 / 12,
            c = TAU * 7 / 12,
            i, p, x, y;

        ctx.fillStyle = color;

        for (i = 4; i--;) {
            p = (t + i / 4) % 1;
            x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
            y = cy + p * p * cw;
            ctx.beginPath();
            ctx.moveTo(x, y - s * 1.5);
            ctx.arc(x, y, s * 0.75, b, c, false);
            ctx.fill();
        }
    }

    function RAIN(ctx, t, dotColor, clodColor) {
        var w = ctx.canvas.width,
            h = ctx.canvas.height,
            s = Math.min(w, h);

        rainObject(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, dotColor);
        cloudObject(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, clodColor);
    };

    function RainSymbol(_size, _anchor) {
        BMapGL.Symbol.call(this, _size, _anchor);
        this.width = _size.width;
        this.height = _size.height;
        // 需要再addOverlay之前设置true，需要保证纹理大小不变化
        this.isReDraw = true;
    }
    RainSymbol.prototype = new BMapGL.Symbol();
    RainSymbol.prototype.constructor = RainSymbol;
    RainSymbol.prototype.add = function () {
        const canvas = document.createElement('canvas');
        canvas.width = this.width * 2;
        canvas.height = this.height * 2;
        this.context = canvas.getContext('2d');
        // this.isReDraw = false;

    }
    RainSymbol.prototype.render = function (map) {
        this.context.clearRect(0, 0, this.width * 2, this.height * 2);
        var time = Date.now();
        RAIN(this.context, time, '#BFBFBF', '#999');
        this.data = this.context.getImageData(
            0,
            0,
            this.context.canvas.width,
            this.context.canvas.height
        );
        return true;
    }
    var rain_logo = new RainSymbol(new BMapGL.Size(size / 3, size / 3), new BMapGL.Size(size / 10, size / 10));
    var marker2 = new BMapGL.Marker(new BMapGL.Point(116.390, 39.929), {
        icon: rain_logo,
        enableDragging: false
    });
    map.addOverlay(marker2);
}
// addSvgMarker();

var cardsDom;
document.getElementById("cards").addEventListener('load', () => {
    // $("#Card1").click(function (e) {
    //     console.log("e", e)
    // });
    cardsDom = document.getElementById("cards").getSVGDocument();
    let cardsList = cardsDom.getElementById("Cards").children;

    for (let index = 0; index < cardsList.length; index++) {
        const cardEle = cardsList[index];
        cardEle.addEventListener("click", function (e) {
            // console.log("e", e.currentTarget.id)

            // add new card
            if (e.currentTarget.id == "AdditionCard") {
                $("#addCard").css({
                    "display": "block",
                    "opacity": 1
                });
                $("#inputBox").css({
                    "display": "block",
                    // "opacity": 1
                });
                // if (addCardDom) {
                //     let newCard = addCardDom.getElementById("NewCard");
                //     console.log("newCard", newCard);
                // }
            }
        })
        // $(cardEle).click(function(e) {
        //     console.log("e", e)
        // })
    }
}, false)


var addCardDom;
document.getElementById("addCard").addEventListener('load', (e) => {
    console.log("addCard", e)
    // var addCardDom = document.getElementById("addCard").getSVGDocument();
    addCardDom = document.getElementById("addCard").getSVGDocument();

    let closeButton = addCardDom.getElementById("CloseButton");
    closeButton.addEventListener("click", function () {
        $("#addCard").css({
            "display": "none",
            "opacity": 0
        });
        $("#inputBox").css({
            "display": "none",
            "opacity": 0
        });
    });
    $('#inputBox').on('input', function (e) {
        // console.log("input box value", $("#inputBox").val())
        // console.log("card text",addCardDom.getElementById("CardText").innerHTML)
        addCardDom.getElementById("CardText").innerHTML = $("#inputBox").val()
    });
    // let newCard = addCardDom.getElementById("NewCard");
    // console.log("newCard", newCard.getBoundingClientRect().left);
    let confirmButton = addCardDom.getElementById("ConfirmButton");
    confirmButton.addEventListener("click", function () {
        $("#addCard").css({
            "display": "none",
            "opacity": 0
        });
        $("#inputBox").css({
            "display": "none",
            "opacity": 0
        });


        let newCard = addCardDom.getElementById("NewCard");

        console.log("newCard", d3.select(newCard));
        console.log("cardsDom", d3.select(cardsDom).select("#Cards"));
        // d3.select(cardsDom).append(d3.select(newCard));
        let cloneNode = newCard.cloneNode(true);
        // console.log("cloneNode", cloneNode.children[0].getAttribute('width'))

        // console.log("Card1 width", cardsDom.getElementById("Card1").children[0].getAttribute('width'))
        // console.log("Card1 height", cardsDom.getElementById("Card1").children[0].getAttribute('height'))
        let cardWidth = cardsDom.getElementById("Card1").children[0].getAttribute('width');
        let cardHeight = cardsDom.getElementById("Card1").children[0].getAttribute('height');
        cloneNode.children[0].setAttribute('width', cardWidth);
        cloneNode.children[0].setAttribute('height', cardHeight);
        cloneNode.children[0].setAttribute('x', Math.random() * 500);
        cloneNode.children[0].setAttribute('y', Math.random() * 300);
        cloneNode.children[1].setAttribute('width', cardWidth - 20);
        cloneNode.children[1].setAttribute('height', cardHeight - 20);
        cloneNode.children[1].setAttribute('x', parseInt(cloneNode.children[0].getAttribute("x")) + 10);
        cloneNode.children[1].setAttribute('y', parseInt(cloneNode.children[0].getAttribute("y")) + 10);

        console.log("name", cloneNode.querySelectorAll("#CardText")[0]);
        cloneNode.querySelectorAll("#CardText")[0].style.fontSize = "14px";
        cloneNode.id = "newCard1";


        cardsDom.getElementById("Cards").appendChild(cloneNode);
        // gsap.to(addCardDom.getElementById("NewCard"), {
        //     x: -10,
        //     y: -10,
        //     scale: 0.5,
        //     duration: 1
        // })

        console.log("textArea", $("#inputBox").val());
        $("#inputBox").val('');
        addCardDom.getElementById("CardText").innerHTML = $("#inputBox").val();

    });

}, false)

var circleDom;
var currentIndex = 0;

function circleAnimation() {
    for (let index = 0; index < 3; index++) {
        // console.log("name", "Dot" + index )
        document.getElementById("Dot" + (index + 1)).addEventListener("click", function (e) {
            console.log("click dot", "Dot" + (index + 1), e.target);
            // document.getElementById("Selector").setAttribute("cx", e.target.getAttribute("cx"))
            // document.getElementById("Selector").setAttribute("cy", e.target.getAttribute("cy"))
            gsap.to(document.getElementById("Selector"), {
                // cx: e.target.getAttribute("cx"),
                // cy: e.target.getAttribute("cy"), 
                motionPath: {
                    path: "#Path",
                    align: "#Path",
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true,
                    start: currentIndex * 0.5,
                    end: index * 0.5
                },
                // yoyo: true,
                // motionPath: "#Path",
                duration: 0.5
            })
            currentIndex = index;
        })
    }
}
circleAnimation();