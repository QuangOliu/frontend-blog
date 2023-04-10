import React, { useCallback, useEffect, useMemo, useState } from "react";
import Quill from "quill";

import "quill/dist/quill.snow.css";
import "../styles/TextEditor.css";

export default function TextEditor() {
  // Tool bar options
  
  const TOOLBAR_OPTIONS = useMemo(
    () => [
      ["bold", "italic", "underline", "strike", "link", "image", "video"], // toggled buttons
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
    ],
    []
  );

  const [quill, setQuill] = useState(null);

  const wrapperRef = useCallback(
    (wrapper) => {
      if (wrapper == null) return;

      wrapper.innerHTML = "";
      const editor = document.createElement("div");
      wrapper.append(editor);
      const q = new Quill(editor, {
        theme: "snow",
        modules: { toolbar: TOOLBAR_OPTIONS },
      });
      setQuill(q);
    },
    [TOOLBAR_OPTIONS]
  );

  useEffect(() => {
    if (quill === null) return;
    quill.on("text-change", function () {
      console.log("Text change!");
    });
  }, [quill]);

  return (
    <div>
      <div className='container' ref={wrapperRef}></div>
      <div id='blog'></div>
    </div>
  );
}
