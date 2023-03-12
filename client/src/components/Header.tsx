import React from "react";

interface PropsInterface {
  chat: any;
}

const Header: React.FC<PropsInterface> = (chat) => {
  console.log(chat);

  return <div>Header</div>;
};

export default Header;
