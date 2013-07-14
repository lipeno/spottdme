class TagsController < ApplicationController
  def index
    @tags = Post.tag_counts_on(:tags)
    render json: @tags
  end
end
