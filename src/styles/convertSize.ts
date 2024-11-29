const BASE_SCREEN_WIDTH = 390;
const BASE_SCREEN_HEIGHT = 844;

export function convertToViewportWidth(px: number) {
  return `${(px / BASE_SCREEN_WIDTH) * 100}dvw`;
}

export function convertToViewportHeight(px: number) {
  return `${(px / BASE_SCREEN_HEIGHT) * 100}dvh`;
}
