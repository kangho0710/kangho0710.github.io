$(function(){
    

    // Education단락 jquery




    // Skills단락 jquery

  


   
    $(".technic").hide();

    $(".tec-flex-grow-1").on("mouseenter focus",function(){
        
        $(this).children().not(":first").toggle();      
    })

    $(".tec-flex-grow-1").on("mouseleave blur",function(){
        
        $(this).children().not(":first").toggle();      
    })

   
    // projects단락 jquery

    // $(".project").on("mouseenter focus",function(){
    //     $(".project .desc").fadeIn(6000).css({
    //         'opacity':1
    //     });
    // })

    $(".project").on("mouseenter focus",function(){
        $(this).children().not(":first").fadeTo(0, 1, "linear", 
            function(){$(this).children().css({
                'opacity':1
            });
        })
    })

    $(".project").on("mouseleave blur",function(){
        $(this).children().not(":first").fadeOut("linear", function(){
            $(".project .desc").css({
                'opacity':0
            });

        })
    })


    


    
    
});