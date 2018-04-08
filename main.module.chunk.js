webpackJsonp(["main.module"],{

/***/ "../../../../../src/app/main/edit-post/edit-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/edit-post/edit-post.component.html":
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"display\" class=\"masthead\" style=\"background-image: url('assets/img/about-bg.jpg')\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n        <div class=\"page-heading\">\r\n          <!-- <h1>About Me</h1>  -->\r\n            <div class=\"form-group\">\r\n            <label for=\"sel1\">Select category:</label>\r\n            <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"registData.categoryID\">\r\n              <option *ngFor=\"let item of categoryList\" [value]=\"item.ID\">{{item.category}}</option>\r\n            </select>\r\n          </div>\r\n          <input type=\"text\" [(ngModel)]=\"registData.title\" style=\"font-size: 3em; width: 100%\" placeholder=\"Enter Title\">\r\n          <span class=\"subheading\">{{registData.title}}.</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<div class=\"container\">\r\n  <div id=\"display\" style=\"position: absolute;\r\n    display: block;\r\n    height: 10px!important;\r\n    overflow: overlay;\">\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"display\" class=\"container\">\r\n    <editor [(ngModel)]=\"dataModel\" (ngModelChange)=\"change()\" [init]=\"init\" apiKey=\"npgwie7b48m3u6qrpvlyc5j4zhhliyxf2be8sm6maperqiu7\"></editor>  \r\n    <button class=\"btn btn-primary\" (click)=\"post()\">submit</button>\r\n    <button style=\"float:right\" class=\"btn btn-primary\" (click)=\"preview()\">preview</button>\r\n</div>"

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
        this.init = {
            selector: 'textarea',
            height: 500,
            theme: 'modern',
            plugins: [
                'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                'searchreplace wordcount visualblocks visualchars code fullscreen',
                'nonbreaking save table contextmenu directionality',
                'emoticons template paste textcolor colorpicker textpattern imagetools',
                'image code',
            ],
            toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            toolbar2: 'print preview media | forecolor backcolor emoticons',
            image_advtab: true,
            // enable title field in the Image dialog
            image_title: true,
            // enable automatic uploads of images represented by blob or data URIs
            automatic_uploads: true,
            plugin_preview_width: 650,
            // add custom filepicker only to Image dialog
            file_picker_types: 'image',
            file_picker_callback: function (cb, value, meta) {
                var input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');
                console.log("this: ", this);
                input.onchange = function (e) {
                    console.log("this.file: ", cb, value, meta);
                    var file = e.target.files[0];
                    var reader = new FileReader();
                    reader.onload = function () {
                        var id = 'blobid' + (new Date()).getTime();
                        var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                        var base64 = reader.result.split(',')[1];
                        var blobInfo = blobCache.create(id, file, base64);
                        blobCache.add(blobInfo);
                        // call the callback and populate the Title field with the file name
                        cb(blobInfo.blobUri(), { title: file.name });
                    };
                    reader.readAsDataURL(file);
                };
                input.click();
            }
        };
    }
    EditPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading.show();
        this.loginService.refreshKey().subscribe(function (data) {
            _this.loading.hide();
            _this.display = true;
        }, function (error) {
            _this.loading.hide();
        });
        var id = this.route.snapshot.paramMap.get('id');
        this.registData.categoryID = '1';
        this.registData.title = '';
        if (Number(id)) {
            this.initForEdit(id);
        }
        else {
            var data = this.storageService.get('preview');
            console.log("preview Data: ", data);
            setTimeout(function () {
                $("#display").html(_this.dataModel);
            }, 50);
            if (data) {
                this.registData = data;
                this.dataModel = this.registData.content;
            }
        }
        this.categoryService.list().subscribe(function (data) {
            _this.categoryList = data;
            _this.display = true;
            _this.loading.hide();
        });
    };
    EditPostComponent.prototype.initForEdit = function (id) {
        var _this = this;
        this.postService.getById(id).subscribe(function (data) {
            _this.registData = data.data;
            _this.dataModel = _this.registData.content;
            _this.loading.hide();
        });
    };
    EditPostComponent.prototype.change = function () {
        $("#display").html(this.dataModel);
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
    EditPostComponent.prototype.regist = function () {
        var _this = this;
        this.post().subscribe(function (data) {
            _this.registData.content = $('#display').html();
            if (_this.registData.ID) {
                _this.postService.edit(_this.registData).subscribe(function (data) {
                    _this.loading.hide();
                    console.log("regist post: ", data);
                    _this.success();
                }, function (error) {
                    _this.loading.hide();
                    _this.dialog.showError("Something goes wrong! Try again!");
                });
                return;
            }
            _this.postService.post(_this.registData).subscribe(function (data) {
                _this.loading.hide();
                _this.registData = data.data;
                console.log("regist post: ", data);
                _this.success();
            }, function (error) {
                _this.loading.hide();
                _this.dialog.showError("Something goes wrong! Try again!");
            });
        });
    };
    EditPostComponent.prototype.success = function () {
        var _this = this;
        this.dialog.showSuccess().subscribe(function (data) {
            _this.router.navigate(['/main/post/' + _this.registData.ID]);
        });
    };
    EditPostComponent.prototype.checkValid = function () {
        if (!this.registData.title) {
            this.dialog.showError("Empty title!");
            return false;
        }
        if (!this.dataModel) {
            this.dialog.showError("Empty content!");
            return false;
        }
        return true;
    };
    EditPostComponent.prototype.preview = function () {
        var _this = this;
        this.post().subscribe(function (data) {
            _this.registData.content = $('#display').html();
            _this.storageService.set('preview', _this.registData);
            _this.loading.hide();
            _this.router.navigate(['main/preview']);
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/home/bref-post/bref-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-preview\">\n  <a>\n    <h2 class=\"post-title\">\n      {{post?.title}}\n    </h2>\n    <h3 class=\"post-subtitle\">\n      {{post?.subtitle}}\n    </h3>\n  </a>\n  <p class=\"post-meta\">Posted by\n    <a>{{post?.author?.name}}</a> on {{formatService.formatDate(post?.createdAt)}}</p>\n</div>\n<hr>"

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

module.exports = "<!-- Page Header -->\r\n<header class=\"masthead\" style=\"background-image: url('assets/img/home-bg.jpg')\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n        <div class=\"site-heading\">\r\n          <h1>Clean Blog</h1>\r\n          <span class=\"subheading\">A Blog Theme by Start Bootstrap</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<!-- Main Content -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n\r\n      <app-bref-post *ngFor=\"let post of postList\" [post]=\"post\" [routerLink]=\"['/main/post/' + post.ID]\"></app-bref-post>\r\n      <!-- Pager -->\r\n      <div class=\"clearfix\">\r\n        <a class=\"btn btn-primary float-left\" [routerLink]=\"['/main/home']\" [queryParams]=\"{page: page - 1}\" queryParamsHandling=\"merge\"\r\n          *ngIf=\"page!=1\">&larr; Newer Posts</a>\r\n        <a class=\"btn btn-primary float-right\" [routerLink]=\"['/main/home']\" [queryParams]=\"{page: page - -1}\" queryParamsHandling=\"merge\"\r\n          *ngIf=\"postList.length == 10\">Older Posts &rarr;</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<hr>"

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
            console.log("page: ", params.page, _this.page);
            _this.getPostList();
        });
    };
    HomeComponent.prototype.getPostList = function () {
        var _this = this;
        this.postService.list(this.page).subscribe(function (data) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_post_component__ = __webpack_require__("../../../../../src/app/main/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_bref_post_bref_post_component__ = __webpack_require__("../../../../../src/app/main/home/bref-post/bref-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_post_edit_post_component__ = __webpack_require__("../../../../../src/app/main/edit-post/edit-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__preview_preview_component__ = __webpack_require__("../../../../../src/app/main/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("../../../../../src/app/main/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_info_info_component__ = __webpack_require__("../../../../../src/app/main/profile/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_my_posts_my_posts_component__ = __webpack_require__("../../../../../src/app/main/profile/my-posts/my-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_change_pass_change_pass_component__ = __webpack_require__("../../../../../src/app/main/profile/change-pass/change-pass.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_bref_post_bref_post_component__["a" /* BrefPostComponent */],
                __WEBPACK_IMPORTED_MODULE_9__edit_post_edit_post_component__["a" /* EditPostComponent */],
                __WEBPACK_IMPORTED_MODULE_10__preview_preview_component__["a" /* PreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__profile_info_info_component__["a" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__profile_my_posts_my_posts_component__["a" /* MyPostsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__profile_change_pass_change_pass_component__["a" /* ChangePassComponent */]
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
        path: 'preview',
        component: __WEBPACK_IMPORTED_MODULE_3__preview_preview_component__["a" /* PreviewComponent */]
    }, {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__["a" /* ProfileComponent */]
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

module.exports = "  <!-- Page Header -->\r\n  <header class=\"masthead\" style=\"background-image: url('assets/img/post-bg.jpg')\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n          <div class=\"post-heading\">\r\n            <h1>{{postDetail.title}}</h1>\r\n            <h2 class=\"subheading\">{{postDetail?.subTitle}}</h2>\r\n            <span class=\"meta\">Posted by\r\n              <a>{{postDetail?.author?.name}}</a>\r\n              on {{formatService.formatDate(postDetail?.createdAt)}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <!-- Post Content -->\r\n  <article>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-10 mx-auto\" id=\"display\"></div>\r\n      </div>\r\n    </div>\r\n  </article>\r\n\r\n  <hr>\r\n\r\n"

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
        console.log("id: ", id);
        this.postService.getById(id).subscribe(function (data) {
            console.log("post: ", id, data);
            _this.loading.hide();
            _this.postDetail = data.data;
            setTimeout(function () {
                $("#display").html(_this.postDetail.content);
            }, 50);
        }, function (error) {
            _this.loading.hide();
        });
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Page Header -->\r\n  <header class=\"masthead\" style=\"background-image: url('assets/img/post-bg.jpg')\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n          <div class=\"post-heading\">\r\n            <h1>{{postDetail?.title}}</h1>\r\n            <h2 class=\"subheading\">{{postDetail?.subTitle}}</h2>\r\n            <span class=\"meta\">Posted by\r\n              <a>{{postDetail?.author?.name}}</a>\r\n              on {{formatService.formatDate(postDetail?.createdAt)}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <!-- Post Content -->\r\n  <article>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-10 mx-auto\" id=\"display\"></div>\r\n      </div>\r\n    </div>\r\n    <button class=\"btn btn-primary\" routerLink=\"/main/edit-post/0\">back</button>\r\n    <button style=\"float:right\" class=\"btn btn-primary\" (click)=\"post()\">Post</button>\r\n  </article>\r\n\r\n  <hr>\r\n\r\n"

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
        this.postDetail = this.storageService.get('preview');
        if (this.postDetail)
            $('#display').html(this.postDetail.content);
        console.log("preview: ", this.postDetail);
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
        this.dialog.showSuccess().subscribe(function (data) {
            _this.storageService.set('preview', null);
            _this.router.navigate(['/main/post/' + _this.postDetail.ID]);
        });
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/profile/change-pass/change-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" col-md-12 col-lg-12 \">\n  <table class=\"table table-user-information\">\n    <tbody>\n      <tr>\n        <td>Old Pass</td>\n        <td><input [(ngModel)]=\"oldPass\" name=\"oldpass\" type=\"password\"></td>\n      </tr>\n      <tr>\n        <td>New Pass</td>\n        <td><input [(ngModel)]=\"pass\" name=\"newpass\" type=\"password\"></td>\n      </tr>\n      <tr>\n        <td>Confirm New Pass</td>\n        <td><input [(ngModel)]=\"cfPass\" name=\"cfnewpass\" type=\"password\"></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td><button class=\"btn btn-primary\" (click)=\"submit()\">submit</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

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
        if (!this.check())
            return;
        this.user.password = this.oldPass;
        this.user.newPassword = this.pass;
        this.changeF.emit();
    };
    ChangePassComponent.prototype.check = function () {
        if (this.pass != this.cfPass) {
            this.dialogService.showError("New Pass doens't match the cf one!");
            return false;
        }
        return true;
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
exports.push([module.i, "input {\r\n    width: 100%\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/profile/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" col-md-12 col-lg-12 \">\n  <table class=\"table table-user-information\">\n    <tbody>\n      <tr>\n        <td>Name</td>\n        <td *ngIf=\"!isEdit\">{{user?.name}}</td>\n        <td *ngIf=\"isEdit\"><input [(ngModel)]=\"name\" type=\"text\"></td>\n      </tr>\n      <tr>\n        <td>Email</td>\n        <td *ngIf=\"!isEdit\">{{user?.email}}</td>\n        <td *ngIf=\"isEdit\"><input [(ngModel)]=\"email\" type=\"text\"></td>\n      </tr>\n      <tr *ngIf=\"isEdit\">\n        <td><button class=\"btn btn-danger\" (click)=\"isEdit=false\">cancel</button></td>\n        <td><button class=\"btn btn-primary\" (click)=\"submit()\">submit</button></td>\n      </tr>\n      <tr *ngIf=\"!isEdit\">\n        <td></td>\n        <td><button class=\"btn btn-primary\" (click)=\"isEdit=true\">change</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

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

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-10 mx-auto\">\n\n      <app-bref-post *ngFor=\"let post of postList\" [post]=\"post\" [routerLink]=\"['/main/post/' + post.ID]\"></app-bref-post>\n      <!-- Pager -->\n      <div class=\"clearfix\">\n        <a class=\"btn btn-primary float-left\" *ngIf=\"page!=1\" (click)=\"newerPost()\">&larr; Newer Posts</a>\n        <a class=\"btn btn-primary float-right\" *ngIf=\"postList.length == 10\" (click)=\"olderPost()\">Older Posts &rarr;</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<hr>"

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
    function MyPostsComponent(loadingService, postService, route, storageService) {
        this.loadingService = loadingService;
        this.postService = postService;
        this.route = route;
        this.storageService = storageService;
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
        console.log("post: ", this.postList);
    };
    MyPostsComponent.prototype.getPostList = function () {
        var _this = this;
        this.params.page = this.page;
        this.postService.list(this.params.page).subscribe(function (data) {
            _this.postList = data;
            console.log(" data: ", data);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MyPostsComponent.prototype, "user", void 0);
    MyPostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-posts',
            template: __webpack_require__("../../../../../src/app/main/profile/my-posts/my-posts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/profile/my-posts/my-posts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_util_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_4__core_api_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__core_util_storage_service__["a" /* StorageService */]])
    ], MyPostsComponent);
    return MyPostsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .card {\r\n    margin-top: 0;\r\n    padding: 0;\r\n    background-color: rgba(214, 224, 226, 0.2);\r\n    -moz-border-top-left-radius:5px;\r\n    border-top-left-radius:5px;\r\n    -moz-border-top-right-radius:5px;\r\n    border-top-right-radius:5px;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n.card.hovercard {\r\n    position: relative;\r\n    padding-top: 0;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    background-color: #fff;\r\n    background-color: rgba(255, 255, 255, 1);\r\n}\r\n.card.hovercard .card-background {\r\n    height: 300px;\r\n}\r\n.card-background img {\r\n    -webkit-filter: blur(25px);\r\n    -moz-filter: blur(25px);\r\n    -o-filter: blur(25px);\r\n    -ms-filter: blur(25px);\r\n    filter: blur(25px);\r\n    margin-left: -100px;\r\n    margin-top: -200px;\r\n    min-width: 130%;\r\n}\r\n.card.hovercard .useravatar {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n.card.hovercard .useravatar img {\r\n    /* width: 100px;\r\n    height: 100px; */\r\n    width: 180px;\r\n    height: 180px;\r\n    border-radius: 50%;\r\n    border: 5px solid rgba(255, 255, 255, 0.5);\r\n    -webkit-transform: translateX(0%) translateY(30%);\r\n            transform: translateX(0%) translateY(30%);\r\n}\r\n.card.hovercard .card-info {\r\n    position: absolute;\r\n    bottom: 14px;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n.card.hovercard .card-info .card-title {\r\n    padding:0 5px;\r\n    font-size: 20px;\r\n    line-height: 1;\r\n    color: #262626;\r\n    background-color: rgba(255, 255, 255, 0.1);\r\n    border-radius: 4px;\r\n}\r\n.card.hovercard .card-info {\r\n    overflow: hidden;\r\n    font-size: 12px;\r\n    line-height: 20px;\r\n    color: #737373;\r\n    text-overflow: ellipsis;\r\n}\r\n.card.hovercard .bottom {\r\n    padding: 0 20px;\r\n    margin-bottom: 17px;\r\n}\r\n.btn-pref .btn {\r\n    -webkit-border-radius:0 !important;\r\n}\r\n.btn {\r\n    padding: 15px 19px;\r\n    letter-spacing: 0;\r\n}\r\n.image-upload {\r\n    position: absolute;\r\n    max-width: 180px;\r\n    height: 180px;\r\n    border: 5px solid rgba(255, 255, 255, 0.5);\r\n    -webkit-transform: translateX(64%) translateY(38%);\r\n    transform: translateX(64%) translateY(38%);\r\n    opacity: 0;\r\n    z-index: 2;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-sm-12\" style=\"padding: 0!important\">\n  <div class=\"card hovercard\">\n    <div class=\"card-background\">\n      <img class=\"card-bkimg\" alt=\"\" [src]=\"user.profilePicture\">\n      <!-- http://lorempixel.com/850/280/people/9/ -->\n    </div>\n    <div class=\"useravatar\">\n      <img alt=\"\" [src]=\"user.profilePicture\">\n    </div>\n    <input type=\"file\" (change)=\"onFileChange($event)\" name=\"update\" class=\"image-upload\" #fileInput accept=\"image/*\" />\n    <div class=\"card-info\"> <span class=\"card-title\">{{user?.name}}</span>\n\n    </div>\n  </div>\n  <div class=\"btn-pref btn-group btn-group-justified btn-group-lg\" role=\"group\" aria-label=\"...\">\n    <div class=\"btn-group\" role=\"group\">\n      <button type=\"button\" class=\"btn\" [ngClass]=\"type == 1? 'btn-primary': 'btn-default'\" (click)=\"type = 1\">\n                <div class=\"hidden-xs\">My Info</div>\n            </button>\n    </div>\n    <div class=\"btn-group\" role=\"group\">\n      <button type=\"button\" class=\"btn\" [ngClass]=\"type == 2? 'btn-primary': 'btn-default'\" (click)=\"type = 2\">\n                <div class=\"hidden-xs\">My Posts</div>\n            </button>\n    </div>\n    <div class=\"btn-group\" role=\"group\">\n      <button type=\"button\" class=\"btn\" [ngClass]=\"type == 3? 'btn-primary': 'btn-default'\" (click)=\"type = 3\">\n                <div class=\"hidden-xs\">Password</div>\n            </button>\n    </div>\n  </div>\n</div>\n\n<app-info *ngIf=\"type==1\" [user]=\"user\" (changeF)=\"post()\"></app-info>\n<app-my-posts *ngIf=\"type==2\" [user]=\"user\"></app-my-posts>\n<app-change-pass *ngIf=\"type==3\" [user]=\"user\" (changeF)=\"post()\"></app-change-pass>"

/***/ }),

/***/ "../../../../../src/app/main/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_util_loading_service__ = __webpack_require__("../../../../../src/app/core/util/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/core/dialog/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_login_service__ = __webpack_require__("../../../../../src/app/core/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_user_service__ = __webpack_require__("../../../../../src/app/core/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_util_storage_service__ = __webpack_require__("../../../../../src/app/core/util/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_api_image_service__ = __webpack_require__("../../../../../src/app/core/api/image.service.ts");
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
    function ProfileComponent(loading, dialog, loginService, userService, storageService, imageService) {
        this.loading = loading;
        this.dialog = dialog;
        this.loginService = loginService;
        this.userService = userService;
        this.storageService = storageService;
        this.imageService = imageService;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.profilePicture = 'assets/img/avatar.png';
        var id = this.storageService.get('id');
        console.log("id: ", id);
        this.loading.show();
        this.loginService.refreshKey().subscribe(function (data) {
            _this.userService.get(id).subscribe(function (data) {
                _this.user = data.data;
                console.log("data: ", _this.user);
                _this.type = 1;
                _this.loading.hide();
            });
        }, function (error) {
            _this.loading.hide();
        });
    };
    ProfileComponent.prototype.post = function () {
        var _this = this;
        this.loading.show();
        this.userService.update(this.user).subscribe(function (data) {
            console.log("data: ", data);
            _this.dialog.showSuccess();
            _this.loading.hide();
        }, function (error) {
            console.log("data: ", error);
            _this.dialog.showError('failed to change!');
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_util_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_2__core_dialog_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_4__core_api_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__core_util_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_6__core_api_image_service__["a" /* ImageService */]])
    ], ProfileComponent);
    return ProfileComponent;
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