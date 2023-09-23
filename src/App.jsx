import "./App.css";
import ReusableForm from "./components/ReusableForm/ReusableForm";
import RefForm from "./components/refForm/refForm";
// import ControlledForm from "./components/ControlledForm/ControlledForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("Sign Up data ", data);
  };
  const handleUpdateProfile = (data) => {
    console.log("Update Profile Data ", data);
  };
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <ControlledForm></ControlledForm> */}
      {/* <RefForm></RefForm> */}
      <ReusableForm
        formTitle={"Sign Up"}
        submitBtnText={"Submit"}
        handleSubmit={handleSignUpSubmit}
      >
        <h2>Sign Up</h2>
        <p>Please sign up right Now</p>
      </ReusableForm>
      <ReusableForm
        formTitle={"Update Profile"}
        submitBtnText={"Update"}
        handleSubmit={handleUpdateProfile}
      >
        <h2>Update Profile</h2>
        <p>Please Keep your profile Updated</p>
      </ReusableForm>
    </>
  );
}

export default App;
