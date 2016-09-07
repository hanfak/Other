Rails.application.routes.draw do
  resources :achievements, only: [:index, :new, :create, :show]
  root to: 'welcome#index'
end
