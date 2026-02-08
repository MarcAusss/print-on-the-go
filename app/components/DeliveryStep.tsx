"use client";

interface DeliveryStepProps {
  value: "Pickup" | "Deliver";
  setValue: (v: "Pickup" | "Deliver") => void;
  submit: () => void;
}

export default function DeliveryStep({ value, setValue, submit }: DeliveryStepProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow flex flex-col gap-3">
      {(["Pickup", "Deliver"] as const).map((opt) => (
        <button
          key={opt}
          onClick={() => setValue(opt)}
          className={`w-full p-4 rounded-xl border ${
            value === opt ? "border-red-600 bg-red-50" : ""
          }`}
        >
          {opt}
        </button>
      ))}

      <button onClick={submit} className="btn-primary w-full mt-4">
        Submit
      </button>
    </div>
  );
}
