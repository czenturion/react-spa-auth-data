import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";


export const withAuthRedirect = (WrappedComponent: React.ComponentType) => {
  const AuthWrappedComponent = () => {
    const token = useSelector((state: RootState) => state.auth.token);

    if (!token) return <Navigate to={"/signin"} replace />;

    return <WrappedComponent />;
  }
  return AuthWrappedComponent;
}
