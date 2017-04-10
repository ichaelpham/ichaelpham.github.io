$(document).ready(function(){
var $marquee = $('.marquee');
    var $children = $marquee.children();
    while ($children.length) {
        $marquee.append($children.splice(Math.floor(Math.random() * $children.length), 1)[0]);
    }

$marquee.marquee({
    duration: 7500,
    gap: 120,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true
});
});
