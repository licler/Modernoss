$(function(){


      $(".rate-star").rateYo({
        rating: 5,
        starWidth: '14px'
      });


     
      $('.week__inner-items').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1190,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              arrows: false,
            }
          },
          
          {
            breakpoint: 1140,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 790,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          },
        ]
      });


      $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-list').on('click', function(){
     $('.product__inner-item').addClass('list');
     $('.icon-list').addClass('active');
     $('.icon-view-tile').removeClass('active');
    });
    $('.icon-view-tile').on('click', function(){
      $('.product__inner-item').removeClass('list');
      $('.icon-view-tile').addClass('active');
      $('.icon-list').removeClass('active');
    });

    $('.single-page__tabs .tab, .profile__tabs .tab,.settings-page__tabs .tab').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.single-page__tabs, .profile__tabs, .settings-page__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.single-page__tabs .tabs, .profile__tabs .tabs, .settings-page__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
      });

      $('input[type="file"], select').styler();


      $('.menu__big-btn').on('click', function() {
        $('.menu__list').slideToggle();
      });

      $('.header__inner-btn').on('click', function() {
        $('.header__top-inner').toggleClass('active');
      });












  var mixer = mixitup('.product__inner-items');   
});