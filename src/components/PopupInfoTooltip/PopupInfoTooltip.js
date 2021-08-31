import { useEffect } from 'react';
import './PopupInfoTooltip.css';
import errorImage from '../../images/cancel.svg';
import successImage from '../../images/checked.svg';
// import { CloseButton, Paragraph } from '../../ui/index';
// import infoTooltipPopupTexts from './locales/RU';
// import { ESCAPE_KEYBOARD_BUTTON } from '../../../config/constants';

// const { ariaLabelCloseButtonText } = infoTooltipPopupTexts;

function PopupInfoTooltip({ isOpen, onClose, text, isError }) {
//  console.log(isOpen, onClose, text, isError)
  const popupIcon = isError ? errorImage : successImage;
  // const popupText = text;
  const altText = text;

  function handleCloseOnEscape(event) {
    const { key } = event;
    if (key === 'Escape') {
      onClose();
    }
  }

  function closePopupOnOverlayClick(event) {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleCloseOnEscape);
    return () => {
      document.removeEventListener('keydown', handleCloseOnEscape);
    };
  }, []);

  return (
    <div
      onClick={closePopupOnOverlayClick}
      className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className='popup__btn-close' type='button' onClick={onClose}/>
        <img src={popupIcon} alt={altText} className="popup__image" />
        <p className='popup__text'>{text}</p>
      </div>
    </div>
  );
}

PopupInfoTooltip.defaultProps = {
  errorText: '',
  isOpen: false,
  isError: false,
};

export default PopupInfoTooltip;

// function PopupInfoTooltip(props){

// 	// console.log(props.isOpen, props.isError, props.textInfo)
//   return (
//     <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`} >
//       <div className='popup__container'>
//         <button className='popup__btn-close' type='button' onClick={props.onClose}/>
//         <div className={`popup__image ${props.isError ? 'popup__image_error' : ''}`} />
// 				<p className='popup__text'>{props.textInfo}</p>
//       </div>
//     </div>
//   );
// };

// export default PopupInfoTooltip;