import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <Scontainer>
      <Input placeholder="検索条件を入力" />
      <SBttonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SBttonWrapper>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  display: flex;
  align-items: center;
`;

const SBttonWrapper = styled.div`
  padding-left: 8px;
`;
