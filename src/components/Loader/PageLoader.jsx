import { useEffect } from "react";

const PageLoader = ({ cond }) => {
  useEffect(() => {
    console.log(cond);
    // Menjalankan kode pengaturan modal saat komponen dimuat
    const modal = document.querySelector(".modal"); // Memilih elemen modal
    const bsModal = new window.bootstrap.Modal(modal); // Inisialisasi modal Bootstrap
    cond ? bsModal.show() : bsModal.hide(); // Menampilkan modal menggunakan Bootstrap
  }, []);
  const modalStyle = {
    width: "3rem",
    height: "3rem",
  };
  return (
    <div
      className="modal fade modal-full"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="mySmallModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="dialog"
        style={{ display: "block" }}
      >
        <div className="modal-content">
          <div className="modal-body text-center">
            <div
              className="spinner-border mr-3"
              style={modalStyle}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
