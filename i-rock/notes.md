Setup feature test(in capybara)
  go to homepage, and expect page to have content

  To pass test
    Setup routes
      - set root to controller action (welcome#index)
    Setup controller
      - create controller file
      - create action which is being asked for at the route (index)
    Setup view
      - ceate view that is being referenced by index actions
        - file in views/welcome/index.html.erb
    Pass test, by filling in view

  Add styling via bootstrap-sass
    - add gem to gemfile
    - create file in style sheets
    - fill in


First feature test
  - Aim: Go to create achievement, fill in form, click it and get confirmation and stored in database
    - create neew feature file

Pass features test
  - create link button , in view
    - create in layout template
    - use bootstrap template and edit
    - Add link using new_achievement_path
  - Create routes
    -   resources :achievement, only: [:new, :create]
    - only routes for stuff we need
  - Create controller for achievements
    - create new action\
  - Create template for new
    - Now expects to find fields of form to fill in
  - Create for for an achievement in new.html.erb
    - define @achievement in controller, as a new Achievement (new record in db)
    - need to create model for achievement
  - Create model for Achievement
    - use feature test, the fields in the form to build model
    - use rails g model achievement title description:text privacy:integer featured:boolean cover_image
    - rake db:migrate
  - Use simple form (not really for pass test)
    - rails g simple_form:install --bootstrap
  - Create field to fill in new.html
    - Plus create other parts of the form
  - For privacy field(drop down menu)
    - add field, fail as no method Achievements#privacy
    - Got achievements model, and define method
      - enum ...
    -  To find option public_access
      - Map the private options to options that will be seen on browser
  - For checkbox
    - create field in form
  - For image file
    - create fixtures folder and place image in it
    - create field in form
  - submit button for field
    - just add code to new.html
  - Make form submit data to controllers
    - Create new action method
    - Sort out what needs to rendered
      - new achievement
      - redirect to home, with flash message
    - Got layout template, add flash message
Test passed
