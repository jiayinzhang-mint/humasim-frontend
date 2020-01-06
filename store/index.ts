interface State {
  locales: string[];
  locale: string;
}

export const state = (): State => ({
  locales: ['en', 'cn'],
  locale: 'cn'
});

export const mutations = {
  SET_LANG(state: State, locale: string) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  }
};
