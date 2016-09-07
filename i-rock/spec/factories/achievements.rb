FactoryGirl.define do
  factory :achievement do
    # After each instance of created, changes title, to have several different titles
    sequence(:title) { |n| "Achievement #{n}"}
    description "description"
    privacy Achievement.privacies[:private_access]
    featured false
    cover_image "some_file.png"
    # inherit and overirde parts
    factory :public_achievement do
      privacy Achievement.privacies[:public_access]
    end
  end
end
