import {Button as MuiButton} from '@mui/material';

const CommonButton = ({children, sx, ...props}) => {
	return (
		<MuiButton
			{...props}
			size={"small"}
			disableRipple
			variant="outlined"
			sx={{
				color: '#000',
				...sx,
				
				'&:hover': {
					color: '#fff',
					bgcolor: '#e41414',
				}
			}}
		>
			{children}
		</MuiButton>
	);
}

export default CommonButton;
