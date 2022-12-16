import Card from 'react-bootstrap/Card';
import Details from "./Modal";

import Col from 'react-bootstrap/Col';

const CardLyrics = ({ track, artist, track_id }) => {

  const artistName = artist.length >= 20 ? `${artist.slice(0, 20)}...` : artist;
  const trackName = track !== undefined && track.length >= 19 ? `${track.slice(0, 19)}...` : track;

  return (
    <>
      <Col lg={4} md={6} className="my-1 card-text">
        {
          <Card className="card mb-4 my-auto mx-auto">
            <Card.Header className="card__title">
              <span className="card__subtitle">
                Artist:
              </span>
              {artistName}
            </Card.Header>
            <Card.Body>
              <Card.Title className="card__deskr">
                <span className="card__subtitle">
                  Track:
                </span>
                {trackName}
              </Card.Title>
              <Details track_id={track_id} track_name={track} artist_name={artist} />
            </Card.Body>
          </Card >
        }
      </Col>
    </>
  )
}

export default CardLyrics;