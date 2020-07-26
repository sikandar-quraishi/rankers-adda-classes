import { toast } from "react-toastify";

const config = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};

export default (message, type) => {
  switch(type) {
    case 'info':
      toast.info(message, {...config});
      break;
    case 'success':
      toast.success(message, {...config});
      break;
    case 'error':
      toast.error(message, {...config});
      break;
    default:
      return null;
  }
};
