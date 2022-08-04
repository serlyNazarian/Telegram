let btnSend = document.querySelector(".btn-send");
let messageInput = document.querySelector(".message-input");
let divContainer = document.querySelector(".right-content");

btnSend.onclick = function () {
  console.log("uuuuu = ", messageInput.value);

  let msg = document.createElement("div");
  msg.className = "right-content-item-send";
  msg.innerHTML = messageInput.value;

  divContainer.appendChild(msg);
  divContainer.scrollTop = divContainer.scrollHeight;

  messageInput.value = "";
};
