// $(".chevron").on("click", function(){
//     if ($(".menuContainer").hasClass("up")) {
//         $(".menuContainer").removeClass("up").addClass("down");
//         $(".menu h2").removeClass("off");
//         $("ul").removeClass("off");
//         $(".chevron").removeClass("default").addClass("dropped");
//         $(".chevron i").removeClass("fa-chevron-down").addClass("fa-chevron-up");
//         console.log("help... ;_;");
//     }
//     else {
//         $(".menuContainer").removeClass("down").addClass("up");
//         $(".menu h2").addClass("off");
//         $("ul").addClass("off");
//         $(".chevron").removeClass("dropped").addClass("default");
//         $(".chevron i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
//     };
// });

$(".chevron").on("click", function(){
    $(".menuContainer").addClass("down");
    $(".menu").slideToggle(700);
    if ($(".chevron i").hasClass("fa-chevron-down")) {
        $(".chevron i").removeClass("fa-chevron-down").addClass("fa-chevron-up");
    }
    else {
        $(".chevron i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        $(".menuContainer").removeClass("down");
    }
});
$(".menu li").on("click", function(){
    $(".menuContainer").removeClass("down");
    $(".menu").slideUp(700);
    if ($(".chevron i").hasClass("fa-chevron-up")) {
        $(".chevron i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    }
    else {
    }
});