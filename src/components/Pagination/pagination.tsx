
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './pagination.css'
export default function BasicPagination() {
  return (
    <Stack className ="centered-stack">
     
      <Pagination count={4} color="secondary" />
     
    </Stack>
  );
}