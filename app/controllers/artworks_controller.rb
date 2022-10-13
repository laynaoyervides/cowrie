class ArtworksController < ApplicationController



        def index
          artworks = Artwork.all
          render json: artworks, include: :collection
        end
      
    
end