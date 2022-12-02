class ApplicationController < ActionController::API
    include ActionController::Cookies
        
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    before_action :confirm_authentication

    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
        #memoization
      end
    
    private

        def logged_in?
            !!current_user
        end

        def confirm_authentication
            render json: { error: "You must be logged in to do that." }, status: :unauthorized unless logged_in?
        end

        def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end

        def render_not_found(error)
            render json: {message: error.message}, status: :not_found

end
