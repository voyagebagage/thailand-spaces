import CheapButton from "../utils/CheapButton.astro";
import React from "react";
import ContactInput from "../utils/ContactInput.tsx";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "dc2e3754-3766-4c06-a716-e63f7e467d05");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
     
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <section className="mb-20">
  <h2 className="text-title mb-8">keep in touch with us</h2>
  <form
   onSubmit={onSubmit}
    className="grid gap-4 md:grid-cols-2 md:gap-8">
    <input
      type="hidden"
      name="subject"
      value="New Submission from Web3Forms VIRTUAL TOUR"
    />
    <ContactInput name='name' label="name"  id="1" placeholder="input your name" />
    <ContactInput
    name='company'
      label="company"
      required
      id="2"
      placeholder="input your company"
    />
    <ContactInput
      type="email"
      name='email'
      label="email"
      required
      id="3"
      placeholder="input your email"
    />
    <textarea name="message" required placeholder="input your message"
    ></textarea>
    <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
    <button
    className="bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600"
    type="submit">
    Submit
  </button>
  <div>
    <span className="block mb-2 opacity-80">services</span>
    <div className="flex items-end gap-4 flex-wrap text-sm">
      {/* <CheapButton>architecture</CheapButton>
      <CheapButton>interior</CheapButton>
      <CheapButton>furnitures</CheapButton> */}
    </div>
  </div>
  </form>
   <span>{result}</span>
   
</section>
  
  );
}

export default Contact;