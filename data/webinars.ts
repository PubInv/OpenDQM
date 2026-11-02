import { webinarPresenters } from "./webinar-presenters";

export type WebinarRecording = {
  videoId: string;
  title: string;
  presenter: string;
};

type Webinar = {
  slug: string;
  title: string;
  date: string;
  dateTime: string;
  sessionTime: string;
  localTime: string;
  presenters: (typeof webinarPresenters)[number];
  href: string;
  playlistUrl: string;
  recordings: WebinarRecording[];
};

export const webinars: Webinar[] = [
  {
    slug: "show-and-tell-december-3-2025",
    title: "Toward Distributed Quality Management - Show & Tell",
    date: "December 3, 2025",
    dateTime: "2025-12-03",
    sessionTime: "2pm GMT",
    localTime: "8:00 - 9:30 AM CST",
    presenters: webinarPresenters[0],
    href: "https://events.teams.microsoft.com/event/4d70ed29-9ea0-43c0-bf36-8146a468dc19@1a600530-6b2e-4bef-b68c-12de09e852a4",
    playlistUrl: "https://www.youtube.com/playlist?list=PLJkrQKDSjFvg",
    recordings: [
      {
        videoId: "B3LzV-fJd_A",
        title: "Why Distributed Quality Management Matters",
        presenter: "Opening introduction · Andrew Lamb & Victoria Jaqua"
      },
      {
        videoId: "Ojr_GiyLKho",
        title: "GitBuilding & the OpenFlexure Microscope",
        presenter: "Julian Stirling"
      },
      {
        videoId: "bmoTqep_13E",
        title: "Lowering Barriers to CE Marking",
        presenter: "Clemens Mayer"
      },
      {
        videoId: "8TtDvI9BQIg",
        title: "Digital Product Passports for Traceability & Repair",
        presenter: "Stefan Larsson"
      },
      {
        videoId: "R_MJEwti_c8",
        title: "Developing a Typology for Distributed Quality Management",
        presenter: "Anna Sera Lowe"
      },
      {
        videoId: "QPzkJ1352qQ",
        title: "Qualitative & Quantitative Quality in Distributed Manufacturing",
        presenter: "Jason Pettiaux"
      },
      {
        videoId: "GxONoKhQBhc",
        title: "Digital Product Passports & Machine Data",
        presenter: "Michel Langhammer"
      },
      {
        videoId: "ULhahj_rdWc",
        title: "Quality Management for Distributed Healthcare Manufacturing",
        presenter: "Wendy Phillips"
      },
      {
        videoId: "QoKRqglaRsQ",
        title: "Humanitarian Makers as Quality Managers",
        presenter: "Charles Barrete"
      },
      {
        videoId: "q-KOQGrlu4I",
        title: "3D Printing Without Borders",
        presenter: "Silvestr Tkáč"
      },
      {
        videoId: "20XXtlLKh4I",
        title: "Makerspaces as Agents of Quality Management",
        presenter: "Derrick Mugasia"
      }
    ]
  },
  {
    slug: "show-and-tell-december-4-2025",
    title: "Toward Distributed Quality Management - Show & Tell",
    date: "December 4, 2025",
    dateTime: "2025-12-04",
    sessionTime: "11am PST",
    localTime: "1:00 - 2:30 PM CST",
    presenters: webinarPresenters[1],
    href: "https://events.teams.microsoft.com/event/06a0a560-2cbb-4218-84e7-cb3908726db7@1a600530-6b2e-4bef-b68c-12de09e852a4",
    playlistUrl: "https://www.youtube.com/playlist?list=PLJkrQKDSjFvg",
    recordings: [
      {
        videoId: "28kWpggczZA",
        title: "The Open Healthware Project: Lessons So Far",
        presenter: "Avinash Baskaran"
      },
      {
        videoId: "UQ1rVKiCYkM",
        title: "Meeting Customer Expectations in Local Manufacturing",
        presenter: "John Gershenson"
      },
      {
        videoId: "dcjpRdqu-PQ",
        title: "Open Tools for Distributed Quality Management",
        presenter: "Terence Fagan"
      },
      {
        videoId: "cC04J7APILI",
        title: "Quality Management in Distributed Medical Device Manufacturing",
        presenter: "Theodora Harriet"
      },
      {
        videoId: "Nt_7bcaH4v8",
        title: "Glia's Tracking for Gaza's External Fixator Project",
        presenter: "Jen Wilson"
      },
      {
        videoId: "km6GK9h__mI",
        title: "Law & Liability for Open-Source Products",
        presenter: "Aaron Williamson"
      },
      {
        videoId: "hT0zN2Q5SGo",
        title: "A Process Theory of Value",
        presenter: "David MacLeod"
      },
      {
        videoId: "EyaDcqMjzvY",
        title: "Quality Assurance in the Food Industry",
        presenter: "Yagmur Yegin"
      },
      {
        videoId: "XRVNXLvufjY",
        title: "Failure Modes & Effects Analysis: Using FMEA in Distributed Teams",
        presenter: "Hiba Khan"
      },
      {
        videoId: "H3IQQNVIoWQ",
        title: "Instructions for Use & COVID-19 Response",
        presenter: "Alex Hornstein"
      },
      {
        videoId: "xUsCiQlhEHM",
        title: "Toward Distributed Quality Management: Democratizing QA",
        presenter: "Robert Read"
      },
      {
        videoId: "rrJbb7c6Yvc",
        title: "Accountability, Traceability & the Global Open-Source Quality Assurance System",
        presenter: "Victoria Jaqua"
      }
    ]
  }
];
