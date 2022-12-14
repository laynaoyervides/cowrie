class UsersController < ApplicationController
    skip_before_action :confirm_authentication, only: :create
   
     # GET /users
     def index
       @users = User.all
       render json: @users, include: ['collections', 'collections.artworks', 'investments', 'purchases']
     end
   
  #get '/me'
    def show
      if current_user
          render json: current_user , include: ['collections', 'collections.artworks']
      else
          render json: { error: 'No active session'}, status: :unauthorized
      end
  end
   
   #post /signup
   def create
    user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            #above is us remembering who our user is
            render json: user, status: :ok
        else
            render json: {error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end


     private
   
     def user_params
         params.permit(:username, :email, :password)
    end

end
   
