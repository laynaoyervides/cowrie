Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
    
    Rails.application.routes.draw do

      resources :artworks
      resources :cowries
      resources :nfts
      resources :tutorials
      resources :collections
      resources :purchases
      resources :investments
      resources :users
      # Routing logic: fallback requests for React Router.
      post "/signup", to: "users#create"
      get "/me", to: "users#show"
      post "/login", to: "sessions#create"
      delete "/logout", to:"sessions#destroy"
      # Leave this here to help deploy your app later!
      #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
      get "/searchartworks", to: "artworks#search"
    end
  end


