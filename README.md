SimpleTab
=========

Fire tabBlur and tabFocus when the tab is focussed or lose the focus
The difference with $(window).on('focus')/$(window).on('blur') is basically that it is launched even if the tab is active, and you clicked the url bar or the search bar

Usage:
=========

$(window).on('tabBlur',function(){console.log('Blurred')});
$(window).on('tabFocus',function(){console.log('Focussed')});
$('#status').tabBlur(function(){$(this).html('Blurred');});
$('#status').tabFocus(function(){$(this).html('Focussed');});

Changelog:
=========

v0.2 (30/07/2014)
+ Added tabFocus/tabBlur functions
+ Changed scope fro the functions (now you can use "this" in the callback function)

v0.1 (08/07/2014)
+ Initial release

License:
=========

This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/ or send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
