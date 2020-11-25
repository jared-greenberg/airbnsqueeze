class Api::ReviewsController < ApplicationController 
  def create
    review = Review.new(review_params)
    review.booking_id = params[:booking_id]
    if review.save
      render json: ["Review was created successfully"], status: 200
    else
      render json: review.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end

  def destroy
    review = Review.find_by(id: params[:id])
    review.destroy
    head :no_content
  end

  def update
    review = Review.find_by(review.booking_id: params[:booking_id])
     if review.update(review_params)
      render json: ["Review was created successfully"], status: 200
     else
      render json: review.errors.full_messages, status: 422
    end
  end


  private
  
  def review_params
    params.require(:review).permit(:body, :rating, :user_id)
  end
end