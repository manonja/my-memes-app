Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :new, :create, :show]
  resources :customised_memes, only: [:index, :create, :show, :update, :destroy]
end
