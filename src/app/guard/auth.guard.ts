import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("role") === "admin"){
    return true;
  }else{
    alert("Access denied. Admins only.");
    return false;
  }
};
