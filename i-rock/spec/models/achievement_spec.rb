require 'rails_helper'

RSpec.describe Achievement, type: :model do
  describe 'validations' do
    it 'requires a ttile' do
      achievement = Achievement.new(title: "")

      expect(achievement.valid?).to be_falsy
    end

    it 'requires title to be unique for one user' do
      user = FactoryGirl.create(:user)
      FactoryGirl.create(:public_achievement, title: 'First Achievement', user: user)
      new_achievement = Achievement.new(title: 'First Achievement', user: user)

      expect(new_achievement.valid?).to be_falsy
    end

    it 'allows different users to have identitical titles' do
      user1 = FactoryGirl.create(:user)
      user2 = FactoryGirl.create(:user)
      FactoryGirl.create(:public_achievement, title: 'First Achievement', user: user1)
      new_achievement = Achievement.new(title: 'First Achievement', user: user2)

      expect(new_achievement.valid?).to be_truthy

    end
  end

  it 'must belong to user' do
    some_achievement = Achievement.new(title: 'some title', user: nil)

    expect(some_achievement.valid?).to be_falsy
  end

  it 'has belongs_to user assoication' do
    user = FactoryGirl.create(:user)
    achievement = FactoryGirl.create(:public_achievement, user: user)

    expect(achievement.user).to eq(user)
  end
end
