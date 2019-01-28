$(document).ready(function() {
    // Reflect scrolling in navigation
    // 
    
    
    $(window).load(function() { // makes sure the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
     });

    var navActive = function(section) {

        var $el = $('#navbar > ul');
        $el.find('li').removeClass('active');
        $el.each(function() {
            $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
        });

    };



    $('section[data-section]').waypoint(function(direction) {

        if (direction === 'down') {
            navActive($(this.element).data('section'));
        }
    }, {
        offset: '150px'

    });

    $('section[data-section]').waypoint(function(direction) {

        if (direction === 'up') {
            navActive($(this.element).data('section'));
        }
    }, {
        offset: function() {
            return -$(this.element).height() + 155;
        }


    });


    $('#sole-Services').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {



            setTimeout(function() {
                $('#sole-Services .to-animate-1').addClass('fadeInLeft animated');
            }, 400, 'easeInOutExpo');


            setTimeout(function() {
                $('#sole-Services .to-animate-2').addClass('fadeInRight animated');
            }, 400, 'easeInOutExpo');



            $('#sole-Services .to-animate-3').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInUp animated');
                }, k * 400, 'easeInOutExpo');

            });
$('#sole-Services .to-animate-4').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInDown animated');
                }, k * 400, 'easeInOutExpo');

            });



        }
    }, {
        offset: '90%'

    });







    $('#sole-case').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {



            setTimeout(function() {
                $('#sole-case .to-animate-1').addClass('fadeInLeft animated');
            }, 400, 'easeInOutExpo');



            $('#sole-case .to-animate-2').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInUp animated');
                }, k * 400, 'easeInOutExpo');

            });

        }
    }, {
        offset: '90%'

    });



    $('#sole-advantage').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {



            setTimeout(function() {
                $('#sole-advantage .to-animate-1').addClass('fadeInRight animated');
            }, 400, 'easeInOutExpo');



            $('#sole-advantage .to-animate-3').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInUp animated');
                }, k * 400, 'easeInOutExpo');

            });


            $('#sole-advantage .to-animate-2').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('bounceIn animated');
                }, k * 600, 'easeInOutExpo');

            });



        }
    }, {
        offset: '90%'

    });


    $('#sole-blog').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {



            setTimeout(function() {
                $('#sole-blog .to-animate-1').addClass('fadeInLeft animated');
            }, 400, 'easeInOutExpo');



            $('#sole-blog .to-animate-2').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInUp animated');
                }, k * 400, 'easeInOutExpo');

            });

        }
    }, {
        offset: '90%'

    });
    /*
       $('#detail-banner').waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {



                setTimeout(function() {
                    $('#detail-banner .to-animate-1').addClass('fadeInLeft animated');
                }, 400, 'easeInOutExpo');



                $('#sdetail-banner .to-animate-2').each(function(k) {
                    var el = $(this);

                    setTimeout(function() {
                        el.addClass('fadeInUp animated');
                    }, k * 400, 'easeInOutExpo');

                });

            }
        }, {
            offset: '90%'

        });*/







    $('#sole-trusted').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {



            setTimeout(function() {
                $('#sole-trusted .to-animate-1').addClass('fadeInRight animated');
            }, 400, 'easeInOutExpo');



            $('#sole-trusted .to-animate-2').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('bounceIn animated');
                }, k * 400, 'easeInOutExpo');

            });

        }
    }, {
        offset: '90%'

    });


    $('#sole-footer').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {



            setTimeout(function() {
                $('#sole-footer .to-animate-1').addClass('fadeInLeft animated');
            }, 400, 'easeInOutExpo');


            setTimeout(function() {
                $('#sole-footer .to-animate-2').addClass('fadeInRight animated');
            }, 400, 'easeInOutExpo');



            $('#sole-footer .to-animate-3').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInUp animated');
                }, k * 400, 'easeInOutExpo');

            });

        }
    }, {
        offset: '90%'

    });









    $('#detail-banner').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {



            setTimeout(function() {
                $('#detail-banner .to-animate-1').addClass('fadeInLeft animated');
            }, 400, 'easeInOutExpo');


            setTimeout(function() {
                $('#detail-banner .to-animate-2').addClass('fadeInDown animated');
            }, 400, 'easeInOutExpo');

            setTimeout(function() {
                $('#detail-banner .to-animate-4').addClass('fadeInUp animated');
            }, 400, 'easeInOutExpo');



            $('#detail-banner .to-animate-3').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInRight animated');
                }, k * 400, 'easeInOutExpo');

            });




        }
    }, {
        offset: '90%'

    });


  
    $('#solely-you').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {


            $('#solely-you .to-animate-1').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInLeft animated');
                }, k * 700, 'easeInOutExpo');

            });


            $('#solely-you .to-animate-2').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInRight animated');
                }, k * 700, 'easeInOutExpo');

            });



            $('#solely-you .to-animate-3').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInUp animated');
                }, k * 400, 'easeInOutExpo');

            });

            $('#solely-you .to-animate-4').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInDown animated');
                }, k * 700, 'easeInOutExpo');

            });

        }
    }, {
        offset: '60%'

    });









    $('#gallery').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {





            $('#gallery .to-animate-1').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInLeft animated');
                }, k * 400, 'easeInOutExpo');

            });


            $('#gallery .to-animate-2').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInRight animated');
                }, k * 400, 'easeInOutExpo');

            });



            $('#gallery .to-animate-3').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInUp animated');
                }, k * 400, 'easeInOutExpo');

            });

            $('#gallery .to-animate-4').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInDown animated');
                }, k * 400, 'easeInOutExpo');

            });

        }
    }, {
        offset: '60%'

    });





    $('#shuzi').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {





            $('#shuzi .to-animate-1').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInLeft animated');
                }, k * 400, 'easeInOutExpo');

            });

  $('#shuzi .to-animate-2').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInRight animated');
                }, k * 400, 'easeInOutExpo');

            });
    $('#shuzi .to-animate-3').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInUp animated');
                }, k * 400, 'easeInOutExpo');

            });
      $('#shuzi .to-animate-4').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInDown animated');
                }, k * 400, 'easeInOutExpo');

            });
   

        }
    }, {
        offset: '50%'

    });









    $('#taocan').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {





            $('#taocan .to-animate-1').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInLeft animated');
                }, k * 400, 'easeInOutExpo');

            });


            $('#taocan .to-animate-2').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInRight animated');
                }, k * 400, 'easeInOutExpo');

            });



            $('#taocan .to-animate-3').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInUp animated');
                }, k * 400, 'easeInOutExpo');

            });

            $('#taocan .to-animate-4').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInDown animated');
                }, k * 400, 'easeInOutExpo');

            });

        }
    }, {
        offset: '60%'

    });












    $('#shejiy').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {





            $('#shejiy .to-animate-1').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInLeft animated');
                }, k * 400, 'easeInOutExpo');

            });


            $('#shejiy .to-animate-2').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInRight animated');
                }, k * 400, 'easeInOutExpo');

            });



            $('#shejiy .to-animate-3').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInUp animated');
                }, k * 400, 'easeInOutExpo');

            });

            $('#shejiy .to-animate-4').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInDown animated');
                }, k * 400, 'easeInOutExpo');

            });

        }
    }, {
        offset: '60%'

    });












    $('#bokzi').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {





            $('#bokzi .to-animate-1').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInLeft animated');
                }, k * 400, 'easeInOutExpo');

            });


            $('#bokzi .to-animate-2').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInRight animated');
                }, k * 400, 'easeInOutExpo');

            });



            $('#bokzi .to-animate-3').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInUp animated');
                }, k * 400, 'easeInOutExpo');

            });

            $('#bokzi .to-animate-4').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInDown animated');
                }, k * 400, 'easeInOutExpo');

            });

        }
    }, {
        offset: '60%'

    });



  $('#hezuo').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {





            $('#hezuo .to-animate-1').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInLeft animated');
                }, k * 400, 'easeInOutExpo');

            });


            $('#hezuo .to-animate-2').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInRight animated');
                }, k * 400, 'easeInOutExpo');

            });



            $('#hezuo .to-animate-3').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInUp animated');
                }, k * 400, 'easeInOutExpo');

            });

            $('#hezuo .to-animate-4').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInDown animated');
                }, k * 400, 'easeInOutExpo');

            });

        }
    }, {
        offset: '60%'

    });





  $('#lianxiwo').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {





            $('#lianxiwo .to-animate-1').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInLeft animated');
                }, k * 400, 'easeInOutExpo');

            });


            $('#lianxiwo .to-animate-2').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInRight animated');
                }, k * 400, 'easeInOutExpo');

            });



            $('#lianxiwo .to-animate-3').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInUp animated');
                }, k * 400, 'easeInOutExpo');

            });

            $('#lianxiwo .to-animate-4').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInDown animated');
                }, k * 400, 'easeInOutExpo');

            });

        }
    }, {
        offset: '60%'

    });




  $('#sheji').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {





            $('#sheji .to-animate-1').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInLeft animated');
                }, k * 400, 'easeInOutExpo');

            });


            $('#sheji .to-animate-2').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInRight animated');
                }, k * 400, 'easeInOutExpo');

            });



            $('#sheji .to-animate-3').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInUp animated');
                }, k * 400, 'easeInOutExpo');

            });

            $('#sheji .to-animate-4').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInDown animated');
                }, k * 400, 'easeInOutExpo');

            });

        }
    }, {
        offset: '60%'

    });

 $('#ffoot').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {





            $('#ffoot .to-animate-1').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInLeft animated');
                }, k * 400, 'easeInOutExpo');

            });


            $('#ffoot .to-animate-2').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInRight animated');
                }, k * 400, 'easeInOutExpo');

            });



            $('#ffoot .to-animate-3').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInUp animated');
                }, k * 400, 'easeInOutExpo');

            });

            $('#ffoot .to-animate-4').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInDown animated');
                }, k * 400, 'easeInOutExpo');

            });

        }
    }, {
        offset: '80%'

    });

    
 





});
