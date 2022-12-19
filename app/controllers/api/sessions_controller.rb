class Api::SessionsController < ApplicationController
    skip_before_action :confirm_authentication
    
    def create
      
      user = User.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: {errors: ["Invalid username or password"]}, status: :unauthorized
    end
  end
  
  def destroy
    session.delete(:user_id)
  end
  
  end