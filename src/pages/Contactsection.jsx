/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import CustomButton from "../components/CustomButton";
import emailjs from "@emailjs/browser";
import { Bounce, toast } from "react-toastify";

const Contactsection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef();

  const handleSubmit = async (e) => {

    console.log("fcgvhbkl =>>>>")

    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      toast.success(`Email sent successfully: ${result.text}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {

      toast.error(`Error sending email: ${error?.text || error}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[22rem] md:w-[26rem] border-2 border-solid border-[#000] shadow-[-8px_10px_4px_rgba(0,0,0,1)] rounded px-6 py-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-foreground">
          Get in Touch
        </h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1 md:mb-2 text-muted-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 md:p-3 rounded-lg border border-[#000] bg-[#fff] text-foreground"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 md:mb-2 text-muted-foreground"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 md:p-3 rounded-lg border border-[#000] bg-[#fff] text-foreground"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 md:mb-2 text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 md:p-3 rounded-lg border border-[#000] bg-[#fff] text-foreground min-h-[100px] md:min-h-[150px]"
            />
          </div>

          <button type="submit" className="w-full">
            <CustomButton label="Send Message" />
          </button>

        </form>
      </motion.div>
    </div>
  );
};

export default Contactsection;
