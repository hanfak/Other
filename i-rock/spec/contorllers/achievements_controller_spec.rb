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

  describe 'POST create' do
    context 'valid data' do
      it 'redirects to achievements#show route' do
        post :create, achievement: FactoryGirl.attributes_for(:public_achievement)

        expect(response).to redirect_to(achievement_path(assigns[:achievement]))
      end

      it "creates new achievement in database" do
        expect{
          post :create, achievement: FactoryGirl.attributes_for(:public_achievement)
        }.to change(Achievement, :count).by(1)
      end
    end

    context 'invalid data' do
      it 'renders new template' do
        post :create, achievement: FactoryGirl.attributes_for(:public_achievement, title: '')

        expect(response).to render_template(:new)
      end

      it 'does not create new achievement in database' do
        expect{
          post :create, achievement: FactoryGirl.attributes_for(:public_achievement, title: '')
        }.not_to change(Achievement, :count)
      end
    end
  end

end
