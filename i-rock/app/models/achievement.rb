class Achievement < ActiveRecord::Base
  belongs_to :user

  validates :title, presence: true
  validates :user, presence: true
  validates :title, uniqueness: {
    scope: :user_id,
    message: "you cannot have two achievements with same title"
  }

  enum privacy: [:public_access, :private_access, :friends_access]

  def description_html
    Redcarpet::Markdown.new(Redcarpet::Render::HTML).render(description).html_safe
  end

  def silly_title
    "#{title} by #{user.email}"
  end
end
