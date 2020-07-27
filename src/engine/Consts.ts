import { Point } from "./primitives/Point";

///
/// Temporary solution
///

export const SCREEN_WIDTH = document.body.clientWidth;
export const SCREEN_HEIGTH = screen.availHeight;

export const LEFT_TOP = new Point(0,0);
export const LEFT_BOTTOM = new Point(0, SCREEN_HEIGTH);
export const RIGH_TOP = new Point(SCREEN_WIDTH, 0);
export const RIGHT_BOTTOM = new Point(SCREEN_WIDTH, SCREEN_HEIGTH);

// count of cells in scren width;
export const SCALE = 45;

let canvas = <HTMLCanvasElement>document.getElementById('canvas');
canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGTH;

export const CANVAS = canvas;
export const CONTEXT = <CanvasRenderingContext2D>canvas.getContext('2d');