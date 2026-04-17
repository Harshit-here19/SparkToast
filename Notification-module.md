# NotificationModule 📢

A lightweight, plug-and-play JavaScript notification system for displaying customizable alerts.

---

## 🚀 Basic Usage

Call the `notify` method:

```js
NotificationModule.notify("Title", "This is a message");
```

---

## 📂 How to Use in Your Project

You can trigger notifications either **directly in your HTML (via script tags)** or from your **JavaScript files**.

---

## 🧾 Example: Using in `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Notification Demo</title>
</head>
<body>

  <button onclick="showNotification()">Click Me</button>

  <script src="notification-module.js"></script>
  <script>
    function showNotification() {
      NotificationModule.notify("Hello!", "This was triggered from HTML 🎉");
    }
  </script>

</body>
</html>
```

---

## 🧾 Example: Using in a Separate JS File

### `index.html`

```html
<script src="notification-module.js"></script>
<script src="app.js"></script>
```

### `app.js`

```js
// Trigger on page load
window.addEventListener("load", () => {
  NotificationModule.notify("Welcome!", "Page loaded successfully");
});

// Trigger on some action
document.getElementById("saveBtn").addEventListener("click", () => {
  NotificationModule.notify("Saved!", "Your data has been stored", {
    type: "success",
    duration: 3000
  });
});
```

---

## ⚙️ Options

```js
NotificationModule.notify("Success!", "Your action was completed.", {
  type: "success",
  duration: 5000,
  sound: "success.mp3"
});
```

### Available Options

| Option     | Type   | Default  | Description                                             |
| ---------- | ------ | -------- | ------------------------------------------------------- |
| `type`     | string | `"info"` | Notification style (e.g. `success`, `error`, `warning`) |
| `duration` | number | `4000`   | Time in milliseconds before auto-dismiss                |
| `sound`    | string | `null`   | Path to an audio file                                   |

---

## 📌 More Examples

```js
// Info
NotificationModule.notify("Info", "This is an info message");

// Success
NotificationModule.notify("Success", "Operation completed", {
  type: "success"
});

// Error with longer duration
NotificationModule.notify("Error", "Something failed", {
  type: "error",
  duration: 6000
});

// With sound
NotificationModule.notify("Alert!", "Something needs attention", {
  sound: "alert.mp3"
});
```

---

## 🧠 Notes

* No manual setup required — the container is created automatically.
* Notifications stack vertically.
* Each notification includes a progress bar and close button.
* Works fully offline.

---

## 📄 License

Free to use and modify.
