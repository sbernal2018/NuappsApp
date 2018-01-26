var swipe = document.getElementById('swipe');

var cool = new Hammer(swipe);

cool.get('swipe').set({direction:Hammer.DIRECTION_ALL});

cool.on("swipeup",
    function(menu){
    swipe.textContent = menu.type+"gesture detected";});
