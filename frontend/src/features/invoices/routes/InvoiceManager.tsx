import { Box, Grid, Paper } from '@mui/material';
import { InvoiceManagerList } from '../components';

export const InvoiceManager = () => {
  return (
    <Grid container>
      <Grid item xs>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 0,
              mb: 4,
              width: '100%',
              maxHeight: 'calc(100vh - 150px)',
            },
          }}
        >
          <Paper sx={{ overflow: 'auto' }} variant="outlined" elevation={0}>
            <InvoiceManagerList />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};
