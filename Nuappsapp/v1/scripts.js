/*Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon*/
function isElementVisible($elementToBeChecked)
{
    var TopView = $(window).scrollTop();
    var BotView = TopView + $(window).height();
    var TopElement = $elementToBeChecked.offset().top;
    var BotElement = TopElement + $elementToBeChecked.height();
    return ((BotElement <= BotView) && (TopElement >= TopView));
}
function startAnimation($this) {
  $this.animate({
    opacity: "100%"
  }, 3000, function() {
    // Animation complete.
  });
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
jQuery(document).ready(function(){

    var topNavOff = jQuery(".topnav").offset().top;

        var mission = $(".statementOuter").offset().top;
        var products = $(".Products").offset().top;
        var apps = $(".appShowcase").offset().top;
        var contact = $(".CU").offset().top;
        var faq = $(".faq").offset().top;


    jQuery(window).scroll(function(){
        var pos = jQuery(window).scrollTop();
        if(pos >= topNavOff){
            jQuery(".topnav").addClass("fixed");
            if(pos>=mission&&pos<=apps){
              $(".topnav").find('a').css({color: '#29aae0'});
              $(".topnav").css({background:'#fefefe'});

            }else if(pos>=apps&&pos<=products){
              $(".topnav").find('a').css({color: '#fefefe'});
              $(".topnav").css({background:'#29aae0'});

            }else if(pos>=products&&pos<=faq) {
              $(".topnav").find('a').css({color: '#29aae0'});
              $(".topnav").css({background:'#fefefe'});

            }else if(pos>=faq&&pos<=contact){
              $(".topnav").find('a').css({color: '#fefefe'});
              $(".topnav").css({background:'#29aae0'});
            }else{
              $(".topnav").find('a').css({color: '#29aae0'});
              $(".topnav").css({background:'#fefefe'});
            }
        } else{
            jQuery(".topnav").removeClass("fixed");
            $(".topnav").find('a').css({color: '#fefefe'});
            $(".topnav").css({background:'#29aae0'});

        }

    });




});


function homego(){
    var home=$("#headnav").offset().top-50;
    console.log(home);
        $('html, body').animate({
       scrollTop:home
   }, 1200);
   closeNav();
}
function missiongo(){

    closeNav();
}
function productsgo(){
    var products = $(".Products").offset().top-50;

    $('html, body').animate({
   scrollTop:products
}, 1200);
    closeNav();
}
function faqgo(){

  var faq = $(".faq").offset().top-50;

  $('html, body').animate({
   scrollTop:faq
 }, 1200);
  closeNav();
}
function contactgo(){
  var contact = $(".CU").offset().top-50;

  $('html, body').animate({
 scrollTop:contact,

}, 1200);
 closeNav();
}
