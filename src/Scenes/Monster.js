class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.rightHorn = this.add.sprite(this.bodyX + 55, this.bodyY - 60, "monsterParts", "detail_white_horn_small.png");
        my.sprite.leftHorn = this.add.sprite(this.bodyX - 55, this.bodyY - 60, "monsterParts", "detail_white_horn_small.png");
        my.sprite.leftHorn.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 50, this.bodyY + 100, "monsterParts", "leg_greenA.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX - 50, this.bodyY + 100, "monsterParts", "leg_greenA.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.bodyX + 100, this.bodyY + 50, "monsterParts", "arm_greenA.png").setScale(0.8, 0.8);
        my.sprite.leftArm = this.add.sprite(this.bodyX - 100, this.bodyY + 50, "monsterParts", "arm_greenA.png").setScale(0.8, 0.8);
        my.sprite.leftArm.flipX = true;
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.eyeAngry = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "eye_angry_blue.png").setScale(1.5, 1.5);
        my.sprite.eyeAngry.visible = false;
        my.sprite.eyeAngry.flipX = true;
        my.sprite.eyeHappy = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "eye_human_blue.png").setScale(1.5, 1.5);
        my.sprite.mouthSmile = this.add.sprite(this.bodyX, this.bodyY + 55, "monsterParts", "mouth_closed_happy.png");
        my.sprite.mouthAngry = this.add.sprite(this.bodyX, this.bodyY + 55, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouthAngry.visible = false;
        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        sKey.on('down', (key, event) => {
            my.sprite.mouthSmile.visible = true;
            my.sprite.mouthAngry.visible = false;
            my.sprite.eyeHappy.visible = true;
            my.sprite.eyeAngry.visible = false;
        })
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)
        fKey.on('down', (key, event) => {
            my.sprite.mouthSmile.visible = false;
            my.sprite.mouthAngry.visible = true;
            my.sprite.eyeHappy.visible = false;
            my.sprite.eyeAngry.visible = true;
        })
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (this.aKey.isDown){
            for (let part in my.sprite){
                my.sprite[part].x -= 1;
            }
        }
        if (this.dKey.isDown){
            for (let part in my.sprite){
                my.sprite[part].x += 1;
            }
        }
    }
}