import PropTypes from 'prop-types';
// import Container from '../Container/Container';
import s from './Alert.module.css';
console.log(s);

function Alert({ text, type }) {
  return (
    // <Container>  // Если нужно Container исп-ть в секции
    <p role="alert" className={s[type]}>
      {text}
    </p>
    // </Container>
  );
}

export default Alert;

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
};

// Если без класса по умолчанию

// function Alert({ text, type = '' }) {
//     const typeClass = type ? `Alert--${type}` : '';
//     return (
//         <p role="alert" className={`Alert ${typeClass}`.trim()}>
//             {text}
//         </p>
//   );
// }
