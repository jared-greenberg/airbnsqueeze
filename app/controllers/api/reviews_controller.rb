class Api::ReviewsController < ApplicationController 
  def create
    @review = Review.new(review_params)
    @review.booking_id = params[:booking_id]
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    @review.destroy
    render :show
  end

  def update
    @review = Review.find_by(id: params[:review][:id])
     if @review.update(review_params)
      render :show
     else
      render json: @review.errors.full_messages, status: 422
    end
  end


  private
  
  def review_params
    params.require(:review).permit(:body, :rating, :author_id)
  end
end