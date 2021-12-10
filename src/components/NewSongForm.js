import React, { useState,useEffect } from 'react';

function NewSongForm({addSong}) {
    const [title, setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('title ::::: ', title)
        addSong(title);
        setTitle('');
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Song Name</label>
                <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}></input>
                <input type="submit" value="add Song"></input>
            </form>
        </div>
    );
}

export default NewSongForm;