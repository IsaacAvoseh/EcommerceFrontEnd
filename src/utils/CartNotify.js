import { toast } from 'react-toastify';

export const handleItemAdded = item =>
toast.success(`${item.name} added to cart!`);

export const handleItemUpdated = item => toast.success(`${item.name} updated to ${item.quantity}!`);

export const handleItemRemoved = () => toast.success(`Removed from cart`);