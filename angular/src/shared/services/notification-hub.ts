import { AppComponentBase } from '@shared/app-component-base';
import { AppConsts } from './../AppConsts';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotificaionHubService  {

    private hubConnection: HubConnection;
    isConnectionOpened = false;
    private message$: Subject<string>;

    constructor(injector: Injector, private router: Router) {
       // super(injector);
        this.message$ = new Subject<string>();
    }

    public startConnection(token) {


        this.hubConnection = new HubConnectionBuilder()
                                            .configureLogging(LogLevel.Information)
                                            .withUrl(AppConsts.remoteNotificationUrl, { accessTokenFactory: () => token })
                                            .withAutomaticReconnect([0, 2, 10, 30, 60, 90, 120])
                                            .build();

        this.hubConnection.start()
                            .then(() => {
                                this.isConnectionOpened = true;
                                this.addSendNotificationListener();
                                console.log('Notification Hub Connection started! ');
                            })
                            .catch(err => {
                                this.isConnectionOpened = false;
                                console.log('Error while starting connection: ' + err);
                            })

    }

    public getMessage(): Observable<string> {
        return this.message$.asObservable();
      }

    public addSendNotificationListener()   {

        this.hubConnection.on('SendNotification', (message: string, title: string) => {

            console.log('SendPrivateMessage works! ' + message);

            this.message$.next(message);

            abp.notify.info('', title , {
                    position: 'bottom-start',
                    showConfirmButton: false,
                    timer: 10000,
                    padding: '5px',
                    toast: true,
                    animation: false,
                    onOpen:(toast) => {

                        toast.addEventListener('click', e => {
                            this.router.navigate(['/app/main/mazadAdmin/admin-notifications'] );
                        })
                      }
            });

        });
    }

}
