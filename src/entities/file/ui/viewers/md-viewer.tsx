import ReactMarkdown from "react-markdown";

export const MdViewer = ({ content }: { content: string }) => {
  return (
    <div className="prose">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};
