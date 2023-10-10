import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function MediaCard() {
  return (
    <>
      <Button size="small">Stock</Button>
      <Button size="small">Sin Stock</Button>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          title="Cocina"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cocina
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <FavoriteBorderIcon>
                  <InboxIcon />
                </FavoriteBorderIcon>
                <ListItemText primary="Tomates" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <FavoriteBorderIcon>
                  <DraftsIcon />
                </FavoriteBorderIcon>
                <ListItemText primary="Papas" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
      </Box>
    </>
  );
}
