// Modify your VehicleConstructor (from earlier) to use this & new (and follow the JS conventions talked about in the previous chapters).

// Then make the following modifications:
//
// Have the Vehicle constructor also take in a “speed”
// Store the speed as an attribute
// Create a private variable called distance_travelled that starts at 0
// Create a private method called updateDistanceTravelled that increments distance travelled by speed
// Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
// Add a method called checkMiles that console.logs the distance_travelled


function VehicleConstructor(name, num_wheels, num_passengers, speed){
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name, num_wheels, num_passengers, speed)
  }
    var distance_travelled = 0;
    var self = this;
    function updateDistanceTravelled() {
      return (distance_travelled, self.speed);
      console.log(distance_travelled);
    }
//  var vehicle = {};

    this.name = name;
    this.num_wheels = num_wheels;
    this.num_passengers = num_passengers;
    this.speed = speed;
    this.move = function(){
      updateDistanceTravelled();
      this.make_noise();
    };
    this.checkMiles = function() {
      console.log(distance_travelled);
    };
    this.make_noise = function(){
      console.log("Make some noise!");
    };
  //  return vehicle;
  }

  var buick = new VehicleConstructor('buick', 4, 1, 40);
  buick.make_noise = function(){
    console.log(buick.name + " goes " + "BEEP BEEP");
  }
  var bike = new VehicleConstructor('bike', 2, 1, 15);
  bike.make_noise = function(){
    console.log(bike.name + " goes " + "RING RING");
  }
  var sedan = new VehicleConstructor('sedan', 4, 4, 65);
  sedan.make_noise = function(){
    console.log(sedan.name + " goes " + "HONK HONK");
  }
  var bus = new VehicleConstructor('bus', 6, 12, 35);

  bus.passenger_pickup = function(new_passengers){
  bus.num_passengers += new_passengers;
  }

 bus.passenger_pickup(10);
 console.log(bus.num_passengers);

console.log(buick.num_wheels);
console.log(buick.speed);
buick.move();
buick.checkMiles();
buick.make_noise();
