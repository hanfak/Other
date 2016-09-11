require 'rails_helper'

RSpec.describe Achievement, type: :model do
  describe 'validations' do
    it 'requires a ttile' do
      achievement = Achievement.new(title: "")

      expect(achievement.valid?).to be_falsy
    end

    it 'requires title to be unique for one user' do
      user = FactoryGirl.create(:user)
      first_achievement = FactoryGirl.create(:public_achievement, title: 'First Achievement', user: user)
      new_achievement = Achievement.new(title: 'First Achievement', user: user)

      expect(new_achievement.valid?).to be_falsy

    end
  end
end
