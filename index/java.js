document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const message = document.getElementById("message");
    const button = this.querySelector("button");

    button.textContent = "Đang gửi...";
    button.disabled = true;

    setTimeout(() => {
        message.style.display = "block";

        setTimeout(() => {
            message.style.display = "none";
        }, 3000);

        button.textContent = "Đăng ký";
        button.disabled = false;
        this.reset();
    }, 1200);
});
