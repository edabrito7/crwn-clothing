import { createSelector } from 'reselect';



const directorySelect = state => state.directory;


 export const selectDirectorySections = createSelector(
     [directorySelect],(directory) => directory.sections
 )