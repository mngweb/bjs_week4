/*
5. Praca z AJAX i JSON
Stwórz aplikację, która pozwoli po kliknięciu wybranego przycisku, np. “Załaduj”, pobrać
AJAXem dane typu JSON i wyświetlić je na stronie. Adres, pod który wyślesz zapytanie z
użyciem jQuery to https://jsonplaceholder.typicode.com/users
Otrzymane dane wyświetl na stronie w formie nieuporządkowanej listy <ul>, a każdego
użytkownika w tagu <li>. Z podanych danych wyłuskaj name, username, email oraz
phone. Sformatuj je według własnego uznania.
*/

(function($) {

    $(document).ready(function() {

        var list = $("<ol></ol>"); 
        $(".container").append(list);


        function success(data, status, jqXHR) {

            //// Pobieramy HTML z szablonem                    
            var source = $("#tpl").html();

            //// Kompilujemy szablon (powstaje funkcja)
            var template = Handlebars.compile(source);                    


            //// Wygenerowanie i wstawienie kodu z szablonu
            //// WERSJA 1:
            // $.each(data, function(index, user) {
            //     var html = template(user);
            //     list.append(html);
            // });


            //// WERSJA 2 (inny kod w pliku html):
            var html = template(data);
            list.html(html);

        }

        function error (jqXHR, status, errorThrown) {

            list.append($("<p></p>").text("Wystąpił błąd - status: " + status + ", rodzaj błędu:" + errorThrown));            // PYTANIE: Gdy zrobię np. w Chrome offline, to nie podaje zbytnio informacji o błędze - co można poprawić by te informacje były konkretniejsze?
            // PYTANIE: Gdy zrobię np. w Chrome offline, to nie podaje zbytnio informacji o błędze - co można poprawić by te informacje były konkretniejsze?
        };





        $(".container").on('click', function(){

            //// WERSJA A:
            // $.ajax({
            //     url: "http://code.eduweb.pl/bootcamp/users/",
            //     method: "GET",
            //     dataType: "json",
            //     success: success,
            //     error: error
            // });

            //// WERSJA B:
            $.ajax({
                url: "http://code.eduweb.pl/bootcamp/users/",
                method: "GET",
                dataType: "json"
            }).done(success).fail(error);                 

        })



    })

})(jQuery)
