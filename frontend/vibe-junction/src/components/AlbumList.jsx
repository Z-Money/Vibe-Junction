import { useState } from "react";
import './AlbumList.css';
import Album from "./Album";

export default function AlbumList({ albums, updateCurrentAlbum }) {
    return (
        <div className="album-list-container">
            <h1 className="container-title">Albums</h1>
            <div className="album-list">
                {albums.map((album) => (
                    <Album key={album.id} album={album} updateCurrentAlbum={updateCurrentAlbum}/>
                ))}
            </div>
            {/* <ul className="album-list">
                {albums.map((album) => (
                    <li key={album.id}>
                        <Album album={album} />
                    </li>
                ))}
            </ul> */}
        </div>
    );
}