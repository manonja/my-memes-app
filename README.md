# my-memes-app
Browse images, pick up one, create a meme, download it and save it to your profile.

## Project background
1. Use a Rails API backend 
2. Use a React frontend
3. Models in the backend: for the users and for the customized memes. 
4. Has a Authentication/authorization part. 

## Technical details
- frontend built with HTML and React.
- styling with pure CSS and MDBootstrap.
- use of svg format to create a new meme, and `svg-as-png` library to save the meme as a png file.
- backend built with Ruby on Rails with two endpoints (one for the users, one for the customized memes).
- use of Imgflip API to get images templates. 

## Getting started
Fork and clone the project https://github.com/manonja/my-memes-app 

1. In your terminal, go to the client repository `cd client` 
- run `npm install` 
- `npm install --save mdbreact` for the material design bootstrap library
- `npm install --save reactstrap react react-dom` for reactstrap component
- `npm install --save-svg-as-png` to save the meme as a png file
- `npm start`

2. Go to the server repository `cd server`
- run `bundle install`
- `rails db:migrate`
- `rails s -p 3001`

## Uses
If you have an account, just login. If you don't, sigup!
Create memes and save them to your account.

## Authors
Thomas Edwards (https://github.com/tomo10) & Manon Jacquin (https://github.com/manonja)
