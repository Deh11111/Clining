$(function(){
    $('.carousel__items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots:true,
        speed:1000,
        prevArrow: '<button class="carousel-arrow carousel-arrow-prev"><img src="image/carousel/left-arrow.svg" class="carousel-arrow-image"alt=""></button>',
        nextArrow: '<button class="carousel-arrow carousel-arrow-next"><img src="image/carousel/right-arrow.svg" alt=""></button>',
    })
    $('.slider__box').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
        prevArrow: '<button class="slider-arrow  carousel-arrow slider-arrow-prev"><img src="image/carousel/left-arrow.svg" class="carousel-arrow-image"alt=""></button>',
        nextArrow: '<button class="slider-arrow carousel-arrow slider-arrow-next"><img src="image/carousel/right-arrow.svg" alt=""></button>',
    })
    $('.reviews__inner').slick({
        slidesToShow: 3,
        dots:true,
        prevArrow: '<button class="slider-arrow slider-arrow-reviews  carousel-arrow slider-arrow-prev"><img src="image/carousel/left-arrow.svg" class="carousel-arrow-image"alt=""></button>',
        nextArrow: '<button class="slider-arrow slider-arrow-reviews carousel-arrow slider-arrow-next"><img src="image/carousel/right-arrow.svg" alt=""></button>',
    })
});


