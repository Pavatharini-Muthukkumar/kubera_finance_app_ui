export default {
	run() {
		if (!appsmith.store.isLoggedIn) {
			navigateTo("Logins", {}, "SAME_WINDOW");
		}
	}
}
