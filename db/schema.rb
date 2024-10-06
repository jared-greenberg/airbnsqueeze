# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_10_06_181532) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", precision: nil, null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", precision: nil, null: false
    t.string "service_name", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "amenities", force: :cascade do |t|
    t.string "name", null: false
    t.string "icon_path", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "bookings", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.integer "renter_id", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.integer "num_guests", null: false
    t.float "total_cost", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["listing_id"], name: "index_bookings_on_listing_id"
    t.index ["renter_id"], name: "index_bookings_on_renter_id"
  end

  create_table "listings", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.string "title", null: false
    t.string "description", null: false
    t.integer "capacity", null: false
    t.float "price", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["owner_id"], name: "index_listings_on_owner_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "booking_id", null: false
    t.integer "author_id", null: false
    t.text "body", null: false
    t.integer "rating", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["booking_id"], name: "index_reviews_on_booking_id", unique: true
  end

  create_table "tagged_amenities", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.integer "amenity_id", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["amenity_id"], name: "index_tagged_amenities_on_amenity_id"
    t.index ["listing_id", "amenity_id"], name: "index_tagged_amenities_on_listing_id_and_amenity_id", unique: true
    t.index ["listing_id"], name: "index_tagged_amenities_on_listing_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.date "birthday", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end
