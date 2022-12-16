import { useState, useEffect } from 'react';

import CardLyrics from './CardLyrics';
import MusixmatchService from "../services/MusixmatchService";

import Row from 'react-bootstrap/Row';
import { Spinner } from "react-bootstrap";

const TopTracks = () => {

  const [trackList, setTrackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const musicService = new MusixmatchService();

  useEffect(() => {
    onRequest();
  }, [])

  const onRequest = (page) => {
    musicService.getTopTrecks(page)
      .then(onTrackListLoaded)
      .then(onTracksLoaded)
      .catch(onError)
  }

  const onTracksLoaded = () => {
    setLoading(false);
  }

  const onError = () => {
    setError(true);
    setLoading(false);
  }

  const onTrackListLoaded = (newTrackList) => {

    return (
      setTrackList(trackList => {
        if (JSON.stringify(trackList) !== JSON.stringify(newTrackList)) {
          return [...trackList, ...newTrackList];
        }else {
          return trackList;
        }
      }),
      setLoading(false),
      setPage(page => page + 1)
    )
  }

  const getTrackInfo = (arr) => {
    const items = arr.map((item) => {
      const { name, artist, id } = item;

      return (
        <CardLyrics
          key={id}
          track={name}
          artist={artist}
          track_id={id}
        />
      )
    });
    return (
      <Row>
        {items}
      </Row>
    )
  }

  const allItems = getTrackInfo(trackList);

  const errorMessage = error ? <h3 className="title title--error">Error</h3> : null;
  const spinner = loading ? <Spinner animation="border" /> : null;
  const content = !(loading || error) ? allItems : null;

  const listTitle = error ? { 'opacity': '0' } : null;

  let visibilityButton = { 'display': 'block' }
  if (trackList.length === 0) {
    visibilityButton = { 'display': 'none' }
  }

  return (
    <>
      <h2 className="title--list list" style={listTitle}>Top Tracks</h2>
      <div className="spinner">
        {errorMessage}
        {spinner}
        {content}
      </div>
      <div className="list_button">
        <button className="button button_pagin"
          style={visibilityButton}
          onClick={() => onRequest(page)}>
          load more
        </button>
      </div>
    </>
  )
}

export default TopTracks;