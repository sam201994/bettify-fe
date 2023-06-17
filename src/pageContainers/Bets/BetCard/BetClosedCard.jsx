import Tag from 'src/components/Tag'
import Status from 'src/components/Status'
import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import DateBlock from './DateBlock'
import { CardInnerWrapper } from './styles'
import { useModal } from 'src/hooks'
import NameAddress from 'src/components/NameAddress'

const BetClosedCard = ({ data, status }) => {
  const tags = ['my bet', 'participated']
  const { Modal, openModal } = useModal(data, 'DECLARE_WINNER')
  const handleOpenDeclareWinner = (event) => {
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
              textSize={'p20'}
            />

            <Status color="red" />
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
            <Button label="Declare winner" onClick={handleOpenDeclareWinner} />
          </div>
        </div>
      </CardInnerWrapper>
      <Modal />
    </>
  )
}

export default BetClosedCard
