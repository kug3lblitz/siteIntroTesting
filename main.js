var tl = new TimelineLite();
var w = $(window).width(), h = $(window).height();
var t = 0, r = w, b = h, l = 0;

l = w/2 - 60;
tl.to("#black", 0.25, {clip: "rect("+[t,r,b,l].join(" ")+")"}, 0.5);

b = h/2;
tl.to("#black", 0.25, {clip: "rect("+[t,r,b,l].join(" ")+")"});

r = w/2 + 108;
tl.to("#black", 0.25, {clip: "rect("+[t,r,b,l].join(" ")+")"});

t = h/2 - 60;
tl.to("#black", 1.75, {clip: "rect("+[t,r,b,l].join(" ")+")", ease: Elastic.easeOut});

document.documentElement.onclick = function() {
  tl.restart();
};
