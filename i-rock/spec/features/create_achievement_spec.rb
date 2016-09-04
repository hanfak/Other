require 'rails_helper'

feature 'create new achievement' do
  scenario 'create new achievement with date' do
    visit('/')
    click_on('New achievement')

    fill_in('Title', with: 'Read a book')
    fill_in('Description', with: 'Excellent read')
    select('Public', from: 'Privacy')
    check('Featured achievement')
    attach_file('Cover image', "#{Rails.root}/spec/fixtures/cover-image.png")
    click_on('Create Acheivement')

    expect(page).to have_content('Achievement has been created')
    expect(Achievement.last.title).to eq('Read a book')
  end
end