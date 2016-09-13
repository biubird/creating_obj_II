function VehicleConstructor(name, num_wheels, num_passengers){

  var vehicle = {};

    vehicle.name = name;
    vehicle.num_wheels = num_wheels;
    vehicle.num_passengers = num_passengers;

    vehicle.make_noise = function(){
      console.log("Make some noise!");
    }
    return vehicle;
  }

  var buick = VehicleConstructor('buick', 4, 1);
  buick.make_noise = function(){
    console.log(buick.name + " goes " + "BEEP BEEP");
  }
  var bike = VehicleConstructor('bike', 2, 1);
  bike.make_noise = function(){
    console.log(bike.name + " goes " + "RING RING");
  }
  var sedan = VehicleConstructor('sedan', 4, 4);
  sedan.make_noise = function(){
    console.log(sedan.name + " goes " + "HONK HONK");
  }
  var bus = VehicleConstructor('bus', 6, 12);

  bus.passenger_pickup = function(new_passengers){
  bus.num_passengers += new_passengers;
  }

bus.passenger_pickup(10);
console.log(bus.num_passengers);
