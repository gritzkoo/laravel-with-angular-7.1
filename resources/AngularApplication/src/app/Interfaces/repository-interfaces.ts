/**
 * - default laravel passport protocol for login
 */
export interface IOauth {
  grant_type: string;
  client_id: number;
  client_secret: string;
  scope: string;
  username: string;
  password: string;
}
/**
 * - when login return success the response schould be this
 */
export interface IOauthResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}
/**
 * - logged user response laravel passport API
 */
export interface IOauthLoggedUser {
  id: number;
  name: string;
  email: string;
  email_verified_at: null| string;
  last_logged_id: null |string;
  created_at: string;
  updated_at: string;
}
/**
 * - simple loader state
 */
export interface ILoaderState {
  show: boolean;
}
export class Users {
  id: number;
  name: string;
}
