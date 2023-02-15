import * as React from "react"
import Svg, { SvgProps, Circle } from "react-native-svg"

const SvgOval = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Circle
      cx={8}
      cy={8}
      r={6}
      fill="#009639"
      stroke="#fff"
      strokeWidth={2.182}
    />
  </Svg>
)

export default SvgOval
