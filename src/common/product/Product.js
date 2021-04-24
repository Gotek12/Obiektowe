import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";

const Product = ({ data, addToStore }) => {
  return (
      <Grid
          container
          alignItems="center"
          direction="column"
          justify="center"
      >
      <Card variant="outlined"
      style={{minWidth: "30vw",  marginTop: "20px"}}>
          <CardContent>
              <Typography variant="h5" component="h2">
                  {data.name}
              </Typography>
              <Typography color="textSecondary">
                  {data.description}
              </Typography>
              <Typography variant="body2" component="p">
                  {data.price}
              </Typography>
          </CardContent>
          <CardActions>
              <Button size="small" onClick={() => addToStore.addToCart(data.id)}>Add to Cart</Button>
          </CardActions>
      </Card>
      </Grid>
  );
};

export default Product;
