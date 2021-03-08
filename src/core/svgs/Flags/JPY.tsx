import * as React from "react"
import Svg, { SvgProps, Circle } from "react-native-svg"

export function JPY(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <Circle cx={256} cy={256} r={256} fill="#F0F0F0" />
      <Circle cx={256} cy={256} r={111.304} fill="#D80027" />
    </Svg>
  )
}
