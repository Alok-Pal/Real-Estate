import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from './slice/signupSlice';
import logInSlice from './slice/logInSplice';

const store = configureStore({
	reducer: {
		signUp: signUpSlice.reducer,
		logIn : logInSlice.reducer,
	},
});

export default store;
// export type  = typeof store.dispatch;
