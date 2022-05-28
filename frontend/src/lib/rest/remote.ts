import { Method } from './d';

const api = <T>(url: string, method: Method): Promise<T> => fetch(url, {method}).then(res => res.json());

export const get = <T>(url: string) => api<T>(url, 'GET');

export const remove = <T>(url: string) => api<T>(url, 'DELETE');
