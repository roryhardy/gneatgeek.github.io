$(document).ready(function(){$.getJSON("https://api.github.com/users/gneatgeek/repos?callback=?",function(b){$.each(b.data,function(b,a){var d=$("<li>"),c=$("<a>").attr({href:a.html_url,target:"_blank"}).appendTo(d);c.append($("<div>").addClass((a.language||"").toLowerCase()));c.append($("<h2>").text(a.name));c.append($("<h3>").text(a.language||"Undefined Language"));c.append($("<p>").text(a.description||"No description :("));d.appendTo("#git")})});$.getJSON("https://api.github.com/users/gneatgeek/gists?callback=?",function(b){$.each(b.data,function(b,a){var d=$("<li>"),c=$("<a>").attr({href:a.html_url,target:"_blank"}).appendTo(d);c.append($("<div>"));c.append($("<p>").text(a.description||"No description :("));d.appendTo("#gist")})});$(".scroll").click(function(b){$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-40},1E3);history.pushState&&history.replaceState({stuff:$(this).attr("href")},"Anchor Update",$(this).attr("href"));b.preventDefault()});$("#menu").stickyMenu()});(function(b,f){b.fn.stickyMenu=function(a){var d,c=this,e=c.offset().top,g="scroll.stickymenu-"+c.attr("id");a||(a="sticky");b(f).bind(g,function(){d?b(this).scrollTop()<=e&&(c.toggleClass(a),d=!1):b(this).scrollTop()>e&&(c.toggleClass(a),d=!0)});return this}})(jQuery,window);