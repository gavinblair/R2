input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.play()
    TPBot.headlightColor(0xffff00)
})
input.onGesture(Gesture.ScreenUp, function () {
    soundExpression.yawn.playUntilDone()
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        # # # # #
        `)
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    TPBot.headlightClose()
    basic.showString("zzzzz")
})
input.onGesture(Gesture.ScreenDown, function () {
    soundExpression.sad.playUntilDone()
    TPBot.headlightColor(0xff0000)
    TPBot.setTravelTime(TPBot.DriveDirection.Forward, 100, 0.5)
    TPBot.setTravelTime(TPBot.DriveDirection.Backward, 100, 0.5)
})
input.onSound(DetectedSound.Loud, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        `)
    TPBot.headlightColor(0xff0000)
    TPBot.setTravelTime(TPBot.DriveDirection.Backward, 100, 0.5)
    TPBot.stopCar()
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.ForeverInBackground)
    basic.showIcon(IconNames.Heart)
    TPBot.headlightColor(0xff0000)
    TPBot.setTravelTime(TPBot.DriveDirection.Right, 100, 5)
    music.stopAllSounds()
    TPBot.setTravelTime(TPBot.DriveDirection.Left, 20, 1)
    TPBot.setTravelTime(TPBot.DriveDirection.Right, 20, 1)
    TPBot.setTravelTime(TPBot.DriveDirection.Left, 20, 1)
    TPBot.setTravelTime(TPBot.DriveDirection.Right, 20, 1)
    soundExpression.giggle.play()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "2") {
    	
    } else if ("forward" == receivedString) {
        TPBot.setTravelTime(TPBot.DriveDirection.Forward, 100, 0.5)
    } else if ("backward" == receivedString) {
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, 100, 0.5)
    } else if ("left" == receivedString) {
        TPBot.setTravelTime(TPBot.DriveDirection.Left, 20, 0.5)
    } else if ("right" == receivedString) {
        TPBot.setTravelTime(TPBot.DriveDirection.Right, 20, 0.5)
    } else {
        soundExpression.hello.play()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Angry)
    soundExpression.sad.play()
    TPBot.headlightColor(0x0000ff)
})
input.onGesture(Gesture.LogoDown, function () {
    soundExpression.giggle.playUntilDone()
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . .
        . # . # .
        . . . . .
        `)
    TPBot.headlightColor(0xffffff)
})
radio.setGroup(1)
input.setSoundThreshold(SoundThreshold.Loud, 181)
TPBot.stopCar()
soundExpression.hello.play()
basic.showLeds(`
    . . . . .
    . . . . #
    . . . . .
    . . . . .
    . . . . .
    `)
