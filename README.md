README.md
**#Cowrie Crypto NFT Marketplace and Tutorial Application with Rails API ** #About This app is build with Ruby on Rails and uses rails to work with an SQL database using Active Record ORM

The application provides a database and web interface for admin to view, add, edit, and delete learners as well as to view their progress on tutorials and view their collections.

In its final version, it allows users to make investments in Cowrie, view their wallet balance, view tutorials, create collections and artworks, view and purchase artworks with NFTs on a simulated marketplace.

#Usage After checking out the repo, run bundle install to install Ruby gem dependencies.

** #Requirements ** For this project, I -Used Active Record to interact with a database. -Have an Admin model with a one-to-many relationship, a User model with one many to many relationship with a Cowry model, using Investments as a join table. There are also several other one to many relationships that belong to the User model.

-API routes in Rails that are set up so that: -full CRUD for User model

-Authentication -Admin can create users and can edit their accounts. -Users can login to see their own view

-A separate React front-end application that interacts with the API to perform CRUD actions.

** #Contributing ** Bud reports and pull requests are welcome on Github @https:..github.com/laynaoyervides/cowrie-app-copy

Contributors are expected to adhere to the Contributor Covenant code of conduct.

** #Copyright ** Copyright © 2022 by Layna Oyervides, SiteZinger

** #Resources ** create-react-app thinking in react material UI
