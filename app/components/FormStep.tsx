"use client";

interface FormData {
  name: string;
  address: string;
  contact: string;
  paperSize: string;
  printType: string;
  deliveryType: "Pickup" | "Deliver";
}

interface FormStepProps {
  form: FormData;
  setForm: (v: FormData) => void;
  next: () => void;
}

export default function FormStep({ form, setForm, next }: FormStepProps) {
  return (
    <div className="bg-white rounded-3xl h-[35vh] w-[75vh] p-8 shadow flex flex-col gap-4">
        <div className="flex gap-5">
            <input
                className="input"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
                className="input"
                placeholder="Address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
        </div>
            <div className="flex gap-5">
                <input
                className="input"
                placeholder="Contact Number"
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
            />

            <select
                className="input"
                value={form.paperSize}
                onChange={(e) => setForm({ ...form, paperSize: e.target.value })}
            >
                <option>A4</option>
                <option>Letter</option>
                <option>Legal</option>
            </select>

            <select
                className="input"
                value={form.printType}
                onChange={(e) => setForm({ ...form, printType: e.target.value })}
            >
                <option>Colored</option>
                <option>Black & White</option>
            </select>
      </div>

      <button onClick={next} className="btn-primary w-full">
        Next
      </button>
    </div>
  );
}
