import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from './Size.js';

// World background
export const WORLD_WIDTH = 1024;
export const WORLD_HEIGHT = 1080;
export const WORLD_CENTER_X = SIZE_WIN_WIDTH / 2;
export const WORLD_CENTER_Y = SIZE_WIN_HEIGHT / 2;
export const WORLD_LEFT = WORLD_CENTER_X - (WORLD_WIDTH / 2);
export const WORLD_RIGHT = WORLD_LEFT + WORLD_WIDTH;
export const WORLD_TOP = WORLD_CENTER_Y - (WORLD_HEIGHT / 2);
export const WORLD_BOTTOM = WORLD_TOP + WORLD_HEIGHT;
export const WORLD_BG = 0x333333;

// Paddle
export const PADDLE_YOFFSET = -20;
export const PADDLE_WIDTH = 140;
export const PADDLE_HEIGHT = 20;
export const PADDLE_COLOR = 0xffffff;

// Ball
export const BALL_RADIUS = 10;
export const BALL_COLOR = 0xffcc00;
export const BALL_SPEED = 8;

// Bricks background
export const BRICKSBG_WIDTH = 1024 - 240;
export const BRICKSBG_HEIGHT = BRICKSBG_WIDTH;
export const BRICKSBG_CENTER_X = WORLD_CENTER_X;
export const BRICKSBG_CENTER_Y = WORLD_TOP + (BRICKSBG_HEIGHT / 2) + 60;

// Brick
export const BRICK_COLOR = 0x111111;
export const BRICK_BOARD_COLOR = 0x888888;
export const BRICK_BOARD_THICKNESS = 3;
