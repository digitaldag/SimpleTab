/* SimpleTab v0.2
 * Fire tabBlur and tabFocus when the tab is focussed or lose the focus.
 * The difference with $(window).on('focus')/$(window).on('blur') is basically that it is launched even if the tab is active, and you clicked the url bar or the search bar
 * 
 * Usage:
 * $(window).on('tabBlur',function(){console.log('Blurred')});
 * $(window).on('tabFocus',function(){console.log('Focussed')});
 * $('#status').tabBlur(function(){$(this).html('Blurred');});
 * $('#status').tabFocus(function(){$(this).html('Focussed');});
 * 
 * Changelog
 * v0.2 (30/07/2014)
 * + Added tabFocus/tabBlur functions
 * + Changed scope fro the functions (now you can use "this" in the callback function)
 * 
 * v0.1 (08/07/2014)
 * + Initial release
 * 
 * License: This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/ or send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
 * Contacts: digitald(at)big-d-web(dot)com
 */
(function($) {
        window.enVars = window.enVars || {};

        if (typeof document.hidden !== "undefined") {
                enVars.visibilityValue = "hidden";
                enVars.visibilityChange = "visibilitychange";
        } else if (typeof document.mozHidden !== "undefined") {
                enVars.visibilityValue = "mozHidden";
                enVars.visibilityChange = "mozvisibilitychange";
        } else if (typeof document.msHidden !== "undefined") {
                enVars.visibilityValue = "msHidden";
                enVars.visibilityChange = "msvisibilitychange";
        } else if (typeof document.webkitHidden !== "undefined") {
                enVars.visibilityValue = "webkitHidden";
                enVars.visibilityChange = "webkitvisibilitychange";
        }

        document.addEventListener(enVars.visibilityChange, function() {
                if (document[enVars.visibilityValue]) {
                        window.tabFocus = false;
                        $('*').each(function(){$(this).triggerHandler('tabBlur');});
                }
                else{
                        window.tabFocus = true;
                        $('*').each(function(){$(this).triggerHandler('tabFocus');});
                }
        }, false);

        $.fn.tabFocus = function(callback) {
                var that = this;
                document.addEventListener(enVars.visibilityChange, function(e) {
                        if (!document[enVars.visibilityValue]) {
                                if (typeof callback === 'function') {
                                        p = $.proxy(callback, that,e);
                                        p();
                                }
                        }
                }, false);
        };

        $.fn.tabBlur = function(callback) {
                var that = this;
                document.addEventListener(enVars.visibilityChange, function(e) {
                        if (document[enVars.visibilityValue]) {
                                if (typeof callback === 'function') {
                                        p = $.proxy(callback, that,e);
                                        p();
                                }
                        }
                }, false);
        };

})(jQuery);