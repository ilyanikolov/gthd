import CryptoJS from 'crypto-js';

export const ls = {
  get(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  },
  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
};

export const crypto = {
  encrypt(data) {
    return CryptoJS.enc.Base64.stringify(
      CryptoJS.HmacSHA256(data, "p8l45ibg0o")
    );
  }
};

export const uuid = {
  custom() {
    return 'q' + Math.random().toString(36).slice(2, 12);
  }
};