class Api::ListingsController < ApplicationController 
  
  def index 
    @listings = Listing.all
    render :index
  end

  def show
    @listing = Listing.with_attached_photos.find_by(id: params[:id])
    render :show
  end

end
  
