var columnNumber = $("#columnNumberPicker").val();
var updateColumnNumber;

$(document).ready(function(){
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
    var i;
    var colNo = num;
    var newColumnAmount = "";
    for (i=0;i<colNo;i++){
        var n = i+1;
        var html = "<ul class=clone'>\
                        <li class='col'>\
                            <div class='inputContainer'>\
                                <div class='columnName'>value "+ n +"</div>\
                                    <input type='text' value='' id=vala"+ n +">\
                                    <input type='text' value='' id=valb"+ n +">\
                                </div>\
                        </li>\
                    </ul>";
        newColumnAmount += html;          
    }
    $("#columns").html(newColumnAmount);
    
};