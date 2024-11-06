import { Chat } from "../../../../types/Chat";
import ChatMsg from "../ChatMsg/ChatMsg";

import ChatMsgProfile from "../ChatMsgProfile/ChatMsgProfile";
import ChatMsgContainerWrapper from "./ChatMsgContainer.styles";

export interface ChatMsgContainerProps {
  /** 채팅리스트 */
  chatList: Chat[];
  /** 채팅 보낸 유저가 나인지 타인인지 구분 */
  isMe: boolean;
  /** 채팅 보낸 타 유저 닉네임 */
  userNickName: string;
}

const ChatMsgContainer = ({
  chatList,
  isMe,
  userNickName,
}: ChatMsgContainerProps) => {
  const isMeClass = isMe ? "my" : "other";
  return (
    <ChatMsgContainerWrapper className={isMeClass}>
      {!isMe && <ChatMsgProfile name={userNickName}></ChatMsgProfile>}
      {chatList.map((chat, index) => (
        <ChatMsg
          key={index}
          msg={chat.msg}
          isMe={isMe}
          isLastMsg={index === chatList.length - 1 ? true : false}
          isRead={chat.isRead}
          creadtedAt={chat.creadtedAt}
        ></ChatMsg>
      ))}
    </ChatMsgContainerWrapper>
  );
};

export default ChatMsgContainer;