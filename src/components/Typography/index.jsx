import {
  calculateFontColor,
  calculateFontSize,
  calculateFontWeight,
} from './utils'
import TypographyWrapper from './styles'

export default function Typography({
  children,
  type = 'p20',
  color = 'primary',
  customStyles = {},
}) {
  return (
    <TypographyWrapper
      fontSize={calculateFontSize(type)}
      fontWeight={calculateFontWeight(type)}
      color={calculateFontColor(color)}
      style={customStyles}
    >
      {children}
    </TypographyWrapper>
  )
}
