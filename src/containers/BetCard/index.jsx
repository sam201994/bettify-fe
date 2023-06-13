import BetOpenCard from './BetOpenCard'
import BetLockedCard from './BetLockedCard'
import BetClosedCard from './BetClosedCard'

import { CardWrapper } from './styles'

const BetCard = ({ isBetOpen, isBetLocked }) => {
  if (isBetOpen)
    return (
      <CardWrapper>
        <BetOpenCard />
      </CardWrapper>
    )
  if (isBetLocked)
    return (
      <CardWrapper>
        <BetLockedCard />
      </CardWrapper>
    )
  return (
    <CardWrapper>
      <BetClosedCard />
    </CardWrapper>
  )
}

export default BetCard
