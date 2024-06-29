"use client";

import { run } from "@/app/api/sendEmail/sendMail";

export default function RegisterForm() {
  const handleSubmit = async () => {
    const payload = {
      toAddress: "montest78955@gmail.com",
      fromAddress: "iaapconference2025NU@gmail.com",
    };
    try {
      const res = await run(payload);
    } catch (error) {
      console.log("Failed from frontend:", error);
    }
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <button onClick={() => handleSubmit()}>Send Email</button>
    </div>
  );
}
