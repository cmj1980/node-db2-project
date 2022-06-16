// STRETCH
const cars = [{
    vin: '1234567891234',
    make: 'subaru',
    model: 'forrester',
    mileage: 25000,
    title: 'clean',
    transmission: 'automatic',
}, {
    vin: '2234567891534',
    make: 'honda',
    model: 'civic',
    mileage: 250000,
    title: 'salvage',
    
}, {
    vin: '3334567991234',
    make: 'BMW',
    model: 'M3',
    mileage: 5000,
    title: 'clean',
    transmission: 'manual',
}, ]

exports.seed = async function (knex) {
   await knex('cars').truncate()
   await knex('cars').insert(cars)
}