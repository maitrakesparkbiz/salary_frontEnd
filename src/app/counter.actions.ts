import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
// export const Login = createAction('[Counter Component] login');
export const logout = createAction('[Counter Component] logout');
export const USER_VALUE = '[auth page] user value';

export const userData = createAction(
    USER_VALUE,
    props<{ user: any }>()
)