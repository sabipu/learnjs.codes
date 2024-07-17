function Accordion(options) {
  let _this = this;
  let defaultOptions = {
    accordionContainer: ".jsAccordion", // html element
    accordionOpener: ".jsAccordionOpener", // html element
    accordionActiveClass: "jsAccordionActive",
    openOnClickOrHover: "click", // click or hover
    closeOthers: true,
    contentHeight: 'auto', // 'auto' or 'content' or 'num'
    sortable: false, // true or false
  }
  options = {...defaultOptions, ...options};

  this.init = function() {
      document.querySelectorAll(options.accordionContainer).forEach((slide, index) => {
          console.log(slide);
      });
  }

  this.next = function(){  
      this.goToSlide(currentSlideIndex+1);
  }

  this.previous = function(){  
      this.goToSlide(currentSlideIndex-1);
  }

  this.goToSlide = function(index){
      this.hideOtherSlides();
      if (index > slides.length - 1){
          index = 0;
      }
      if (index < 0){
          index = slides.length - 1;
      }

      slides[index].style = "display:block";
      currentSlideIndex = index;
  }

  this.init();  
}