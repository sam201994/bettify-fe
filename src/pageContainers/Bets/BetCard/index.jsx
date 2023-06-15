import BetOpenCard from './BetOpenCard'
import BetLockedCard from './BetLockedCard'
import BetClosedCard from './BetClosedCard'

import { CardWrapper } from 'src/components/CardStyles'

const BetCard = ({ data, onClick }) => {
  const { isBetLocked, isBetOpen } = data
  if (isBetOpen)
    return (
      <CardWrapper onClick={() => onClick(data)}>
        <BetOpenCard />
      </CardWrapper>
    )
  if (isBetLocked)
    return (
      <CardWrapper onClick={() => onClick(data)}>
        <BetLockedCard />
      </CardWrapper>
    )
  return (
    <CardWrapper onClick={() => onClick(data)}>
      <BetClosedCard />
    </CardWrapper>
  )
}

export default BetCard
