"use client";

import { useState } from "react";
import Input from "./form/Input";
import Textarea from "./form/Textarea";

export default function ContactSection() {
  const [formValues, setFormValues] = useState({
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div className="flex h-auto justify-center items-center py-20">
      <div className="flex flex-col w-full max-w-3xl gap-10 mx-auto">
        <div className="flex flex-col gap-1 w-full items-center justify-center">
          <h1 className="text-white text-3xl font-medium">Contact Me</h1>
          <span className="text-gray-400 w-full text-center max-w-xl text-base">
            Let&apos;s work together! I&apos;m currently available to work for a
            cool company. <br /> If you&apos;re interested in hiring me, please
            contact me.
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <Input
            label="Email Address"
            type="text"
            placeholder="Your email address"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
          <Input
            label="Subject"
            type="text"
            placeholder="Enter your subject"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
          <Textarea
            label="Message"
            placeholder="What's on your mind?"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
          <div className="flex w-full items-end justify-end">
            <button className="flex items-center justify-center bg-emerald-500 text-white rounded-lg py-2 px-10 w-max">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
