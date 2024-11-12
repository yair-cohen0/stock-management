import React, { useState } from "react";
import { observer } from "mobx-react";
import { Button, Input, Modal } from "antd";
import { userStore } from "../../stores/user.store.ts";
import { useMutation } from "@tanstack/react-query";
import { portfolioStore } from "../../stores/portfolio.store.ts";

export const LoginModal: React.FC = observer(() => {
  const [userName, setUsername] = useState("");

  const fetchPortfolio = useMutation({
    mutationFn: async (userName: string) => {
      return await portfolioStore.fetchPortfolio(userName);
    },
    mutationKey: ["fetchPortfolio"],
  });

  const handleConfirm = () => {
    if (userName) {
      userStore.setUserName(userName);
      fetchPortfolio.mutate(userName);
    }
  };

  return (
    <Modal
      title="Login"
      open={!userStore.userName}
      footer={[
        <Button key="confirm" onClick={handleConfirm}>
          Confirm
        </Button>,
      ]}
      closeIcon={null}
    >
      <Input
        placeholder={"Enter userName"}
        onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
      />
    </Modal>
  );
});
