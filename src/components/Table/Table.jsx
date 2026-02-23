import {
	Paper,
	Table as MuiTable,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	useTheme,
} from '@mui/material';
import React from "react";


const Table = ({
	               headers = [],
	               data = [],
	               striped = true,
	               hover = true,
	               stickyHeader = false
               }) => {
	const theme = useTheme();
	
	const dataKeys = data.length > 0 ? Object.keys(data[0]) : [];
	
	return (
		<TableContainer component={Paper} sx={{
			boxShadow: 3,
			borderRadius: 2,
			maxHeight: stickyHeader ? 'calc(100vh - 200px)' : 'none',
			overflow: 'auto'
		}}>
			<MuiTable>
				<TableHead>
					<TableRow>
						{headers.map((header, index) => (
							<TableCell
								key={index}
								sx={{
									fontWeight: 700,
									backgroundColor: theme.palette.primary.main,
									color: 'white',
									whiteSpace: 'nowrap',
									py: 2
								}}
							>
								{header}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row, rowIndex) => (
						<TableRow
							key={rowIndex}
							sx={{
								'&:nth-of-type(odd)': {
									backgroundColor: striped ? theme.palette.action.hover : 'inherit'
								},
								'&:hover': {
									backgroundColor: hover ? theme.palette.action.selected : 'inherit'
								}
							}}
						>
							{dataKeys.map((key, cellIndex) => (
								<TableCell key={cellIndex} sx={{py: 1.5}}>
									{row[key] || '-'}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</MuiTable>
		</TableContainer>
	);
};

export default Table;