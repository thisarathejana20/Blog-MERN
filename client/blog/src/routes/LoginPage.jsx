import { SignIn } from "@clerk/clerk-react";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default LoginPage;
