Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    
    resources :users, only: [:create, :show] do
      resources :bookings, only: [:index]
    end
    
    resource :session, only: [:create, :destroy]
    
    resources :listings, only: [:index, :show] do
      resources :bookings, only: [:create]
      resources :reviews, only: [:index]
    end

    resources :bookings, only: [:destroy]

    resources :reviews, only: [:create, :show, :destroy, :update]
  end
  
  root to: "static_pages#root"
end
