---
layout: default
title: updates page
---

<h1> 
    identifiers.org updates
    <a href="/static/updates.rss">
        <img class="updates-rss" src="/static/img/rss.png" />
    </a>
</h1>

<ul>
  {% for post in site.categories.updates %}
    <li>
      <a href="{{ post.url }}"> {{ post.title }}</a>
      <p> {{ post.description }} </p>
    </li>
  {% endfor %}
</ul>

