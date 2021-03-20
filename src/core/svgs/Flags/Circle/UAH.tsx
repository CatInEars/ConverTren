import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"

export function UAH(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Circle cx={256} cy={256} r={256} fill="#FFDA44" />
      <Path
        fill="#338AF3"
        d="M0 256C0 114.616 114.616 0 256 0s256 114.616 256 256"
      />
    </Svg>
  )
}
