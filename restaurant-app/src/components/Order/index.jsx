import { useForm } from '../../hooks/useForm';
import OrderForm from './OrderForm'

export default function Order() {

    // Helper: Generate a random 6-digit order number
    const generateOrderNumber = () => {
        return Math.floor(100000 + Math.random() * 900000);
    }

    // Define initial state for the order form
    const getFreshModelObject = () => ({
        orderMasterId: 0,
        orderNumber: generateOrderNumber(),
        customerId: 0,
        pMethod: 'none',
        gTotal: 0,
        deleteOrderDetailIds: '',
        orderDetails: []
    })

    // Initialize custom hook for form management
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetFormControls
    } = useForm(getFreshModelObject);

    return (
        // Pass form state and handlers to child component
        <OrderForm
            {...{ values, errors, handleInputChange }}
        />
    )
}