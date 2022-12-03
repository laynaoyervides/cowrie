class InvestmentsController < ApplicationController
  before_action :confirm_authentication  
  before_action :find_investment, only: [:show, :update, :destroy]
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    # GET /investments
    def index
      @investments = Investment.all
      render json: @investments, status: :ok
    end
  
    # GET /investments/1
    def show
      render json: @investment, status: :ok
    end
  
    # POST /investments
    def create
      investment = Investment.create!(investment_params)
      render json: investment, status: :accepted
    end
  
    # PATCH/PUT /investments/1
    def update
      @investment.update!(investment_params)
        render json: @investment, status: :accepted
    end
  
    # DELETE /investments/1
    def destroy
      @investment.destroy
      head :no_content
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def find_investment
        @investment = Investment.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def investment_params
        params.permit(:amount, :description)
      end

      def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end
    
      def render_not_found(error)
        render json: {message: error.message}, status: :not_found
      end
  end