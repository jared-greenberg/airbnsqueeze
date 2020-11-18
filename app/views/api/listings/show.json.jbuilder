json.set! @listing.id do
  json.extract! @listing :id, :description, :address, :city
  json.photoUrl url_for(@listing.photo)
end