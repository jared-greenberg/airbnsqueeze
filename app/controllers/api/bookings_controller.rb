class Api::BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)
    @booking.listing_id = params[:listing_id]
    if @booking.save
      render json: ['Booking was successful!'], status: 200
    else
      render json: @booking.errors.as_json, status: 422
    end
  end

  def index
    @bookings = Booking.where(renter_id: params[:user_id])
    booking_ids = @bookings.pluck(:listing_id)
    @listings = Listing.with_attached_photos.where('id IN (?)', booking_ids)
    render :index
  end

  def destroy
    booking = Booking.find_by(id: params[:id])
    booking.destroy
    head :no_content
  end

  private 
  
  def booking_params
    params.require(:booking).permit(:renter_id, :start_date, :end_date, :num_guests, :total_cost)
  end

end