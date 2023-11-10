import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import ErrorArea from "./error-area";
import Footer from "@/src/layout/footers/footer";

const Error = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <ErrorArea />
      </main>
      <Footer />
    </>
  );
};

export default Error;
