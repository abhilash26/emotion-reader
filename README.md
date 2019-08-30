# Emotion Detector.

## Idea and Inspiration

This webapp is inspired from [Emotion Detector](https://www.auduno.com/clmtrackr/examples/clm_emotiondetection.html).

## Tools used

[JeelizWeboji](https://github.com/jeeliz/jeelizWeboji) is an excellent tool to build this.
It has facial expression detection which is perfect for this app.

## Application and use

This application maps the facial expression to emotions by adding a weightage mean to quantify emotion.

## Configuration

In the assets/js/main.js assign `DISPLACEMENT_THRESHOLD` to a fractional value ranging from 1 to 3.
In the assets/js/emotion.js change `EXPRESSION2EMOTION` mapping value which you can configure ranging from -0 to 1 weight value.

0: smileRight → closed mouth smile right
1: smileLeft → closed mouth smile left
2: eyeBrowLeftDown → eyebrow left frowned
3: eyeBrowRightDown → eyebrow right frowned
4: eyeBrowLeftUp → eyebrow left up (surprised)
5: eyeBrowRightUp → eyebrow right up (surprised)
6: mouthOpen → mouth open
7: mouthRound → mouth round
8: eyeRightClose → close right eye
9: eyeLeftClose → close left eye
10: mouthNasty → mouth nasty (upper lip raised)

## Warnings

1. This webapp needs camera to run. It will obviously need camera permission as well.
2. The tracker needs proper even lighting on your face to work.
