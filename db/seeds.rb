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

sampleListing2 = Listing.create({owner_id: 1, address: "7 South Post Lane.", city: "West Orange, NJ", latitude:40.824190, longitude: -74.266393,
                title: "Random House", description: "In the middle of the woods", capacity: 3, price: 75.00 })


sampleListing3 = Listing.create({owner_id: 1, address: "144 Medford Ct..", city: "West Orange, NJ", latitude: 40.808208, longitude: -74.243557,
                title: "Dad's House", description: "Condo by Shadow Lake", capacity: 2, price: 45.00 })    

# Amenity Icons
ac = Amenity.create({name: "Air conditioning", icon_path: "fas fa-snowflake"})
heat = Amenity.create({name: "Heating", icon_path: "fas fa-temperature-high"})
wifi = Amenity.create({name: "Wifi", icon_path: "fas fa-wifi"})
toilet = Amenity.create({name: "Composting toilet", icon_path: "fas fa-toilet"})
solar = Amenity.create({name: "Solar power", icon_path: "fas fa-sun"})
shower = Amenity.create({name: "Outdoor shower", icon_path: "fas fa-shower"})
kitchen = Amenity.create({name: "Small kitchen", icon_path: "fas fa-utensils"})
pets = Amenity.create({name: "Pets allowed", icon_path: "fas fa-paw"})
