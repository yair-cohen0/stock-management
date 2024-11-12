import React, { useState } from "react";
import { observer } from "mobx-react";
import { Button, Input, Modal } from "antd";
import { userStore } from "../../stores/user.store.ts";

export const LoginModal: React.FC = observer(() => {
  const [username, setUsername] = useState("");

  const handleConfirm = () => {
    if (username) {
      userStore.username = username;
    }
  };

  return (
    <Modal
      title="Login"
      open={!userStore.username}
      footer={[
        <Button key="confirm" onClick={handleConfirm}>
          Confirm
        </Button>,
      ]}
      closeIcon={null}
    >
      <Input
        placeholder={"Enter username"}
        onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
      />
    </Modal>
  );
});
