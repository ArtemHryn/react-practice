import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TranslateTableRow } from './TranslateTableRow';
import { getWords } from 'redux/selectors';
import { useSelector } from 'react-redux';

export default function TranslateTable() {
  const words = useSelector(getWords);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Learn</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">English Word</TableCell>
            <TableCell align="right">Ukrainian Word</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {words.map((word, index) => (
            <TranslateTableRow key={word.id} word={word} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
