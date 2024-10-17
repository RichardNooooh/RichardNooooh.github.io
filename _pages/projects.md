---
permalink: /projects/
title: "Projects"
last_modified_at: 2024-10-17
# classes: wide
# toc: true
---

Below is a collection of some the work I have done.

<div class="projects-list">
    {% for project-item in site.data.projects %}
        <div class="project-item">
            <div class="thumbnail">
                <img src="{{ project-item.thumbnail | relative_url }}" alt="Project Thumbnail">
            </div>
            <div class="project-info">
                <h2>{{ project-item.title }}</h2>
                <p>{{ project-item.description }}</p>
                {% if project-item.link != "" %}
                    <a href="{{ project-item.link | absolute_url }}" target="_blank">View Project</a>
                {% endif %}
            </div>
            {% if project-item.gallery.size > 0 %}
                <div class="project-gallery hidden">
                    <h3>Gallery</h3>
                    <ul>
                        {% for image in project-item.gallery %}
                        <li>
                            <img src="{{ image | relative_url }}" alt="Gallery image for {{ project.title }}">
                        </li>
                        {% endfor %}
                    </ul>
                </div>
            {% endif %}
        </div>
    {% endfor %}
</div>
