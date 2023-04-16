import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  content: string;
};

const MarkdownViewer: React.FC<Props> = ({ content }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} className='prose lg:prose-xl'>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownViewer;
