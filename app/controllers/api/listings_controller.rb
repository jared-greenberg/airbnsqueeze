class Api::ListingsController < ApplicationController 

  CITIES = ["Ithaca, NY", "Boulder, CO", "Santa Cruz, CA"]
  
  def index 
    if location == ""
      listings = Listing.with_attached_photos.includes(:reviews).includes(:amenities).includes(:owner)
    elsif CITIES.include?(location)
      listings = Listing.with_attached_photos.where(city: location).includes(:reviews).includes(:amenities)
    else
      render json: {}
      return
    end

    if region != nil
      listings = listings.filter_by_region(params[:region])
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

  def region
    params[:region]
  end
end
  
