import { createReducer, on } from '@ngrx/store';
import {  decrement, reset, logout, userData } from './counter.actions';

export const initialState = {};

export const counterReducer = createReducer(
  initialState,
  // on(increment, (state) => state+"add"),
  // on(decrement, (state) => "minus"),
  // on(reset, (state) => "")
  on(userData, (state,actions) => {return { ...state, user:actions.user}}),
  on(logout, (state) => state+"false")
);

export function user(state:any,action:any){
  return counterReducer(state,action);
}