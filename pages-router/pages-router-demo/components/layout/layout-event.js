import MainHeader from "./main-header";

function EventLayout(props) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}
export default EventLayout;
