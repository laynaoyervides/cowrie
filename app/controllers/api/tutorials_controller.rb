class Api::TutorialsController < ApplicationController
  before_action :find_tutorial, only: [:show, :update, :destroy]
  before_action :is_creator?, only: [:update, :destroy]
  
  before_action :confirm_authentication
  before_action :authorize_user, only: [:update, :destroy, :create]

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found 
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
    @tutorial.update!(tutorial_params)
    render json: @tutorial, status: :accepted
  end

  # DELETE /tutorial/1
  def destroy
    @tutorial.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
  def tutorial_params
      params.permit(:title, :topic, :video_url, :description)
  end

  def find_tutorial
    @tutorial = Tutorial.find(params[:id])
  end

   def authorize_user
     user_can_modify = current_user.admin?
      render json: { error: "You don't have permission to perform this action" }, status: :forbidden unless user_can_modify
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

  def is_creator?
      permitted = @tutorial.user_id === current_user.id 
      render json: {errors: {User: "did not create this course"}}, status: :forbidden unless permitted
   end

  def render_not_found(error)
    render json: {message: error.message}, status: :not_found
  end

  end

