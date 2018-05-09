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

    var nav_css = {};

    if (window_position >= 78 && 
        (Math.ceil(body_height) - window_position > window_height))  {

      nav_css = {
        top: "0px", 
        position: "fixed"
      };

      $(nav_element).css(nav_css);
    } else if (window_position < 78)  {
      nav_css = {
        position: "relative"
      }

      $(nav_element).css(nav_css);
    } else if (Math.ceil(body_height) - window_position <= window_height) {
// console.log("Math.ceil(" + (body_height).toString() + ") - " + (window_position).toString() + " = " + (Math.ceil(body_height) - window_position));
      nav_css = {
        top: (body_height - $(nav_element).height()) + "px", 
        position: "relative"
      }

      $(nav_element).css(nav_css);
    }
  }
);