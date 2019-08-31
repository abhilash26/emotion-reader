"use strict";

const DISPLACEMENT_THRESHOLD = 2.8;

let emotions = {};
let expressions = [];
let displacement = 9999;

//entry point :
function main() {
  JEEFACETRANSFERAPI.init({
    canvasId: "canvas",
    NNCpath: "src/model/",
    callbackReady: function(errCode) {
      if (errCode) {
        console.log(
          "ERROR - cannot init JEEFACETRANSFERAPI. errCode =",
          errCode
        );
        errorCallback(errCode);
        return;
      }
      console.log("INFO : JEEFACETRANSFERAPI is ready !!!");
      successCallback();
    } //end callbackReady()
  });
} //end main()

function successCallback() {
  // Call next frame
  nextFrame();
  // Add code after API is ready.
}

function errorCallback(errorCode) {
  // Add code to handle the error
  alert("Some error occured " + errorCode);
}

function nextFrame() {
  if (JEEFACETRANSFERAPI.is_detected()) {
    // Do something awesome with rotation values
    let rotation = JEEFACETRANSFERAPI.get_rotationStabilized();
    // Do something awesome with animation values
    expressions = JEEFACETRANSFERAPI.get_morphTargetInfluences();
    getMeanDisplacement(rotation);
    if (displacement > DISPLACEMENT_THRESHOLD) {
      let emotions = get_emotions();
      document.getElementById("emotion-anger").style.opacity = emotions.anger;
      document.getElementById("emotion-surprise").style.opacity =
        emotions.surprise;
      document.getElementById("emotion-happy").style.opacity = emotions.happy;
      document.getElementById("emotion-fear").style.opacity = emotions.fear;
      document.getElementById("emotion-sad").style.opacity = emotions.sad;
    }

    //**************************************************************************** */

    // The API is detected
    console.log("Detected");
  } else {
    // Tell the user that detection is off.
    console.log("Not Detected");
  }
  // Replay frame
  requestAnimationFrame(nextFrame);
}

function getMeanDisplacement(rotation) {
  displacement = 0;
  let factors = rotation.concat(expressions);
  for (let index = 0; index < factors.length; index++) {
    const element = Math.abs(factors[index]);
    displacement += element;
  }
}
