let headerHeight = $('.main-header').innerHeight()
let socialBlock = $('.social')
let menuBlock = $('.main-menu-block')
let headerInner = $('.main-header-inner')

$(window).on('load resize', function () {
  headerHeight = $('.main-header').innerHeight()

  let footerHeight = $('.main-footer').innerHeight()
  $('body').css('padding-bottom', footerHeight + 'px')

  $(window).width() <= 450 ? menuBlock.append(socialBlock) : headerInner.append(socialBlock)
})

$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) $('#top').show(200)
    else $('#top').hide(200)
  })

  $('#top').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500)
  })

  $('.menu-toggle .icon-toggle').click(function () {
    $('.menu-toggle .icon-toggle, .main-menu-block').toggleClass('active')
  })

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: true,
    fixedContentPos: false
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > headerHeight) {
      $('.main-header').addClass('stickytop')
      $('body').css('padding-top', headerHeight + 'px')
    } else {
      $('.main-header').removeClass('stickytop')
      $('body').css('padding-top', '0')
    }
  })

  $('.intro-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev fas fa-chevron-left h_drop"></button>',
    nextArrow: '<button class="slick-next fas fa-chevron-right h_drop"></button>',
  })

  wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    }
  )
  wow.init()

})
