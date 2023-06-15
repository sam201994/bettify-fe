import { useState } from 'react'

import { cleanNumberInput, commifyNumber } from 'src/utils/web3Utils'

const useTokenInputChange = (initialvalue = '', maxDecimals = 6) => {
  const [value, setValue] = useState(initialvalue)

  const onChangeValue = (e) => {
    const temp = cleanNumberInput(e.target.value, maxDecimals)
    setValue(temp)
  }
  const commifiedValue = commifyNumber(value)

  return [value, commifiedValue, onChangeValue]
}

export default useTokenInputChange
