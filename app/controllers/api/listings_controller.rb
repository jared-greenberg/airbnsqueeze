class Api::ListingsController < ApplicationController 
  
  def index 
    # listings = region ? Listing.filter_by_region(region) : Listing.all
    listings = location ? Listing.where(city: location) : Listing.all

    if num_guests
      listings = listings.filter_by_guests(num_guests)
    end
    @listings = listings.includes(:amenities)
    @amenities = Amenity.all
    render :index
  end

  def show
    @listing = Listing.find_by(id: params[:id])
    render :show
  end


  private 

  def location
    params[:location]
  end

  def num_guests
    params[:numGuests]
  end
end
  
