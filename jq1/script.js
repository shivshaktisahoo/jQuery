$(document).ready(function(){
    $('div').mouseover(function(){
        $('div p').text("Mouse placed over div");
        // $('div').css("width","300px");
        $('div').css({"width":"300px","height":"300px"});

    });
});