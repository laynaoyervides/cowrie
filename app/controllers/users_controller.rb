class UsersController < ApplicationController
    #skip_before_action :authorize, only :create
   
     # GET /users
     def index
       @users = User.all
   
       render json: @users
     end
   
     # GET /users/1
     def show
       render json: @current_user
     end
   
     # POST /users
     def create
       user = User.create!(user_params)
       session[:user_id] = user.id
       render json: user, status: :created
     end
   
     # PATCH/PUT /users/1
     def update
       if @user.update(user_params)
         render json: @user
       else
         render json: @user.errors, status: :unprocessable_entity
       end
     end
   
     # DELETE /users/1
     def destroy
       @user.destroy
     end
   
     private
   
     def user_params
         params.permit(:username, :email, :password)
       end
   end