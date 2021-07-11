import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import MovieIcon from "@material-ui/icons/Movie";
import FolderIcon from "@material-ui/icons/Folder";
export const MenuItems = () => {
  return (
    <div>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <MovieIcon />
          </ListItemIcon>
          <ListItemText primary="Movies" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Genres" />
        </ListItem>
      </List>
    </div>
  );
};
