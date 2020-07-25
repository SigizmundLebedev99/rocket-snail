import {StraightLine} from './engine/primitives/Straight-Line'
import { Point } from './engine/primitives/Point'
import { Camera } from './engine/view/Camera';
import './css/style.css';
import { Artist } from './engine/view/Artist';
import { SCREEN_WIDTH, SCREEN_HEIGTH } from './engine/Consts';
import { Vector } from './engine/primitives/Vector';

let canvas = <HTMLCanvasElement>document.getElementById('canvas');
let camera = new Camera();
camera.rotation = 0.1;
canvas.addEventListener('click', (event) => {
    let p1 = camera.ConvertToCamera(new Point(event.x, event.y));
    let p2 = camera.Convert(p1);
    console.log(`mouse : x:${event.x} y:${event.y}, camera: x:${p1.x} y:${p1.y}, back: x:${p2.x} y:${p2.y}`);
});

canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGTH;

let context = <CanvasRenderingContext2D>canvas.getContext('2d');
if(context){
    let artist = new Artist(context, camera);
    artist.DrawLine(new StraightLine(new Point(0,0), new Point(0,1)));
    artist.DrawLine(new StraightLine(new Point(0,0), new Point(1,0)));
}
