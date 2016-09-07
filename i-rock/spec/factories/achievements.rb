FactoryGirl.define do
  factory :achievement do
    title "title"
    description "description"
    privacy Achievement.privacies[:private_access]
    featured false
    cover_image "some_file.png"
  end
end
