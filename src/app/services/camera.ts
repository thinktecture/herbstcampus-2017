import {Observable} from 'rxjs/Observable';
import {DesktopCameraService} from './desktopCamera';
import {PlatformService} from './platform';

export interface ICameraService {
    getPhoto(): Observable<string>;
}

export abstract class CameraService implements ICameraService {
    public abstract getPhoto(): Observable<string>;
}

export function cameraServiceFactory(platformService: PlatformService): ICameraService {
    return new DesktopCameraService();
}
