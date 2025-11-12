/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeAlert: () => (/* binding */ removeAlert),
/* harmony export */   summonAlert: () => (/* binding */ summonAlert)
/* harmony export */ });

const body = document.querySelector(".alert-wrapper");
const removeAlert = ({
  template
}) => {
  const templateContent = document.querySelector(`${template}`);
  templateContent.remove();
};
const summonAlert = (input) => {
  let template;
  let text;
  if (typeof input === "string") {
    template = input;
  } else if (typeof input === "object" && input !== null) {
    template = input.template;
    text = input.text;
  } else {
    console.log("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0442\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F summonAlert. \u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F \u0441\u0442\u0440\u043E\u043A\u0430 (template) \u0438\u043B\u0438 \u043E\u0431\u044A\u0435\u043A\u0442 { template, text }.");
    return;
  }
  if (typeof template !== "string" || !template.startsWith("#")) {
    console.log('\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D. \u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F \u0441\u0442\u0440\u043E\u043A\u0430, \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u0441 "#", \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 "#alert--request".');
    return;
  }
  const alertName = template.slice(1);
  const alertTemplate = document.querySelector(`#${alertName}`);
  if (!alertTemplate) {
    console.log(`#${alertName} \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.`);
    return;
  }
  const oldAlert = document.querySelector(`.${alertName}`);
  if (oldAlert) {
    oldAlert.remove();
  }
  const templateContent = alertTemplate.content.cloneNode(true);
  const alert = templateContent.querySelector(`.${alertName}`);
  if (!alert) {
    console.log(`\u0412 \u0448\u0430\u0431\u043B\u043E\u043D\u0435 #${alertName} \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u043E\u0440\u043D\u0435\u0432\u043E\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 .${alertName}`);
    return;
  }
  const close = alert.querySelector(".alert__close");
  const textContainer = alert.querySelector(".alert__container");
  if (text && textContainer) {
    textContainer.innerHTML = text;
  }
  const closeAlert = () => {
    alert.remove();
  };
  if (close) {
    close.addEventListener("click", closeAlert);
  }
  body.append(templateContent);
  alert.classList.add("alert--bounce");
};



/***/ }),

/***/ 11:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popUp_popUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);


const setCookie = (name, value) => {
  const updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};path=/;max-age=31536000;`;
  document.cookie = updatedCookie;
};
const getCookie = (name) => {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1")}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : void 0;
};
const showMessage = () => {
  (0,_popUp_popUp__WEBPACK_IMPORTED_MODULE_0__.summonPopUp)({
    template: "#cookie",
    blockScroll: false,
    overlay: {
      use: false,
      closeOnClick: false
    },
    esc: {
      closeOnEsc: false
    }
  });
  const closeButton = document.querySelector(".cookie__button");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      setCookie("agreeCookie", true);
    });
  }
};
const cookie = () => {
  const result = getCookie("agreeCookie");
  if (result === void 0) {
    showMessage();
  }
};
cookie();


/***/ }),

/***/ 43:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 57:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

const up = document.querySelector(".up");
const scrollableHeight = 300;
if (up) {
  let scrollPosition = 0;
  up.addEventListener("click", () => {
    window.scroll(0, 0);
  });
  window.addEventListener("scroll", () => {
    if (window.pageYOffset <= scrollPosition && window.pageYOffset >= scrollableHeight) {
      up.classList.add("up--visible");
      scrollPosition = window.pageYOffset;
    } else {
      up.classList.remove("up--visible");
      scrollPosition = window.pageYOffset;
    }
  });
}


/***/ }),

/***/ 73:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(150);



const sliderInit = (container) => {
  const slider = container;
  if (!slider)
    return;
  const swiper = slider.querySelector(".swiper");
  const buttonPrev = slider.querySelector(".slider__button--prev");
  const buttonNext = slider.querySelector(".slider__button--next");
  new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(swiper, {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .Vx, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .dK, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Autoplay */ .Ij],
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 15,
    loop: false,
    autoplay: {
      delay: 5e3,
      disableOnInteraction: false
    },
    // Navigation arrows
    navigation: {
      prevEl: buttonPrev,
      nextEl: buttonNext,
      disabledClass: "slider__button--disabled",
      lockClass: "slider__button--lock"
    },
    // Pagination
    pagination: {
      el: ".slider__pagination",
      clickable: true,
      bulletClass: "slider__bullet",
      bulletActiveClass: "slider__bullet--active",
      type: "bullets"
    },
    // Responsive breakpoints
    breakpoints: {
      768: {
        spaceBetween: 30
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 60
      }
    }
  });
};
const sliders = document.querySelectorAll(".slider");
sliders.forEach((el) => {
  sliderInit(el);
});


/***/ }),

/***/ 78:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./icon-5corners.svg": 640,
	"./icon-arrow-right.svg": 913,
	"./icon-nav-arrow-left.svg": 242,
	"./icon-nav-arrow-right.svg": 473,
	"assets/icons/icon-5corners.svg": 640,
	"assets/icons/icon-arrow-right.svg": 913,
	"assets/icons/icon-nav-arrow-left.svg": 242,
	"assets/icons/icon-nav-arrow-right.svg": 473
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 78;

/***/ }),

/***/ 143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(670);


const header = document.querySelector("header");
const mobileNav = document.querySelector(".mobile-nav");
if (mobileNav) {
  const links = mobileNav.querySelectorAll(".mobile-nav__link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
      if (header) {
        header.classList.remove("header--dropdown");
      }
    });
  });
}


/***/ }),

/***/ 147:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./alert-wrapper/alert-wrapper.js": 937,
	"./alert/alert.js": 9,
	"./button/button.js": 271,
	"./components.js": 820,
	"./cookie/cookie.js": 11,
	"./field/field.js": 205,
	"./footer/footer.js": 413,
	"./header/header.js": 689,
	"./intro/intro.js": 189,
	"./layout/layout.js": 995,
	"./mobile-nav/mobile-nav.js": 143,
	"./popUp/popUp.js": 417,
	"./promo/promo.js": 945,
	"./request/request.js": 745,
	"./service-card/service-card.js": 43,
	"./site-nav/site-nav.js": 761,
	"./slider/slider.js": 73,
	"./up/up.js": 57,
	"./validator/validator.js": 489,
	"./video/video.js": 305,
	"./wave-text/wave-text.js": 438,
	"./window/window.js": 919,
	"components/alert-wrapper/alert-wrapper.js": 937,
	"components/alert/alert.js": 9,
	"components/button/button.js": 271,
	"components/components.js": 820,
	"components/cookie/cookie.js": 11,
	"components/field/field.js": 205,
	"components/footer/footer.js": 413,
	"components/header/header.js": 689,
	"components/intro/intro.js": 189,
	"components/layout/layout.js": 995,
	"components/mobile-nav/mobile-nav.js": 143,
	"components/popUp/popUp.js": 417,
	"components/promo/promo.js": 945,
	"components/request/request.js": 745,
	"components/service-card/service-card.js": 43,
	"components/site-nav/site-nav.js": 761,
	"components/slider/slider.js": 73,
	"components/up/up.js": 57,
	"components/validator/validator.js": 489,
	"components/video/video.js": 305,
	"components/wave-text/wave-text.js": 438,
	"components/window/window.js": 919
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 147;

/***/ }),

/***/ 153:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(670);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(947);
/* harmony import */ var tippy_js_animations_scale_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(730);
/* harmony import */ var tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(814);
/* harmony import */ var tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(309);
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(820);
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_components_js__WEBPACK_IMPORTED_MODULE_5__);
const import_meta = {};
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(__webpack_require__(78));











let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

if (import_meta.webpackHot) {
  import_meta.webpackHot.accept();
}


/***/ }),

/***/ 189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);


const initFieldSelect = (func) => {
  const selects = document.querySelectorAll(".field__input--select:not(.field__input--select--js)");
  if (selects.length > 0) {
    selects.forEach((select) => {
      select.classList.add("field__input--select--js");
      const choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(select, {
        searchEnabled: "search" in select.dataset,
        shouldSort: false,
        classNames: {
          containerOuter: "choices field__choices",
          input: "field__input"
        },
        itemSelectText: ""
      });
      select.addEventListener("hideDropdown", () => {
        document.querySelector(".field__choices").querySelectorAll(".is-highlighted").forEach((el) => {
          el.classList.remove("is-highlighted");
        });
      });
      if (func) {
        select.addEventListener("addItem", (event) => {
          func(event);
        });
      }
      const form = select.closest("form");
      form.addEventListener("reset", () => {
        choicesNolint.setChoiceByValue("");
      });
    });
  }
};
initFieldSelect();


/***/ }),

/***/ 242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-nav-arrow-left",
  "use": "icon-nav-arrow-left-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-nav-arrow-left\">\n<path d=\"M25 10L15 20L25 30\" stroke=\"#EE2737\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ }),

/***/ 271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const generateURL = (id) => {
  const query = "?rel=0&showinfo=0&autoplay=1";
  return `https://www.youtube.com/embed/${id}${query}`;
};
const createIframe = (id) => {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL(id));
  iframe.classList.add("video__media");
  return iframe;
};
const parseMediaURL = (video) => {
  const regexp = /https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/i;
  const url = video.href;
  const match = url.match(regexp);
  return match[1];
};
const setupVideo = (video) => {
  const link = video.querySelector(".video__link");
  const button = video.querySelector(".video__button");
  const source = video.querySelector("source");
  const media = video.querySelector(".video__media");
  const id = parseMediaURL(link);
  source.setAttribute("srcset", `https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`);
  media.setAttribute("src", `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  video.addEventListener("click", () => {
    const iframe = createIframe(id);
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });
  link.removeAttribute("href");
  video.classList.add("video--enabled");
};
const findVideos = () => {
  document.querySelectorAll(".video__wrapper").forEach((el) => {
    setupVideo(el);
  });
};
findVideos();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findVideos);


/***/ }),

/***/ 413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removePopUp: () => (/* binding */ removePopUp),
/* harmony export */   summonPopUp: () => (/* binding */ summonPopUp)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(670);


const body = document.querySelector("body");
const openPopup = (options) => {
  const {
    template,
    blockScroll = true,
    redirect,
    overlay = {
      use: true,
      closeOnClick: true
    },
    esc = {
      closeOnEsc: true
    }
  } = options;
  const popUpName = template.replace(/^#/, "");
  const templateElement = document.querySelector(`#${popUpName}`);
  if (!templateElement) {
    console.warn(`#${popUpName} \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.`);
    return;
  }
  if (document.querySelector(`.${popUpName}`)) {
    console.warn(`\u041C\u043E\u0434\u0430\u043B\u043A\u0430 ${popUpName} \u0443\u0436\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u0430.`);
    return;
  }
  const templateContent = templateElement.content.cloneNode(true);
  const popup = templateContent.querySelector(`.${popUpName}`);
  if (!popup) {
    console.error(`\u0412 \u0448\u0430\u0431\u043B\u043E\u043D\u0435 #${popUpName} \u043D\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0441 \u043A\u043B\u0430\u0441\u0441\u043E\u043C .${popUpName}`);
    return;
  }
  body.append(popup);
  const overlayEl = popup.querySelector(".popUp__overlay");
  const closes = popup.querySelectorAll(".popUp__close");
  function removePopup() {
    popup.remove();
    if (blockScroll && !document.querySelector(".popUp")) {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
    }
    document.removeEventListener("keydown", onPopupEscPress);
    if (redirect) {
      setTimeout(() => {
        window.location.href = redirect;
      }, 300);
    }
  }
  function onPopupEscPress(evt) {
    if (!esc.closeOnEsc)
      return;
    if (evt.code !== "Escape")
      return;
    evt.preventDefault();
    removePopup();
  }
  if (blockScroll)
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingOnBody */ .rP)();
  if (overlayEl) {
    if (overlay.use && overlay.closeOnClick) {
      overlayEl.addEventListener("click", removePopup);
    } else if (!overlay.use) {
      overlayEl.remove();
    }
  }
  closes.forEach((close) => close.addEventListener("click", removePopup));
  if (esc.closeOnEsc) {
    document.addEventListener("keydown", onPopupEscPress);
  }
};
const summonPopUp = (arg1, arg2, arg3) => {
  if (typeof arg1 === "object" && arg1 !== null) {
    const {
      template,
      blockScroll = true,
      redirect,
      overlay = {
        use: true,
        closeOnClick: true
      },
      esc = {
        closeOnEsc: true
      }
    } = arg1;
    if (!template) {
      console.warn("\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D template \u0434\u043B\u044F \u043C\u043E\u0434\u0430\u043B\u043A\u0438");
      return;
    }
    openPopup({
      template,
      blockScroll,
      redirect,
      overlay,
      esc
    });
  } else if (typeof arg1 === "string") {
    const template = arg1;
    const blockScroll = arg2 !== void 0 ? arg2 : true;
    const redirect = arg3;
    openPopup({
      template,
      blockScroll,
      redirect,
      overlay: {
        use: true,
        closeOnClick: true
      },
      esc: {
        closeOnEsc: true
      }
    });
  } else {
    console.warn("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F summonPopUp");
  }
};
const removePopUp = (arg) => {
  const findPopup = (name) => {
    if (name.startsWith("#"))
      return document.querySelector(`.${name.slice(1)}`);
    const cls = name.startsWith(".") ? name : `.${name}`;
    return document.querySelector(cls);
  };
  let popup = null;
  if (typeof arg === "string") {
    popup = findPopup(arg);
  } else if (typeof arg === "object" && arg !== null) {
    popup = findPopup(arg.template);
  }
  if (!popup)
    return;
  popup.remove();
  if (!document.querySelector(".popUp__overlay"))
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
};



/***/ }),

/***/ 438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(880);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(575);
/* harmony import */ var gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(373);



gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u, gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__/* .SplitText */ .A);
const initScrollRevealRandomWords = (selector) => {
  document.querySelectorAll(selector).forEach((title) => {
    const split = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__/* .SplitText */ .A(title, { type: "words" });
    const words = split.words;
    words.forEach((word) => {
      word.style.display = "inline-block";
      word.style.transform = "translateZ(0)";
      word.style.backfaceVisibility = "hidden";
      word.style.willChange = "transform, opacity";
    });
    const shuffledWords = gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.utils.shuffle([...words]);
    gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.from(shuffledWords, {
      y: 50,
      // Смещение снизу.
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: {
        each: 0.2,
        from: "random"
        // Случайный порядок появления.
      },
      scrollTrigger: {
        trigger: title,
        start: "top bottom",
        once: true
        // Анимация срабатывает только один раз.
      }
    });
  });
};
initScrollRevealRandomWords(".wave-text");


/***/ }),

/***/ 473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-nav-arrow-right",
  "use": "icon-nav-arrow-right-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-nav-arrow-right\">\n<path d=\"M15 10L25 20L15 30\" stroke=\"#EE2737\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ }),

/***/ 489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusFirstInput: () => (/* binding */ focusFirstInput),
/* harmony export */   initAgreeCheckbox: () => (/* binding */ initAgreeCheckbox),
/* harmony export */   initChoicesValidation: () => (/* binding */ initChoicesValidation),
/* harmony export */   initFileLoadInput: () => (/* binding */ initFileLoadInput),
/* harmony export */   initPasswordEye: () => (/* binding */ initPasswordEye),
/* harmony export */   initSelectValidation: () => (/* binding */ initSelectValidation),
/* harmony export */   maskNumber: () => (/* binding */ maskNumber),
/* harmony export */   maskPhone: () => (/* binding */ maskPhone),
/* harmony export */   validateForm: () => (/* binding */ validateForm)
/* harmony export */ });
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(660);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formbouncerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_2__);




const getDescription = (field, deep = false) => {
  var _a, _b, _c, _d;
  if (deep) {
    return ((_c = (_b = (_a = field.parentElement) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.parentElement) == null ? void 0 : _c.querySelector(".validator__description")) || null;
  }
  return ((_d = field.parentElement) == null ? void 0 : _d.querySelector(".validator__description")) || null;
};
const setState = (field, isValid, description = null) => {
  field.classList.toggle("validator__input--valid", isValid);
  field.classList.toggle("validator__input--error", !isValid);
  if (description) {
    description.classList.toggle("validator__description--valid", isValid);
    description.classList.toggle("validator__description--error", !isValid);
  }
  field.setAttribute("aria-invalid", String(!isValid));
  return !isValid;
};
const patterns = {
  text: /^([a-zA-ZА-Яа-яЁё.-]+\s?)*$/,
  textarea: /^([\wА-Яа-яЁё\s-!$%^&*()_+|~=`{}\[\]:;<>?",.@#№'"«»\\/]+)*$/,
  email: /^[a-zA-ZА-Яа-я0-9._-]+@[a-zA-ZА-Яа-я-]+\.[a-zA-ZА-Яа-я]{2,}$/,
  password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,64}$/
};
const validators = {
  required(field) {
    if (!field.classList.contains("validator__required"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    return setState(field, field.value.trim() !== "", description);
  },
  text(field) {
    if (!field.classList.contains("validator__text"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    const isValid = patterns.text.test(field.value) && field.value.length >= 2 && field.value.length <= 225;
    return setState(field, isValid, description);
  },
  textarea(field) {
    if (!field.classList.contains("validator__textarea"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    const isValid = patterns.textarea.test(field.value) && field.value.length >= 4 && field.value.length <= 225;
    return setState(field, isValid, description);
  },
  number(field) {
    if (!field.classList.contains("validator__number"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    const isValid = field.value.length >= 1 && field.value.length <= 225;
    return setState(field, isValid, description);
  },
  minmax(field) {
    if (!field.classList.contains("validator__minmax"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    const min = parseInt(field.getAttribute("minlength"), 10) || 0;
    const max = parseInt(field.getAttribute("maxlength"), 10) || Infinity;
    const isValid = field.value.length >= min && field.value.length <= max;
    return setState(field, isValid, description);
  },
  email(field) {
    if (!field.classList.contains("validator__mail"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    return setState(field, patterns.email.test(field.value), description);
  },
  ruPhone(field) {
    if (!field.classList.contains("validator__phone"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    return setState(field, field.value.length === 10, description);
  },
  intPhone(field) {
    var _a;
    if (!field.classList.contains("validator__country-phone"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    const maskLength = ((_a = field.getAttribute("data-mask")) == null ? void 0 : _a.length) || 0;
    return setState(field, field.value.length === maskLength, description);
  },
  password(field) {
    if (!field.classList.contains("validator__password"))
      return false;
    if (field.disabled)
      return false;
    const description = getDescription(field);
    return setState(field, patterns.password.test(field.value), description);
  },
  passwordMatch(field) {
    const selector = field.getAttribute("data-bouncer-match");
    if (!selector)
      return false;
    if (field.disabled)
      return false;
    const otherField = field.form.querySelector(selector);
    if (!otherField)
      return false;
    return setState(field, otherField.value === field.value, getDescription(field));
  },
  select(field) {
    var _a;
    if (!field.classList.contains("validator__select"))
      return false;
    if (field.disabled)
      return false;
    const isValid = ((_a = field.options[field.selectedIndex]) == null ? void 0 : _a.value) !== "";
    return setState(field.parentElement, isValid);
  },
  choices(field) {
    if (!field.classList.contains("validator__choices"))
      return false;
    if (field.disabled)
      return false;
    const wrapper = field.parentElement;
    const description = getDescription(field);
    field.addEventListener("change", () => {
      wrapper.classList.remove("validator__input--error");
      if (description)
        description.classList.remove("validator__description--error");
    });
    const isValid = field.hasAttribute("multiple") ? field.selectedIndex !== -1 : field.options[field.selectedIndex].value !== "";
    wrapper.classList.toggle("validator__input--valid", isValid);
    wrapper.classList.toggle("validator__input--error", !isValid);
    if (description) {
      description.classList.toggle("validator__description--valid", isValid);
      description.classList.toggle("validator__description--error", !isValid);
    }
    return !isValid;
  },
  checkbox(field) {
    if (!field.classList.contains("validator__checkbox"))
      return false;
    if (field.disabled)
      return false;
    const { name } = field.dataset;
    const list = document.querySelectorAll(`.validator__checkbox[data-name="${name}"]`);
    const isValid = Array.from(list).some((el) => el.checked);
    list.forEach((el) => {
      el.classList.toggle("validator__input--valid", isValid);
      el.classList.toggle("validator__input--error", !isValid);
    });
    return !isValid;
  }
};
const validateForm = (formSelector) => {
  const formEl = document.querySelector(formSelector);
  let validator = new (formbouncerjs__WEBPACK_IMPORTED_MODULE_1___default())(formSelector, {
    fieldClass: "validator__input--error",
    errorClass: "validator__error",
    disableSubmit: true,
    emitEvents: true,
    patterns: {
      email: /^[a-zA-ZА-Яа-я0-9._-]+@[a-zA-ZА-Яа-я-]+\.[a-zA-ZА-Яа-я]{2,}$/
    },
    customValidations: validators,
    // подключаем объект кастомных валидаторов
    messages: {
      missingValue: {
        default: "\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F!",
        file: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u0444\u0430\u0439\u043B!",
        tel: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D!"
      },
      patternMismatch: {
        default: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u043D\u0435 \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u044F\u0435\u0442 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C!"
      },
      wrongLength: {
        over: "wrongLength over",
        under: "wrongLength under"
      },
      outOfRange: {
        over: "outOfRange over",
        under: "outOfRange under"
      },
      text: "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E!",
      textarea: "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E!",
      number: "\u0414\u043E\u043F\u0443\u0441\u043A\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B!",
      ruPhone: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D!",
      intPhone: "\u0412\u044B\u0431\u0435\u0440\u0438 \u0438 \u0432\u0432\u0435\u0434\u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D!",
      password: "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0434\u043B\u0438\u043D\u043E\u0439 \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u0443 \u0446\u0438\u0444\u0440\u0443, \u0441\u0442\u0440\u043E\u0447\u043D\u0443\u044E \u0438 \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u0443\u044E \u043B\u0430\u0442\u0438\u043D\u0441\u043A\u0443\u044E \u0431\u0443\u043A\u0432\u0443, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B.",
      passwordMatch: "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442.",
      required: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0435!"
    }
  });
  const oldValidate = validator.validate;
  validator.validate = (field, options) => {
    var _a;
    if ((_a = field.closest("fieldset")) == null ? void 0 : _a.disabled)
      return false;
    return oldValidate(field, options);
  };
  formEl.addEventListener("reset", () => {
    validator.destroy();
    validator = validateForm(formSelector);
    formEl.querySelectorAll(".validator__description").forEach((desc) => {
      desc.classList.remove("validator__description--error", "validator__description--valid");
    });
    formEl.querySelectorAll(".validator__input--valid, .validator__input--error").forEach((input) => {
      input.classList.remove("validator__input--valid", "validator__input--error");
    });
    formEl.querySelectorAll("textarea").forEach((textarea) => {
      textarea.style.overflowY = "hidden";
    });
  });
  return validator;
};
const maskNumber = (formSelector, maxNumber) => {
  const numberMask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())(`9{0,${maxNumber}}`, {
    autoUnmask: true,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: ""
  });
  const inputs = document.querySelectorAll(`${formSelector} .validator__number`);
  inputs.forEach((field) => numberMask.mask(field));
};
const maskPhone = (formSelector, phoneClass) => {
  const phoneMask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())("+7 [(999) 999-99-99]", {
    autoUnmask: true,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: ""
  });
  const phonesContainers = document.querySelectorAll(`${formSelector}`);
  if (phonesContainers.length > 0) {
    phonesContainers.forEach((phonesContainer) => {
      const inputs = phonesContainer.querySelectorAll(".validator__phone");
      inputs.forEach((phone) => {
        phoneMask.mask(phone);
      });
    });
  }
};
const initPasswordEye = (formSelector) => {
  document.querySelectorAll(formSelector).forEach((container) => {
    container.querySelectorAll(".validator__eye").forEach((eye) => {
      var _a;
      const input = ((_a = eye.closest("label, .validator__password-wrapper")) == null ? void 0 : _a.querySelector('input[type="password"]')) || eye.parentElement.querySelector('input[type="password"]');
      if (!input)
        return;
      eye.addEventListener("click", () => {
        eye.classList.toggle("validator__eye--open");
        input.type = input.type === "password" ? "text" : "password";
      });
    });
  });
};
const initFileLoadInput = (form, template) => {
  const FILE_TYPES = ["jpg", "jpeg", "gif", "png"];
  const filesForm = document.querySelector(`${form}`);
  const filesContainer = filesForm.querySelector(".validator__file-container");
  const loadInput = filesContainer.querySelector(".validator__file-input");
  const sizeWarning = filesContainer.querySelector(".validator__size-warning");
  const loadedFilesContainer = filesForm.querySelector(".validator__loaded-files");
  const cleaner = filesForm.querySelector(".validator__cleaner");
  const submitButton = filesForm.querySelector('button[type="submit"]');
  cleaner.style.display = "none";
  filesForm.addEventListener("reset", () => {
    filesContainer.innerHTML = "";
    filesContainer.innerHTML = template;
    loadedFilesContainer.innerHTML = "";
    initFileLoadInput(`${form}`, template);
  }, { once: true });
  cleaner.addEventListener("click", () => {
    filesContainer.innerHTML = "";
    filesContainer.innerHTML = template;
    loadedFilesContainer.innerHTML = "";
    initFileLoadInput(`${form}`, template);
    submitButton.classList.remove("validator__submit--disabled");
    submitButton.disabled = false;
  });
  loadInput.addEventListener("change", () => {
    const files = Object.values(loadInput.files);
    loadedFilesContainer.innerHTML = "";
    let totalSize = 0;
    files.forEach((file) => {
      totalSize += file.size;
    });
    if (totalSize > 0) {
      cleaner.style.display = "grid";
    } else {
      cleaner.style.display = "none";
    }
    for (let i = 0; i < files.length; i += 1) {
      const fileName = files[i].name.toLowerCase();
      if (!FILE_TYPES.some((type) => fileName.endsWith(type))) {
        submitButton.classList.add("validator__submit--disabled");
        submitButton.disabled = true;
        sizeWarning.classList.add("validator__size-warning--exeeded");
        sizeWarning.textContent = "\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0442\u0438\u043F \u0444\u0430\u0439\u043B\u043E\u0432!";
        return;
      }
    }
    if (totalSize < 10485760 && files.length <= 3) {
      sizeWarning.classList.remove("validator__size-warning--exeeded");
      sizeWarning.textContent = "\u0414\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 3-\u0445 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 .jpeg, .gif, .png. \u0420\u0430\u0437\u043C\u0435\u0440 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 10 MB.";
      files.forEach((file) => {
        let str = file.size;
        str = str.toString();
        str = Math.ceil(str / 1024);
        const fileTemplate = `
          <div class="validator__file">
            <p class="validator__file-name">${file.name}</p>
            <p class='validator__size'>${str}&nbsp;\u041A\u0411</p>
          </div>
          `;
        loadedFilesContainer.insertAdjacentHTML("beforeend", fileTemplate);
      });
      submitButton.classList.remove("validator__submit--disabled");
      submitButton.disabled = false;
    } else if (totalSize > 10241440) {
      submitButton.classList.add("validator__submit--disabled");
      submitButton.disabled = true;
      sizeWarning.classList.add("validator__size-warning--exeeded");
      sizeWarning.textContent = "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u043E\u0432 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 10 \u041C\u0411!";
    } else if (files.length > 3) {
      submitButton.classList.add("validator__submit--disabled");
      submitButton.disabled = true;
      sizeWarning.classList.add("validator__size-warning--exeeded");
      sizeWarning.textContent = "\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D \u043B\u0438\u043C\u0438\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0444\u0430\u0439\u043B\u043E\u0432!";
    }
  });
};
const initSelectValidation = (formSelector) => {
  const formContainer = document.querySelector(formSelector);
  if (!formContainer)
    return;
  formContainer.querySelectorAll(".validator__select").forEach((select) => {
    const parent = select.parentElement;
    if (!parent)
      return;
    select.addEventListener("change", () => {
      parent.classList.remove("validator__input--error");
    });
  });
};
const initChoicesValidation = (formSelector) => {
  const formContainer = document.querySelector(formSelector);
  if (!formContainer)
    return;
  formContainer.querySelectorAll(".validator__choices").forEach((select) => {
    var _a, _b;
    const field = select.closest(".validator__field") || ((_b = (_a = select.parentElement) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.parentElement);
    if (!field)
      return;
    const description = field.querySelector(".validator__description");
    const customSelect = field.querySelector(".choices__inner");
    if (!customSelect)
      return;
    select.addEventListener("change", () => {
      customSelect.classList.remove("validator__input--error");
      description == null ? void 0 : description.classList.remove("validator__description--error");
    });
  });
};
const focusFirstInput = (form) => {
  const formContainer = document.querySelector(`${form}`);
  const input = formContainer.querySelector("input");
  input.focus();
};
const initAgreeCheckbox = (form) => {
  const checkboxContainer = document.querySelector(`${form}`);
  const checkboxLabel = checkboxContainer.querySelector(".validator__legal");
  const checkbox = checkboxContainer.querySelector(".validator__agree");
  const submitButton = checkboxContainer.querySelector('button[type="submit"]');
  checkboxLabel.addEventListener("click", () => {
    const isExeeded = checkboxContainer.querySelector(".validator__size-warning--exeeded");
    if (isExeeded) {
      submitButton.classList.add("validator__submit--disabled");
      submitButton.disabled = true;
      if (checkbox.checked === true) {
        checkbox.checked = false;
      } else {
        checkbox.checked = true;
      }
    } else if (checkbox.checked === true) {
      submitButton.classList.add("validator__submit--disabled");
      submitButton.disabled = true;
      checkbox.setAttribute("checked", false);
    } else {
      submitButton.classList.remove("validator__submit--disabled");
      submitButton.disabled = false;
      checkbox.setAttribute("checked", true);
    }
  });
};



/***/ }),

/***/ 640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-5corners",
  "use": "icon-5corners-usage",
  "viewBox": "0 0 17 17",
  "content": "<symbol viewBox=\"0 0 17 17\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-5corners\">\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.80933 13.6926L6.83265 13.7384L7.74211 16.5366L13.9685 11.4678L13.9918 11.4449H17L14.0151 4.03667L14.9479 1.23852L6.85744 1.74301L8.83845 3.1642L13.9221 4.03575L13.9921 4.05868H14.0154L13.2459 6.32931L13.8988 10.7559L13.9921 11.4439H13.9688H12.4297L11.5435 11.421L6.83296 13.7146V13.6687L6.08674 11.421L2.42556 7.72838L2.51884 7.65957L4.40772 6.30637L6.24997 2.86603L6.85628 1.76512V1.74309L6.85597 1.74311L4.43073 0L2.42524 7.70636L0 9.44947L6.80933 13.6926Z\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ }),

/***/ 670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $W: () => (/* binding */ createFormData),
/* harmony export */   Bs: () => (/* binding */ setTextareaAutoHeight),
/* harmony export */   Dl: () => (/* binding */ updateButtonState),
/* harmony export */   Ip: () => (/* binding */ startTimer),
/* harmony export */   Lx: () => (/* binding */ setStatus),
/* harmony export */   Qs: () => (/* binding */ activateRequestButtons),
/* harmony export */   XJ: () => (/* binding */ getScrollbarWidth),
/* harmony export */   iW: () => (/* binding */ getPaddingFromBody),
/* harmony export */   rP: () => (/* binding */ getPaddingOnBody),
/* harmony export */   sg: () => (/* binding */ debounce)
/* harmony export */ });
/* unused harmony exports shuffle, numberSplitter, PHONE_REG_EXP, INN_REG_EXP, BIRTHDAY_REG_EXP, TOKEN, scrollToErrorField */
/* harmony import */ var _components_alert_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _components_popUp_popUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(417);
/* harmony import */ var _components_validator_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(489);
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};





const PHONE_REG_EXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;
const BIRTHDAY_REG_EXP = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;
const INN_REG_EXP = /^(([0 - 9]{12})| ([0 - 9]{10}))?$/;
const TOKEN = "d11e752ae788e61213f01ae6952bdbd85ceaa025";
const body = document.querySelector("body");
const header = document.querySelector(".header__fixed");
const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
let checker = false;
const getPaddingOnBody = () => {
  const modal = document.querySelector(".Modal");
  const popUps = document.querySelectorAll(".popUp");
  const alertWrapper = document.querySelector(".alert-wrapper");
  if (!checker) {
    body.style.paddingRight = `${getScrollbarWidth()}px`;
    if (header) {
      header.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (modal) {
      modal.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (popUps) {
      popUps.forEach((popUp) => {
        popUp.style.paddingRight = `${getScrollbarWidth()}px`;
      });
    }
    if (alertWrapper) {
      alertWrapper.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    body.classList.add("static");
    checker = true;
  }
};
const getPaddingFromBody = () => {
  const modal = document.querySelector(".Modal");
  const popUps = document.querySelectorAll(".popUp");
  const alertWrapper = document.querySelector(".alert-wrapper");
  if (checker) {
    body.style.paddingRight = "";
    if (header) {
      header.style.paddingRight = "";
    }
    if (modal) {
      modal.style.paddingRight = "";
    }
    if (popUps) {
      popUps.forEach((popUp) => {
        popUp.style.paddingRight = "";
      });
    }
    if (alertWrapper) {
      alertWrapper.style.paddingRight = "";
    }
    body.classList.remove("static");
    checker = false;
  }
};
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const numberSplitter = (num) => {
  const n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1 ");
};
function OnInput() {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
}
const setTextareaAutoHeight = (area) => {
  const textareas = document.querySelectorAll(`${area}`);
  textareas.forEach((element) => {
    element.setAttribute("style", `height:${element.scrollHeight}px; overflow-y: hidden;`);
    element.addEventListener("input", OnInput);
  });
};
const isObject = (object) => {
  const type = typeof object;
  return type === "function" || type === "object";
};
const createFormData = (values) => {
  const data = new FormData();
  for (const key in values) {
    if (isObject(values[key])) {
      values[key].forEach((file, index) => {
        data.append(`${key}-${index}`, file);
      });
    } else {
      data.append(key, values[key]);
    }
  }
  return data;
};
const startTimer = (container, btn, tm) => {
  const button = btn;
  let time = tm;
  const timer = setInterval(() => {
    if (time < 1) {
      button.removeAttribute("disabled");
      container.style.display = "none";
      clearInterval(timer);
    } else {
      time -= 1;
      container.style.display = "";
      container.querySelector("b").textContent = `00:${String(time).padStart(2, "0")}`;
    }
  }, 1e3);
  return timer;
};
const debounce = (cb, delay = 500) => {
  let timeoutId;
  return function(...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cb.apply(context, args);
    }, delay);
  };
};
const scrollToErrorField = (form) => {
  form.addEventListener("bouncerFormInvalid", () => {
    const firstError = form.querySelector(".validator__input--error");
    const scrollToFirstError = (error) => {
      error.style.scrollMarginTop = "140px";
      error.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
      });
    };
    setTimeout(() => {
      scrollToFirstError(firstError);
    }, 100);
  });
};
const setStatus = (status) => {
  switch (status) {
    case "success":
      return "alert--blue";
    case "exclam":
      return "alert--star";
    case "error":
      return "alert--red";
    default:
      return "";
  }
};
const updateButtonState = (name) => {
  const checkbox = document.querySelector(`input[name="${name}"]`);
  const button = document.querySelector(`button[data-checkbox-name="${name}"]`);
  if (checkbox && button) {
    button.disabled = !checkbox.checked;
  }
};
const activateRequestButtons = (func) => {
  const buttons = document.querySelectorAll(".button-request:not(.button-request--js)");
  buttons.forEach((button) => {
    button.classList.add("button-request--js");
    button.addEventListener("click", (evt) => {
      evt.preventDefault();
      const _a = button.dataset, { type } = _a, info = __objRest(_a, ["type"]);
      if (!type) {
        console.warn("\u0423 \u043A\u043D\u043E\u043F\u043A\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D data-type, \u043C\u043E\u0434\u0430\u043B\u043A\u0430 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0432\u044B\u0437\u0432\u0430\u043D\u0430");
        return;
      }
      const modalSelector = `#modal--${type}`;
      const modalClass = `.modal--${type}`;
      (0,_components_popUp_popUp__WEBPACK_IMPORTED_MODULE_1__.summonPopUp)(modalSelector, true);
      const modal = document.querySelector(modalClass);
      if (!modal) {
        console.log(`\u041C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E ${modalSelector} \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E`);
        return;
      }
      setTextareaAutoHeight(`${modalClass} textarea`);
      const buttonForCheckbox = modal.querySelector("button[data-checkbox-name]");
      if (buttonForCheckbox) {
        const name = buttonForCheckbox.dataset.checkboxName;
        const checkbox = document.querySelector(`input[name="${name}"]`);
        updateButtonState(name);
        if (checkbox) {
          checkbox.addEventListener("change", () => updateButtonState(name));
        }
      }
      const form = modal.querySelector("form");
      if (form) {
        Object.entries(info).forEach(([key, value]) => {
          form.insertAdjacentHTML("beforeend", `<input type="hidden" name="${key}" value="${value}">`);
        });
        const validatedForm = (0,_components_validator_validator__WEBPACK_IMPORTED_MODULE_2__.validateForm)(`${modalClass} form`);
        (0,_components_validator_validator__WEBPACK_IMPORTED_MODULE_2__.maskPhone)(modalClass, 'input[type="tel"]');
        form.addEventListener("bouncerFormValid", debounce(() => {
          if (!func)
            return;
          const answer = func(form);
          if (answer && answer.responseJSON && answer.responseJSON.status === "success") {
            validatedForm.destroy();
            (0,_components_popUp_popUp__WEBPACK_IMPORTED_MODULE_1__.removePopUp)(modalClass, true);
            (0,_components_alert_alert__WEBPACK_IMPORTED_MODULE_0__.summonAlert)({
              template: "#alert--blue",
              text: answer.responseJSON.text
            });
          }
        }));
      }
    });
  });
};
const blurHandler = (event) => {
  if (!event.target.form)
    return;
  const field = event.target;
  const cuttedSpacesValue = field.value.replace(/\s\s+/g, " ");
  const trimmedValue = cuttedSpacesValue.trim();
  field.value = trimmedValue;
};
document.addEventListener("blur", blurHandler, true);



/***/ }),

/***/ 689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(670);


const body = document.querySelector("body");
const header = document.querySelector("header");
if (header) {
  const hideHeaderOnMove = () => {
    let scrollPosition = 0;
    let hideChecker = 0;
    let showChecker = 0;
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= scrollPosition && window.pageYOffset >= header.offsetHeight) {
        showChecker = 0;
        hideChecker += window.pageYOffset - scrollPosition;
        scrollPosition = window.pageYOffset;
      } else {
        showChecker += scrollPosition - window.pageYOffset;
        hideChecker = 0;
        scrollPosition = window.pageYOffset;
      }
      if (showChecker >= 300) {
        header.classList.remove("header--hidden");
        hideChecker = 0;
      } else if (hideChecker >= 300 && !body.classList.contains("static")) {
        header.classList.add("header--hidden");
      }
    });
  };
  hideHeaderOnMove();
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0 && !header.classList.contains("header--fixed")) {
      header.classList.add("header--fixed");
    } else if (window.pageYOffset === 0 && !body.classList.contains("static")) {
      header.classList.remove("header--fixed");
    }
  });
  const burger = header.querySelector(".header__burger");
  const menuOff = () => {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
    header.classList.remove("header--dropdown");
  };
  if (burger) {
    burger.addEventListener("click", () => {
      if (header.classList.contains("header--dropdown")) {
        menuOff();
      } else {
        header.classList.add("header--dropdown");
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingOnBody */ .rP)();
      }
    });
  }
}


/***/ }),

/***/ 745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(660);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(489);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(670);




const requestForm = document.querySelector(".request__form");
if (requestForm) {
  (0,_validator_validator__WEBPACK_IMPORTED_MODULE_1__.validateForm)(".request__form");
  (0,_validator_validator__WEBPACK_IMPORTED_MODULE_1__.maskPhone)(".request__form");
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__/* .setTextareaAutoHeight */ .Bs)(".request__form textarea");
}


/***/ }),

/***/ 761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 820:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function importAll(r) {
  const keys = r.keys();
  const firstFile = "./window/window.js";
  const filteredKeys = keys.filter((key) => key !== firstFile).sort();
  if (keys.includes(firstFile)) {
    r(firstFile);
  }
  filteredKeys.forEach(r);
}
importAll(__webpack_require__(147));


/***/ }),

/***/ 913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-arrow-right",
  "use": "icon-arrow-right-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-arrow-right\">\n<path d=\"M3 12H21M21 12L12.5 3.5M21 12L12.5 20.5\" stroke=\"#EE2737\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ }),

/***/ 919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(489);
/* harmony import */ var _popUp_popUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(417);
/* harmony import */ var _video_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(305);
/* harmony import */ var _alert_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(670);





window.Corners5ProjectLayout = {
  validation: {
    validateForm: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.validateForm,
    maskNumber: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.maskNumber,
    maskPhone: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.maskPhone,
    initPasswordEye: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initPasswordEye,
    initAgreeCheckbox: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initAgreeCheckbox,
    initFileLoadInput: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initFileLoadInput,
    initSelectValidation: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initSelectValidation,
    initChoicesValidation: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initChoicesValidation
  },
  summonPopUp: _popUp_popUp__WEBPACK_IMPORTED_MODULE_1__.summonPopUp,
  removePopUp: _popUp_popUp__WEBPACK_IMPORTED_MODULE_1__.removePopUp,
  findVideos: _video_video__WEBPACK_IMPORTED_MODULE_2__["default"],
  summonAlert: _alert_alert__WEBPACK_IMPORTED_MODULE_3__.summonAlert,
  removeAlert: _alert_alert__WEBPACK_IMPORTED_MODULE_3__.removeAlert,
  getPaddingOnBody: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .getPaddingOnBody */ .rP,
  getPaddingFromBody: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .getPaddingFromBody */ .iW,
  getScrollbarWidth: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .getScrollbarWidth */ .XJ,
  createFormData: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .createFormData */ .$W,
  setTextareaAutoHeight: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .setTextareaAutoHeight */ .Bs,
  setStatus: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .setStatus */ .Lx,
  startTimer: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .startTimer */ .Ip,
  debounce: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .debounce */ .sg,
  activateRequestButtons: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .activateRequestButtons */ .Qs,
  updateButtonState: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .updateButtonState */ .Dl
};


/***/ }),

/***/ 937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			23: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_pug_esbuild_starter"] = self["webpackChunkwebpack_pug_esbuild_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [96], () => (__webpack_require__(153)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;