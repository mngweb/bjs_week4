(function($) {

    $(document).ready(function() {

        var form = $(".form--add-name"),
            list = $("<ul></ul>");

        list.insertAfter(form);


        function isValid(text){       
            if ( $.trim(text) === "" ){
                return false;
            }
            else{
                return true;
            }
        }


        form.on('submit', function(e){

            e.preventDefault();

            var name = form.find("input#name"),
                text = name.val();

            if ( isValid(text) === true ){
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