import React from "react";
import {
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../css/pokeman.css"

function LikedPokeman({ likedPokemon }) {
  const likedList = Object.values(likedPokemon);

  return (
    <div className="liked-pokeman">
      <Link to="/pokeman">
        <Button variant="contained" color="primary">
          Back to All Pokemon
        </Button>
      </Link>
      {likedList.length > 0 ? (
        likedList.map((pokemon, index) => (
          <Card key={index} sx={{ minWidth: 275 }} className="card">
            <CardContent>
              <Box className="title">
                <Typography sx={{ fontSize: 20 }} gutterBottom>
                  {pokemon.name}
                </Typography>
                <FavoriteIcon color="error" />
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
          </Card>
        ))
      ) : (
        <Typography>No liked Pokemon.</Typography>
      )}
    </div>
  );
}

export default LikedPokeman;
