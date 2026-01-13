}
 
 export const Comment: React.FC<CommentProps> = ({ text }) => {
  return <div 
    dangerouslySetInnerHTML={{ __html: text }}
  />;
 };