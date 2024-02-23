type AdvanceProps = {
  status: "loading" | "success" | "error"; //here we are not defining the string but defining directly that what is accepting
};
function AdvanceProps(props: AdvanceProps) {
  let message;
  if (props.status === "success") {
    message = "success";
  } else if (props.status === "error") {
    message = "error";
  } else if (props.status === "loading") {
    message = "loading";
  }
  return (
    <>
      <h1>Your status is in {message}</h1>
    </>
  );
}

export default AdvanceProps;
