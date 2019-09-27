import { environment } from '@root/environments/environment';

const apiBase = environment.apiUrl;

export const URL_CONFIG = {
  users: {
    confirm: `${apiBase}/users/confirm`,
    register: `${apiBase}/users/register`,
    reset: `${apiBase}/users/reset`,
    updatePassword: `${apiBase}/users/upadate-password`,
    user: `${apiBase}/users/{id}`,
    changePassword: `${apiBase}/users/{id}/change-password`,
    loginCheck: `${apiBase}/login_check`
  }
};
