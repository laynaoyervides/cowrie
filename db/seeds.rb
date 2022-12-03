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
    password: "password",
    image_url:"https://res.cloudinary.com/dhgw364gk/image/upload/v1669934737/default_profile_pic_wkgtad.jpg"

}
)

lg = User.create! ({
    username: "Lily Goddard",
    password: "password",
    image_url:"https://res.cloudinary.com/dhgw364gk/image/upload/v1669934737/default_profile_pic_wkgtad.jpg"

})
dg = User.create! ({
    username: "Digby Gibbons",
    password: "password",
    image_url:"https://res.cloudinary.com/dhgw364gk/image/upload/v1669934737/default_profile_pic_wkgtad.jpg"

})
am = User.create! ({
    username: "Annika Moran",
    password: "password",
    image_url:"https://res.cloudinary.com/dhgw364gk/image/upload/v1669934737/default_profile_pic_wkgtad.jpg"

})
kd = User.create! ({
    username: "Kenya Dorsey",
    password: "password",
    image_url:"https://res.cloudinary.com/dhgw364gk/image/upload/v1669934737/default_profile_pic_wkgtad.jpg"

})
lh = User.create! ({
    username: "Layton Herrera",
    password: "password",
    image_url:"https://res.cloudinary.com/dhgw364gk/image/upload/v1669934737/default_profile_pic_wkgtad.jpg"

})
kd = User.create! ({
    username: "Karim Dunkley",
    password: "password",
    image_url:"https://res.cloudinary.com/dhgw364gk/image/upload/v1669934737/default_profile_pic_wkgtad.jpg"

})
kb = User.create! ({
    username: "Kayla Buxton",
    password: "password",
    image_url:"https://res.cloudinary.com/dhgw364gk/image/upload/v1669934737/default_profile_pic_wkgtad.jpg"

})
dp = User.create! ({
    username: "Domas Plant",
    password: "password",
    image_url:"https://res.cloudinary.com/dhgw364gk/image/upload/v1669934737/default_profile_pic_wkgtad.jpg"

})
wv = User.create! ({
    username: "Willard Velasquez",
    password: "password",
    image_url:"https://res.cloudinary.com/dhgw364gk/image/upload/v1669934737/default_profile_pic_wkgtad.jpg"

})

lo = User.create! (
    {
    username: "Layna Oyervides", 
    password: "password", 
    admin: 1,
    image_url:"https://res.cloudinary.com/dhgw364gk/image/upload/v1669934737/default_profile_pic_wkgtad.jpg"
}
)
#add collections for users
coll_iz=Collection.create!(
   {title:"IZA’s Collection", 
    user_id: iz.id
})
coll_lg=Collection.create! (
    {title:"Lily’s Collection", 
    user_id:lg.id,
    description: "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. A diam maecenas sed enim ut. 
        Massa tincidunt dui ut ornare lectus sit amet. 
        Tellus cras adipiscing enim eu turpis egestas pretium 
        aenean pharetra."
    })
coll_dg=Collection.create (
    {title:"Digby’s Collection", 
    user_id: dg.id,
    description: "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. A diam maecenas sed enim ut. 
        Massa tincidunt dui ut ornare lectus sit amet. 
        Tellus cras adipiscing enim eu turpis egestas pretium 
        aenean pharetra."
    })
coll_am=Collection.create (
    {title:"Annika’s Collection", 
    user_id: am.id,
    description: "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. A diam maecenas sed enim ut. 
        Massa tincidunt dui ut ornare lectus sit amet. 
        Tellus cras adipiscing enim eu turpis egestas pretium 
        aenean pharetra."
    })
coll_kd=Collection.create (
    {title:"Kenya’s Collection", 
    user_id: kd.id,
    description: "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. A diam maecenas sed enim ut. 
        Massa tincidunt dui ut ornare lectus sit amet. 
        Tellus cras adipiscing enim eu turpis egestas pretium 
        aenean pharetra."
    })
coll_lh=Collection.create (
    {title:"Layton’s Collection", 
    user_id:lh.id,
    description: "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. A diam maecenas sed enim ut. 
        Massa tincidunt dui ut ornare lectus sit amet. 
        Tellus cras adipiscing enim eu turpis egestas pretium 
        aenean pharetra."
    })
coll_kd=Collection.create (
    {title:"Karim’s Collection", 
    user_id:kd.id,
    description: "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. A diam maecenas sed enim ut. 
        Massa tincidunt dui ut ornare lectus sit amet. 
        Tellus cras adipiscing enim eu turpis egestas pretium 
        aenean pharetra."
    })
coll_kb=Collection.create (
    {title:"Kayla’s Collection", 
    user_id:kb.id,
    description: "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. A diam maecenas sed enim ut. 
        Massa tincidunt dui ut ornare lectus sit amet. 
        Tellus cras adipiscing enim eu turpis egestas pretium 
        aenean pharetra."
    })
coll_dp=Collection.create (
    {title:"Domas’ Collection", 
    user_id:dp.id,
    description: "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. A diam maecenas sed enim ut. 
        Massa tincidunt dui ut ornare lectus sit amet. 
        Tellus cras adipiscing enim eu turpis egestas pretium 
        aenean pharetra."
    })
coll_wv=Collection.create (
    {title:"Willard’s Collection", 
    user_id:wv.id,
    description: "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. A diam maecenas sed enim ut. 
        Massa tincidunt dui ut ornare lectus sit amet. 
        Tellus cras adipiscing enim eu turpis egestas pretium 
        aenean pharetra."
    })

#create some artworks for a collection
rr = Artwork.create! ({title:"Red River", keywords:"nature, red, river",collection_id: coll_iz.id, img_url: "https://res.cloudinary.com/dhgw364gk/image/upload/v1669930323/red_river_pgsljz.jpg"})
bb = Artwork.create ({title:"Blue Bayou", keywords:"nature, blue, bayou",collection_id: coll_iz.id, img_url:"https://res.cloudinary.com/dhgw364gk/image/upload/v1669930323/blue_bayou_ewduvp.jpg"})
gg = Artwork.create ({title:"Green Grass", keywords:"nature, green, grass", collection_id: coll_iz.id, img_url:"https://res.cloudinary.com/dhgw364gk/image/upload/v1669930323/green_grass_yzrcrh.jpg"})
cc = Artwork.create ({title:"Cerulean Cloud", keywords:"nature, cloud, blue", collection_id: coll_iz.id, img_url:"https://res.cloudinary.com/dhgw364gk/image/upload/v1669930323/cerulean_cloud_vturw1.jpg"})
pp = Artwork.create ({title:"Pink Pelicans", keywords:"nature, pink, pelicans", collection_id: coll_iz.id, img_url:"https://res.cloudinary.com/dhgw364gk/image/upload/v1669930323/pink_pelicans_d9fg24.jpg"})


#set inital cowrie volume
#cc = Cowry.create! (
 #   {
  #      cowrie_volume: 1000000
  #  }
#)
#write tutorials.
tut_1 = Tutorial.create! (
        {   user_id: lo.id,
            title:"What is Crypto Currency?", 
            video_url: "https://res.cloudinary.com/dhgw364gk/video/upload/v1669936261/site_zinger_crypto_currency_mlv4gr.mp4",
        description:"Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                officia deserunt mollit anim id est laborum."})
tut_2 = Tutorial.create! (
        {user_id: lo.id,
        title:"What is a Non-Fungible Token?", 
        video_url: "https://res.cloudinary.com/dhgw364gk/video/upload/v1669936663/SiteZinger_NFT_xevupm.mp4",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum."})
tut_3 = Tutorial.create! (
        {user_id: lo.id,
        video_url: "https://res.cloudinary.com/dhgw364gk/video/upload/v1669937041/making_generative_art_with_layers_drtzhb.mp4",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})
tut_4 = Tutorial.create! (
        {user_id: lo.id,
        title:"Marketplaces", 
        video_url: "https://res.cloudinary.com/dhgw364gk/video/upload/v1669937280/siteZinger_marketplaces_hanje9.mp4",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
            laborum."})
tut_5 = Tutorial.create! (
        {user_id: lo.id,            
        title:"Wallets", 
        video_url: "https://res.cloudinary.com/dhgw364gk/video/upload/v1669939843/SZ_cryptowallets_vlq0fl.mp4",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum."})

#make invesments

#Set Cowrie price and quantity
#cowrie = Cowry.create({current_price: , })


#end of seeds
puts "✅ Done seeding!"
