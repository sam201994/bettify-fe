import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import CustomCell from "./CustomCell";
import {StyledTableRow, StyledTableCell} from './styles';



export const CustomTableRow = ({ headers, row }) => {
  return (
    <StyledTableRow key={row.name}>
      {headers.map((header) => {
        return <CustomCell type={header.type} data={row[header.id]} align={header.align}/>
      })}
    </StyledTableRow>
  )
}

export default function CustomizedTables({headers, rows}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((header) => {
              return (
                <StyledTableCell key={header.id} align={header.align}>
                  {header.label}
                </StyledTableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <CustomTableRow headers={headers} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
