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
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function MediaCard() {
  return (
    <>

      <Box
        sx={{
          backgroundColor: "#414141",
          color: "white",
        }}
      >
        <Stack justifyContent={"center"} direction="row" marginTop={5}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Sin Stock</Button>
            <Button>Con Stock</Button>
          </ButtonGroup>
        </Stack>
      </Box>
      <Stack spacing={2} alignItems={"center"}>
        <Card sx={{}}>
          <CardMedia
            sx={{ height: 140, width: 290 }}
            image="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <FavoriteBorderIcon>
                  <InboxIcon />
                </FavoriteBorderIcon>
                <ListItemText primary="Cocina" />
              </ListItemButton>
            </ListItem>
          </List>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
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
        </Box>
      </Stack>
    </>
  );
}
