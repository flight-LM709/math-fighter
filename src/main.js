import Phaser from 'phaser'
import GameOverScene from './GameOverScene';
import MathFighterScene from './MathFighterScene'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 480,
	height: 640,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
		},
	scene: [MathFighterScene, GameOverScene],
}

export default new Phaser.Game(config)
