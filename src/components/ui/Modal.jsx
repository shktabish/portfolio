// ContactMeModal.js

import { useState } from "react";
import { IoClose } from "react-icons/io5";

const ContactMeModal = ({ setIsModalOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your form submission logic here

    // Clear form fields
    setName("");
    setEmail("");
    setSubject("");
    setText("");

    // Close modal
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    // Clear form fields
    setName("");
    setEmail("");
    setSubject("");
    setText("");

    // Close modal
    setIsModalOpen(false);
  };

  return (
    <div className={`h-full w-full bg-black/75 fixed flex justify-center items-center`}>
      <div className="bg-[#232123] flex flex-col items-center gap-2 px-3 py-4 rounded-md relative">
        <p className="text-2xl font-semibold text-white ">Contact Me</p>
        <form onSubmit={handleSubmit} className="flex flex-col border-t-[1px] border-[#363436] mt-4 pt-4">
          <label className="block text-[#b3b3b3]">Name</label>
          <input
            type="text"
            value={name}
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            className="w-96 max-sm:w-80 text-white p-2 border-[1px] bg-[#1D1C1D] mt-2 mb-3 rounded-md border-[#363436] focus:outline-none"
          />
          <label className="block text-[#b3b3b3]">Email Address</label>
          <input
            type="text"
            value={email}
            placeholder="Your email address"
            onChange={(e) => setEmail(e.target.value)}
            className="w-96 max-sm:w-80 text-white p-2 border-[1px] bg-[#1D1C1D] mt-2 mb-3 rounded-md border-[#363436] focus:outline-none"
          />
          <label className="block text-[#b3b3b3]">Subject</label>
          <input
            type="text"
            value={subject}
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            className="w-96 max-sm:w-80 text-white p-2 border-[1px] bg-[#1D1C1D] mt-2 mb-3 rounded-md border-[#363436] focus:outline-none"
          />
          <label className="block text-[#b3b3b3]">Message</label>
          <textarea
            value={text}
            placeholder="Your message"
            onChange={(e) => setText(e.target.value)}
            className="w-96 max-sm:w-80 text-white p-2 border-[1px] bg-[#1D1C1D] mt-2 mb-3 rounded-md border-[#363436] focus:outline-none"
            rows="4"
          ></textarea>
          <button type="submit" className="w-96 max-sm:w-80 p-2 bg-[#363436] text-white rounded-md my-4">Send</button>
        </form>
        <IoClose className="absolute top-3 right-3 fill-[#363436] text-2xl cursor-pointer" onClick={handleCloseModal} />
      </div>
    </div>
  );
};

export default ContactMeModal;
