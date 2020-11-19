class Api::ListingsController < ApplicationController 
  
  def index 
    @listings = Listing.all.includes(:amenities)
    # HOW CAN I FILTER?
    @amenities = Amenity.all
    render :index
  end

  def show
    @listing = Listing.find_by(id: params[:id])
    render :show
  end

end
  
