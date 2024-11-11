import React, { useRef, useEffect } from 'react';
import './call.css';

const Call = () => {
  const modalRef = useRef(null);
  const callButtonRef = useRef(null);
  const closeSpanRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    const callButton = callButtonRef.current;
    const closeSpan = closeSpanRef.current;

    callButton.onclick = () => {
      modal.style.display = 'block';
    };

    closeSpan.onclick = () => {
      modal.style.display = 'none';
    };
    const confirmCall = () => {
      window.location.href = 'tel:+917989094014';
    };
    document.getElementById('confirmCall').onclick = confirmCall;
    const outsideClickHandler = (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
    window.addEventListener('click', outsideClickHandler);
    return () => {
      window.removeEventListener('click', outsideClickHandler);
    };
  }, []);

  return (
    <>
      <div className="call-button" id="callButton" ref={callButtonRef}>
        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/phone.png" alt="Call Icon" />
      </div>
      <div id="callModal" className="modal" ref={modalRef}>
        <div className="modal-content">
          <span className="close" ref={closeSpanRef}>&times;</span>
          <p>Do you want to call RB Express?</p>
          <button id="confirmCall">Call Now</button>
        </div>
      </div>
    </>
  );
};

export default Call;
