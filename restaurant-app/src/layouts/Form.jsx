import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

// Khởi tạo một theme mặc định để có sẵn hàm spacing
const theme = createTheme();

const useStyles = makeStyles(() => ({ // Bỏ tham số theme ở đây
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1) // Bây giờ theme này đã có hàm spacing
        }
    }
}));

// Functional component for the form
export default function Form(props) {
    const classes = useStyles(); // Apply styles
    const { children, ...other } = props; // Destructure props

    // Render the form with children elements
    return (
        <form className={classes.root} noValidate autoComplete="off" {...other}>
            {children}
        </form>
    )
}