import { useContext } from "react";

import MainHeader from "./main-header";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";

function LayoutWithHeader(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <>
      <MainHeader navigation={props.navigation} />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
}
export default LayoutWithHeader;
