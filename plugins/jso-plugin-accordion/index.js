var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function Accordion(options) {
    var _this = this;
    var defaultOptions = {
        accordionContainer: ".jsAccordion",
        accordionOpener: ".jsAccordionOpener",
        accordionActiveClass: "jsAccordionActive",
        openOnClickOrHover: "click",
        closeOthers: true,
        contentHeight: 'auto',
        sortable: false
    };
    options = __assign(__assign({}, defaultOptions), options);
    this.init = function () {
        document.querySelectorAll(options.accordionContainer).forEach(function (slide, index) {
            console.log(slide);
        });
    };
    this.next = function () {
        this.goToSlide(currentSlideIndex + 1);
    };
    this.previous = function () {
        this.goToSlide(currentSlideIndex - 1);
    };
    this.goToSlide = function (index) {
        this.hideOtherSlides();
        if (index > slides.length - 1) {
            index = 0;
        }
        if (index < 0) {
            index = slides.length - 1;
        }
        slides[index].style = "display:block";
        currentSlideIndex = index;
    };
    this.init();
}
