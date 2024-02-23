type buttonClick = {
  handleClick: (event: React.MouseEventHandler<HTMLButtonElement>) => void;
};
function EventsProps(props: buttonClick) {
  return (
    <>
      <button onClick={() => props.handleClick}>click me</button>
    </>
  );
}

export default EventsProps;
