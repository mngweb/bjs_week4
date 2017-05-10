(function($) {

    $(document).ready(function() {

        var form = $(".form--add-name"),
            list = $("<ul></ul>");

        list.insertAfter(form);


        function isValid(text){       
            return $.trim(text) === "";
        }


        form.on('submit', function(e){

            e.preventDefault();

            var name = form.find("input#name"),
                text = name.val();

            if ( isValid(text) ){
                list.append($("<li></li>").text(text));
                name.val("");
                name.removeClass("invalid");
            }
            else{
                name.addClass("invalid");
            }

        })
    })

})(jQuery)
