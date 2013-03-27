class HomeController < ApplicationController
  def index
    @new_post = Post.new
    @posts = Post.all
  end
end
