import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButon } from "../atoms/button/SecondaryButon";

export const Top = () => {
  const history = useHistory();
  const oncliCkAdmin = () =>
    history.push({ pathname: "/users", state: { isAdmin: true } });
  const oncliCkGeneral = () =>
    history.push({ pathname: "/users", state: { isAdmin: false } });

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
