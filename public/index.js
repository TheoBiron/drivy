'use strict';

//list of cars
//useful for ALL exercises

function getPrice(cars, rentals){
	var i;
	var priceKm;
	var priceDay;
	var priceTotal;
	var date1;
	var date2;
	var date3;
	var insurance;
	var assistance;
	var drivy;
	var moneyBrother;
	var reduction;
	for (i=0; i<3; i++){
		date1 = new Date(rentals[i].pickupDate);
		date2 = new Date(rentals[i].returnDate);
		date3 = Math.abs(date2 - date1) / (1000*60*60*24) + 1;
		priceKm = cars[i].pricePerKm * rentals[i].distance;
		if (date3 == 1)
			priceDay = cars[i].pricePerDay * date3;
		else if (date3 > 1 && date3 <= 4)
			priceDay = cars[i].pricePerDay * date3 * 0.90;
		else if (date3 > 4 && date3 <= 10)
			priceDay = cars[i].pricePerDay * date3 * 0.70;
		else
			priceDay = cars[i].pricePerDay * date3 * 0.50;
		priceTotal = priceKm + priceDay;

		insurance = 0.5 * 0.3 * priceTotal;
		assistance = 1 * date3;
		drivy = insurance - assistance;
		moneyBrother = 0.7 * priceTotal;
		if (rentals[i].options.deductibleReduction){
			drivy += 4 * date3;
			priceTotal += 4 * date3;
		}
		document.write('Total price : ' + priceTotal + ' for ' + date3 + ' days and ' + rentals[i].distance + ' km</br>' +
						'Insurance takes ' + insurance + ', assistance takes ' + assistance + ' and drivy takes ' + drivy + '</br>' +
						'Brother gets ' + moneyBrother + '</br></br>');
	}
}

var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

getPrice(cars, rentals);
//console.log(cars);
console.log(rentals);
//console.log(actors);
//console.log(rentalModifications);
