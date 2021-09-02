import './ErrorMessage.css';

function ErrorMessage({errorText, className }){

	const classNames = 'message-error' + ' ' + className ;
  return <p className={classNames}>{errorText}</p>;
};

export default ErrorMessage;