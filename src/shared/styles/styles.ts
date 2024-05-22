const borderOutlineNone = {
  border: 'none',
  outline: 'none',
}

export const loginModalStyle = {
  textAlign: 'center',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
  '&:active': borderOutlineNone,
  '&:focus': borderOutlineNone,
};

export const empModalStyle = {
  textAlign: 'center',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: 1,
  boxShadow: 24,
  maxWidth: 400,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  p: 4,
  '&:active': borderOutlineNone,
  '&:focus': borderOutlineNone,
};