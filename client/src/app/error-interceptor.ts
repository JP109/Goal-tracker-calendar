import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export class ErrorInterceptor implements HttpInterceptor {

      intercept(req: HttpRequest<any>, next: HttpHandler) {
            return next.handle(req).pipe(
                  catchError((error: HttpErrorResponse)=>{
                        console.log(error); //Error interceptor isn't being used right now.
                        return throwError(error);
                  })
            );
      }
}