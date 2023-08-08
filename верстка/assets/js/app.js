$(".burger-toggle").click(function() {
    $(".header__burger").toggleClass("active");
});

$(".close-burger").click(function() {
    $(".header__burger").removeClass("active");
});


$(".filter-toggle").click(function() {
    $(".header__filter__form").toggleClass("active");
});

$(".close-filter-burger").click(function() {
    $(".header__filter__form").removeClass("active");
});

$(".btn-toggler").click(function() {
    $(".btn-toggler").addClass("active");
});