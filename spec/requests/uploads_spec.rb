require 'rails_helper'

RSpec.describe "Uploads", type: :request do
  describe "GET /prepare" do
    it "returns http success" do
      get "/uploads/prepare"
      expect(response).to have_http_status(:success)
    end
  end

end
