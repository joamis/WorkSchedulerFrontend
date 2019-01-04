export const server = 'http://localhost:3000';
export const groupUrl = server + '/groups';
export const preferenceUrl = server + '/preferences';
export const registrationUrl = server + '/register';
export const userUrl = server + '/auth';
export const adminUrl = server + '/admin';
export const usersUrl = server + '/users'
export const calculateScheduleUrl = server + '/scheduleWork';
export const isScheduleCalculatedUrl = server + '/isScheduleCalculated';
export const studentsUrl = server + '/students'
export const subjectsUrl = server + '/subjects'
export const resetCalculatedScheduleUrl = server + '/resetScheduleWork'


export function getWithToken(url, token): string {
  const tokenWithPrefix = '?token=' + token;
  return `${url}${tokenWithPrefix}`;
}
