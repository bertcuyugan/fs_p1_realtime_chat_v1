// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from "react-chat-engine-advanced";

// const ChatsPage = (props) => {
//   const chatProps = useMultiChatLogic(
//     "37f27383-8b98-461c-8b8d-acc24a2c4b58",
//     props.user.username,
//     props.user.secret
//   );
//   return (
//     <div style={{ height: "100vh" }}>
//       <MultiChatSocket {...chatProps} />
//       <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
//     </div>
//   );
// };

// export default ChatsPage;

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="37f27383-8b98-461c-8b8d-acc24a2c4b58"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
