(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+YTG":
/*!***********************************!*\
  !*** ./src/app/api/projectsEn.ts ***!
  \***********************************/
/*! exports provided: projectsEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsEn", function() { return projectsEn; });
const projectsEn = [
    {
        id: "VIS",
        name: "Virtual Internship System",
        technologies: 'Python, Django, Angular.js, MongoDB',
        images: [
            {
                title: 'Home',
                src: "assets/images/vis-home.png",
            },
            {
                title: 'User',
                src: "assets/images/vis-user.png",
            },
            {
                title: 'Admin',
                src: "assets/images/vis-admin.png",
            },
        ],
        url: "https://www.vinternship.org/",
        detail: "<p>The online platform is designed to provide computer science fresh graduate interns with training from industry professionals. The program takes interns through the entire process of a particular course, and upon completion, they are evaluated and certified.</p> <p>Originally developed by eSRD-Lab, the project is now being run in collaboration with MySoft Limited and RISE BUET. The project was made possible by funding from the ICT Division Innovation fund.</p>",
        codeSourceUrl: 'https://github.com/eSRD-Lab/VIS-Platform',
        detailIsDisplayed: false,
    },
    {
        id: "NCDW",
        name: "National Health Data Warehouse",
        technologies: 'Python, Flask, Angular 8, PostgreSQL',
        images: [
            {
                title: 'Home',
                src: "assets/images/ncdw-home.png",
            },
            {
                title: 'Map',
                src: "assets/images/ncdw-map.png",
            },
            {
                title: "Admin",
                src: "assets/images/ncdw-lab.png",
            }
        ],
        url: 'http://103.94.135.217:4444/home',
        detail: "<p>This research project is a collaboration between academia and industry. The project involved extracting data from a data warehouse using Flask APIs. The data was then visualized on the front end using D3 and Chart js Graphs.</p> The project was funded by the ICT Division Innovation fund.",
        codeSourceUrl: 'https://github.com/eSRD-Lab/NCDW-Frontend',
        detailIsDisplayed: false,
    },
    {
        id: "HMS",
        name: "Hospital Management System",
        technologies: 'Java, SpringBoot, Angular 8, MongoDB',
        images: [
            {
                title: 'Home',
                src: "assets/images/HMS-home.png",
            },
            {
                title: 'Users',
                src: "assets/images/hms-doctor.png",
            },
            {
                title: "Invoice",
                src: "assets/images/hms-report.png",
            },
        ],
        url: 'https://github.com/tanvirkse101/Spring-Boot-Anuglar-Project',
        detail: "<p>This project is a demo hospital management system created for an academic internship project. The system includes CRUD (Create, Read, Update, Delete) implementation for doctors, patients, medicines, and other related entities.</p> <p>The goal of the project is to provide a practical demonstration of how such a system can be designed and implemented, including the use of databases and user interfaces.</p>",
        codeSourceUrl: 'https://github.com/tanvirkse101/Spring-Boot-Anuglar-Project',
        detailIsDisplayed: false,
    },
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tanvir\Documents\Extra\portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/i18n/fr */ "asqy");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








class AboutComponent {
    constructor(_translationLoaderService) {
        this._translationLoaderService = _translationLoaderService;
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_2__["locale"], _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_3__["locale"]);
    }
    ngOnInit() {
        this.mapMarker = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarker"];
        this.phone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhone"];
        this.email = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMailBulk"];
        this.mobile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMobile"];
        this.birthday = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBirthdayCake"];
        this.badge = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"];
        this.home = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLaptopHouse"];
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 75, vars: 42, consts: [["id", "about"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row"], ["data-aos", "fade-right", 1, "col-lg-4", "col-md-12"], ["src", "assets/images/profile.jpg", "alt", "photo de profil", 1, "img-fluid"], [1, "d-flex", "justify-content-center"], ["href", "https://www.linkedin.com/in/tanvir-ahamed-9256121b9", "rel", "tooltip", "target", "_blank", 1, "btn-social-media", 3, "title"], [1, "fa", "fa-linkedin", "fa-lg"], ["href", "https://github.com/tanvirkse101", "rel", "tooltip", "target", "_blank", 1, "btn-social-media", "btn-default", "btn-round", "btn-lg", "btn-icon", 3, "title"], [1, "fa", "fa-github", "fa-lg"], ["data-aos", "fade-left", 1, "col-lg-8", "col-md-12", "pt-4", "pt-lg-0"], [1, "font-italic"], [1, "col-lg-6", "col-md-6"], [3, "icon"], ["href", "mailto:tanvirkse@gmail.com"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Front-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Back-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Server Side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " tanvirkse@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " +8801754101392");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 18, "about.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 20, "about.followMeOn"), " Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 22, "about.followMeOn"), " GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 24, "about.jobTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 26, "about.introductionOfMe"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 28, "about.passionateAboutDevelopment"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 30, "about.and"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.mapMarker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 32, "about.mobility"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.birthday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 27 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 34, "about.years"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.badge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 36, "about.graduation"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.home);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 38, "about.myResearch"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 40, "about.researchDescription"), " ");
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["ul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\n\r\nfa-icon[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    color: #149ddd;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: #dff3fc;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50px;\r\n    transition: all 0.3s ease-in-out;\r\n    margin-right: 10px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n  font-weight: 700;\r\n    font-size: 26px;\r\n    color: #173b6c;\r\n}\r\n\r\n.btn-social-media[_ngcontent-%COMP%]{\r\n  border-radius: 50px;\r\n  width: 40px;\r\n  height: 40px;\r\n  color: #ffffff;\r\n  align-items: center;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  background: #149ddd;\r\n  margin-right:10px;\r\n  margin-left:10px;\r\n  margin-top:10px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0lBQ2QsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuZmEtaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMTQ5ZGRkO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGZmM2ZjO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmgze1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogIzE3M2I2YztcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwtbWVkaWF7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMTQ5ZGRkO1xyXG4gIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgbWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcblxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/fr */ "asqy");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typed.js */ "ELNm");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








const _c0 = function () { return { backgroundImage: "url(assets/images/home-background-5.png)" }; };
class HomeComponent {
    constructor(_translationLoaderService) {
        this._translationLoaderService = _translationLoaderService;
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__["locale"], _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_2__["locale"]);
    }
    ngOnInit() {
        var options = {
            strings: ['', 'Full-stack Engineer', 'Python Developer', 'DevOps Engineer'],
            typeSpeed: 80,
            backSpeed: 40,
            loop: true,
        };
        var typed = new typed_js__WEBPACK_IMPORTED_MODULE_3___default.a('.typed', options);
        typed.reset(true);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 5, consts: [["id", "home", 1, "d-flex", "flex-column", "justify-content-center", "align-items-center", 3, "ngStyle"], ["data-aos", "fade-in", 1, "hero-container", "aos-init", "aos-animate"], [1, "mt-3"], [1, "typed"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tanvir Ahamed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, "home.iAmDeveloper"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["#home[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: top center;\r\n    background-size: cover;\r\n}\r\n\r\n#home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    margin-bottom: 50px;\r\n    font-size: 26px;\r\n    font-family: \"Poppins\", sans-serif;\r\n    display: block;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    color: #fff; \r\n}\r\n\r\n#home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    padding-bottom: 4px;\r\n    letter-spacing: 1px;\r\n    border-bottom: 3px solid #149ddd;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHRvcCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4jaG9tZSBwe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgY29sb3I6ICNmZmY7IFxyXG59XHJcblxyXG4jaG9tZSBwIHNwYW4ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTQ5ZGRkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"] }]; }, null); })();


/***/ }),

/***/ "AY9o":
/*!****************************************************************!*\
  !*** ./src/app/curriculum-vitae/curriculum-vitae.component.ts ***!
  \****************************************************************/
/*! exports provided: CurriculumVitaeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumVitaeComponent", function() { return CurriculumVitaeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/i18n/fr */ "asqy");
/* harmony import */ var _api_experiencesFr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/experiencesFr */ "NWkV");
/* harmony import */ var _api_experiencesEn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/experiencesEn */ "CnTy");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");











function CurriculumVitaeComponent_li_56_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CurriculumVitaeComponent_li_56_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CurriculumVitaeComponent_li_56_p_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mission_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", mission_r6, " ");
} }
function CurriculumVitaeComponent_li_56_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurriculumVitaeComponent_li_56_p_13_span_1_Template, 6, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", experience_r1.missions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "education.technologies"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r1.technologies, " ");
} }
function CurriculumVitaeComponent_li_56_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurriculumVitaeComponent_li_56_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const experience_r1 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.detailOnClick(experience_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CurriculumVitaeComponent_li_56_span_9_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CurriculumVitaeComponent_li_56_span_10_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CurriculumVitaeComponent_li_56_p_13_Template, 7, 5, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r1.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r1.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !experience_r1.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r1.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, "education.detail"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r1.detailIsDisplayed);
} }
class CurriculumVitaeComponent {
    constructor(_translationLoaderService, _translateService) {
        this._translationLoaderService = _translationLoaderService;
        this._translateService = _translateService;
        this.experiences = _api_experiencesEn__WEBPACK_IMPORTED_MODULE_5__["experiencesEn"];
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_2__["locale"], _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_3__["locale"]);
        this._translateService.onLangChange.subscribe(() => {
            if (this._translateService.currentLang == "en") {
                this.experiences = _api_experiencesEn__WEBPACK_IMPORTED_MODULE_5__["experiencesEn"];
            }
            else {
                this.experiences = _api_experiencesFr__WEBPACK_IMPORTED_MODULE_4__["experiencesFr"];
            }
        });
    }
    ngOnInit() {
        this.planeIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFilm"];
        this.gameIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGamepad"];
        this.volleyBallIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faVolleyballBall"];
        this.musicIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMusic"];
    }
    detailOnClick(experience) {
        experience.detailIsDisplayed = !experience.detailIsDisplayed;
    }
}
CurriculumVitaeComponent.ɵfac = function CurriculumVitaeComponent_Factory(t) { return new (t || CurriculumVitaeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_6__["TranslationLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"])); };
CurriculumVitaeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurriculumVitaeComponent, selectors: [["app-curriculum-vitae"]], decls: 122, vars: 77, consts: [["id", "cv"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-4", "col-md-6"], [1, "timeline"], [1, "font-italic"], [1, "year", "p-2", "d-flex", "justify-content-center"], [4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-4", "col-md-12", "aos-init", "aos-animate"], [1, "container", "row"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "aos-init", "aos-animate"], [1, "noProgress", "langue"], [1, ""], ["src", "assets/images/jap-flag.png", "width", "20", "alt", "drapeau de la france"], [1, "val"], ["src", "assets/images/united-kingdom-flag.png", "width", "20", "alt", "drapeau du royaume uni"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "mt-3", "aos-init", "aos-animate"], [3, "icon"], [1, "d-flex", "flex-row"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-cogs"], [1, "fa", "fa-check"]], template: function CurriculumVitaeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "2015 - 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "2011-2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "2009-2010");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, CurriculumVitaeComponent_li_56_Template, 14, 9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Football, Basketball, Boxing, MMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](119, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Pop, Heavy Metal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 29, "education.title"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 31, "education.eductionTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 33, "education.masterDegreeTwo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 35, "education.masterDegreeTwoDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 37, "education.university"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 39, "education.masterDegreeOne"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 41, "education.masterDegreeOneDesc"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 43, "education.college"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 45, "education.bachlorDegree"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 47, "education.bachlorDegreeDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 49, "education.school"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 51, "education.experiencesTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 53, "education.languages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 55, "education.japanese"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 57, "education.fluent"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](78, 59, "education.english"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 61, "education.goodLevel"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 63, "education.centerOfInterest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.volleyBallIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 65, "education.sport"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.planeIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](101, 67, "education.trips"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](104, 69, "education.tripsCountries"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.gameIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](110, 71, "education.boardGames"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](113, 73, "education.boardGamesPlayed"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.musicIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](119, 75, "education.music"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["ul.timeline[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    position: relative;\r\n}\r\n\r\nul.timeline[_ngcontent-%COMP%]:before {\r\n    content: ' ';\r\n    background: #105572;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 29px;\r\n    width: 2px;\r\n    height: 100%;\r\n    z-index: 400;\r\n}\r\n\r\n.skills[_ngcontent-%COMP%]   .resume-title[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n    color: #050d18;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    font-family: \"Raleway\", sans-serif;\r\n}\r\n\r\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n    padding-left: 20px;\r\n}\r\n\r\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\r\n    content: ' ';\r\n    background: white;\r\n    display: inline-block;\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    border: 3px solid #105572;\r\n    left: 20px;\r\n    width: 20px;\r\n    height: 20px;\r\n    z-index: 400;\r\n}\r\n\r\n.year[_ngcontent-%COMP%]{\r\n    background-color: #e4edf9; \r\n    width: 190px; \r\n    padding-left: 5px;\r\n    margin-right: 5px;\r\n    height: 40px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n}\r\n\r\n.langue[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n}\r\n\r\nfa-icon[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    color: #149ddd;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: #dff3fc;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJpY3VsdW0tdml0YWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQ0FBZ0M7RUFDbEMiLCJmaWxlIjoiY3VycmljdWx1bS12aXRhZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwudGltZWxpbmUge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG51bC50aW1lbGluZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgYmFja2dyb3VuZDogIzEwNTU3MjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDI5cHg7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogNDAwO1xyXG59XHJcblxyXG4uc2tpbGxzIC5yZXN1bWUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwNTBkMTg7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudWwudGltZWxpbmUgPiBsaSB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxudWwudGltZWxpbmUgPiBsaTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMTA1NTcyO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgei1pbmRleDogNDAwO1xyXG59XHJcblxyXG4ueWVhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGVkZjk7IFxyXG4gICAgd2lkdGg6IDE5MHB4OyBcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4ubGFuZ3VlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbmZhLWljb257XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzE0OWRkZDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RmZjNmYztcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurriculumVitaeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-curriculum-vitae',
                templateUrl: './curriculum-vitae.component.html',
                styleUrls: ['./curriculum-vitae.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_6__["TranslationLoaderService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BzaH":
/*!*************************************!*\
  !*** ./src/app/api/referencesEn.ts ***!
  \*************************************/
/*! exports provided: referencesEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "referencesEn", function() { return referencesEn; });
const referencesEn = [
    {
        personImg: "assets/images/unknown.jpg",
        personFullname: 'Dr. Abu Sayed Md. Latiful Haque',
        personPosition: "Professor & CEO",
        personCompany: 'eSRD-Lab, BUET',
        message: "I had the pleasure of working with Tanvir Ahamed for 1 year and 5 months, and I must say that he was one of the best team members we had during that time. Tanvir consistently demonstrated a strong work ethic, delivering tasks on time and to a high standard. He was always willing to take on new challenges, and his problem-solving ability was exceptional. What really stood out about Tanvir was his communication skills. He was able to effectively communicate with team members and clients alike, and was always willing to go the extra mile to ensure that everyone was on the same page. Tanvir's ability to adapt to changing project requirements and deadlines was also a great asset to our team. I highly recommend Tanvir and am confident that he will continue to excel in his future endeavors."
    },
    {
        personImg: "assets/images/unknown.jpg",
        personFullname: 'Sazzad Hossain',
        personPosition: "Professor",
        personCompany: 'North South University',
        message: "I have had the pleasure of teaching Tanvir Ahamed for multiple courses, including Artificial Intelligence, Machine Learning, and Senior Projects. Tanvir is an excellent student who has consistently demonstrated a strong work ethic and a keen desire to learn. He has a natural aptitude for programming and has consistently delivered high-quality work, both individually and as a member of a team. Tanvir's ability to grasp complex concepts and apply them to real-world problems is truly impressive. He has shown a particular talent for developing innovative solutions that are both practical and effective. His strong analytical skills, attention to detail, and ability to work independently make him an asset to any team. I am confident that Tanvir will continue to excel in his future endeavors, and I highly recommend him to any potential employer."
    },
    {
        personImg: "assets/images/unknown.jpg",
        personFullname: 'Sazzad Hossain',
        personPosition: "Professor",
        personCompany: 'North South University',
        message: "I have had the pleasure of teaching Tanvir Ahamed for multiple courses, including Artificial Intelligence, Machine Learning, and Senior Projects. Tanvir is an excellent student who has consistently demonstrated a strong work ethic and a keen desire to learn. He has a natural aptitude for programming and has consistently delivered high-quality work, both individually and as a member of a team. Tanvir's ability to grasp complex concepts and apply them to real-world problems is truly impressive. He has shown a particular talent for developing innovative solutions that are both practical and effective. His strong analytical skills, attention to detail, and ability to work independently make him an asset to any team. I am confident that Tanvir will continue to excel in his future endeavors, and I highly recommend him to any potential employer."
    },
];


/***/ }),

/***/ "CnTy":
/*!**************************************!*\
  !*** ./src/app/api/experiencesEn.ts ***!
  \**************************************/
/*! exports provided: experiencesEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiencesEn", function() { return experiencesEn; });
const experiencesEn = [
    {
        title: "Software Engineer",
        company: 'ZUU Co. Ltd',
        period: "2022/12-2023/02",
        technologies: 'Golang, Vue.js, PostgreSQL',
        missions: [
            "Full-stack Development",
            "Bug fix of Github issues",
            "Learn Japanese workplace culture & workflow",
            "Study Japanese language",
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Programmer",
        company: 'eSystems Research & Development Lab, BUET',
        period: "2021/02-2022/04",
        technologies: 'Python, Django, Flask, Angular 8',
        missions: [
            "Full stack development of VIS Project",
            "Front-end development of NCDW",
            "Server Deployment",
            "System Design",
            "Survey & Research",
            "Mentorship of interns",
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Full-stack Intern",
        company: 'eSystems Research & Development Lab, BUET',
        period: "2020/09-2021/01",
        technologies: 'Java, Spring-Boot, Angular, MongoDB',
        missions: [
            "Full-stack Development",
            "Develop Hospital Management System with Spring-Boot, Angular & MongoDB",
            "Develop modules of e-Learning Platform using PHP, CodeIgniter & MySQL",
            "Study Japanese language",
        ],
        detailIsDisplayed: false,
    }
];


/***/ }),

/***/ "NWkV":
/*!**************************************!*\
  !*** ./src/app/api/experiencesFr.ts ***!
  \**************************************/
/*! exports provided: experiencesFr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiencesFr", function() { return experiencesFr; });
const experiencesFr = [
    {
        title: "Software Engineer",
        company: 'ZUU Co. Ltd',
        period: "2022/12-2023/02",
        technologies: 'Golang, Vue.js, PostgreSQL',
        missions: [
            [
                "フルスタック開発をする",
                "Githubの問題を修正する",
                "日本の職場文化とワークフローを学ぶ",
                "日本語を勉強する"
            ]
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Programmer",
        company: 'eSystems Research & Development Lab, BUET',
        period: "2021/02-2022/04",
        technologies: 'Python, Django, Flask, Angular 8',
        missions: [
            "VISプロジェクトのフルスタック開発をする",
            "NCDWのフロントエンド開発をする",
            "サーバーのデプロイをする",
            "システムデザインをする",
            "調査・研究をする",
            "インターンの指導をする"
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Full-stack Intern",
        company: 'eSystems Research & Development Lab, BUET',
        period: "2020/09-2021/01",
        technologies: 'Java, Spring-Boot, Angular, MongoDB',
        missions: [
            "フルスタック開発をする",
            "Spring-Boot、Angular、およびMongoDBを使用して病院管理システムを開発する",
            "PHP、CodeIgniter、およびMySQLを使用してe-Learningプラットフォームのモジュールを開発する",
        ],
        detailIsDisplayed: false,
    }
];


/***/ }),

/***/ "P0iy":
/*!***********************************!*\
  !*** ./src/app/shared/i18n/en.ts ***!
  \***********************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
const locale = {
    lang: 'en',
    data: {
        'about': {
            'title': 'About',
            'jobTitle': 'Full-stack Software Engineer',
            'introductionOfMe': 'As an avid learner of new technologies, I enjoy exploring and implementing full-stack development and DevOps practices. My passion for research and development allows me to experiment with the latest features and continuously improve my projects using the PDCA cycle. Whether it\'s working on Front-End, Back-End, or Server-Side, I strive to maintain a keen interest in all aspects of software development',
            'passionateAboutDevelopment': 'Passionate about development: ',
            'mobility': 'Dhaka, Bangladesh',
            'years': 'Years',
            'graduation': "B.Sc. in C.S.E",
            'myResearch': 'CSE Major: ML & AI',
            'researchDescription': 'I am seeking a dynamic company where I can apply and expand my programming skills, collaborate with a team of experienced professionals, and contribute to large-scale international projects. Working alongside seasoned mentors and colleagues, I aim to learn from their expertise and enhance my knowledge as a software engineer. Ultimately, I am driven to grow as a professional and contribute to the success of the company\'s mission.',
            'and': 'and',
            'followMeOn': 'Follow me on',
        },
        'contact': {
            'contactMe': 'Contact Me',
            'notHesitateToContactMe': 'Do not hesitate to contact me',
            'identify': 'Identify',
            'enterIdentify': 'Enter your identify',
            'email': 'Email',
            'enterEmail': 'Enter your email',
            'object': 'Object',
            'enterObject': 'Enter object',
            'message': 'Message',
            'send': 'Send',
        },
        'education': {
            'title': 'Curriculum Vitae',
            'eductionTitle': 'Education',
            'experiencesTitle': 'Experiences',
            'centerOfInterest': 'Center of interest',
            'sport': 'Sport',
            'trips': 'Anime',
            'music': 'Music',
            'boardGames': 'Video games',
            'languages': 'Languages',
            'fluent': 'N4~N3',
            'goodLevel': 'Excellent',
            'japanese': 'Japanese',
            'english': 'English',
            'masterDegreeTwo': "Bachelor's Degree",
            'masterDegreeTwoDesc': "Computer Science & Engineering",
            'masterDegreeOne': "Higher Secondary Certificate",
            'masterDegreeOneDesc': "Science - Biology",
            'bachlorDegree': "Secondary School Certificate",
            'bachlorDegreeDesc': "Science - Biology",
            'university': 'North South University, Dhaka, BD',
            'college': "Notre Dame College",
            'school': "St. Joseph Higer Secondary School & College",
            'mission': 'Task',
            'technologies': 'Technologies',
            'detail': 'Detail',
            'tripsCountries': 'Naruto, A.O.T, Blue Lock, Haikyuu',
            'boardGamesPlayed': 'Dota 2, Apex Legends',
            'years': 'years'
        },
        'header': {
            'home': 'Home',
            'about': 'About',
            'skills': 'Skills',
            'references': 'References',
            'contactMe': 'Contact me',
        },
        'home': {
            'iAmDeveloper': 'I am ',
        },
        'projects': {
            'title': 'Portfolio',
            'projectDetail': 'Project detail',
            'sourceCode': 'Source code',
        },
        'references': {
            'title': 'References',
        },
        'skills': {
            'title': 'Skills',
            'technologies': 'Technologies',
            'tools': 'Tools',
            'methodologies': 'Methodologies'
        },
    }
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./curriculum-vitae/curriculum-vitae.component */ "AY9o");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _references_references_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./references/references.component */ "en7e");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");











class AppComponent {
    constructor(_translateService, elementRef) {
        this._translateService = _translateService;
        this.elementRef = elementRef;
        this._translateService.addLangs(['en', 'fr']);
        this._translateService.setDefaultLang('fr');
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
        if (!localStorage.getItem("lang")) {
            localStorage.setItem("lang", 'en');
        }
        let lang = localStorage.getItem("lang");
        this._translateService.setDefaultLang(lang);
        this._translateService.use(lang);
        setTimeout(() => {
            const section = this.elementRef.nativeElement.querySelector('#about');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }
        }, 3500);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 1, consts: [[1, "page-content"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-curriculum-vitae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-references");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Copyright \u00A9 2020-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " By Tanvir Ahamed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentYear);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"], _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_6__["CurriculumVitaeComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _references_references_component__WEBPACK_IMPORTED_MODULE_8__["ReferencesComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]], styles: [".footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: #01557a;\r\n    color: rgb(255, 255, 255);\r\n    text-align: center;\r\n    vertical-align: middle;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n      margin: 10px 0px ;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4QjtFQUNBO01BQ0ksaUJBQWlCO0VBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE1NTdhO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIC5mb290ZXIgcHtcclxuICAgICAgbWFyZ2luOiAxMHB4IDBweCA7XHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curriculum-vitae/curriculum-vitae.component */ "AY9o");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _references_references_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./references/references.component */ "en7e");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "qFsG");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumVitaeComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _references_references_component__WEBPACK_IMPORTED_MODULE_10__["ReferencesComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumVitaeComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _references_references_component__WEBPACK_IMPORTED_MODULE_10__["ReferencesComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot(),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "asqy":
/*!***********************************!*\
  !*** ./src/app/shared/i18n/fr.ts ***!
  \***********************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
const locale = {
    lang: 'fr',
    data: {
        'about': {
            'title': '自己紹介',
            'jobTitle': 'フルスタックソフトウェアエンジニア',
            'introductionOfMe': '新しい技術を熱心に学ぶことが好きで、フルスタック開発とDevOpsの実践を探求し、実装することを楽しんでいます。研究開発に対する情熱が私を最新の機能を実験し、PDCAサイクルを用いてプロジェクトを継続的に改善することを可能にしています。フロントエンド、バックエンド、サーバーサイドに取り組む場合でも、ソフトウェア開発のあらゆる側面に関心を持ち続けるよう努めています。',
            'passionateAboutDevelopment': '開発に情熱を注いでいます：',
            'mobility': 'バングラデシュ、ダッカ',
            'years': '年',
            'graduation': "B.Sc. in CSE",
            'myResearch': 'CSEメジャー：ML＆AI',
            'researchDescription': '私は、プログラミングスキルを活かし、拡張できるダイナミックな会社を探しています。経験豊富な専門家のチームと協力し、大規模な国際プロジェクトに貢献したいと考えています。ベテランのメンターと同僚と一緒に働くことで、彼らの専門知識を学び、ソフトウェアエンジニアとしての知識を高めることを目指しています。最終的には、プロフェッショナルとして成長し、会社のミッションの成功に貢献したいと考えています。',
            'and': 'と',
            'followMeOn': 'フォローしてください',
        },
        'contact': {
            'contactMe': 'お問い合わせ',
            'notHesitateToContactMe': 'お気軽にお問い合わせください',
            'identify': 'お名前',
            'enterIdentify': 'お名前を入力してください',
            'email': 'メールアドレス',
            'enterEmail': 'メールアドレスを入力してください',
            'object': '件名',
            'enterObject': '件名を入力してください',
            'message': 'メッセージ',
            'send': '送信する',
        },
        'education': {
            'title': '履歴書',
            'eductionTitle': '学歴',
            'experiencesTitle': '経験',
            'centerOfInterest': '興味の中心',
            'sport': 'スポーツ',
            'trips': 'アニメ',
            'music': '音楽',
            'boardGames': 'ビデオゲーム',
            'languages': '言語',
            'fluent': 'N4〜N3',
            'goodLevel': '優れた',
            'japanese': '日本語',
            'english': '英語',
            'masterDegreeTwo': "Bachelor's Degree",
            'masterDegreeTwoDesc': "Computer Science & Engineering",
            'masterDegreeOne': "Higher Secondary Certificate",
            'masterDegreeOneDesc': "Science - Biology",
            'bachlorDegree': "Secondary School Certificate",
            'bachlorDegreeDesc': "Science - Biology",
            'university': 'North South University, Dhaka, BD',
            'college': "Notre Dame College",
            'school': "St. Joseph Higer Secondary School & College",
            'mission': 'タスク',
            'technologies': '技術',
            'detail': '詳細',
            'tripsCountries': 'ナルト、進撃の巨人、ブルーロック、ハイキュー',
            'boardGamesPlayed': 'Dota 2、Apex Legends',
            'years': '年'
        },
        'header': {
            'home': 'ホーム',
            'about': '自己紹介',
            'skills': 'スキル',
            'references': '参照',
            'contactMe': 'コンタクト'
        },
        'home': {
            'iAmDeveloper': 'I am'
        },
        'projects': {
            'title': 'ポートフォリオ',
            'projectDetail': 'プロジェクトの詳細',
            'sourceCode': 'ソースコード'
        },
        'references': {
            'title': '参照'
        },
        'skills': {
            'title': 'スキル',
            'technologies': '技術',
            'tools': 'ツール',
            'methodologies': '方法論'
        }
    }
};


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/fr */ "asqy");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






class ContactComponent {
    constructor(_translationLoaderService) {
        this._translationLoaderService = _translationLoaderService;
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__["locale"], _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_2__["locale"]);
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 48, vars: 30, consts: [["id", "contact"], [1, "container", "mb-5"], [1, "bar-title", "mb-5"], ["data-aos", "fade-up", "data-aos-anchor-placement", "top-center", 1, "row"], [1, "col-md-3", "col-lg-3"], [1, "contact-info"], ["src", "assets/images/contact-image.png", "alt", "image"], [1, "col-md-9"], [1, "contact-form"], [1, "form-group"], ["for", "identite", 1, "control-label", "col-sm-2"], [1, "col-sm-10"], ["type", "text", "id", "identite", "name", "fname", 1, "form-control", 3, "placeholder"], ["for", "email", 1, "control-label", "col-sm-2"], ["type", "email", "id", "email", "name", "email", 1, "form-control", 3, "placeholder"], ["for", "object", 1, "control-label", "col-sm-2"], ["type", "text", "id", "object", "name", "object", 1, "form-control", 3, "placeholder"], ["for", "comment", 1, "control-label", "col-sm-2"], ["rows", "5", "id", "comment", 1, "form-control"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-default"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, "contact.contactMe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 12, "contact.notHesitateToContactMe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 14, "contact.identify"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 16, "contact.enterIdentify"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 18, "contact.email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 20, "contact.enterEmail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 22, "contact.object"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 24, "contact.enterObject"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 26, "contact.message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 28, "contact.send"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["body[_ngcontent-%COMP%]{\r\n    background-color: #25274d;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]{\r\n    padding: 4%;\r\n    height: 400px;\r\n}\r\n\r\n.col-md-3[_ngcontent-%COMP%]{\r\n    background: #1478a7;\r\n    padding: 4%;\r\n    border-top-left-radius: 0.5rem;\r\n    border-bottom-left-radius: 0.5rem;\r\n}\r\n\r\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    margin-bottom: 10%;\r\n}\r\n\r\n.col-md-9[_ngcontent-%COMP%]{\r\n    background: #fff;\r\n    padding: 3%;\r\n    border-top-right-radius: 0.5rem;\r\n    border-bottom-right-radius: 0.5rem;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    font-weight:600;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background:#149ddd;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    width: 25%;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\r\n    box-shadow:none;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]{\r\n    padding-top: 100px; \r\n}\r\n\r\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNzRkO1xyXG59XHJcblxyXG4uY29udGFjdHtcclxuICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLmNvbC1tZC0ze1xyXG4gICAgYmFja2dyb3VuZDogIzE0NzhhNztcclxuICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4uY29udGFjdC1pbmZvIGgye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG4uY29sLW1kLTl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBsYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiMxNDlkZGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGJ1dHRvbjpmb2N1c3tcclxuICAgIGJveC1zaGFkb3c6bm9uZTtcclxufVxyXG5cclxuc2VjdGlvbntcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgXHJcbn1cclxuXHJcbmgzLGg0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"] }]; }, null); })();


/***/ }),

/***/ "eZ+O":
/*!*************************************!*\
  !*** ./src/app/api/referencesFr.ts ***!
  \*************************************/
/*! exports provided: referencesFr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "referencesFr", function() { return referencesFr; });
const referencesFr = [
    {
        personImg: "assets/images/unknown.jpg",
        personFullname: 'Dr. Abu Sayed Md. Latiful Haque',
        personPosition: "Professor & CEO",
        personCompany: 'eSRD-Lab, BUET',
        message: "私はTanvir Ahamedさんと1年5ヶ月一緒に働いた経験があります。彼は当社の最高のチームメンバーの一人であり、常に高品質かつタイムリーなタスクの提供を実現してくれました。新しいチャレンジにも常に積極的に取り組み、問題解決能力にも優れています。Tanvirさんのコミュニケーション能力は非常に高く、チームメンバーやクライアントと効果的にコミュニケーションを取り、全員が同じページにいるように常に努力していました。彼のプロジェクトの要件や納期に対する適応能力も素晴らしい資質です。私はTanvirさんの今後の成功を確信しており、彼を強くお勧めします。",
    },
    {
        personImg: "assets/images/unknown.jpg",
        personFullname: 'Dr. Sazzad Hossain',
        personPosition: "Professor",
        personCompany: 'North South University',
        message: "私はTanvir Ahamedさんに複数のコース、人工知能、機械学習、そしてシニアプロジェクトの受講の機会をいただきました。Tanvirさんは優秀な学生で、強い努力と学ぶ意欲を常に示してきました。プログラミングに対する天賦の才能があり、個人でもチームでも高品質な仕事を常に提供しています。Tanvirさんは複雑なコンセプトを理解し、現実の問題に適用する能力があり、本当に素晴らしいです。実用的で効果的な革新的な解決策を開発する才能を持っています。彼の強い分析能力、細部への注意、独立した作業能力は、どんなチームにも貢献することができます。私はTanvirさんが今後も成功し続けることを確信しており、潜在的な雇用者に強くお勧めします。"
    },
    {
        personImg: "assets/images/unknown.jpg",
        personFullname: 'Dr. Sazzad Hossain',
        personPosition: "Professor",
        personCompany: 'North South University',
        message: "私はTanvir Ahamedさんに複数のコース、人工知能、機械学習、そしてシニアプロジェクトの受講の機会をいただきました。Tanvirさんは優秀な学生で、強い努力と学ぶ意欲を常に示してきました。プログラミングに対する天賦の才能があり、個人でもチームでも高品質な仕事を常に提供しています。Tanvirさんは複雑なコンセプトを理解し、現実の問題に適用する能力があり、本当に素晴らしいです。実用的で効果的な革新的な解決策を開発する才能を持っています。彼の強い分析能力、細部への注意、独立した作業能力は、どんなチームにも貢献することができます。私はTanvirさんが今後も成功し続けることを確信しており、潜在的な雇用者に強くお勧めします。"
    }
];


/***/ }),

/***/ "en7e":
/*!****************************************************!*\
  !*** ./src/app/references/references.component.ts ***!
  \****************************************************/
/*! exports provided: ReferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferencesComponent", function() { return ReferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/fr */ "asqy");
/* harmony import */ var _api_referencesEn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/referencesEn */ "BzaH");
/* harmony import */ var _api_referencesFr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/referencesFr */ "eZ+O");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = function (a0) { return { active: a0 }; };
function ReferencesComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reference_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, index_r2 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", reference_r1.personImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reference_r1.personFullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reference_r1.personPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reference_r1.personCompany);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", reference_r1.message, " ");
} }
class ReferencesComponent {
    constructor(_translationLoaderService, _translateService) {
        this._translationLoaderService = _translationLoaderService;
        this._translateService = _translateService;
        this.references = _api_referencesEn__WEBPACK_IMPORTED_MODULE_3__["referencesEn"];
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__["locale"], _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_2__["locale"]);
        this._translateService.onLangChange.subscribe(() => {
            if (this._translateService.currentLang == "en") {
                this.references = _api_referencesEn__WEBPACK_IMPORTED_MODULE_3__["referencesEn"];
            }
            else {
                this.references = _api_referencesFr__WEBPACK_IMPORTED_MODULE_4__["referencesFr"];
            }
        });
    }
    ngOnInit() {
    }
}
ReferencesComponent.ɵfac = function ReferencesComponent_Factory(t) { return new (t || ReferencesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__["TranslationLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"])); };
ReferencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReferencesComponent, selectors: [["app-references"]], decls: 15, vars: 4, consts: [["id", "references"], [1, "container", "mb-5"], [1, "bar-title", "mb-5"], ["data-aos", "fade-right", "data-aos-delay", "300", 1, "card", "shadow-lg", "rounded", "pb-3"], ["id", "carouselIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselIndicators", "data-slide-to", "0", 1, "not-active", "active"], ["data-target", "#carouselIndicators", "data-slide-to", "1", 1, "not-active"], ["data-target", "#carouselIndicators", "data-slide-to", "2", 1, "not-active"], [1, "carousel-inner"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "carousel-item", 3, "ngClass"], [1, "d-block", "w-100"], [1, "row"], [1, "col-lg-2", "ml-4", "mr-4", "col-sm-12"], [1, "mt-4"], ["alt", "slide", 1, "d-block", "w-100", "rounder", 3, "src"], [1, "mt-3"], [1, "mt-2"], [1, "text-uppercase"], [1, "card-body", "ml-4", "mr-3", "mt-4", "col-lg-9", "col-sm-12"]], template: function ReferencesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReferencesComponent_div_14_Template, 25, 8, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "references.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.references);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["li.not-active[_ngcontent-%COMP%]{\r\n    background-color: rgb(95, 146, 161);\r\n}\r\n\r\nli.active[_ngcontent-%COMP%]{\r\n    background-color: rgb(6, 46, 58);\r\n}\r\n\r\nsection[_ngcontent-%COMP%]{\r\n    padding-top: 100px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    color: rgb(22, 59, 90);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVyZW5jZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJyZWZlcmVuY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaS5ub3QtYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCAxNDYsIDE2MSk7XHJcbn1cclxuXHJcbmxpLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA0NiwgNTgpO1xyXG59XHJcblxyXG5zZWN0aW9ue1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG59XHJcblxyXG5oMntcclxuICAgIGNvbG9yOiByZ2IoMjIsIDU5LCA5MCk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-references',
                templateUrl: './references.component.html',
                styleUrls: ['./references.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__["TranslationLoaderService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/i18n/fr */ "asqy");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class HeaderComponent {
    constructor(_translationLoaderService, _translateService) {
        this._translationLoaderService = _translationLoaderService;
        this._translateService = _translateService;
        this.language = "";
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_2__["locale"], _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_3__["locale"]);
        if (localStorage.getItem("lang")) {
            this.language = localStorage.getItem("lang");
        }
        else {
            this.language = 'en';
        }
    }
    languageChange($event) {
        let lang = $event.value;
        localStorage.setItem("lang", lang);
        this._translateService.setDefaultLang(lang);
        this._translateService.use(lang);
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.js-scroll-trigger').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.navbar-collapse').toggle();
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__('.nav').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.navbar-collapse').toggle();
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 48, vars: 16, consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-dark"], [1, "home", "p-1", "rounded"], [1, "navbar-nav"], [1, "nav-item", "p-1", "rounded"], ["href", "#", 1, "nav-link", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-home"], [1, "navbar-toggler", "nav", "mb-1"], [1, "navbar-toggler-icon"], [1, "container"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 2, "width", "100%", "float", "right"], [1, "navbar-nav", 2, "float", "right"], ["href", "#about", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-user"], ["href", "#skills", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-briefcase-alt"], ["href", "#cv", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-file-blank"], ["href", "#portfolio", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-book-content"], ["href", "#references", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bxs-badge-check"], ["href", "#contact", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-envelope"], ["aria-label", "Select a language", 2, "margin-top", "5px", 3, "ngModel", "ngModelChange", "change"], ["value", "en"], ["value", "fr", 1, "pl-3"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-radio-group", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_mat_radio_group_ngModelChange_43_listener($event) { return ctx.language = $event; })("change", function HeaderComponent_Template_mat_radio_group_change_43_listener($event) { return ctx.languageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-radio-button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " English ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-radio-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u65E5\u672C\u8A9E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "header.home"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 8, "header.about"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, "header.skills"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 12, "header.references"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 14, "header.contactMe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.language);
    } }, directives: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["li[_ngcontent-%COMP%]:hover, .home[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(51, 59, 61);\r\n}\r\n\r\ni[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(45, 51, 53);\r\n}\r\n\r\nnav[_ngcontent-%COMP%]{\r\n    background-color: #212529;\r\n}\r\n\r\ni[_ngcontent-%COMP%]{\r\n  font-size: 24px;\r\n  padding-right: 6px;\r\n  color: #6f7180;\r\n}\r\n\r\n.nav-home[_ngcontent-%COMP%]:hover{\r\n  background-color: rgb(51, 59, 61);\r\n}\r\n\r\nmat-radio-button[_ngcontent-%COMP%]{\r\n  color:white;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 3px 4px;\r\n  margin-bottom: 2px;\r\n  transition: 0.3s;\r\n  font-size: 15px;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n  display: inline-flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGk6aG92ZXIsLmhvbWU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1OSwgNjEpO1xyXG59XHJcblxyXG5pOmhvdmVyLGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCA1MSwgNTMpO1xyXG59XHJcbm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XHJcbn1cclxuXHJcbml7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICBjb2xvcjogIzZmNzE4MDtcclxufVxyXG5cclxuLm5hdi1ob21lOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTksIDYxKTtcclxufVxyXG5tYXQtcmFkaW8tYnV0dG9ue1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbmF7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDNweCA0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5saXtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/fr */ "asqy");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







function SkillsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technologie_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technologie_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", technologie_r3.percent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", technologie_r3.remark);
} }
function SkillsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tool_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tool_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tool_r4.percent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", tool_r4.remark);
} }
function SkillsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const methodologie_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](methodologie_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", methodologie_r5.percent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", methodologie_r5.remark);
} }
class SkillsComponent {
    constructor(_translationLoaderService) {
        this._translationLoaderService = _translationLoaderService;
        this.skills = {
            technologies: [{ name: "Python, Django, Flask", percent: 95, remark: 'excellent' }, { name: "Java, Spring-Boot", percent: 75, remark: 'good' }, { name: "PHP, CodeIgniter", percent: 75, remark: 'good' }, { name: "JavaScript,TypeScript, Angular 8+", percent: 75, remark: 'good' }, { name: "Golang, Gin", percent: 50, remark: 'average' }],
            tools: [{ name: "Git", percent: 90, remark: 'excellent' }, { name: "Linux, Windows", percent: 90, remark: 'very-good' }, { name: "MySQL, PostgreSQL, MongoDB", percent: 90, remark: 'excellent' }, { name: "Docker, Jenkins", percent: 75, remark: 'good' }, { name: "Jupyter Notebook, Selenium, Scrappy", percent: 50, remark: 'average' }],
            methodologies: [{ name: "Scrum, Agile", percent: 75, remark: 'very-good' }, { name: "SDS, SRS, Documentation", percent: 75, remark: 'very-good' }, { name: "PDCA", percent: 75, remark: 'very-good' }, { name: "DevOps", percent: 75, remark: 'very-good' }, { name: "TDD, Testing", percent: 60, remark: 'average' }]
        };
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__["locale"], _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_2__["locale"]);
    }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"])); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 29, vars: 15, consts: [["id", "skills"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row", "mt-2"], ["data-aos", "fade-up ", "data-aos-anchor-placement", "center-bottom", "data-aos-delay", "300", 1, "col-lg-4"], [1, "h5"], ["id", "skillgraph"], ["class", "row skill-row", 4, "ngFor", "ngForOf"], ["data-aos", "fade-down", "data-aos-anchor-placement", "center-bottom", "data-aos-delay", "300", 1, "col-lg-4"], ["id", "skillgraph", 1, "panel", "panel-default"], ["data-aos", "fade-up", "data-aos-anchor-placement", "center-bottom", "data-aos-delay", "300", 1, "col-lg-4"], [1, "row", "skill-row"], [1, "label", "d-flex", "flex-row"], [1, "skillLabel"], [1, "skill-percent"], [1, "skillData-Wrapper"], [1, "skillData", "bg-rust", 3, "ngClass"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SkillsComponent_div_14_Template, 8, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SkillsComponent_div_21_Template, 8, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SkillsComponent_div_28_Template, 8, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, "skills.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, "skills.technologies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills.technologies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, "skills.tools"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills.tools);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 13, "skills.methodologies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills.methodologies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".bg-lightgray[_ngcontent-%COMP%], .skillData-Wrapper[_ngcontent-%COMP%] {\r\n    background-color: #ddd;\r\n}\r\n.skillData-Wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n#skillgraph[_ngcontent-%COMP%] {\r\n  padding: 1em; \r\n}\r\n.skill-percent[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  font-weight: 500;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n.skillLabel[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  font-weight: 600;\r\n  font-family: \"Poppins\", sans-serif;\r\n  color: #050d18d7;\r\n\r\n}\r\n.competence-Wrapper[_ngcontent-%COMP%]{\r\n  line-height: 0.1 0.7em;\r\n  height: 12px;\r\n  width: .1em;\r\n  float: left;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n.skillData-Wrapper[_ngcontent-%COMP%], .label[_ngcontent-%COMP%] {\r\n  width: 100%; \r\n}\r\n.skillData[_ngcontent-%COMP%], .skillData-Wrapper[_ngcontent-%COMP%] {\r\n  line-height: 0.1 0.7em;\r\n  height: 12px;\r\n  float: left;\r\n  color: white;\r\n  text-align: center; \r\n}\r\n.excellent[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n}\r\n.very-good[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n}\r\n.good[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n}\r\n.average[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\n.bg-rust[_ngcontent-%COMP%] {\r\n    background-color: #149ddd;\r\n}\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxnQkFBZ0I7O0FBRWxCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWxpZ2h0Z3JheSwgLnNraWxsRGF0YS1XcmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuLnNraWxsRGF0YS1XcmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jc2tpbGxncmFwaCB7XHJcbiAgcGFkZGluZzogMWVtOyBcclxufVxyXG5cclxuLnNraWxsLXBlcmNlbnR7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNraWxsTGFiZWx7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzA1MGQxOGQ3O1xyXG5cclxufVxyXG5cclxuLmNvbXBldGVuY2UtV3JhcHBlcntcclxuICBsaW5lLWhlaWdodDogMC4xIDAuN2VtO1xyXG4gIGhlaWdodDogMTJweDtcclxuICB3aWR0aDogLjFlbTtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2tpbGxEYXRhLVdyYXBwZXIsIC5sYWJlbCB7XHJcbiAgd2lkdGg6IDEwMCU7IFxyXG59XHJcblxyXG4uc2tpbGxEYXRhLCAuc2tpbGxEYXRhLVdyYXBwZXIge1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjEgMC43ZW07XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHJcblxyXG4uZXhjZWxsZW50e1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi52ZXJ5LWdvb2R7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmdvb2R7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmF2ZXJhZ2V7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmJnLXJ1c3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0OWRkZDtcclxufVxyXG5cclxuYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"] }]; }, null); })();


/***/ }),

/***/ "pBoa":
/*!***********************************!*\
  !*** ./src/app/api/projectsFr.ts ***!
  \***********************************/
/*! exports provided: projectsFr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsFr", function() { return projectsFr; });
const projectsFr = [
    {
        id: "VIS",
        name: "Virtual Internship System",
        technologies: 'Python, Django, Angular.js, MongoDB',
        images: [
            {
                title: 'ホーム',
                src: "assets/images/vis-home.png",
            },
            {
                title: 'ユーザー',
                src: "assets/images/vis-user.png",
            },
            {
                title: '管理者',
                src: "assets/images/vis-admin.png",
            },
        ],
        url: "https://www.vinternship.org/",
        detail: "<p>このオンラインプラットフォームは、コンピューターサイエンスの新卒インターンに、業界のプロフェッショナルからのトレーニングを提供するために設計されています。このプログラムでは、インターンが特定のコースの全プロセスを経験し、完了後に評価と認定を受けます。</p><p>このプロジェクトは元々eSRD-Labによって開発され、現在はMySoft LimitedとRISE BUETとの共同で実行されています。ICT Division Innovation Fundの資金提供によって可能になりました。</p>",
        codeSourceUrl: 'https://github.com/eSRD-Lab/VIS-Platform',
        detailIsDisplayed: false,
    },
    {
        id: "NCDW",
        name: "National Health Data Warehouse",
        technologies: 'Python, Flask, Angular 8, PostgreSQL',
        images: [
            {
                title: 'ホーム',
                src: "assets/images/ncdw-home.png",
            },
            {
                title: '地図',
                src: "assets/images/ncdw-map.png",
            },
            {
                title: "管理者",
                src: "assets/images/ncdw-lab.png",
            }
        ],
        url: 'http://103.94.135.217:4444/home',
        detail: "<p>この研究プロジェクトは、学術界と産業界の共同作業です。このプロジェクトでは、Flask APIを使用してデータウェアハウスからデータを抽出しました。そのデータをD3とChart jsグラフを使用してフロントエンドで視覚化しました。</p><p>このプロジェクトは、ICT Division Innovation Fundの資金提供によって実現しました。</p>",
        codeSourceUrl: 'https://github.com/eSRD-Lab/NCDW-Frontend',
        detailIsDisplayed: false,
    },
    {
        id: "HMS",
        name: "Hospital Management System",
        technologies: 'Java, SpringBoot, Angular 8, MongoDB',
        images: [
            {
                title: 'ホーム',
                src: "assets/images/HMS-home.png",
            },
            {
                title: 'ユーザー',
                src: "assets/images/hms-doctor.png",
            },
            {
                title: "請求書",
                src: "assets/images/hms-report.png",
            },
        ],
        url: 'https://github.com/tanvirkse101/Spring-Boot-Anuglar-Project',
        detail: "このプロジェクトは、学術インターンシッププロジェクトのために作成された病院管理システムのデモ版です。このシステムには、医師、患者、薬剤、および関連するその他のエンティティのCRUD（作成、読み取り、更新、削除）実装が含まれています。このプロジェクトの目的は、データベースとユーザーインターフェースの使用を含め、このようなシステムがどのように設計・実装されるかを実用的にデモンストレーションすることです。",
        codeSourceUrl: 'https://github.com/tanvirkse101/Spring-Boot-Anuglar-Project',
        detailIsDisplayed: false,
    },
];


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curriculum-vitae/curriculum-vitae.component */ "AY9o");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











const routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
    { path: 'cv', component: _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumVitaeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot(),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot(),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vaew":
/*!*******************************************************!*\
  !*** ./src/app/service/translation-loader.service.ts ***!
  \*******************************************************/
/*! exports provided: TranslationLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationLoaderService", function() { return TranslationLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class TranslationLoaderService {
    /**
     * Constructor
     *
     * @param {TranslateService} _translateService
     */
    constructor(_translateService) {
        this._translateService = _translateService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Load translations
     *
     * @param {Locale} args
     */
    loadTranslations(...args) {
        const locales = [...args];
        locales.forEach((locale) => {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            this._translateService.setTranslation(locale.lang, locale.data, true);
        });
    }
}
TranslationLoaderService.ɵfac = function TranslationLoaderService_Factory(t) { return new (t || TranslationLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TranslationLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslationLoaderService, factory: TranslationLoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/fr */ "asqy");
/* harmony import */ var _api_projectsEn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/projectsEn */ "+YTG");
/* harmony import */ var _api_projectsFr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/projectsFr */ "pBoa");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ProjectsComponent_div_8_a_5_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 23);
} }
function ProjectsComponent_div_8_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_8_a_5_i_1_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", image_r6.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", image_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r7 == 0);
} }
function ProjectsComponent_div_8_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_8_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_8_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 24);
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", project_r1.detail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "backgroundImage": a0 }; };
function ProjectsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_div_8_a_5_Template, 2, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Technologies:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_8_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const project_r1 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.detailOnClick(project_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectsComponent_div_8_span_21_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProjectsComponent_div_8_span_22_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProjectsComponent_div_8_div_25_Template, 1, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", project_r1.id, "-img");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, "url(" + project_r1.images[0].src + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", project_r1.id, "-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r1.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1.codeSourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 13, "projects.sourceCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !project_r1.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 15, "projects.projectDetail"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.detailIsDisplayed);
} }
class ProjectsComponent {
    constructor(_translationLoaderService, _translateService) {
        this._translationLoaderService = _translationLoaderService;
        this._translateService = _translateService;
        this.projects = _api_projectsEn__WEBPACK_IMPORTED_MODULE_3__["projectsEn"];
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__["locale"], _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_2__["locale"]);
        this._translateService.onLangChange.subscribe(() => {
            if (this._translateService.currentLang == "en") {
                this.projects = _api_projectsEn__WEBPACK_IMPORTED_MODULE_3__["projectsEn"];
            }
            else {
                this.projects = _api_projectsFr__WEBPACK_IMPORTED_MODULE_4__["projectsFr"];
            }
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        console.log("after view init");
        this.onMouse("portfolio-link", "portfolio-img");
        this.onMouse("VIS-link", "VIS-img");
        this.onMouse("NCDW-link", "NCDW-img");
        this.onMouse("HMS-link", "HMS-img");
        this.onMouse("riddle-link", "riddle-img");
        this.venobox = $('.venobox');
        this.venobox.venobox();
    }
    detailOnClick(project) {
        this.projects.filter(item => item.detailIsDisplayed && item.id != project.id).map(elem => elem.detailIsDisplayed = false);
        project.detailIsDisplayed = !project.detailIsDisplayed;
    }
    onMouse(idLink, idImage) {
        $('#' + idLink).on("mouseenter", function () {
            console.log('on mouseenter');
            $('#' + idImage).css("opacity", "0.3");
            $('#' + idLink).css("opacity", "1");
        }).on('mouseleave', function () {
            $('#' + idImage).css("opacity", "1");
            $('#' + idLink).css("opacity", "0");
        });
        $('#' + idImage).on("mouseenter", function () {
            $('#' + idImage).css("opacity", "0.3");
            $('#' + idLink).css("opacity", "1");
        }).on('mouseleave', function () {
            $('#' + idImage).css("opacity", "1");
            $('#' + idLink).css("opacity", "0");
        });
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__["TranslationLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 9, vars: 4, consts: [["id", "portfolio"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row"], ["class", "col-lg-4 col-sm-12 ", "data-aos", "flip-up", 4, "ngFor", "ngForOf"], ["data-aos", "flip-up", 1, "col-lg-4", "col-sm-12"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded", 2, "border-radius", "50px"], [1, "card-header", "d-flex", "flex-column", 2, "height", "300px", "width", "100%"], [1, "img-wrap", 2, "height", "300px", "width", "100%", 3, "id", "ngStyle"], [1, "links", "mt-auto", "d-flex", "justify-content-center", 3, "id"], ["data-gall", "project.id", "class", "venobox vbox-item", 3, "href", "title", 4, "ngFor", "ngForOf"], ["title", "", "target", "_BLANK", 3, "href"], [1, "bx", "bx-link", "bx-md"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "d-flex", "flex-row", "justify-content-center"], ["target", "_blank", "target", "_blank", "type", "button", 1, "btn", "btn-primary", "mr-3", 3, "href"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["class", "mt-3", 3, "innerHTML", 4, "ngIf"], ["data-gall", "project.id", 1, "venobox", "vbox-item", 3, "href", "title"], ["class", "bx bx-zoom-in bx-md", 4, "ngIf"], [1, "bx", "bx-zoom-in", "bx-md"], [1, "mt-3", 3, "innerHTML"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_div_8_Template, 26, 19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "projects.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["h2[_ngcontent-%COMP%]{\r\n  color: rgb(22, 59, 90);\r\n}\r\n\r\nli.not-active[_ngcontent-%COMP%]{\r\n  background-color: rgb(95, 146, 161);\r\n}\r\n\r\nli.active[_ngcontent-%COMP%]{\r\n  background-color: rgb(6, 46, 58);\r\n}\r\n\r\n.img-wrap[_ngcontent-%COMP%] {\r\n  vertical-align: top;\r\n  transition: opacity 3s;\r\n  -webkit-transition: opacity 0.8s;\r\n  opacity: 1;\r\n  background: top center;\r\n  background-size: cover;\r\n  position: relative;\r\n  height: 250px;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]{\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 30%;\r\n  left: 0;\r\n  right: 0;\r\n  text-align: center;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  height: 250px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  padding: 1.25rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87RUFDUCxRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDJ7XHJcbiAgY29sb3I6IHJnYigyMiwgNTksIDkwKTtcclxufVxyXG5cclxubGkubm90LWFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTUsIDE0NiwgMTYxKTtcclxufVxyXG5cclxubGkuYWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA0NiwgNTgpO1xyXG59XHJcblxyXG4uaW1nLXdyYXAge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC44cztcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJhY2tncm91bmQ6IHRvcCBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmtze1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiAxLjI1cmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__["TranslationLoaderService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
aos__WEBPACK_IMPORTED_MODULE_2__["init"]();
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map