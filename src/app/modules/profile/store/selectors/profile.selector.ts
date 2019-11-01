import { createFeatureSelector } from '@ngrx/store';
import { ProfileState } from '../states/profile.state';

export const getProfileState = createFeatureSelector<ProfileState>('profile');
