import { useState, FC } from "react";
import {
  PaperAirplaneIcon,
  PaperClipIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Dropzone from "react-dropzone";

interface PropsInterface {
  props: any;
  activeChat: any;
}

const BaseMessageForm: FC<PropsInterface> = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [preview, setPreview] = useState("");

  const cancelSendAttachment = () => {
    setPreview("");
    setAttachment("");
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = async () => {
    setPreview("");

    const date = new Date()
      .toISOString()
      .replace("T", "")
      .replace("Z", `${Math.random() * 1000}+00:00`);

    const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];

    console.log(props);
    const form = {
      attachments: at,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id,
    };

    console.log(form);

    props.onSubmit(form);
    setMessage("");
    setAttachment("");
  };

  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview ">
          <img
            className="message-form-preview-image"
            src={preview}
            alt="message-form-preview"
            onLoad={() => URL.revokeObjectURL(preview)}
          />
          <XMarkIcon
            className="message-form-icon-x"
            onClick={cancelSendAttachment}
          />
        </div>
      )}
      <div className="message-form">
        <div className="message-form-input-container">
          <input
            className="message-form-input"
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Send a message..."
          />
        </div>
        <div className="message-form-icons">
          <Dropzone
            multiple={false}
            noClick={true}
            onDrop={(acceptedFiles) => {
              setAttachment(acceptedFiles[0]);
              setPreview(URL.createObjectURL(acceptedFiles[0]));
            }}
          >
            {({ getRootProps, getInputProps, open }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <PaperClipIcon
                  className="message-form-icon-clip"
                  onClick={open}
                />
              </div>
            )}
          </Dropzone>

          <hr className="vertical-line" />
          <PaperAirplaneIcon
            className="message-form-icon-airplane"
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default BaseMessageForm;
