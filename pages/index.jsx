// const App = () => <div>Hello Next.js!!</div>;
// export default App;
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const App = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <>
      <div>
        <button type="button" onClick={() => router.push("/jerry")}>
          tomato로 가기
        </button>
        <p>이름</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "12px" }}
        />
        <button type="button" onClick={() => router.push(`/vegetable/${name}`)}>
          {name}으로 가기
        </button>
      </div>
      {/* https://heokknkn.tistory.com/40 */}
      <div>
        <h2>Link to 'tomato' Page</h2>
        <Link href="/tomato">Move to '/tomato'</Link>
        <a href="/tomato">
          <p>Move to '/tomato'</p>
        </a>
        <Link href="/apple" legacyBehavior>
          <a>Move to '/apple'</a>
        </Link>
        {/* Error: Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>. */}
        {/* https://velog.io/@minsing-jin/Error-note-Invalid-Link-with-a-child.-Please-remove-a-or-use-Link-legacyBehavior */}
        {/* <Link href="/apple2">
          <a>Move to '/apple2'</a>
        </Link> */}

        <h2>Link to 'potato' Page</h2>
        <p>
          <Link href="/vegetable/potato" legacyBehavior>
            <a>Move to '/vegetable/potato'</a>
          </Link>
        </p>
        <Link href="/vegetable/something" legacyBehavior>
          <a>Move to '/vegetable/something'</a>
        </Link>
      </div>
    </>
  );
};

export default App;
