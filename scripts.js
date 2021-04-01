// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');    

    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function (event) {
        window.confirm("Confirm that the shuttle is ready for takeoff");
        document.getElementById("flightStatus").innerText = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        document.getElementById("miles").innerText = Number(document.getElementById("miles").innerText) + 10000;
    });

    let landing = document.getElementById("landing");
    landing.addEventListener("click", function (event) {
        window.confirm("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerText = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("miles").innerText = 0;
        document.getElementById("spaceShuttleHeight").style.height = 0;
    });

    let missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener("click", function (event) {
        window.confirm("Confirm that you want to abort the mission.");
        document.getElementById("flightStatus").innerText = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("miles").innerText = 0;
        document.getElementById("spaceShuttleHeight").style.height = 0;
    });

    let up = document.getElementById("up");
    up.addEventListener("click", function (event) {
        let rocket = document.getElementById("rocket");
        var style = rocket.currentStyle || window.getComputedStyle(rocket)
;
        rocket.style.marginTop = (Number(style.marginTop.split('px')[0]) - 10) + 'px';
        document.getElementById("miles").innerText = Number(document.getElementById("miles").innerText) + 10000;
    });

    let down = document.getElementById("down");
    down.addEventListener("click", function (event) {
        let rocket = document.getElementById("rocket");
        var style = rocket.currentStyle || window.getComputedStyle(rocket)
;
        rocket.style.marginBottom = (Number(style.marginBottom.split('px')[0]) + 10) + 'px';
        document.getElementById("miles").innerText = Number(document.getElementById("miles").innerText) - 10000;
    });

    let right = document.getElementById("right");
    right.addEventListener("click", function (event) {
        let rocket = document.getElementById("rocket");
        var style = rocket.currentStyle || window.getComputedStyle(rocket)
;
        rocket.style.marginRight = (Number(style.marginRight.split('px')[0]) + 10) + 'px';
    });

    let left = document.getElementById("left");
    left.addEventListener("click", function (event) {
        let rocket = document.getElementById("rocket");
        var style = rocket.currentStyle || window.getComputedStyle(rocket)
;
        rocket.style.marginLeft = (Number(style.marginLeft.split('px')[0]) - 10) + 'px';
    });
    
});    
