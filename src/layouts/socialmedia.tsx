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
      <div className="w-1/2 border-2 pr-10">
        <h6 className="text-2xl text-start">
          Send private chat or criticism and suggestions
        </h6>
        <div className="flex flex-col h-full">
          <form
            onSubmit={handleSubmit}
            className="grid gap-y-5 border-2 border-black"
          >
            <div>
              <label for="name">Name:</label>
              <input
                className="w-full border-2"
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label for="email">Phone Number:</label>
              <input
                type="number"
                id="number"
                className="w-full border-2"
                name="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                className="w-full border-2"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label for="message">Message:</label>
              <textarea
                id="message"
                className="w-full border-2"
                name="message"
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="grid">
              <label for="file">Upload File:</label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".pdf, .doc, .docx"
                onChange={handleFileInputChange}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
          <div className="flex justify-items-center h-full">
            <h6 className="text-3xl my-auto text-center">
              Thanks for viciting My Website Portofolio
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
