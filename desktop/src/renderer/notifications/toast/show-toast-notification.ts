import { toast } from "react-toastify";
import { toastStylesVariants } from "./toast-notification-styles.css";
import IconToastSuccess from "assets/icons/icon-toast-success";
import IconToastInfo from "assets/icons/icon-toast-info";
import IconToastWarning from "assets/icons/icon-toast-warning";

export const toastSuccess = (message: string) => {
  toast.success(message, {
    className: toastStylesVariants.succes,
    theme: "dark",
    autoClose: 25000,
    hideProgressBar: true,
    pauseOnHover: false,
    icon: IconToastSuccess
  });
};
 
export const toastError = (message: string) => {
  toast.error(message, {
    className: toastStylesVariants.error,
    theme: "dark",
    autoClose: 2500,
    hideProgressBar: true,
    pauseOnHover: false,
  });
};

export const toastInfo = (message: string) => {
  return toast.info(message, {
    className: toastStylesVariants.info,
    theme: "dark",
    autoClose: 1000,
    hideProgressBar: true,
    closeButton: false,
    pauseOnHover: false,
    icon: IconToastInfo
  });
};

export const toastWarning = (message: string) => {
  return toast.warning(message, {
    className: toastStylesVariants.warning,
    theme: "dark",
    autoClose: 2500,
    hideProgressBar: true,
    closeButton: true,
    pauseOnHover: false,
    icon: IconToastWarning
  });
};
