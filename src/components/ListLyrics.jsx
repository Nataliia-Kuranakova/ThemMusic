import TrackSearch from './TrackSearch';
import TopTracks from './TopTracks';

const ListLyrics = ({ value }) => {

  const renderComponent = value === '' ? <TopTracks/> : <TrackSearch value={value}/>
                            
  return (
    <>
      {renderComponent}
    </>
  )
}

export default ListLyrics;