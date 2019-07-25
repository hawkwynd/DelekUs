$(document).ready(function(evs){

    var base = $('section').text(); // init base content
    var logo = $('header').html(); // init logo 
    


    
// init elements for icon containers
var elements =  [$('#ehssms'), $('#rams'), $('#oems'), $('#mms'), $('#cpms'),$('#bsms'), $('#hrms'), $('#cims') ];
var contents = {
    ehssms : 
        {
            contents: 'Continuous improvement in health and safety, process safety, environmental responsibility and security. We know that no task is ever so urgent that we cannot take time to work safely in an environmentally responsible manner.  We will not be satisfied until our employees and contractors are injury free, we protect the environment, our facilities are secure, and we are respected, recognized, and admired in the communities and industries in which we operate.',
            title: 'Environmental, Health, Safety & Security',
            href: 'ehssms',
            icon: 'fa fa-leaf'
        },
    rams : 
        {
            contents: 'RAMS is the management system framework to consistently define the capability of our company’s equipment assets (“Design It Right”), ensure we have processes in place to monitor operation integrity within that capability (“Operate It Right”), and optimize and improve equipment efficiently to support reliable operation and avoid potential loss (“Maintain It Right”).',
            title: 'Reliability Asset Management System',
            href: 'rams',
            icon: 'fa fa-cog'
    },

    oems : 
        {
            contents: 'Delek US Holdings takes pride in striving for Operational Excellence (OE); that is, to be the best company in our industry by doing the right things, in the right way with the right people.  Doing the right things the right way means our Company takes care of our people, our assets, the environment, our customers, and communities where we operate, and engage in business activities.',
            title: 'Operations Excellence Management System',
            href: 'oems',
            icon: 'fa fa-hard-hat'
    },

    mms :
        {
            contents: 'The Molecule Management System provides an integrated framework of elements to manage all aspects of refinery planning, scheduling, monitoring, and optimization. These elements will ensure we are running the right barrel, at the right time, in the right manner to achieve maximum efficiency, profitability, and reliability.',
            title: 'Molecule Management System',
            href: 'mms',
            icon: 'fa fa-dna'
    },

    cpms : 
        {
            contents: 'Best in Class performance in all capital delivery. Provide measurable value and predictable results in Delek’s portfolio management and project delivery, though being a Center of Excellence and expertise for Delek Capital.',
            title: 'Capital Projects Management System',
            href: 'cpms',
            icon: 'fa fa-tools'
    },

    bsms: 
        {
            contents: 'A set of work processes focused on development, delivery, and stewardship of strategic and tactical objectives.Clearly defined expectations for all employees and leadership teams to comply with Company’s objectives. A tool to facilitate transparency between the sites and corporate around goals, targets, and initiatives. Platform to monitor progress towards improving performance and reliability through periodic stewardship reviews.',
            title: 'Business Strategy Management System',
            href: 'bsms',
            icon: 'fas fa-chess-knight'
    },

    hrms: 
        {
            contents: 'The Human Resources Management System (HRMS) ensures a consistent and strategic approach to Delek’s management of human capital through critical activities that occur during the employee hire to retire life cycle. These critical activities provide measureable results that ensure business continuity and best position Delek’s Human Capital resources for current and future success.',
            title: 'Human Resources Management System',
            href: 'hrms',
            icon: 'fa fa-user-friends'
    },

    cims: 
        {
            contents: 'Delek’s Control Integrity Management System defines essential principles and concepts that drive business controls.  CIMS is created in a way that measures control risks.  The risks are included in mitigation plans, monitoring compliance with standards, and reporting results to the appropriate operations and management groups. The management systems has a built in self-assessments and audits, which helps to ensure every business unit implements the controls and standards.',
            title: 'Control Integrity Management System',
            href: 'cims',
            icon: 'fa fa-search'
    }
}

// build array obj map elements contents and titles
var combiObj = $.map(elements, function(el){return el.get()});

// assign background image to element li
$.each(contents, function( idx, val){    
    var url = 'img/'+val['href']+'.png';   
    $('#' + val['href']).css('background-image','url('+url+')');
});

// target our element, change background image to active

$(combiObj).on('mouseover', function(ev){
    var id  = $(this).attr('id');
    var url = 'img/'+id+'-active.png';
    var headImg = 'img/'+id+'-header.png';
    
    // set background-image and set background-color of body

    $(this).css('background-image', 'url('+url+')'); // set container background
    $('body').css('background-color','#cd153e'); // set container background color 
    $('.infoWindow').css('visibility','visible');  // turn it on visibility
    
    // Set container header and title values in center box header
    $('header').css('visibility','visible').css('background-color','#686868').html(
        '<img src="'+headImg+'" class="headerImg">'  +
        '<div id="headerTitle">' + contents[id]['title'] + '</div>'
    );

    // Set content in section container of center box
    $('section').html(contents[id]['contents']).css('padding', '20px').css('font-size','16px').css('line-height','1');

});

// listen for mouseout and restore image background
$(combiObj).on('mouseout', function(ev){
    var id  = $(this).attr('id');
    var url = 'img/'+id+'.png'
    $(this).css('background-image', 'url('+url+')');
    $('body').css('background-color','#fff');
    $('header').css('visibility','visible');
    $('section').text(base).css('padding', '10px').css('font-size','18px');
    $('header').html(logo).css('background-color','#fff');
});

// Click listener on element and redirect to detail.html
$(combiObj).on('click', function(ev){
    //alert('click for ' + $(this).attr('id') + ' detected');
    $(location).attr('href', 'detail.html?el=' + $(this).attr('id'));
});
  
});

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
