import { store } from "react-notifications-component";

async function notify(props) {
    await store.addNotification({
      title: props.title,
      message: props.message,
      type: props.type,
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
}

export default notify;
