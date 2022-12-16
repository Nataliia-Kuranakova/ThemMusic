const TrackSearchTitle = ({ value, trackList } ) => {

  const valueTitle = value === '' ? null : 'Top Tracks For';
  const changedValue = value === '' ? null : `'${value}'`;

  let removeTitle = { 'displey': 'block' }
  if (trackList.length === 0) {
    removeTitle = { 'display': 'none' }
  }
  return (
    <>
      <h5 className='title_value title_value--white' style={removeTitle}>{valueTitle}</h5>
      <p className='title_value' style={removeTitle}>
        {changedValue}
      </p>
    </>
  )
}

export default TrackSearchTitle;