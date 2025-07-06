export default {
  checkLogin: () => {
    if (!appsmith.store.isLoggedIn) {
      navigateTo("Logins", {}, "SAME_WINDOW");
    }
  }
}
