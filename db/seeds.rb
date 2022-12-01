# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding spices..."
# seeding the DB 

#Users
iz = User.create! (
    {
    username: "Izabelle Cantu", 
    password: "password"
}
)

lg = User.create! ({
    username: "Lily Goddard",
    password: "password"
})
dg = User.create! ({
    username: "Digby Gibbons",
    password: "password"
})
am = User.create! ({
    username: "Annika Moran",
    password: "password"
})
kd = User.create! ({
    username: "Kenya Dorsey",
    password: "password"
})
lh = User.create! ({
    username: "Layton Herrera",
    password: "password"
})
kd = User.create! ({
    username: "Karim Dunkley",
    password: "password"
})
kb = User.create! ({
    username: "Kayla Buxton",
    password: "password"
})
dp = User.create! ({
    username: "Domas Plant",
    password: "password"
})
wv = User.create! ({
    username: "Willard Velasquez",
    password: "password"
})
#add collections for users
coll_iz=Collection.create!(
   {title:"IZA’s Collection", 
    user_id: iz.id
})
coll_lg=Collection.create! ({title:"Lily’s Collection", user_id:lg.id})
coll_dg=Collection.create ({title:"Digby’s Collection", user_id: dg.id})
coll_am=Collection.create ({title:"Annika’s Collection", user_id: am.id})
coll_kd=Collection.create ({title:"Kenya’s Collection", user_id: kd.id})
coll_lh=Collection.create ({title:"Layton’s Collection", user_id:lh.id})
coll_kd=Collection.create ({title:"Karim’s Collection", user_id:kd.id})
coll_kb=Collection.create ({title:"Kayla’s Collection", user_id:kb.id})
coll_dp=Collection.create ({title:"Domas’ Collection", user_id:dp.id})
coll_wv=Collection.create ({title:"Willard’s Collection", user_id:wv.id})

#create some artworks for a collection
rr = Artwork.create! ({title:"Red River", collection_id: coll_iz.id})
bb = Artwork.create ({title:"Blue Bayou", collection_id: coll_iz.id})
gg = Artwork.create ({title:"Green Grass", collection_id: coll_iz.id})
cc = Artwork.create ({title:"Cerulean Cloud", collection_id: coll_iz.id})
pp = Artwork.create ({title:"Pink Pelicans", collection_id: coll_iz.id})



#write tutorials.
#tut_1 = Tutorial.create ({title:"What is Crypto Currency?", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})
#tut_2 = Tutorial.create ({title:"What is a Non-Fungible Token?", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})
#tut_3 = Tutorial.create ({title:"Generative Art made with Layers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})
#tut_4 = Tutorial.create ({title:"Marketplaces", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})
#tut_5 = Tutorial.create ({title:"Wallets", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})

#make invesments

#Set Cowrie price and quantity
#cowrie = Cowry.create({current_price: , })


#end of seeds
puts "✅ Done seeding!"
