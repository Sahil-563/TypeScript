type styleProps = {
  styles: React.CSSProperties;
};
function StylesProps(props: styleProps) {
  return (
    <>
      <div style={props.styles}>Modak bhai k aage koi bol skta hai kya....</div>
    </>
  );
}

export default StylesProps;
