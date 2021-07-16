$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    var $item = $(".nav-link");
    $item.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    console.lof("yooo");
  });
});