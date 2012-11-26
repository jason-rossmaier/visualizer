// Galapagos Visualizer Plugin
// Require the visualizer core to work
$(document).ready(function() {
	Plugins["Galapagos"] = new function() {
		
		this.drawnBackground = false;
		this.name = "Galapagos";

		this.initialize = function(gamelog, renderer) {
			// initialize stuff here, good ideas:
			// * set the dimensions of the renderer (map width and height)
			// * add the layers you'll want in the renderer, in order
			// * initialize your data structures

			// setup the dimensions of the renderer to be 8 x 8
			renderer.setDimensions(gamelog.turns[0].mapWidth, gamelog.turns[0].mapHeight);

			// give us 2 layers, the background and units layer
			renderer.addLayer("background");
			renderer.addLayer("units");
		}

		// the textures this plugin will use
		this.textures = [
			"plant",
			"grass",
			"dirt"
		];

		this.parse = function(gamelog) {
			// here you will want to iterate through the gamelog and build data structures by parsing the gamelog
		}

		this.draw = function(renderer, time) {
			// Do drawing here

			// draw the background once
			if(!this.drawnBackground) {
				for(var x = 0; x < renderer.width; x++) {
					for(var y = 0; y < renderer.height; y++) {
						renderer.drawTexture("grass", "background", x, y, 1, 1);
					}
				}

				this.drawnBackground = true;
			}

			// draw fake plants
			renderer.clearLayer("units");
			for(var i = 0; i < renderer.height; i++) {
				renderer.drawTexture("plant", "units", i + (time.turn+time.t)%renderer.height, i, 1, 1);
			}
		}

		/*function run() {
		drawQuad(0,0,1,1,0,0,255);

		// draw all the tiles
		for(x = 0; x < mapWidth; x++) {
			for(y = 0; y < mapHeight; y++) {
				//drawQuad(x,y,1,1,0,166,0);
				drawTexture("grass",x,y,1,1);
			}
		}
		
		// for each plant in the current turn
		for(i in gamelog.turns[turn].Plants) {
			var plant = gamelog.turns[turn].Plants[i];
			//drawQuad(plant.x, plant.y, 1, 1, 32, 255, 32);
			drawTexture("plants", plant.x, plant.y, 1, 1, 15);
			drawTexture("plants", plant.x, plant.y, 1, 1, plant.size);
		}

		// for each plant in the current turn
		for(i in gamelog.turns[turn].Creatures) {
			var creature = gamelog.turns[turn].Creatures[i];
			drawQuad(creature.x, creature.y, 1, 1, creature.owner ? 255 : 32, 32, creature.owner ? 32 : 255);
			//drawTexture("creature_legs_back", creature.x, creature.y, 1, 1, creature.speed-1);
			//drawTexture("creature_tails", creature.x, creature.y, 1, 1, creature.energy-1);
			drawTexture("creature_misc", creature.x, creature.y, 1, 1, 2);
			drawTexture("creature_misc", creature.x, creature.y, 1, 1, 0);
			drawTexture("creature_misc", creature.x, creature.y, 1, 1, 1);
			//drawTexture("creature_legs_front", creature.x, creature.y, 1, 1, creature.speed-1);
			//drawTexture("creature_armors", creature.x, creature.y, 1, 1, creature.defense-1);
			//drawTexture("creature_spikes", creature.x, creature.y, 1, 1, creature.defense-1);
			//drawTexture("creature_jaws", creature.x, creature.y, 1, 1, creature.carnivorism-1);
			//drawTexture("creature_teeth", creature.x, creature.y, 1, 1, creature.carnivorism-1);
			//drawTexture("creature_eyes", creature.x, creature.y, 1, 1, creature.herbivorism-1);
		}
	}*/

	}
});

