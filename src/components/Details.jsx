import React from 'react'
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ReactPlayer from 'react-player';

const Details = () => {

    const { combos } = useSelector(state => state.principal);
    const { fakeId } = useParams();

    const resultado = combos.find(item => item.fakeId === Number(fakeId));

    const convertirYouTubeEmbed = (url) => {
        const urlObj = new URL(url);
        const id = urlObj.searchParams.get("v"); // obtiene el video ID
        return id ? `https://www.youtube.com/embed/${id}` : url;
    };

    // luego en tu componente
    const enlaceEmbed = resultado ? convertirYouTubeEmbed(resultado.enlace) : '';
    return (
        <>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(12, 1fr)", // 12 columnas
                    // gap: 2
                }}
            >
                <Box sx={{ gridColumn: "span 2" }}></Box>
                <Box sx={{ gridColumn: "span 8" }}>
                    <h1>{resultado?.deck || ''}</h1>
                    <p>{resultado?.descripcion || ''}</p>
                    <a 
                        href={resultado?.enlace}
                        target='_blank'
                        rel="noopener noreferrer"
                    >Ver en db </a>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.duelingbook.com/replay?id=1168588-74036188"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </Box>
                <Box sx={{ gridColumn: "span 2" }}></Box>
            </Box>
        </>
    )
}

export default Details
