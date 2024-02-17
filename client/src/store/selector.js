import { createSelector } from '@reduxjs/toolkit';

export const userSelector = (state) => state.auth.user
export const tokenSelector = (state) => state.auth.accessToken
export const passwordFolderSelector = (state) => state.folder.password
export const idFolderSelector = (state) => state.folder.idFolder