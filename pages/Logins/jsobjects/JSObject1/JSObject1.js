export default {
	login() {
		const username = UsernameInput.text.trim();
		const password = PasswordInput.text.trim();

		if (username === "admin" && password === "1234") {
			storeValue("isLoggedIn", true);
			storeValue("user", username);
			showAlert("✅ Login successful!", "success");
			navigateTo("Home", {}, "SAME_WINDOW");
		} else {
			showAlert("❌ Invalid username or password", "error");
		}
	}
};
