let bcounter = 0
input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    bcounter = bcounter + 1
    if (bcounter == 1) {
        music.ringTone(262)
    } else {
        music.stopAllSounds()
        bcounter = 0
    }
})
