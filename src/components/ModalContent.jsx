import Modal from 'react-bootstrap/Modal';

const ModalContent = ({ artist_name, track_name, lyrics, error, listTitle }) => {

  return (
    <>
      <Modal.Header closeButton className="bg-dark border border-0" >
        <Modal.Title id="example-custom-modal-styling-title" className='modal-title' style={listTitle}>
          {artist_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <h4 className='modal-text modal_song-title' style={listTitle}>{track_name}</h4>
        <p className='modal-title modal-text'>
          {`${lyrics}`}
        </p>
        {error}
      </Modal.Body>
    </>
  )
}

export default ModalContent;