$(document).ready(function() {
    // Get top bar to stay in place when scrolling.
    $("#top_bar").stick_in_parent();

    // Mouseover/mouse out feedback.
    $("#top_left").mouseover(function() {
        $("#top_left_white").show();
    });
    $("#top_left").mouseout(function() {
        $("#top_left_white").hide();
    });
        
    $(".pop_button").mouseover(function() {
        $(this).css("color", "rgb(255, 255, 255)");
    });
    $(".pop_button").mouseout(function() {
        $(this).css("color", "rgb(240, 240, 240)");
    });

    $(".project").mouseover(function() {
        $(this).contents().show();
    });
    $(".project").mouseout(function() {
        $(this).contents().hide();
    });

    $(".proj_button").mouseover(function() {
        $(this).css("background-color", "rgba(255, 255, 255, 0.3)");
    });
    $(".proj_button").mouseout(function() {
        $(this).css("background-color", "rgba(255, 255, 255, 0)");
    });

    // Top bar
    // http://stackoverflow.com/questions/16586594/scroll-up-and-down-a-div-on-button-click-using-jquery
    $("#top_left_white").click(function() {
        $("body").animate({
            scrollTop: 0
        });
    });

    // Project: Days of the Summer

    // Project: Journey
    $("#journey_site").click(function() {
        window.open("http://peaceful-basin-4110.herokuapp.com/", "_blank");
    });
    $("#journey_github").click(function() {
        window.open("https://github.com/fxchen12/AlphaBrosPublic", "_blank");
    });
});