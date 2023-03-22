import { PrimsryButton } from "./components/atoms/button/PrimsryButton";
import { SecondaryButon } from "./components/atoms/button/SecondaryButon";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimsryButton>テスト</PrimsryButton>
      <SecondaryButon>検索</SecondaryButon>
    </div>
  );
}
