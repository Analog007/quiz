//array to store data instead of database
var main = {
    "title":"Which Greenpeace Campaign Are You?",
    "subtitle":"How will you be saving the world today?"
}

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
        "title": "What is your ideal weekend activity?",
        "type": "grid",
        "multiple": "false",
        "elements": [{
            "category_id": 1,
            "description": "Greenpeace",
            "subtitle": "Ice Skating",
            "pic_location": "img/q2/q2-1.jpg"
        }, {
            "category_id": 2,
            "description": "Greenpeace",
            "subtitle": "Scuba Diving",
            "pic_location": "img/q2/q2-2.jpg"
        }, {
            "category_id": "3",
            "description": "Greenpeace",
            "subtitle": "A Long Walk in the Woods",
            "pic_location": "img/q2/q2-3.jpg"
        }, {
            "category_id": "4",
            "description": "Greenpeace",
            "subtitle": "Cooking",
            "pic_location": "img/q2/q2-4.jpg"
        }, {
            "category_id": "5",
            "description": "Greenpeace",
            "subtitle": "Cycling",
            "pic_location": "img/q2/q2-5.jpg"
        }, {
            "category_id": "6",
            "description": "Greenpeace",
            "subtitle": "Shopping",
            "pic_location": "img/q2/q2-6.jpg"
        }]
    },
    "3": {
        "id": 3,
        "isActive": true,
        "title": "If you could live anywhere, where would it be?",
        "type": "grid",
        "multiple": "false",
        "elements": [{
            "category_id": 1,
            "description": "tambaco / Via Flickr",
            "subtitle": "",
            "pic_location": "img/q3/q3-1.jpg"
        }, {
            "category_id": 2,
            "description": "pandiyan / Via Flickr",
            "subtitle": "",
            "pic_location": "img/q3/q3-2.jpg"
        }, {
            "category_id": "3",
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q3/q3-3.jpg"
        }, {
            "category_id": "4",
            "description": "baronreznik / Via Flickr",
            "subtitle": "",
            "pic_location": "img/q3/q3-4.jpg"
        }, {
            "category_id": "5",
            "description": "starsantique / Via Flickr",
            "subtitle": "",
            "pic_location": "img/q3/q3-5.jpg"
        }, {
            "category_id": "6",
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q3/q3-6.jpg"
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
    },
    "5": {
        "id": 5,
        "isActive": true,
        "title": "If you won a lot of money, what would you spend it on?",
        "type": "grid",
        "multiple": "false",
        "elements": [{
            "category_id": 1,
            "description": "Greenpeace",
            "subtitle": "ALL the clothes",
            "pic_location": "img/q5/q5-1.jpg"
        }, {
            "category_id": 2,
            "description": "Greenpeace",
            "subtitle": "A trip to the North pole",
            "pic_location": "img/q5/q5-2.jpg"
        }, {
            "category_id": "3",
            "description": "Greenpeace",
            "subtitle": "A GIANT wind turbine",
            "pic_location": "img/q5/q5-3.jpg"
        }, {
            "category_id": "4",
            "description": "Greenpeace",
            "subtitle": "A Sailing Boat",
            "pic_location": "img/q5/q5-4.jpg"
        }, {
            "category_id": "5",
            "description": "Greenpeace",
            "subtitle": "Food. Lots and lots of food.",
            "pic_location": "img/q5/q5-5.jpg"
        }, {
            "category_id": "6",
            "description": "Greenpeace",
            "subtitle": "Thousands of plants",
            "pic_location": "img/q5/q5-6.jpg"
        }]
    },
    "6": {
        "id": 6,
        "isActive": true,
        "title": "What is your favourite colour?",
        "type": "grid",
        "multiple": "false",
        "elements": [{
            "category_id": 1,
            "description": "",
            "subtitle": "",
            "pic_location": "img/q6/q6-1.jpg"
        }, {
            "category_id": 2,
            "description": "",
            "subtitle": "",
            "pic_location": "img/q6/q6-2.jpg"
        }, {
            "category_id": "3",
            "description": "",
            "subtitle": "",
            "pic_location": "img/q6/q6-3.jpg"
        }, {
            "category_id": "4",
            "description": "",
            "subtitle": "",
            "pic_location": "img/q6/q6-4.jpg"
        }, {
            "category_id": "5",
            "description": "",
            "subtitle": "",
            "pic_location": "img/q6/q6-5.jpg"
        }, {
            "category_id": "6",
            "description": "",
            "subtitle": "",
            "pic_location": "img/q6/q6-6.jpg"
        }]
    },
    "7": {
        "id": 7,
        "isActive": true,
        "title": "Pick a cat",
        "type": "grid",
        "multiple": "false",
        "elements": [{
            "category_id": 1,
            "description": "Greenpeace",
            "subtitle": "",
            "pic_location": "img/q7/q7-1.jpg"
        }, {
            "category_id": 2,
            "description": "jessandcolin / Via Flickr",
            "subtitle": "",
            "pic_location": "img/q7/q7-2.jpg"
        }, {
            "category_id": "3",
            "description": "meantux / Via Flickr",
            "subtitle": "",
            "pic_location": "img/q7/q7-3.jpg"
        }, {
            "category_id": "4",
            "description": "mundoworldmond / Via Flickr",
            "subtitle": "",
            "pic_location": "img/q7/q7-4.jpg"
        }, {
            "category_id": "5",
            "description": "tiendacartidadegato / Via Flickr",
            "subtitle": "",
            "pic_location": "img/q7/q7-5.jpg"
        }, {
            "category_id": "6",
            "description": "skittledog / Via Flickr",
            "subtitle": "",
            "pic_location": "img/q7/q7-6.jpg"
        }]
    },
    "8": {
        "id": 8,
        "isActive": true,
        "title": "Pick a Beyoncé",
        "type": "grid",
        "multiple": "false",
        "elements": [{
            "category_id": 1,
            "description": "Nonu photography / Via Flickr",
            "subtitle": "",
            "pic_location": "img/q8/q8-1.jpg"
        }, {
            "category_id": 2,
            "description": "HM",
            "subtitle": "",
            "pic_location": "img/q8/q8-2.jpg"
        }, {
            "category_id": "3",
            "description": "Via mp3waxx.com",
            "subtitle": "",
            "pic_location": "img/q8/q8-3.jpg"
        }, {
            "category_id": "4",
            "description": "hotgossipitalia / Via Flickr",
            "subtitle": "",
            "pic_location": "img/q8/q8-4.jpg"
        }, {
            "category_id": "5",
            "description": "single ladies / Via YouTube",
            "subtitle": "",
            "pic_location": "img/q8/q8-5.jpg"
        }, {
            "category_id": "6",
            "description": "Complex Mag / Via Flickr",
            "subtitle": "",
            "pic_location": "img/q8/q8-6.jpg"
        }]
    }
};

var results = {
    "1": {
        "title": "You got: Food",
        "description": "You love everything life has to offer, especially things you can eat. And you want to live in a world that exists in harmony with nature, not against it. Excessive use of synthetic fertilisers or chemical pesticides on crops can be really harmful to the environment, people and animals. Ecological farming is the solution.",
        "pic_location": "img/results/result-1.jpg",
        "img_source": "Greenpeace / Via grnpc.org"
    },
    "2": {
        "title": "You got: Oceans",
        "description": "You go with the flow, letting the current take you where it will. You shape the world around you and want to make sure that it survives, for all creatures that live on it. Our majestic oceans need help against the destructive forces of unsustainable fishing, drilling, pollution and climate change. Send them an SOS.",
        "pic_location": "img/results/result-2.jpg",
        "img_source": "Greenpeace / Via grnpc.org"
    },
    "3": {
        "title": "You got: Arctic",
        "description": "You are determined, stoic and you can withstand almost anything that comes your way. But not climate change. The Arctic is getting warmer. And as the ice melts, oil companies are rushing to exploit newly available fossil fuel deposits, further contributing to the problem. This needs to stop. For the entire planet’s sake.",
        "pic_location": "img/results/result-3.jpg",
        "img_source": "Greenpeace / Via grnpc.org"
    },
    "4": {
        "title": "You got: Detox",
        "description": "You are too cool for school. If it’s not beautiful, then it’s not on you. Some totally unstylish companies ​are ​putting our planet at risk by us​ing​ hazardous chemicals to make ​our ​clothes. Don't they know, toxic-free fashion is becoming a must-have trend? It’s time they Detoxed.",
        "pic_location": "img/results/result-4.jpg",
        "img_source": "Greenpeace / Via grnpc.org"
    },
    "5": {
        "title": "You got: Forests",
        "description": "You’re fierce and strong and you’re never afraid to stand up for what’s right. You don’t let anything stand in your way. Think about this though: in the 2 minutes it has taken you to do this quiz, a forest area the size of 70 football pitches has been destroyed. Our last forest wildernesses are under threat from industrial scale deforestation. Paradise needs protecting.",
        "pic_location": "img/results/result-5.jpg",
        "img_source": "Greenpeace / Via grnpc.org",
    },
    "6": {
        "title": "You got: Energy",
        "description": "You are bright and full of life. You blow where the wind goes and light up every room you walk into. And you want to change the world for the better; you can envision a clean, renewable future for the benefit of all. Renewable energy can help us avert climate change. Join the Energy [R]evolution.",
        "pic_location": "img/results/result-6.jpg"
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
            el.html("<h4>Please answer the following questions: </h4>");
            $('.question:not(.answered)').each(function(){
                el.append('<a class="not-completed" href="#'+$(this).attr("id")+'" title="'+$(this).find('h3').text()+'">'+$(this).find('h3').text()+'</a>');
            })
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
                    data = data.replace(/{{question_title}}/g,main["title"])
                        .replace(/{{title}}/g,results[cat].title)
                        .replace(/{{pic_location}}/g,results[cat].pic_location)
                        .replace(/{{description}}/g,results[cat].description)
                        .replace(/{{img_source}}/g,results[cat].img_source);

                        el.html(data);
                        //turn off click functionality
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
