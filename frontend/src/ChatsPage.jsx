import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="62ac9230-a09e-4bcd-9496-26bd945785a0"
        username={props.user.username}
        secret={props.user.username}
        style={{ height: "100vh" }}
      />
    </div>
  );
};
export default ChatsPage;
