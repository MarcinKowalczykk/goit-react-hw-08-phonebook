export const selectUserData = state => state.authStore.userData;
export const selectAuthenticated = state => state.authStore.authenticated;
export const selectAuthIsLoading = state => state.authStore.isLoading;
export const selectAuthError = state => state.authStore.error;
