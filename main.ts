namespace SpriteKind {
    export const playerProjectile = SpriteKind.create()
    export const enemyProjectile = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemyProjectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 200)
    scene.cameraShake(4, 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mainSprite, 0, -100)
    projectile.setKind(SpriteKind.playerProjectile)
})
function FirstLevel () {
    mainSprite = sprites.create(img`
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 9 1 1 1 1 1 1 9 . . . . 
        . . . 9 7 . . 2 2 . . 7 9 . . . 
        . . 9 7 7 . 2 2 2 2 . 7 7 9 . . 
        . 9 7 7 1 2 2 2 2 2 2 1 7 7 9 . 
        9 7 7 1 1 2 2 2 2 2 2 1 1 7 7 9 
        9 7 1 1 1 . 2 2 2 2 . 1 1 1 7 9 
        . . . . 1 . . 2 2 . . 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . 1 . . . 1 1 . . . 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        `, SpriteKind.Player)
    game.showLongText("This is your first mission \\nDestroy 10 of the enemies Spaceships", DialogLayout.Full)
    controller.moveSprite(mainSprite, 100, 100)
    mainSprite.setStayInScreen(true)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, enemyship, 0, 50)
    info.setScore(0)
    info.setLife(3)
    while (true) {
        enemyship = sprites.create(img`
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 . . 5 5 . . 2 2 . . . 
            . . 2 2 2 . 5 5 5 5 . 2 2 2 . . 
            . 2 2 2 2 5 5 5 5 5 5 2 2 2 2 . 
            2 2 2 2 2 . 5 5 5 5 . 2 2 2 2 2 
            2 2 2 2 2 . . 5 5 . . 2 2 2 2 2 
            . . . . 2 2 . 5 5 . 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            `, SpriteKind.Enemy)
        enemyship.y = 0
        enemyship.x = randint(10, scene.screenWidth() - 10)
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, enemyship, 0, 50)
        projectile2.setKind(SpriteKind.enemyProjectile)
        enemyship.setVelocity(0, 20)
        pause(2000)
        if (info.score() >= 10) {
            game.showLongText("Level Complete", DialogLayout.Bottom)
            level += 1
            break;
        }
        if (info.life() <= 0) {
            game.over(false)
            break;
        }
    }
}
sprites.onOverlap(SpriteKind.playerProjectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    sprite.destroy()
    info.changeScoreBy(1)
})
function ZeroLevel () {
    game.showLongText("Welcome Agent, You're duty is to deal with enemies on other planets.\\n you're destination is given through a riddle that you need to solve to keep our identity secret \\n. GOOD LUCK! ", DialogLayout.Full)
    level += 1
    spawnEnemy(level)
}
function spawnEnemy (level: number) {
    if (level == 0) {
        ZeroLevel()
    }
    if (level == 1) {
        FirstLevel()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    info.changeLifeBy(-1)
    info.changeScoreBy(1)
    scene.cameraShake(4, 200)
})
let enemyship: Sprite = null
let projectile2: Sprite = null
let mainSprite: Sprite = null
let projectile: Sprite = null
let level = 0
scene.setBackgroundColor(15)
effects.starField.startScreenEffect()
level = 0
spawnEnemy(level)
