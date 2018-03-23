function scrollDiv(div)
{   
    $("html, body").animate({ scrollTop: ($(div).offset().top - 110) }, 1000);
}
