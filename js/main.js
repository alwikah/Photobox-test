var columnNumber = $("#columnNumberPicker").val();
var updateColumnNumber;

$(document).ready(function(){
    createSliderColumn();
    $('#box').fadeIn();
    centerElm('#box');
    $(window).resize(function(){
        centerElm('#box');
    });
    createColumns();
});

function centerElm(elem){
    //Get the height of the window
    var window_height = $(window).height();
    // Get the center of the window
    var window_center = window_height/2;
    //get the height of the container
    var elem_height = $(elem).height();
    //get the middle of the element
    var elem_middle = elem_height/2;
    // find the middle
    var center_pos = window_center - elem_middle;
    //position element in the center
    if(window_height>elem_height){
        $(elem).css("marginTop", center_pos);
    } else {
        $(elem).css("marginTop", "0");
    }
}

var createColumns = function(){
    $("#columnNumberPicker").change(function(){
        var currentNumberOfColumns = $("#columns ul").length;        
        var selectedNumber = $("#columnNumberPicker").val();
        cloneColumn(selectedNumber);    
    });
};
var cloneColumn = function(num){
    var i, n, html = "";
    for (i=0;i<num;i++){
        n = i+1;
        html += "<ul id='column"+ n +"'>";
        html +=     "<li class='col'>";
        html +=         "<div class='slider-inner'><div id='slider-vertical' style='height:200px;''></div></div>";
        html +=         "<div class='inputContainer'>";
        html +=             "<div class='columnName'>value "+ n +"</div>";
        html +=             "<input type='text' value='' id=vala"+ n +">";
        html +=             "<input type='text' value='' id=valb"+ n +">";
        html +=         "</div>";
        html +=     "</li>";
        html += "</ul>";          
    }
    $("#columns").html(html);
    
};

function createSliderColumn(){
$(function() {
        $(".v-slider").slider({
            orientation: "vertical",
            range: "min",
            min: 0,
            max: 100,
            value: 30,
            slide: function( event, ui ) {
                $("#amount").val(ui.value);
            }
        });
        $("#amount").val( $("#slider-vertical").slider("value"));
        console.log($("#slider-vertical").slider("value"));
    });
}


