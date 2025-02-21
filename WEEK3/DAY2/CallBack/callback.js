function addCallBack (z, callbackFn){

    return callbackFn(z, 6)

}
    function add(a,b){

        return a + b

    }

 addCallBack(10 , add)

 console.log(addCallBack(10, add)) //16

    //map, reduce and fileter all callback functions passed inside other function
    const arr = [1, 2, 3, 4, 5, 6]

    const double = arr.map((num) => (num * 2))
     console.log(arr)
     console.log(double)


     // Simulate user login
function loginUser(email, password, callbackFn) {
    setTimeout(() => {
      console.log("We are logging into Netflix...");
      callbackFn({ userEmail: email });
    }, 2000);
  }
  
  // Get all videos for the user
  function getAllVideos(userObj, callbackFn) {
    setTimeout(() => {
      console.log("We have all the recently watched videos");
      callbackFn({ userEmail: userObj.userEmail, videosInfo: ["Star Wars", "The Nando", "The Master of the Rings"] });
    }, 3000);
  }
  
  // Get details of one specific video
  function getVideoInfo(videosInfoObj, callbackFn) {
    setTimeout(() => {
      console.log("We have the details of one video");
      callbackFn({ video: videosInfoObj.videosInfo[1] }); // "The Nando"
    }, 3000);
  }
  
  // Execute the sequence of all asynchronous operations
  loginUser("jay@duff.com", "123456jgfj", (userObj) => {
    console.log(userObj);
  
    getAllVideos(userObj, (videosDetailsObj) => {
      console.log(videosDetailsObj);
  
      getVideoInfo(videosDetailsObj, (video) => {
        console.log(video);
      });
    });
  });
  