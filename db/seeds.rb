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


ithaca_descrip = "Cozy compact house that is perfect for a weekend get away. Close proximity to the stunning Ithaca Falls which is a must see!"
santacruz_descrip = "Step outside the tiny and experience Santa Cruz's guaranteed beautiful weather. Within driving distance of Natural Bridges State Beach and downtown shopping and entertainment."
boulder_descrip = "Enviromentally friendly tiny house with beautiful views of the Rockies. Love to Ski? Booking for the winter? Only 20 miles away from some of Boulder's most popular skiing resorts."


ithaca_1 = Listing.create({owner_id: ithaca_user_1.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.423619, longitude: -76.503692,
  title: "Zen House in Nature", description: ithaca_descrip, capacity: 2, price: 75.00 })    

ithaca_1.photos.attach(io: File.open("/Users/jared/Desktop/Ithaca/zen/zen_exterior.jpg"), filename: "zen_exterior.jpg")
ithaca_1.photos.attach(io: File.open("/Users/jared/Desktop/Ithaca/zen/zen_interior1.jpg"), filename: "zen_interior1.jpg")
ithaca_1.photos.attach(io: File.open("/Users/jared/Desktop/Ithaca/zen/zen_interior2.jpg"), filename: "zen_interior2.jpg")
ithaca_1.photos.attach(io: File.open("/Users/jared/Desktop/Ithaca/zen/zen_interior3.jpg"), filename: "zen_interior3.jpg")
ithaca_1.photos.attach(io: File.open("/Users/jared/Desktop/Ithaca/zen/zen_interior4.jpg"), filename: "zen_interior4.jpg")


# ithaca_2 = Listing.create({owner_id: ithaca_user_1.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.437349, longitude: -76.526914,
#   title: "Modern Tiny with Outdoor Deck", description: ithaca_descrip, capacity: 3, price: 95.00 })    

# ithaca_3 = Listing.create({owner_id: ithaca_user_2.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.434277, longitude: -76.517257,
#   title: "Newly Decorated Tiny in the Country", description: ithaca_descrip, capacity: 4, price: 110.00 })    

# ithaca_4 = Listing.create({owner_id: ithaca_user_3.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.435460, longitude: -76.485322,
#   title: "Squeaky Clean and Small", description: ithaca_descrip, capacity: 2, price: 79.00 })    

# ithaca_5 = Listing.create({owner_id: ithaca_user_3.id, address: Faker::Address.street_address, city: "Ithaca, NY", latitude: 42.461543, longitude: -76.500834,
#   title: "Log Cabin Tiny", description: ithaca_descrip, capacity: 4, price: 84.00 })    



# santacruz_1 = Listing.create({owner_id: santacruz_user_1.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.974533, longitude: -122.060862,
#   title: "Beautiful Recycled Wood Tiny", description: santacruz_descrip,
# capacity: 3, price: 120.00 })    

# santacruz_2 = Listing.create({owner_id: santacruz_user_2.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.985619, longitude: -122.047587,
#   title: "Little Beach Getaway", description: santacruz_descrip, capacity: 2, price: 123.00})    

# santacruz_3 = Listing.create({owner_id: santacruz_user_3.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.991061, longitude: -122.011446,
#   title: "Elegant Tiny with Dark Wood Exterior", description: santacruz_descrip, capacity: 2, price: 113.00 })    

# santacruz_4 = Listing.create({owner_id: santacruz_user_4.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.982625, longitude: -121.984095,
#   title: "Mini Cabin in the Woods", description: santacruz_descrip, capacity: 2, price: 107.00 })    

# santacruz_5 = Listing.create({owner_id: santacruz_user_5.id, address: Faker::Address.street_address, city: "Santa Cruz, CA", latitude: 36.971231, longitude: -122.027861,
#   title: "Family Fun with Unique Rock Climbing Wall", description: santacruz_descrip, capacity: 4, price: 111.00})    


# boulder_1 = Listing.create({owner_id: boulder_user_1.id, address: Faker::Address.street_address, city: "Boulder, CO", latitude: 40.018692, longitude: -105.285933,
#   title: "Tiny House with Beautiful Views", description: boulder_descrip, capacity: 3, price: 72.00 })    

# boulder_2 = Listing.create({owner_id: boulder_user_2.id, address: Faker::Address.street_address, city: "Boulder, CO", latitude: 40.010678, longitude: -105.268874,
#   title: "Tiny for 2 with Lofted Bedroom", description: boulder_descrip, capacity: 2, price: 98.00 })    

# boulder_3 = Listing.create({owner_id: boulder_user_3.id, address: Faker::Address.street_address, city: "Boulder, CO", latitude: 40.018866, longitude: -105.292325,
#   title: "Rustic and Tiny", description: boulder_descrip, capacity: 3, price: 89.00 })    

# boulder_4 = Listing.create({owner_id: boulder_user_4.id, address: Faker::Address.street_address, city: "Boulder, CO", latitude: 40.017554, longitude: -105.293731,
#   title: "A Very Literal Cottage", description: boulder_descrip, capacity: 4, price: 101.00 })    

# boulder_5 = Listing.create({owner_id: boulder_user_4.id, address: Faker::Address.street_address, city: "Boulder, CO", latitude: 40.027045, longitude: -105.271324,
#   title: "European Style Miniature House", description: boulder_descrip, capacity: 3, price: 74.00 })    




                # Amenity Icons
# ac = Amenity.create({name: "Air conditioning", icon_path: "fas fa-snowflake"})
# heat = Amenity.create({name: "Heating", icon_path: "fas fa-temperature-high"})
# wifi = Amenity.create({name: "Wifi", icon_path: "fas fa-wifi"})
# toilet = Amenity.create({name: "Composting toilet", icon_path: "fas fa-toilet"})
# solar = Amenity.create({name: "Solar power", icon_path: "fas fa-sun"})
# shower = Amenity.create({name: "Wet Room with shower", icon_path: "fas fa-shower"})
# kitchen = Amenity.create({name: "Small kitchen", icon_path: "fas fa-utensils"})
# pets = Amenity.create({name: "Pets allowed", icon_path: "fas fa-paw"})


# (1..Listing.all.count).each do |l_id|
#   num_amenities = rand(3..8);
#   chosen_amenities = (1..8).to_a.sample(num_amenities)
#   chosen_amenities.each { |a_id| TaggedAmenity.create({listing_id: l_id, amenity_id: a_id})}
# end

