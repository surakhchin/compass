var face = document.getElementById('face');
var move = document.getElementById('move');
var options = {
    enableHighAccuracy: true
};

navigator.geolocation.watchPosition(function(position){
    document.getElementById('accuracy').innerHTML = position.coords.accuracy;
    document.getElementById('altitude').innerHTML = position.coords.altitude;
    document.getElementById('altitudeAccuracy').innerHTML = position.coords.altitudeAccuracy;
    var h = document.getElementById('heading').innerHTML = position.coords.heading;
    var x = document.getElementById('latitude').innerHTML = position.coords.latitude;
    var y = document.getElementById('longitude').innerHTML = position.coords.longitude;
    document.getElementById('speed').innerHTML = position.coords.speed;
    var heading = parseInt(position.coords.heading).toFixed();
    setDial(heading);
    getMoving(heading);
    console.log('the header is: ' + h);
    console.log('the latitude is: ' + x);
    console.log('the longitude is: ' + y);

}, console.log('error'), options);



function setDial(heading){
    face.style.transform = 'rotate(-' + heading + 'deg)';
}

function getMoving(heading){
    if (isNaN(heading)){
        move.innerHTML = '';
        console.log('heading is ' + heading);
    } else {
        move.innerHTML = heading + '˚';
        console.log('error heading is ' + heading);
    }
}