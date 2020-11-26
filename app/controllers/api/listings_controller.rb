class Api::ListingsController < ApplicationController 

  CITIES = ["Ithaca, NY", "Boulder, CO", "Santa Cruz, CA"]
  
  def index 
    # listings = region ? Listing.filter_by_region(region) : Listing.all
    # listings = (location && self.class.CITIES.include?(location)) ? Listing.where(city: location) : Listing.all
    
    if location == "" || !location
      listings = Listing.all.includes(:reviews).includes(:amenities)
    elsif CITIES.include?(location)
      listings = Listing.where(city: location).includes(:reviews).includes(:amenities)
    else
      render json: {}
      return
    end

    if num_guests
      listings = listings.filter_by_guests(num_guests)
    end
    @listings = listings.includes(:amenities).includes(:reviews)
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
  
