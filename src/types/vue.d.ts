import Vue from 'vue';

declare module '*.vue' {
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $confirm: Function,
    $alert: Function,
    $msgClose: Function
    $loading: Function,
  }
}