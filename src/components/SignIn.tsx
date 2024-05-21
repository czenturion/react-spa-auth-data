import * as React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthRequest, LoginFormDataT } from "../api/auth";
import {
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Avatar,
  Button,
  Link,
  Grid,
  Box
} from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";
import LoginModal from "./LoginModal";
import { setToken } from "../store/authSlice";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../store/store";
import CircularLoader from "./CircularLoader";


export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    setError,
    clearErrors
  } = useForm<LoginFormDataT>();
  const [showPassword, setShowPassword] = React.useState(false);
  const [openModal, setOpen] = React.useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state: RootState) => state.data.isLoading);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit = (formData: LoginFormDataT) => {
    AuthRequest(formData, setError, dispatch)
      .then(res => {
        if (res) {
          dispatch(setToken(res.token));
          navigate('/');
        }
      })
      .catch(er => console.log(er))
  };

  if (loading) return <CircularLoader />

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
          <LockOutlined/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Войти
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{mt: 1}}>
          <TextField
            {...register("username", {required: true})}
            error={!!errors.authFailed?.message}
            margin="normal"
            required
            fullWidth
            id="username"
            label="Логин"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={() => clearErrors('authFailed')}
          />
          <FormControl error={!!errors.authFailed?.message} variant="outlined" fullWidth margin="normal">
            <InputLabel htmlFor="outlined-adornment-password">Пароль *</InputLabel>
            <OutlinedInput
              {...register("password", {required: true})}
              id="outlined-adornment-password"
              label="Password *"
              type={showPassword ? 'text' : 'password'}
              onChange={() => clearErrors('authFailed')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id="component-error-text">{errors.authFailed?.message}</FormHelperText>
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary"/>}
            label="Запомнить"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
          >
            Принять
          </Button>
          <Grid container>
            <Grid item xs>
              <Link variant="body2">
                Забыли пароль?
              </Link>
            </Grid>
            <Grid item xs textAlign="right">
              <Link variant="body2">
                Еще не зарегистрированы? Создать аккаунт
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <LoginModal openModal={openModal} setOpen={setOpen} />
    </Container>
  );
}
