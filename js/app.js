var questions  = {
    "id":1,
    "multiple":false,
    type: 'grid',
    "questions":
        [
            {
                "title":"Pick an animal",
                "elements":
                    [
                        {
                            "":"15011",
                            "description":"Picture of a cpu",
                            "localion":"img.cloudimages.us/2012/06/02/mycpu.png",
                            "type":"png"
                        },
                        {
                            "pic_id":"15012",
                            "description":"Picture of a cpu two",
                            "localion":"img.cloudimages.us/2012/06/02/thiscpu.png",
                            "type":"png"
                        }
                    ]
            },
            {
                "pic_id":"1501",
                "description":"Picture of a cpu",
                "localion":"img.cloudimages.us/2012/06/02/cpu.png",
                "type":"png"
            }
        ],
};

var category = {
    "1": []
}

(function( $ ) {

    $.fn.quiz = function(options) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white"
        }, options );


        this.filter( "a" ).each(function() {
            var link = $( this );
            link.append( " (" + link.attr( "href" ) + ")" );
        });
        return this;
    };

}( jQuery ));
