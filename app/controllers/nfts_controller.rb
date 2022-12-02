class NftsController < ApplicationController
        before_action :find_nft, only: [:show, :update, :destroy]
    
        rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
        rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    
    
        def index
            render json: Nft.all, status: :ok
        end
    
        def show
            nft = Nft.create!(nft_params)
        end
    
        def create
            nft = Nft.create!(nft_params)
            render json: nft, status: :created
        end
    
        def update
            @nft.update!(nft_params)
            render json: @nft, status: :accepted
        end
    
        def destroy
            @nft.destroy
            head :no_content
        end
    private
        
        def nft_params
            params.permit()
        end
    
        def find_nft
        @nft = Nft.find(params[:id])
        end
    
        def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end
    
        def render_not_found(error)
        render json: {message: error.message}, status: :not_found
         end
    end
    

end