/*write date in footer
let date = document.querySelector('#date');
let dateMonth = new Date().toDateString();
date.innerHTML = dateMonth;*/

//open external links in new tab
$("body a[href^='https://']").attr("target", "_blank");

//show hide whatsapp button
window.onscroll = function () {
    whatsapp();
  };

  //scroll to top button
  let topBtn = document.querySelector('.top-button');
  topBtn.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
  })
  
  function whatsapp() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800)
    {
      document.querySelector(".whatsapp-button").style.visibility = "visible";
      document.querySelector(".top-button").style.visibility = "visible";
    }
    else
    {
      document.querySelector(".whatsapp-button").style.visibility = "hidden";
      document.querySelector(".top-button").style.visibility = "hidden";
    }
  }

  //Owl Carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop: true
        },
        600:{
            items:1,
            nav:true,
            loop: true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})