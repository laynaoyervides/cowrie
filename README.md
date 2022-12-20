#Cowrie Crypto NFT Marketplace and Tutorial Application with Rails API 

About 
This app is built with Ruby on Rails and uses Rails to work with an SQL database using Active Record ORM

In this MVP version of the app, the app provides a database and web interface for admin to view, add, edit, and delete tutorials. Users can create collections and artworks, view artworks in the Cowry Marketplace, and make purchases of artworks in the marketplace. Purchases show up in the wallet with an associated NFT which has a 'unique' token (a random number between 1 and 30,000).

In its final version, it will allow users to make investments in Cowrie, view their wallet balance, and continue to view and purchase artworks with simulated NFTs on a simulated marketplace.

The goal of this project is to create a tool that teachers can use with with secondary school students to help them understand the technology behind the blockchain while also learning about the creation of digital assets. It could be used by art/computer science teachers or fellow STEAM instructors. There are also several after-school programs that help students create digital artworks and sell them on the blockchain. This is simply for educational purposes and is not meant to be a block-chain based service. 

** #Requirements ** 

More information on the database structure can be found at www.medium.com/laynaoyervides



-API routes in Rails that are set up so that: -full CRUD for User model

-A separate React front-end application that interacts with the API to perform CRUD actions.


#Usage 

After checking out the repo, run bundle install to install Ruby gem dependencies.

** #Contributing ** Bud reports and pull requests are welcome on Github @https:..github.com/laynaoyervides/cowrie-app-copy

Contributors are expected to adhere to the Contributor Covenant code of conduct.

Environment Setup
Clone repository
Clone the project repository from github: https://github.com/laynaoyervides/hall-tracker-app

$ git clone https://github.com/laynaoyervides/hall-tracker-app
Install the Latest Ruby Version
Verify which version of Ruby you're running by entering this in the terminal:

ruby -v
Make sure that the Ruby version you're running is listed in the supported runtimes by Heroku. At the time of writing, supported versions are 2.6.8, 2.7.4, or 3.0.2. Our recommendation is 2.7.4, but make sure to check the site for the latest supported versions.

If it's not, you can use rvm to install a newer version of Ruby:

rvm install 2.7.4 --default
You should also install the latest versions of bundler and rails:

gem install bundler
gem install rails
Install NodeJS
Verify you are running a recent version of Node with:

node -v
If your Node version is not 16.x.x, install it and set it as the current and default version with:

nvm install 16
nvm use 16
nvm alias default 16
You can also update your npm version with:

npm i -g npm
Install SQLITE3
Installing SQLite in OSX

If you are on OSX version 10.4 or greater, you probably already have SQLite installed. Find out by opening up the terminal and running:

 which sqlite3
/usr/bin/sqlite3
If you see the output above, you have a working version of sqlite3 already installed on your system. Thanks Apple! Skip ahead to the 'SQLite VSCode Extension' section below!

If not, then there are a couple of ways you can install SQLite.

OSX: Install With Homebrew

You can install SQLite using Homebrew, which you should have installed as part of your Flatiron environment setup. Install SQLite with:

 brew install sqlite
OSX: Install From Binary

If Homebrew isn't working out for you, you can download one of the pre-compiled binary packages available at the downloads pageLinks to an external site.. Look for your operating system, download and install the appropriate binary.

Note: If you are receiving an error when trying to install SQLite, make sure the Xcode Command-Line Tools have properly installed. Try running xcode-select --install to resolve this issue.

Installing SQLite in WSL

Below are the steps for installing SQLite on the Windows Sub-system for Linux:

Open your WSL terminal

Update your Ubuntu packages: sudo apt update

Once the packages have updated, install SQLite3 with: sudo apt install sqlite3 Confirm installation and get the version number: sqlite3 --version For additional information, check out this article on getting started with databases in WSL

Application Install
When you're ready to start building your project, run:

bundle install
rails db:create
npm install --prefix client
###Server Start You can use the following commands to run the application:

rails db:migrate 
db:seed 
migrate and seed the database (use db:seed:replant if this is not the first time running)

rails s: run the backend on http://localhost:3000
npm start --prefix client: 
run the frontend on http://localhost:4000

Backend Shutdown
It should be possible to shutdown the server using [CTRL-C]. If that fails, follow these steps:

lsof -i tcp:9292 response: COMMAND PID USER .... ruby 1234 root .... kill -9 1234



** #Copyright ** Copyright © 2022 by Layna Oyervides, SiteZinger

** #Resources ** create-react-app thinking in react material UI
