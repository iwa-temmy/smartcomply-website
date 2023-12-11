import React from "react";
import { Dialog } from "primereact/dialog";

const Modal = ({
  visible = false,
  closable = false,
  closeModal,
  modalSize,
  headerStyle = {},
  contentStyle = {},
  dismissableMask,
  height,
  children,
}) => {
  return (
    <Dialog
      // header=""
      footer={null}
      closable={closable}
      visible={visible}
      draggable={false}
      closeOnEscape={true}
      modal
      dismissableMask={dismissableMask || false}
      resizable={false}
      onHide={closeModal}
      className={`w-11/12 mx-auto ${modalSize === "small" && "lg:max-w-lg"} ${
        modalSize === "small" && "xl:max-w-xl"
      } ${modalSize === "medium" && "lg:max-w-2xl"} ${
        modalSize === "large" && "lg:max-w-4xl"
      } ${modalSize === "extra-large" && "max-w-6xl"} ${height} relative`}
      breakpoints={{ "960px": "70vw", "640px": "90vw" }}
      contentStyle={contentStyle}
      headerStyle={headerStyle}
    >
      <div className="h-full overflow-auto">{children}</div>
    </Dialog>
  );
};

export default Modal;
