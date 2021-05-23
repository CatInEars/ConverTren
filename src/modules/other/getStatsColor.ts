export const BRILIANT_COLOR = '#37b2f7';
export const GOOD_COLOR = '#0d9f0b';
export const OKAY_COLOR = '#fb9f35';
export const BAD_COLOR = '#a63030';

export function getStatsColor(value: number) {
  if (value >= 98) return BRILIANT_COLOR;
  if (value > 80) return GOOD_COLOR;
  if (value > 60) return OKAY_COLOR;
  return BAD_COLOR;
}