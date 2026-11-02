export type Event = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  venue: string;
  description: string;
  timeZone: string;
};

export const upcomingAnnouncements = [
  {
    id: "end-of-project-event",
    title: "OpenDQM End-of-Project Event",
    location: "Austin, TX",
    description:
      "An end-of-project event is planned for Austin. Date and details will be announced soon."
  }
] as const;

export const events: Event[] = [
  {
    id: "workshop-1",
    title: "Workshop #1",
    startDate: "2026-11-09",
    endDate: "2026-11-11",
    location: "Detroit, Michigan",
    venue: "",
    description: "Our first in-person ecosystem scoping workshop is planned for Detroit, Michigan.",
    timeZone: "America/Detroit"
  },
  {
    id: "workshop-2",
    title: "Workshop #2",
    startDate: "2026-11-12",
    endDate: "2026-11-14",
    location: "Tucson, Arizona",
    venue: "",
    description: "Our second in-person ecosystem scoping workshop is planned for Tucson, Arizona.",
    timeZone: "America/Phoenix"
  },
  {
    id: "workshop-3",
    title: "Workshop #3",
    startDate: "2026-11-30",
    endDate: "2026-12-01",
    location: "Alexandria, VA",
    venue: "Buildmo makerspace, 5380 Eisenhower Ave, Suite C, Alexandria, VA 22304",
    description:
      "Our third in-person ecosystem scoping workshop is planned for Alexandria, Virginia.",
    timeZone: "America/New_York"
  }
];
