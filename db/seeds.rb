# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create({email: 'demo@gmail.com', first_name: 'Demo User', last_name: 'Smith', birthday: '1995-01-01', password: 'abcd1234'})

sampleListing = Listing.create({owner_id: 1, address: "17 Cadmus Ct.", city: "West Orange, NJ", latitude:40.818495, longitude: -74.271448, 
                title: "My Home", description: "Tiny house by a lake", capacity: 2, price: 50.00 })