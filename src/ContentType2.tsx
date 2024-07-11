interface cardContent {
  cardContent: string;
}
let style: React.CSSProperties = {
  width: '806px',
  height: '277px',
  fontSize: '12px',
  position: 'relative',
  left: '6vw',
  top: '5vh',
  color: 'black',
};

const Cont2: React.FC<cardContent> = ({ cardContent }) => {
  return <div style={style}>{cardContent}</div>;
};

export default Cont2;
