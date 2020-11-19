json.listings do
  @listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :id, :title, :city, :capacity, :price
    end
  end
end