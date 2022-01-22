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
    $(".menu").slideToggle(700);
});