"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { saveOrder } from "../lib/storage";
import { v4 as uuid } from "uuid";

import UploadBox from "../components/UploadBox";
import FormStep from "../components/FormStep";
import DeliveryStep from "../components/DeliveryStep";
import Success from "../components/Success";

/* =====================
   TYPES
===================== */
type Step = "upload" | "form" | "delivery" | "done";

interface FormData {
  name: string;
  address: string;
  contact: string;
  paperSize: string;
  printType: string;
  deliveryType: "Pickup" | "Deliver";
}

/* =====================
   PAGE
===================== */
export default function RedBox() {
  const [step, setStep] = useState<Step>("upload");
  const [file, setFile] = useState<File | null>(null);
  const [fileBase64, setFileBase64] = useState("");

  const [form, setForm] = useState<FormData>({
    name: "",
    address: "",
    contact: "",
    paperSize: "A4",
    printType: "Colored",
    deliveryType: "Pickup",
  });

  /* =====================
     FILE UPLOAD
  ===================== */
  function handleUpload(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      setFile(file);
      setFileBase64(reader.result as string);
      setStep("form");
    };
    reader.readAsDataURL(file);
  }

  /* =====================
     SUBMIT ORDER
  ===================== */
  function submitOrder() {
    if (!file) return;

    const order = {
      id: uuid(),
      fileName: file.name,
      fileBase64: fileBase64,

      name: form.name,
      address: form.address,
      contact: form.contact,
      paperSize: form.paperSize,
      printType: form.printType,
      deliveryType: form.deliveryType,

      status: "Pending" as const,
      paymentStatus: "Unpaid" as const,
      createdAt: new Date().toISOString(),
    };

    saveOrder(order);
    setStep("done");
  }

  return (
    <main className="flex items-center justify-center px-4">
      <AnimatePresence mode="wait">
        {step === "upload" && (
          <Slide key="upload">
            <UploadBox onUpload={handleUpload} />
          </Slide>
        )}

        {step === "form" && (
          <Slide key="form">
            <FormStep
              form={form}
              setForm={setForm}
              next={() => setStep("delivery")}
            />
          </Slide>
        )}

        {step === "delivery" && (
          <Slide key="delivery">
            <DeliveryStep
              value={form.deliveryType}
              setValue={(v) => setForm({ ...form, deliveryType: v })}
              submit={submitOrder}
            />
          </Slide>
        )}

        {step === "done" && (
          <Slide key="done">
            <Success />
          </Slide>
        )}
      </AnimatePresence>
    </main>
  );
}

/* =====================
   SLIDE
===================== */
function Slide({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -80, opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-xl"
    >
      {children}
    </motion.div>
  );
}
