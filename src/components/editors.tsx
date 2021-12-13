import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-tomorrow";

export const JavascriptEditor = (props: any) => {
  return <Editor mode="javascript" title={"JS"} {...props} />;
};

export const HtmlEditor = (props: any) => {
  return <Editor mode="html" title={"HTML"} {...props} />;
};

export const CssEditor = (props: any) => {
  return <Editor mode="css" title={"CSS"} {...props} />;
};

const Editor = ({ mode, onChange, value, title }: any) => {
  return  (
    <div className="editor__container h-full">
      <div className="editor__title">{title}</div>
      <AceEditor
        mode={mode}
        theme="tomorrow"
        width="100%"
        height="100%"
        fontSize={16}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={value}
        onChange={onChange}
        // enableBasicAutocompletion={true}
        // enableLiveAutocompletion={true}
        // enableSnippets={true}
        wrapEnabled={true}
        setOptions={{
          showLineNumbers:true,
          tabSize: 2,
          useWorker: false
        }}
      />
    </div>
  );
};