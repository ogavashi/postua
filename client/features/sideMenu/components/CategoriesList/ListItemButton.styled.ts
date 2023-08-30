import { styled, ListItemButton as MuiListItemButton } from '@mui/material';

export const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  // TODO: Change later
  width: 204,
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
}));
