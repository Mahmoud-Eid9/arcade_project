namespace SpriteKind {
    export const playerProjectile = SpriteKind.create()
    export const enemyProjectile = SpriteKind.create()
    export const ally = SpriteKind.create()
    export const Boss = SpriteKind.create()
}
function LevelThree () {
    canShoot = true
    game.showLongText("You got 20 Seconds. \\nDestroy as many enemy ships as you can", DialogLayout.Center)
    game.showLongText("Get Ready!", DialogLayout.Center)
    pause(1000)
    for (let index = 0; index < 20; index++) {
        enemyship = sprites.create(img`
            . . 3 3 3 2 2 2 2 2 2 3 3 3 . . 
            . . . 3 3 3 3 2 2 3 3 3 3 . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . 3 2 2 2 2 2 2 2 3 . . . 
            . . . 3 2 . . 5 5 . . 2 2 3 . . 
            . . 3 2 2 . 5 5 5 5 . 2 2 2 3 . 
            . 3 2 2 2 5 5 5 5 5 5 2 2 2 2 3 
            3 2 2 2 2 . 5 5 5 5 . 2 2 2 2 3 
            3 2 2 2 2 . . 5 5 . . 2 2 2 2 3 
            . . . . 2 2 . 5 5 . 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
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
        pause(1000)
        if (info.life() <= 0) {
            game.over(false)
            break;
        }
    }
    game.showLongText("Level Complete", DialogLayout.Bottom)
    level += 1
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemyProjectile)
    LevelFour()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemyProjectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 200)
    scene.cameraShake(4, 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (canShoot) {
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
        music.pewPew.play()
        projectile.setKind(SpriteKind.playerProjectile)
    }
})
function LevelFour () {
    canShoot = false
    agent = sprites.create(img`
        . . . 7 5 5 5 5 5 5 5 5 7 . . . 
        . . . 7 5 5 5 5 5 5 5 5 7 . . . 
        . . . 7 5 5 5 5 5 5 5 5 7 . . . 
        . . . 7 7 5 5 5 5 5 5 7 7 . . . 
        . . . . 7 7 5 5 5 5 7 7 . . . . 
        9 9 . . . 7 7 5 5 7 7 . . . 9 9 
        9 9 9 . . . 7 7 7 7 . . . 9 9 9 
        9 9 9 9 8 . . 7 7 . . 8 9 9 9 9 
        9 9 9 9 8 9 9 2 2 9 9 8 9 9 9 9 
        . 9 9 9 8 9 9 2 2 9 9 8 9 9 9 . 
        . . 9 9 8 9 9 2 2 9 9 8 9 9 . . 
        . . . 9 8 9 9 2 2 9 9 8 9 . . . 
        . . . . 8 9 9 2 2 9 9 8 . . . . 
        . . . . . 9 9 2 2 9 9 . . . . . 
        . . . . . . 9 2 2 9 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        `, SpriteKind.ally)
    agent.setPosition(scene.screenWidth() / 2, -10)
    agent.setVelocity(0, 15)
    pause(3000)
    agent.setVelocity(0, 0)
    pause(500)
    story.spriteSayText(agent, "What a coincidence")
    story.spriteSayText(agent, "Have you been doing work since I left you?")
    story.spriteSayText(mainSprite, "Yeah, I just finished one")
    story.spriteSayText(agent, "you're probably really good at what you do")
    story.spriteSayText(mainSprite, "I do my best")
    story.spriteSayText(agent, "I'm gonna go now")
    story.spriteSayText(agent, "it was nice to meet you again")
    story.spriteSayText(mainSprite, "it was nice meeting you to, Bye")
    story.spriteSayText(agent, "one more thing")
    story.spriteSayText(mainSprite, "What is it?")
    game.showLongText("Pay attention he will probably give you a riddle to receive your next destination", DialogLayout.Bottom)
    while (true) {
        story.spriteSayText(agent, "I'm a giant gas planet out in space")
        story.spriteSayText(agent, "There are bands or stripes all over my face")
        story.spriteSayText(agent, "When it comes to size, I'm number two")
        story.showPlayerChoices("Uranus ", "Neptune", "Saturn")
        answer = story.getLastAnswer()
        if (answer == "Saturn") {
            game.showLongText("Great Job, now you know your next location.\\nGOOD LUCK!", DialogLayout.Bottom)
            agent.setVelocity(0, -15)
            pause(3000)
            agent.destroy()
            break;
        } else {
            info.changeLifeBy(-1)
            game.showLongText("Wrong answer\\nYou lost 1 Life\\nTry Again!", DialogLayout.Bottom)
            if (info.life() <= 0) {
                break;
            }
        }
    }
    LevelFive()
}
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
    game.showLongText("This is your first mission \\nDestroy 10 of the enemies Spaceships and Escape to meet with our agent", DialogLayout.Center)
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
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.enemyProjectile)
            LevelTwo()
            break;
        }
        if (info.life() <= 0) {
            game.over(false)
            break;
        }
    }
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    Boss.setVelocity(0, 0)
    Boss.destroy(effects.fire, 4000)
    Boss.setImage(assets.image`drop4`)
    music.bigCrash.play()
    music.bigCrash.play()
    music.bigCrash.play()
    scene.cameraShake(4, 4000)
    pause(5000)
    game.over(true)
})
sprites.onOverlap(SpriteKind.playerProjectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    sprite.destroy()
    info.changeScoreBy(1)
    music.smallCrash.play()
    otherSprite.setImage(assets.image`explosion3`)
})
function ZeroLevel () {
    game.showLongText("Welcome To Space Invaders", DialogLayout.Center)
    game.showLongText("You're duty is to deal with enemies on other planets. Avoid Collision with enemy ships and missile  and hit them with yours using the \"A\" button  .\\n you're destination is given through a riddle that you need to solve to keep our identity secret \\n. GOOD LUCK! ", DialogLayout.Center)
    level += 1
    spawnEnemy(level)
}
function LevelTwo () {
    canShoot = false
    agent = sprites.create(img`
        . . . 7 5 5 5 5 5 5 5 5 7 . . . 
        . . . 7 5 5 5 5 5 5 5 5 7 . . . 
        . . . 7 5 5 5 5 5 5 5 5 7 . . . 
        . . . 7 7 5 5 5 5 5 5 7 7 . . . 
        . . . . 7 7 5 5 5 5 7 7 . . . . 
        9 9 . . . 7 7 5 5 7 7 . . . 9 9 
        9 9 9 . . . 7 7 7 7 . . . 9 9 9 
        9 9 9 9 8 . . 7 7 . . 8 9 9 9 9 
        9 9 9 9 8 9 9 2 2 9 9 8 9 9 9 9 
        . 9 9 9 8 9 9 2 2 9 9 8 9 9 9 . 
        . . 9 9 8 9 9 2 2 9 9 8 9 9 . . 
        . . . 9 8 9 9 2 2 9 9 8 9 . . . 
        . . . . 8 9 9 2 2 9 9 8 . . . . 
        . . . . . 9 9 2 2 9 9 . . . . . 
        . . . . . . 9 2 2 9 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        `, SpriteKind.ally)
    agent.setPosition(scene.screenWidth() / 2, -10)
    agent.setVelocity(0, 15)
    pause(3000)
    agent.setVelocity(0, 0)
    pause(500)
    story.spriteSayText(agent, "Hi, Nice to meet You")
    story.spriteSayText(mainSprite, "Hey, Nice to meet You to")
    story.spriteSayText(agent, "it's quiet in here")
    story.spriteSayText(agent, "did you have work to do here ?")
    story.spriteSayText(mainSprite, "Yeah, I was doing something but I'm done now")
    story.spriteSayText(agent, "It seems you did Great!")
    story.spriteSayText(mainSprite, "Thanks, it was some hard work but it's over now")
    story.spriteSayText(agent, "Before I leave")
    story.spriteSayText(agent, "I have something to say")
    story.spriteSayText(mainSprite, "I'm listening")
    game.showLongText("Pay attention he will probably give you a riddle to receive your next destination", DialogLayout.Bottom)
    while (true) {
        story.spriteSayText(agent, "I'm the planet that everyone calls “Red,”")
        story.spriteSayText(agent, "But really my soil is rust-colored instead.")
        story.spriteSayText(agent, "Look up and you may spot me in the sky,")
        story.spriteSayText(agent, "I'm the orange-colored dot, way up high.")
        story.showPlayerChoices("Venus", "Mars", "Jupiter")
        answer = story.getLastAnswer()
        if (answer == "Mars") {
            game.showLongText("Great Job, now you know your next location.\\nGOOD LUCK!", DialogLayout.Bottom)
            agent.setVelocity(0, -15)
            pause(3000)
            agent.destroy()
            break;
        } else {
            info.changeLifeBy(-1)
            game.showLongText("Wrong answer\\nYou lost 1 Life\\nTry Again!", DialogLayout.Bottom)
            if (info.life() <= 0) {
                break;
            }
        }
    }
    LevelThree()
}
sprites.onOverlap(SpriteKind.playerProjectile, SpriteKind.Boss, function (sprite, otherSprite) {
    statusbar.value += -3
    sprite.setVelocity(0, 0)
    sprite.destroy(effects.fire, 2000)
    sprite.setImage(assets.image`explosion3`)
    music.smallCrash.play()
})
function LevelFive () {
    canShoot = true
    game.showLongText("You got 20 Seconds. \\nDestroy as many enemy ships as you can", DialogLayout.Center)
    game.showLongText("Get Ready!", DialogLayout.Center)
    pause(1000)
    for (let index = 0; index < 30; index++) {
        enemyship = sprites.create(img`
            . . 3 3 3 2 2 2 2 2 2 3 3 3 . . 
            . . . 3 3 3 3 2 2 3 3 3 3 . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . 3 2 2 2 2 2 2 2 3 . . . 
            . . . 3 2 . . 5 5 . . 2 2 3 . . 
            . . 3 2 2 . 5 5 5 5 . 2 2 2 3 . 
            . 3 2 2 2 5 5 5 5 5 5 2 2 2 2 3 
            3 2 2 2 2 . 5 5 5 5 . 2 2 2 2 3 
            3 2 2 2 2 . . 5 5 . . 2 2 2 2 3 
            . . . . 2 2 . 5 5 . 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
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
        pause(500)
        if (info.life() <= 0) {
            game.over(false)
            break;
        }
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.fire, 500)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemyProjectile)
    pause(1000)
    scene.cameraShake(4, 8000)
    story.spriteSayText(mainSprite, "WHAT IS HAPPENING!!!")
    canShoot = false
    Boss = sprites.create(img`
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 . 6 . . . 6 6 . . . 6 . 6 . 
        . 6 . . . 6 6 6 6 6 6 . . . 6 . 
        . . . . 6 . . 5 5 . . 6 . . . . 
        2 4 6 6 6 . 5 5 5 5 . 6 6 6 4 2 
        2 4 4 6 6 5 5 5 5 5 5 6 6 4 4 2 
        . 2 4 4 6 5 5 5 5 5 5 6 4 4 2 . 
        . . 2 4 4 . 5 5 5 5 . 4 4 2 . . 
        . . . 2 4 . . 5 5 . . 4 2 . . . 
        . . . . 2 6 6 6 6 6 6 2 . . . . 
        . . . . . 6 6 6 6 6 6 . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 . 5 5 . 5 . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        `, SpriteKind.Boss)
    Boss.setScale(2, ScaleAnchor.Middle)
    Boss.setPosition(scene.screenWidth() / 2, -10)
    Boss.setVelocity(0, 15)
    pause(3000)
    Boss.setVelocity(0, 0)
    story.spriteSayText(Boss, "You have been causing me a lot of trouble")
    story.spriteSayText(Boss, "and I decided to deal with you myself")
    story.spriteSayText(mainSprite, "I'm flattered")
    game.showLongText("Final Level\\nDefeat The Boss", DialogLayout.Center)
    statusbar = statusbars.create(40, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(Boss)
    Boss.setStayInScreen(true)
    Boss.setBounceOnWall(true)
    Boss.setVelocity(20, 0)
    canShoot = true
    while (true) {
        projectile3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 2 2 . . . . 
            . . . . . . . . . 2 2 2 . . . . 
            . . . . . . . . 2 2 2 . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . 2 2 2 2 . . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . 2 2 2 2 2 . . . . . . . . . 
            . . 2 2 2 2 . . . . . . . . . . 
            . . 2 2 2 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Boss, -50, 50)
        projectile3.setKind(SpriteKind.enemyProjectile)
        projectile4 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Boss, 0, 50)
        projectile4.setKind(SpriteKind.enemyProjectile)
        projectile5 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 . . . . . . . . . . 
            . . . . 2 2 2 . . . . . . . . . 
            . . . . . 2 2 2 . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . . 2 2 2 2 . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . 2 2 2 2 2 . . 
            . . . . . . . . . . 2 2 2 2 . . 
            . . . . . . . . . . . 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Boss, 50, 50)
        projectile5.setKind(SpriteKind.enemyProjectile)
        pause(2000)
        if (statusbar.value <= 0) {
            break;
        }
    }
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
    otherSprite.setImage(assets.image`explosion3`)
    info.changeLifeBy(-1)
    info.changeScoreBy(1)
    scene.cameraShake(4, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    mainSprite.destroy(effects.fire, 2000)
    scene.cameraShake(4, 2000)
    Boss.setImage(assets.image`explosion3`)
    pause(500)
    Boss.setImage(assets.image`drop4`)
    pause(3000)
    game.over(false)
})
let projectile5: Sprite = null
let projectile4: Sprite = null
let projectile3: Sprite = null
let statusbar: StatusBarSprite = null
let Boss: Sprite = null
let answer = ""
let agent: Sprite = null
let mainSprite: Sprite = null
let projectile: Sprite = null
let projectile2: Sprite = null
let enemyship: Sprite = null
let level = 0
let canShoot = false
canShoot = true
scene.setBackgroundColor(15)
effects.starField.startScreenEffect()
level = 0
music.beamUp.play()
spawnEnemy(level)
game.onUpdate(function () {
    if (Boss.isHittingTile(CollisionDirection.Left)) {
        Boss.vx = 20
    }
    if (Boss.isHittingTile(CollisionDirection.Right)) {
        Boss.vx = -20
    }
})
