import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButon } from "./components/atoms/button/SecondaryButon";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organism/user/UserCard";
import "./styles.css";

const user = {
  name: "じゃけぇ",
  image: "https://source.unsplash.com/photos/NEOXGVKTmsA",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButon>検索</SecondaryButon>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
