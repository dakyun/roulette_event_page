const sections = $(".section")
const speed = 500

//스크롤 애니메이션
$(window).on('scroll', function(){
  let scrollTop = $(window).scrollTop()
  sections.each(function(i){
    if(scrollTop >= sections.eq(i).offset().top-speed){
      sections.eq(i).find('.show_up').addClass('active')
    }
  })
})