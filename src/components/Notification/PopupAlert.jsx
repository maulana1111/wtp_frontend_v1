import { useEffect } from "react";
import Swal from "sweetalert2";

const PopupAlert = ({ isSuccess, title }) => {
  useEffect(() => {
    const showPopup = () => {
      Swal.fire({
        position: "top-end",
        icon: isSuccess ? "success" : "error",
        title: title,
        showConfirmButton: false,
        timer: 1500,
      });
    };

    // Memanggil fungsi showPopup saat komponen di-mount
    showPopup();
  }, [isSuccess, title]);

  // Mengembalikan null karena komponen ini tidak merender apapun
  return null;
};

export const showPopupAlert = (isSuccess, title) => {
  Swal.fire({
    position: "top-end",
    icon: isSuccess ? "success" : "error",
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
};

export default PopupAlert;
