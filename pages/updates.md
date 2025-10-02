---
layout: default
title: updates page
---

<h1> 
    Our latest updates
    <a href="/static/updates.rss">
        <img class="updates-rss" src="/static/img/rss.png" />
    </a>
</h1>

<ul id="update-list">
  {% for post in site.categories.updates %}
    <li class="update-item">
      <div class="update-date">
        {{ post.date | date_to_string: "ordinal", "US" }}
      </div>
      <div class="timeline-circle"></div>
      <div class="update-title">
        <a href="{{ post.url }}"> {{ post.title }}</a>
      </div>
      <div class="timeline-line"></div>
      <div class="update-description">
        {{ post.description }}
      </div>
    </li>
  {% endfor %}
</ul>

