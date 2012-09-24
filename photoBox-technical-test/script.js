$(function() {
    // Create text fields and submit button
  var count = 8;

  var inputFields = '';

  var bars = '';

  var i = 0;

function createInputFields(){

  for(i = 0; i < count; i++){

      do {

          inputFields+='<li><input type="input" id="amount' + (i) + '" value="" /><input class="button" type="button" id="amount-btn' + (i) + '" value="submit" />';

      } while (i>count)

  }

$('#input-values').html(inputFields);

}

function createBars(){

  for(i = 0; i < count; i++){

      do {

          bars+='<div id="slider-vertical' + (i) + '" class="v-slider"></div>';

      } while (i>count)

  }

$('#graph #inner').html(bars);

}

    function myCoolSlider(){

$('.v-slider').each(function(index) {

             $(this).slider({
                orientation: "vertical",
                range: "min",
                min: 0,
                max: 60,
                value: 60,
                slide: function( event, ui ) {

                    var sliderAmountValue = ( ui.value );

                    var newSliderAmoutValue = (sliderAmountValue * 100);

                    $( "#amount"+index ).val( newSliderAmoutValue );
                }
            });
                var sliderAmountValue = $("#slider-vertical"+index ).slider( "value" );

                var newSliderAmoutValue = (sliderAmountValue * 100);

                $( "#amount"+index ).val(newSliderAmoutValue);

       });
    }

    createBars();

    createInputFields();
    
    myCoolSlider();

    



});