function Morse_R () {
    Morce_Point()
    Morse_Tiret()
    Morce_Point()
}
function O () {
    for (let index = 0; index < 3; index++) {
        Morse_Tiret()
    }
}
function T () {
    Morse_Tiret()
}
function Morce_I () {
    for (let index = 0; index < 2; index++) {
        Morce_Point()
    }
}
function Morse_C () {
    for (let index = 0; index < 2; index++) {
        Morse_Tiret()
        Morce_Point()
    }
}
function Morse_Tiret () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(50)
}
function Espace () {
    basic.clearScreen()
    basic.pause(500)
}
function B () {
    Morse_Tiret()
    for (let index = 0; index < 3; index++) {
        Morce_Point()
    }
}
function Fin_mot () {
    basic.clearScreen()
    basic.pause(1000)
}
function Morce_Point () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(50)
    basic.clearScreen()
    basic.pause(50)
}
function Morse_M () {
    for (let index = 0; index < 2; index++) {
        Morse_Tiret()
    }
}
Morse_M()
Espace()
Morce_I()
Espace()
Morse_C()
Espace()
Morse_R()
Espace()
O()
Espace()
B()
Espace()
Morce_I()
Espace()
T()
Fin_mot()
basic.forever(function () {
	
})
