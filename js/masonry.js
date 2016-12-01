$('.portfolio').masonry({
  // options
  itemSelector: '.portfolio-item',
  columnWidth: 1,
  gutter: 0
});

// Does masonry layout every resize - might give perfomance hit?
$(window).resize(function(){
  $('.portfolio').masonry({
    // options
    itemSelector: '.portfolio-item',
    columnWidth: 1,
    gutter: 0
  });
}).resize();
