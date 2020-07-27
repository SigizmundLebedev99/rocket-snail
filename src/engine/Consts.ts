import { Point } from "./primitives/Point";

export const SCREEN_WIDTH = document.body.clientWidth;
export const SCREEN_HEIGTH = window.screen.availHeight - 30;

export const LEFT_TOP = new Point(0,0);
export const LEFT_BOTTOM = new Point(0, SCREEN_HEIGTH);
export const RIGH_TOP = new Point(SCREEN_WIDTH, 0);
export const RIGHT_BOTTOM = new Point(SCREEN_WIDTH, SCREEN_HEIGTH);

let canvas = <HTMLCanvasElement>document.getElementById('canvas');
canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGTH;
export const CONTEXT = <CanvasRenderingContext2D>canvas.getContext('2d');