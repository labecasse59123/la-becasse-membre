import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function ReponsiveDrawer(props) {
  const classes = useStyles();
  const {open, toggleDrawer} = props;

  return (
        <Drawer anchor={'left'} open={open} onClose={toggleDrawer}>
            <div
                className={classes.list}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
            >
                <List>
                    <ListItem button key={1} component={Link} to="/">
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Accueil" />
                    </ListItem>
                    <ListItem button key={2} component={Link} to="/documents">
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary="Documents" />
                    </ListItem>
                </List>
            </div>
        </Drawer>
  );
}
