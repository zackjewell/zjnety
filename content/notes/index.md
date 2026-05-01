---js
{
  layout: "layouts/base.njk",
  title: "Notes",
  permalink: "/notes/",
  eleventyNavigation: {
    key: "Notes",
    order: 5
  }
}
---

<div class="notes">
  {% if posts and posts.length > 0 %}
    {% for note in posts %}
      {% if note.type == "note" and note.status == "posted" %}
        <article class="note">
          <p>{{ note.content }}</p>
          <time>{{ note.updatedAt | dateFormat }}</time>
          {% if note.postedToMastodon %}
            <span class="badge mastodon">Mastodon</span>
          {% endif %}
          {% if note.postedToThreads %}
            <span class="badge threads">Threads</span>
          {% endif %}
        </article>
      {% endif %}
    {% endfor %}
  {% else %}
    <p class="empty-state">No notes yet. Check back soon!</p>
  {% endif %}
</div>
