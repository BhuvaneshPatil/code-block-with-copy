import { useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco as style } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CopyComponent() {
  const codeRef = useRef();
  const [copy, setCopy] = useState(false);
  const handleCopyBtnClick = (e) => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.innerText);
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 2000);
    }
  };
  return (
    <div className="code-block">
      <span className="copy-btn" onClick={handleCopyBtnClick}>
        {copy ? "Copied" : "Copy"}
      </span>
      <div ref={codeRef} style={{ borderRadius: "inherit" }}>
        <SyntaxHighlighter
          language="javascript"
          style={style}
          customStyle={{ margin: 0, borderRadius: "inherit", padding: "1rem" }}
        >
          console.log("Hello");
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
