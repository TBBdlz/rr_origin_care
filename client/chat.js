const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const messageBox = document.querySelector(".message-box");

sendButton.addEventListener("click", () => {
	const message = messageInput.value;
	messageInput.value = "";
	const messageElement = document.createElement("div");
	messageElement.classList.add("user-message");
	messageElement.innerText = message;
	messageBox.appendChild(messageElement);

	const apiUrl = "https://uchatgptapi.meteeyingyongwa.repl.co/send-message";
	const data = { message: message };
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	};

	fetch(apiUrl, options)
		.then((response) => response.json())
		.then((data) => {
			const responseText = data.text;
			const responseElement = document.createElement("div");
			responseElement.classList.add("bot-message");
			responseElement.innerText = responseText;
			messageBox.appendChild(responseElement);
		})
		.catch((error) => console.error(error));
});
