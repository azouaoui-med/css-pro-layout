---
id: layout
title: Layout
---

A component for wrapping layout elements

```html
<div class="layout">
  <!-- ... -->
</div>
```

### fixed-header

If you would like to have a fixed header, add `fixed-header` class

```html
// highlight-next-line
<div class="layout fixed-header">
  <header class="header">
    Header
  </header>
  <!-- ... -->
</div>
```

### has-sidebar

If Sidebar component is a direct descendent of **layout** then you need to add the class `has-sidebar`

```html
// highlight-next-line
<div class="layout has-sidebar">
  <aside class="sidebar">
    Sidebar
  </aside>
  <!-- ... -->
</div>
```

### fixed-sidebar

You can fix the sidebar as well by adding `fixed-sidebar`

```html
// highlight-next-line
<div class="layout has-sidebar fixed-sidebar">
  <aside class="sidebar">
    Sidebar
  </aside>
  <!-- ... -->
</div>
```

### RTL

To change the direction of the layout to RTL, you just need to add the class `rtl` to the top level **layout** component

```html
// highlight-next-line
<div class="layout rtl">
  <!-- ... -->
</div>
```

### More

You can use **layout** component as a top level wrapper as well as a sub wrapper for some layout elements to get different layout structure

```html
// highlight-next-line
<div class="layout has-sidebar">
  <aside class="sidebar">
    Sidebar
  </aside>
  // highlight-start
  <div class="layout">
    <header class="header">Header</header>
    <main class="content">
      Content
    </main>
    <footer class="footer">Footer</footer>
  </div>
  // highlight-end
</div>
```
