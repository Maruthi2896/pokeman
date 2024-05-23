import React, { useState, useEffect } from "react";
import {
  Card,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import "../css/pokeman.css";

function Pokeman({ setLikedPokemon }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [likedStatus, setLikedStatus] = useState({});

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        const detailedDataPromises = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        const detailedData = await Promise.all(detailedDataPromises);
        setPokemonData(detailedData);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };
    fetchPokemonData();
  }, []);

  const handleLike = (index) => {
    setLikedStatus((prev) => ({
      ...prev,
      [index]: true,
    }));
    setLikedPokemon((prev) => ({
      ...prev,
      [index]: pokemonData[index],
    }));
  };

  const handleDislike = (index) => {
    setLikedStatus((prev) => ({
      ...prev,
      [index]: false,
    }));
    setLikedPokemon((prev) => {
      const updatedLiked = { ...prev };
      delete updatedLiked[index];
      return updatedLiked;
    });
  };

  return (
    <div className="pokeman">
      <Link to="/liked">
        <Button variant="contained" color="primary">
          View Liked Pokemon
        </Button>
      </Link>
      {pokemonData.map((pokemon, index) => (
        <Card key={index} sx={{ minWidth: 275 }} className="card">
          <CardContent>
            <Box className="title">
              <Typography sx={{ fontSize: 20 }} gutterBottom>
                {pokemon.name}
              </Typography>
              {likedStatus[index] ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
            </Box>
            <CardMedia
              className="img"
              sx={{ height: 200, width: 200, borderRadius: 10 }}
              image={pokemon.sprites.front_default}
              title={pokemon.name}
            />
            <Box className="abilities">
              {pokemon.abilities.map((ability, idx) => (
                <p key={idx} className="tags">
                  {ability.ability.name}
                </p>
              ))}
            </Box>
          </CardContent>
          <CardActions className="actions">
            <Button
              className="btn"
              onClick={() => handleDislike(index)}
              variant="contained"
              color="error"
            >
              Dislike
            </Button>
            <Button
              className="btn"
              onClick={() => handleLike(index)}
              variant="contained"
              color="success"
            >
              Like
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default Pokeman;
