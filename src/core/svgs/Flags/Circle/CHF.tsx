import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"

export function CHF(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Circle cx={256} cy={256} r={256} fill="#D80027" />
      <Path
        fill="#F0F0F0"
        d="M389.565 211.479h-89.043v-89.044h-89.044v89.044h-89.043v89.043h89.043v89.043h89.044v-89.043h89.043z"
      />
    </Svg>
  )
}
