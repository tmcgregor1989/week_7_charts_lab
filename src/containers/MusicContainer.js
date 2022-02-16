import React, { useState, useEffect } from 'react';
import MusicList from '../components/MusicList';
import ListItem from '../components/ListItem';

const MusicContainer = () => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    const onSongClick = function(song){
        setSelectedSong(song);
    }
    



    return (
        <div className="main-container">
            <MusicList songs={songs} onSongClick={onSongClick} />
            

        </div>
    )



}

export default MusicContainer;