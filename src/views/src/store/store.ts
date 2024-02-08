export const store = {
  state: {
    authToken: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user') || '{}'),
    isLoggedIn(): boolean {
      return !this.isTokenExpired(this.authToken);
    },
    isMobileDevice(width: number) {
      return width <= 768;
    },
    apiHost: 'http://localhost:3000',

    isTokenExpired(token: string | any) {
      if (!token) {
        return true;
      }
      const expiry = JSON.parse(atob(token.split('.')[1])).exp;
      return Math.floor(new Date().getTime() / 1000) >= expiry;
    },

    isAdmin() {
      return this.isLoggedIn() && this.user.role === 'admin';
    },
  },
};
