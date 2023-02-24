// -- testimonial-slider--
$('.testimonial__slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    speed: 1000,
    dots: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
    ]
  });

// --active header--
const header = document. querySelector('.site-header');
window. onscroll = function() {
     var top = window.scrollY;
     if (top >=100) {
      header.classList.add('active')
     } else{
      header.classList.remove('active');
     }
}

// -- menu-toggle--
$(document).ready(function(){
  $('.menu-toggle, .close-btn, .site-overlay').click(() => {
    $('.rightside-menu').toggleClass('nav-open');
    $('.close-btn i').toggleClass('active');
    $('.site-overlay').toggleClass('nav-open');
  });
});


// --submenu-active--
$(document).ready(function() {
  $(".rightside-menu .sub-menu .first-menu li a").click(function() {
      var link = $(this);
      var closest_ul = link.closest("ul");
      var parallel_active_links = closest_ul.find(".active")
      var closest_li = link.closest("li");
      var link_status = closest_li.hasClass("active");
      var count = 0;

      closest_ul.find("ul").slideUp(function() {
          if (++count == closest_ul.find("ul").length){
              parallel_active_links.removeClass("active");  
          }
      });
      
      if (!link_status) {
          closest_li.children("ul").slideDown().addClass("show-dropdown");
          closest_li.parent().parent("li.active").find('ul').find("li.active").removeClass("active");
          link.parent().addClass("active");
      }
  })
});

// -- counter-number--
// $(document).ready(function() {
//   checkDisplay();

// $(window).on('resize scroll', function() {
//   checkDisplay();
// });
// });

// function checkDisplay(){
// $('.prg-count').each(function() {
//     var $this = $(this);
//     if ($this.isOnScreen()) {
//       var countTo = $this.attr('data-count');
//       $({
//         countNum: $this.text()
//       }).animate({
//         countNum: countTo
//       }, {
//         duration: 4000,
//         easing: 'linear',
//         step: function() {
//           $this.text(Math.floor(this.countNum));
//         },
//         complete: function() {
//           $this.text(this.countNum);
//         }
//       });
//     }
//   });
// }


