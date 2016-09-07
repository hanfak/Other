require 'rails_helper'

describe AchievementsController, type: :controller do
  describe 'GET new' do
    # need to test response and data assignment
    it "renders :new template" do
      get :new #run action code
      expect(response).to render_template(:new)
    end

    it "assigns new Achievement to @achievement and template" do
      get :new
      expect(assigns(:achievement)).to be_a_new(Achievement)
    end
  end


  describe 'GET show' do
    let(:achievement) {FactoryGirl.create(:public_achievement)}

    it "renders :show template" do
      get :show, id: achievement.id

      expect(response).to render_template(:show)
    end

    it "assigns requested Achievement to @achievement and template" do
      get :show, id: achievement #works the same as above

      expect(assigns(:achievement)).to eq(achievement)
    end
  end
end
