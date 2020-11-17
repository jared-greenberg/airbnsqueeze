class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
      redirect_to api_user_url(@user)
    else
      render json: ['The email or password you entered is incorrect. Try again'],
        status: 422
    end
  end

  def destroy
    log_out!
    head :no_content
  end

end