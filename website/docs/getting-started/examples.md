---
id: examples
title: Examples
---

Here are some of the different use cases that can be done using css pro layout

## Basic usage

<iframe
    src="/examples/example-1.html"
    style={{width:"100%", height:300, border:0, borderRadius:4}}
/>

```html
<div class="layout">
  <header class="header">Header</header>
  <main class="content">Content</main>
  <footer class="footer">Footer</footer>
</div>
```

## Example with sidebar

<iframe
  src="/examples/example-2.html"
  style={{width:"100%", height:300, border:0, borderRadius:4}} 
/>

```html
<div class="layout">
  <header class="header">Header</header>
  <div class="layout has-sidebar">
    <aside class="sidebar">
      Sidebar
    </aside>
    <main class="content">
      Content
    </main>
    <div class="overlay"></div>
  </div>
  <footer class="footer">Footer</footer>
</div>
```

## Full height sidebar

<iframe
  src="/examples/example-3.html"
  style={{width:"100%", height:300, border:0, borderRadius:4}} 
/>

```html
<div class="layout has-sidebar">
  <aside class="sidebar">
    Sidebar
  </aside>
  <div class="layout">
    <header class="header">Header</header>
    <main class="content">
      Content
    </main>
    <div class="overlay"></div>
    <footer class="footer">Footer</footer>
  </div>
</div>
```

## Stretched header

<iframe
  src="/examples/example-4.html"
  style={{width:"100%", height:300, border:0, borderRadius:4}} 
/>

```html
<div class="layout">
  <header class="header">Header</header>
  <div class="layout has-sidebar">
    <aside class="sidebar">
      Sidebar
    </aside>
    <div class="overlay"></div>
    <div class="layout">
      <main class="content">
        Content
      </main>
      <footer class="footer">Footer</footer>
    </div>
  </div>
</div>
```

## Stretched footer

<iframe
  src="/examples/example-5.html"
  style={{width:"100%", height:300, border:0, borderRadius:4}} 
/>

```html
<div class="layout">
  <div class="layout has-sidebar">
    <aside class="sidebar">Sidebar</aside>
    <div class="layout">
      <header class="header">Header</header>
      <main class="content">Content</main>
    </div>
    <div class="overlay"></div>
  </div>
  <footer class="footer">Footer</footer>
</div>
```

## Fixed header

<iframe
  src="/examples/example-6.html"
  style={{width:"100%", height:300, border:0, borderRadius:4}} 
/>

```html
<div class="layout fixed-header">
  <header class="header">Header</header>
  <div class="layout has-sidebar">
    <aside class="sidebar">
      Sidebar
    </aside>
    <div class="overlay"></div>
    <main class="content">
      Content
    </main>
  </div>
  <footer class="footer">Footer</footer>
</div>
```

## Fixed sidebar

<iframe
  src="/examples/example-7.html"
  style={{width:"100%", height:300, border:0, borderRadius:4}} 
/>

```html
<div class="layout has-sidebar fixed-sidebar">
  <aside class="sidebar">
    Sidebar
  </aside>
  <div class="layout">
    <header class="header">Header</header>
    <main class="content">
      Content
    </main>
    <div class="overlay"></div>
    <footer class="footer">Footer</footer>
  </div>
</div>
```
