jQuery(document).ready(function($) {

    $('#result-container').hide();
    $('#color-display-input').hide();

    $('#btn-generate-hex').on('click', function() {  

        let input_val= $('#input-color-name').val();
        
        $('#color-display-input').hide();

        $("#display-result").html('');
        $('#result-container').show();

        if(input_val == ''){
           
            $("#display-result").html('<span>Please input color name</span>');

            return;
        }

        let colorHex = getColors(input_val);

        if(colorHex['status']=='Error'){

            $("#display-result").html('<span>'+colorHex['message']+'</span>');

            return;
        }

        
        $('#color-display-input').show();

        $("#display-result").html('<span>'+colorHex['color']+'</span>');
        $('#color-display-input').val(colorHex['color']);

    //    console.log(colors)
    });
});


