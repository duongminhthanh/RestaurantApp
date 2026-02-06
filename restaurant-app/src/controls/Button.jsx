import { Button as MuiButton } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
// 1. Khởi tạo theme mặc định
const theme = createTheme();

// 2. Sửa lại useStyles
const useStyles = makeStyles(() => ({ // Bỏ tham số 'theme' ở đây để dùng biến theme bên trên
    root: {
        margin: theme.spacing(1), // Bây giờ nó sẽ lấy theme từ createTheme()
        '& .MuiButton-label': {
            textTransform: 'none'
        }
    }
}));

export default function Button(props) {

    const { children, color, variant, onClick, className, ...other } = props;
    const classes = useStyles();

    return (
        <MuiButton
            className={classes.root + ' ' + (className || '')}
            variant={variant || "contained"}
            color={color || "default"}
            onClick={onClick}
            {...other}>
            {children}
        </MuiButton>
    )
}