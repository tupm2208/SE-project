webpackJsonp(["main.module"],{

/***/ "../../../../../src/app/main/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Page Header -->\r\n  <header class=\"masthead\" style=\"background-image: url('./../assets/img/about-bg.jpg')\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n          <div class=\"page-heading\">\r\n            <h1>About Me</h1>\r\n            <span class=\"subheading\">This is what I do.</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <!-- Main Content -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <hr>"

/***/ }),

/***/ "../../../../../src/app/main/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/main/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Page Header -->\r\n <header class=\"masthead\" style=\"background-image: url('./../assets/img/contact-bg.jpg')\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n        <div class=\"page-heading\">\r\n          <h1>Contact Me</h1>\r\n          <span class=\"subheading\">Have questions? I have answers.</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<!-- Main Content -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n      <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>\r\n      <!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. -->\r\n      <!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! -->\r\n      <!-- To use the contact form, your site must be on a live web host with PHP! The form will not work locally! -->\r\n      <form name=\"sentMessage\" id=\"contactForm\" novalidate>\r\n        <div class=\"control-group\">\r\n          <div class=\"form-group floating-label-form-group controls\">\r\n            <label>Name</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" id=\"name\" required data-validation-required-message=\"Please enter your name.\">\r\n            <p class=\"help-block text-danger\"></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"control-group\">\r\n          <div class=\"form-group floating-label-form-group controls\">\r\n            <label>Email Address</label>\r\n            <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" id=\"email\" required data-validation-required-message=\"Please enter your email address.\">\r\n            <p class=\"help-block text-danger\"></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"control-group\">\r\n          <div class=\"form-group col-xs-12 floating-label-form-group controls\">\r\n            <label>Phone Number</label>\r\n            <input type=\"tel\" class=\"form-control\" placeholder=\"Phone Number\" id=\"phone\" required data-validation-required-message=\"Please enter your phone number.\">\r\n            <p class=\"help-block text-danger\"></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"control-group\">\r\n          <div class=\"form-group floating-label-form-group controls\">\r\n            <label>Message</label>\r\n            <textarea rows=\"5\" class=\"form-control\" placeholder=\"Message\" id=\"message\" required data-validation-required-message=\"Please enter a message.\"></textarea>\r\n            <p class=\"help-block text-danger\"></p>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div id=\"success\"></div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-primary\" id=\"sendMessageButton\">Send</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<hr>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/main/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/home/bref-post/bref-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/home/bref-post/bref-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-preview\">\n  <a href=\"post.html\">\n    <h2 class=\"post-title\">\n      {{post?.title}}\n    </h2>\n    <h3 class=\"post-subtitle\">\n      {{post?.subtitle}}\n    </h3>\n  </a>\n  <p class=\"post-meta\">Posted by\n    <a href=\"#\">{{post?.author.name}}</a> on September 24, 2018</p>\n</div>\n<hr>"

/***/ }),

/***/ "../../../../../src/app/main/home/bref-post/bref-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrefPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BrefPostComponent = /** @class */ (function () {
    function BrefPostComponent() {
    }
    BrefPostComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BrefPostComponent.prototype, "post", void 0);
    BrefPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bref-post',
            template: __webpack_require__("../../../../../src/app/main/home/bref-post/bref-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/home/bref-post/bref-post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BrefPostComponent);
    return BrefPostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <!-- Page Header -->\r\n    <header class=\"masthead\" style=\"background-image: url('./../assets/img/home-bg.jpg')\">\r\n      <div class=\"overlay\"></div>\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n            <div class=\"site-heading\">\r\n              <h1>Clean Blog</h1>\r\n              <span class=\"subheading\">A Blog Theme by Start Bootstrap</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </header>\r\n\r\n    <!-- Main Content -->\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n\r\n          <app-bref-post *ngFor=\"let post of postList\" [post]=\"post\"></app-bref-post>\r\n          <!-- Pager -->\r\n          <div class=\"clearfix\">\r\n            <a class=\"btn btn-primary float-right\" href=\"#\">Older Posts &rarr;</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <hr>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_util_loading_service__ = __webpack_require__("../../../../../src/app/core/util/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_post_service__ = __webpack_require__("../../../../../src/app/core/api/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(loadingService, postService) {
        this.loadingService = loadingService;
        this.postService = postService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingService.show();
        this.postService.list().subscribe(function (data) {
            _this.postList = data;
            console.log(" data: ", data);
            _this.loadingService.hide();
        }, function (error) {
            _this.loadingService.hide();
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/main/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_util_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_2__core_api_post_service__["a" /* PostService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_routes__ = __webpack_require__("../../../../../src/app/main/main.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_post_component__ = __webpack_require__("../../../../../src/app/main/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("../../../../../src/app/main/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("../../../../../src/app/main/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_bref_post_bref_post_component__ = __webpack_require__("../../../../../src/app/main/home/bref-post/bref-post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__main_routes__["a" /* MainRoutes */]),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_bref_post_bref_post_component__["a" /* BrefPostComponent */]
            ]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_post_component__ = __webpack_require__("../../../../../src/app/main/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/main/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("../../../../../src/app/main/contact/contact.component.ts");




var MainRoutes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */]
    }, {
        path: 'post',
        component: __WEBPACK_IMPORTED_MODULE_1__post_post_component__["a" /* PostComponent */]
    }, {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */]
    }, {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */]
    }];


/***/ }),

/***/ "../../../../../src/app/main/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Page Header -->\r\n  <header class=\"masthead\" style=\"background-image: url('./../assets/img/post-bg.jpg')\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n          <div class=\"post-heading\">\r\n            <h1>Man must explore, and this is exploration at its greatest</h1>\r\n            <h2 class=\"subheading\">Problems look mighty small from 150 miles up</h2>\r\n            <span class=\"meta\">Posted by\r\n              <a href=\"#\">Start Bootstrap</a>\r\n              on August 24, 2018</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <!-- Post Content -->\r\n  <article>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n          <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.</p>\r\n\r\n          <p>Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.</p>\r\n\r\n          <p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>\r\n\r\n          <p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>\r\n\r\n          <p>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p>\r\n\r\n          <h2 class=\"section-heading\">The Final Frontier</h2>\r\n\r\n          <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>\r\n\r\n          <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>\r\n\r\n          <blockquote class=\"blockquote\">The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.</blockquote>\r\n\r\n          <p>Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.</p>\r\n\r\n          <h2 class=\"section-heading\">Reaching for the Stars</h2>\r\n\r\n          <p>As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.</p>\r\n\r\n          <a href=\"#\">\r\n            <img class=\"img-fluid\" src=\"./../assets/img/post-sample-image.jpg\" alt=\"\">\r\n          </a>\r\n          <span class=\"caption text-muted\">To go places and do things that have never been done before – that’s what living is all about.</span>\r\n\r\n          <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p>\r\n\r\n          <p>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.</p>\r\n\r\n          <p>Placeholder text by\r\n            <a href=\"http://spaceipsum.com/\">Space Ipsum</a>. Photographs by\r\n            <a href=\"https://www.flickr.com/photos/nasacommons/\">NASA on The Commons</a>.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </article>\r\n\r\n  <hr>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("../../../../../src/app/main/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ })

});
//# sourceMappingURL=main.module.chunk.js.map