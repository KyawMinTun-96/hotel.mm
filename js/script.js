///==================MENU SHOW/HIDE=====================///
var navbar = document.getElementById('nav');
if(matchMedia){
    var mq = window.matchMedia("(min-width: 767px");
    mq.addListener(widthChange);
    widthChange(mq);
}

function widthChange(mq){
    if(mq.matches){
        let lastScrollTop = 0;
        window.addEventListener('scroll', function(){
            let scrollTop = window.scrollTop || document.documentElement.scrollTop;
            if(scrollTop > lastScrollTop){
                navbar.style.top = "-80px";
                navbar.style.transition = ".7s ease-out";
                navbar.style.scrollBehavior = "smooth";
            }else if(scrollTop <= 80){
                navbar.style.top = "60px";
                navbar.style.background = "none";
            }else{
                navbar.style.top = "0px";
                navbar.style.background = "#333646";
            }
            lastScrollTop = scrollTop;
        });
    }else{
        let lastScrollTop = 0;
        let scrollTop = 0;
        window.addEventListener('scroll', function(){
            scrollTop = window.scrollTop || document.documentElement.scrollTop;
            if(scrollTop > lastScrollTop){
                navbar.style.top = "0px";
                navbar.style.backgroundColor = "#333646";
            }else{
                navbar.style.backgroundColor = "#333646";
                navbar.style.top = "0";
            }
        });
    }
}



///==================MENU BUTTON=====================///
const sidebar = document.getElementById('sidebar');
const btn = document.getElementById('btn');
const close = document.getElementById('btn_close');


///==================NAV ACTIVE=====================///
var navLink = document.querySelectorAll('.nav_link');
function navActive(){
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    sidebar.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', navActive));



btn.addEventListener('click', () =>{
    sidebar.classList.toggle('show');
});

close.addEventListener('click', () =>{
    sidebar.classList.remove('show');
});




///======================SELECT BOX=======================///
$(".custom-select").each(function(){
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';

        $(this).find("option").each(function(){
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });

    template += '</div></div>';
    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});


$(".custom-option:first-of-type").hover(function(){
    $(this).parents(".custom-options").addClass("option-hover");
  }, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
});


$(".custom-select-trigger").on("click", function(){
    $('html').one('click',function(){
      $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});


$(".custom-option").on("click", function(){
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});







///====================ROOMS SLIDER=======================///
$(document).ready(function(){
      $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [{
                    breakpoint: 980,
                    settings:{
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                autoplay: true                         
                            }
                    },
                    {
                    breakpoint: 767,
                    settings:{
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                autoplay: true                        
                            }
                    }
                    ]
        });
});



///==================DATE PICKER====================///
$(document).ready(function(){
    ///=========set all your datepickers inputs=========///
    $("#start_date, #end_date").datepicker({
        dateFormat: 'dd/mm/yy'
    });


    ///=========You can show datepicker on click on the calendar icon=========///
    $(".fa-calendar").on("click", function(){
        $(this).siblings("input").datepicker("show");    
    });
});



///==================Initialize Swiper=============///
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    },
    pagination: {
    el: '.swiper-pagination',
    },
});
















