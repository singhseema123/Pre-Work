$("#grow").on("click", function(){   
    $("#box").animate({
        height:"+=35px", width:"+=35px"}, "fast");
    })
​
​
$("#shrink").on("click", function(){
    $("#box").animate({
        height: "-=35px", width: "-=35px"}, "fast");
    })
​
$("#reset").on("click", function(){
    $("#box").animate({
        height: "150px", width: "150px"}, "fast");
    })
​
​
$("#hide").click(function() {
    $( "#box" ).hide( "slow" );
    })
​
​
$("#reveal").click(function() {
    $( "#box" ).show( "slow" );
    })
​
​
$("#unfade").click(function() {
    $( "#box" ).fadeIn( "slow" );
    })
​
​
$("#fade").click(function() {
    $( "#box" ).fadeOut( "slow" );
    })
​
​
$("#blue").click(function() {
    $( "#box" ).css( "background-color", "blue" );
    })
​
​
​
$("#red").click(function() {
    $( "#box" ).css( "background-color", "red" );
    })
​
​
$("#orange").click(function() {
    $( "#box" ).css( "background-color", "orange" );
})