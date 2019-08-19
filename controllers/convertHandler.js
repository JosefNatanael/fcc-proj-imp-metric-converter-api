/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const math = require('mathjs');
    var reg = /^[0-9\/]+\.?[0-9\/]+/g;
    if (!reg.test(input)) {
      return 1;
    } else {
      var re = /[\/]/g;
      var result = input.match(reg);
      var testing = result[0].match(re).length;
      if (result == null || testing > 1) {
        return 'invalid number';
      }
      return math.evaluate(result[0]);
    }

  };
  
  this.getUnit = function(input) {
    var reg = /[A-Za-z]+$/g;
    var result = input.match(reg)[0];
    const units = ['mi', 'km', 'gal', 'l', 'lbs', 'kg'];
    if (!units.includes(result.toLowerCase())) return 'invalid unit'
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    if (initUnit == undefined) return 'invalid unit';
    const units = ['mi', 'km', 'gal', 'l', 'lbs', 'kg'];
    if (!units.includes(initUnit.toLowerCase())) return 'invalid unit'
    const alternative = {
      'mi': 'km',
      'km': 'mi',
      'gal': 'l',
      'l': "gal",
      'lbs': 'kg',
      'kg': 'lbs'
    }
    var result = alternative[initUnit.toLowerCase()];
    return result;
  };

  this.spellOutUnit = function(unit) {
    if (unit == undefined) return 'invalid unit';
    const units = ['mi', 'km', 'gal', 'l', 'lbs', 'kg'];
    if (!units.includes(unit.toLowerCase())) return 'invalid unit'
    const spelling = {
      'mi': 'miles',
      'km': 'kilometers',
      'gal': 'gallons',
      'l': "liters",
      'lbs': 'pounds',
      'kg': 'kilograms'
    }
    var result = spelling[unit.toLowerCase()];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    let multiplier = 0;
    
    const lowered = initUnit.toLowerCase();
    
    switch (lowered) {
      case 'mi': 
        multiplier = miToKm;
        break;
      case 'km':
        multiplier = 1 / miToKm;
        break;
      case 'gal':
        multiplier = galToL;
        break;
      case 'l':
        multiplier = 1 / galToL;
        break;
      case 'lbs':
        multiplier = lbsToKg;
        break;
      case 'kg':
        multiplier = 1 / lbsToKg;
        break;
      default:
        multiplier = 'invalid unit';
        break;
    }
    
    var result = initNum * multiplier;
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
