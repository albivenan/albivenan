import Form from "../layouts/form";
import SocialMedia from "../layouts/socialmedia.jsx";

const Contact = () => {
  return (
    <div className="mt-16">
      <div className="relative m-auto container">
        <div className="py-16 w-[90%] lg:w-3/5">
          <h5 className=" text-4xl">
            What's on your thoughts?
            <br />
            Let's talk about it.
          </h5>
          <p className="first-letter:ml-4 mt-6 leading-6">
            Exercitation et irure commodo culpa excepteur Lorem adipisicing sit
            anim. Incididunt cupidatat esse velit in consequat ipsum Lorem.
            Irure id velit ea sunt deserunt elit minim. Anim ad nostrud anim
            nisi in ullamco dolor irure magna excepteur sunt nisi.
          </p>
        </div>
        <Form />
      </div>
      
      </div>
  );
};

export default Contact;
