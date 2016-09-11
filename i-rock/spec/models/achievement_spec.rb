require 'rails_helper'

RSpec.describe Achievement, type: :model do
  describe 'validations' do
    it 'requires a ttile' do
      achievement = Achievement.new(title: "")
      achievement.valid?

      expect(achievement.errors[:title]).to include("can't be blank")
    end
  end
end
