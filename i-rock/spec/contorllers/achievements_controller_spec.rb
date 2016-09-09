require 'rails_helper'

describe AchievementsController, type: :controller do
  describe 'GET index' do
    it "renders index template" do
       get :index

       expect(response).to render_template(:index)
    end

    it "assigns only public achievements to template" do
      public_achievement = FactoryGirl.create(:public_achievement)
      private_achievement = FactoryGirl.create(:private_achievement)
      get :index

      expect(assigns(:achievements)).to match_array([public_achievement])
      expect(assigns(:achievements)).not_to match_array([private_achievement])
    end
  end

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
      let(:valid_data) { FactoryGirl.attributes_for(:public_achievement) }
      it 'redirects to achievements#show route' do
        post :create, achievement: valid_data

        expect(response).to redirect_to(achievement_path(assigns[:achievement]))
      end

      it "creates new achievement in database" do
        expect{
          post :create, achievement: valid_data
        }.to change(Achievement, :count).by(1)
      end
    end

    context 'invalid data' do
      let(:invalid_data) {  FactoryGirl.attributes_for(:public_achievement, title: '') }
      it 'renders new template' do
        post :create, achievement: invalid_data

        expect(response).to render_template(:new)
      end

      it 'does not create new achievement in database' do
        expect{
          post :create, achievement: invalid_data
        }.not_to change(Achievement, :count)
      end
    end
  end

  describe 'GET edit' do
    let(:achievement) {FactoryGirl.create(:public_achievement)}

    it "renders :edit template" do
      get :edit, id: achievement

      expect(response).to render_template(:edit)
    end

    it "assigns the requested acievement to template" do
      get :edit, id: achievement

      expect(assigns(:achievement)).to eq(achievement)
    end
  end

  describe 'PUT update' do
    let(:achievement) {FactoryGirl.create(:public_achievement)}

    context 'valid data' do
      let(:valid_data) { FactoryGirl.attributes_for(:public_achievement, title: 'New Title') }

      it 'redirects to achievements#show' do
        put :update, id: achievement, achievement: valid_data

        expect(response).to redirect_to(achievement)
      end

      it 'updates achievement in the database' do
        put :update, id: achievement, achievement: valid_data
        achievement.reload
        expect(achievement.title).to eq("New Title")
      end
    end

    context 'invalid data' do

    end
  end
end
