import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export function RUB(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path
        fill="#F5F5F5"
        d="M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621v73.471h512v-73.471c0-21.178-17.167-38.345-38.345-38.345z"
      />
      <Path
        fill="#FF4B55"
        d="M0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345v-73.471H0v73.471z"
      />
      <Path fill="#41479B" d="M0 200.09h512V311.9H0z" />
    </Svg>
  )
}
