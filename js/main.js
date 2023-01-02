$(document).ready(function(){
    $('#range-price').change(function() {
        if(this.value == 0)
        {
            $('.card').parent().removeClass('d-none');
        }
        $('.card').find('.card-body #price:not(:contains("' + this.value + '"))').parent().parent().parent().parent().addClass('d-none');
        $('.card').find('.card-body #price:contains("' + this.value + '")').parent().parent().parent().parent().removeClass('d-none');
        $('#value-price').text("$ " + this.value);
    });
});

$(document).ready(function(){
    $('#input-search').keyup(function (){
        $('.card').parent().removeClass('d-none');
        var search = $(this).val(); 
        $('.card').find('.card-body #card-name:not(:contains("' + search + '"))').parent().parent().parent().addClass('d-none');
    })
});

$(document).ready(function(){
    $('#key-name').click(function (){
        $('.card').parent().removeClass('d-none');
    })

    $('#key-name-1').click(function (){
        $('.card').parent().removeClass('d-none');
        var search = $(this).text(); 
        $('.card').find('.card-body #card-name:not(:contains("' + search + '"))').parent().parent().parent().addClass('d-none');
    })

    $('#key-name-2').click(function (){
        $('.card').parent().removeClass('d-none');
        var search = $(this).text(); 
        $('.card').find('.card-body #card-name:not(:contains("' + search + '"))').parent().parent().parent().addClass('d-none');
    })

    $('#key-name-3').click(function (){
        $('.card').parent().removeClass('d-none');
        var search = $(this).text(); 
        $('.card').find('.card-body #card-name:not(:contains("' + search + '"))').parent().parent().parent().addClass('d-none');
    })

    $('#key-name-4').click(function (){
        $('.card').parent().removeClass('d-none');
        var search = $(this).text(); 
        $('.card').find('.card-body #card-name:not(:contains("' + search + '"))').parent().parent().parent().addClass('d-none');
    })
});
