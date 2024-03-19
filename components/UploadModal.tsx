import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
  const uploadModal = useUploadModal();

  const onChange = (open: boolean) => {
    if (!open) {
      // Reset the form
      uploadModal.onClose();
    }
  };

  return (
    <Modal
      title="Upload modal title"
      description="Upload modal description"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Upload content
    </Modal>
  );
};

export default UploadModal;
