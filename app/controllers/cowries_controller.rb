class CowriesController < ApplicationController
        before_action :find_cowry, only: [:show, :update, :destroy]
        before_action :confirm_authentication  

    
        rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
        rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    
    
        def index
            cowries = Cowry.all
            render json: cowries, status: :ok
        end
    
        def show
            render json: @cowry, status: :ok
        end
    
        def create
            cowry = Cowry.create!(cowry_params)
            render json: cowry, status: :created
        end
    
        def update
            @cowry.update!(cowry_params)
            render json: @cowry, status: :accepted
        end
    
        def destroy
            @cowry.destroy
            head :no_content
        end
    private
        
        def cowry_params
            params.permit(:cowry_volume)
        end
    
        def find_cowry
        @nft = Cowry.find(params[:id])
        end
    
        def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end
    
        def render_not_found(error)
        render json: {message: error.message}, status: :not_found
         end
    end
    

