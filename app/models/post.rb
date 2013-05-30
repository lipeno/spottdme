class Post < ActiveRecord::Base
  acts_as_taggable
  attr_accessible :text, :tag_list
end
