var Product = require('../models/products');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shoppingdb');

var products = [
    new Product({
        imagePath : 'http://www.ecentral.com.au/whitsundays/upload/nw6606.jpg',
        title : 'White Sunday',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum veritatis ipsum nihil cum quas minus molestias eius, eaque id error saepe aliquam autem laboriosam? Nisi sint asperiores consequatur modi eos!',
        price: 10
    }),
    new Product({
        imagePath : 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/de458316202383.562a6c338d8bd.jpg',
        title : 'Godzilla',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum veritatis ipsum nihil cum quas minus molestias eius, eaque id error saepe aliquam autem laboriosam? Nisi sint asperiores consequatur modi eos!',
        price: 10
    }),
    new Product({
        imagePath : 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b1cdb616202383.562a6bec4f119.jpg',
        title : 'Just Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum veritatis ipsum nihil cum quas minus molestias eius, eaque id error saepe aliquam autem laboriosam? Nisi sint asperiores consequatur modi eos!',
        price: 10
    }),
    new Product({
        imagePath : 'http://bagathome.com/media/catalog/product/cache/20/image/600x500/9df78eab33525d08d6e5fb8d27136e95/2/4/24_mantra_organic_wheat_premium.jpg',
        title : 'Win Win',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum veritatis ipsum nihil cum quas minus molestias eius, eaque id error saepe aliquam autem laboriosam? Nisi sint asperiores consequatur modi eos!',
        price: 10
    })
];

var done = 0;
for(var i = 0; i < products.length; i++){
    console.log(products[i]);
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}