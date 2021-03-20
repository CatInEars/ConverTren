import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export function UAH(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path
        fill="#FFE15A"
        d="M0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V256H0v129.379z"
      />
      <Path
        fill="#4173CD"
        d="M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621V256h512V126.621c0-21.178-17.167-38.345-38.345-38.345z"
      />
    </Svg>
  )
}
