import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import { CardWrapper } from 'src/components/CardStyles'
import { CardInnerWrapper } from './styles'
import { useModal } from 'src/hooks'

const CreateBetCard = ({ data }) => {
  const { Modal, openModal } = useModal(data, 'CREATE_BET')

  return (
    <>
      <CardWrapper>
        <CardInnerWrapper>
          <div>
            <Typography type="p34" color="white">
              {data.name}
            </Typography>

            <Typography type="p12" color="white">
              {data.description}
            </Typography>
          </div>

          <div className="button-section">
            <Button label="Create Bet" onClick={openModal} />
          </div>
        </CardInnerWrapper>
      </CardWrapper>
      <Modal />
    </>
  )
}

export default CreateBetCard
