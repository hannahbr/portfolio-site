$("#container").mason({
    itemSelector: ".box",
    ratio: 1.5,
    sizes: [
        [1,1],
        [1,2],
        [2,2]
    ],
    columns: [
        [0,480,1],
        [480,780,2],
        [780,1080,3],
        [1080,1320,4],
        [1320,1680,5]
    ],
    promoted: [
        ['.hovereffect', 1, 1],

    ],
    filler: {
        itemSelector: '.fillerBox',
        filler_class: 'custom_filler',
        keepDataAndEvents: false
    },
    layout: 'fixed',
    gutter: 10
},function(){
    console.log("COMPLETE!")
});
