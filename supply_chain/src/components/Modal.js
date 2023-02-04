import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h3>Here is the NFT receipt for your most recent transaction:</h3>
        </div>
        <div className="body">
          <div className="modiv">
            <span></span>
            <img src="https://user-images.githubusercontent.com/84284739/216785174-deb2edba-61ea-4182-a3ea-20f72c6f7cf2.png" alt="" className="log00"/>

            <span>
                <p>receipt token Hash : -0x304d98c163a55d4d6RPYwFcf</p>
            </span>
            
            <span>
                <p>Product: Coca Cola</p>
            </span>

            <span>
                <p>Date Aded: 2023/02/04</p>
            </span>
            <span>
                <p>Quantity: 300 boxes</p>
            </span>

          </div>
        </div>
        <span>
                <p style={{"color":"green"}}>{"{ lamports: '0', solana: '0.001' }"}</p>
                <span>
                <p>Token: SOL </p><p>Transaction successfull</p>
            </span>
                
        </span>
        
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Close
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Modal;