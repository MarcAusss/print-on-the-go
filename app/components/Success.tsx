"use client";

export default function Success() {
  return (
    <div
      className="
        bg-white
        flex flex-col justify-center items-center
        rounded-3xl p-10 text-center shadow

        /* Desktop (UNCHANGED VISUAL SIZE) */
        md:h-[35vh] md:w-[75vh]

        /* Mobile / Tablet */
        w-full
        max-w-md
        min-h-65
      "
    >
      <h2 className="text-2xl font-bold text-green-600">
        Submitted!
      </h2>
      <p className="mt-2 text-gray-600">
        Please wait for our verification call 📞
      </p>
    </div>
  );
}
