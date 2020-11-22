class Api::ListingsController < ApplicationController 
  
  def index 
    listings = region ? Listing.filter_by_region(region) : Listing.all

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

  def region
    params[:region]
  end

  def num_guests
    params[:numGuests]
  end
end
  
