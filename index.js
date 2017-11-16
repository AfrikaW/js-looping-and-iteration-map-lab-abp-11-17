function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver){
    return driver.toLowerCase();


  })

}

function nameToAttributes (drivers) {
   return drivers.map(function (driver){
    const fName = driver.split(' ')[0];
    const lName = driver.split(' ')[1];
    return {firstName: fName, lastName: lName};
  });
}

//function nameToAttributes (driver) {}
//`"<NAME OF DRIVER> is from <HOMETOWN>"`

(
//it('returns all drivers lowercased', function () {
//  expect(lowerCaseDrivers(drivers)).to.eql(['bobby', 'sammy', 'sally', 'annette', 'sarah', 'bobby']);
//});

//const squaredNumbers = map(originalNumbers, function (num) { return num * num; });// Code your solution in this file.


//function matchName(drivers, name) {
  //return drivers.filter(function(driver){
    //return name === driver.name
