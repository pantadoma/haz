function aramos () {
    oszlop = randint(0, 4)
    sor = randint(0, 4)
    kovacsek = sor == 3 && oszlop == 3
    folds = sor == 4 && (oszlop > 0 && oszlop < 4)
    if (folds || kovacsek) {
        return
    }
    fel = Math.randomBoolean()
    fenyero = randint(10, 200)
    if (sor == 0) {
        fenyero = 255
    }
    if (fel) {
        felkapcs()
    } else {
        lekapcs()
    }
    foldszinfe()
    if (true) {
    	
    }
}
function nemaramos () {
    basic.clearScreen()
}
function lekapcs () {
    led.unplot(oszlop, sor)
    basic.pause(100)
}
input.onButtonPressed(Button.A, function () {
    vanaram = false
})
function felkapcs () {
    led.plotBrightness(oszlop, sor, fenyero)
    basic.pause(100)
}
function foldszinfe () {
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
}
input.onButtonPressed(Button.B, function () {
    vanaram = true
})
let fenyero = 0
let fel = false
let folds = false
let kovacsek = false
let sor = 0
let oszlop = 0
let vanaram = false
vanaram = true
basic.forever(function () {
    if (vanaram) {
        aramos()
    } else {
        nemaramos()
    }
})
