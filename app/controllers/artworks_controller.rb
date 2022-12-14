class ArtworksController < ApplicationController
  before_action :find_artwork, only: [:show, :update, :destroy]
  before_action :confirm_authentication  

  
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    # GET /collections


        def index
          artworks = Artwork.all
          render json: artworks, status: :ok
        end
      
        def search
          @artworks = Artwork.where('keywords LIKE ?', '%' + params[:q]+ '%')
          render json: @artworks, status: :ok
        end

        def show
          render json: @artwork, status: :ok
        end

        def create
          artwork = Artwork.create!(artwork_params)
          render json: artwork, status: :created
    
        end
        
        
        def update
          @artwork.update!(artwork_params)
          render json: @artwork, status: :accepted
        end
      
          def destroy
              @artwork.destroy
              head :no_content
          end
        private
        def find_artwork
          @artwork = Artwork.find(params[:id])
        end

        def artwork_params
        params.permit(:id, :title, :date_created, :list_price, :owner, :img_url, :for_sale, :keywords)
        end

        def render_unprocessable_entity_response(invalid)
          render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
          end
      
        def render_not_found(error)
          render json: {message: error.message}, status: :not_found
        end
end