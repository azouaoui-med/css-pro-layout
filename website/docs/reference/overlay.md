---
id: overlay
title: Overlay
---

A component that will show when the sidebar is toggled and reaches the break point

```html
<div class="pro-layout has-sidebar">
  <aside class="sidebar break-point-lg toggled">
    Sidebar
  </aside>
  // highlight-next-line
  <div class="overlay"></div>
  <!-- ... -->
</div>
```

> Overlay should always be a general sibling of the sidebar
