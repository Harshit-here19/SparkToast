# SparkToast
Toaster Notification &amp; Particle Button
A collection of lightweight, **plug-and-play JavaScript UI modules** designed to be simple, dependency-free, and easy to integrate.

This repo currently includes:

* 📢 **NotificationModule** – Toast-style notifications
* 💥 **ParticleButtonModule** – Interactive buttons with particle explosions

---

# 📢 NotificationModule

A simple notification/toast system with support for types, duration, progress bar, and optional sound.

---

## 🚀 Usage

```js
NotificationModule.notify("Title", "Message");
```

---

## ⚙️ Options

```js
NotificationModule.notify("Success!", "Saved successfully", {
  type: "success",
  duration: 4000,
  sound: "success.mp3"
});
```

### Options

| Option     | Type   | Default  | Description            |
| ---------- | ------ | -------- | ---------------------- |
| `type`     | string | `"info"` | Notification type      |
| `duration` | number | `4000`   | Auto-dismiss time (ms) |
| `sound`    | string | `null`   | Audio file path        |

---

## 🎨 Types

* `info` (default)
* `success`
* `error`
* `warning` *(if styled)*

---

## 📌 Examples

```js
// Basic
NotificationModule.notify("Hello", "This is a message");

// Success
NotificationModule.notify("Done", "Task completed", {
  type: "success"
});

// Error
NotificationModule.notify("Error", "Something failed", {
  type: "error",
  duration: 6000
});
```

---

# 💥 ParticleButtonModule

A module to create interactive buttons with particle explosion effects.

---

## 🚀 Usage

```js
ParticleButtonModule.create("container-id", "Click Me!");
```

---

## ⚙️ Options

```js
ParticleButtonModule.create("target", "Delete", {
  colors: ["#ff0000", "#000"],
  count: 60,
  onClick: () => console.log("Clicked")
});
```

### Options

| Option    | Type     | Default         | Description          |
| --------- | -------- | --------------- | -------------------- |
| `colors`  | Array    | Mixed pink/blue | Particle colors      |
| `count`   | Number   | `30`            | Number of particles  |
| `onClick` | Function | `null`          | Callback after click |

---

## 🎨 Variations

### Default Button

```js
ParticleButtonModule.create("btn1", "Click Me");
```

### High Density Explosion

```js
ParticleButtonModule.create("btn2", "Boom!", {
  count: 80
});
```

### Custom Colors

```js
ParticleButtonModule.create("btn3", "Danger", {
  colors: ["#ff0000", "#000"]
});
```

---

# 🔗 Combined Usage (Recommended)

These modules are designed to work **together**.

---

## Example

```html
<link rel="stylesheet" href="particle-button.css">
<link rel="stylesheet" href="notification-module.css">
<script src="particle-button.js"></script>
<script src="notification-module.js"></script>

<div id="reward-btn"></div>

<script>
  ParticleButtonModule.create("reward-btn", "Claim Reward", {
    colors: ["#28a745", "#FFD700"],
    onClick: () => {
      NotificationModule.notify("Success", "Reward Claimed!", {
        type: "success",
        duration: 4000,
        sound: "success.mp3"
      });
    }
  });
</script>
```

---

# 🧩 How They Work Together

* **ParticleButtonModule** handles UI interaction (click + animation)
* **NotificationModule** handles feedback (toast message)
* Combined → better UX without messy inline logic

---

# 🧠 Best Practices

* Keep logic inside `onClick`, not HTML attributes
* Use minimal particle count for performance
* Only include required notification types/styles
* Use local assets (fonts, sounds) for offline support

---

# 📦 Future Ideas

* Theme system (dark/light)
* More animation presets
* Queue system for notifications
* Button presets (success/danger styles)

---

# 📄 License

Free to use and modify.
