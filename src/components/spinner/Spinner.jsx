import CircularProgress from '@mui/material/CircularProgress';
import {Box} from "@mui/material";

const Spinner = () => {
	return (
			<Box sx={{ display: 'flex', justifyContent: 'center', p: "20px" }}>
				<CircularProgress color="success" />
			</Box>
	);
};

export default Spinner;