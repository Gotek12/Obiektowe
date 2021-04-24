import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from '@material-ui/icons/Remove';

const ProductCart = ({ data, add, rem }) => {
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
                  description: {data.description}
              </Typography>
              <Typography variant="body2" component="p">
                  quantity: {data.quantity}
              </Typography>
              <Typography variant="body2" component="p">
                  price: {data.price}
              </Typography>
              {/*<CardActions>*/}
              {/*    <Button*/}
              {/*        variant="contained"*/}
              {/*        color="secondary"*/}
              {/*        startIcon={<AddIcon />}*/}
              {/*        onClick={() => add(data.id)}*/}
              {/*    />*/}
              {/*    <Button*/}
              {/*        variant="contained"*/}
              {/*        color="primary"*/}
              {/*        startIcon={<RemoveIcon />}*/}
              {/*        onClick={() => rem(data.id)}*/}
              {/*    />*/}
              {/*</CardActions>*/}
          </CardContent>
      </Card>
      </Grid>
  );
};

export default ProductCart;
