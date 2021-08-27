import './Box.css';

// Так делаются стили компонентов библиотек
function Box({ type = 'small', classNames = '', styles }) {
  return (
    <div className={`box box-${type} ${classNames}`} style={styles}>
      Box
    </div>
  );
}

export default Box;
