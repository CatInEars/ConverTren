export function getRandomWithStep(min: number, max: number, step: number) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num - (num % 10);
}