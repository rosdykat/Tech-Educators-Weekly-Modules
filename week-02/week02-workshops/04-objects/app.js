console.log("04 objects module");

// objects
// a place to store any amount of data with more specific organisation
// declare an object
// only difference so far between object and array is {} instead of or []
// in an object, we have a list of properties (the cityName, population etc)
// each property is a key-value pair (cityName is the key, the value is the data i.e "Norwich")
let city = {
  cityName: "Norwich",
  population: 250000,
  hasTrainStation: true,
  // you can put an array in this too
  footballTeamColours: ["yellow", "green"],
  techCompanies: {
    companyName: "TechEducators",
    staff: 25,
    locations: ["Norfolk", "Hull", "Berkshire", "Leicester"],
  },
};

console.log(city);
// console.table makes it into a nice table!
// console.table(city);

// how to access the objects data
// dot notation
// to access properties follow the layers of the object top to bottom

// I want to access the population property in the city object
// when selecting property must follow the layers

// city.population;
console.log(city.population);

// TODO I want to access the yellow item in the city object

console.log(city.footballTeamColours[0]);

// some familiar objects

// TODO access the staff values in the city object --> use not dot notation

console.log(city.techCompanies.staff);
