import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { RESULT_HEAD_CELLS } from "@/pages/results";

export const TableSkeleton = () => {
  return (
    <>
      <Skeleton
        animation="wave"
        variant="rectangular"
        height={50}
        sx={{ mb: 3 }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {RESULT_HEAD_CELLS.map((headCell) => (
                <TableCell key={headCell}>{headCell}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(15)].map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <Skeleton animation="wave" variant="text" />
                </TableCell>
                <TableCell>
                  <Skeleton animation="wave" variant="text" />
                </TableCell>
                <TableCell>
                  <Skeleton animation="wave" variant="text" />
                </TableCell>
                <TableCell>
                  <Skeleton animation="wave" variant="text" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
