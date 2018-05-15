// JavaScript Document

var header_links_selector;
var nav_links_selector;
var all_links_selector;

var header_links_elements;
var nav_links_elements;
var all_links_elements;

header_links_selector = "header > ul > li > a";
nav_links_selector = "nav > ul > li > a";
all_links_selector = header_links_selector + "," + nav_links_selector;

header_links_elements = $(header_links_selector);
nav_links_elements = $(nav_links_selector);
all_links_elements = $(all_links_selector);


$(all_links_elements).mouseenter(
  function () {
    var link_element;

    link_element = this;

    var active_color;

    active_color = "rgb(186, 0, 203)";

    var text_decoration_value;

    text_decoration_value = "underline";

    $(link_element).animate({
      color: active_color
    }, 150)
    .delay(150)
    .css("textDecoration", text_decoration_value);
  }
);

$(all_links_elements).mouseleave(
  function () {
    var link_element;

    link_element = this;

    var link_html_contents;

    link_html_contents = $(link_element).html();

    var link_css = {};

    if (link_html_contents === "Contact Us" || 
        link_html_contents === "Donate" || 
        link_html_contents === "Map") {
      link_css = {
        textDecoration: "underline"
      };
    } else {
      link_css = {
        textDecoration: "none"
      };
    }

    var base_color;

    base_color = "rgb(141, 21, 155)";

    $(link_element).animate({
      color: base_color
    }, 300);

    setTimeout(
      function () {
        $(link_element).css(link_css);
      }, 250);
  }
);

$(window).scroll(
  function () {
    var window_position;
    var window_height;
    var body_height;

    window_position = $(window).scrollTop();
    window_height = $(window).height();
    body_height = $("body").height();

    var nav_selector;
    var nav_element = {};

    nav_selector = "nav";
    nav_element = $(nav_selector);

    var ul_selector;
    var ul_element = {};

    ul_selector = "nav ul";
    ul_element = $(ul_selector);

    var nav_css = {};
    var ul_css = {};

    var nav_height;

    nav_height = $("nav").height();

    var nav_top_value;

    nav_top_value = (window_height - nav_height - 2).toString() + "px";
/* console.log("nav_height = " + nav_height);
console.log("nav_top_value = " + nav_top_value); */
    var window_at_bottom_value;

    window_at_bottom_value = window_position - (Math.round(body_height) - window_height);
// console.log("window_at_bottom_value = " + window_at_bottom_value);
    if (window_position >= 78) {
      nav_css = {
        position: "fixed"
      };

/*        */

      if (window_at_bottom_value === 56 || 
          window_at_bottom_value === -4) {
        nav_css.top = nav_top_value;

        if ($(nav_element).css("top") === "0px" )  {
          
          $(nav_element).stop().hide("slide", { direction: "up" }, 750, 
            function () {  
              $(nav_element).css(nav_css);
console.log("1");
              $(nav_element).stop().show("slide", { direction: "down" }, 500);
            }
          ); 

          // $(nav_element).stop().show("slide", { direction: "down" }, 500);
        } else {
          $(nav_element).css(nav_css);

          $(nav_element).stop().show("slide", { direction: "down" }, 500);
          /* $(nav_element).stop().hide("slide", { direction: "up", distance: nav_height }, 750, 
            function () {
              $(nav_element).css(nav_css);

              $(nav_element).stop().show("slide", { direction: "down" }, 500);
            }
          ); */
console.log("2");
        }
      } else {
// console.log("$(window).scrollTop() = " + $(window).scrollTop());
        nav_css.top = "0px";
// console.log("3");
        if (window_position < body_height - (window_height * 1.4))  {
          if ($(nav_element).css("top") !== "0px")  {
            // $(nav_element).css(nav_css);

            $(nav_element).stop().hide("slide", { direction: "down" }, 500, 
              function () {
                $(nav_element).css(nav_css);

                $(nav_element).stop().show("slide", { direction: "up" }, 500);
              });
console.log("0px");
          }
  
          if ($(nav_element).css("position") === "relative")  {
            $(nav_element).css(nav_css);
console.log("relative");
          }
        }
      }
/* console.log("window_position = " + window_position);
      if (window_position < 6304 - (window_height / 2))  {
        if ($(nav_element).css("top") !== nav_top_value && 
            $(nav_element).css("position") === "relative") {
          $(nav_element).css(nav_css);
        } else {
          if ($(nav_element).css("top") === nav_top_value)  {
            $(nav_element).stop().hide("slide", { direction: "down" }, 500, 
              function () {
  
  console.log("bottom up");
                /* $(nav_element).css(nav_css);
  
  
  
                $(nav_element).stop().show("slide", { direction: "down" }, 500); 
              }
            );
          } else {
            $(nav_element).hide("slide", { direction: "up", distance: nav_height }, 750, 
              function () {
                nav_css.top = nav_top_value;
    console.log("going down");
                $(nav_element).css(nav_css);
                $(nav_element).stop().show("slide", { direction: "down" }, 500);
              }
            );
          }
        }
      } 
 */ } else  {
      nav_css = {
        top: "0px", 
        display: "flex", 
        position: "relative"
      };

      ul_css = {
        marginTop: "0"
      };

      $(ul_element).css(ul_css);
      $(nav_element).css(nav_css);
    } 
  }
);

/* $("a#nav-link-phss_supporters").click(
  function () {
    var window_height;

    window_height = $(window).height();

    var nav_height;

    nav_height = $("nav").height();

    nav_top_value = (window_height - nav_height - 4).toString() + "px";

    var nav_selector;
    var nav_element = {};

    nav_selector = "nav";
    nav_element = $(nav_selector);

    var nav_css = {};

    nav_css = {
      top: nav_top_value, 
      position: "fixed", 
      borderTop: "2px solid #ec9053"
    };

    $(nav_element).css(nav_css);
  }
);
 */
$("nav > ul:nth-child(2) > li > a").click(
  function () {
    var window_position;

    window_position = $(window).scrollTop();

    if (window_position === 0)  {
      var link_id_value;

      link_id_value = $(this).attr("id");

      if (link_id_value !== "nav-link-phss_supporters") {
        setTimeout(
          function () {
            window_position = $(window).scrollTop();
  
            $(window).scrollTop(window_position - 60);
          }, 100
        );
      }
    }
  }
);