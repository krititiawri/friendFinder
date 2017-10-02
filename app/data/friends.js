// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [ {
  "name" : "Arijit Singh",
  "photo" : "https://res.cloudinary.com/firstnotify/image/upload/v1498743283/cedzcud8ky6nflktleac.png",
  "scores" : [5,5,2,3,1,5,2,1,3,5]
}, {
  "name" : "Shreya Ghosal",
  "photo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/ShreyaGhoshal.jpg/220px-ShreyaGhoshal.jpg",
  "scores" : [1,5,1,1,1,1,1,1,5,5]
}, {
  "name" : "AR Rehman",
  "photo" : "https://2abift17c4s077fheyw1efbs-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/A.-R.-Rahman-profile.jpg",
  "scores" : [5,3,2,3,2,5,1,3,3,4]
}];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;