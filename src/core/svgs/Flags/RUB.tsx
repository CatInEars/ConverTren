import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

export function RUB(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Circle cx={256} cy={256} r={256} fill="#F0F0F0" />
      <Path
        fill="#0052B4"
        d="M496.077 345.043C506.368 317.31 512 287.314 512 256s-5.632-61.31-15.923-89.043H15.923C5.633 194.69 0 224.686 0 256s5.633 61.31 15.923 89.043L256 367.304l240.077-22.261z"
      />
      <Path
        fill="#D80027"
        d="M256 512c110.071 0 203.906-69.472 240.077-166.957H15.923C52.094 442.528 145.929 512 256 512z"
      />
    </Svg>
  )
}
