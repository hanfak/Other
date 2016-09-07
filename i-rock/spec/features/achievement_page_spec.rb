require 'rails_helper'

feature "Acheivement page" do
  scenario "achievement public page" do
    achievement = FactoryGirl.create(:achievement, title: "go to gym")
    visit("/achievements/#{achievement.id}")

    expect(page).to have_content("go to gym")

    # This creates a list of three achievements
    # achievements = FactoryGirl.create_list(:achievement, 3)
  end

  scenario 'render markdown description' do
    achievement = FactoryGirl.create(:achievement, description: 'That *was* hard')
    visit("/achievements/#{achievement.id}")

    expect(page).to have_content("<em>was</em>")
    expect(page).to have_content("Achievement 1")
  end
end
