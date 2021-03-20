import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export function CHF(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path
        fill="#FF4B55"
        d="M473.655 423.724H38.345C17.167 423.724 0 406.557 0 385.379V126.621c0-21.177 17.167-38.345 38.345-38.345h435.31c21.177 0 38.345 17.167 38.345 38.345V385.38c0 21.177-17.167 38.344-38.345 38.344z"
      />
      <Path
        fill="#F5F5F5"
        d="M353.103 220.69H291.31v-61.793a8.829 8.829 0 00-8.828-8.828h-52.966a8.829 8.829 0 00-8.828 8.828v61.793h-61.793a8.829 8.829 0 00-8.828 8.828v52.966a8.829 8.829 0 008.828 8.828h61.793v61.793a8.829 8.829 0 008.828 8.828h52.966a8.829 8.829 0 008.828-8.828V291.31h61.793a8.829 8.829 0 008.828-8.828v-52.966c0-4.874-3.953-8.826-8.828-8.826z"
      />
    </Svg>
  )
}