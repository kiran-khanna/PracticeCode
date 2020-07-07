(function ($jq) {
    // SIDE MENU BAR
  $jq(".menu-toggle").click(function (e) {
    e.preventDefault();
    $jq("#sidebar-wrapper").toggleClass("active");
    $jq(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
      "fa-bars fa-times"
    );
    $jq(this).toggleClass("active");
  });

})(jQuery);
