$(document).ready(function(){
    // require('bootstrap');

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
    // Hover display content for each element's relative position
    var contents = {
        ehssms : 
            {
                contents: 'Continuous improvement in health and safety, process safety, environmental responsibility and security.',
                title: 'Environmental, Health, Safety & Security Management System',
                href: 'ehssms',
                icon: 'fa fa-leaf'
            },
        rams : 
            {
                contents: 'The capability of our equipment assets, monitor operation integrity within that capability, and optimize equipment efficiently.',
                title: 'Reliability Asset Management System',
                href: 'rams',
                icon: 'fa fa-cog'
        },

        oems : 
            {
                contents: 'Doing things the right way means our Company takes care of our people, our assets, the environment and our customers.',
                title: 'Operations Excellence Management System',
                href: 'oems',
                icon: 'fa fa-hard-hat'
        },

        mms :
            {
                contents: 'An integrated framework of elements to manage all aspects of refinery planning, scheduling, monitoring, and optimization.',
                title: 'Molecule Management System',
                href: 'mms',
                icon: 'fa fa-dna'
        },

        cpms : 
            {
                contents: 'Measurable value and predictable results in Delek’s portfolio management and project delivery.',
                title: 'Capital Projects Management System',
                href: 'cpms',
                icon: 'fa fa-tools'
        },

        bsms: 
            {
                contents: 'A set of work processes focused on development, delivery, and stewardship of strategic and tactical objectives.',
                title: 'Business Strategy Management System',
                href: 'bsms',
                icon: 'fas fa-chess-knight'
        },

        hrms: 
            {
                contents: 'Management of human capital through critical activities that occur during the employee hire to retire life cycle.',
                title: 'Human Resources Management System',
                href: 'hrms',
                icon: 'fa fa-user-friends'
        },

        cims: 
            {
                contents: 'Essential principles and concepts that drive business controls. Created in a way that measures control risks.',
                title: 'Control Integrity Management System',
                href: 'cims',
                icon: 'fa fa-search'
        }
    }
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