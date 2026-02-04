import { InjectionToken } from "@angular/core";

export type BackendType = 'strapi' | 'firebase' | 'mock';

export const BACKEND = new InjectionToken<BackendType>('BACKEND');