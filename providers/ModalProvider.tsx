"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Modal
        title="test modal"
        description="Test Description"
        isOpen
        onChange={() => {}}
      >
        Test children
      </Modal>
    </>
  );
};

export default ModalProvider;
