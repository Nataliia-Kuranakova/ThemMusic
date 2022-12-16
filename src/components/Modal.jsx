import { useState, useEffect } from 'react';

import MusixmatchService from '../services/MusixmatchService';
import ModalError from './ModalError';
import ModalContent from './ModalContent';

import Modal from 'react-bootstrap/Modal';
import { Spinner } from "react-bootstrap";

function Details({ track_id, track_name, artist_name }) {

  const [show, setShow] = useState(false);
  const [lyrics, setLyric] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const musicService = new MusixmatchService();

  useEffect(() => {
    handleLyricBody()
  }, [show])

  const handleLyricBody = () => {
    onLyricLoading();
    if (show && !lyrics) {
      musicService.getLyric(track_id)
        .then(onLyricLoaded)
        .catch(onError)
    }
  }

  const onLyricLoaded = (data) => {
    setLyric(data.trackLyrics);
    setLoading(false);
  }

  const onLyricLoading = () => {
    setLoading(true);
  }

  const onError = () => {
    setError(true);
    setLoading(false);
    setLyric('');
  }

  const errorMessage = error ? <ModalError /> : null;
  const listTitle = error ? { 'display': 'none' } : null;
  return (
    <>
      <div>
        <button type='button' className='button' onClick={() => { setShow(true); }}>
          show track text
        </button>
      </div>

      <Modal
        show={show}
        onHide={() => {
          setShow(false);
          setLyric(null);
        }}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        {loading ?
          (
            <div className="spinner--modal">
              <Spinner animation="border" />
            </div>
          )
          :
          (
            <ModalContent
              error={errorMessage}
              artist_name={artist_name}
              lyrics={lyrics}
              track_name={track_name}
              listTitle={listTitle} />

          )}
      </Modal>
    </>
  );
}

export default Details;