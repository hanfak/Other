require 'rails_helper'

RSpec.describe Achievement, type: :model do
  describe 'validations' do
    it 'requires a ttile' do
      achievement = Achievement.new(title: "")
      # achievement.valid?
      #
      # expect(achievement.errors[:title]).not_to be_empty
      expect(achievement.valid?).to be_falsy
    end
  end
end
