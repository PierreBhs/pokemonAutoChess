import { GameObjects } from "phaser";
import Button from "./button";
import SynergyDetail from "./synergy-detail";

export default class SynergyContainer extends Button {
  constructor(scene, x, y, type) {
    super(scene, x, y, 130, 62);
    this.textStyle = {
        fontSize: "30px",
        fontFamily: "Verdana",
        color: "white",
        align: "center"
      };

    this.typeColor = {
        NORMAL: 0x6d7050,
        GRASS: 0x395b2a,
        FIRE: 0x8f4b20,
        WATER: 0x38455f,
        ELECTRIC: 0x7a681f,
        FIGHTING: 0x521816,
        PSYCHIC: 0x672439,
        DARK: 0x0a0907,
        METAL: 0x4c4c52,
        GROUND: 0x5f5331,
        POISON: 0x4b2247,
        DRAGON: 0x353055,
        FIELD: 0x516d6b,
        MONSTER: 0x07210f,
        HUMAN: 0x000000,
        AQUATIC: 0x002c46,
        BUG: 0x5f6a24,
        FLYING: 0x3b3647,
        FLORA: 0x180d1c,
        MINERAL: 0x3f3817,
        AMORPH: 0x2d253b,
        FAIRY: 0x82525b
    };

    this.type = type;
    this.color = this.typeColor[type];
    this.background = new GameObjects.Rectangle(scene,0,0,130,62, this.color).setVisible(false);
    this.add(this.background);
    this.synergyCount = new GameObjects.Text(scene, 20, -20,"", this.textStyle);
    this.add(this.synergyCount);
    this.add(new GameObjects.Image(scene, -30, 0, "types", type));
    this.detail = new SynergyDetail(scene,-250,0, type, this.color);
    this.add(this.detail);
   }

    updateSynergy(value){
        if(value == 0){
            this.background.setVisible(false);
            this.synergyCount.setText("");
        }
        else{
            this.background.setVisible(true);
            this.synergyCount.setText(value);
        }
    }

    enterButtonHoverState() {
      this.detail.setScale(1,1);
    }
  
    enterButtonRestState() {
      this.detail.setScale(0,0);
    }
  
    enterButtonActiveState() {
    }

}