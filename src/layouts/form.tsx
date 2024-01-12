import { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phonenumber", phoneNumber);
    formData.append("enail", email);
    formData.append("message", message);
    if (file !== null) {
      formData.append("file", file);
    }
    console.log(name);
    console.log(message);
    if (formData.get("name") && formData.get("message")) {
      const url = "http://localhost:8080/privatemessage";
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      axios
        .post(url, formData, config)
        .then((response) => {
          console.log(response.data);
          if (response.data.success) {
            setValid("berhasil dikirim");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("need to fill");
    }
  }
  return (
    <>

        <div className="flex flex-col w-[90%] lg:w-[70%] mx-auto ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-5 p-6 rounded-xl shadow-lg"
          >
            <div>
              <label for="name" className="font-bold text-lg p-2">Name:</label>
              <input
                className="w-full bg-slate-100 rounded-lg p-2 focus:outline-blue-200"
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label for="email" className="font-bold text-lg p-2">Phone Number:</label>
              <input
                type="number"
                id="number"
                className="w-full bg-slate-100 rounded-lg p-2 focus:outline-blue-200"
                name="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <label for="email" className="font-bold text-lg p-2">Email:</label>
              <input
                type="email"
                id="email"
                className="w-full bg-slate-100 rounded-lg p-2 focus:outline-blue-200"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label for="message" className="font-bold text-lg p-2">Message:</label>
              <textarea
                id="message"
                className="w-full bg-slate-100 rounded-lg p-2 focus:outline-blue-200"
                name="message"
                rows="5"
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="grid">
              <label for="file" className="font-bold text-lg p-2">Upload File:</label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".pdf, .doc, .docx"
                onChange={handleFileInputChange}
              />
            </div>
            <div>
              <button type="submit" className="w-full text-white mt-6 font-bold bg-blue-500 hover:bg-blue-700 rounded-full py-2 px-4 text-lg">Submit</button>
            </div>
          </form>
          <div className="mx-auto mt-24">
      <h1 className="text-5xl font-bold">Terima kasih karena <br/>telah berkunjung di website saya:)</h1>
      </div>
        </div>
    </>
  );
};

export default Form;
