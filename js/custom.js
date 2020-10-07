window.onscroll = function () {
    whatsapp();
  };
  
  function whatsapp() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800)
    {
      document.querySelector(".whatsapp-button").style.visibility = "visible";
    }
    else
    {
      document.querySelector(".whatsapp-button").style.visibility = "hidden";
    }
  }