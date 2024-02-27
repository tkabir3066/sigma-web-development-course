import React from "react";
import Script from "next/script";
const Contact = () => {
  return (
    <div>
      <Script>{`alert("Welcome to Contact page")`}</Script>
      Contact Page
    </div>
  );
};

export default Contact;

export const metadata = {
  title: "Contact Facebook - connect with the world",
  description:
    "This is a page where you can contact facebook and we can connect with the wold using facebook",
};
