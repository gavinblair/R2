function magic () {
    soundExpression.soaring.play()
    TPBot.headlightColor(0xff0000)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # .
        # . . . .
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # . .
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    TPBot.headlightColor(0xff8000)
    basic.showLeds(`
        # . . # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        . . # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        . # # # #
        . . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    TPBot.headlightColor(0xffff00)
    basic.showLeds(`
        # # # # #
        # . . . #
        . . . . #
        . . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        . . . . #
        . # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        . . # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # . . # #
        `)
    basic.pause(50)
    TPBot.headlightColor(0x00ff00)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # . . #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # . .
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . .
        # # # # .
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.pause(50)
    TPBot.headlightColor(0x0000ff)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # .
        # . . . .
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # .
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    TPBot.headlightColor(0x7f00ff)
    basic.pause(100)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
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
function dizzy () {
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
}
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
    dizzy()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "2") {
    	
    } else if (receivedString == "4") {
        dizzy()
    } else if (receivedString == "5") {
        TPBot.headlightColor(0x00ffff)
        TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 50)
        blair.starWarsTheme(2)
        TPBot.stopCar()
        basic.showIcon(IconNames.Chessboard)
    } else if (receivedString == "6") {
        magic()
    } else if (receivedString == "1") {
        TPBot.setServo180(TPBot.ServoList.S1, 0)
        basic.pause(500)
        TPBot.setServo180(TPBot.ServoList.S1, 180)
        basic.pause(500)
        TPBot.setServo180(TPBot.ServoList.S1, 0)
    } else if (receivedString == "3") {
        TPBot.setServo180(TPBot.ServoList.S2, 90)
        basic.pause(200)
        TPBot.setServo180(TPBot.ServoList.S2, 0)
        basic.pause(200)
        TPBot.setServo180(TPBot.ServoList.S2, 90)
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
    soundExpression.giggle.play()
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . .
        . # . # .
        . . . . .
        `)
    TPBot.headlightColor(0xffffff)
})
magic()
radio.setGroup(1)
input.setSoundThreshold(SoundThreshold.Loud, 181)
TPBot.stopCar()
soundExpression.hello.play()
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . .
    . . . . .
    . . . . .
    `)
