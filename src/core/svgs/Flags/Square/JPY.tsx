import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"

export function JPY(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path
        fill="#F5F5F5"
        d="M473.655 88.275H38.345C17.167 88.275 0 105.442 0 126.62v258.76c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V126.62c0-21.178-17.167-38.345-38.345-38.345z"
      />
      <Circle cx={256} cy={255.999} r={97.1} fill="#FF4B55" />
    </Svg>
  )
}
