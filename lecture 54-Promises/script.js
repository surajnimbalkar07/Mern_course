//callback

//callback is when function is passed as an argument in another function and not executed immediately just used whenever needed

// const request=new Promise((resolve,reject)=>{


//     setTimeout(()=>{
//         const num=Math.random();
//     if(num<0.5)resolve("Number is less than 0.5")
//         else reject("num is greater than or equal to 0.5")
//     },1000)

// })
// console.log(request);

// request.then((resolveMessage)=>{
//     console.log({resolveMessage})
// }).catch((rejectMessage)=>{
//     console.log({rejectMessage});

// }).finally(()=>{
//     console.log("request is completed");

// })

//states:
/*
1.pending 2.resolved or fullfilled 3.rejected
*/


// let user = ["user1", "user2", "user3", "user4", "user5"]
// const userRequest = new Promise((resolve, reject) => {


//     setTimeout(() => {
//         const num = Math.floor(Math.random() * 10);
//         if (user[num]) resolve(`user is found username is ${user[num]}`)
//         else reject("user is not present")
//     }, 1000)

// })
// console.log(userRequest);

// userRequest.then((resolveMessage) => {
//     console.log({ resolveMessage })
// }).catch((rejectMessage) => {
//     console.log({ rejectMessage });

// }).finally(() => {
//     console.log("request is completed");

// })


const InstaUser = [
    {
        userId: 0,
        posts: [
            {
                caption: "I'm don",
                imageUrl: "#",
                comments: ["ghanta ka don", "nice", "good"]
            }
        ]
    },
    {
        userId: 1,
        posts: [
            {
                caption: "I'm don",
                imageUrl: "#",
                comments: ["don", "nice", "good"]
            }
        ]
    }
]

// function fetchUser(userId, callback) {
//     setTimeout(() => {
//         if (userId >= InstaUser.length) callback("invalid useId");
//         else callback(null, InstaUser[userId])
//     }, 1000)
// }

// function fetchPost(user, callback) {
//   setTimeout(()=>{
//     if(user?.posts?.length)callback(null,user.posts[0]);
//     else callback("user has not posted anything")
//   },2000)
// }

// function fetchComment(posts, callback) {
//     setTimeout(()=>{
//     if(posts?.comments?.length)callback(null,posts.comments);
//     else callback("no comment present")
//   },2000)

// }
// function giveRandomNumber(high) {
//     return Math.floor(Math.random()) * high
// }

// fetchUser(giveRandomNumber(InstaUser.length), (error, data) => {
//   if(error){
//     console.log(error);
//     return

//   }
//   fetchPost(data,(error,data)=>{
//     if(error){
//         console.log(error);
//         return

//     }
//     fetchComment(data,(error,data)=>{
//         if(error){
//             console.log(error);
//             return
//         }
//         console.log(({comments:data}));

//     })
//   })
// })

function giveRandomNumber(high) {
  return Math.floor(Math.random() * high)
}

function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId >= InstaUser.length) reject("invalid userId")
      else resolve(InstaUser[userId])
    }, 1000)
  })
}

function fetchPost(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user?.posts?.length) resolve(user.posts[0])
      else reject("user has not posted anything")
    }, 1000)
  })
}

function fetchComment(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (post?.comments?.length) resolve(post.comments)
      else reject("no comment present")
    }, 1000)
  })
}

fetchUser(giveRandomNumber(InstaUser.length * 2))
  .then(user => fetchPost(user))
  .then(post => fetchComment(post))
  .then(comments => {
    console.log({ comments })
  })
  .catch(error => {
    console.log(error)
  })


//add to cart:1.check product is available, 2.then quantity, 3.push in cart

function fetchProduct(productId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           if (productId >= productArray.length) reject("invalid productId");
            else resolve(null, productArray[productId])
        },1000)
    })

}
function isProductAvailable(product){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(product)resolve (null,product.name);
            reject("no product there"); 
        },1000)
    })
}
function isProductAlreadyInCart(){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
        },1000)
    })
}


fetchProduct().then(()=>{
    if(QtyGrtThanZero())return "this product"
}).then(()=>{

})

console.log("start");
const obj=new Promise((resolve)=>{
  console.log("inside promise");
  setTimeout(()=>{
    console.log(("we are done"));
    
  },0)
  
})
console.log("end");

//start,inside promise ,end,we are done

