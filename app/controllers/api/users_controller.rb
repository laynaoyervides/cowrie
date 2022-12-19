class Api::UsersController < ApplicationController
    skip_before_action :confirm_authentication, except: [:update]
   
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


    def update
        if current_user.update(update_user_params)
            render json: current_user, status: :ok
          else 
            render json: user.errors, status: :unprocessable_entity
          end
    end


     private
   
     def user_params
         params.permit(:username, :email, :password, :img_thumb, :image_url, :bio)
    end

    def update_user_params
        params.permit(:image_url, :bio, :img_thumb, :cloudinary_public_id)
      end

end
   
