class Achievement < ActiveRecord::Base
  belongs_to :user

  validates :title, presence: true
  validates :title, uniqueness: true

  enum privacy: [:public_access, :private_access, :friends_access]

  def description_html
    Redcarpet::Markdown.new(Redcarpet::Render::HTML).render(description).html_safe
  end
end
