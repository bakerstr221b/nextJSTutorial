import css from "styled-jsx/css";
import { useRouter } from "next/router";
import Link from "next/link";
import formatDistance from "date-fns/formatDistance";

const style = css`
  .repos-wrapper {
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding: 0 16px;
  }
  .repos-header {
    padding: 16px 0;
    font-size: 14px;
    font-weight: 600;
    border-bottom: 1px solid #e1e4e8;
  }
  .repos-count {
  }
  .repository-pagination {
  }
`;
