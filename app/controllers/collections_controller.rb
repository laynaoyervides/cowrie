class CollectionsController < ApplicationController
    before_action :find_collection, only: [:show, :update, :destroy]
    before_action :confirm_authentication  

  
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    # GET /collections
    def index
      @collections = Collection.all
      render json: @collections, status: :ok
    end
  
    # GET /collections/1
    def show
      render json: @collection, include: ['artworks'], status: :ok
    end
  
    # POST /collections
    def create
      collection = Collection.create!(collection_params)
      render json: collection, status: :created
    end
  
    # PATCH/PUT /collections/1
    def update
      @collection.update!(collection_params)
        render json: @collection, status: :accepted
    end
  
    # DELETE /collections/1
    def destroy
      @collection.destroy
      head :no_content
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def find_collection
        @collection = Collection.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def collection_params
        params.permit(:title, :description)
      end

      def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end
    
      def render_not_found(error)
        render json: {message: error.message}, status: :not_found
      end
  end