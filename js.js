 
    $(document).ready(function(){
        $(".member1").hover(function(){
          $(".member2, .member3, .member4").css({'filter': "blur(4px)"});
          }, function(){
          $(".member2,.member3,.member4").css({'filter': "blur(0)"});
        });
      });

      $(document).ready(function(){
        $(".member2").hover(function(){
          $(".member1, .member3, .member4").css({'filter': "blur(4px)"});
          }, function(){
          $(".member1,.member3,.member4").css({'filter': "blur(0)"});
        });
      });

      $(document).ready(function(){
        $(".member3").hover(function(){
          $(".member2, .member1, .member4").css({'filter': "blur(4px)"});
          }, function(){
          $(".member2,.member1,.member4").css({'filter': "blur(0)"});
        });
      });

        $(document).ready(function(){
          $(".member4").hover(function(){
            $(".member2, .member3, .member1").css({'filter': "blur(4px)"});
            }, function(){
            $(".member2,.member3,.member1").css({'filter': "blur(0)"});
          });
        });
     

        $(document).ready(function(){
          $(".members").hover(function(){
            $(this).css({'filter':'grayscale(0)'});
          }, function(){

            $(this).css(
              {'filter':'grayscale(60%)'});
          
          });
        });

      
/* 
        $(document).ready(function(){
          $(".member1").hover(function(){
            $(this).css(
              {'width':'100%'}),
            $(".hide").css({'display':'flex'})
          }, function(){

            $(this).css({'':''}),
            $(".hide".css({'display':'none'}))
          
          });
        });
 */