import React, { useState, useEffect } from 'react';

import CardLyrics from './CardLyrics';
import NotFound from './NotFound';
import TrackSearchTitle from './TrackSearchTitle';
import MusixmatchService from "../services/MusixmatchService";

import Row from 'react-bootstrap/Row';
import { Spinner } from "react-bootstrap";

const TrackSearch = (props) => {

  const [trackList, setTrackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const musicService = new MusixmatchService();

  useEffect(() => {
    onFirstRequest();
  }, [props.value]);

  const onFirstRequest = (value = props.value) => {
    musicService.getAllTracks(value)
    .then(onFirstTrackListLoaded)
    .then(onTracksLoaded)
    .catch(onError)
  }

  const onRequest = (page, value = props.value) => {
    musicService.getAllTracks(page, value)
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

  const onFirstTrackListLoaded = (trackList) => {
    setTrackList(trackList);
    setPage(2)
    setLoading(false);
  }

  const onTrackListLoaded = (newTrackList) => {

    return (
      setTrackList(trackList => {
        if (JSON.stringify(trackList) !== JSON.stringify(newTrackList)) {
          return [...trackList, ...newTrackList];
        } else {
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
        {items.length === 0 ? <NotFound /> : items}
      </Row>
    )
  }

  const { value } = props;
  const allItems = getTrackInfo(trackList);

  const errorMessage = error ? <h3 className="title title--error">Error</h3> : null;
  const spinner = loading ? <Spinner animation="border" /> : null;
  const content = !(loading || error) ? allItems : null;

  let visibilityButton = { 'display': 'block' }
  if (trackList.length === 0) {
    visibilityButton = { 'display': 'none' }
  }

  return (
    <>
      <TrackSearchTitle value={value} trackList={trackList} />
      <div className="spinner">
        {errorMessage}
        {spinner}
        {content}
      </div>
      <div className="list_button">
        <button className="button button_pagin"
          style={visibilityButton}
          onClick={() => onRequest(value, page)}>
          load more
        </button>
      </div>
    </>
  )
}

export default TrackSearch;