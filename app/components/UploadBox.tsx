"use client";

import { useState, useRef, DragEvent } from "react";

interface UploadBoxProps {
  onUpload: (file: File) => void;
}

export default function UploadBox({ onUpload }: UploadBoxProps) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type !== "dragleave");
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files?.[0]) {
      onUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      className={`
        cursor-pointer text-white rounded-3xl shadow-lg
        border-4 border-dashed transition

        bg-[#155efc]
        md:h-[35vh] md:w-[75vh]
        w-full max-w-md min-h-65

        flex flex-col justify-center items-center gap-4 p-12
        ${dragActive ? "border-white bg-[#155efc91]" : "border-transparent"}
      `}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        hidden
        onChange={(e) => e.target.files && onUpload(e.target.files[0])}
      />

      <div className="text-5xl rounded-full py-2 px-5 bg-white text-black">+</div>
      <p className="text-lg font-semibold text-center">
        Upload or Drag & Drop your file
      </p>
      <p className="text-sm opacity-80">Size up to 100MB</p>
    </div>
  );
}
