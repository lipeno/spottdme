class Post < ActiveRecord::Base
  acts_as_taggable
  attr_accessible :text, :tag_list

  before_create :extract_tags_from_post

  def as_json(options = {})
    {
      :id => self.id,
      :text => self.text,
      :created_at => self.created_at,
      :updated_at => self.updated_at,
      :tags => self.tag_list
    }
  end

  private
    def extract_tags_from_post
      tags = []
      post_text = String.new(self.text)
      post_text.split.each do |word|
        tags << word.match(/[[:word:]-]+/).to_s if word.starts_with?"#"
      end
      self.tag_list = tags
    end
end
