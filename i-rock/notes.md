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
