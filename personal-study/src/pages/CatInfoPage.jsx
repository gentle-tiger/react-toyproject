/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import PageBtn from "../components/PageBtn";
import ModalBtn from "../components/ModalBtn";
import CatInfo from "../components/CatInfo";

function CatInfoPage() {
  return (
    <div css={catInfoPageCss}>
      <CatInfo />
      <PageBtn />
      <ModalBtn title="catInfo" text="catInfo페이지입니다.!" />
    </div>
  );
}

export default CatInfoPage;
const catInfoPageCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
