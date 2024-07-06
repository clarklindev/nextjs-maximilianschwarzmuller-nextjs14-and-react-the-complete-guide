import MainHeader from "./main-header";

function LayoutWithHeader(props) {
  return (
    <>
      <MainHeader navigation={props.navigation} />
      <main>{props.children}</main>
    </>
  );
}
export default LayoutWithHeader;
