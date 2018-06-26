// JavaScript Document

var url_hash;
var url_hash_search_string;

url_hash = window.location.hash;
url_hash_search_string = "message=complete";

if (url_hash.indexOf(url_hash_search_string) > -1)	{
	loadConfirmationMessage();
}

var header_links_selector;
var nav_links_selector;
var pdsa_links_selector;
var all_links_selector;

var header_links_elements;
var nav_links_elements;
var pdsa_links_elements;
var all_links_elements;

header_links_selector = "header > ul > li > a";
nav_links_selector = "nav > ul > li > a";
pdsa_links_selector = "#p-splash-pdsa a";
all_links_selector = header_links_selector + "," + nav_links_selector + "," + pdsa_links_selector;

header_links_elements = $(header_links_selector);
nav_links_elements = $(nav_links_selector);
pdsa_links_elements = $(pdsa_links_selector);
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

$("nav > ul:nth-child(2) > li > a").click(
  function () {
		var window_width;

		window_width = $(window).width();

		if (window_width > 414)	{
			var window_position;

			window_position = $(window).scrollTop();

			if (window_position > 0)	{
				setTimeout(
					function () {
						window_position = $(window).scrollTop();

						$(window).scrollTop(window_position - 60);
					}, 10
				);
			}	else {
				setTimeout(
					function () {
						window_position = $(window).scrollTop();

						$(window).scrollTop(window_position - 120);
					}, 10
				);
			}
		}
  }
);

$("#input-contact-full_name, #input-contact-email_address, #input-contact-message").focusin(
	function () {
		var input_element = {};
		
		input_element = this;
		
		verifyFields(input_element, "focus");
		
	}
);

$("#input-contact-full_name, #input-contact-email_address, #input-contact-message").blur(
	function () {
		var input_element = {};
		
		input_element = this;
		
		verifyFields(input_element, "blur");
	}
);

$("#contact-bkgrnd").click(
	function ()	{
		var div_element;
		
		div_element = this;
		
		if ($(div_element).css("display") === "block")	{
			closeConfirmationMessage();
		}
	}
);

$(window).scroll(
  function () {
		var window_width;

		window_width = $(window).width();

		var window_position;

		window_position = $(window).scrollTop();

		if (window_width > 414)	{
			var window_height;
			var body_height;

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

			var window_at_bottom_value;

			window_at_bottom_value = window_position - (Math.round(body_height) - window_height);

			if (window_position >= 78) {
				nav_css = {
					position: "fixed"
				};

				if (window_at_bottom_value === 56 || 
						window_at_bottom_value === -4) {
					nav_css.top = nav_top_value;

					if ($(nav_element).css("top") === "0px" )  {
						
						$(nav_element).stop().hide("slide", { direction: "up" }, 750, 
							function () {  
								$(nav_element).css(nav_css);

								$(nav_element).stop().show("slide", { direction: "down" }, 500);
							}
						); 

					} else {
						$(nav_element).css(nav_css);

						$(nav_element).stop().show("slide", { direction: "down" }, 500);
					}
				} else {
					nav_css.top = "0px";
					if (window_position < body_height - (window_height * 1.4))  {
						if ($(nav_element).css("top") !== "0px")  {
							$(nav_element).stop().hide("slide", { direction: "down" }, 500, 
								function () {
									$(nav_element).css(nav_css);

									$(nav_element).stop().show("slide", { direction: "up" }, 500);
								}
							);
						}
		
						if ($(nav_element).css("position") === "relative")  {
							$(nav_element).css(nav_css);
						}
					}
				}
			} else  {
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
  }
);

function showMenu ()	{
	var menu_visible_links_selector;
	var menu_visible_links_elements;

	menu_visible_links_selector = "nav > ul:nth-child(2), nav > ul:nth-child(3)";
	menu_visible_links_elements = $(menu_visible_links_selector);

	var show_menu_visible_links_css = {};
	var hide_menu_visible_links_css = {};

	show_menu_visible_links_css = {
		display: "block"
	};

	hide_menu_visible_links_css = {
		display: "none"
	};

	var menu_link_selector;
	var menu_link_element;

	menu_link_selector = "nav > ul:first-of-type";
	menu_link_element = $(menu_link_selector);

	var show_menu_link_css = {};
	var hide_menu_link_css = {};

	show_menu_link_css = {
		marginBottom: "0.75rem"
	};

	hide_menu_link_css = {
		marginBottom: "0"
	};

	var menu_links_visible_value;

	menu_links_visible_value = $(menu_visible_links_elements).css("display");

	if (menu_links_visible_value === "none")	{
		$(menu_visible_links_elements).css(show_menu_visible_links_css);
		$(menu_link_element).css(show_menu_link_css);
	}	else {
		$(menu_visible_links_elements).css(hide_menu_visible_links_css);
		$(menu_link_element).css(hide_menu_link_css);
	}
}	// END of FUNCTION 'showMenu'

function loadConfirmationMessage()	{
	var window_width;

	window_width = $(window).width();

	if (window_width <= 1024)	{
		var p_selector;
		var p_element;

		p_selector = "#contact-confirmation_message > p:last-of-type";
		p_element = $(p_selector);

		var p_content;

		p_content = "Tap the background to close this message.";

		$(p_element).html(p_content);
	}

	var div_selector_1;
	var div_selector_2;
	
	var div_elements_1;
	var div_elements_2;
	
	div_selector_1 =  "#contact-confirmation_message";
	div_element_1 = $(div_selector_1);
	
	div_selector_2 =  "#contact-bkgrnd";
	div_element_2 = $(div_selector_2);
	
	var visible_css = {};
		
	block_visible_css = {
		display: "block"
	};
	
	fixed_visible_css = {
		display: "fixed"
	};

	$(div_element_1).css(block_visible_css);
	$(div_element_2).css(block_visible_css);
	$(div_element_1).css(fixed_visible_css);
}

function closeConfirmationMessage()	{
	var div_selector;
	var div_elements;
	
	div_selector = "#contact-confirmation_message, #contact-bkgrnd";
	div_elements = $(div_selector);
	
	var visible_css = {};
	
	visible_css = {
		display: "none"
	}
	
	$(div_elements).css(visible_css);
}

function loadContactForm()	{	
	var div_selector;
	var div_element = {};
	
	div_selector = "#content-form-contact, #contact-bkgrnd";
	div_element = $(div_selector);
	
	$(div_element).css("display", "block");
}

function closeContactForm()	{
	var div_selector;
	var div_element = {};
	
	div_selector = "#content-form-contact, #contact-bkgrnd";
	div_element = $(div_selector);
	
	$(div_element).css("display", "none");
}

function verifyFields(input_element, field_status) {
	var color_base_css = {};
	var color_valid_css = {};
	var color_error_css = {};
	
	color_base_css = {
		borderColor: "#cd854b", 
		backgroundColor: "#fff", 
		color: "#a2a2a1"
	};
	
	color_valid_css = {
		borderColor: "#cd854b", 
		backgroundColor: "#fff",
		color: "#000"
	};
	
	color_error_css = {
		borderColor: "#d46a6a", 
		backgroundColor: "#ffaaaa", 
		color: "#aa3939"
	};
	
	var field_selector;
	var field_value;
	
	field_selector = $(input_element).attr("id");
	field_value = $(input_element).val();
	
	var default_value_string;
	var error_value_string;

	switch (field_selector) {
		case "input-contact-full_name":
			default_value_string = "First and Last Name";
			error_value_string = "Please enter your First and Last Name";
			
			if (field_value === error_value_string) { 
				if (field_status === "focus")	{
					clearData(input_element, color_valid_css);
				}	else {
					resetData(input_element, default_value_string, color_base_css);
				}
			}
			
			if (field_value === default_value_string) {
				if (field_status === "focus")	{
					clearData(input_element, color_valid_css);
				}	
			}
			
			if (field_value.length === 0) {
				if (field_status === "blur")	{
					resetData(input_element, default_value_string, color_base_css);
				}
			} else {
				if (field_value !== default_value_string && 
					field_status === "blur")	{
					validateData(input_element, error_value_string, color_valid_css, color_error_css);
				}	
			}
		break; 

		case "input-contact-email_address":
			default_value_string = "____@_______.___";
			error_value_string = "Please retype your email address";
			
			if ((field_value === default_value_string || 
					 field_value === error_value_string) && 
				 	(field_status === "focus")) {
				clearData(input_element, color_valid_css);
			} else if (field_status === "blur") { 
				if (field_value.length > 7)	{
					validateData(input_element, error_value_string, color_valid_css, color_error_css);
				} else {
					resetData(input_element, default_value_string, color_base_css);
				}
			} 
		break;

		case "input-contact-message":
			default_value_string = "Type your message here";
			
			if (field_value === default_value_string) {
				if (field_status === "focus")	{
					clearData(input_element, color_valid_css);
				}	else {
					resetData(input_element, default_value_string, color_base_css);
				}
			}
			
			if (field_value.length === 0) {
				if (field_status === "blur")	{
					resetData(input_element, default_value_string, color_base_css);
				}
			} else if (field_value !== default_value_string) {
				$(input_element).css(color_valid_css);
			}
		break;
	}
}

function validateData(input_element, error_value_string, color_valid_css, color_error_css)	{
	var field_selector;
	var field_value;
	
	field_selector = $(input_element).attr("id");
	field_value = $(input_element).val();
	
	var search_string;
	var search_index_num;
	
	switch ($(input_element).attr("id"))	{
		case "input-contact-full_name": 

			search_string = " ";
			search_index_num = field_value.indexOf(search_string);

			if (search_index_num > 1)	{
				$(input_element).css(color_valid_css);
			}	else {
				$(input_element).css(color_error_css);
				$(input_element).val(error_value_string);
			}
		break;

		case "input-contact-email_address": 
			var search_string_Array;
			var email_string;

			search_string_Array = [
				"@", 
				".", 
				"com", 
				"net", 
				"org", 
				"mil", 
				"edu"
			];

			email_string = field_value;

			var is_valid_results_Array;
			var inc;

			is_valid_results_Array = [];
			inc = 0;

			search_string_Array.forEach(
				function (item, index)	{
					var search_string;
					var search_result_num;

					search_string = item;


					search_result_num = email_string.indexOf(search_string);

					if (search_result_num > -1)	{
						is_valid_results_Array[index] = true;
					} else {
						is_valid_results_Array[index] = false;
					}
				}
			);
						
			var is_valid;
			
			is_valid = false;
			
			if (is_valid_results_Array[0] === true &&  
				 	is_valid_results_Array[1] === true)	{
				var i;
			
				for (i = 2; i < is_valid_results_Array.length; i++)	{
					if (is_valid_results_Array[i] === true)	{
						is_valid = true;
					}
				}	
			}	else {
				is_valid = false;
			}
			
			if (is_valid === true)	{
				$(input_element).css(color_valid_css);
			} else {
				$(input_element).css(color_error_css);
				$(input_element).val(error_value_string);
			}
			
		break;
		
	}
}

function clearData(input_element, color_valid_css)	{
	$(input_element).val("");
	$(input_element).css(color_valid_css);
}

function resetData(input_element, default_value_string, color_base_css) {
	$(input_element).css(color_base_css);
	$(input_element).val(default_value_string);	
}