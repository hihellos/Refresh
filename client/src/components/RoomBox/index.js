import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar, ListSubheader, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
// import RoomTileInfo from './RoomTileInfo.json';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function RoomBox() {
  const [room, setRoom] = useState([
    {
      "id": 1,
      "room": "Kitchen",
      "img": "./assets/images/kitchen1.jpg"
    },
    {
      "id": 2,
      "room": "Bathroom",
      "img": "./assets/images/bathroom1.jpg"
    },
    {
      "id": 3,
      "room": "Bedroom(s)",
      "img": "./assets/images/bedroom1.jpg"
    },
    {
      "id": 4,
      "room": "Laundry Room",
      "img": "./assets/images/laundryroom1.jpg"
    },
  ])

  const classes = useStyles();
    return(
        // <h3>Room Box grid will render here</h3>

        <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile>
          {room.map((tile) => (
            <GridListTile key={tile.id}>
              <img src={tile.img} alt={tile.room} />
              <GridListTileBar
                title={tile.room}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.room}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
}

//title
//background image
//icon link to individual room page