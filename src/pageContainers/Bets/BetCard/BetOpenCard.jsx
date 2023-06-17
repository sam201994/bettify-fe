import Tag from 'src/components/Tag'
import Status from 'src/components/Status'
import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import DateBlock from './DateBlock'
import { CardInnerWrapper } from './styles'
import { useModal } from 'src/hooks'

const BetOpenCard = ({ data }) => {
  const tags = ['my bet', 'participated']
  const betName = '#34 Bitcoin Prediction'

  const { Modal, openModal } = useModal(data, 'PLACE_BET')

  const handleOpenPlaceBet = (event) => {
    event.stopPropagation()
    openModal()
  }

  return (
    <>
      <CardInnerWrapper>
        <div className="top-section">
          <div className="title-section">
            <Typography type="p20" color="white">
              {betName}
            </Typography>
            <Status color="green" />
          </div>

          <div className="tag-section">
            {tags.map((label) => {
              return <Tag theme="dark" label={label} key={label} />
            })}
          </div>
        </div>
        <div className="bottom-section">
          <DateBlock />
          <div className="button-section">
            <Button label="Place Bet" onClick={handleOpenPlaceBet} />
          </div>
        </div>
      </CardInnerWrapper>
      <Modal />
    </>
  )
}

export default BetOpenCard
