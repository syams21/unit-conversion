enum Unit
{
    Meter = "meter",
    Kilometer = "kilometer",
    Mile = "mile",
  }
  
  function convertLength(value: number, from: Unit, to: Unit): number {
    let result: number = 0;
  
    // convert from meter to destination unit
    switch (from) {
      case Unit.Meter:
        if (to === Unit.Kilometer) {
          result = value / 1000;
        } else if (to === Unit.Mile) {
          result = value * 0.000621371;
        } else {
          result = value;
        }
        break;
      case Unit.Kilometer:
        if (to === Unit.Meter) {
          result = value * 1000;
        } else if (to === Unit.Mile) {
          result = value * 0.621371;
        } else {
          result = value;
        }
        break;
      case Unit.Mile:
        if (to === Unit.Meter) {
          result = value * 1609.34;
        } else if (to === Unit.Kilometer) {
          result = value * 1.60934;
        } else {
          result = value;
        }
        break;
    }
  
    return result;
  }
  
  // test the function
  console.log(convertLength(1000, Unit.Meter, Unit.Kilometer)); // expected output: 1
  console.log(convertLength(2, Unit.Mile, Unit.Kilometer)); // expected output: 3.21869
  