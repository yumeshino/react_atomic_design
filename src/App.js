import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButon } from "./components/atoms/button/SecondaryButon";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButon>検索</SecondaryButon>
      <br />
      <SearchInput />
    </div>
  );
}
