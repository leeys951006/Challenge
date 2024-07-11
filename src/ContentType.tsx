interface cardContent {
  cardContent: string;
}
let style: React.CSSProperties = {
  width: '426px',
  height: '77px',
  position: 'relative',
  fontSize: '50px',
  top: '5vh',
  left: '5vw',
  color: 'black',
};

const Cont: React.FC<cardContent> = ({ cardContent }) => {
  return <div style={style}>{cardContent}</div>;
};

export default Cont;
