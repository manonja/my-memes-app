Rails.application.routes.draw do
  get 'customised_memes/index'
  get 'customised_memes/new'
  get 'customised_memes/show'
  get 'customised_memes/create'
  get 'customised_memes/destroy'
  get 'users/index'
  get 'users/new'
  get 'users/show'
  get 'users/create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
end
