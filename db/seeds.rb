# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create({email: 'demo@gmail.com', first_name: 'Demo User', last_name: 'Smith', birthday: '1995-01-01', password: 'abcd1234'})

ithaca_user_1 = User.create({email: Faker::Internet.safe_email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
ithaca_user_2 = User.create({email: Faker::Internet.safe_email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
ithaca_user_3 = User.create({email: Faker::Internet.safe_email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })

santacruz_user_1 = User.create({email: Faker::Internet.safe_email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
santacruz_user_2 = User.create({email: Faker::Internet.safe_email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
santacruz_user_3 = User.create({email: Faker::Internet.safe_email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
santacruz_user_4 = User.create({email: Faker::Internet.safe_email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
santacruz_user_5 = User.create({email: Faker::Internet.safe_email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })

boulder_user_1 = User.create({email: Faker::Internet.safe_email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
boulder_user_2 = User.create({email: Faker::Internet.safe_email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
boulder_user_3 = User.create({email: Faker::Internet.safe_email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })
boulder_user_4 = User.create({email: Faker::Internet.safe_email, first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , birthday: Faker::Date.birthday(min_age: 18, max_age: 65) , password: Faker::Internet.password(min_length: 8) })




ithaca_1 = Listing.create({owner_id: ithaca_user_1.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.423619, longitude: -76.503692,
  title: "Zen House in Nature", description: "Cozy compact house that is perfect for a weekend get away. Close proximity to the stunning Ithaca Falls which is a must see.", 
  capacity: 2, price: 75.00 })    

ithaca_2 = Listing.create({owner_id: ithaca_user_1.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.437349, longitude: -76.526914,
  title: "Modern Tiny with Outdoor Deck", description: "Cozy compact house that is perfect for a weekend get away. Close proximity to the stunning Ithaca Falls which is a must see. ", 
  capacity: 3, price: 95.00 })    

ithaca_3 = Listing.create({owner_id: ithaca_user_2.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.434277, longitude: -76.517257,
  title: "Newly Decorated Tiny in the Country", description: "Cozy compact house that is perfect for a weekend get away. Close proximity to the stunning Ithaca Falls which is a must see. ", 
  capacity: 4, price: 110.00 })    

ithaca_4 = Listing.create({owner_id: ithaca_user_3.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.435460, longitude: -76.485322,
  title: "Squeaky Clean and Small", description: "Cozy compact house that is perfect for a weekend get away. Close proximity to the stunning Ithaca Falls which is a must see. ", 
  capacity: 2, price: 79.00 })    

ithaca_5 = Listing.create({owner_id: ithaca_user_3.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.461543, longitude: -76.500834,
  title: "Log Cabin Tiny", description: "Cozy compact house that is perfect for a weekend get away. Close proximity to the stunning Ithaca Falls which is a must see. ", 
  capacity: 4, price: 84.00 })    



santacruz_1 = Listing.create({owner_id: santacruz_user_1.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.974533, longitude: -122.060862,
  title: "Beautiful Recycled Wood Tiny", description: "Step outside the tiny and experience Santa Cruz's guaranteed beautiful weather. Within driving distance of Natural Bridges State Beach and downtown shopping and entertainment. ",
   capacity: 3, price: 120.00 })    

santacruz_2 = Listing.create({owner_id: santacruz_user_2.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.985619, longitude: -122.047587,
  title: "Little Beach Getaway", description: "Step outside the tiny and experience Santa Cruz's guaranteed beautiful weather. Within driving distance of Natural Bridges State Beach and downtown shopping and entertainment.", 
  capacity: 2, price: 123.00})    

santacruz_3 = Listing.create({owner_id: santacruz_user_3.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.991061, longitude: -122.011446,
  title: "Elegant Tiny with Dark Wood Exterior", description: "Step outside the tiny and experience Santa Cruz's guaranteed beautiful weather. Within driving distance of Natural Bridges State Beach and downtown shopping and entertainment.", 
  capacity: 4, price: 141.00 })    

santacruz_4 = Listing.create({owner_id: santacruz_user_4.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.982625, longitude: -121.984095,
  title: "Mini Cabin in the Woods", description: "Step outside the tiny and experience Santa Cruz's guaranteed beautiful weather. Within driving distance of Natural Bridges State Beach and downtown shopping and entertainment.", 
  capacity: 2, price: 107.00 })    

santacruz_5 = Listing.create({owner_id: santacruz_user_5.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.971231, longitude: -122.027861,
  title: "Family Fun with Unique Rock Climbing Wall", description: "Step outside the tiny and experience Santa Cruz's guaranteed beautiful weather. Within driving distance of Natural Bridges State Beach and downtown shopping and entertainment.", 
  capacity: 4, price: 111.00})    


boulder_1 = Listing.create({owner_id: boulder_user_1.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.974533, longitude: -122.060862,
  title: "Tiny House with Beautiful Views", description: "Enviromentally friendly tiny house with beautiful views of the Rockies. Love to Ski? Booking for the winter? Only 20 miles away from some of Boulder's most popular skiing resorts.",
   capacity: 3, price: 72.00 })    

boulder_2 = Listing.create({owner_id: boulder_user_2.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.985619, longitude: -122.047587,
  title: "Tiny for 2 with Lofted Bedroom", description: "Enviromentally friendly tiny house with beautiful views of the Rockies. Love to Ski? Booking for the winter? Only 20 miles away from some of Boulder's most popular skiing resorts.", 
  capacity: 2, price: 98.00 })    

boulder_3 = Listing.create({owner_id: boulder_user_3.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.991061, longitude: -122.011446,
  title: "Rustic and Tiny", description: "Enviromentally friendly tiny house with beautiful views of the Rockies. Love to Ski? Booking for the winter? Only 20 miles away from some of Boulder's most popular skiing resorts.", 
  capacity: 3, price: 89.00 })    

boulder_4 = Listing.create({owner_id: boulder_user_4.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.982625, longitude: -121.984095,
  title: "A Very Literal Cottage", description: "Enviromentally friendly tiny house with beautiful views of the Rockies. Love to Ski? Booking for the winter? Only 20 miles away from some of Boulder's most popular skiing resorts.", 
  capacity: 4, price: 101.00 })    

boulder_5 = Listing.create({owner_id: boulder_user_4.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.971231, longitude: -122.027861,
  title: "European Style Miniature House", description: "Enviromentally friendly tiny house with beautiful views of the Rockies. Love to Ski? Booking for the winter? Only 20 miles away from some of Boulder's most popular skiing resorts.", 
  capacity: 3, price: 74.00 })    




                # Amenity Icons
ac = Amenity.create({name: "Air conditioning", icon_path: "fas fa-snowflake"})
heat = Amenity.create({name: "Heating", icon_path: "fas fa-temperature-high"})
wifi = Amenity.create({name: "Wifi", icon_path: "fas fa-wifi"})
toilet = Amenity.create({name: "Composting toilet", icon_path: "fas fa-toilet"})
solar = Amenity.create({name: "Solar power", icon_path: "fas fa-sun"})
shower = Amenity.create({name: "Wet Room with shower", icon_path: "fas fa-shower"})
kitchen = Amenity.create({name: "Small kitchen", icon_path: "fas fa-utensils"})
pets = Amenity.create({name: "Pets allowed", icon_path: "fas fa-paw"})

ListingAmenity.create({listing_id: 2, amenity_id: 4})
ListingAmenity.create({listing_id: 2, amenity_id: 5})
ListingAmenity.create({listing_id: 2, amenity_id: 6})
ListingAmenity.create({listing_id: 2, amenity_id: 7})
ListingAmenity.create({listing_id: 2, amenity_id: 8})
ListingAmenity.create({listing_id: 3, amenity_id: 1})
ListingAmenity.create({listing_id: 3, amenity_id: 4})
ListingAmenity.create({listing_id: 3, amenity_id: 5})
ListingAmenity.create({listing_id: 3, amenity_id: 7})

(1..Listing.all.count).each do |l_id|
  num_amenities = rand(3..8);
  chosen_amenities = (1..9).to_a.sample(num_amenities)
  chosen_amenities.each { |a_id| ListingAmenity.create({listing_id: l_id, amenity_id: a_id})}
end