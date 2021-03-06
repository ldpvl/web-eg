// http://gregfranko.com/jquery-best-practices

// IIFE - Immediately Invoked Function Expression
// http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife
(function (f) {

    // The global jQuery object is passed as a parameter
    f(window.jQuery, window, document);

}(function ($, window, document) {

    // The $ is now locally scoped

    // Listen for the jQuery ready event on the document
    // https://learn.jquery.com/using-jquery-core/document-ready/
    $(function () {

        console.log('The DOM is ready');

        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onEnter',
                duration: '200%'
            }
        });

        var beachBackground = $('#beach > div');
        var dotBackground = $('#dot > div');
        var vectorBackground = $('#vector > div');

        new ScrollMagic.Scene({ triggerElement: "#beach" })
            .setTween(beachBackground, { y: "80%", ease: Power1.easeInOut })
            .addIndicators()
            .addTo(controller);

        new ScrollMagic.Scene({ triggerElement: "#dot" })
            .setTween(dotBackground, { y: "80%", ease: Power1.easeInOut })
            .addIndicators()
            .addTo(controller);

        new ScrollMagic.Scene({ triggerElement: "#vector" })
            .setTween(vectorBackground, { y: "80%", ease: Power1.easeInOut })
            .addIndicators()
            .addTo(controller);

    });

    console.log('The DOM may not be ready');

}));
