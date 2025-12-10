import { CanActivateFn } from '@angular/router';

export const userAuthGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("role") === "user"){
    return true;
  }else{
    alert("Access denied. Users only.");
    return false;
  }
};
