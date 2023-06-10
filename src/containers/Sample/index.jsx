import { useTokenInputChange } from 'src/hooks'

export default function Sample() {
  const [value, commifiedValue, onChangeValue] = useTokenInputChange()

  return (
    <div>
      <input onChange={onChangeValue} value={commifiedValue} />
    </div>
  )
}
