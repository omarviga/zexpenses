"use strict";
function scrollNavBarToRight() {
    $(".container").animate({
        scrollLeft: 1e3
    }, 1e3)
}
function scrollNavBarToLeft() {
    $(".container").animate({
        scrollLeft: 0
    }, 1e3)
}
$(document).ready(function() {
    var a = $("[id$=-tab]")[0].id.split(" ")[0].slice(0, -5);
    $(".icon-" + a).closest("li").addClass("active"),
    window.setSelectedTab("tour")
}),
$(document).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $(".nav-float").fadeIn("slow");
        var a = $("[id$=-tab]")[0].id.split(" ")[0].slice(0, -5);
        $(".nav-" + a + "-tab").closest("li").addClass("active")
    } else
        $(".nav-float").fadeOut("slow")
}),
$(document).scroll(function() {
    $(this).scrollTop() > 450 ? $(".tour-nav-header").addClass("sliding") : $(".tour-nav-header").removeClass("sliding")
});