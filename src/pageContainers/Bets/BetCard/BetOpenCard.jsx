import Tag from 'src/components/Tag'
import Status from 'src/components/Status'
import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import DateBlock from './DateBlock'
import { CardInnerWrapper } from './styles'
import { useModal } from 'src/hooks'
import NameAddress from 'src/components/NameAddress'

const BetOpenCard = ({ data, status }) => {
  const tags = ['my bet', 'participated']

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
            <NameAddress
              address={data.proxyAddress}
              imgSize={20}
              textSize={18}
            />
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
