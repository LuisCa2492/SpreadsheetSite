import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
const ShowAll = () => {

  const { combos } = useSelector(state => state.principal);
  const vistaDeCombo = (id) => {
    console.log('deck' + id);
  }

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)", // 12 columnas
          // gap: 2
        }}
      >
        <Box sx={{ gridColumn: "span 3" }}></Box>
        <Box sx={{ gridColumn: "span 6" }}>
          {
            combos.map((item, index) => (
              <Box onClick={() => vistaDeCombo(item.deck)} 
              component={Link} 
              to={`/Details/${item.fakeId}`}
              sx={{
                display: "block",
                textDecoration: "none",        // 👈 quita subrayado de <a>
                color: "inherit",
                border: "2px solid #000", // grosor, estilo y color
                borderLeft: "0", // grosor, estilo y color
                paddingLeft: 2,               // un poco de espacio para que no se pegue el texto
                marginBottom: 2,
                gridColumn: "span 6",
                transition: "all 0.3s ease", // suaviza el efecto
                cursor: "pointer",           // cambia el cursor al estilo link
                "&:hover": {
                  borderColor: "green",  // cambia color del borde
                  boxShadow: 3,                 // agrega sombra (usa valores de theme)
                  transform: "scale(1.02)",     // pequeño zoom
                },
                
              }} key={index}>
                <h5>{item.deck}</h5>
                <p>{item.descripcion}</p>
              </Box>
            ))

          }
        </Box>
        <Box sx={{ gridColumn: "span 3" }}></Box>
      </Box>

    </>
  )
}

export default ShowAll