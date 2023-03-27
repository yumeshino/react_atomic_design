import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { SecondaryButon } from "../atoms/button/SecondaryButon";
// import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const oncliCkAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const oncliCkGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButon onClick={oncliCkAdmin}>管理者ユーザー</SecondaryButon>
      <br />
      <br />
      <SecondaryButon onClick={oncliCkGeneral}>一般ユーザー</SecondaryButon>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
