import { useState, useEffect } from 'react'
import SplitPane from 'react-split-pane'
import { CssEditor, HtmlEditor, JavascriptEditor } from "./editors";
import { useDebounce } from "../utils/useDebounce";


const EditorPane = () => {
  const [htmlValue, setHtmlValue] = useState("<div class='bg__image'><img src='' /></div><div class='bg__image'><img src='' /></div>");
  const [jsValue, setJsValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const debouncedHtml = useDebounce(htmlValue, 1000);
  const debouncedJs = useDebounce(jsValue, 1000);
  const debouncedCss = useDebounce(cssValue, 1000);

  useEffect(() => {
    const output = `<html>
                    <style>
                    ${debouncedCss}
                    </style>
                    <body>
                    ${debouncedHtml}
                    <script type="text/javascript">
                    ${debouncedJs}
                    </script>
                    </body>
                  </html>`;
    setOutputValue(output);
  }, [debouncedHtml, debouncedCss, debouncedJs]);

  return (
    <main className="md:pl-64 md:pr-96 flex flex-col flex-1 h-full">
      <div className="relative h-full">
        <SplitPane split="vertical" minSize={"35%"}>
          <JavascriptEditor value={jsValue} onChange={setJsValue} />
          <SplitPane split="horizontal" minSize={"40%"}>
            <SplitPane split="vertical" minSize={"50%"}>
              <CssEditor value={cssValue} onChange={setCssValue} />
              <HtmlEditor value={htmlValue} onChange={setHtmlValue} />
            </SplitPane>
            <iframe srcDoc={outputValue} className="h-full w-full" />
          </SplitPane>
        </SplitPane>
      </div>
    </main>
  )
}

export default EditorPane;