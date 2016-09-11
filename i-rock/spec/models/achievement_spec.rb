require 'rails_helper'

RSpec.describe Achievement, type: :model do

  describe 'validations' do
    it {should validate_presence_of(:title)}
    it {should validate_uniqueness_of(:title).scoped_to(:user_id).with_message("you cannot have two achievements with same title")}
    it {should validate_presence_of(:user)}
    it {should belong_to(:user)}
  end

  it 'converts markdown to html' do
    achievement = Achievement.new(description: 'Awesome **thing** I *actually* did')
    expect(achievement.description_html).to include('<strong>thing</strong>')
    expect(achievement.description_html).to include('<em>actually</em>')
  end
end
