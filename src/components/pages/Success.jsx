import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SuccessIcon from "../../assets/icons/successIcon.svg";
import Button from "../primitive/Button";
const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const repsonseMessage = useMemo(() => {
    return location?.state === "demo"
      ? "Your demo request is confirmed."
      : "Your registration is confirmed.";
  }, [location?.state]);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <div
        className="flex flex-col px-4 lg:px-0 items-center w-[90%] lg:w-[60%] py-8 lg:h-[60%] rounded-[4px]"
        style={{ boxShadow: "4px 0px 32px 0px rgba(14, 44, 102, 0.05)" }}
      >
        <img src={SuccessIcon} alt="success icon" width={144} height={144} />
        <div className="my-5">
          <h4 className="text-xl text-center text-2xl font-bold">
            Thank you for choosing SmartComply!
          </h4>
          <p className="text-center text-[13px] mt-3 font-medium">
            {repsonseMessage}
          </p>
          <p className="text-center text-[13px] mt-3 font-medium">
            We appreciate your trust in our services.
          </p>
        </div>

        <Button
          title="Back to home"
          variant="primary"
          styles="lg:px-10 px-20 lg:w-auto w-full h-[50px] mt-10"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default Success;
