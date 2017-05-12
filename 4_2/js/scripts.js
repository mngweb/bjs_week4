(function($) {

    $(document).ready(function() {

        var nav = $(".nav-main"),
            isShowed = nav.is(":visible");


        $(".toggle-menu").on("click", function() {       

            var navWidth = nav.outerWidth(); 

            $(this).toggleClass('click', !isShowed);


            nav.stop().slideToggle(500).transition({
                opacity: !isShowed ? 1 : 0,
                x: !isShowed ? 0 : -navWidth
            }, 
            {
                duration: 1000,
                easing: 'cubic-bezier(.83,.27,.41,1.7)',  
                queue: false  
            }); 

            isShowed = !isShowed;

        });

    });

})(jQuery);
