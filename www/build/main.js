webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestarurantListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restaurant_details_restaurant_details__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestarurantListPage = /** @class */ (function () {
    function RestarurantListPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.reviewData = 5;
        this.items = [];
        this.menuItems = [];
        this.selectedItems = [];
    }
    RestarurantListPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad RestarurantListPage');
        this.fnGetAllRestarurant();
    };
    RestarurantListPage.prototype.fnGetAllRestarurant = function () {
        var _this = this;
        this.auth.serviceGet('/restaurants?city=Chicago').then(function (result) {
            _this.dataRes = result;
            console.log('ii i ', _this.dataRes.restaurants);
            if (JSON.stringify(_this.dataRes.restaurants) != '[]') {
                //  this.AllData=this.dataRes.restaurants;
                _this.menuItems = _this.dataRes.restaurants;
                for (var i = 0; i <= _this.menuItems.length - 1; i++) {
                    _this.selectedItems.push(_this.menuItems[i]);
                    _this.items = _this.selectedItems;
                }
            }
            else {
            }
        }, function (err) {
        });
    };
    RestarurantListPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != "") {
            this.items = this.items.filter(function (data) {
                return data.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
    };
    RestarurantListPage.prototype.initializeItems = function () {
        this.items = this.selectedItems;
    };
    RestarurantListPage.prototype.navigate = function (item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__restaurant_details_restaurant_details__["a" /* RestaurantDetailsPage */], { restoItems: item });
    };
    RestarurantListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restarurant-list',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/Sample Code/Ionic3SampleCode/src/pages/restarurant-list/restarurant-list.html"*/'<ion-header>\n    <ion-navbar color="toolbar">\n        <ion-title class="title">Restaurant list</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only color="royal" (click)="navcart()" class="header-btn-cart">\n                <ion-icon name="cart"></ion-icon>\n                <ion-badge class="carts" item-right color="danger">3</ion-badge>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="background">\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Type Item Name">\n    </ion-searchbar>\n    <ion-list *ngFor="let item of items ; let i=index ">\n        <!-- list -->\n        <ion-card style="border-radius: 10px !important;">\n            <ion-item text-wrap (click)="navigate(item)">\n                <!-- item -->\n                <ion-row class="catagory">\n                    <!-- row -->\n                    <ion-col col-4>\n                        <!-- col with 50  width -->\n                        <img src={{item.image_url}} alt="restaurantsName" />\n                    </ion-col>\n                    <ion-col col-8>\n                        <!-- col with 50% width -->\n                        <p class="item-name">{{item.name}}</p>\n                        <p class="item-detail" text-wrap>\n                            <span>{{item.address}}, {{item.area}}, {{item.city}}</span>\n                        </p>\n                        <p class="item-detail">Price :\n                            <span class="item-price">{{currency?.currencySymbol}} {{item.price}}\n                            </span>\n                        </p>\n\n                    </ion-col>\n                </ion-row>\n                <!--end row -->\n            </ion-item>\n        </ion-card>\n        <!-- item -->\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/Sample Code/Ionic3SampleCode/src/pages/restarurant-list/restarurant-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], RestarurantListPage);
    return RestarurantListPage;
}());

//# sourceMappingURL=restarurant-list.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestaurantDetailsPage = /** @class */ (function () {
    function RestaurantDetailsPage(geolocation, navCtrl, navParams) {
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.start = 'Surat, Gujarat';
        this.end = 'Mumbai, Maharastra';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.count = 1;
        this.isLiked = false;
        this.menuItems = {};
        this.menuItems = this.navParams.get("restoItems");
        console.log('restoItems ', this.menuItems);
    }
    RestaurantDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RestaurantDetailsPage');
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currLat = resp.coords.latitude;
            _this.curLng = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        console.log('Error getting this.curLng', this.curLng);
        if (this.currLat != undefined && this.curLng != undefined) {
            this.initMap(this.currLat, this.curLng);
        }
        else {
            this.initMap(21.1864607, 72.8081281);
        }
    };
    RestaurantDetailsPage.prototype.initMap = function (lat, lng) {
        this.start = new google.maps.LatLng(lat, lng);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 12,
            center: { lat: lat, lng: lng }
        });
        this.addMarker();
        this.directionsDisplay.setMap(this.map);
    };
    RestaurantDetailsPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>My Location!</h4>";
        this.addInfoWindow(marker, content);
    };
    RestaurantDetailsPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    RestaurantDetailsPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        this.directionsService.route({
            origin: this.start,
            destination: this.end,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], RestaurantDetailsPage.prototype, "mapElement", void 0);
    RestaurantDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-restaurant-details',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/Sample Code/Ionic3SampleCode/src/pages/restaurant-details/restaurant-details.html"*/'\n<ion-header>\n    <ion-navbar color="toolbar">\n        <ion-title class="title">Restaurant Details</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div class="transparent-card">\n        <div #map id="map"></div>\n    </div>\n    <ion-card class="info-card" >\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="{{menuItems.image_url}}">\n              </ion-thumbnail>\n            <ion-label>\n                <h3>{{menuItems.name}}</h3>\n                <p>{{menuItems.phone}}</p>\n            </ion-label>\n            <button ion-button outline item-end>call</button>\n          </ion-item>\n          <ion-item  no-lines>\n            <ion-icon name="locate"  item-start></ion-icon>\n            <ion-label>\n               34 Miles\n            </ion-label>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-icon name="timer" item-start></ion-icon>\n            <ion-label>\n               2 Hours\n            </ion-label>\n          </ion-item>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/Sample Code/Ionic3SampleCode/src/pages/restaurant-details/restaurant-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavParams */]])
    ], RestaurantDetailsPage);
    return RestaurantDetailsPage;
}());

//# sourceMappingURL=restaurant-details.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/restarurant-list/restarurant-list.module": [
		279,
		1
	],
	"../pages/restaurant-details/restaurant-details.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://opentable.herokuapp.com/api';
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        console.log('Hello ServicProvider Provider');
    }
    AuthProvider.prototype.servicePost = function (action, credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(apiUrl + action, (credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
                console.log(err);
            });
        });
    };
    AuthProvider.prototype.serviceGet = function (action) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(apiUrl + action).subscribe(function (response) {
                // console.log(response);
                resolve(response);
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_restarurant_list_restarurant_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_restaurant_details_restaurant_details__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_restarurant_list_restarurant_list__["a" /* RestarurantListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_restaurant_details_restaurant_details__["a" /* RestaurantDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/restarurant-list/restarurant-list.module#RestarurantListPageModule', name: 'RestarurantListPage', segment: 'restarurant-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurant-details/restaurant-details.module#RestaurantDetailsPageModule', name: 'RestaurantDetailsPage', segment: 'restaurant-details', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_restarurant_list_restarurant_list__["a" /* RestarurantListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_restaurant_details_restaurant_details__["a" /* RestaurantDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_restarurant_list_restarurant_list__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_restarurant_list_restarurant_list__["a" /* RestarurantListPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/Sample Code/Ionic3SampleCode/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/Sample Code/Ionic3SampleCode/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/Sample Code/Ionic3SampleCode/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v3">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/Sample Code/Ionic3SampleCode/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map