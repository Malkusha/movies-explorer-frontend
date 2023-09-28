export const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const SHORT_DURATION = 40;

export const WINDOW_WIDTH = {
  desktop: 1280,
  mobile: 649
}

export const MOVIES_ON_PAGE = {
  desktop: 12,
  laptop: 8,
  mobile: 5
}

export const MOVIES_ADD = {
  desktop: 3,
  mobile: 2
}

export const ERROR_lOGIN_WRONG_DATA = 'Вы ввели неправильный логин или пароль';
export const ERROR_LOGIN_NO_TOKEN = 'При авторизации произошла ошибка. Токен не передан или передан не в том формате';
export const ERROR_LOGIN_WRONG_TOKEN = 'При авторизации произошла ошибка. Переданный токен некорректен';

export const ERROR_REG_EMAIL_EXIST = 'Пользователь с таким email уже существует';
export const ERROR_REG = 'При регистрации пользователя произошла ошибка';

export const ERROR_UPDATE_EMAIL_EXIST = 'Пользователь с таким email уже существует';
export const ERROR_UPDATE = 'При обновлении профиля произошла ошибка';

export const ERROR_OTHER = '500 На сервере произошла ошибка';
export const ERROR_NOT_FOUND = '404 Страница по указанному маршруту не найдена';