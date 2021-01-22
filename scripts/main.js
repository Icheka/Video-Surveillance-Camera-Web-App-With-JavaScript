// Input stream config
const conf = { video: { facingMode: "user" }, audio: false };

const videoWindow = document.getElementById("video-window");
const cameraImg = document.getElementById("camera_img");
const cameraRenderer = document.getElementById("camera_renderer");
const shutterControl = document.getElementById("shutter-control");


(function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(conf)
        .then(stream => {
	        track = stream.getTracks()[0];
	        videoWindow.srcObject = stream;
	    }).catch( err => {
	        console.error("Error getting video stream :>> ", error);
    });
})();

shutterControl.onclick = () => {
    cameraRenderer.style.width = videoWindow.style.width;
    cameraRenderer.style.height = videoWindow.style.height;
    cameraRenderer.getContext("2d").drawImage(cameraRenderer, 0, 0);
    cameraImg.src = cameraSensor.toDataURL("image/webp");
    cameraImg.classList.add("taken");
}