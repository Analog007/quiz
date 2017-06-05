var obj = {
    "0": {
        "id": 1,
        "title": "Pick an animal",
        "type": "grid",
        "multiple": "false",
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
    "1": {
        "id": 2,
        "title": "People would describe you as...",
        "type": "list",
        "multiple": "false",
        "elements": [{
            "category_id": "1",
            "subtitle": "Trustworthy and steadfast"
        }, {
            "category": "2",
            "subtitle": "Spontaneous and easy going"
        }, {
            "category": "3",
            "subtitle": "Tough and stoic"
        }, {
            "category": "4",
            "subtitle": "Pure and earthy"
        }, {
            "category": "5",
            "subtitle": "Fashionable and hip"
        }, {
            "category": "6",
            "subtitle": "Bubbly and energetic"
        }]
    },
    "2": {
        "id": 3,
        "title": "Pick an animalsss",
        "type": "grid",
        "multiple": "false",
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
};


(function( $ ) {

    $.fn.quiz = function() {
        var el = this;
        $.each(obj, function() {
           if(this.type == 'grid') {
               var element = this;
               $.get('view/grid-wrap.html', function(data){
                   data = data.replace(/{{title}}/g,element.title)
                       .replace(/{{id}}/g,element.id)
                       .replace(/{{multiple}}/g,element.multiple);
                   el.append(data);
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
                           .replace(/{{pic_location}}/g,this.pic_location);
                       output += item;
                       if(i%wrap_items == 0) {
                           output += '</div>';
                       }
                   });
                   if(i%wrap_items != 0) {
                       output += '</div>';
                   }
                   el.find('.question-'+element.id).append(output);
               })
           } else if(this.type == 'list') {
               var element = this;
               $.get('view/list-wrap.html', function(data){
                   data = data.replace(/{{title}}/g,element.title)
                       .replace(/{{id}}/g,element.id)
                       .replace(/{{multiple}}/g,element.multiple);
                   el.append(data);
               });
               $.get('view/list.html', function (data) {
                   var output = "";
                   output += '<div class="row">';
                   $.each(element.elements, function(){
                       item = data.replace(/{{category_id}}/g,this.category_id)
                           .replace(/{{subtitle}}/g,this.subtitle);
                       output += item;
                   });
                   output += '</div>';
                   el.find('.question-'+element.id).append(output);
               })
           }
        });
        //return this;
    };

}( jQuery ))