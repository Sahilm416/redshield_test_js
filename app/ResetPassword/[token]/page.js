import { checkResetPasswordToken } from "redshield/actions/forgotPassword";
import ResetPassPage from "redshield/components/ResetPassPage";

const ResetPassword = async ({ params }) => {
  const res = await checkResetPasswordToken({ token: params.token });
  return (
    <div className="main">
      <ResetPassPage data={res} />
    </div>
  );
};
export default ResetPassword;