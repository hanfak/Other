class NewAchievementForm
  include Capybara::DSL #use capybara methods

  def visit_page
    visit('/')
    click_on('New Achievement')
    self #chain messages
  end

  def fill_in_with(params = {})
    fill_in('Title', with: params.fetch(:title, 'Read a book')) #set default value
    fill_in('Description', with: 'Excellent read')
    select('Public', from: 'Privacy')
    check('Featured achievement')
    attach_file('Cover image', "#{Rails.root}/spec/fixtures/cover_image.png")
    self
  end

  def submit
    click_on('Create Achievement')
    self
  end
end
