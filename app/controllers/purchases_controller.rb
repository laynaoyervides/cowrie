class PurchasesController < ApplicationController
    before_action :find_purchase, only: [:show, :update, :destroy]

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found


    def index
        render json: Purchase.all, include: ['nft'], status: :ok
    end

    def show
        purchase = Purchase.create!(purchase_params)
    end

    def create
        purchase = Purchase.create!(purchase_params)
        render json: purchase, status: :created
    end

    def update
        @purchase.update!(purchase_params)
        render json: @purchase, status: :accepted
    end

    def destroy
        @purchase.destroy
        head :no_content
    end
private
    
    def purchase_params
        params.permit(:price, :royalty_percentage, :image_thumbnail, :description)
    end

    def find_purchase
    @purchase = Purchase.find(params[:id])
    end



    def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found(error)
    render json: {message: error.message}, status: :not_found
     end
end
