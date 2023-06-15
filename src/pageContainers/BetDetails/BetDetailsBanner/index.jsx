import BetOpenBanner from './BetOpenBanner'
import BetLockedBanner from './BetLockedBanner'
import BetClosedBanner from './BetClosedBanner'
import { BannerWrapper } from './styles'
// import { CardWrapper } from 'src/components/CardStyles'

const BetDetailsBanner = ({ isBetOpen, isBetLocked }) => {
  if (isBetOpen)
    return (
      <BannerWrapper>
        <BetOpenBanner />
      </BannerWrapper>
    )
  if (isBetLocked)
    return (
      <BannerWrapper>
        <BetLockedBanner />
      </BannerWrapper>
    )
  return (
    <BannerWrapper>
      <BetClosedBanner />
    </BannerWrapper>
  )
}

export default BetDetailsBanner
