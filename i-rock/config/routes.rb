Rails.application.routes.draw do
  resources :achievements, only: [:index, :new, :create, :show, :edit]
  root to: 'welcome#index'
end
