Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'una', to: 'pages#una'
  get 'utero', to: 'pages#utero'
end
