const PageLoader = () => {
  const modalStyle = {
    width: "3rem",
    height: "3rem",
  };
  return (
    <div
      class="modal fade modal-full"
      tabindex="-1"
      role="dialog"
      aria-labelledby="mySmallModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body text-center">
            <div class="spinner-border mr-3" style={modalStyle} role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
