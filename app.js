/* var five = require("johnny-five"); // Load the node library that lets us talk JS to the Arduino
var board = new five.Board(); // Connect to the Arduino using that library
var configs = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1; */

//board.on("ready", function() { 
    var express = require('express'); 
    var app = express(); 
    app.use(express.static('public'));

    /* var motor =  new five.Motor({
        pins: { pwm:11 },
        register: { data: 8, clock: 4, latch: 12},
        bits: { a:2, b:3}
     });
    
     var motor2 =  new five.Motor({
        pins: { pwm:1 },
        register: { data: 8, clock: 4, latch: 12},
        bits: { a:2, b:3}
     }); */

     /* var motor = new five.Motor(configs.M1);
     var motor2 = new five.Motor(configs.M2);
     var motor3 = new five.Motor(configs.M3);
     var motor4 = new five.Motor(configs.M4);
     var Pin = new five.Pin(22);
     var mov = 0; */

    app.get('/', function(req, res) { 
       /*  motor.stop();
        motor2.stop(); */
        res.sendFile('home.html', { root: '.' }); 
    });
    
    /*  app.get('/start', function(req, res) { 
        motor.stop();
        motor.forward(req.velocidadM1);
        res.sendFile('home.html', { root: '.' }); 
    });
    

    
    app.get('/reverse', function(req, res) {  
        motor.stop();
        motor.reverse(255);
        res.sendFile('home.html', { root: '.' }); 
    });
    
    app.get('/stop', function(req, res) {  
        motor.stop();
        res.sendFile('home.html', { root: '.' }); 
    });

    
    function paraMotor2() {
        motor2.stop();
    }

    app.get('/startM2', function(req, res) { 
        motor2.stop();
        motor2.forward(255);   
        console.log(Pin);     
        res.sendFile('home.html', { root: '.' }); 
    });

    app.get('/reverseM2', function(req, res) { 
        
        motor2.stop();
        motor2.reverse(255);
        
        while(true) {
            if (Pin.INPUT == 1) {
                mov = 1;
            } else {
                mov = 2;
            }
            if(mov == 1) {
                motor2.reverse(255);
            } else {
                motor2.forward(255);
            }
        } 
        if(Pin.INPUT == 0) {
            
        } 
        res.
        console.log(Pin.value);
        res.sendFile('home.html', { root: '.' }); 
    });

    app.get('/stopM2', function(req, res) {  
        motor2.stop();
        res.sendFile('home.html', { root: '.' }); 
    });

    app.get('/startM3', function(req, res) { 
        motor3.stop();
        motor3.forward(255);     
        res.sendFile('home.html', { root: '.' }); 
    });
    
    app.get('/reverseM3', function(req, res) { 
        motor3.stop();
        motor3.reverse(255);
        res.sendFile('home.html', { root: '.' }); 
    });

    app.get('/stopM3', function(req, res) {  
        motor3.stop();
        res.sendFile('home.html', { root: '.' }); 
    });

    app.get('/startM4', function(req, res) { 
        motor4.stop();
        motor4.forward(255);     
        res.sendFile('home.html', { root: '.' }); 
    });
    
    app.get('/reverseM4', function(req, res) { 
        motor4.stop();
        motor4.reverse(255);
        res.sendFile('home.html', { root: '.' }); 
    });

    app.get('/stopM4', function(req, res) {  
        motor4.stop();
        res.sendFile('home.html', { root: '.' }); 
    });

    app.get('/startM5', function(req, res) { 
        motor5.stop();
        motor5.forward(255);     
        res.sendFile('home.html', { root: '.' }); 
    });
    
    app.get('/reverseM5', function(req, res) { 
        motor5.stop();
        motor5.reverse(255);
        res.sendFile('home.html', { root: '.' }); 
    });

    app.get('/stopM5', function(req, res) {  
        motor5.stop();
        res.sendFile('home.html', { root: '.' }); 
    });


    app.get('/stopAll', function(req, res) {
        motor.stop();
        motor2.stop();
        res.sendFile('home.html', { root: '.'});
    }) ; */

    app.listen(3000, function() { 
        console.log("Se ha iniciado el servidor en http://localhost:3000...");
    });
//});