$(window).on('load' , function(){
    $('#mycarousel').carousel({interval: 2000});
    $("#carouselButton").on('click', function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });

    $("#loginModalToggle").on('click', function() {
        $("#loginModal").modal('toggle');
    })
    $("#reserveTableModalToggle").on('click', function() {
        $("#reserveTableModal").modal('toggle');
    })
})