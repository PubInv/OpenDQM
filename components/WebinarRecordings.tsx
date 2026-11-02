"use client";

import { useState } from "react";
import type { WebinarRecording } from "@/data/webinars";

type WebinarRecordingsProps = {
  recordings: WebinarRecording[];
};

export function WebinarRecordings({ recordings }: WebinarRecordingsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const recording = recordings[activeIndex];

  return (
    <section className="webinar-recordings" aria-label="Webinar recordings">
      <div className="webinar-recording-heading" aria-live="polite">
        <div>
          <h3>{recording.title}</h3>
          <span>{recording.presenter}</span>
        </div>
        <div className="webinar-recording-controls">
          <button
            type="button"
            aria-label="Previous recording"
            onClick={() => setActiveIndex((index) => Math.max(0, index - 1))}
            disabled={activeIndex === 0}
          >
            <span aria-hidden="true">&#8592;</span>
          </button>
          <button
            type="button"
            aria-label="Next recording"
            onClick={() => setActiveIndex((index) => Math.min(recordings.length - 1, index + 1))}
            disabled={activeIndex === recordings.length - 1}
          >
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>
      </div>
      <iframe
        key={recording.videoId}
        src={`https://www.youtube-nocookie.com/embed/${recording.videoId}`}
        title={`${recording.title} - ${recording.presenter}`}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </section>
  );
}
