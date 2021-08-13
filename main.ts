controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . 1 1 1 1 1 1 1 1 1 . . . . .
        . 1 1 f f f f f f f 1 1 1 . . .
        . 1 f f 2 2 2 2 2 f f f 1 1 . .
        . 1 f f 2 2 2 2 2 f f f 1 1 . .
        . 1 1 f f f f f f f 1 1 1 . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `,ship, 200, 0)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, ship, 400, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (enemy, projectile) {
	info.changeScoreBy(1)
    enemy.destroy(effects.fire, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player: Sprite, enemy: Sprite) {
    info.changeLifeBy(-1)
    enemy.destroy(effects.fire, 200)
})
let enemy: Sprite = null
scene.setBackgroundColor(0)
let ship = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . 1 1 . . . 1 1 1 . . . . . . . 
    . 1 1 . . 1 1 2 1 . . . . . . . 
    . 1 1 1 1 1 2 2 1 1 . . . . . . 
    . 1 1 1 2 2 2 8 2 1 1 1 1 1 1 . 
    . 1 2 2 2 2 8 f 8 2 2 2 2 1 1 . 
    . 1 2 2 2 2 2 8 2 2 2 2 2 1 1 . 
    . 1 1 1 1 1 2 2 2 1 1 1 1 1 1 . 
    . . . . . 1 1 2 2 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
ship.setPosition(10, 60)
controller.moveSprite(ship, 0, 200)
info.setLife(5)
ship.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(1500, function () {
    enemy = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . c c c c . . . .
        . . . . . . c c d d d d c . . .
        . . . . . c c c c c c d c . . .
        . . . . c c 4 4 4 4 d c c . . .
        . . . c 4 d 4 4 4 4 4 1 c . c c
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f
        . f 4 4 4 4 1 c 4 f 4 d f f f f
        . . f f 4 d 4 4 f f 4 c f c . .
        . . . . f f 4 4 4 4 c d b c . .
        . . . . . . f f f f d d d c . .
        . . . . . . . . . . c c c . . .
    `, SpriteKind.Enemy)
    enemy.setPosition(160, randint(0, 120))
    enemy.setVelocity(-randint(100, 200), 0)
})
info.setScore(0)