import { GetterTree, ActionTree, MutationTree, Commit } from 'vuex'

export const state = () => ({
  lang: {},
  language: {
    userLang: process.env.VUE_APP_I18N_LOCALE || 'en',
    langsFlags: [
      {
        value: 'en',
        flag: '🇬🇧',
        label: 'English',
      },
      // {
      //   value: 'hi',
      //   flag: '🇮🇳',
      //   label: 'हिन्दी'
      // }
    ],
  },
})

export type LangState = ReturnType<typeof state>

export const getters: GetterTree<LangState, LangState> = {
  getUserLang: ({ language }: any) => language.userLang || 'en',
  getLangsFlags: ({ language }: any) => language.langsFlags,
  getUserFlag: ({ language }: any) =>
    language.langsFlags.find(
      (lang: { value: string }) => lang.value === language.userLang
    ).flag,
}

export const mutations: MutationTree<LangState> = {
  SET_LANGUAGE(state: any, data: any) {
    state.language = Object.assign(state.language, data)
  },
}

export const actions: ActionTree<LangState, LangState> = {
  setLanguage({ commit }: { commit: Commit }, data: any) {
    commit('SET_LANGUAGE', data)
  },
}
