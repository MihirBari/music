import React, { useState } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

export function Detail(props) {
  const [modalShow, setModalShow] = useState(false);

  const openModal = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <div className="ResourceList">
      <div key={props.id} onClick={openModal} className="ResourceCardd">
        <div className="ResourceCardd_content">
          <h3 className="ResourceName">{props.name}</h3>
          <div className="displayStack__4">
            <b>Issue</b> {props.Summary}
            <br />
            <br />
            <div style={{display:'flex', flexDirection:'row'}}> 
              <p>Read More</p> <ArrowRightCircle style={{marginLeft:'5px', color:'blue'}} size={25} />
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={modalShow}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ zIndex: 100090 }} 
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalHeader" >
          <div
            className="modalHeaders"
          >
            <h5 style={{width:'20px'}}>Issue Summary</h5> <p className="modalHeadersP" >{props.BreifSummary} </p> 
          </div>
          <br />
           
          <div  className="modalHeaders">
            <h5 style={{width:'20px'}}> Resolution </h5>  <p className="modalHeadersP" >{props.Resolution}</p>
          </div>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <div className="displayStack__4">Tags : {props.Tag}</div>
       
        </Modal.Footer>
      </Modal>
    </div>
  );
}
