window.onload = function(){

particlesJS("particles-js", {
particles: {
number: { value: 100 },
size: { value: 3 },
color: { value: "#38bdf8" },
line_linked: {
enable: true,
color: "#38bdf8"
},
move: {
speed: 2
}
},
interactivity: {
events: {
onhover: {
enable: true,
mode: "repulse"
}
}
}
});

};