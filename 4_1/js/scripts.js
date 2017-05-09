(function($) {

    $(document).ready(function() {


        $('.select-button').on('click', function(e) {
            var option = $(".form-options").find(":checked").val(),
                elem, color;

            e.preventDefault();

            switch (option) {
                case "1": // - wszystkie elementy <div>, posiadające zarówno klasę “grid” oraz klasę “grid-12”.
                    elems = $("div.grid.grid-12");
                    elems = $("div").filter(".grid.grid-12");
                    color = "red";
                    break;
                case "2": // - wszystkie elementy <a>, których atrybut “href" zaczyna się na “http”, znajdujące się w elemencie o klasie “nav”
                    elems = $(".nav a[href^='http']");
                    elems = $(".nav").find("a[href^='http']");
                    elems = $(".nav a").filter("[href^='http']");
                    color = "lightgray";
                    break;
                case "3": // - wszystkie elementy <input>, których typ to “radio” lub “checkbox” oraz dodatkowo nie są aktualnie zaznaczone (checked)
                    form = $(".form-data"); //aby znalazło tylko w tym formularzu
                    elems = form.find($("input:radio, input:checkbox").not(":checked"));
                    elems = form.find($("input[type='radio'], input[type='checkbox']").filter(":not(':checked')"));
                    elems = form.find($("input[type='radio'], input[type='checkbox']").not(":checked"));
                    elems = form.find($("input[type='radio']:not(:checked), input[type='checkbox']:not(:checked)"));

                    elems = elems.next('label');

                    color = "green";
                    break;
                case "4": // - wyłącznie pierwszy element <p>, który jest pusty (nie zawiera dzieci) oraz znajduje się w elemencie <div> z identyfikatorem “text”
                    elems = $("div#text p:empty:first")
                    elems = $("div#text p:empty:eq(0)");
                    elems = $("div#text p:empty").first();
                    elems = $("div#text").find("p:empty:first");
                    elems = $("div#text").find("p:empty:eq(0)");
                    color = "yellow";
                    break;
                case "5": // - wszystkie elementy z klasą “pagination-item”, które nie są elementem <span>
                    elems = $(".pagination-item:not('span')");
                    elems = $(".pagination-item").filter(":not('span')");
                    elems = $(".pagination-item").not('span');
                    color = "lightblue";
                    break;

            }

            console.log(elems);
            elems.css("backgroundColor", color);


        });


        $('.unselect-button').on('click', function(e) {
            e.preventDefault();
            $(".container *").css("backgroundColor", "");
        });
        

    })

})(jQuery)