class TagsController < ApplicationController
  def index
    @tag_counts = Post.tag_counts_on(:tags)
    @tags = []
    tag_cloud Post.tag_counts, %w(css1 css2 css3) do |tag, css_class|
      @tags << [tag, css_class]
    end
    render json: @tags
  end

  def tag_cloud(tags, classes)
    return [] if tags.empty?

    max_count = tags.sort_by(&:count).last.count.to_f

    tags.each do |tag|
      index = ((tag.count / max_count).to_f * (classes.size - 1))
      yield tag, classes[index.nan? ? 0 : index.round]
    end
  end
end
