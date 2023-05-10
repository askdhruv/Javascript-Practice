 $("h1").addClass("big-title");


// $("button").html("bye");

$("button").click(function(){
    $("h1").css("color", "purple");
});

$(document).keypress(function(event){
    $("h1").html(event.key);
}   );

$("h1").on("mousever", function(){
    $("h1").css("color", "purple");
}   );

$("button").click(function(){
    $("h1").hide();
});

$("button").click(function(){
    $("h1").toggle();
});

$("button").click(function(){
    $("h1").fadeToggle();
});

$("button").click(function(){
    $("h1").fadeOut();
});

$("button").click(function(){
    $("h1").fadeIn();
});

$("button").click(function(){
    $("h1").slideUp();
});

$("button").click(function(){
    $("h1").animate({
        opacity: 0.5
    });
});
