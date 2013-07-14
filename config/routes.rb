Startupality::Application.routes.draw do
  root :to => 'angular#angular'
  match 'angular/angular' => 'angular#angular'

  match 'tags/:tag', to: 'angular#angular', as: :tag
  match 'tags', to: 'tags#index'

  resources :posts
end
