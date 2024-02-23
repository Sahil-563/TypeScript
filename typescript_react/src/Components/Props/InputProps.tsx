type inputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
function InputProps(props: inputProps) {
  return (
    <>
      <input
        value={props.value}
        type="text"
        placeholder="type here"
        onChange={props.handleChange}
      ></input>
    </>
  );
}

export default InputProps;
