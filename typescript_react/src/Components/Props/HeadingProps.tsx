type headingProps = {
  children: string;
};
function HeadingProps(props: headingProps) {
  return (
    <>
      <h2> {props.children}</h2>
    </>
  );
}

export default HeadingProps;
