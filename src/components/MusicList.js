import React from 'react';
import ListItem from './ListItem';


const MusicList = ({songs, onSongClick}) => {

    const songsItems = songs.map((song, index) => {
        return <ListItem song={song} position={index} key={index} onSongClick={onSongClick}/>

    })

    return (
        <div>
            <ul>
                {songsItems}
            </ul>
        </div>
    )

}


export default MusicList;