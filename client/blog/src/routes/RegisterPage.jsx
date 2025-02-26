import { SignUp } from "@clerk/clerk-react";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center">
      <SignUp signInUrl="/login" />
    </div>
  );
};

export default RegisterPage;
