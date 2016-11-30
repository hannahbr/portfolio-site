var elem = document.querySelector('.grid');

// element argument can be a selector string
//   for an individual element
var grid = new Masonry( '.grid', {
    // options
    columnWidth: 1,
    gutter: 20,
    itemSelector: '.grid-item',
});
