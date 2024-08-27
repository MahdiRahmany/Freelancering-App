import AuthContainer from "../features/authentication/authContainer";

function Auth() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <AuthContainer />
      </div>
    </div>
  );
}
export default Auth;
