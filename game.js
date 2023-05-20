var score = 0;
var bd = false;

class L1 extends Phaser.Scene {
    constructor() {
        super('L1');
    }
    preload()
    {
    	this.load.image("b1","assets/b1.png");
        this.load.image("c1","assets/c1.png");
        
    }
    create() {
        this.add.text(50, 50, "Level 1").setFontSize(50);
        this.circle = this.add.image(1000, 150, 'c1').setScale(0.5);

        this.balloon = this.physics.add.sprite(1000,1200,"b1");
        this.balloon.setScale(0.5);
        this.balloon.setOrigin(0.5, 0.25);
        this.balloon.body.setGravity(0,-300);

        this.input.on('pointerdown', () => {
            if(bd)
            {
                this.scene.start('S1');
            }
        });

        this.input.once('pointerdown', () => {
            this.circle.destroy();
            if(this.balloon.y < 250 && this.balloon.y > 50)
            {
                this.balloon.destroy();
                bd = true;
                score += 1;
            }
        });

       

    }
    update() {
        if(this.balloon.y < 0)
        {
            bd = true;
        }
    }
}

class S1 extends Phaser.Scene {
    constructor() {
        super('S1');
    }
    preload(){}
    create() {
        
        this.add.text(50, 50, "Level 1 Summary").setFontSize(50);
        this.add.text(700, 300, "Score: "+score).setFontSize(100);
        this.add.text(700, 900, "Click to next level").setFontSize(50);
        
        bd = false;
        this.input.on('pointerdown', () => this.scene.start('L2'));
    }
    update() {}
}

class L2 extends Phaser.Scene {
    constructor() {
        super('L2');
    }
    preload()
    {
    	this.load.image("b2","assets/b2.png");
        this.load.image("c2","assets/c2.png");
        
    }
    create() {
        this.add.text(50, 50, "Level 2").setFontSize(50);
        this.circle = this.add.image(500, 300, 'c2').setScale(0.5);

        this.balloon = this.physics.add.sprite(500,1200,"b2");
        this.balloon.setScale(0.5);
        this.balloon.setOrigin(0.5, 0.25);
        this.balloon.body.setGravity(0,-500);

        this.input.on('pointerdown', () => {
            if(bd)
            {
                this.scene.start('S2');
            }
        });

        this.input.once('pointerdown', () => {
            this.circle.destroy();
            if(this.balloon.y < 400 && this.balloon.y > 200)
            {
                this.balloon.destroy();
                bd = true;
                score += 1;
            }
        });

       

    }
    update() {
        if(this.balloon.y < 0)
        {
            bd = true;
        }
    }
}

class S2 extends Phaser.Scene {
    constructor() {
        super('S2');
    }
    preload(){}
    create() {
        
        this.add.text(50, 50, "Level 2 Summary").setFontSize(50);
        this.add.text(700, 300, "Score: "+score).setFontSize(100);
        this.add.text(700, 900, "Click to next level").setFontSize(50);

        bd = false;
        this.input.on('pointerdown', () => this.scene.start('L3'));
    }
    update() {}
}

class L3 extends Phaser.Scene {
    constructor() {
        super('L3');
    }
    preload()
    {
    	this.load.image("b3","assets/b3.png");
        this.load.image("c3","assets/c3.png");
        
    }
    create() {
        this.add.text(50, 50, "Level 3").setFontSize(50);
        this.circle = this.add.image(1500, 500, 'c3').setScale(0.5);

        this.balloon = this.physics.add.sprite(1500,1200,"b3");
        this.balloon.setScale(0.5);
        this.balloon.setOrigin(0.5, 0.25);
        this.balloon.body.setGravity(0,-700);

        this.input.on('pointerdown', () => {
            if(bd)
            {
                this.scene.start('S3');
            }
        });

        this.input.once('pointerdown', () => {
            this.circle.destroy();
            if(this.balloon.y < 600 && this.balloon.y > 400)
            {
                this.balloon.destroy();
                bd = true;
                score += 1;
            }
        });

       

    }
    update() {
        if(this.balloon.y < 0)
        {
            bd = true;
        }
    }
}

class S3 extends Phaser.Scene {
    constructor() {
        super('S3');
    }
    preload(){}
    create() {
        
        this.add.text(50, 50, "Level 3 Summary").setFontSize(50);
        this.add.text(700, 300, "Score: "+score).setFontSize(100);
        this.add.text(700, 900, "Click to restart").setFontSize(50);

        if(score == 3)
        {
            this.add.text(400, 400, "You destroy all balloons!").setFontSize(80);
        }
        else
        {
            this.add.text(250, 400, "You do not destroy all balloons!").setFontSize(80);   
        }

        score = 0;
        bd = false;
        this.input.on('pointerdown', () => this.scene.start('L0'));
    }
    update() {}
}

class L0 extends Phaser.Scene {
    constructor() {
        super('L0')
    }
    create() {
        this.add.text(50,50, "Balloon Shooter").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('L1'));
        });
    }
}

const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    physics: {
        default: 'arcade',
        arcade: { debug: true }
    },
    scene: [L0, L1, S1, L2, S2, L3, S3]
};

const game = new Phaser.Game(config);