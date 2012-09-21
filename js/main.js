$(document).ready(function(){
    $('#box').fadeIn();
    centerElm('#box');
    $(window).resize(function(){
        centerElm('#box');
    });
    drawCanvas();
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
        $(elem).css("marginTop", '0');
    }
}


