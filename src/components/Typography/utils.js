import { colors } from 'src/utils/colors'

export function calculateFontSize(type) {
  switch (type) {
    case 'p34':
      return '34px'
    case 'p24':
      return '24px'
    case 'p20':
      return '20px'
    case 'p16':
      return '16px'
    case 'p14':
      return '14px'
    case 'p12':
      return '12px'
    default:
      return '10px'
  }
}

export function calculateLineHeight(type) {
  switch (type) {
    case 'p34':
      return '42px'
    case 'p24':
      return '26px'
    case 'p20':
      return '22px'
    case 'p16':
      return '18px'
    case 'p14':
      return '16px'
    case 'p12':
      return '14px'
    default:
      return '12px'
  }
}

export function calculateFontWeight(type) {
  switch (type) {
    case 'p34':
      return '400'
    case 'p2':
      return '600'
    case 'p20':
      return '500'
    case 'p16':
      return '400'
    case 'p14':
      return '400'
    case 'p12':
      return '300'
    default:
      return '100'
  }
}

export function calculateFontColor(fontColor) {
  if (fontColor) {
    return colors[fontColor]
  }
  return colors.default
}
