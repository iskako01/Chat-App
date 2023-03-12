import { useState, FC } from "react";

interface PropsInterface {
  props: any;
  activeChat: any;
}

const BaseMessageForm: FC<PropsInterface> = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [preview, setPreview] = useState("");

  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview ">
          <img className="message-form-rev" src="" alt="" />
        </div>
      )}
    </div>
  );
}; 

export default BaseMessageForm;
