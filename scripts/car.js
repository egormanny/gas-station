function GasStation(name,logo,fuelLevel){
  this.name = name;
  this.logo = logo;
  this.fuelLevel = fuelLevel;
}

const gasStation = new GasStation('Lukoil',"./images/lukoil.png", 1000)

function Car(id, name, currentLevel, maxLevel, image) {
  this.id = id;
  this.name = name;
  this.currentLevel = currentLevel;
  this.maxLevel = maxLevel;
  this.image = image;
  this.refuelProcess = null;
}

const cars = [
  new Car(1,"Geely Tugella", 14, 54, "./images/geely.jpg"),
  new Car(2,"Audi A4 allroad 2.0 TFSI", 4, 58, "./images/Audi.jpg"),
  new Car(3,"BMW X5 M50d", 50, 83, "./images/bmw.jpg"),
  new Car(4,"Bugatti Veyron EB", 56, 100, "./images/bugatti.jpg"),
  new Car(5,"Land Rover Defender 110 V8", 7, 80, "./images/land-rover.jpg"),
  new Car(6,"Honda Accord 2.0", 1, 56, "./images/honda-accord.jpg"),
];
