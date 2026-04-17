# Particle Button Module

A lightweight, **"Plug & Play" JavaScript module** for creating interactive buttons with SVG particle explosions. Designed to work seamlessly with other UI modules like notification toasters.

---

## 🚀 Features

* **Zero Dependencies** – No jQuery required (Vanilla JS)
* **Module Pattern** – No global variable leaks; safely isolated
* **Highly Customizable** – Control colors, particle count, and click actions
* **Auto-Cleanup** – Removes SVG elements automatically to prevent memory leaks
* **Composable** – Works well with other modules (e.g., NotificationModule)

---

## 📂 File Structure

```
/project
  ├── particle-button.js
  ├── particle-button.css
```

* `particle-button.js` → Core logic (Revealing Module Pattern)
* `particle-button.css` → Styling and transitions

---

## 🛠 Installation

Include the files in your HTML:

```html
<link rel="stylesheet" href="particle-button.css">
<script src="particle-button.js"></script>
```

---

## 🚀 Basic Usage

Create a simple particle button:

```js
ParticleButtonModule.create('target-container', 'Click Me!');
```

---

## 🎨 Custom Variations

Modify colors and particle density:

```js
ParticleButtonModule.create('danger-zone', 'Destroy Data', {
    colors: ['#FF0000', '#000000', '#444444'],
    count: 80
});
```

---

## 🔗 Integration Example (Recommended)

Use with other modules like your **NotificationModule**:

```js
ParticleButtonModule.create('trigger-id', 'Claim Mission Reward', {
    colors: ['#28a745', '#FFD700'], // Green & Gold
    onClick: () => {
        NotificationModule.notify('Success', 'Mission Complete!', { 
            type: 'success', 
            duration: 5000, 
            sound: 'success.mp3' 
        });
    }
});
```

---

## ⚙️ Configuration Options

| Option    | Type     | Default                          | Description                   |
| --------- | -------- | -------------------------------- | ----------------------------- |
| `colors`  | Array    | `['#ffb3f6', '#7aa0ff', '#333']` | Particle colors               |
| `count`   | Number   | `30`                             | Number of particles per click |
| `onClick` | Function | `null`                           | Callback executed on click    |

---

## 🧾 Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Particle Button Demo</title>
    <link rel="stylesheet" href="particle-button.css">
</head>
<body>

    <div id="btn-home"></div>

    <script src="particle-button.js"></script>
    <script>
        ParticleButtonModule.create('btn-home', 'Save Changes');
    </script>

</body>
</html>
```

---

## 🧠 Notes

* No manual DOM setup required — just provide a container ID
* Automatically handles cleanup of particle elements
* Best practice: keep logic inside `onClick` instead of inline HTML events
* Works completely offline

---

## 📄 License

Free to use and modify.
