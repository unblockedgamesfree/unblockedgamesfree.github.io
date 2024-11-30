doSearch= function() {
    const val= $("#search-bar").val().trim().replace(/ /g, "-");
    if (val!= "") {
        // alert(val);
        window.location= "/search.html?q="+ val;
    }
}

$("#search-bar").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {        
        doSearch();
    }
});

$( "#search-button" ).on( "click", function() {  
    doSearch();
});

$( document ).ready(function() {
    $("#search-bar").focus();
});