class MusixmatchService {

  _apiKey = 'apikey=14e168ce4612f4f9a3a03a7d6785fe11';
  _items = 6;
  _page = 1;

  getResource = async (url) => {
    let responce = await fetch (url);

    if (!responce.ok) {
      throw new Error (`Could not fetch ${url}, status ${responce.status}`)
    }
    return await responce.json();
  }

  getTopTrecks = async (page = this._page, items = this._items) => {
      const responce = await this.getResource(`chart.tracks.get?chart_name=top&page=${page}&page_size=${items}&country=pt&f_has_lyrics&${this._apiKey}`);
      return responce.message.body.track_list.map(this._transformTracksResponce);

  }

  getAllTracks = async (value, page = this._page) => {
      const responce = await this.getResource(`track.search?q_track=${value}&page_size=6&page=${page}&s_track_rating=desc&f_has_lyrics&${this._apiKey}`);
      return responce.message.body.track_list.map(this._transformTracksResponce);
  }

  getLyric = async (id) => {
    const responce = await this.getResource(`track.lyrics.get?track_id=${id}&${this._apiKey}`);
    return this._transformLyricResponce(responce.message.body.lyrics);
  }

  _transformTracksResponce = (track) => {
    return {
      id: track.track.track_id,
      name: track.track.track_name,
      artist: track.track.artist_name
    }
  }

  _transformLyricResponce = (data) => {
    return {
      trackLyrics: data.lyrics_body,
      id: data.lyrics_id
    }
  }
}

export default MusixmatchService;