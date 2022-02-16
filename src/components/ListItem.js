import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
const ListItem = ({song, position, onSongClick}) => {
   
    

    const handleClick = function(){
        onSongClick(song);
    }


return <li onClick={handleClick}>
    <p>Chart Position: {position + 1}</p>
    <p>Song Title: {song['im:name'].label}</p>
    <p>Artist: {song['im:artist'].label}</p>
    <img src={song['im:image'][2].label}/>
    {/* <audio controls>
        <source src={song.link[2].attributes} type="audio/mp4" />
    </audio> */}

    </li>

}

export default ListItem;