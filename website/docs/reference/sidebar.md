---
id: sidebar
title: Sidebar
---

The sidebar component is normally nested inside `layout` component

```html
<div class="layout has-sidebar">
  // highlight-start
  <aside class="sidebar">
    Sidebar
  </aside>
  // highlight-end
  <!-- ... -->
</div>
```

### collapsed

To change the status of the sidebar from default width to collapsed width, add `.collapsed` class

```html
<div class="layout has-sidebar">
  // highlight-next-line
  <aside class="sidebar collapsed">
    Sidebar
  </aside>
  <!-- ... -->
</div>
```

### toggled

If you want to toggle the sidebar, add `.toggled` class

> The toggled class only works when [breakpoint](#breakpoint) is set

```html
<div class="layout has-sidebar">
  // highlight-next-line
  <aside class="sidebar break-point-lg toggled">
    Sidebar
  </aside>
  <!-- ... -->
</div>
```

### breakpoint

Setting a break point defines when the sidebar should be responsive and activate the toggle behavior

```html
<div class="layout has-sidebar">
  // highlight-next-line
  <aside class="sidebar break-point-lg">
    Sidebar
  </aside>
  <!-- ... -->
</div>
```

All break points :

```
breakpoint-xs = 480px
breakpoint-sm = 576px
breakpoint-md = 768px
breakpoint-lg = 992px
breakpoint-xl = 1200px
breakpoint-xll = 1600px
```

It is also possible to [customize](/docs/getting-started/customization) the values of each break point

### sidebar-toggler

`sidebar-toggler` class can be used on the button that is responsible for toggling the sidebar, you should also use the same breakpoint used on the sidebar

> The toggled class only works when [breakpoint](#breakpoint) is set

```html
<div class="layout has-sidebar">
  <aside class="sidebar break-point-lg">
    Sidebar
  </aside>
  <!-- ... -->
  // highlight-next-line
  <button class="sidebar-toggler break-point-lg">Toggle Sidebar</button>
  <!-- ... -->
</div>
```
