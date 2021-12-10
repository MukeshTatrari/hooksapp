import React, { useState,useEffect } from 'react';
import { v1 as uuid } from 'uuid';
import NewSongForm from './NewSongForm';


function SongList(props) {
    const songsList = [
        { title: 'This wild Darkness', id: 1 },
        { title: 'Home alone', id: 2 },
        { title: 'ohh la la la', id: 3 }
    ]
    const [songs, setSongs] = useState(songsList);

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }])
    }

    useEffect(()=>{
        console.log("songList :::: ", songs);
    },[songs])

    return (
        <div className="song-list">
            <ul>
                {songs.map(song => <li key={song.id}>{song.title}</li>)}
            </ul>
           <NewSongForm addSong = {addSong}/>
        </div>
    );
}

export default SongList;