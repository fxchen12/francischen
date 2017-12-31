$(document).ready(function() {
    // Get top bar to stay in place when scrolling.
    $("#top_bar").stick_in_parent();

    // Mouseover/mouse out feedback.
    $("#top_left").mouseover(function() {
        $("#top_left_dark").show();
    });
    $("#top_left").mouseout(function() {
        $("#top_left_dark").hide();
    });
        
    $(".pop_button").mouseover(function() {
        $(this).css("color", "rgb(175, 175, 175)");
    });
    $(".pop_button").mouseout(function() {
        $(this).css("color", "rgb(190, 190, 190)");
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

    // To keep track of what's popped up.
    var currentWindow;

    // Top bar
    // http://stackoverflow.com/questions/16586594/scroll-up-and-down-a-div-on-button-click-using-jquery
    $("#top_left_dark").click(function() {
        $("body").animate({
            scrollTop: 0
        });
    });

    $("#contact_pop").click(function() {
        $("#contact").show();
        $("#cover").show();
        currentWindow = "#contact";
    })

    // Handling music and lyrics

    $(".album_song").mouseover(function() {
        $(this).css("color", textSelected);
    });
    $(".album_song").mouseout(function() {
        $(this).css("color", textNeutral);
    });

    // Project: Nightfall

    const textNeutral = "rgb(180, 180, 180)";
    const textSelected = "rgb(120, 120, 120)";

    $("#nf_lyrics").click(function() {
        $("#nf_content").show();
        $("#cover").show();
        currentWindow = "#nf_content";
    });

    // Project: The Wind and the Tide

    $("#wt_lyrics").click(function() {
        $("#wt_content").show();
        $("#cover").show();
        currentWindow = "#wt_content";
    });

    // Project: Days of the Summer

    $("#dots_listen").click(function() {
        $("#dots_content").show();
        $("#cover").show();
        document.getElementById("dots_audio").play();
        currentWindow = "#dots_content";
    });

    // Contact
    // em = email, gh = github, li = linkedin
    // first two letters of id serve as index into color map
    var iconColors = {"em": "rgb(191, 73, 61)", "gh": "rgb(28, 28, 28)", "li": "rgb(67, 118, 178)"};

    function colorContact(fieldName) {
        $("#".concat(fieldName).concat("_icon")).css("color", iconColors[fieldName]);
        $("#".concat(fieldName).concat("_text")).css("color", textSelected);
    }

    function uncolorContact(fieldName) {
        $("#".concat(fieldName).concat("_icon")).css("color", textNeutral);
        $("#".concat(fieldName).concat("_text")).css("color", textNeutral);
    }

    $(".fa").mouseover(function() {
        colorContact($(this).attr("id").substring(0, 2));
    });
    $(".contact_text").mouseover(function() {
        colorContact($(this).attr("id").substring(0, 2));
    });

    $(".fa").mouseout(function() {
        uncolorContact($(this).attr("id").substring(0, 2));
    });
    $(".contact_text").mouseout(function() {
        uncolorContact($(this).attr("id").substring(0, 2));
    });

    // Cover and x button
    const xNeutral = "rgb(220, 220, 220)";
    const xSelected = "rgb(150, 150, 150)";

    $(".xbutton").mouseover(function() {
        $(this).css("color", xSelected);
    });
    $(".xbutton").mouseout(function() {
        $(this).css("color", xNeutral);
    });

    $(".xbutton").click(function() {
        $(currentWindow).hide();
        $("#cover").hide();
    });

    $("#cover").click(function() {
        $(currentWindow).hide();
        $(this).hide();
    });
});