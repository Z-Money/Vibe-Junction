import { useState } from "react";

export default function Album({ album, updateCurrentAlbum }) {
    return (
        <div className="album" onClick={() => updateCurrentAlbum(album)}>
            <img src={album.cover} alt={album.title} />
            <h3>{album.title}</h3>
            <p>{album.artist}</p>
        </div>
    );
}