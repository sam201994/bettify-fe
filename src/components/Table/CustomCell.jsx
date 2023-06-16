import NameAddress from 'src/components/NameAddress'
import { StyledTableRow, StyledTableCell } from './styles'

const TableCell = ({ data, type, align }) => {
  if (type === 'TEXT_NAME_ADDRESS')
    return (
      <StyledTableCell align={align}>
        <NameAddress imgSize={10} textSize={10} address={data.address} />
      </StyledTableCell>
    )

  if (type === 'TEXT') return <StyledTableCell align={align}>{data}</StyledTableCell>
  if (type === 'NAME_ADDRESS')
    return (
      <StyledTableCell align={align}>
        <NameAddress imgSize={10} textSize={10} address={data.address} />
      </StyledTableCell>
    )

  return null
}

export default TableCell