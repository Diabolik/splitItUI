
$(document).ready(function(){

    $("ul.dropdown-menu a").bind("mouseenter focus",function(e){
        alert("focus");
        $(this).parent().parent().css({display:"block"});
    }).bind("blur",function(){
        $(this).parent().parent().css({display:"none"});
    })

    /* END CSS HIGHLIGHT MENU ELEMENT WHEN ON DROPDOWN */
})
/* END CSS HIGHLIGHT MENU ELEMENT WHEN ON DROPDOWN */
/* FEATURED PRODUCT */
/* END FEATURED PRODUCT */
/* END MENU FUNCTIONS */