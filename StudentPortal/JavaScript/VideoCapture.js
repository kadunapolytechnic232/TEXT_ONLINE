const video = document.querySelector('.video');
const convas = document.querySelector('.convas');



/**/
navigator.mediaDevices.getUserMedia({video: true}).then(function (stream){
    video.srcObject = stream;
}).catch(function (err){
    console.error("Error accessing the webcam: " + err)
})



setInterval(()=>{
    convas.width = video.videoWidth;
    convas.height = video.videoHeight;
    convas.getContext("2d").drawImage(video,0,0, convas.width, convas.height);
    const dataURL = convas.toDataURL("image/png");

    //dataURL
    if(localStorage.getItem("Login") === "ADMIN"){
        localStorage.setItem("VidoeDataURL",dataURL)

    }
},100)










