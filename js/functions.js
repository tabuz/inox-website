$(function(){
  slider();
});

function slider(){

  var i = 1;
  $('.slider-control-next, .slider-control-prev').click(function(){

    var $this = $(this);

    if($this.hasClass('slider-control-next')){
      i++;

      if( i<4 ){
        $('.slider-picture').css('background-image', 'url(../img/hero'+i+'.png)');
        console.log(i);
      }else{
        i = 1;
        $('.slider-picture').css('background-image', 'url(../img/hero'+i+'.png)');
        console.log(i);
      }
    }else{
      i--;
      console.log(i);
      if( i<1 ){
        i = 3;
        $('.slider-picture').css('background-image', 'url(../img/hero'+i+'.png)');
      }else{
        $('.slider-picture').css('background-image', 'url(../img/hero'+i+'.png)');
      }
    }

  });
}
