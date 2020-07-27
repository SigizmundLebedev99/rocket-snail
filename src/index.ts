import {StraightLine} from './engine/primitives/Straight-Line'
import { Point } from './engine/primitives/Point'
import { Camera } from './engine/map/Camera';
import './css/style.css';
import { Artist } from './engine/view/Artist';
import { SCREEN_WIDTH, SCREEN_HEIGTH } from './engine/Consts';
import { Vector } from './engine/primitives/Vector';
import { Label } from './engine/primitives/Label';
import { Section } from './engine/primitives/Section';

let canvas = <HTMLCanvasElement>document.getElementById('canvas');
let camera = new Camera();
camera.RelationX = 45;
camera.RelationY = 45;
canvas.addEventListener('click', (event) => {
    let p1 = camera.ConvertToCamera(new Point(event.x, event.y));
    let p2 = camera.Convert(p1);
    console.log(`mouse : x:${event.x} y:${event.y}, camera: x:${p1.x} y:${p1.y}, back: x:${p2.x} y:${p2.y}`);
});

canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGTH;

let context = <CanvasRenderingContext2D>canvas.getContext('2d');
let artist = new Artist(context, camera);
let transition = 0;
setInterval(()=>{
    transition += 0.01;
    camera.transition = new Vector(100*Math.sin(transition), -100*Math.cos(transition));
    camera.rotation += 0.001;
    artist.Clear();
    context.strokeStyle = "red";
    artist.DrawLine(new StraightLine(new Point(0,0), new Point(1,0)));
    artist.DrawLine(new StraightLine(new Point(0,0), new Point(0,1)));
    artist.DrawSection(new Section(new Point(2,0), new Point(0,2)));
    artist.DrawSection(new Section(new Point(-2,0), new Point(0,2)));
    artist.DrawSection(new Section(new Point(-2,0), new Point(0,-2)));
    artist.DrawSection(new Section(new Point(2,0), new Point(0,-2)));
    context.strokeStyle = 'black';
    for(var i = 1; i < camera.scale.x; i ++){
        artist.DrawPoint(new Point(i,i));
        artist.DrawPoint(new Point(-i,i));
        artist.DrawPoint(new Point(i,-i));
        artist.DrawPoint(new Point(-i,-i));
        artist.DrawLine(new StraightLine(new Point(i,0), new Point(i,1)));
        artist.DrawLine(new StraightLine(new Point(-i,0), new Point(-i,1)));
        artist.DrawLine(new StraightLine(new Point(0,i), new Point(1,i)));
        artist.DrawLine(new StraightLine(new Point(0,-i), new Point(1,-i)));
    }
}, 10);

