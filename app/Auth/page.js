import { getProject } from "redshield/actions/auth";
import AuthPage from "redshield/Auth";

const Auth = async () => {
  const res = await getProject();
  return (
    <div className="main">
       <AuthPage project={res} />
    </div>
  );
};
export default Auth;