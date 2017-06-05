//array to store data instead of database
var questions = {
    "1": {
        "id": 1,
        "isActive": true,
        "title": "Pick an animal",
        "type": "grid",
        "multiple": "false",
        "elements": [{
            "category_id": 1,
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q1/q1-1.jpg"
        }, {
            "category_id": 2,
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q1/q1-2.jpg"
        }, {
            "category_id": "3",
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q1/q1-3.jpg"
        }, {
            "category_id": "4",
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q1/q1-4.jpg"
        }, {
            "category_id": "5",
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q1/q1-5.jpg"
        }, {
            "category_id": "6",
            "description": "Greenpeace",
            "subtitle": "I prefer humans",
            "pic_location": "img/q1/q1-6.jpg"
        }]
    },
    "2": {
        "id": 2,
        "isActive": true,
        "title": "Pick an animal",
        "type": "grid",
        "multiple": "false",
        "elements": [{
            "category_id": 1,
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q2/q1-1.jpg"
        }, {
            "category_id": 2,
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q2/q1-2.jpg"
        }, {
            "category_id": "3",
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q2/q1-3.jpg"
        }, {
            "category_id": "4",
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q2/q1-4.jpg"
        }, {
            "category_id": "5",
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q2/q1-5.jpg"
        }, {
            "category_id": "6",
            "description": "Greenpeace",
            "subtitle": "I prefer humans",
            "pic_location": "img/q2/q1-6.jpg"
        }]
    },
    "3": {
        "id": 3,
        "isActive": true,
        "title": "Pick an animalsss",
        "type": "grid",
        "multiple": "true",
        "elements": [{
            "category_id": 1,
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q1-1.jpg"
        }, {
            "category_id": 2,
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q1-2.jpg"
        }, {
            "category_id": "3",
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q1-3.jpg"
        }, {
            "category_id": "4",
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q1-4.jpg"
        }, {
            "category_id": "5",
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q1-5.jpg"
        }, {
            "category_id": "6",
            "description": "Greenpeace",
            "subtitle": "I prefer humans",
            "pic_location": "img/q1-6.jpg"
        }]
    },
    "4": {
        "id": 4,
        "isActive": true,
        "title": "People would describe you as...",
        "type": "list",
        "multiple": "false",
        "elements": [{
            "category_id": "1",
            "subtitle": "Trustworthy and steadfast"
        }, {
            "category_id": "2",
            "subtitle": "Spontaneous and easy going"
        }, {
            "category_id": "3",
            "subtitle": "Tough and stoic"
        }, {
            "category_id": "4",
            "subtitle": "Pure and earthy"
        }, {
            "category_id": "5",
            "subtitle": "Fashionable and hip"
        }, {
            "category_id": "6",
            "subtitle": "Bubbly and energetic"
        }]
    }
};

var results = {
    "1": {
        "title": "Pick an animal",
        "description": "lorem ipsum",
        "pic_location": "img/q1-1.jpg"
    },
    "2": {
        "title": "Pick an animal",
        "description": "lorem ipsum",
        "pic_location": "img/q1-1.jpg"
    },
    "3": {
        "title": "Pick an animal",
        "description": "lorem ipsum",
        "pic_location": "img/q1-1.jpg"
    },
    "4": {
        "title": "Pick an animal",
        "description": "lorem ipsum",
        "pic_location": "img/q1-1.jpg"
    },
    "5": {
        "title": "Pick an animal",
        "description": "lorem ipsum",
        "pic_location": "img/q1-1.jpg"
    },
    "6": {
        "title": "Pick an animal",
        "description": "lorem ipsum",
        "pic_location": "img/q1-1.jpg"
    }
};

(function( $ ) {
    //create the questions based on the json array
    $.fn.quiz = function() {
        var el = this;

        $.each(questions, function() {
            if(this.isActive == false){
                return true;
            }
           if(this.type == 'grid') {
               var item;
               var element = this;

               $.ajax({
                   url: 'view/grid-wrap.html',
                   type: "get",
                   async: false,
                   success: function(data){
                   data = data.replace(/{{title}}/g,element.title)
                       .replace(/{{id}}/g,element.id)
                       .replace(/{{multiple}}/g,element.multiple);

                       el.append(data);
                   }
               });
               $.get('view/grid.html', function (data) {
                   var output = "";
                   var i=0;
                   var wrap_items = 3;
                   $.each(element.elements, function(){
                       i += 1;
                       if(i%wrap_items == 1) {
                           output += '<div class="row">';
                       }
                       item = data.replace(/{{category_id}}/g,this.category_id)
                           .replace(/{{description}}/g,this.description)
                           .replace(/{{subtitle}}/g,this.subtitle)
                           .replace(/{{pic_location}}/g,this.pic_location)
                           .replace(/{{question_id}}/g,element.id);
                       output += item;
                       if(i%wrap_items == 0) {
                           output += '</div>';
                       }
                   });
                   if(i%wrap_items != 0) {
                       output += '</div>';
                   }
                   el.find('#question-'+element.id).append(output);
               })
           } else if(this.type == 'list') {
               var element = this;

               $.ajax({
                   url: 'view/list-wrap.html',
                   type: "get",
                   async: false,
                   success: function(data) {
                       data = data.replace(/{{title}}/g, element.title)
                           .replace(/{{id}}/g, element.id)
                           .replace(/{{multiple}}/g, element.multiple);

                           el.append(data);
                   }
               });
               $.get('view/list.html', function (data) {
                   var output = "";
                   output += '<div class="row">';
                   $.each(element.elements, function(){
                       item = data.replace(/{{category_id}}/g,this.category_id)
                           .replace(/{{subtitle}}/g,this.subtitle)
                           .replace(/{{question_id}}/g,element.id);
                       output += item;
                   });
                   output += '</div>';
                   el.find('#question-'+element.id).append(output);
               })
           }
        });
    };

    //rendering the result after all questions are answered
    $.fn.renderAnswers = function() {
        var el = this;
        var answers = [];
        if($('.question:not(.answered)').length){
            el.html("Please Answer for the following questions:");
        } else {
            $('.question.answered .selected').each(function(){
                answers.push($(this).data("id"));
            })
            var cat = getCategory(answers);
            results[cat];
            $.ajax({
                url: 'view/results.html',
                type: "get",
                async: false,
                success: function(data){
                    data = data.replace(/{{title}}/g,results[cat].title)
                        .replace(/{{pic_location}}/g,results[cat].pic_location)
                        .replace(/{{description}}/g,results[cat].description);

                        el.html(data);
                        //turn ogg click functionality
                        $(document).off('click','.question-item');
                }
            });


        }
    }

    //get the most frequent category id
    function getCategory(ids) {
        var frequency = {};
        var max = 0;
        var result;
        for(var v in ids) {
            frequency[ids[v]]=(frequency[ids[v]] || 0)+1;
            if(frequency[ids[v]] > max) {
                max = frequency[ids[v]];
                result = ids[v];
            }
        }
        return result;
    }


}( jQuery ));

//click functions
$(document).on('click','.question-item', function() {
    var el = $(this);
    if (!el.parents('#question-'+el.data("question")).data('select-multiple')) {
        if (!el.hasClass('selected')) {
            el.parents('#question-'+el.data("question")).find('.selected').removeClass('selected').find('i').toggleClass('fa-check-square-o fa-square-o');
            el.addClass('selected').find('i').toggleClass('fa-square-o fa-check-square-o');
        }
    } else {
        if (!el.hasClass('selected')) {
            el.addClass('selected').find('i').toggleClass('fa-square-o fa-check-square-o');
        } else {
            el.removeClass('selected').find('i').toggleClass('fa-check-square-o fa-square-o');
        }
    }
    if(el.parents('#question-'+el.data("question")).find('.question-item.selected').length) {
        $(this).parents('#question-'+el.data("question")).addClass('answered');
    } else {
        $(this).parents('#question-'+el.data("question")).removeClass('answered');
    }
    $('.module-quiz-result').renderAnswers();
});
