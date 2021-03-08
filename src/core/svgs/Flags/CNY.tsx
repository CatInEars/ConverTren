import * as React from "react"
import Svg, { SvgProps, Path, G, Circle } from "react-native-svg"

export function CNY(props: SvgProps) {
  return (
    <Svg
      viewBox="-49 141 512 512"
      {...props}
    >
      <Circle cx={207} cy={397} r={256} fill="#D80027" />
      <G fill="#FFDA44">
        <Path d="M91.1 296.8l22.1 68h71.5l-57.8 42.1 22.1 68-57.9-42-57.9 42 22.2-68-57.9-42.1H69zM254.5 537.5l-16.9-20.8-25 9.7 14.5-22.5-16.9-20.9 25.9 6.9 14.6-22.5 1.4 26.8 26 6.9-25.1 9.6zM288.1 476.5l8-25.6-21.9-15.5 26.8-.4 7.9-25.6 8.7 25.4 26.8-.3-21.5 16 8.6 25.4-21.9-15.5zM333.4 328.9L321.6 353l19.2 18.7-26.5-3.8-11.8 24-4.6-26.4-26.6-3.8 23.8-12.5-4.6-26.5 19.2 18.7zM255.2 255.9l-2 26.7 24.9 10.1-26.1 6.4-1.9 26.8-14.1-22.8-26.1 6.4 17.3-20.5-14.2-22.7 24.9 10.1z" />
      </G>
    </Svg>
  )
}
