import { IconButton, styled, Toolbar, Typography } from "@material-ui/core";
import MuiAppBar, {
  AppBarProps as MuiAppBarProps,
} from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const NavBar = ({ appBarProps, onMenuIconClick }: NavBarProps) => {
  return (
    <AppBar
      position="fixed"
      open={appBarProps.open}
      drawerWidth={appBarProps.drawerWidth}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuIconClick}
          edge="start"
          sx={{ mr: 2, ...(appBarProps.open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Movies
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth?: number;
}

interface NavBarProps {
  appBarProps: AppBarProps;
  onMenuIconClick: () => void;
}
