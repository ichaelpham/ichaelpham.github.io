$(document).ready(function(){
var $marquee = $('.marquee');
    var $children = $marquee.children();
    while ($children.length) {
        $marquee.append($children.splice(Math.floor(Math.random() * $children.length), 1)[0]);
    }

$marquee.marquee({
    duration: 7500,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true
});
});
