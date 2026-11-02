"use client";

import { useEffect, useState } from "react";
import { EventCard } from "@/components/EventCard";
import { events, upcomingAnnouncements } from "@/data/events";
import { isPastEvent } from "@/lib/events";
import Link from "next/link";
import { webinars } from "@/data/webinars";
import { pastEvents } from "@/data/past-events";

export function EventCollections() {
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => setToday(new Date()), []);

  const upcoming = today ? events.filter((event) => !isPastEvent(event, today)) : events;
  const past = today ? events.filter((event) => isPastEvent(event, today)) : [];
  const pastItems = [
    ...pastEvents.map((event) => ({ type: "event" as const, dateTime: event.dateTime, event })),
    ...webinars.map((webinar) => ({
      type: "webinar" as const,
      dateTime: webinar.dateTime,
      webinar
    })),
    ...past.map((event) => ({ type: "workshop" as const, dateTime: event.startDate, event }))
  ].sort((a, b) => b.dateTime.localeCompare(a.dateTime));

  return (
    <div className="event-collections">
      <section aria-labelledby="upcoming-events">
        <div className="collection-heading">
          <h2 id="upcoming-events">Upcoming Events</h2>
        </div>
        <div className="event-page-grid">
          {upcoming.map((event) => (
            <div id={event.id} key={event.id}>
              <EventCard event={event} />
            </div>
          ))}
          {upcomingAnnouncements.map((announcement) => (
            <article className="info-card event-card" id={announcement.id} key={announcement.id}>
              <span className="event-date">Date to be announced</span>
              <h3>{announcement.title}</h3>
              <p className="event-location">{announcement.location}</p>
              <p>{announcement.description}</p>
              <span className="event-status">Coming soon</span>
            </article>
          ))}
          {upcoming.length === 0 && (
            <p className="empty-state">New workshop dates will be announced soon.</p>
          )}
        </div>
      </section>
      <section aria-labelledby="past-events">
        <div className="collection-heading">
          <h2 id="past-events">Past events</h2>
        </div>
        <div className="event-page-grid">
          {pastItems.map((item) => {
            if (item.type === "workshop") {
              return (
                <div id={item.event.id} key={item.event.id}>
                  <EventCard event={item.event} past />
                </div>
              );
            }

            if (item.type === "webinar") {
              return (
                <article className="info-card event-card webinar-card" key={item.webinar.slug}>
                  <time className="event-date" dateTime={item.webinar.dateTime}>
                    {item.webinar.date}
                  </time>
                  <h3>{item.webinar.title}</h3>
                  <p className="event-location">Online webinar</p>
                  <p>
                    A community gathering to share ideas and tools for distributed quality
                    management.
                  </p>
                  <Link className="webinar-link" href={`/events/${item.webinar.slug}`}>
                    View webinar details →
                  </Link>
                </article>
              );
            }

            return (
              <article className="info-card event-card webinar-card" key={item.event.id}>
                <time className="event-date" dateTime={item.event.dateTime}>
                  {item.event.date}
                </time>
                <h3>{item.event.cardTitle}</h3>
                <p className="event-location">{item.event.location}</p>
                <p>{item.event.description}</p>
                {item.event.links.map((link) => (
                  <Link
                    className="webinar-link"
                    href={`/events/${item.event.slug}`}
                    key={link.href}
                  >
                    View event details →
                  </Link>
                ))}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
