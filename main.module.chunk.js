webpackJsonp(["main.module"],{

/***/ "../../../../../src/app/main/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Header -->\r\n<header class=\"masthead\" style=\"background-image: url('assets/img/home-bg.jpg')\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n        <div class=\"site-heading\">\r\n          <h1>Clean Blog</h1>\r\n          <span class=\"subheading\">A Blog Theme by Start Bootstrap</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<!-- Main Content -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n      \r\n      <app-bref-post *ngFor=\"let post of postList\" [post]=\"post\" [routerLink]=\"['/main/post/' + post.ID]\"></app-bref-post>\r\n      <!-- Pager -->\r\n      <div class=\"clearfix\">\r\n         \r\n        <a class=\"btn btn-primary float-left\" [routerLink]=\"['/main/category/', categoryID]\" [queryParams]=\"{page: page - 1}\" queryParamsHandling=\"merge\" *ngIf=\"page!=1\" (click)=\"loadPreviousPage()\">&larr; Newer Posts</a>\r\n          \r\n        <a class=\"btn btn-primary float-right\" *ngIf=\"postList.length == 10\" [routerLink]=\"['/main/category/', categoryID]\" [queryParams]=\"{page: page - -1}\" queryParamsHandling=\"merge\" (click)=\"loadNextPage()\">Older Posts &rarr;</a>\r\n    \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<hr>"

/***/ }),

/***/ "../../../../../src/app/main/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_util_loading_service__ = __webpack_require__("../../../../../src/app/core/util/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_post_service__ = __webpack_require__("../../../../../src/app/core/api/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_api_category_service__ = __webpack_require__("../../../../../src/app/core/api/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(loadingService, postService, categoryService, route, router) {
        this.loadingService = loadingService;
        this.postService = postService;
        this.categoryService = categoryService;
        this.route = route;
        this.router = router;
        this.postList = [];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingService.show();
        this.route.params
            .subscribe(function (params) {
            _this.categoryID = params.id;
            _this.categoryService.list().subscribe(function (data) {
                for (var index = 0; index < data.length; index++) {
                    var element = data[index];
                    if (element.ID == _this.categoryID) {
                        _this.category = element.category;
                        break;
                    }
                }
            });
        });
        this.route.queryParams
            .subscribe(function (params) {
            _this.page = params.page ? params.page : 1;
        });
        this.getPostList();
    };
    CategoryComponent.prototype.getPostList = function () {
        var _this = this;
        var param = {
            page: this.page,
            categoryID: this.categoryID,
        };
        this.postService.getByCategory(param).subscribe(function (data) {
            _this.postList = data;
            _this.numberResults = _this.postList.length;
            _this.loadingService.hide();
        }, function (error) {
            _this.loadingService.hide();
        });
    };
    CategoryComponent.prototype.loadNextPage = function () {
        this.page = this.page - -1;
        this.router.navigate(["main/category", this.categoryID], { queryParams: { topic: this.category, page: this.page, } });
        this.getPostList();
    };
    CategoryComponent.prototype.loadPreviousPage = function () {
        this.page = this.page - 1;
        this.router.navigate(["main/category", this.categoryID], { queryParams: { topic: this.category, page: this.page, } });
        this.getPostList();
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/main/category/category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_util_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_4__core_api_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_5__core_api_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/edit-post/edit-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n    margin-top: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/edit-post/edit-post.component.html":
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"display\" class=\"masthead\" style=\"background-image: url('assets/img/about-bg.jpg')\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n        <div class=\"page-heading\">\r\n          <!-- <h1>About Me</h1>  -->\r\n            <div class=\"form-group\">\r\n            <label for=\"sel1\">Select category:</label>\r\n            <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"registData.categoryID\">\r\n              <option *ngFor=\"let item of categoryList\" [value]=\"item.ID\">{{item.category}}</option>\r\n            </select>\r\n          </div>\r\n          <input type=\"text\" [(ngModel)]=\"registData.title\" style=\"font-size: 3em; width: 100%\" placeholder=\"Enter Title\">\r\n          <span class=\"subheading\">{{registData.title}}.</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<div class=\"container\">\r\n    <!-- <editor [(ngModel)]=\"dataModel\" (ngModelChange)=\"change()\" [init]=\"init\" apiKey=\"npgwie7b48m3u6qrpvlyc5j4zhhliyxf2be8sm6maperqiu7\"></editor>   -->\r\n    <textarea id=\"summernote\" name=\"description\" class=\"form-control\" rows=\"3\"></textarea>\r\n    <button class=\"btn btn-primary pull-left\" [routerLink]=\"[id - 0? '/main/post/'+id: '/main/home']\" >Cancel</button>\r\n    <button style=\"float:right\" class=\"btn btn-primary\" (click)=\"preview()\">Preview</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main/edit-post/edit-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_category_service__ = __webpack_require__("../../../../../src/app/core/api/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_post_service__ = __webpack_require__("../../../../../src/app/core/api/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_api_image_service__ = __webpack_require__("../../../../../src/app/core/api/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_util_loading_service__ = __webpack_require__("../../../../../src/app/core/util/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/core/dialog/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_api_login_service__ = __webpack_require__("../../../../../src/app/core/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_util_storage_service__ = __webpack_require__("../../../../../src/app/core/util/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var EditPostComponent = /** @class */ (function () {
    function EditPostComponent(categoryService, postService, imageService, loading, dialog, loginService, router, route, storageService) {
        this.categoryService = categoryService;
        this.postService = postService;
        this.imageService = imageService;
        this.loading = loading;
        this.dialog = dialog;
        this.loginService = loginService;
        this.router = router;
        this.route = route;
        this.storageService = storageService;
        this.display = false;
        this.registData = {};
        this.categoryList = [];
    }
    EditPostComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $('#summernote').summernote();
                        this.loading.show();
                        return [4 /*yield*/, this.loginService.refreshKey().toPromise().then(function (data) {
                                // this.loading.hide();
                                _this.display = true;
                            }, function (error) {
                                _this.loading.hide();
                            })];
                    case 1:
                        _a.sent();
                        if (!this.display)
                            return [2 /*return*/];
                        this.id = this.route.snapshot.paramMap.get('id');
                        this.registData.categoryID = '1';
                        this.registData.title = '';
                        if (Number(this.id)) {
                            this.initForEdit(this.id);
                        }
                        else {
                            data = this.storageService.get('preview' + this.id);
                            console.log("preview Data: ", data);
                            if (data) {
                                this.registData = data;
                                this.dataModel = this.registData.content;
                                $('#summernote').summernote('code', this.dataModel);
                                console.log("init summernote");
                            }
                            this.loading.hide();
                        }
                        this.categoryService.list().subscribe(function (data) {
                            _this.categoryList = data;
                            _this.display = true;
                            // this.loading.hide();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPostComponent.prototype.initForEdit = function (id) {
        var _this = this;
        this.postService.getById(id).subscribe(function (data) {
            _this.registData = data.data;
            _this.dataModel = _this.registData.content;
            var data1 = _this.storageService.get('preview' + _this.id);
            if (data1) {
                _this.registData = data1;
                _this.dataModel = _this.registData.content;
            }
            $('#summernote').summernote('code', _this.dataModel);
            _this.loading.hide();
        });
    };
    EditPostComponent.prototype.post = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            if (!_this.checkValid()) {
                observer.error();
                observer.complete();
                return;
            }
            _this.loading.show();
            var imgList = $('img');
            var count = 0;
            imgList.toArray().forEach(function (element) {
                if (element.src.indexOf('data') == 0) {
                    count++;
                    console.log("image: ", count);
                    var params = {
                        imageURI: element.src
                    };
                    _this.imageService.post(params).subscribe(function (data) {
                        element.src = data.imageUrl;
                        count--;
                        if (count == 0) {
                            observer.next();
                            observer.complete();
                        }
                    });
                }
            });
            if (!count || !imgList.length) {
                observer.next();
                observer.complete();
            }
        });
    };
    EditPostComponent.prototype.checkValid = function () {
        if (!this.registData.title) {
            this.dialog.showError("Empty title!");
            return false;
        }
        if (!$('#summernote').val()) {
            this.dialog.showError("Empty content!");
            return false;
        }
        return true;
    };
    EditPostComponent.prototype.preview = function () {
        var _this = this;
        this.post().subscribe(function (data) {
            _this.registData.content = $('#summernote').summernote('code');
            _this.storageService.set('preview' + _this.id, _this.registData);
            console.log("pre: ", _this.storageService.get('preview' + _this.id));
            _this.loading.hide();
            _this.router.navigate(['main/preview/' + _this.id]);
            console.log("after upload image: ", _this.registData.content);
        }, function (error) {
            _this.loading.hide();
        });
    };
    EditPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-post',
            template: __webpack_require__("../../../../../src/app/main/edit-post/edit-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/edit-post/edit-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_api_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_4__core_api_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_5__core_api_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_6__core_util_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_7__core_dialog_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_8__core_api_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_9__core_util_storage_service__["a" /* StorageService */]])
    ], EditPostComponent);
    return EditPostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/home/bref-post/bref-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-meta {\r\n    margin-bottom: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/home/bref-post/bref-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-preview\">\r\n  <a>\r\n    <h2 class=\"post-title\">\r\n      {{post?.title}}\r\n    </h2>\r\n    <h5 class=\"post-subtitle\">\r\n      {{post?.subtitle}}&hellip;\r\n    </h5>\r\n  </a>\r\n  <p class=\"post-meta\">Posted by\r\n    <a class=\"authorname-tag\" [routerLink]='[\"/main/profile/\",post?.authorID]'>{{post?.author?.name}}</a> on {{formatService.formatDate(post?.createdAt)}}</p>\r\n    <small class=\"category-tag\"><a href=\"\" [routerLink]='[\"/main/category/\",post?.category?.ID]' [queryParams]=\"{topic: post?.category?.category}\">{{post?.category?.category}}</a></small>\r\n</div>\r\n<hr>"

/***/ }),

/***/ "../../../../../src/app/main/home/bref-post/bref-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrefPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_util_format_service__ = __webpack_require__("../../../../../src/app/core/util/format.service.ts");
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
    function BrefPostComponent(formatService) {
        this.formatService = formatService;
    }
    BrefPostComponent.prototype.ngOnInit = function () {
        $(".category-tag").click(function (e) {
            e.stopPropagation();
        });
        $(".authorname-tag").click(function (e) {
            e.stopPropagation();
        });
        this.post.subtitle = this.post.subtitle ? this.post.subtitle.split(' ').slice(0, 40).join(' ') : "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], BrefPostComponent.prototype, "post", void 0);
    BrefPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bref-post',
            template: __webpack_require__("../../../../../src/app/main/home/bref-post/bref-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/home/bref-post/bref-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_util_format_service__["a" /* FormatService */]])
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

module.exports = "<!-- Page Header -->\r\n<header class=\"masthead\" style=\"background-image: url('assets/img/home-bg.jpg')\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n        <div class=\"site-heading\">\r\n          <h1>Clean Blog</h1>\r\n          <span class=\"subheading\">A Blog Theme by Start Bootstrap</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<!-- Main Content -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n\r\n      <app-bref-post *ngFor=\"let post of postList\" [post]=\"post\" [routerLink]=\"['/main/post/' + post.ID]\"></app-bref-post>\r\n      <!-- Pager -->\r\n      <div class=\"clearfix\">\r\n        <a class=\"btn btn-primary float-left\" [routerLink]=\"['/main/home']\" [queryParams]=\"{page: page - 1}\" queryParamsHandling=\"merge\"\r\n          *ngIf=\"page!=1\">&larr; Newer Posts</a>\r\n        <a class=\"btn btn-primary float-right\" [routerLink]=\"['/main/home']\" [queryParams]=\"{page: page - -1}\" queryParamsHandling=\"merge\"\r\n          *ngIf=\"postList.length == 10\">Older Posts &rarr;</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<hr>"

/***/ }),

/***/ "../../../../../src/app/main/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_util_loading_service__ = __webpack_require__("../../../../../src/app/core/util/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_post_service__ = __webpack_require__("../../../../../src/app/core/api/post.service.ts");
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
    function HomeComponent(loadingService, postService, route) {
        this.loadingService = loadingService;
        this.postService = postService;
        this.route = route;
        this.postList = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingService.show();
        this.route.queryParams
            .subscribe(function (params) {
            _this.page = params.page ? params.page : 1;
            _this.getPostList();
        });
    };
    HomeComponent.prototype.getPostList = function () {
        var _this = this;
        this.postService.list(this.page).subscribe(function (data) {
            _this.postList = data;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_util_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_4__core_api_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_routes__ = __webpack_require__("../../../../../src/app/main/main.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tinymce_tinymce_angular__ = __webpack_require__("../../../../@tinymce/tinymce-angular/esm5/tinymce-tinymce-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_util_util_module__ = __webpack_require__("../../../../../src/app/core/util/util.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_post_component__ = __webpack_require__("../../../../../src/app/main/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_bref_post_bref_post_component__ = __webpack_require__("../../../../../src/app/main/home/bref-post/bref-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_post_edit_post_component__ = __webpack_require__("../../../../../src/app/main/edit-post/edit-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__preview_preview_component__ = __webpack_require__("../../../../../src/app/main/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__("../../../../../src/app/main/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_info_info_component__ = __webpack_require__("../../../../../src/app/main/profile/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_my_posts_my_posts_component__ = __webpack_require__("../../../../../src/app/main/profile/my-posts/my-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_change_pass_change_pass_component__ = __webpack_require__("../../../../../src/app/main/profile/change-pass/change-pass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__post_comment_comment_component__ = __webpack_require__("../../../../../src/app/main/post/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__post_comment_comment_detail_comment_detail_component__ = __webpack_require__("../../../../../src/app/main/post/comment/comment-detail/comment-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_my_posts_sub_post_sub_post_component__ = __webpack_require__("../../../../../src/app/main/profile/my-posts/sub-post/sub-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__search_search_component__ = __webpack_require__("../../../../../src/app/main/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__category_category_component__ = __webpack_require__("../../../../../src/app/main/category/category.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__main_routes__["a" /* MainRoutes */]),
                __WEBPACK_IMPORTED_MODULE_5__tinymce_tinymce_angular__["a" /* EditorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_util_util_module__["a" /* UtilModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_bref_post_bref_post_component__["a" /* BrefPostComponent */],
                __WEBPACK_IMPORTED_MODULE_10__edit_post_edit_post_component__["a" /* EditPostComponent */],
                __WEBPACK_IMPORTED_MODULE_11__preview_preview_component__["a" /* PreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__profile_info_info_component__["a" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__profile_my_posts_my_posts_component__["a" /* MyPostsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__profile_change_pass_change_pass_component__["a" /* ChangePassComponent */],
                __WEBPACK_IMPORTED_MODULE_16__post_comment_comment_component__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_17__post_comment_comment_detail_comment_detail_component__["a" /* CommentDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_18__profile_my_posts_sub_post_sub_post_component__["a" /* SubPostComponent */],
                __WEBPACK_IMPORTED_MODULE_19__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_20__category_category_component__["a" /* CategoryComponent */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_post_edit_post_component__ = __webpack_require__("../../../../../src/app/main/edit-post/edit-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preview_preview_component__ = __webpack_require__("../../../../../src/app/main/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__ = __webpack_require__("../../../../../src/app/main/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__("../../../../../src/app/main/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category_component__ = __webpack_require__("../../../../../src/app/main/category/category.component.ts");







var MainRoutes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */]
    }, {
        path: 'post/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__post_post_component__["a" /* PostComponent */]
    }, {
        path: 'edit-post/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__edit_post_edit_post_component__["a" /* EditPostComponent */]
    }, {
        path: 'preview/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__preview_preview_component__["a" /* PreviewComponent */]
    }, {
        path: 'profile/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__["a" /* ProfileComponent */]
    }, {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__["a" /* ProfileComponent */]
    }, {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_5__search_search_component__["a" /* SearchComponent */]
    }, {
        path: 'category/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__category_category_component__["a" /* CategoryComponent */]
    }];


/***/ }),

/***/ "../../../../../src/app/main/post/comment/comment-detail/comment-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comment-wrap {\r\n    margin-bottom: 1.25rem;\r\n    display: table;\r\n    width: 100%;\r\n    min-height: 5.3125rem;\r\n  }\r\n  \r\n  .photo {\r\n    padding-top: 0.625rem;\r\n    display: table-cell;\r\n    width: 3.5rem;\r\n  }\r\n  \r\n  .photo .avatar {\r\n    height: 2.25rem;\r\n    width: 2.25rem;\r\n    border-radius: 50%;\r\n    background-size: contain;\r\n  }\r\n  \r\n  .comment-block {\r\n    padding: 1rem;\r\n    background-color: #fff;\r\n    display: table-cell;\r\n    vertical-align: top;\r\n    border-radius: 0.1875rem;\r\n    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);\r\n            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);\r\n  }\r\n  \r\n  .comment-block textarea {\r\n    width: 100%;\r\n    resize: none;\r\n  }\r\n  \r\n  .comment-text {\r\n    margin: 15px auto;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .bottom-comment {\r\n    color: #acb4c2;\r\n    font-size: 0.875rem;\r\n  }\r\n  \r\n  .comment-date {\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .comment-actions {\r\n    float: right;\r\n  }\r\n  \r\n  .comment-actions li {\r\n    display: inline;\r\n    margin: -2px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .comment-actions li.complain {\r\n    padding-right: 0.75rem;\r\n    border-right: 1px solid #e1e5eb;\r\n  }\r\n  \r\n  .comment-actions li.reply {\r\n    padding-left: 0.75rem;\r\n    padding-right: 0.125rem;\r\n  }\r\n  \r\n  .comment-actions li:hover {\r\n    color: #0095ff;\r\n  }\r\n  \r\n  .dropdown-button  {\r\n    background: none;\r\n    border: none;\r\n    padding: 0px 10px;\r\n  }\r\n  \r\n  .dropdown-button:focus {\r\n    background: none;\r\n    border: none;\r\n    outline: none;\r\n  }\r\n  \r\n  .dropdown-button:hover {\r\n    background-color: #f7f7f7; \r\n  }\r\n  \r\n  .modal-button {\r\n    font-size: 12px;\r\n    padding: 15px;\r\n  }\r\n  \r\n  .modal-content {\r\n    font-size: 17px;\r\n  }\r\n  \r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/post/comment/comment-detail/comment-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comment-wrap\">\r\n    <div class=\"photo\">\r\n      <img src=\"{{comment?.commentator.profilePicture}}\" class=\"avatar\" alt=\"\">\r\n      \r\n    </div>\r\n  <div class=\"comment-block\" (click)=\"showDropdownButton()\" (mouseenter)=\"showDropdownButton()\" (mouseleave)=\"hideDropdownButton()\">\r\n    <section class=\"comment-header\">\r\n        <a class=\"comment-author\" [routerLink]='[\"/main/profile/\",comment?.authorID]'> {{comment?.commentator.name}}</a>\r\n        <span class=\"dropdown dropdown-arrow\" *ngIf=\"isCommentator\" attr.id=\"comment-block{{comment.ID}}\">\r\n          <button type=\"button\" class=\"dropdown-toggle dropdown-button\" data-toggle=\"dropdown\"> \r\n          </button>\r\n          <div class=\"dropdown-menu\">\r\n            <a class=\"dropdown-item\" (click)=\"isEdit = true\">Edit</a>\r\n            <a class=\"dropdown-item\" data-toggle=\"modal\" id=\"deleteButton\" data-target=\"#deleteModal\" (click)=\"delete()\">Delete</a>\r\n          </div>\r\n        </span>\r\n        <small class=\"comment-date pull-right\">{{formatService.formatDateTime(comment.createdAt)}}</small>\t\r\n    \r\n      </section>\r\n\r\n    <p class=\"comment-text\" *ngIf=\"!isEdit\">{{comment?.content}}</p>\r\n    <div class=\"edit-block\" *ngIf=\"isEdit\">\r\n      <form action=\"\" (keydown)=\"keyDownFunction($event)\" >\r\n          <input type=\"text\"  [(ngModel)]=\"editContent\" name=\"editcontent\" class=\"form-control\" value={{comment?.content}} (focusout)=\"cancelEdit()\">\r\n      </form>\r\n      <!-- attr.id=\"input{{comment.ID}}\" -->\r\n\r\n      <small>Press Esc to <a href=\"\" (click)=\"cancelEdit()\">cancel</a> </small>\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/post/comment/comment-detail/comment-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_util_format_service__ = __webpack_require__("../../../../../src/app/core/util/format.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_util_storage_service__ = __webpack_require__("../../../../../src/app/core/util/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_comment_service__ = __webpack_require__("../../../../../src/app/core/api/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comment_component__ = __webpack_require__("../../../../../src/app/main/post/comment/comment.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentDetailComponent = /** @class */ (function () {
    function CommentDetailComponent(formatService, storageService, commmentComponent, commentService) {
        this.formatService = formatService;
        this.storageService = storageService;
        this.commmentComponent = commmentComponent;
        this.commentService = commentService;
        this.emitDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isCommentator = false; // if the current user is the commentator
        this.isEdit = false; // open and close the comment edit input
    }
    CommentDetailComponent.prototype.ngOnInit = function () {
        this.isCommentator = (this.comment.authorID == this.storageService.get("id")) ? true : false;
        this.editContent = this.comment.content;
        $(document).ready(function () {
            $(".dropdown-arrow").hide();
        });
    };
    // send comment to comment component
    CommentDetailComponent.prototype.delete = function () {
        // return this.commmentComponent.setSelectedComment(this.comment);
        this.emitDelete.emit(this.comment);
    };
    // edit comment
    CommentDetailComponent.prototype.edit = function () {
        var _this = this;
        if (this.editContent == "" || this.editContent == this.comment.content)
            this.cancelEdit();
        else {
            var params = {
                ID: this.comment.ID,
                content: this.editContent
            };
            this.commentService.put(params).subscribe(function (data) {
                if (data.status == true) {
                    _this.comment.content = _this.editContent;
                    _this.isEdit = false;
                }
                else {
                    alert("Failed to update your comment");
                    _this.isEdit = false;
                }
            }, function (err) {
                alert("Failed to update your comment");
                _this.isEdit = false;
            });
        }
    };
    CommentDetailComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.edit();
        }
        if (event.keyCode == 27)
            this.cancelEdit(); // press esc to exit edit mode
    };
    CommentDetailComponent.prototype.showDropdownButton = function () {
        $("#comment-block" + this.comment.ID).show(); // show dropdown button when mouse over
    };
    CommentDetailComponent.prototype.hideDropdownButton = function () {
        $("#comment-block" + this.comment.ID).hide(); // hide dropdown button when mouse leave
    };
    // escape edit mode
    CommentDetailComponent.prototype.cancelEdit = function () {
        this.isEdit = false;
        this.editContent = this.comment.content;
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CommentDetailComponent.prototype, "comment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], CommentDetailComponent.prototype, "emitDelete", void 0);
    CommentDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comment-detail',
            template: __webpack_require__("../../../../../src/app/main/post/comment/comment-detail/comment-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/post/comment/comment-detail/comment-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_util_format_service__["a" /* FormatService */],
            __WEBPACK_IMPORTED_MODULE_2__core_util_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__comment_component__["a" /* CommentComponent */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_comment_service__["a" /* CommentService */]])
    ], CommentDetailComponent);
    return CommentDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/post/comment/comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\ninput, textarea {\r\n    outline: none;\r\n    border: none;\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-font-smoothing: antialiased;\r\n    font-family: \"PT Sans\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\r\n    font-size: 1rem;\r\n    color: #555f77;\r\n    width: 100%;\r\n  }\r\n  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\r\n    color: #ced2db;\r\n  }\r\n  input::-moz-placeholder, textarea::-moz-placeholder {\r\n    color: #ced2db;\r\n  }\r\n  input:-moz-placeholder, textarea:-moz-placeholder {\r\n    color: #ced2db;\r\n  }\r\n  input:-ms-input-placeholder, textarea:-ms-input-placeholder {\r\n    color: #ced2db;\r\n  }\r\n  p {\r\n    line-height: 1.3125rem;\r\n  }\r\n  .comments {\r\n    margin: 2.5rem auto 0;\r\n    max-width: 60.75rem;\r\n    padding: 20px 1.25rem;\r\n    background-color: #f7f7f7;\r\n  }\r\n  .comment-wrap {\r\n    margin-bottom: 1.25rem;\r\n    display: table;\r\n    width: 100%;\r\n    min-height: 5.3125rem;\r\n  }\r\n  .comment-block {\r\n    padding: 1rem;\r\n    background-color: #fff;\r\n    display: table-cell;\r\n    vertical-align: top;\r\n    border-radius: 0.1875rem;\r\n    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);\r\n            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);\r\n  }\r\n  button:disabled,button:hover:disabled {\r\n    letter-spacing: 0px;\r\n    opacity: 0.5;\r\n    background-color: #007bff !important;\r\n    border: none;\r\n  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/post/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-9 col-md-10 mx-auto\">\r\n\r\n\r\n<div class=\"comments\" >\r\n\t\t<div class=\"comment-wrap\">\r\n\t\t\t\t<div class=\"comment-block\">\r\n\t\t\t\t\t\t<form action=\"\" #commentForm=\"ngForm\" >\r\n\t\t\t\t\t\t\t\t<textarea name=\"comment-box\" id=\"comment-box\" [(ngModel)]=\"content\" cols=\"30\" rows=\"3\" [attr.placeholder]=\"isLogin ? 'Add comment...'  : 'Sign in to comment'\" [disabled]=\"!isLogin\"></textarea>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary pull-right\" style=\"padding: 10px; font-size: 0.7em;\" (click)=\"submit(); commentForm.reset();\" [disabled]=\"!isLogin\">Submit</button>\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"comment-details\" *ngFor=\"let comment of comments\">\r\n        <app-comment-detail [comment]=\"comment\" (emitDelete)=\"setSelectedComment(comment)\"></app-comment-detail>\r\n\t\t</div>\r\n\t\t   <!-- Modal -->\r\n\t\t   <div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalCenterTitle\" aria-hidden=\"true\">\r\n          \r\n                <div class=\"modal-dialog\" role=\"document\">\r\n                  <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                      <h6 class=\"modal-title\" id=\"deleteModalLongTitle\">Delete</h6>\r\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"modal-body modal-content\" style=\"font-size: 17px;\">\r\n                      Are you sure you want to delete this comment?\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                      <button type=\"button\" class=\"btn btn-secondary modal-button\" data-dismiss=\"modal\">Close</button>\r\n                      <button type=\"button\" id=\"confirmButton\" class=\"btn btn-primary modal-button\" (click)=\"delete()\" data-dismiss=\"modal\">Delete</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/post/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_util_storage_service__ = __webpack_require__("../../../../../src/app/core/util/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_util_format_service__ = __webpack_require__("../../../../../src/app/core/util/format.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_comment_service__ = __webpack_require__("../../../../../src/app/core/api/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentComponent = /** @class */ (function () {
    function CommentComponent(storageService, formatService, commentService) {
        this.storageService = storageService;
        this.formatService = formatService;
        this.commentService = commentService;
        this.isLogin = false;
        this.isLogin = this.storageService.get("token") ? true : false;
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    CommentComponent.prototype.submit = function () {
        var _this = this;
        if (!this.content)
            return;
        var newComment = {
            content: this.content,
            postID: this.postDetail.ID,
        };
        // get User information as commentator
        var commentator = this.getUserData();
        this.commentService.post(newComment).subscribe(function (dataReturn) {
            // add commentator attribute and bind information to comments array
            dataReturn.data.commentator = commentator;
            _this.comments.unshift(dataReturn.data);
        }, function (err) {
            alert("Something wrong happen!!!");
        });
    };
    CommentComponent.prototype.getUserData = function () {
        return {
            ID: this.storageService.get('id'),
            name: this.storageService.get('username'),
            profilePicture: this.storageService.get('profilePicture'),
        };
    };
    // set the comment to operate on
    CommentComponent.prototype.setSelectedComment = function (comment) {
        this.selectedComment = comment;
    };
    CommentComponent.prototype.delete = function () {
        var _this = this;
        var id = this.selectedComment.ID;
        var index; // position of deleted comment in comments
        for (index = 0; index < this.comments.length; index++) {
            if (this.comments[index].ID == id)
                break;
        }
        this.commentService.delete(id).subscribe(function (data) {
            if (data.status == true)
                _this.comments.splice(index, 1);
            else
                alert("Cannot perform action");
        }, function (err) {
            alert("Cannot perform action");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "postDetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CommentComponent.prototype, "comments", void 0);
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comment',
            template: __webpack_require__("../../../../../src/app/main/post/comment/comment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/post/comment/comment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_util_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__core_util_format_service__["a" /* FormatService */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_comment_service__["a" /* CommentService */]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n@media screen and (max-width: 768px) {\r\n    img {\r\n       max-width: 100%;\r\n        height: auto;\r\n    }\r\n}\r\n.title-small {\r\n    text-align: left;\r\n    word-wrap: break-word;\r\n}\r\n.post-info {\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n.sharing-block {\r\n    margin: 1em auto 2em;\r\n}\r\n/** Social Button CSS **/\r\n.share-btn {\r\n    display: inline-block;\r\n    color: #ffffff;\r\n    border: none;\r\n    padding: 0.5em;\r\n    width: 4em;\r\n    -webkit-box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\r\n            box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\r\n    outline: none;\r\n    text-align: center;\r\n}\r\n.share-btn:hover {\r\n  color: #eeeeee;\r\n}\r\n.share-btn:active {\r\n  position: relative;\r\n  top: 2px;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  color: #e2e2e2;\r\n  outline: none;\r\n}\r\n.sharing-text {\r\n    font-size: 15px;\r\n    margin: 10px auto;\r\n}\r\n.share-btn.twitter     { background: #55acee; }\r\n.share-btn.google-plus { background: #dd4b39; }\r\n.share-btn.facebook    { background: #3B5998; }\r\n.share-btn.stumbleupon { background: #EB4823; }\r\n.share-btn.reddit      { background: #ff5700; }\r\n.share-btn.linkedin    { background: #4875B4; }\r\n.share-btn.email       { background: #444444; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Page Header -->\r\n  <header class=\"masthead\" style=\"background-image: url('assets/img/post-bg.jpg')\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n          <div class=\"post-heading\">\r\n            <h1>{{postDetail.title}}</h1>\r\n            <h2 class=\"subheading\">{{postDetail?.subTitle}}</h2>\r\n            <span class=\"meta\">By\r\n              <a >{{postDetail?.author?.name}}</a>\r\n              on {{formatService.formatDate(postDetail?.createdAt)}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <div class=\"col-lg-7 col-md-10 mx-auto post-info\">\r\n    <h3 class=\"title-small\">{{postDetail?.title}}</h3>\r\n    <small><a href=\"\" [routerLink]=\"['/main/category/' + postDetail?.category?.ID]\" [queryParams]=\"{topic: postDetail?.category?.category}\">Topic: {{postDetail?.category?.category}}</a></small>\r\n    <div>\r\n        <small>Author: </small>\r\n        <div class=\"photo\" >\r\n            <img src=\"{{postDetail?.author?.profilePicture}}\" style=\"width: 4.5rem; height: 5rem;\" class=\"photo\" alt=\"\">\r\n            <span><a [routerLink]='[\"/main/profile/\",postDetail?.authorID]'>{{postDetail?.author?.name}}</a></span>\r\n        </div>\r\n        \r\n    </div>\r\n    \r\n  </div>\r\n\r\n  <div class=\"col-lg-7 col-md-10 mx-auto sharing-block\">\r\n    <!-- Social Button HTML -->\r\n    <p class=\"sharing-text\">Share this to your social media:</p>\r\n    \r\n    <!-- Twitter -->\r\n    <a href=\"https://twitter.com/intent/tweet?text={{postDetail?.title}}&url=\" target=\"_blank\" class=\"share-btn twitter\" (click)=\"share('https://twitter.com/intent/tweet?url=')\">\r\n      <i class=\"fa fa-twitter\"></i>\r\n    </a>\r\n\r\n\r\n    <!-- Google Plus -->\r\n    <a href=\"https://plus.google.com/share?url=\" target=\"_blank\" class=\"share-btn google-plus\" (click)=\"share('https://plus.google.com/share?url=')\">\r\n      <i class=\"fa fa-google-plus\"></i>\r\n    </a>\r\n\r\n    <!-- Facebook -->\r\n    <a href=\"https://www.facebook.com/sharer/sharer.php?u=&t=\" title=\"Share on Facebook\"  target=\"_blank\" class=\"share-btn facebook\" (click)=\"share('https://www.facebook.com/sharer/sharer.php?u=')\">\r\n      <i class=\"fa fa-facebook\"></i>\r\n    </a>\r\n\r\n\r\n    <!-- LinkedIn -->\r\n    <a href=\"http://www.linkedin.com/shareArticle?url={{url}}&title={{postDetail.title}}&source={{url}}\" target=\"_blank\" class=\"share-btn linkedin\">\r\n      <i class=\"fa fa-linkedin\"></i>\r\n    </a>\r\n\r\n  </div>\r\n\r\n  <!-- Post Content -->\r\n  <article>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-9 col-md-10 mx-auto\" id=\"display\"></div>\r\n      </div>\r\n    </div>\r\n  </article>\r\n  \r\n  <app-comment [postDetail]=\"postDetail\" [comments]=\"comments\"></app-comment>\r\n  <hr>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_util_format_service__ = __webpack_require__("../../../../../src/app/core/util/format.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_post_service__ = __webpack_require__("../../../../../src/app/core/api/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_util_loading_service__ = __webpack_require__("../../../../../src/app/core/util/loading.service.ts");
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
    function PostComponent(route, postService, formatService, loading) {
        this.route = route;
        this.postService = postService;
        this.formatService = formatService;
        this.loading = loading;
        this.postDetail = {};
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading.show();
        var id = this.route.snapshot.paramMap.get('id');
        this.postService.getById(id).subscribe(function (data) {
            _this.loading.hide();
            _this.postDetail = data.data;
            _this.comments = _this.postDetail.comments;
            _this.loadContent();
        }, function (error) {
            _this.loading.hide();
        });
        this.url = window.location.href;
    };
    PostComponent.prototype.loadContent = function () {
        $("#display").html(this.postDetail.content);
        $("img").css("max-width", "100%");
        $("img").css("height", "auto");
        $("iframe").css("max-width", "100%");
        $("iframe").css("height", "auto");
    };
    PostComponent.prototype.share = function (baseUrl) {
        window.open(baseUrl + encodeURIComponent(this.url) + "&text=" + this.postDetail.title);
        return false;
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("../../../../../src/app/main/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_2__core_util_format_service__["a" /* FormatService */],
            __WEBPACK_IMPORTED_MODULE_4__core_util_loading_service__["a" /* LoadingService */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/preview/preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title-small {\r\n    text-align: left;\r\n    word-wrap: break-word;\r\n}\r\n.category {\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n.sharing-block {\r\n    margin: 1em auto 2em;\r\n}\r\n/** Social Button CSS **/\r\n.share-btn {\r\n    display: inline-block;\r\n    color: #ffffff;\r\n    border: none;\r\n    padding: 0.5em;\r\n    width: 4em;\r\n    -webkit-box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\r\n            box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\r\n    outline: none;\r\n    text-align: center;\r\n}\r\n.share-btn:hover {\r\n  color: #eeeeee;\r\n}\r\n.share-btn:active {\r\n  position: relative;\r\n  top: 2px;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  color: #e2e2e2;\r\n  outline: none;\r\n}\r\n.sharing-text {\r\n    font-size: 15px;\r\n    margin: 10px auto;\r\n}\r\n.share-btn.twitter     { background: #55acee; }\r\n.share-btn.google-plus { background: #dd4b39; }\r\n.share-btn.facebook    { background: #3B5998; }\r\n.share-btn.stumbleupon { background: #EB4823; }\r\n.share-btn.reddit      { background: #ff5700; }\r\n.share-btn.linkedin    { background: #4875B4; }\r\n.share-btn.email       { background: #444444; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Page Header -->\r\n  <header class=\"masthead\" style=\"background-image: url('assets/img/post-bg.jpg')\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n          <div class=\"post-heading\">\r\n            <h1>{{postDetail?.title}}</h1>\r\n            <h2 class=\"subheading\">{{postDetail?.subTitle}}</h2>\r\n            <span class=\"meta\">Posted by\r\n              <a>{{postDetail?.author?.name}}</a>\r\n              on {{formatService.formatDate(postDetail?.createdAt)}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  \r\n  <div class=\"col-lg-7 col-md-10 mx-auto\">\r\n    <h3 class=\"title-small\">{{postDetail?.title}}</h3>\r\n    <small class=\"category\"><a href=\"\" [routerLink]=\"['/main/category/' + postDetail?.category?.ID]\" [queryParams]=\"{topic: postDetail?.category?.category}\">{{postDetail?.category?.category}}</a></small>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-lg-7 col-md-10 mx-auto sharing-block\">\r\n    <!-- Social Button HTML -->\r\n    <p class=\"sharing-text\">Share this to your social media:</p>\r\n    \r\n    <!-- Twitter -->\r\n    <a href=\"\" target=\"_blank\" class=\"share-btn twitter\" >\r\n      <i class=\"fa fa-twitter\"></i>\r\n    </a>\r\n\r\n\r\n    <!-- Google Plus -->\r\n    <a href=\"\" target=\"_blank\" class=\"share-btn google-plus\">\r\n      <i class=\"fa fa-google-plus\"></i>\r\n    </a>\r\n\r\n    <!-- Facebook -->\r\n    <a href=\"\" title=\"Share on Facebook\"  target=\"_blank\" class=\"share-btn facebook\" >\r\n      <i class=\"fa fa-facebook\"></i>\r\n    </a>\r\n\r\n\r\n    <!-- LinkedIn -->\r\n    <a href=\"\" target=\"_blank\" class=\"share-btn linkedin\">\r\n      <i class=\"fa fa-linkedin\"></i>\r\n    </a>\r\n\r\n  </div>\r\n\r\n\r\n  <!-- Post Content -->\r\n  <article>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-10 mx-auto\" id=\"display\"></div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n          <button class=\"btn btn-primary\" [routerLink]='[\"/main/edit-post/\" + id]'>Back</button>\r\n          <button style=\"float:right\" class=\"btn btn-primary\" (click)=\"post()\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </article>\r\n\r\n  <hr>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main/preview/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_util_format_service__ = __webpack_require__("../../../../../src/app/core/util/format.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_post_service__ = __webpack_require__("../../../../../src/app/core/api/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_util_loading_service__ = __webpack_require__("../../../../../src/app/core/util/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_util_storage_service__ = __webpack_require__("../../../../../src/app/core/util/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/core/dialog/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(route, postService, formatService, loading, storageService, dialog, router) {
        this.route = route;
        this.postService = postService;
        this.formatService = formatService;
        this.loading = loading;
        this.storageService = storageService;
        this.dialog = dialog;
        this.router = router;
        this.postDetail = {};
    }
    PreviewComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.postDetail = this.storageService.get('preview' + this.id);
        if (this.postDetail) {
            $('#display').html(this.postDetail.content);
            this.postDetail.subtitle = this.getSubtitle();
            console.log("postDetail: ", this.postDetail);
        }
        console.log("preview: ", 'preview' + this.id);
        $(".share-btn").click(function (e) {
            e.preventDefault();
            return false;
        });
    };
    PreviewComponent.prototype.post = function () {
        var _this = this;
        this.loading.show();
        if (this.postDetail && this.postDetail.ID) {
            this.postService.edit(this.postDetail).subscribe(function (data) {
                _this.loading.hide();
                console.log("regist post: ", data);
                _this.success();
            }, function (error) {
                _this.loading.hide();
                _this.dialog.showError("Something goes wrong! Try again!");
            });
            return;
        }
        this.postService.post(this.postDetail).subscribe(function (data) {
            _this.loading.hide();
            _this.postDetail = data.data;
            console.log("regist post: ", data);
            _this.success();
        }, function (error) {
            _this.loading.hide();
            _this.dialog.showError("Something goes wrong! Try again!");
        });
    };
    PreviewComponent.prototype.success = function () {
        var _this = this;
        console.log("preview: ", this.postDetail);
        this.dialog.showSuccess("Your new post has been created").subscribe(function (data) {
            _this.storageService.set('preview' + _this.id, null);
            _this.router.navigate(['/main/post/' + _this.postDetail.ID]);
        });
    };
    PreviewComponent.prototype.getSubtitle = function () {
        var str;
        str = $('#display').find('p').filter(function () {
            return ($.trim($(this).text()).length);
        }).first().html();
        return this.strip_html_tags(str);
    };
    PreviewComponent.prototype.strip_html_tags = function (str) {
        if ((str === null) || (str === ''))
            return "";
        else
            str = str.toString();
        return str.replace(/<[^>]*>/g, '');
    };
    PreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-preview',
            template: __webpack_require__("../../../../../src/app/main/preview/preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_2__core_util_format_service__["a" /* FormatService */],
            __WEBPACK_IMPORTED_MODULE_4__core_util_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_5__core_util_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_6__core_dialog_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/profile/change-pass/change-pass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\r\n    margin-top: 10px;\r\n}\r\n.header {\r\n    font-weight: 100;\r\n    font-size: 25px;\r\n}\r\ninput#saveForm:disabled,input#saveForm:disabled:hover {\r\n    letter-spacing: 0px;\r\n    opacity: 0.5;\r\n    background-color: #007bff !important;\r\n  }\r\n.input-label {\r\n      font-size: 17px;\r\n  }\r\n@media screen and (max-width: 990px) {\r\n    \r\n}\r\n@media screen and (max-width: 768px) {\r\n    .header {\r\n        font-size: 20px;\r\n    }\r\n}\r\n@media screen and (max-width: 480px) {\r\n    .header {\r\n        font-size: 20px;\r\n    }\r\n}\r\n@media screen and (max-width: 414px) {\r\n    .header {\r\n        font-size: 20px;\r\n    }\r\n}\r\n@media screen and (max-width: 384px) {\r\n    .header {\r\n        font-size: 20px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/profile/change-pass/change-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col col-lg-8 col-md-8\">\r\n  <div class=\"title\">\r\n    <h3 class=\"header\">Change Password</h3>\r\n  </div>\r\n  \r\n<form #changPasswordForm=\"ngForm\">\r\n  <div class=\"form-group\">\r\n    <label class=\"input-label\" for=\"oldpassword\">Password</label>\r\n    <input [(ngModel)]=\"oldPass\" class=\"form-control\" name=\"oldPassword\" id=\"oldPassword\" type=\"Password\" #oldPassword=\"ngModel\" required minlength=\"6\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"input-label\" for=\"newPass\">New Password</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"pass\"  name=\"password\" id=\"password\" type=\"Password\" #Password=\"ngModel\" required minlength=\"6\">\r\n  </div>\r\n\r\n  <div *ngIf=\"Password.invalid && (Password.dirty || Password.touched)\" class=\"alert alert-danger validation-err\" >\r\n    <div *ngIf=\"Password.errors.required\">\r\n        * Password is required.\r\n    </div>\r\n    \r\n    <div *ngIf=\"Password.errors.minlength\">\r\n        Password must be at least 6 characters long.\r\n    </div>\r\n</div>\r\n  \r\n  <div class=\"form-group\">\r\n    <label class=\"input-label\" for=\"cfnewpass\">Confirm Password</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"confirmPass\" name=\"confirmPassword\" id=\"repassword\" type=\"Password\" appMatchingValidator=\"password\" #confirmPassword=\"ngModel\" required >\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\" class=\"alert alert-danger\" >\r\n     <div *ngIf=\"confirmPassword.errors?.mismatch\">\r\n        Passwords do not match\r\n      </div>\r\n  </div>\r\n  \r\n  <button [disabled]=\"changPasswordForm.invalid\" id=\"saveForm\" class=\"btn btn-primary\" (click)=\"submit(); changPasswordForm.reset(); \">submit</button>\r\n</form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/profile/change-pass/change-pass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/core/dialog/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangePassComponent = /** @class */ (function () {
    function ChangePassComponent(dialogService) {
        this.dialogService = dialogService;
        this.changeF = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ChangePassComponent.prototype.ngOnInit = function () {
    };
    ChangePassComponent.prototype.submit = function () {
        this.user.password = this.oldPass;
        this.user.newPassword = this.pass;
        this.changeF.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ChangePassComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], ChangePassComponent.prototype, "changeF", void 0);
    ChangePassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-pass',
            template: __webpack_require__("../../../../../src/app/main/profile/change-pass/change-pass.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/profile/change-pass/change-pass.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_dialog_dialog_service__["a" /* DialogService */]])
    ], ChangePassComponent);
    return ChangePassComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/profile/info/info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\r\n    width: 100%\r\n}\r\n.title {\r\n    margin-top: 10px;\r\n}\r\n.header {\r\n    font-weight: 100;\r\n    font-size: 25px;\r\n}\r\n@media screen and (max-width: 990px) {\r\n    \r\n}\r\n@media screen and (max-width: 768px) {\r\n    .header {\r\n        font-size: 20px;\r\n    }\r\n}\r\n@media screen and (max-width: 480px) {\r\n    .header {\r\n        font-size: 20px;\r\n    }\r\n}\r\n@media screen and (max-width: 414px) {\r\n    .header {\r\n        font-size: 20px;\r\n    }\r\n}\r\n@media screen and (max-width: 384px) {\r\n    .header {\r\n        font-size: 20px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/profile/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col col-lg-8 col-md-8\">\r\n    <table class=\"table table-user-information\">\r\n      <tbody>\r\n        <tr>\r\n          <td>Name</td>\r\n          <td *ngIf=\"!isEdit\">{{user?.name}}</td>\r\n          <td *ngIf=\"isEdit\"><input class=\"form-control\" [(ngModel)]=\"name\" type=\"text\"></td>\r\n        </tr>\r\n        <tr>\r\n          <td>Email</td>\r\n          <td *ngIf=\"!isEdit\">{{user?.email}}</td>\r\n          <td *ngIf=\"isEdit\"><input class=\"form-control\" [(ngModel)]=\"email\" type=\"text\"></td>\r\n        </tr>\r\n        <tr *ngIf=\"isEdit\">\r\n          <td><button class=\"btn btn-danger\" (click)=\"isEdit=false\">cancel</button></td>\r\n          <td><button class=\"btn btn-primary\" (click)=\"submit()\">submit</button></td>\r\n        </tr>\r\n        <tr *ngIf=\"!isEdit\">\r\n          <td></td>\r\n          <td><button class=\"btn btn-primary\" *ngIf=\"isUser\" (click)=\"isEdit=true\">change</button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/profile/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/core/dialog/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoComponent = /** @class */ (function () {
    function InfoComponent(dialog) {
        this.dialog = dialog;
        this.changeF = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isEdit = false;
        this.isChangePass = false;
        this.re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    InfoComponent.prototype.ngOnInit = function () {
        this.name = this.user.name;
        this.email = this.user.email;
    };
    InfoComponent.prototype.check = function () {
        if (!name) {
            this.dialog.showError('Invalid Name!');
            return false;
        }
        if (!this.re.test(String(this.email))) {
            this.dialog.showError('Invalid Email!');
            return false;
        }
        return true;
    };
    InfoComponent.prototype.submit = function () {
        this.user.name = this.name;
        this.user.email = this.email;
        this.isEdit = false;
        this.changeF.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], InfoComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], InfoComponent.prototype, "isUser", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], InfoComponent.prototype, "changeF", void 0);
    InfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-info',
            template: __webpack_require__("../../../../../src/app/main/profile/info/info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/profile/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_dialog_dialog_service__["a" /* DialogService */]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/profile/my-posts/my-posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/profile/my-posts/my-posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n\r\n      <app-sub-post *ngFor=\"let post of postList\" [post]=\"post\" [isUser]=\"isUser\" (delete)=\"delete($event)\"></app-sub-post>\r\n      <!-- Pager -->\r\n      <div class=\"clearfix\">\r\n        <a class=\"btn btn-primary float-left\" *ngIf=\"page!=1\" (click)=\"newerPost()\">&larr; Newer Posts</a>\r\n        <a class=\"btn btn-primary float-right\" *ngIf=\"postList.length == 10\" (click)=\"olderPost()\">Older Posts &rarr;</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<hr>"

/***/ }),

/***/ "../../../../../src/app/main/profile/my-posts/my-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_util_loading_service__ = __webpack_require__("../../../../../src/app/core/util/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_post_service__ = __webpack_require__("../../../../../src/app/core/api/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_util_storage_service__ = __webpack_require__("../../../../../src/app/core/util/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/core/dialog/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyPostsComponent = /** @class */ (function () {
    function MyPostsComponent(loadingService, postService, route, storageService, dialogService) {
        this.loadingService = loadingService;
        this.postService = postService;
        this.route = route;
        this.storageService = storageService;
        this.dialogService = dialogService;
        this.postList = [];
        this.page = 1;
        this.params = {};
    }
    MyPostsComponent.prototype.ngOnInit = function () {
        this.postList = this.user.posts;
        var tem = JSON.parse(JSON.stringify(this.user));
        delete tem.posts;
        this.postList.forEach(function (element) {
            element.author = tem;
        });
    };
    MyPostsComponent.prototype.getPostList = function () {
        var _this = this;
        this.params.page = this.page;
        this.postService.list(this.params.page).subscribe(function (data) {
            _this.postList = data;
            _this.loadingService.hide();
        }, function (error) {
            _this.loadingService.hide();
        });
    };
    MyPostsComponent.prototype.olderPost = function () {
        this.page++;
        this.loadingService.show();
        this.getPostList();
    };
    MyPostsComponent.prototype.newerPost = function () {
        this.page--;
        this.loadingService.show();
        this.getPostList();
    };
    MyPostsComponent.prototype.delete = function (post) {
        var _this = this;
        this.loadingService.show();
        this.postService.delete(post.ID).subscribe(function (data) {
            _this.dialogService.showSuccess("Your post has been deleted");
            _this.postList.splice(_this.postList.indexOf(post), 1);
            _this.loadingService.hide();
        }, function (error) {
            _this.loadingService.hide();
            _this.dialogService.showError("Failed to delete this post");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MyPostsComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MyPostsComponent.prototype, "isUser", void 0);
    MyPostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-posts',
            template: __webpack_require__("../../../../../src/app/main/profile/my-posts/my-posts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/profile/my-posts/my-posts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_util_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_4__core_api_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__core_util_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_6__core_dialog_dialog_service__["a" /* DialogService */]])
    ], MyPostsComponent);
    return MyPostsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/profile/my-posts/sub-post/sub-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.list-group-item {\r\n    background-color: #dadfe8\r\n}\r\n\r\na.list-group-item:hover {\r\n    background-color: #bccae2\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/profile/my-posts/sub-post/sub-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-preview\">\r\n  \r\n  <div *ngIf=\"isUser\" style=\"position: absolute; right: 0px;\" class=\"dropdown\">\r\n   <a data-toggle=\"dropdown\" style=\"cursor: pointer\"><i class=\"material-icons\">more_horiz</i></a>\r\n    \r\n    <ul class=\"dropdown-menu\" style=\"padding: 0;\">\r\n      <li><a class=\"list-group-item\" [routerLink]=\"['/main/edit-post/' + post.ID]\">edit</a></li>\r\n      <li><a class=\"list-group-item\" (click)=\"deletePost()\">delete</a></li>\r\n    </ul>\r\n  </div>\r\n  <a [routerLink]=\"['/main/post/' + post.ID]\">\r\n    <h2 class=\"post-title\">\r\n      {{post?.title}}\r\n    </h2>\r\n    <h3 class=\"post-subtitle\">\r\n      {{post?.subtitle}}\r\n    </h3>\r\n  </a>\r\n  <p class=\"post-meta\">Posted by\r\n    <a>{{post?.author?.name}}</a> on {{formatService.formatDate(post?.createdAt)}}</p>\r\n</div>\r\n<hr>"

/***/ }),

/***/ "../../../../../src/app/main/profile/my-posts/sub-post/sub-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_util_format_service__ = __webpack_require__("../../../../../src/app/core/util/format.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubPostComponent = /** @class */ (function () {
    function SubPostComponent(formatService) {
        this.formatService = formatService;
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SubPostComponent.prototype.ngOnInit = function () {
    };
    SubPostComponent.prototype.deletePost = function () {
        this.delete.emit(this.post);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SubPostComponent.prototype, "post", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SubPostComponent.prototype, "delete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SubPostComponent.prototype, "isUser", void 0);
    SubPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sub-post',
            template: __webpack_require__("../../../../../src/app/main/profile/my-posts/sub-post/sub-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/profile/my-posts/sub-post/sub-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_util_format_service__["a" /* FormatService */]])
    ], SubPostComponent);
    return SubPostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .card {\r\n    margin-top: 0;\r\n    padding: 0;\r\n    background-color: rgba(214, 224, 226, 0.2);\r\n    -moz-border-top-left-radius:5px;\r\n    border-top-left-radius:5px;\r\n    -moz-border-top-right-radius:5px;\r\n    border-top-right-radius:5px;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n.card.hovercard {\r\n    position: relative;\r\n    padding-top: 0;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    background-color: #fff;\r\n    background-color: rgba(255, 255, 255, 1);\r\n}\r\n.card.hovercard .card-background {\r\n    height: 300px;\r\n}\r\n.card-background img {\r\n    -webkit-filter: blur(25px);\r\n    -moz-filter: blur(25px);\r\n    -o-filter: blur(25px);\r\n    -ms-filter: blur(25px);\r\n    filter: blur(25px);\r\n    margin-left: -100px;\r\n    margin-top: -200px;\r\n    min-width: 130%;\r\n}\r\n.card.hovercard .useravatar {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n.card.hovercard .useravatar img {\r\n    /* width: 100px;\r\n    height: 100px; */\r\n    width: 180px;\r\n    height: 180px;\r\n    border-radius: 50%;\r\n    border: 5px solid rgba(255, 255, 255, 0.5);\r\n    -webkit-transform: translateX(0%) translateY(30%);\r\n            transform: translateX(0%) translateY(30%);\r\n}\r\n.card.hovercard .card-info {\r\n    position: absolute;\r\n    bottom: 14px;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n.card.hovercard .card-info .card-title {\r\n    padding:0 5px;\r\n    font-size: 20px;\r\n    line-height: 1;\r\n    color: #262626;\r\n    background-color: rgba(255, 255, 255, 0.1);\r\n    border-radius: 4px;\r\n}\r\n.card.hovercard .card-info {\r\n    overflow: hidden;\r\n    font-size: 12px;\r\n    line-height: 20px;\r\n    color: #737373;\r\n    text-overflow: ellipsis;\r\n}\r\n.card.hovercard .bottom {\r\n    padding: 0 20px;\r\n    margin-bottom: 17px;\r\n}\r\n.btn-pref .btn {\r\n    -webkit-border-radius:0 !important;\r\n}\r\n.btn {\r\n    padding: 15px 19px;\r\n    letter-spacing: 0;\r\n}\r\n.image-upload {\r\n    position: absolute;\r\n    max-width: 180px;\r\n    height: 180px;\r\n    border: 5px solid rgba(255, 255, 255, 0.5);\r\n    -webkit-transform: translateX(64%) translateY(38%);\r\n    transform: translateX(-100%) translateY(30%);\r\n    opacity: 0;\r\n    z-index: 2;\r\n    border-radius: 0;\r\n}\r\n#nav-navi {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n.nav-tab {\r\n    font-family: 'Libre Franklin', sans-serif;\r\n    /* font-weight: 500; */\r\n    /* padding: 20px; */\r\n}\r\n.body-container {\r\n    margin-top: 20px;\r\n}\r\n@media screen and (max-width: 768px) {\r\n    #nav-navi {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row;\r\n    }\r\n    .nav-tab {\r\n        font-size: 20px;\r\n    }\r\n    #main {\r\n        font-size: 20px;\r\n    }\r\n    .body-container {\r\n        margin-top: 0px;\r\n    }\r\n}\r\n@media screen and (max-width: 480px) {\r\n    .nav-tab{\r\n        font-size: 20px;\r\n    }\r\n    #main {\r\n        font-size: 20px;\r\n    }\r\n    #nav-navi {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row;\r\n    }\r\n    .body-container {\r\n        margin-top: 0px;\r\n    }\r\n}\r\n@media screen and (max-width: 414px) {\r\n    .nav-tab{\r\n        font-size: 20px;\r\n    }\r\n    #main {\r\n        font-size: 20px;\r\n    }\r\n    #nav-navi {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row;\r\n    }\r\n    .body-container {\r\n        margin-top: 0px;\r\n    }\r\n}\r\n@media screen and (max-width: 384px) {\r\n    .nav-tab{\r\n        font-size: 13px;\r\n    }\r\n    #main {\r\n        font-size: 13px;\r\n    }\r\n    #nav-navi {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row;\r\n    }\r\n    .body-container {\r\n        margin-top: 0px;\r\n    }\r\n}\r\n.wrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: (1fr)[12];\r\n        grid-template-columns: repeat(12, 1fr);\r\n    /* grid-template-rows: 40px 100px 40px; \r\n     */\r\n     -ms-grid-rows: auto;\r\n         grid-template-rows: auto;\r\n}\r\n.header{\r\n    grid-column: span 12;\r\n}\r\n.menu {\r\n    grid-column: span 2;\r\n}\r\n.content {\r\n    grid-column: span 10;\r\n}\r\n@media screen and (max-width: 767px) {\r\n    .menu{\r\n        grid-row: span 1;\r\n        grid-column: span 12;\r\n    }\r\n    .content {\r\n        grid-column: span 12;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-sm-12\" style=\"padding: 0!important\">\r\n  <div class=\"card hovercard\">\r\n    <div class=\"card-background\">\r\n      <img class=\"card-bkimg\" alt=\"\" [src]=\"user.profilePicture\">\r\n      <!-- http://lorempixel.com/850/280/people/9/ -->\r\n    </div>\r\n    <div class=\"useravatar\">\r\n      <img alt=\"\" [src]=\"user.profilePicture\">\r\n      <input type=\"file\" *ngIf=\"isUser\" (change)=\"onFileChange($event)\" name=\"update\" class=\"image-upload\" #fileInput accept=\"image/*\" />\r\n    </div>\r\n    \r\n    <div class=\"card-info\"> <span class=\"card-title\">{{user?.name}}</span>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n</div>\r\n</div>\r\n\r\n<div class=\"container wrapper\" >\r\n  <div class=\"menu\">\r\n      <ul id=\"nav-navi\" class=\"nav nav-tabs tabs-left\">\r\n          <li class=\"nav-item\"  [ngClass]=\"type == 1? 'btn-primary': 'btn-default'\" (click)=\"type = 1\" >\r\n            <a class=\"nav-link nav-tab\">Profile</a>\r\n          </li>\r\n          <li class=\"nav-item\"  [ngClass]=\"type == 2? 'btn-primary': 'btn-default'\" (click)=\"type = 2\">\r\n            <a class=\"nav-link nav-tab\">Posts</a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"isUser\" [ngClass]=\"type == 3? 'btn-primary': 'btn-default'\" (click)=\"type = 3\">\r\n            <a class=\"nav-link nav-tab\">Password</a>\r\n          </li>\r\n        </ul>\r\n  </div>\r\n  <div class=\"content\">\r\n      <app-info *ngIf=\"type==1\" [user]=\"user\" [isUser]=\"isUser\" (changeF)=\"post()\"></app-info>\r\n      <app-my-posts  *ngIf=\"type==2\" [user]=\"user\" [isUser]=\"isUser\"></app-my-posts>\r\n      <app-change-pass *ngIf=\"type==3\" [user]=\"user\" (changeF)=\"post()\"></app-change-pass>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_util_loading_service__ = __webpack_require__("../../../../../src/app/core/util/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/core/dialog/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_login_service__ = __webpack_require__("../../../../../src/app/core/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_api_user_service__ = __webpack_require__("../../../../../src/app/core/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_util_storage_service__ = __webpack_require__("../../../../../src/app/core/util/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_api_image_service__ = __webpack_require__("../../../../../src/app/core/api/image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(loading, dialog, loginService, userService, storageService, imageService, route) {
        this.loading = loading;
        this.dialog = dialog;
        this.loginService = loginService;
        this.userService = userService;
        this.storageService = storageService;
        this.imageService = imageService;
        this.route = route;
        this.user = {};
        this.isUser = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.profilePicture = 'assets/img/avatar.png';
        this.route.params // verify user
            .subscribe(function (params) {
            if (!params.id) {
                _this.isUser = true;
                _this.pageUserId = _this.storageService.get('id');
            }
            else {
                if (params.id == _this.storageService.get('id')) {
                    _this.isUser = true;
                    _this.pageUserId = _this.storageService.get('id');
                }
                else {
                    _this.isUser = false;
                    _this.pageUserId = params.id;
                }
            }
        });
        this.loading.show();
        this.userService.get(this.pageUserId).subscribe(function (data) {
            _this.user = data.data;
            _this.type = 1;
            _this.loading.hide();
        }, function (err) {
            _this.dialog.showError();
        });
    };
    ProfileComponent.prototype.post = function () {
        var _this = this;
        this.loading.show();
        this.userService.update(this.user).subscribe(function (data) {
            _this.dialog.showSuccess("Your personal information has been modified successfully!");
            _this.loading.hide();
        }, function (error) {
            _this.dialog.showError('Failed to change!');
            _this.loading.hide();
        });
    };
    ProfileComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            this.uploadData = event.target.files[0];
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(this.uploadData);
            reader_1.onload = function () {
                _this.user.profilePicture = reader_1.result;
                _this.loading.show();
                _this.imageService.post({ imageURI: _this.user.profilePicture }).subscribe(function (data) {
                    _this.user.profilePicture = data.imageUrl;
                    _this.loading.hide();
                }, function (error) {
                    _this.loading.hide();
                });
            };
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/main/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_util_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_3__core_dialog_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_4__core_api_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_5__core_api_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__core_util_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_7__core_api_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".message {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: 300;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Header -->\r\n<header class=\"masthead\" style=\"background-image: url('assets/img/home-bg.jpg')\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n        <div class=\"site-heading\">\r\n          <h1>Clean Blog</h1>\r\n          <span class=\"subheading\">A Blog Theme by Start Bootstrap</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<!-- Main Content -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n      <h2 class=\"message\" *ngIf=\"numberResults\">Matching results for \"{{query}}\"</h2>\r\n      <h2 class=\"message\" *ngIf=\"!numberResults\">Ooops, There is no matching results for \"{{query}}\"</h2>\r\n      <app-bref-post *ngFor=\"let post of postList\" [post]=\"post\" [routerLink]=\"['/main/post/' + post.ID]\"></app-bref-post>\r\n      <!-- Pager -->\r\n      <div class=\"clearfix\">\r\n        <a class=\"btn btn-primary float-left\" [routerLink]=\"['/main/search']\" [queryParams]=\"{page: page - 1}\" queryParamsHandling=\"merge\"\r\n          *ngIf=\"page!=1\">&larr; Newer Posts</a>\r\n        <a class=\"btn btn-primary float-right\" [routerLink]=\"['/main/search']\" [queryParams]=\"{page: page - -1}\" queryParamsHandling=\"merge\"\r\n          *ngIf=\"postList.length == 10\">Older Posts &rarr;</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<hr>"

/***/ }),

/***/ "../../../../../src/app/main/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_util_loading_service__ = __webpack_require__("../../../../../src/app/core/util/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_post_service__ = __webpack_require__("../../../../../src/app/core/api/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(loadingService, postService, route, router) {
        this.loadingService = loadingService;
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.postList = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingService.show();
        this.route.queryParams
            .subscribe(function (params) {
            _this.page = params.page ? params.page : 1;
            _this.query = params.query ? params.query : "";
            _this.getPostList();
            _this.query = _this.query.trim();
            if (!_this.query.length)
                _this.router.navigate(["/"]);
        });
    };
    SearchComponent.prototype.getPostList = function () {
        var _this = this;
        var param = {
            string: this.escape(this.query),
            page: this.page,
        };
        this.postService.search(param).subscribe(function (data) {
            _this.postList = data;
            _this.numberResults = _this.postList.length;
            _this.loadingService.hide();
        }, function (error) {
            _this.loadingService.hide();
        });
    };
    SearchComponent.prototype.escapeHtml = function (input) {
        return input
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/./g, "&period;")
            .replace(/,/g, "&comma;");
    };
    SearchComponent.prototype.escape = function (input) {
        var str = encodeURIComponent(input);
        return str
            .replace("%20", " ");
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/main/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_util_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_4__core_api_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../@tinymce/tinymce-angular/esm5/tinymce-tinymce-angular.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorModule; });
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var Events = (function () {
    function Events() {
        this.onBeforePaste = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onBlur = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onContextMenu = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onCopy = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onCut = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onDblclick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onDrag = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onDragDrop = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onDragEnd = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onDragGesture = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onDragOver = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onDrop = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onFocus = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onFocusIn = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onFocusOut = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onKeyDown = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onKeyPress = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onKeyUp = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onMouseDown = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onMouseEnter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onMouseLeave = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onMouseMove = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onMouseOut = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onMouseOver = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onMouseUp = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onPaste = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onSelectionChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onActivate = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onAddUndo = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onBeforeAddUndo = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onBeforeExecCommand = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onBeforeGetContent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onBeforeRenderUI = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onBeforeSetContent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onClearUndos = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onDeactivate = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onDirty = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onExecCommand = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onGetContent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onHide = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onInit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onLoadContent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onNodeChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onPostProcess = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onPostRender = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onPreInit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onPreProcess = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onProgressState = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onRedo = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onRemove = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onReset = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onSaveContent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onSetAttrib = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onObjectResizeStart = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onObjectResized = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onObjectSelected = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onSetContent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onShow = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onUndo = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onVisualAid = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
    }
    return Events;
}());
Events.propDecorators = {
    "onBeforePaste": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onBlur": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onClick": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onContextMenu": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onCopy": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onCut": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onDblclick": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onDrag": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onDragDrop": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onDragEnd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onDragGesture": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onDragOver": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onDrop": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onFocus": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onFocusIn": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onFocusOut": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onKeyDown": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onKeyPress": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onKeyUp": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onMouseDown": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onMouseEnter": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onMouseLeave": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onMouseMove": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onMouseOut": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onMouseOver": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onMouseUp": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onPaste": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onSelectionChange": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onActivate": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onAddUndo": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onBeforeAddUndo": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onBeforeExecCommand": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onBeforeGetContent": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onBeforeRenderUI": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onBeforeSetContent": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onChange": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onClearUndos": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onDeactivate": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onDirty": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onExecCommand": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onGetContent": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onHide": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onInit": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onLoadContent": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onNodeChange": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onPostProcess": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onPostRender": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onPreInit": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onPreProcess": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onProgressState": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onRedo": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onRemove": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onReset": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onSaveContent": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onSetAttrib": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onObjectResizeStart": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onObjectResized": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onObjectSelected": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onSetContent": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onShow": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onSubmit": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onUndo": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
    "onVisualAid": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
};
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreInit',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var bindHandlers = function (ctx, editor) {
    validEvents.forEach(function (eventName) {
        var /** @type {?} */ eventEmitter = ctx[eventName];
        if (eventEmitter.observers.length > 0) {
            editor.on(eventName.substring(2), ctx.ngZone.run(function () { return function (event) { return eventEmitter.emit({ event: event, editor: editor }); }; }));
        }
    });
};
var unique = 0;
var uuid = function (prefix) {
    var /** @type {?} */ date = new Date();
    var /** @type {?} */ time = date.getTime();
    var /** @type {?} */ random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) { return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins)); };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 * @record
 */
var injectScriptTag = function (scriptId, doc, url, callback) {
    var /** @type {?} */ scriptTag = doc.createElement('script');
    scriptTag.type = 'application/javascript';
    scriptTag.id = scriptId;
    scriptTag.addEventListener('load', callback);
    scriptTag.src = url;
    doc.head.appendChild(scriptTag);
};
var create = function () {
    return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
    };
};
var load = function (state, doc, url, callback) {
    if (state.scriptLoaded) {
        callback();
    }
    else {
        state.listeners.push(callback);
        if (!doc.getElementById(state.scriptId)) {
            injectScriptTag(state.scriptId, doc, url, function () {
                state.listeners.forEach(function (fn) { return fn(); });
                state.scriptLoaded = true;
            });
        }
    }
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : global); };
var getTinymce = function () {
    global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var scriptState = create();
var EDITOR_COMPONENT_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* forwardRef */])(function () { return EditorComponent; }),
    multi: true
};
var EditorComponent = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](EditorComponent, _super);
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     */
    function EditorComponent(elementRef, ngZone) {
        var _this = _super.call(this) || this;
        _this.element = undefined;
        _this.id = '';
        _this.toolbar = null;
        _this.onTouchedCallback = function () { };
        _this.onChangeCallback = function (x) { };
        _this.elementRef = elementRef;
        _this.ngZone = ngZone;
        _this.initialise = _this.initialise.bind(_this);
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    EditorComponent.prototype.writeValue = function (value) {
        this.initialValue = value || this.initialValue;
        if (this.editor && this.editor.initialized && typeof value === 'string') {
            this.editor.setContent(value);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EditorComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    EditorComponent.prototype.setDisabledState = function (isDisabled) {
        if (this.editor) {
            this.editor.setMode(isDisabled ? 'readonly' : 'design');
        }
        else if (isDisabled) {
            this.init = Object.assign({}, this.init, { readonly: true });
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.ngAfterViewInit = function () {
        this.id = this.id || uuid('tiny-react');
        this.inline = typeof this.inline !== 'undefined' ? this.inline : this.init && this.init["inline"];
        this.createElement();
        if (getTinymce() !== null) {
            this.initialise();
        }
        else if (this.element) {
            var /** @type {?} */ doc = this.element.ownerDocument;
            var /** @type {?} */ channel = this.cloudChannel || 'stable';
            var /** @type {?} */ apiKey = this.apiKey || '';
            load(scriptState, doc, "https://cloud.tinymce.com/" + channel + "/tinymce.min.js?apiKey=" + apiKey, this.initialise);
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.ngOnDestroy = function () {
        getTinymce().remove(this.editor);
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.createElement = function () {
        var /** @type {?} */ tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
        this.element = document.createElement(this.inline ? tagName : 'textarea');
        if (this.element) {
            this.element.id = this.id;
            if (isTextarea(this.element)) {
                this.element.style.visibility = 'hidden';
            }
            this.elementRef.nativeElement.appendChild(this.element);
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.initialise = function () {
        var _this = this;
        var /** @type {?} */ finalInit = Object.assign({}, this.init, { selector: "#" + this.id, inline: this.inline, plugins: mergePlugins(this.init && this.init["plugins"], this.plugins), toolbar: this.toolbar || (this.init && this.init["toolbar"]), setup: function (editor) {
                _this.editor = editor;
                editor.on('init', function () {
                    _this.initEditor(editor);
                });
                if (_this.init && typeof _this.init["setup"] === 'function') {
                    _this.init["setup"](editor);
                }
            } });
        if (isTextarea(this.element)) {
            this.element.style.visibility = '';
        }
        this.ngZone.runOutsideAngular(function () {
            getTinymce().init(finalInit);
        });
    };
    /**
     * @param {?} editor
     * @return {?}
     */
    EditorComponent.prototype.initEditor = function (editor) {
        var _this = this;
        if (typeof this.initialValue === 'string') {
            this.ngZone.run(function () { return editor.setContent(_this.initialValue); });
        }
        editor.once('blur', function () { return _this.ngZone.run(function () { return _this.onTouchedCallback(); }); });
        editor.on('setcontent', function (_a) {
            var content = _a.content, format = _a.format;
            return format === 'html' && content && _this.ngZone.run(function () { return _this.onChangeCallback(content); });
        });
        editor.on('change keyup', function () { return _this.ngZone.run(function () { return _this.onChangeCallback(editor.getContent()); }); });
        bindHandlers(this, editor);
    };
    return EditorComponent;
}(Events));
EditorComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */], args: [{
                selector: 'editor',
                template: '<ng-template></ng-template>',
                styles: [':host { display: block; }'],
                providers: [EDITOR_COMPONENT_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
EditorComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgZone */], },
]; };
EditorComponent.propDecorators = {
    "cloudChannel": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
    "apiKey": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
    "init": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
    "id": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
    "initialValue": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
    "inline": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
    "tagName": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
    "plugins": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
    "toolbar": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditorModule = (function () {
    function EditorModule() {
    }
    return EditorModule;
}());
EditorModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */]],
                declarations: [EditorComponent],
                exports: [EditorComponent]
            },] },
];
/** @nocollapse */
EditorModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=tinymce-tinymce-angular.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/filter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/operator/filter.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_filter PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.filter = __WEBPACK_IMPORTED_MODULE_1__operator_filter__["a" /* filter */];
//# sourceMappingURL=filter.js.map 


/***/ })

});
//# sourceMappingURL=main.module.chunk.js.map