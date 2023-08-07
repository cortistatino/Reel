const videoCards = [...document.querySelectorAll('.honeycomb-cell')];

videoCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video = item.children[0];
        video.play();
    });
    item.addEventListener('mouseleave',()=>{
        let video = item.children[0];
        video.pause();
    });
});


    // Initialize the Slick slider when the DOM is ready
    $(document).ready(function(){
        $('.slider-container').slick({
          // Slick configuration options
          arrows: true, // Show navigation arrows
          prevArrow: '<button type="button" class="slick-prev">Previous</button>',
          nextArrow: '<button type="button" class="slick-next">Next</button>',
          dots: true, // Show dot indicators
          autoplay: true, // Autoplay the slider
          autoplaySpeed: 3000, // Autoplay speed in milliseconds (e.g., 3000 = 3 seconds)
          infinite: true, // Infinite looping of the slider
          speed: 500, // Transition speed in milliseconds
          slidesToShow: 4, // Number of slides to show at a time
          slidesToScroll: 1 // Number of slides to scroll at a time
          
        });
      });