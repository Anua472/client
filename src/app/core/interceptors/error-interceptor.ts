import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Snackbar } from '../services/snackbar';
import { errorContext } from 'rxjs/internal/util/errorContext';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);
  const snackbar = inject(Snackbar)

  return next(req).pipe(catchError((err: HttpErrorResponse) => {
    if(err.status === 400){
      if(err.error.errors){
        const modelStateError =[];
        for (const key in err.error.errors){
          if (err.error.errors[key]){
            modelStateError.push(err.error.errors[key])
          }

        }
        throw modelStateError.flat();
      }else{
        snackbar.error(err.error.title || err.error);
      }
      
    }
    if(err.status === 401){
      snackbar.error(err.error.title || err.error)
    }
    if(err.status === 404){
      router.navigateByUrl('/not-found');
    }
    if(err.status === 500){
      router.navigateByUrl('/server-error')
    }

    return throwError(() => err)
  }))
};
