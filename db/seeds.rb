# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

demoUser = User.create({email: 'demo@gmail.com', first_name: 'Demo User', last_name: 'Smith', birthday: '1995-01-01', password: 'abcd1234'})

ithaca_user_1 = User.create({email: Faker::Internet.email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
ithaca_user_2 = User.create({email: Faker::Internet.email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
ithaca_user_3 = User.create({email: Faker::Internet.email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })

santacruz_user_1 = User.create({email: Faker::Internet.email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
santacruz_user_2 = User.create({email: Faker::Internet.email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
santacruz_user_3 = User.create({email: Faker::Internet.email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
santacruz_user_4 = User.create({email: Faker::Internet.email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
santacruz_user_5 = User.create({email: Faker::Internet.email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
santacruz_user_6 = User.create({email: Faker::Internet.email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })

boulder_user_1 = User.create({email: Faker::Internet.email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
boulder_user_2 = User.create({email: Faker::Internet.email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
boulder_user_3 = User.create({email: Faker::Internet.email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
boulder_user_4 = User.create({email: Faker::Internet.email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })


ithaca_descrip = "Cozy compact house that is perfect for a weekend get away. Close proximity to the stunning Ithaca Falls which is a must see!"
santacruz_descrip = "Step outside the tiny and experience Santa Cruz's guaranteed beautiful weather. Within driving distance of Natural Bridges State Beach and downtown shopping and entertainment."
boulder_descrip = "Enviromentally friendly tiny house with beautiful views of the Rockies. Love to Ski? Booking for the winter? Only 20 miles away from some of Boulder's most popular skiing resorts."


ithaca_1 = Listing.create({owner_id: ithaca_user_1.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.423618, longitude: -76.503692,
  title: "Zen House in Nature", description: ithaca_descrip, capacity: 2, price: 75.00 })    



ithaca_1.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/zen/zen_exterior.jpg"), filename: "zen_exterior.jpg")
ithaca_1.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/zen/zen_interior1.jpg"), filename: "zen_interior1.jpg")
ithaca_1.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/zen/zen_interior2.jpg"), filename: "zen_interior2.jpg")
ithaca_1.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/zen/zen_interior3.jpg"), filename: "zen_interior3.jpg")
ithaca_1.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/zen/zen_interior4.jpg"), filename: "zen_interior4.jpg")


ithaca_2 = Listing.create({owner_id: ithaca_user_1.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.437349, longitude: -76.526914,
  title: "Modern Tiny with Outdoor Deck", description: ithaca_descrip, capacity: 3, price: 95.00 })   
  
ithaca_2.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/modern/modern_exterior.jpg"), filename: "modern_exterior.jpg")
ithaca_2.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/modern/modern_interior1.jpg"), filename: "modern_interior1.jpg")
ithaca_2.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/modern/modern_interior2.jpg"), filename: "modern_interior2.jpg")
ithaca_2.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/modern/modern_interior3.jpg"), filename: "modern_interior3.jpg")
ithaca_2.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/modern/modern_interior4.jpg"), filename: "modern_interior4.jpg")

ithaca_3 = Listing.create({owner_id: ithaca_user_2.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.434277, longitude: -76.517256,
  title: "Newly Decorated Tiny in the Country", description: ithaca_descrip, capacity: 4, price: 110.00 })   
  
ithaca_3.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/country/country_exterior.jpg"), filename: "country_exterior.jpg")
ithaca_3.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/country/country_interior1.jpg"), filename: "country_interior1.jpg")
ithaca_3.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/country/country_interior2.jpg"), filename: "country_interior2.jpg")
ithaca_3.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/country/country_interior3.jpg"), filename: "country_interior3.jpg")
ithaca_3.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/country/country_interior4.jpg"), filename: "country_interior4.jpg")


ithaca_4 = Listing.create({owner_id: ithaca_user_3.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.435460, longitude: -76.485321,
  title: "Squeaky Clean and Small", description: ithaca_descrip, capacity: 2, price: 79.00 })   
  
ithaca_4.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/clean/clean_exterior.jpg"), filename: "clean_exterior.jpg")
ithaca_4.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/clean/clean_interior1.jpg"), filename: "clean_interior1.jpg")
ithaca_4.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/clean/clean_interior2.jpg"), filename: "clean_interior2.jpg")
ithaca_4.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/clean/clean_interior3.jpg"), filename: "clean_interior3.jpg")
ithaca_4.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/clean/clean_interior4.jpg"), filename: "clean_interior4.jpg")


ithaca_5 = Listing.create({owner_id: ithaca_user_3.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.461543, longitude: -76.500834,
  title: "Log Cabin Tiny", description: ithaca_descrip, capacity: 4, price: 84.00 })    

ithaca_5.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/rustic/rustic_exterior.jpg"), filename: "rustic_exterior.jpg")
ithaca_5.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/rustic/rustic_interior1.jpg"), filename: "rustic_interior1.jpg")
ithaca_5.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/rustic/rustic_interior2.jpg"), filename: "rustic_interior2.jpg")
ithaca_5.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/rustic/rustic_interior3.jpg"), filename: "rustic_interior3.jpg")
ithaca_5.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/rustic/rustic_interior4.jpg"), filename: "rustic_interior4.jpg")

ithaca_6 = Listing.create({owner_id: ithaca_user_3.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.432121, longitude: -76.487137,
  title: "Bright Tiny in the Woods", description: ithaca_descrip, capacity: 2, price: 79.00 })    

ithaca_6.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/brightwoods/brightwoods_exterior.jpg"), filename: "brightwoods_exterior.jpg")
ithaca_6.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/brightwoods/brightwoods_interior1.jpg"), filename: "brightwoods_interior1.jpg")
ithaca_6.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/brightwoods/brightwoods_interior2.jpg"), filename: "brightwoods_interior2.jpg")
ithaca_6.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/brightwoods/brightwoods_interior3.jpg"), filename: "brightwoods_interior3.jpg")
ithaca_6.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Ithaca/brightwoods/brightwoods_interior4.jpg"), filename: "brightwoods_interior4.jpg")


santacruz_1 = Listing.create({owner_id: santacruz_user_1.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.974533, longitude: -122.060862,
  title: "Beautiful Recycled Wood Tiny", description: santacruz_descrip, capacity: 3, price: 120.00 })    

santacruz_1.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/recwood/recwood_exterior.jpg"), filename: "recwood_exterior.jpg")
santacruz_1.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/recwood/recwood_interior1.jpg"), filename: "recwood_interior1.jpg")
santacruz_1.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/recwood/recwood_interior2.jpg"), filename: "recwood_interior2.jpg")
santacruz_1.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/recwood/recwood_interior3.jpg"), filename: "recwood_interior3.jpg")
santacruz_1.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/recwood/recwood_interior4.jpg"), filename: "recwood_interior4.jpg")


santacruz_2 = Listing.create({owner_id: santacruz_user_2.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.985619, longitude: -122.047587,
  title: "Little Beach Getaway", description: santacruz_descrip, capacity: 2, price: 123.00})    

santacruz_2.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/tropical/tropical_exterior.jpg"), filename: "tropical_exterior.jpg")
santacruz_2.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/tropical/tropical_interior1.jpg"), filename: "tropical_interior1.jpg")
santacruz_2.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/tropical/tropical_interior2.jpg"), filename: "tropical_interior2.jpg")
santacruz_2.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/tropical/tropical_interior3.jpg"), filename: "tropical_interior3.jpg")
santacruz_2.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/tropical/tropical_interior4.jpg"), filename: "tropical_interior4.jpg")

santacruz_3 = Listing.create({owner_id: santacruz_user_3.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.991061, longitude: -122.011446,
  title: "Elegant Tiny with Dark Wood Exterior", description: santacruz_descrip, capacity: 2, price: 113.00 })    

santacruz_3.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/darkwood/darkwood_exterior.jpg"), filename: "darkwood_exterior.jpg")
santacruz_3.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/darkwood/darkwood_interior1.jpg"), filename: "darkwood_interior1.jpg")
santacruz_3.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/darkwood/darkwood_interior2.jpg"), filename: "darkwood_interior2.jpg")
santacruz_3.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/darkwood/darkwood_interior3.jpg"), filename: "darkwood_interior3.jpg")
santacruz_3.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/darkwood/darkwood_interior4.jpg"), filename: "darkwood_interior4.jpg")

santacruz_4 = Listing.create({owner_id: santacruz_user_4.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.982625, longitude: -121.984095,
  title: "Mini Cabin in the Woods", description: santacruz_descrip, capacity: 2, price: 107.00 })    

santacruz_4.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/cabin/cabin_exterior.jpg"), filename: "cabin_exterior.jpg")
santacruz_4.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/cabin/cabin_interior1.jpg"), filename: "cabin_interior1.jpg")
santacruz_4.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/cabin/cabin_interior2.jpg"), filename: "cabin_interior2.jpg")
santacruz_4.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/cabin/cabin_interior3.jpg"), filename: "cabin_interior3.jpg")
santacruz_4.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/cabin/cabin_interior4.jpg"), filename: "cabin_interior4.jpg")
 
santacruz_5 = Listing.create({owner_id: santacruz_user_5.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.971231, longitude: -122.027861,
  title: "Family Fun with Unique Rock Climbing Wall", description: santacruz_descrip, capacity: 4, price: 111.00})    

santacruz_5.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/family/family_exterior.jpg"), filename: "family_exterior.jpg")
santacruz_5.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/family/family_interior1.jpg"), filename: "family_interior1.jpg")
santacruz_5.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/family/family_interior2.jpg"), filename: "family_interior2.jpg")
santacruz_5.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/family/family_interior3.jpg"), filename: "family_interior3.jpg")
santacruz_5.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/family/family_interior4.jpg"), filename: "family_interior4.jpg")

santacruz_6 = Listing.create({owner_id: santacruz_user_6.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.953182, longitude: -122.038268,
  title: "Parked on the Beach", description: santacruz_descrip, capacity: 5, price: 165.00})    

santacruz_6.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/beachfront/beachfront_exterior.jpg"), filename: "beachfront_exterior.jpg")
santacruz_6.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/beachfront/beachfront_interior1.jpg"), filename: "beachfront_interior1.jpg")
santacruz_6.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/beachfront/beachfront_interior2.jpg"), filename: "beachfront_interior2.jpg")
santacruz_6.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/beachfront/beachfront_interior3.jpg"), filename: "beachfront_interior3.jpg")
santacruz_6.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/beachfront/beachfront_interior4.jpg"), filename: "beachfront_interior4.jpg")


santacruz_7 = Listing.create({owner_id: santacruz_user_6.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.987558, longitude: -122.020894,
  title: "Movie Themed with a Theater", description: santacruz_descrip, capacity: 4, price: 123.00})    

santacruz_7.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/theater/theater_exterior.jpg"), filename: "theater_exterior.jpg")
santacruz_7.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/theater/theater_interior1.jpg"), filename: "theater_interior1.jpg")
santacruz_7.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/theater/theater_interior2.jpg"), filename: "theater_interior2.jpg")
santacruz_7.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/theater/theater_interior3.jpg"), filename: "theater_interior3.jpg")
santacruz_7.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/SantaCruz/theater/theater_interior4.jpg"), filename: "theater_interior4.jpg")


boulder_1 = Listing.create({owner_id: boulder_user_1.id, address: Faker::Address.street_address, city: "Boulder, CO", latitude: 40.018692, longitude: -105.285933,
  title: "Tiny House with Beautiful Views", description: boulder_descrip, capacity: 3, price: 72.00 })    

boulder_1.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/circle/circle_exterior.jpg"), filename: "circle_exterior.jpg")
boulder_1.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/circle/circle_interior1.jpg"), filename: "circle_interior1.jpg")
boulder_1.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/circle/circle_interior2.jpg"), filename: "circle_interior2.jpg")
boulder_1.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/circle/circle_interior3.jpg"), filename: "circle_interior3.jpg")
boulder_1.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/circle/circle_interior4.jpg"), filename: "circle_interior4.jpg")


boulder_2 = Listing.create({owner_id: boulder_user_2.id, address: Faker::Address.street_address, city: "Boulder, CO", latitude: 40.010678, longitude: -105.268874,
  title: "Tiny for 2 with Lofted Bedroom", description: boulder_descrip, capacity: 2, price: 98.00 })    

boulder_2.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/angular/angular_exterior.jpg"), filename: "angular_exterior.jpg")
boulder_2.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/angular/angular_interior1.jpg"), filename: "angular_interior1.jpg")
boulder_2.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/angular/angular_interior2.jpg"), filename: "angular_interior2.jpg")
boulder_2.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/angular/angular_interior3.jpg"), filename: "angular_interior3.jpg")
boulder_2.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/angular/angular_interior4.jpg"), filename: "angular_interior4.jpg")

boulder_3 = Listing.create({owner_id: boulder_user_3.id, address: Faker::Address.street_address, city: "Boulder, CO", latitude: 40.024966, longitude: -105.292325,
  title: "Rustic and Tiny", description: boulder_descrip, capacity: 3, price: 89.00 })   

boulder_3.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/antler/antler_exterior.jpg"), filename: "antler_exterior.jpg")
boulder_3.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/antler/antler_interior1.jpg"), filename: "antler_interior1.jpg")
boulder_3.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/antler/antler_interior2.jpg"), filename: "antler_interior2.jpg")
boulder_3.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/antler/antler_interior3.jpg"), filename: "antler_interior3.jpg")
boulder_3.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/antler/antler_interior4.jpg"), filename: "antler_interior4.jpg")

boulder_4 = Listing.create({owner_id: boulder_user_4.id, address: Faker::Address.street_address, city: "Boulder, CO", latitude: 40.017554, longitude: -105.293731,
  title: "A Very Literal Cottage", description: boulder_descrip, capacity: 4, price: 101.00 })    

boulder_4.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/cottage/cottage_exterior.jpg"), filename: "cottage_exterior.jpg")
boulder_4.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/cottage/cottage_interior1.jpg"), filename: "cottage_interior1.jpg")
boulder_4.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/cottage/cottage_interior2.jpg"), filename: "cottage_interior2.jpg")
boulder_4.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/cottage/cottage_interior3.jpg"), filename: "cottage_interior3.jpg")
boulder_4.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/cottage/cottage_interior4.jpg"), filename: "cottage_interior4.jpg")

boulder_5 = Listing.create({owner_id: boulder_user_4.id, address: Faker::Address.street_address, city: "Boulder, CO", latitude: 40.027045, longitude: -105.271324,
  title: "European Style Miniature House", description: boulder_descrip, capacity: 3, price: 74.00 })    

boulder_5.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/european/european_exterior.jpg"), filename: "european_exterior.jpg")
boulder_5.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/european/european_interior1.jpg"), filename: "european_interior1.jpg")
boulder_5.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/european/european_interior2.jpg"), filename: "european_interior2.jpg")
boulder_5.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/european/european_interior3.jpg"), filename: "european_interior3.jpg")
boulder_5.photos.attach(io: URI.open("https://s3.amazonaws.com/airbnsqueeze-seed-photos/Boulder/european/european_interior4.jpg"), filename: "european_interior4.jpg")


ac = Amenity.create({name: "Air conditioning", icon_path: "fas fa-snowflake"})
heat = Amenity.create({name: "Heating", icon_path: "fas fa-temperature-high"})
wifi = Amenity.create({name: "Wifi", icon_path: "fas fa-wifi"})
toilet = Amenity.create({name: "Composting toilet", icon_path: "fas fa-toilet"})
solar = Amenity.create({name: "Solar power", icon_path: "fas fa-sun"})
shower = Amenity.create({name: "Wet Room with shower", icon_path: "fas fa-shower"})
kitchen = Amenity.create({name: "Small kitchen", icon_path: "fas fa-utensils"})
pets = Amenity.create({name: "Pets allowed", icon_path: "fas fa-paw"})



# ratings = [2, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5]
review_combos = [
  ["Very clean upon arrival. Host was easy to communicate with.", 5],
  ["Booking was cancelled less than a week before the reservation.", 2],
  ["We will definitely stay here again. Would highly recommend!", 5],
  ["The house was not as immaculate as it was in the photos, but there are so many amazing things to do in the area.", 4],
  ["We had some minor problems with the hot water, but the host came to fix it themselves.", 3],
  ["Beautiful house! I recommend keeping the windows open when cooking.", 4],
  ["It was so cute and fun. I am honestly thinking about downsizing to a tiny of my own.", 5],
  ["We were surprised with how much we loved living small on our vacation.", 5],
  ["What a unique place!", 5],
  ["You must book this place.", 5],
  ["Everything in the house is brand new. We were spoiled.", 5],
  ["Way better than staying in a hotel.", 5],
  ["Not our typical vacation, but it wasn't bad.", 4],
  ["An interesting and very pleasant experience.", 4],
  ["Fantastic!", 5],
  ["Host was super helpful.", 4],
  ["Checking in was so painless and easy.", 5],
  ["The house was parked in the most beautiful location.", 5],
  ["Cute and charming!", 4]
]

Listing.all.each do |listing|
  num_amenities = rand(3..8);
  chosen_amenities = [*1..8].sample(num_amenities)
  chosen_amenities.each { |a_id| TaggedAmenity.create({listing_id: listing.id, amenity_id: a_id})}

  num_bookings = rand(0..6)
  booking_reviews = review_combos.sample(num_bookings)
  num_bookings.times do |i|
    renter = [*2...listing.owner_id, *(listing.owner_id+1)...User.count].sample
    start = Faker::Date.between(from: '2016-01-01', to: '2020-11-27')
   
    b = Booking.create!({renter_id: renter, listing_id: listing.id, start_date: start, end_date: (start + 2), num_guests: listing.capacity, total_cost: (2 * listing.price * 1.12)})
    
    review, rating = booking_reviews[i]
    Review.create!({author_id: renter, booking_id: b.id, rating: rating, body: review, created_at: b.end_date, updated_at: b.end_date})
    
  end
  
end

# Past bookings for demo user
6.times do
  start = Faker::Date.between(from: '2016-01-01', to: '2020-11-27')
  b = Booking.create!(renter_id: 1, listing_id: rand(1..Listing.count), start_date: start, end_date: start + 3, num_guests: 2, total_cost: 300 )
  if rand(3) === 1
      review, rating = review_combos.sample
      Review.create!({author_id: 1, booking_id: b.id, rating: rating, body: review, created_at: b.end_date, updated_at: b.end_date})
  end
end


