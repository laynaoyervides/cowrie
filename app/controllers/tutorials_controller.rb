class TutorialsController < ApplicationController
 
    # GET /tutorials
    def index
        @tutorials = Tutorial.all
        render json: @tutorials
      end

    # GET /tutorials/1
    def show
        render json: @tutorial
      end

# POST /tutorials
    def create
        tutorial = Tutorial.create!(tutorial_params)
        render json: tutorial, status: accepted
    
       
    
    end
# PATCH/PUT /tutorials/1
  def update
    if @tutorial.update(tutorial_params)
      render json: @tutorial
    else
      render json: @tutorial.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tutorial/1
  def destroy
    @tutorial.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tutorial
      @user = Tutorial.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tutorial_params
      params.fetch(:tutorial, {})
    end
end
