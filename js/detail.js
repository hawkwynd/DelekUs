$(document).ready(function(){
    // require('bootstrap');

    var myElements = data['elements'];
    var loop = 'even';

     console.log(myElements);
     
    $.each(myElements, function(idx, group){
    
        loop = loop == 'odd' ? 'even' : 'odd';
        var list = '';
        var lor = loop == 'even' ? 'right' : '';

        $.each(group['files'], function(i, file){
            list += '<li>' +
            '<div class="file-icon file-icon-lg" data-type="'+ file['type'] +
            '" data-size="'+ file['size'] +'" data-author="' + file['author'] + '">' +'</div>' +
            file['filename'] + ' (' + file['size'] + ') </li>'
        });


        populate(group, list, lor);

    });

    
   
function populate(data, files, lor){
    $('.main-timeline').append(
        '<div class="timeline">' + 
        '<div class="timeline-icon"><img src="img/ehssms-active.png"></div>'+
        '<div class="timeline-content ' + lor + '">'+
        '<div class="wrap-collabsible">'+
                '<input id="'+data['id']+'" class="toggle" type="checkbox">'+
                '<label for="'+data['id']+'" class="lbl-toggle title">'+
                data['title']+
                '</label>'+
                '<div class="collapsible-content">'+
                '<div class="content-inner">'+
                '<p class="description">'+
                data['description'] +
                '</p>'+
                '<ul class="spLinks">'+ files +
                '</ul>' +
                '</div> </div> </div></div>'
    );
}
    


    var request = getUrlVars();  

   // Initialize the elements containers to listen for hovers, clicks 
 var elements = [
    $('#ehssms'), 
    $('#rams'), 
    $('#oems'),
    $('#mms'),
    $('#cpms'),
    $('#bsms'),
    $('#hrms'),
    $('#cims')
];
    
// Process request info

var a_request = contents[request['el']];
var el_href     = a_request['href'];
var el_title    = a_request['title'];
var el_contents = a_request['contents'];
var iconClass   = a_request['icon'];

// target the element and set active class
// $('#' + el_href ).addClass('active');
$('header h2').html(el_title);

// build array obj map elements contents and titles
var combiObj = $.map(elements, function(el){return el.get()});

// Listen for any of our elements to be moused' over and update
$(combiObj).on('mouseover', function(ev){
    var id          = $(this).attr('id');
    $('.statusContainer').html(contents[id]['title']);

    // update image to active status image
    $('#'+ id + ' img').attr('src','img/'+ id +'-active.png');
  
});

// mouseout function reset
$(combiObj).on('mouseout', function(ev){
    var id          = $(this).attr('id');
    $('.statusContainer').html(contents[el_href]['title']);
    // dont reset if current img is active
    if(el_href != id){
        $('#' + id + ' img').attr('src','img/'+id+'.png');
    }
    
});

// Click function redirect sending element id with it
$(combiObj).on('click', function(ev){
    var id          = $(this).attr('id');
    console.log( contents[id]['href'] )
    $(location).attr('href', 'detail.html?el=' + contents[id]['href']);
});

// load up and populate the menu
loadMenuIcons(contents, el_href);

// set timeline marker icon image based on href element
$('.timeline-icon').html('<img src="img/' + el_href + '-active.png">');

// Display status

$('.statusContainer').html(contents[el_href]['title']);
    


});




// return vars passed to detail with the selected
// element used for display
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


// populate the icons based on our array
function loadMenuIcons(contents, el_href){
    
    $.each(contents, function(key, value){
        // set the active icon based on requested element
        $('#' + value['href']).html(
            value['href'] == el_href ? '<img src="img/' +  value['href'] + '-active.png">' :  
            '<img src="img/' + value['href']+'.png">'
        );
    });

}