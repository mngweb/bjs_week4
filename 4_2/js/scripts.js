

//// WERSJA 1

(function($) {

    $(document).ready(function() {

        var nav = $(".nav-main"),
            isShowed = nav.is(":visible");


        $(".toggle-menu").on("click", function() {       

            var navWidth = nav.outerWidth(); 

            $(this).toggleClass('click', !isShowed);


            nav.stop().slideToggle(500).transition({
                //opacity: "toggle",       // PYTANIE 1: czy "opacity: 'toggle'" nie działa z biblioteką jquery.transit? 
                opacity: !isShowed ? 1 : 0,
                left: !isShowed ? 0 : -navWidth
            }, 
            {
                duration: 500,
                //easing: "easeOutBounce",      // PYTANIE 2: Dlaczego nie działa (nie widzę takiego działania animacji jak na stronie biblioteki http://gsgd.co.uk/sandbox/jquery/easing/ jest pokazana) mimo podpięcia biblioteki?
                queue: false  
            }); 

            isShowed = !isShowed;


        });

    });

})(jQuery);







//// WERSJA 2 ( z jednym PYTANIEM ) - proszę całość powyżej zakomentować a całość poniżej odkomentować

// (function($) {

//     $(document).ready(function() {

//         var nav = $(".nav-main");


//         $(".toggle-menu").on("click", function() {

            
//             //PYTANIE: Jeśli kliknę na hamburgera -> to nawigacja rozwija się - i szybko gdy ona się pojawi kliknę ponownie jeden raz hamburger, to powiedzmy mniej więcej w połowie wizualnego efektu rozwinięcia prawidłowo animacja robi stop() i zwija z powrotem nawigację. Czyli chyba dobrze rozpoznaje w trakcie animacji to ":visible". Ale gdy poklikam wiele razy szybko w hamburgera, to coś się blokuje - powstaje jakaś kolejka? - nie bardzo rozumiem co się wtedy dzieje skoro przy pojedynczym kliknięciu w trakcie animacji prawidłowo rozpoznawało widoczność?

//             var isVisible = nav.is(":visible"),
//                 navWidth = nav.outerWidth(); 

//             $(this).toggleClass('click', !isVisible);


//             nav.stop().slideToggle(500).transition({
//                 opacity: !isVisible ? 1 : 0,
//                 left: !isVisible ? 0 : -navWidth
//             }, 
//             {
//                 duration: 500,
//                 queue: false  
//             }); 



//         });

//     });

// })(jQuery);


