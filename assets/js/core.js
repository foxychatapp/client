/*  Copyright (C) 2019 FoxyChattApp
    File created on 20-10-2019 and made by Max van der Wolf. */

var debug_mode = "false";
var loaded = 60;
var in_menu = 0;


// Start executing!
$( document ).ready(function() {

	dynamicallyLoadScript("assets/js/modules/cookies.js");
	dynamicallyLoadScript("assets/js/modules/self_xss.js");
	dynamicallyLoadScript("assets/js/modules/chat_client.js");
	dynamicallyLoadScript("assets/js/modules/chat_bar.js");
	dynamicallyLoadScript("assets/js/modules/device_and_resolution_check.js");
        dynamicallyLoadScript("assets/js/modules/menu.js");

	dynamicallyLoadScript("//cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js");


	if( debug_mode == "true") console.log('[FOXY CORE] Document is ready, loading in basic elements.');

	$( "#wrapper" ).append( "<div class=\"listing\"><div class=\"listing_icons listing_other_people\")\"></div><div class=\"listing_spacing\"></div><div class=\"listing_list\"></div>		</div>			<div class=\"foo2\"></div>	    <div class=\"foo3\"><div class=\"profile_profilepic\" style=\"background-image: url('?type=get_img&id=000000000003\"></div><div class=\"profile_name\">Toad64</div></div>			<div class=\"foo4\"><ul id=\"messages\"></ul></div>			<div class=\"chat_bar\">   </div>			<div class=\"foo6\"><div class=\"members_box\"><div class=\"members_box_profile\" style=\"background-image: url('?type=get_img&id=000000000003\"></div><div class=\"members_box_name\">Toad32</div></div></div>" );

	if( debug_mode == "true") console.log('[FOXY CORE] Basic elements has been added, adding now the server list .');

	dynamicallyLoadScript("assets/js/modules/server_lists.js")

	if( debug_mode == "true") console.log('[FOXY CORE] Elements has been added, removing loading screen.');


});

setInterval(function() {
	$('.loading_bar_inside').css("width", "calc(" + loaded + "% - 12px)");
	if(loaded == 100){
		$( ".loading_screen" ).fadeOut( "slow", function() {
			$( ".loading_screen" ).remove();
			if( debug_mode == "true") console.log('[FOXY CORE] Ready.');

		});
	}
}, 50); 




function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  
    script.src = url; 
    document.head.appendChild(script); 
}

function foxy_debugger() {
	if( getCookie("debug") == "true") {
		setCookie("debug", "false", 128);
		console.log("[FOXY DEBUGGER] Debug has been turned off.");
	} else {
		setCookie("debug", "true", 128);
		console.log("[FOXY DEBUGGER] Debug has been turned on.");
	}
}