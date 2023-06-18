import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import { CardInnerWrapper, CardWrapper } from './styles'
import { useModal } from 'src/hooks'

const CreateBetCard = ({ data }) => {
  const { Modal, openModal } = useModal(data, 'CREATE_BET')

  return (
    <>
      <CardWrapper>
        <CardInnerWrapper>
          <div>
            <Typography type="p24" color="lightGrey">
              {data.name}
            </Typography>

            <Typography type="p12" color="lightGrey">
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
