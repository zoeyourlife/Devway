import { ChangeEvent, useState } from "react";
import CommonBtn from "src/Components/CommonBtn";
import CommonInputForm from "src/Components/CommonInputForm";
import Logout from "src/Components/Logout";
import styled from "styled-components";

function Home() {
  const [userId, setUserId] = useState<string>("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  return (
    <>
      <StyledH1>hhi</StyledH1>
      <div>
        <Logout />
      </div>
      {/* <CommonBtn type="submit" name="로그인" /> */}
      {/* <CommonInputForm type= "text" id="Email" value= {userId} onChange={onChangeUserId} placeholder="Email"/> */}
    </>
  );
}

export default Home;

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.color.black};
`;
