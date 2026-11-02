# README

## Stack
- Ruby 3.4.12
- Rails 8.1.4
- Postgresql 16

## Commands:
# lets go back to Rails varibles in credentials file:
- EDITOR="code --wait" rails credentials:edit

# docker commands:
- docker compose run --rm web bin/rails r "puts Rails.configuration.database_configuration
['development'].inspect"
- docker compose exec web bundle exec bin/rails db:create 
- docker compose exec web bundle exec bin/rails db:migrate
- docker compose build --no-cache, ili: docker compose up -d --build
- docker compose down
- docker compose up -d
- docker compose logs web
- docker compose exec web tail -f log/development.log
- sudo chown -R $USER:$USER .
- docker compose run --rm frontend sh -c "npm create vite@latest . -- --template react"

 


