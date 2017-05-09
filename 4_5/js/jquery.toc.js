

(function($, window, document, undefined) {

    $.fn.toc = function(userOptions) {

        if(this.length === 0){
            throw new Error("Brak elementów ze wskazanym selektorem.");
        }

        // zmiksowanie opcji
        var options = $.extend({}, $.fn.toc.defaults, userOptions);

        // utworzenie elementów tworzących spis treści
        var tocContainer = $("<div></div>"),
            ul = $("<ul></ul>"),
            tocHeader = "<" + options.tocHeaderSelector + ">" + options.tocHeaderText + "</" +  options.tocHeaderSelector + ">";
            

        // przypisanie klasy do spisu treści
        tocContainer.addClass(options.tocClass);


        // utworzenie pozycji w spisie treści
        var i = 0;
        this.each(function() {   

            var that = $(this),
                selectorWithText = that.find(options.contentSelector); 


            // jeśli sekcja zawiera wskazany selector
            if(selectorWithText.length !== 0){

                var listNumber = (options.listStyle === "roman") ? romanize(++i) : (++i),
                    text = selectorWithText.text();


                //// Przenoszenie do sekcji - WERSJA 1 (z href)
                // var li = $("<li><a href='#toc-" + i + "'>" + listNumber + ". " + text + "</a></li>");
                // that.attr("id", "toc-" + i); 


                //// Przenoszenie do sekcji - WERSJA 2 (ze scrollTop)
                var li = $("<li><a href='#'>" + listNumber + ". " + text + "</a></li>");
                li.on('click', function(e){
                    e.preventDefault();
                    //$("body").scrollTop(that.offset().top);
                    $("body").stop().animate({scrollTop: that.offset().top}, 500);
                })


                ul.append(li);
            }

        });



        // umieszczenie spisu treści na stronie
        tocContainer.append(tocHeader);
        tocContainer.append(ul);
        this.first().before(tocContainer);



        // powrót do spisu treści
        var body = $("body");
        var backToToc = $("<a href='#'>Wróć do " + options.tocHeaderText + "</a>").addClass("backToToc");
        backToToc.on('click', function(e){
            e.preventDefault();
            body.stop().animate({scrollTop: tocContainer.offset().top}, 500);
        })

        body.append(backToToc.hide());



        // debounce dla pojawiania się Wróć do spisu treści
        var handleScroll = debounce(function () {
            
            if(body.scrollTop() > tocContainer.offset().top + tocContainer.outerHeight()){
                backToToc.fadeIn();
            }
            else{
                backToToc.fadeOut();
            }

        }, 200);

        $(window).scroll(handleScroll);     

       


        return this;

    }



    // opcje domyślne
    $.fn.toc.defaults = {
        contentSelector: "h2",              // selector(y) według którego(których) ma być tworzony spis treści
        tocHeaderText: "Spis treści",       // treść nagłówka spisu treści
        tocHeaderSelector: "h2",            // typ nagłówka spisu treści
        tocClass: "toc",                    // klasa stylizująca spis treści
        listStyle: ""                       // typ listy (wartość "roman" dla numeracji rzymskiej; w pozostałych przypadkach numeracja arabska)
    };



})(jQuery, window, document);
