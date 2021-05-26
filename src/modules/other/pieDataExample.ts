import { BAD_COLOR, BRILIANT_COLOR, GOOD_COLOR, OKAY_COLOR } from "./getStatsColor";

export const pieDataExample: IPieData[] = [
  {
    value: 0,
    svg: {
        fill: BRILIANT_COLOR
    },
    key: `pie-brilliant`,
    accuracy: '98-100%'
  },
  {
    value: 0,
    svg: {
        fill: GOOD_COLOR
    },
    key: `pie-good`,
    accuracy: '80-98%'
  },
  {
    value: 0,
    svg: {
        fill: OKAY_COLOR
    },
    key: `pie-okay`,
    accuracy: '60-80%'
  },
  {
    value: 0,
    svg: {
        fill: BAD_COLOR
    },
    key: `pie-bad`,
    accuracy: '<60%'
  }
]