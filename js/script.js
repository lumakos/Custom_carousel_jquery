$(document).ready(function(){
    /* Custom Carousel */
        var num_of_items = $('.item').length;
        console.log(num_of_items);
        var dist_of_item;
        $('.right').on("click", function(){
            if(num_of_items != 0){
                dist_of_item = parseInt(-(100 / num_of_items))+"%";
                console.log(dist_of_item);
                if(!$('.active').hasClass("last")){
                    var next = $('.my-carousel-content .active').removeClass('active').next();
                    if (next.length === 0) { 
                        next = $('.my-carousel-content .item').first(); 
                    }
                    next.addClass('active');
                    if($('.active').hasClass("active")){
                        if($('.item-middle').hasClass("active")){
                            $('.item').animate({left: '0'}, "fast"); 
                        }else{   
                            $('.item').animate({left: dist_of_item}, "fast");
                        }
                    }
                }
            }
        });
        $('.left').on("click", function(){
            if(num_of_items != 0){
                dist_of_item = parseInt((100 / num_of_items))+"%";
                if(!$('.active').hasClass("first")){    
                    var prev = $('.my-carousel-content .active').removeClass('active').prev();
                    if (prev.length == 0) { 
                        prev = $('.my-carousel-content .item').last(); 
                    }
                    prev.addClass('active');
                    if($('.active').hasClass("active")){
                        if($('.first').hasClass("active")){
                            $('.item').animate({left: dist_of_item}, "fast"); 
                        }else{
                            $('.item').animate({left: '0'}, "fast");
                        }
                    }
                }
            }
        });
    /* end Custom Carousel */
});