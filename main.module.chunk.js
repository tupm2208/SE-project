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

module.exports = "<!-- Page Header -->\n<header class=\"masthead\" style=\"background-image: url('assets/img/home-bg.jpg')\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\n        <div class=\"site-heading\">\n          <h1>Clean Blog</h1>\n          <span class=\"subheading\">A Blog Theme by Start Bootstrap</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<!-- Main Content -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-10 mx-auto\">\n      \n      <app-bref-post *ngFor=\"let post of postList\" [post]=\"post\" [routerLink]=\"['/main/post/' + post.ID]\"></app-bref-post>\n      <!-- Pager -->\n      <div class=\"clearfix\">\n         \n        <a class=\"btn btn-primary float-left\" [routerLink]=\"['/main/category/', categoryID]\" [queryParams]=\"{page: page - 1}\" queryParamsHandling=\"merge\" *ngIf=\"page!=1\" (click)=\"loadPreviousPage()\">&larr; Newer Posts</a>\n          \n        <a class=\"btn btn-primary float-right\" *ngIf=\"postList.length == 10\" [routerLink]=\"['/main/category/', categoryID]\" [queryParams]=\"{page: page - -1}\" queryParamsHandling=\"merge\" (click)=\"loadNextPage()\">Older Posts &rarr;</a>\n    \n      </div>\n    </div>\n  </div>\n</div>\n\n<hr>"

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
exports.push([module.i, "button {\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/edit-post/edit-post.component.html":
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"display\" class=\"masthead\" style=\"background-image: url('assets/img/about-bg.jpg')\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\n        <div class=\"page-heading\">\n          <!-- <h1>About Me</h1>  -->\n            <div class=\"form-group\">\n            <label for=\"sel1\">Select category:</label>\n            <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"registData.categoryID\">\n              <option *ngFor=\"let item of categoryList\" [value]=\"item.ID\">{{item.category}}</option>\n            </select>\n          </div>\n          <input type=\"text\" [(ngModel)]=\"registData.title\" style=\"font-size: 3em; width: 100%\" placeholder=\"Enter Title\">\n          <span class=\"subheading\">{{registData.title}}.</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<div class=\"container\">\n    <!-- <editor [(ngModel)]=\"dataModel\" (ngModelChange)=\"change()\" [init]=\"init\" apiKey=\"npgwie7b48m3u6qrpvlyc5j4zhhliyxf2be8sm6maperqiu7\"></editor>   -->\n    <textarea id=\"summernote\" name=\"description\" class=\"form-control\" rows=\"3\"></textarea>\n    <button class=\"btn btn-primary pull-left\" [routerLink]=\"[id - 0? '/main/post/'+id: '/main/home']\" >Cancel</button>\n    <button style=\"float:right\" class=\"btn btn-primary\" (click)=\"preview()\">Preview</button>\n</div>\n\n"

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
exports.push([module.i, ".post-meta {\n    margin-bottom: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/home/bref-post/bref-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-preview\">\n  <a>\n    <h2 class=\"post-title\">\n      {{post?.title}}\n    </h2>\n    <h5 class=\"post-subtitle\">\n      {{post?.subtitle}}&hellip;\n    </h5>\n  </a>\n  <p class=\"post-meta\">Posted by\n    <a class=\"authorname-tag\" [routerLink]='[\"/main/profile/\",post?.authorID]'>{{post?.author?.name}}</a> on {{formatService.formatDate(post?.createdAt)}}</p>\n    <small class=\"category-tag\"><a href=\"\" [routerLink]='[\"/main/category/\",post?.category?.ID]' [queryParams]=\"{topic: post?.category?.category}\">{{post?.category?.category}}</a></small>\n</div>\n<hr>"

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

module.exports = "<!-- Page Header -->\n<header class=\"masthead\" style=\"background-image: url('assets/img/home-bg.jpg')\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\n        <div class=\"site-heading\">\n          <h1>Clean Blog</h1>\n          <span class=\"subheading\">A Blog Theme by Start Bootstrap</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<!-- Main Content -->\n<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-lg-8 col-md-10 mx-auto\">\n\n      <app-bref-post *ngFor=\"let post of postList\" [post]=\"post\" [routerLink]=\"['/main/post/' + post.ID]\"></app-bref-post>\n      <!-- Pager -->\n      <div class=\"clearfix\">\n        <a class=\"btn btn-primary float-left\" [routerLink]=\"['/main/home']\" [queryParams]=\"{page: page - 1}\" queryParamsHandling=\"merge\"\n          *ngIf=\"page!=1\">&larr; Newer Posts</a>\n        <a class=\"btn btn-primary float-right\" [routerLink]=\"['/main/home']\" [queryParams]=\"{page: page - -1}\" queryParamsHandling=\"merge\"\n          *ngIf=\"postList.length == 10\">Older Posts &rarr;</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<hr>"

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
exports.push([module.i, ".comment-wrap {\n    margin-bottom: 1.25rem;\n    display: table;\n    width: 100%;\n    min-height: 5.3125rem;\n  }\n  \n  .photo {\n    padding-top: 0.625rem;\n    display: table-cell;\n    width: 3.5rem;\n  }\n  \n  .photo .avatar {\n    height: 2.25rem;\n    width: 2.25rem;\n    border-radius: 50%;\n    background-size: contain;\n  }\n  \n  .comment-block {\n    padding: 1rem;\n    background-color: #fff;\n    display: table-cell;\n    vertical-align: top;\n    border-radius: 0.1875rem;\n    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);\n            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);\n  }\n  \n  .comment-block textarea {\n    width: 100%;\n    resize: none;\n  }\n  \n  .comment-text {\n    margin: 15px auto;\n    font-size: 17px;\n  }\n  \n  .bottom-comment {\n    color: #acb4c2;\n    font-size: 0.875rem;\n  }\n  \n  .comment-date {\n    font-size: 14px;\n  }\n  \n  .comment-actions {\n    float: right;\n  }\n  \n  .comment-actions li {\n    display: inline;\n    margin: -2px;\n    cursor: pointer;\n  }\n  \n  .comment-actions li.complain {\n    padding-right: 0.75rem;\n    border-right: 1px solid #e1e5eb;\n  }\n  \n  .comment-actions li.reply {\n    padding-left: 0.75rem;\n    padding-right: 0.125rem;\n  }\n  \n  .comment-actions li:hover {\n    color: #0095ff;\n  }\n  \n  .dropdown-button  {\n    background: none;\n    border: none;\n    padding: 0px 10px;\n  }\n  \n  .dropdown-button:focus {\n    background: none;\n    border: none;\n    outline: none;\n  }\n  \n  .dropdown-button:hover {\n    background-color: #f7f7f7; \n  }\n  \n  .modal-button {\n    font-size: 12px;\n    padding: 15px;\n  }\n  \n  .modal-content {\n    font-size: 17px;\n  }\n  \n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/post/comment/comment-detail/comment-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comment-wrap\">\n    <div class=\"photo\">\n      <img src=\"{{comment?.commentator.profilePicture}}\" class=\"avatar\" alt=\"\">\n      \n    </div>\n  <div class=\"comment-block\" (click)=\"showDropdownButton()\" (mouseenter)=\"showDropdownButton()\" (mouseleave)=\"hideDropdownButton()\">\n    <section class=\"comment-header\">\n        <a class=\"comment-author\" [routerLink]='[\"/main/profile/\",comment?.authorID]'> {{comment?.commentator.name}}</a>\n        <span class=\"dropdown dropdown-arrow\" *ngIf=\"isCommentator\" attr.id=\"comment-block{{comment.ID}}\">\n          <button type=\"button\" class=\"dropdown-toggle dropdown-button\" data-toggle=\"dropdown\"> \n          </button>\n          <div class=\"dropdown-menu\">\n            <a class=\"dropdown-item\" (click)=\"isEdit = true\">Edit</a>\n            <a class=\"dropdown-item\" data-toggle=\"modal\" id=\"deleteButton\" data-target=\"#deleteModal\" (click)=\"delete()\">Delete</a>\n          </div>\n        </span>\n        <small class=\"comment-date pull-right\">{{formatService.formatDateTime(comment.createdAt)}}</small>\t\n    \n      </section>\n\n    <p class=\"comment-text\" *ngIf=\"!isEdit\">{{comment?.content}}</p>\n    <div class=\"edit-block\" *ngIf=\"isEdit\">\n      <form action=\"\" (keydown)=\"keyDownFunction($event)\" >\n          <input type=\"text\"  [(ngModel)]=\"editContent\" name=\"editcontent\" class=\"form-control\" value={{comment?.content}} (focusout)=\"cancelEdit()\">\n      </form>\n      <!-- attr.id=\"input{{comment.ID}}\" -->\n\n      <small>Press Esc to <a href=\"\" (click)=\"cancelEdit()\">cancel</a> </small>\n    </div>\n    \n  </div>\n</div>\n"

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
exports.push([module.i, "\ninput, textarea {\n    outline: none;\n    border: none;\n    display: block;\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: antialiased;\n    font-family: \"PT Sans\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n    font-size: 1rem;\n    color: #555f77;\n    width: 100%;\n  }\n  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n    color: #ced2db;\n  }\n  input::-moz-placeholder, textarea::-moz-placeholder {\n    color: #ced2db;\n  }\n  input:-moz-placeholder, textarea:-moz-placeholder {\n    color: #ced2db;\n  }\n  input:-ms-input-placeholder, textarea:-ms-input-placeholder {\n    color: #ced2db;\n  }\n  p {\n    line-height: 1.3125rem;\n  }\n  .comments {\n    margin: 2.5rem auto 0;\n    max-width: 60.75rem;\n    padding: 20px 1.25rem;\n    background-color: #f7f7f7;\n  }\n  .comment-wrap {\n    margin-bottom: 1.25rem;\n    display: table;\n    width: 100%;\n    min-height: 5.3125rem;\n  }\n  .comment-block {\n    padding: 1rem;\n    background-color: #fff;\n    display: table-cell;\n    vertical-align: top;\n    border-radius: 0.1875rem;\n    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);\n            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);\n  }\n  button:disabled,button:hover:disabled {\n    letter-spacing: 0px;\n    opacity: 0.5;\n    background-color: #007bff !important;\n    border: none;\n  }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/post/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-9 col-md-10 mx-auto\">\n\n\n<div class=\"comments\" >\n\t\t<div class=\"comment-wrap\">\n\t\t\t\t<div class=\"comment-block\">\n\t\t\t\t\t\t<form action=\"\" #commentForm=\"ngForm\" >\n\t\t\t\t\t\t\t\t<textarea name=\"comment-box\" id=\"comment-box\" [(ngModel)]=\"content\" cols=\"30\" rows=\"3\" [attr.placeholder]=\"isLogin ? 'Add comment...'  : 'Sign in to comment'\" [disabled]=\"!isLogin\"></textarea>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary pull-right\" style=\"padding: 10px; font-size: 0.7em;\" (click)=\"submit(); commentForm.reset();\" [disabled]=\"!isLogin\">Submit</button>\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"comment-details\" *ngFor=\"let comment of comments\">\n        <app-comment-detail [comment]=\"comment\" (emitDelete)=\"setSelectedComment(comment)\"></app-comment-detail>\n\t\t</div>\n\t\t   <!-- Modal -->\n\t\t   <div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalCenterTitle\" aria-hidden=\"true\">\n          \n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h6 class=\"modal-title\" id=\"deleteModalLongTitle\">Delete</h6>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body modal-content\" style=\"font-size: 17px;\">\n                      Are you sure you want to delete this comment?\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary modal-button\" data-dismiss=\"modal\">Close</button>\n                      <button type=\"button\" id=\"confirmButton\" class=\"btn btn-primary modal-button\" (click)=\"delete()\" data-dismiss=\"modal\">Delete</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n</div>\n\n</div>\n\n</div>\n\n</div>"

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
exports.push([module.i, "img {\n    max-width: 100%;\n    height: auto;\n}\n@media screen and (max-width: 768px) {\n    img {\n       max-width: 100%;\n        height: auto;\n    }\n}\n.title-small {\n    text-align: left;\n    word-wrap: break-word;\n}\n.post-info {\n    font-family: 'Courier New', Courier, monospace;\n}\n.sharing-block {\n    margin: 1em auto 2em;\n}\n/** Social Button CSS **/\n.share-btn {\n    display: inline-block;\n    color: #ffffff;\n    border: none;\n    padding: 0.5em;\n    width: 4em;\n    -webkit-box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\n            box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\n    outline: none;\n    text-align: center;\n}\n.share-btn:hover {\n  color: #eeeeee;\n}\n.share-btn:active {\n  position: relative;\n  top: 2px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #e2e2e2;\n  outline: none;\n}\n.sharing-text {\n    font-size: 15px;\n    margin: 10px auto;\n}\n.share-btn.twitter     { background: #55acee; }\n.share-btn.google-plus { background: #dd4b39; }\n.share-btn.facebook    { background: #3B5998; }\n.share-btn.stumbleupon { background: #EB4823; }\n.share-btn.reddit      { background: #ff5700; }\n.share-btn.linkedin    { background: #4875B4; }\n.share-btn.email       { background: #444444; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Page Header -->\n  <header class=\"masthead\" style=\"background-image: url('assets/img/post-bg.jpg')\">\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-md-10 mx-auto\">\n          <div class=\"post-heading\">\n            <h1>{{postDetail.title}}</h1>\n            <h2 class=\"subheading\">{{postDetail?.subTitle}}</h2>\n            <span class=\"meta\">By\n              <a >{{postDetail?.author?.name}}</a>\n              on {{formatService.formatDate(postDetail?.createdAt)}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <div class=\"col-lg-7 col-md-10 mx-auto post-info\">\n    <h3 class=\"title-small\">{{postDetail?.title}}</h3>\n    <small><a href=\"\" [routerLink]=\"['/main/category/' + postDetail?.category?.ID]\" [queryParams]=\"{topic: postDetail?.category?.category}\">Topic: {{postDetail?.category?.category}}</a></small>\n    <div>\n        <small>Author: </small>\n        <div class=\"photo\" >\n            <img src=\"{{postDetail?.author?.profilePicture}}\" style=\"width: 4.5rem; height: 5rem;\" class=\"photo\" alt=\"\">\n            <span><a [routerLink]='[\"/main/profile/\",postDetail?.authorID]'>{{postDetail?.author?.name}}</a></span>\n        </div>\n        \n    </div>\n    \n  </div>\n\n  <div class=\"col-lg-7 col-md-10 mx-auto sharing-block\">\n    <!-- Social Button HTML -->\n    <p class=\"sharing-text\">Share this to your social media:</p>\n    \n    <!-- Twitter -->\n    <a href=\"https://twitter.com/intent/tweet?text={{postDetail?.title}}&url=\" target=\"_blank\" class=\"share-btn twitter\" (click)=\"share('https://twitter.com/intent/tweet?url=')\">\n      <i class=\"fa fa-twitter\"></i>\n    </a>\n\n\n    <!-- Google Plus -->\n    <a href=\"https://plus.google.com/share?url=\" target=\"_blank\" class=\"share-btn google-plus\" (click)=\"share('https://plus.google.com/share?url=')\">\n      <i class=\"fa fa-google-plus\"></i>\n    </a>\n\n    <!-- Facebook -->\n    <a href=\"https://www.facebook.com/sharer/sharer.php?u=&t=\" title=\"Share on Facebook\"  target=\"_blank\" class=\"share-btn facebook\" (click)=\"share('https://www.facebook.com/sharer/sharer.php?u=')\">\n      <i class=\"fa fa-facebook\"></i>\n    </a>\n\n\n    <!-- LinkedIn -->\n    <a href=\"http://www.linkedin.com/shareArticle?url={{url}}&title={{postDetail.title}}&source={{url}}\" target=\"_blank\" class=\"share-btn linkedin\">\n      <i class=\"fa fa-linkedin\"></i>\n    </a>\n\n  </div>\n\n  <!-- Post Content -->\n  <article>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-9 col-md-10 mx-auto\" id=\"display\"></div>\n      </div>\n    </div>\n  </article>\n  \n  <app-comment [postDetail]=\"postDetail\" [comments]=\"comments\"></app-comment>\n  <hr>\n\n"

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
exports.push([module.i, ".title-small {\n    text-align: left;\n    word-wrap: break-word;\n}\n.category {\n    font-family: 'Courier New', Courier, monospace;\n}\n.sharing-block {\n    margin: 1em auto 2em;\n}\n/** Social Button CSS **/\n.share-btn {\n    display: inline-block;\n    color: #ffffff;\n    border: none;\n    padding: 0.5em;\n    width: 4em;\n    -webkit-box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\n            box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\n    outline: none;\n    text-align: center;\n}\n.share-btn:hover {\n  color: #eeeeee;\n}\n.share-btn:active {\n  position: relative;\n  top: 2px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #e2e2e2;\n  outline: none;\n}\n.sharing-text {\n    font-size: 15px;\n    margin: 10px auto;\n}\n.share-btn.twitter     { background: #55acee; }\n.share-btn.google-plus { background: #dd4b39; }\n.share-btn.facebook    { background: #3B5998; }\n.share-btn.stumbleupon { background: #EB4823; }\n.share-btn.reddit      { background: #ff5700; }\n.share-btn.linkedin    { background: #4875B4; }\n.share-btn.email       { background: #444444; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Page Header -->\n  <header class=\"masthead\" style=\"background-image: url('assets/img/post-bg.jpg')\">\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-md-10 mx-auto\">\n          <div class=\"post-heading\">\n            <h1>{{postDetail?.title}}</h1>\n            <h2 class=\"subheading\">{{postDetail?.subTitle}}</h2>\n            <span class=\"meta\">Posted by\n              <a>{{postDetail?.author?.name}}</a>\n              on {{formatService.formatDate(postDetail?.createdAt)}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  \n  <div class=\"col-lg-7 col-md-10 mx-auto\">\n    <h3 class=\"title-small\">{{postDetail?.title}}</h3>\n    <small class=\"category\"><a href=\"\" [routerLink]=\"['/main/category/' + postDetail?.category?.ID]\" [queryParams]=\"{topic: postDetail?.category?.category}\">{{postDetail?.category?.category}}</a></small>\n  </div>\n\n\n  <div class=\"col-lg-7 col-md-10 mx-auto sharing-block\">\n    <!-- Social Button HTML -->\n    <p class=\"sharing-text\">Share this to your social media:</p>\n    \n    <!-- Twitter -->\n    <a href=\"\" target=\"_blank\" class=\"share-btn twitter\" >\n      <i class=\"fa fa-twitter\"></i>\n    </a>\n\n\n    <!-- Google Plus -->\n    <a href=\"\" target=\"_blank\" class=\"share-btn google-plus\">\n      <i class=\"fa fa-google-plus\"></i>\n    </a>\n\n    <!-- Facebook -->\n    <a href=\"\" title=\"Share on Facebook\"  target=\"_blank\" class=\"share-btn facebook\" >\n      <i class=\"fa fa-facebook\"></i>\n    </a>\n\n\n    <!-- LinkedIn -->\n    <a href=\"\" target=\"_blank\" class=\"share-btn linkedin\">\n      <i class=\"fa fa-linkedin\"></i>\n    </a>\n\n  </div>\n\n\n  <!-- Post Content -->\n  <article>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-md-10 mx-auto\" id=\"display\"></div>\n      </div>\n    </div>\n    \n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-md-10 mx-auto\">\n          <button class=\"btn btn-primary\" [routerLink]='[\"/main/edit-post/\" + id]'>Back</button>\n          <button style=\"float:right\" class=\"btn btn-primary\" (click)=\"post()\">Submit</button>\n        </div>\n      </div>\n    </div>\n    \n  </article>\n\n  <hr>\n\n"

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
exports.push([module.i, ".title {\n    margin-top: 10px;\n}\n.header {\n    font-weight: 100;\n    font-size: 25px;\n}\ninput#saveForm:disabled,input#saveForm:disabled:hover {\n    letter-spacing: 0px;\n    opacity: 0.5;\n    background-color: #007bff !important;\n  }\n.input-label {\n      font-size: 17px;\n  }\n@media screen and (max-width: 990px) {\n    \n}\n@media screen and (max-width: 768px) {\n    .header {\n        font-size: 20px;\n    }\n}\n@media screen and (max-width: 480px) {\n    .header {\n        font-size: 20px;\n    }\n}\n@media screen and (max-width: 414px) {\n    .header {\n        font-size: 20px;\n    }\n}\n@media screen and (max-width: 384px) {\n    .header {\n        font-size: 20px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/profile/change-pass/change-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col col-lg-8 col-md-8\">\n  <div class=\"title\">\n    <h3 class=\"header\">Change Password</h3>\n  </div>\n  \n<form #changPasswordForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label class=\"input-label\" for=\"oldpassword\">Password</label>\n    <input [(ngModel)]=\"oldPass\" class=\"form-control\" name=\"oldPassword\" id=\"oldPassword\" type=\"Password\" #oldPassword=\"ngModel\" required minlength=\"6\">\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"input-label\" for=\"newPass\">New Password</label>\n    <input class=\"form-control\" [(ngModel)]=\"pass\"  name=\"password\" id=\"password\" type=\"Password\" #Password=\"ngModel\" required minlength=\"6\">\n  </div>\n\n  <div *ngIf=\"Password.invalid && (Password.dirty || Password.touched)\" class=\"alert alert-danger validation-err\" >\n    <div *ngIf=\"Password.errors.required\">\n        * Password is required.\n    </div>\n    \n    <div *ngIf=\"Password.errors.minlength\">\n        Password must be at least 6 characters long.\n    </div>\n</div>\n  \n  <div class=\"form-group\">\n    <label class=\"input-label\" for=\"cfnewpass\">Confirm Password</label>\n    <input class=\"form-control\" [(ngModel)]=\"confirmPass\" name=\"confirmPassword\" id=\"repassword\" type=\"Password\" appMatchingValidator=\"password\" #confirmPassword=\"ngModel\" required >\n  </div>\n\n\n  <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\" class=\"alert alert-danger\" >\n     <div *ngIf=\"confirmPassword.errors?.mismatch\">\n        Passwords do not match\n      </div>\n  </div>\n  \n  <button [disabled]=\"changPasswordForm.invalid\" id=\"saveForm\" class=\"btn btn-primary\" (click)=\"submit(); changPasswordForm.reset(); \">submit</button>\n</form>\n</div>"

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
exports.push([module.i, "input {\n    width: 100%\n}\n.title {\n    margin-top: 10px;\n}\n.header {\n    font-weight: 100;\n    font-size: 25px;\n}\n@media screen and (max-width: 990px) {\n    \n}\n@media screen and (max-width: 768px) {\n    .header {\n        font-size: 20px;\n    }\n}\n@media screen and (max-width: 480px) {\n    .header {\n        font-size: 20px;\n    }\n}\n@media screen and (max-width: 414px) {\n    .header {\n        font-size: 20px;\n    }\n}\n@media screen and (max-width: 384px) {\n    .header {\n        font-size: 20px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/profile/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col col-lg-8 col-md-8\">\n    <table class=\"table table-user-information\">\n      <tbody>\n        <tr>\n          <td>Name</td>\n          <td *ngIf=\"!isEdit\">{{user?.name}}</td>\n          <td *ngIf=\"isEdit\"><input class=\"form-control\" [(ngModel)]=\"name\" type=\"text\"></td>\n        </tr>\n        <tr>\n          <td>Email</td>\n          <td *ngIf=\"!isEdit\">{{user?.email}}</td>\n          <td *ngIf=\"isEdit\"><input class=\"form-control\" [(ngModel)]=\"email\" type=\"text\"></td>\n        </tr>\n        <tr *ngIf=\"isEdit\">\n          <td><button class=\"btn btn-danger\" (click)=\"isEdit=false\">cancel</button></td>\n          <td><button class=\"btn btn-primary\" (click)=\"submit()\">submit</button></td>\n        </tr>\n        <tr *ngIf=\"!isEdit\">\n          <td></td>\n          <td><button class=\"btn btn-primary\" *ngIf=\"isUser\" (click)=\"isEdit=true\">change</button></td>\n        </tr>\n      </tbody>\n    </table>\n</div>\n"

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

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-10 mx-auto\">\n\n      <app-sub-post *ngFor=\"let post of postList\" [post]=\"post\" [isUser]=\"isUser\" (delete)=\"delete($event)\"></app-sub-post>\n      <!-- Pager -->\n      <div class=\"clearfix\">\n        <a class=\"btn btn-primary float-left\" *ngIf=\"page!=1\" (click)=\"newerPost()\">&larr; Newer Posts</a>\n        <a class=\"btn btn-primary float-right\" *ngIf=\"postList.length == 10\" (click)=\"olderPost()\">Older Posts &rarr;</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<hr>"

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
exports.push([module.i, "a.list-group-item {\n    background-color: #dadfe8\n}\n\na.list-group-item:hover {\n    background-color: #bccae2\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/profile/my-posts/sub-post/sub-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-preview\">\n  \n  <div *ngIf=\"isUser\" style=\"position: absolute; right: 0px;\" class=\"dropdown\">\n   <a data-toggle=\"dropdown\" style=\"cursor: pointer\"><i class=\"material-icons\">more_horiz</i></a>\n    \n    <ul class=\"dropdown-menu\" style=\"padding: 0;\">\n      <li><a class=\"list-group-item\" [routerLink]=\"['/main/edit-post/' + post.ID]\">edit</a></li>\n      <li><a class=\"list-group-item\" (click)=\"deletePost()\">delete</a></li>\n    </ul>\n  </div>\n  <a [routerLink]=\"['/main/post/' + post.ID]\">\n    <h2 class=\"post-title\">\n      {{post?.title}}\n    </h2>\n    <h3 class=\"post-subtitle\">\n      {{post?.subtitle}}\n    </h3>\n  </a>\n  <p class=\"post-meta\">Posted by\n    <a>{{post?.author?.name}}</a> on {{formatService.formatDate(post?.createdAt)}}</p>\n</div>\n<hr>"

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
exports.push([module.i, " .card {\n    margin-top: 0;\n    padding: 0;\n    background-color: rgba(214, 224, 226, 0.2);\n    -moz-border-top-left-radius:5px;\n    border-top-left-radius:5px;\n    -moz-border-top-right-radius:5px;\n    border-top-right-radius:5px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n.card.hovercard {\n    position: relative;\n    padding-top: 0;\n    overflow: hidden;\n    text-align: center;\n    background-color: #fff;\n    background-color: rgba(255, 255, 255, 1);\n}\n.card.hovercard .card-background {\n    height: 300px;\n}\n.card-background img {\n    -webkit-filter: blur(25px);\n    -moz-filter: blur(25px);\n    -o-filter: blur(25px);\n    -ms-filter: blur(25px);\n    filter: blur(25px);\n    margin-left: -100px;\n    margin-top: -200px;\n    min-width: 130%;\n}\n.card.hovercard .useravatar {\n    position: absolute;\n    top: 15px;\n    left: 0;\n    right: 0;\n}\n.card.hovercard .useravatar img {\n    /* width: 100px;\n    height: 100px; */\n    width: 180px;\n    height: 180px;\n    border-radius: 50%;\n    border: 5px solid rgba(255, 255, 255, 0.5);\n    -webkit-transform: translateX(0%) translateY(30%);\n            transform: translateX(0%) translateY(30%);\n}\n.card.hovercard .card-info {\n    position: absolute;\n    bottom: 14px;\n    left: 0;\n    right: 0;\n}\n.card.hovercard .card-info .card-title {\n    padding:0 5px;\n    font-size: 20px;\n    line-height: 1;\n    color: #262626;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 4px;\n}\n.card.hovercard .card-info {\n    overflow: hidden;\n    font-size: 12px;\n    line-height: 20px;\n    color: #737373;\n    text-overflow: ellipsis;\n}\n.card.hovercard .bottom {\n    padding: 0 20px;\n    margin-bottom: 17px;\n}\n.btn-pref .btn {\n    -webkit-border-radius:0 !important;\n}\n.btn {\n    padding: 15px 19px;\n    letter-spacing: 0;\n}\n.image-upload {\n    position: absolute;\n    max-width: 180px;\n    height: 180px;\n    border: 5px solid rgba(255, 255, 255, 0.5);\n    -webkit-transform: translateX(64%) translateY(38%);\n    transform: translateX(-100%) translateY(30%);\n    opacity: 0;\n    z-index: 2;\n    border-radius: 0;\n}\n#nav-navi {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.nav-tab {\n    font-family: 'Libre Franklin', sans-serif;\n    /* font-weight: 500; */\n    /* padding: 20px; */\n}\n.body-container {\n    margin-top: 20px;\n}\n@media screen and (max-width: 768px) {\n    #nav-navi {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n    }\n    .nav-tab {\n        font-size: 20px;\n    }\n    #main {\n        font-size: 20px;\n    }\n    .body-container {\n        margin-top: 0px;\n    }\n}\n@media screen and (max-width: 480px) {\n    .nav-tab{\n        font-size: 20px;\n    }\n    #main {\n        font-size: 20px;\n    }\n    #nav-navi {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n    }\n    .body-container {\n        margin-top: 0px;\n    }\n}\n@media screen and (max-width: 414px) {\n    .nav-tab{\n        font-size: 20px;\n    }\n    #main {\n        font-size: 20px;\n    }\n    #nav-navi {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n    }\n    .body-container {\n        margin-top: 0px;\n    }\n}\n@media screen and (max-width: 384px) {\n    .nav-tab{\n        font-size: 13px;\n    }\n    #main {\n        font-size: 13px;\n    }\n    #nav-navi {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n    }\n    .body-container {\n        margin-top: 0px;\n    }\n}\n.wrapper {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: (1fr)[12];\n        grid-template-columns: repeat(12, 1fr);\n    /* grid-template-rows: 40px 100px 40px; \n     */\n     -ms-grid-rows: auto;\n         grid-template-rows: auto;\n}\n.header{\n    grid-column: span 12;\n}\n.menu {\n    grid-column: span 2;\n}\n.content {\n    grid-column: span 10;\n}\n@media screen and (max-width: 767px) {\n    .menu{\n        grid-row: span 1;\n        grid-column: span 12;\n    }\n    .content {\n        grid-column: span 12;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-sm-12\" style=\"padding: 0!important\">\n  <div class=\"card hovercard\">\n    <div class=\"card-background\">\n      <img class=\"card-bkimg\" alt=\"\" [src]=\"user.profilePicture\">\n      <!-- http://lorempixel.com/850/280/people/9/ -->\n    </div>\n    <div class=\"useravatar\">\n      <img alt=\"\" [src]=\"user.profilePicture\">\n      <input type=\"file\" *ngIf=\"isUser\" (change)=\"onFileChange($event)\" name=\"update\" class=\"image-upload\" #fileInput accept=\"image/*\" />\n    </div>\n    \n    <div class=\"card-info\"> <span class=\"card-title\">{{user?.name}}</span>\n\n    </div>\n  </div>\n  <div class=\"container\">\n</div>\n</div>\n\n<div class=\"container wrapper\" >\n  <div class=\"menu\">\n      <ul id=\"nav-navi\" class=\"nav nav-tabs tabs-left\">\n          <li class=\"nav-item\"  [ngClass]=\"type == 1? 'btn-primary': 'btn-default'\" (click)=\"type = 1\" >\n            <a class=\"nav-link nav-tab\">Profile</a>\n          </li>\n          <li class=\"nav-item\"  [ngClass]=\"type == 2? 'btn-primary': 'btn-default'\" (click)=\"type = 2\">\n            <a class=\"nav-link nav-tab\">Posts</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"isUser\" [ngClass]=\"type == 3? 'btn-primary': 'btn-default'\" (click)=\"type = 3\">\n            <a class=\"nav-link nav-tab\">Password</a>\n          </li>\n        </ul>\n  </div>\n  <div class=\"content\">\n      <app-info *ngIf=\"type==1\" [user]=\"user\" [isUser]=\"isUser\" (changeF)=\"post()\"></app-info>\n      <app-my-posts  *ngIf=\"type==2\" [user]=\"user\" [isUser]=\"isUser\"></app-my-posts>\n      <app-change-pass *ngIf=\"type==3\" [user]=\"user\" (changeF)=\"post()\"></app-change-pass>\n  </div>\n\n</div>\n"

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
exports.push([module.i, ".message {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Header -->\n<header class=\"masthead\" style=\"background-image: url('assets/img/home-bg.jpg')\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\n        <div class=\"site-heading\">\n          <h1>Clean Blog</h1>\n          <span class=\"subheading\">A Blog Theme by Start Bootstrap</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<!-- Main Content -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-10 mx-auto\">\n      <h2 class=\"message\" *ngIf=\"numberResults\">Matching results for \"{{query}}\"</h2>\n      <h2 class=\"message\" *ngIf=\"!numberResults\">Ooops, There is no matching results for \"{{query}}\"</h2>\n      <app-bref-post *ngFor=\"let post of postList\" [post]=\"post\" [routerLink]=\"['/main/post/' + post.ID]\"></app-bref-post>\n      <!-- Pager -->\n      <div class=\"clearfix\">\n        <a class=\"btn btn-primary float-left\" [routerLink]=\"['/main/search']\" [queryParams]=\"{page: page - 1}\" queryParamsHandling=\"merge\"\n          *ngIf=\"page!=1\">&larr; Newer Posts</a>\n        <a class=\"btn btn-primary float-right\" [routerLink]=\"['/main/search']\" [queryParams]=\"{page: page - -1}\" queryParamsHandling=\"merge\"\n          *ngIf=\"postList.length == 10\">Older Posts &rarr;</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<hr>"

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
var bindHandlers = function (ctx, editor, initEvent) {
    validEvents.forEach(function (eventName) {
        var /** @type {?} */ eventEmitter = ctx[eventName];
        if (eventEmitter.observers.length > 0) {
            if (eventName === 'onInit') {
                ctx.ngZone.run(function () { return eventEmitter.emit({ event: initEvent, editor: editor }); });
            }
            else {
                editor.on(eventName.substring(2), ctx.ngZone.run(function () { return function (event) { return eventEmitter.emit({ event: event, editor: editor }); }; }));
            }
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
                editor.on('init', function (e) {
                    _this.initEditor(e, editor);
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
     * @param {?} initEvent
     * @param {?} editor
     * @return {?}
     */
    EditorComponent.prototype.initEditor = function (initEvent, editor) {
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
        bindHandlers(this, editor, initEvent);
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