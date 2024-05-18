import React from "react"
import { Navigate } from "react-router-dom"


export const withAuthRedirect = (WrappedComponent: React.ComponentType) => {
  const AuthWrappedComponent = () => {
    const token = localStorage.getItem('token');
    if (!token) return <Navigate to={"/signin"} replace />;

    return <WrappedComponent />;
  }
  return AuthWrappedComponent;
}
