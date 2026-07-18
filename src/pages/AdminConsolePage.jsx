import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Plus, RotateCcw, Trash2 } from "lucide-react";
import { useAdminContent } from "../content/AdminContentContext";

const adminTabs = [
  { id: "hero", label: "Hero Section" },
  { id: "cardGrid", label: "CardGrid" },
  { id: "ecosystem", label: "Learning Hub Ecosystem" },
  { id: "goals", label: "Learning Goals" },
  { id: "classroomIntro", label: "Inside the Classroom" },
  { id: "track0", label: "Track 01" },
  { id: "track1", label: "Track 02" },
  { id: "track2", label: "Track 03" },
  { id: "track3", label: "Track 04" },
  { id: "track4", label: "Ongoing" },
  { id: "liveClasses", label: "Upcoming Live Classes" },
  { id: "social", label: "We're Active Everywhere" },
  { id: "testimonials", label: "What Learners Say" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "studio", label: "DataSense Studio" },
];

function InputField({ label, value, onChange, placeholder = "" }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-11 rounded-[12px] border border-slate-200 bg-white px-4 text-[14px] text-slate-900 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
      />
    </label>
  );
}

function TextAreaField({ label, value, onChange, rows = 4, placeholder = "" }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-[14px] text-slate-900 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
      />
    </label>
  );
}

function FileField({ label, value, onChange }) {
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      onChange(String(reader.result || ""));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-3">
      <InputField
        label={label}
        value={value}
        onChange={onChange}
        placeholder="Paste an image URL or upload a file"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="text-[13px] text-slate-500 file:mr-3 file:rounded-full file:border-0 file:bg-orange-100 file:px-4 file:py-2 file:text-[12px] file:font-bold file:text-orange-700"
      />
      {value ? (
        <img
          src={value}
          alt={`${label} preview`}
          className="h-16 w-16 rounded-[12px] border border-slate-200 object-cover"
        />
      ) : null}
    </div>
  );
}

function Card({ title, children, actions = null }) {
  return (
    <section className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_18px_48px_-38px_rgba(15,23,42,0.25)]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-[20px] font-black tracking-[-0.03em] text-slate-900">
          {title}
        </h2>
        {actions}
      </div>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

function ItemShell({ title, children, onRemove = null }) {
  return (
    <div className="rounded-[18px] border border-slate-200 bg-slate-50 p-4">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-[14px] font-bold text-slate-800">{title}</h3>
        {onRemove ? (
          <button
            type="button"
            onClick={onRemove}
            className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-3 py-1.5 text-[12px] font-bold text-red-600"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Remove
          </button>
        ) : null}
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function ActionButton({ children, onClick, tone = "default" }) {
  const styles =
    tone === "danger"
      ? "border-red-200 bg-red-50 text-red-600"
      : tone === "ghost"
        ? "border-slate-200 bg-white text-slate-700"
        : "border-orange-200 bg-orange-50 text-orange-700";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-bold ${styles}`}
    >
      {children}
    </button>
  );
}

export default function AdminConsolePage() {
  const {
    content,
    updateSection,
    resetSection,
    resetAll,
    saveChanges,
    previewChanges,
    discardDraft,
    hasUnsavedChanges,
  } = useAdminContent();
  const [activeTab, setActiveTab] = useState("hero");

  const updateClassroom = (updater) => {
    updateSection("classroom", (current) => updater(current));
  };

  const activeTrackIndex = activeTab.startsWith("track")
    ? Number(activeTab.replace("track", ""))
    : -1;

  const renderHeroEditor = () => (
    <Card
      title="Hero Section"
      actions={<ActionButton onClick={() => resetSection("hero")}><RotateCcw className="h-3.5 w-3.5" />Reset</ActionButton>}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <InputField
          label="Heading"
          value={content.hero.heading}
          onChange={(value) => updateSection("hero", { ...content.hero, heading: value })}
        />
        <InputField
          label="Accent Heading"
          value={content.hero.accentHeading}
          onChange={(value) => updateSection("hero", { ...content.hero, accentHeading: value })}
        />
      </div>
      <TextAreaField
        label="Subheading"
        rows={4}
        value={content.hero.subheading}
        onChange={(value) => updateSection("hero", { ...content.hero, subheading: value })}
      />
      <div className="grid gap-4 md:grid-cols-2">
        <InputField
          label="Primary Button Label"
          value={content.hero.primaryButtonLabel}
          onChange={(value) => updateSection("hero", { ...content.hero, primaryButtonLabel: value })}
        />
        <InputField
          label="Secondary Button Label"
          value={content.hero.secondaryButtonLabel}
          onChange={(value) => updateSection("hero", { ...content.hero, secondaryButtonLabel: value })}
        />
      </div>
    </Card>
  );

  const renderCardGridEditor = () => (
    <Card
      title="CardGrid"
      actions={
        <div className="flex gap-2">
          <ActionButton
            onClick={() =>
              updateSection("cardGrid", {
                ...content.cardGrid,
                items: [
                  ...content.cardGrid.items,
                  { title: "New Card", text: "Add card content here." },
                ],
              })
            }
          >
            <Plus className="h-3.5 w-3.5" />
            Add Card
          </ActionButton>
          <ActionButton onClick={() => resetSection("cardGrid")}>
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </ActionButton>
        </div>
      }
    >
      <InputField
        label="Section Name"
        value={content.cardGrid.sectionName}
        onChange={(value) => updateSection("cardGrid", { ...content.cardGrid, sectionName: value })}
      />
      {content.cardGrid.items.map((item, index) => (
        <ItemShell
          key={`${item.title}-${index}`}
          title={`Card ${index + 1}`}
          onRemove={() =>
            updateSection("cardGrid", {
              ...content.cardGrid,
              items: content.cardGrid.items.filter((_, itemIndex) => itemIndex !== index),
            })
          }
        >
          <InputField
            label="Title"
            value={item.title}
            onChange={(value) =>
              updateSection("cardGrid", {
                ...content.cardGrid,
                items: content.cardGrid.items.map((entry, itemIndex) =>
                  itemIndex === index ? { ...entry, title: value } : entry,
                ),
              })
            }
          />
          <TextAreaField
            label="Content"
            rows={3}
            value={item.text}
            onChange={(value) =>
              updateSection("cardGrid", {
                ...content.cardGrid,
                items: content.cardGrid.items.map((entry, itemIndex) =>
                  itemIndex === index ? { ...entry, text: value } : entry,
                ),
              })
            }
          />
        </ItemShell>
      ))}
    </Card>
  );

  const renderEcosystemEditor = () => (
    <Card
      title="AI Learning Hub Ecosystem"
      actions={
        <div className="flex gap-2">
          <ActionButton
            onClick={() =>
              updateSection("ecosystem", {
                ...content.ecosystem,
                items: [
                  ...content.ecosystem.items,
                  {
                    title: "New Item",
                    description: "Describe this ecosystem item.",
                    cta: "Explore",
                    href: "#",
                    icon: "",
                  },
                ],
              })
            }
          >
            <Plus className="h-3.5 w-3.5" />
            Add Item
          </ActionButton>
          <ActionButton onClick={() => resetSection("ecosystem")}>
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </ActionButton>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <InputField
          label="Heading"
          value={content.ecosystem.heading}
          onChange={(value) => updateSection("ecosystem", { ...content.ecosystem, heading: value })}
        />
        <InputField
          label="Accent Heading"
          value={content.ecosystem.accentHeading}
          onChange={(value) => updateSection("ecosystem", { ...content.ecosystem, accentHeading: value })}
        />
      </div>
      {content.ecosystem.items.map((item, index) => (
        <ItemShell
          key={`${item.title}-${index}`}
          title={`Ecosystem Item ${index + 1}`}
          onRemove={() =>
            updateSection("ecosystem", {
              ...content.ecosystem,
              items: content.ecosystem.items.filter((_, itemIndex) => itemIndex !== index),
            })
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <InputField
              label="Title"
              value={item.title}
              onChange={(value) =>
                updateSection("ecosystem", {
                  ...content.ecosystem,
                  items: content.ecosystem.items.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, title: value } : entry,
                  ),
                })
              }
            />
            <InputField
              label="CTA"
              value={item.cta}
              onChange={(value) =>
                updateSection("ecosystem", {
                  ...content.ecosystem,
                  items: content.ecosystem.items.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, cta: value } : entry,
                  ),
                })
              }
            />
          </div>
          <TextAreaField
            label="Description"
            rows={3}
            value={item.description}
            onChange={(value) =>
              updateSection("ecosystem", {
                ...content.ecosystem,
                items: content.ecosystem.items.map((entry, itemIndex) =>
                  itemIndex === index ? { ...entry, description: value } : entry,
                ),
              })
            }
          />
          <InputField
            label="Link"
            value={item.href}
            onChange={(value) =>
              updateSection("ecosystem", {
                ...content.ecosystem,
                items: content.ecosystem.items.map((entry, itemIndex) =>
                  itemIndex === index ? { ...entry, href: value } : entry,
                ),
              })
            }
          />
          <FileField
            label="Icon"
            value={item.icon}
            onChange={(value) =>
              updateSection("ecosystem", {
                ...content.ecosystem,
                items: content.ecosystem.items.map((entry, itemIndex) =>
                  itemIndex === index ? { ...entry, icon: value } : entry,
                ),
              })
            }
          />
        </ItemShell>
      ))}
    </Card>
  );

  const renderGoalsEditor = () => (
    <Card
      title="Choose Your Learning Goal"
      actions={
        <div className="flex gap-2">
          <ActionButton
            onClick={() =>
              updateSection("goals", {
                ...content.goals,
                items: [
                  ...content.goals.items,
                  {
                    title: "New Goal",
                    description: "Add a short goal description.",
                    href: "#",
                    icon: "",
                  },
                ],
              })
            }
          >
            <Plus className="h-3.5 w-3.5" />
            Add Goal
          </ActionButton>
          <ActionButton onClick={() => resetSection("goals")}>
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </ActionButton>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <InputField
          label="Heading"
          value={content.goals.heading}
          onChange={(value) => updateSection("goals", { ...content.goals, heading: value })}
        />
        <InputField
          label="Accent Heading"
          value={content.goals.accentHeading}
          onChange={(value) => updateSection("goals", { ...content.goals, accentHeading: value })}
        />
      </div>
      {content.goals.items.map((item, index) => (
        <ItemShell
          key={`${item.title}-${index}`}
          title={`Goal ${index + 1}`}
          onRemove={() =>
            updateSection("goals", {
              ...content.goals,
              items: content.goals.items.filter((_, itemIndex) => itemIndex !== index),
            })
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <InputField
              label="Title"
              value={item.title}
              onChange={(value) =>
                updateSection("goals", {
                  ...content.goals,
                  items: content.goals.items.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, title: value } : entry,
                  ),
                })
              }
            />
            <InputField
              label="Link"
              value={item.href}
              onChange={(value) =>
                updateSection("goals", {
                  ...content.goals,
                  items: content.goals.items.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, href: value } : entry,
                  ),
                })
              }
            />
          </div>
          <TextAreaField
            label="Description"
            rows={3}
            value={item.description}
            onChange={(value) =>
              updateSection("goals", {
                ...content.goals,
                items: content.goals.items.map((entry, itemIndex) =>
                  itemIndex === index ? { ...entry, description: value } : entry,
                ),
              })
            }
          />
          <FileField
            label="Icon"
            value={item.icon}
            onChange={(value) =>
              updateSection("goals", {
                ...content.goals,
                items: content.goals.items.map((entry, itemIndex) =>
                  itemIndex === index ? { ...entry, icon: value } : entry,
                ),
              })
            }
          />
        </ItemShell>
      ))}
    </Card>
  );

  const renderClassroomIntroEditor = () => (
    <Card
      title="Inside the Classroom"
      actions={<ActionButton onClick={() => resetSection("classroom")}><RotateCcw className="h-3.5 w-3.5" />Reset</ActionButton>}
    >
      <InputField
        label="Kicker"
        value={content.classroom.intro.kicker}
        onChange={(value) =>
          updateClassroom((current) => ({
            ...current,
            intro: { ...current.intro, kicker: value },
          }))
        }
      />
      <InputField
        label="Heading"
        value={content.classroom.intro.heading}
        onChange={(value) =>
          updateClassroom((current) => ({
            ...current,
            intro: { ...current.intro, heading: value },
          }))
        }
      />
      <InputField
        label="Accent Heading"
        value={content.classroom.intro.accentHeading}
        onChange={(value) =>
          updateClassroom((current) => ({
            ...current,
            intro: { ...current.intro, accentHeading: value },
          }))
        }
      />
      <TextAreaField
        label="Description"
        rows={4}
        value={content.classroom.intro.description}
        onChange={(value) =>
          updateClassroom((current) => ({
            ...current,
            intro: { ...current.intro, description: value },
          }))
        }
      />
      <TextAreaField
        label="Footer"
        rows={3}
        value={content.classroom.intro.footer}
        onChange={(value) =>
          updateClassroom((current) => ({
            ...current,
            intro: { ...current.intro, footer: value },
          }))
        }
      />
    </Card>
  );

  const renderTrackEditor = (trackIndex) => {
    const track = content.classroom.tracks[trackIndex];
    if (!track) return null;

    return (
      <Card
        title={`${track.label} Editor`}
        actions={<ActionButton onClick={() => resetSection("classroom")}><RotateCcw className="h-3.5 w-3.5" />Reset All Tracks</ActionButton>}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <InputField
            label="Track Label"
            value={track.label}
            onChange={(value) =>
              updateClassroom((current) => ({
                ...current,
                tracks: current.tracks.map((entry, index) =>
                  index === trackIndex ? { ...entry, label: value } : entry,
                ),
              }))
            }
          />
          <InputField
            label="Track Title"
            value={track.title}
            onChange={(value) =>
              updateClassroom((current) => ({
                ...current,
                tracks: current.tracks.map((entry, index) =>
                  index === trackIndex ? { ...entry, title: value } : entry,
                ),
              }))
            }
          />
        </div>
        <TextAreaField
          label="Audience"
          rows={2}
          value={track.audience}
          onChange={(value) =>
            updateClassroom((current) => ({
              ...current,
              tracks: current.tracks.map((entry, index) =>
                index === trackIndex ? { ...entry, audience: value } : entry,
              ),
            }))
          }
        />
        <TextAreaField
          label="Outcome"
          rows={2}
          value={track.outcome}
          onChange={(value) =>
            updateClassroom((current) => ({
              ...current,
              tracks: current.tracks.map((entry, index) =>
                index === trackIndex ? { ...entry, outcome: value } : entry,
              ),
            }))
          }
        />
        {track.courses.map((course, courseIndex) => (
          <ItemShell
            key={course.slug}
            title={`Course ${courseIndex + 1}: ${course.title}`}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <InputField
                label="Course Title"
                value={course.title}
                onChange={(value) =>
                  updateClassroom((current) => ({
                    ...current,
                    tracks: current.tracks.map((entry, index) =>
                      index === trackIndex
                        ? {
                            ...entry,
                            courses: entry.courses.map((trackCourse, itemIndex) =>
                              itemIndex === courseIndex
                                ? { ...trackCourse, title: value }
                                : trackCourse,
                            ),
                          }
                        : entry,
                    ),
                  }))
                }
              />
              <InputField
                label="Format"
                value={course.format}
                onChange={(value) =>
                  updateClassroom((current) => ({
                    ...current,
                    tracks: current.tracks.map((entry, index) =>
                      index === trackIndex
                        ? {
                            ...entry,
                            courses: entry.courses.map((trackCourse, itemIndex) =>
                              itemIndex === courseIndex
                                ? { ...trackCourse, format: value }
                                : trackCourse,
                            ),
                          }
                        : entry,
                    ),
                  }))
                }
              />
            </div>
            <TextAreaField
              label="Description"
              rows={4}
              value={course.description}
              onChange={(value) =>
                updateClassroom((current) => ({
                  ...current,
                  tracks: current.tracks.map((entry, index) =>
                    index === trackIndex
                      ? {
                          ...entry,
                          courses: entry.courses.map((trackCourse, itemIndex) =>
                            itemIndex === courseIndex
                              ? { ...trackCourse, description: value }
                              : trackCourse,
                          ),
                        }
                      : entry,
                  ),
                }))
              }
            />
            <FileField
              label="Course Image"
              value={course.image}
              onChange={(value) =>
                updateClassroom((current) => ({
                  ...current,
                  tracks: current.tracks.map((entry, index) =>
                    index === trackIndex
                      ? {
                          ...entry,
                          courses: entry.courses.map((trackCourse, itemIndex) =>
                            itemIndex === courseIndex
                              ? { ...trackCourse, image: value }
                              : trackCourse,
                          ),
                        }
                      : entry,
                  ),
                }))
              }
            />
          </ItemShell>
        ))}
      </Card>
    );
  };

  const renderLiveClassesEditor = () => (
    <Card
      title="Upcoming Live Classes"
      actions={
        <div className="flex gap-2">
          <ActionButton
            onClick={() =>
              updateSection("liveClasses", {
                ...content.liveClasses,
                events: [
                  ...content.liveClasses.events,
                  { date: "01", mon: "JAN", title: "New Live Class", meta: "Sat · 7:00 PM IST", badge: "Free" },
                ],
              })
            }
          >
            <Plus className="h-3.5 w-3.5" />
            Add Class
          </ActionButton>
          <ActionButton onClick={() => resetSection("liveClasses")}>
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </ActionButton>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <InputField
          label="Heading"
          value={content.liveClasses.heading}
          onChange={(value) => updateSection("liveClasses", { ...content.liveClasses, heading: value })}
        />
        <InputField
          label="View All Label"
          value={content.liveClasses.viewAllLabel}
          onChange={(value) => updateSection("liveClasses", { ...content.liveClasses, viewAllLabel: value })}
        />
      </div>
      {content.liveClasses.events.map((event, index) => (
        <ItemShell
          key={`${event.title}-${index}`}
          title={`Class ${index + 1}`}
          onRemove={() =>
            updateSection("liveClasses", {
              ...content.liveClasses,
              events: content.liveClasses.events.filter((_, itemIndex) => itemIndex !== index),
            })
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <InputField
              label="Date"
              value={event.date}
              onChange={(value) =>
                updateSection("liveClasses", {
                  ...content.liveClasses,
                  events: content.liveClasses.events.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, date: value } : entry,
                  ),
                })
              }
            />
            <InputField
              label="Month"
              value={event.mon}
              onChange={(value) =>
                updateSection("liveClasses", {
                  ...content.liveClasses,
                  events: content.liveClasses.events.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, mon: value } : entry,
                  ),
                })
              }
            />
          </div>
          <InputField
            label="Title"
            value={event.title}
            onChange={(value) =>
              updateSection("liveClasses", {
                ...content.liveClasses,
                events: content.liveClasses.events.map((entry, itemIndex) =>
                  itemIndex === index ? { ...entry, title: value } : entry,
                ),
              })
            }
          />
          <div className="grid gap-4 md:grid-cols-2">
            <InputField
              label="Meta"
              value={event.meta}
              onChange={(value) =>
                updateSection("liveClasses", {
                  ...content.liveClasses,
                  events: content.liveClasses.events.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, meta: value } : entry,
                  ),
                })
              }
            />
            <InputField
              label="Badge"
              value={event.badge}
              onChange={(value) =>
                updateSection("liveClasses", {
                  ...content.liveClasses,
                  events: content.liveClasses.events.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, badge: value } : entry,
                  ),
                })
              }
            />
          </div>
        </ItemShell>
      ))}
    </Card>
  );

  const renderSocialEditor = () => (
    <Card
      title="We're Active Everywhere"
      actions={<ActionButton onClick={() => resetSection("social")}><RotateCcw className="h-3.5 w-3.5" />Reset</ActionButton>}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <InputField
          label="Heading"
          value={content.social.heading}
          onChange={(value) => updateSection("social", { ...content.social, heading: value })}
        />
        <InputField
          label="Accent Heading"
          value={content.social.accentHeading}
          onChange={(value) => updateSection("social", { ...content.social, accentHeading: value })}
        />
      </div>
      {content.social.items.map((item, index) => (
        <ItemShell key={`${item.name}-${index}`} title={`Platform ${index + 1}`}>
          <div className="grid gap-4 md:grid-cols-2">
            <InputField
              label="Platform Name"
              value={item.name}
              onChange={(value) =>
                updateSection("social", {
                  ...content.social,
                  items: content.social.items.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, name: value } : entry,
                  ),
                })
              }
            />
            <InputField
              label="Value"
              value={item.value}
              onChange={(value) =>
                updateSection("social", {
                  ...content.social,
                  items: content.social.items.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, value } : entry,
                  ),
                })
              }
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <InputField
              label="Label"
              value={item.label}
              onChange={(value) =>
                updateSection("social", {
                  ...content.social,
                  items: content.social.items.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, label: value } : entry,
                  ),
                })
              }
            />
            <InputField
              label="Link"
              value={item.href}
              onChange={(value) =>
                updateSection("social", {
                  ...content.social,
                  items: content.social.items.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, href: value } : entry,
                  ),
                })
              }
            />
          </div>
          <FileField
            label="Icon"
            value={item.icon}
            onChange={(value) =>
              updateSection("social", {
                ...content.social,
                items: content.social.items.map((entry, itemIndex) =>
                  itemIndex === index ? { ...entry, icon: value } : entry,
                ),
              })
            }
          />
        </ItemShell>
      ))}
    </Card>
  );

  const renderTestimonialsEditor = () => (
    <Card
      title="What Our Learners Say"
      actions={<ActionButton onClick={() => resetSection("testimonials")}><RotateCcw className="h-3.5 w-3.5" />Reset</ActionButton>}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <InputField
          label="Heading"
          value={content.testimonials.heading}
          onChange={(value) => updateSection("testimonials", { ...content.testimonials, heading: value })}
        />
        <InputField
          label="Accent Heading"
          value={content.testimonials.accentHeading}
          onChange={(value) => updateSection("testimonials", { ...content.testimonials, accentHeading: value })}
        />
        <InputField
          label="CTA Label"
          value={content.testimonials.ctaLabel}
          onChange={(value) => updateSection("testimonials", { ...content.testimonials, ctaLabel: value })}
        />
      </div>
      {content.testimonials.items.map((item, index) => (
        <ItemShell key={`${item.name}-${index}`} title={`Testimonial ${index + 1}`}>
          <div className="grid gap-4 md:grid-cols-2">
            <InputField
              label="Name"
              value={item.name}
              onChange={(value) =>
                updateSection("testimonials", {
                  ...content.testimonials,
                  items: content.testimonials.items.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, name: value } : entry,
                  ),
                })
              }
            />
            <InputField
              label="Role"
              value={item.role}
              onChange={(value) =>
                updateSection("testimonials", {
                  ...content.testimonials,
                  items: content.testimonials.items.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, role: value } : entry,
                  ),
                })
              }
            />
          </div>
          <TextAreaField
            label="Quote"
            rows={4}
            value={item.quote}
            onChange={(value) =>
              updateSection("testimonials", {
                ...content.testimonials,
                items: content.testimonials.items.map((entry, itemIndex) =>
                  itemIndex === index ? { ...entry, quote: value } : entry,
                ),
              })
            }
          />
          <FileField
            label="Avatar"
            value={item.avatar}
            onChange={(value) =>
              updateSection("testimonials", {
                ...content.testimonials,
                items: content.testimonials.items.map((entry, itemIndex) =>
                  itemIndex === index ? { ...entry, avatar: value } : entry,
                ),
              })
            }
          />
        </ItemShell>
      ))}
    </Card>
  );

  const renderPricingEditor = () => (
    <Card
      title="Pricing"
      actions={<ActionButton onClick={() => resetSection("pricing")}><RotateCcw className="h-3.5 w-3.5" />Reset</ActionButton>}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <InputField
          label="Heading"
          value={content.pricing.heading}
          onChange={(value) => updateSection("pricing", { ...content.pricing, heading: value })}
        />
        <InputField
          label="Accent Heading"
          value={content.pricing.accentHeading}
          onChange={(value) => updateSection("pricing", { ...content.pricing, accentHeading: value })}
        />
      </div>
      <TextAreaField
        label="Subheading"
        rows={2}
        value={content.pricing.subheading}
        onChange={(value) => updateSection("pricing", { ...content.pricing, subheading: value })}
      />
      {["freePlan", "premiumPlan"].map((key) => {
        const plan = content.pricing[key];
        return (
          <ItemShell key={key} title={key === "freePlan" ? "Free Plan" : "Premium Plan"}>
            <div className="grid gap-4 md:grid-cols-2">
              <InputField
                label="Plan Name"
                value={plan.name}
                onChange={(value) =>
                  updateSection("pricing", {
                    ...content.pricing,
                    [key]: { ...plan, name: value },
                  })
                }
              />
              <InputField
                label="Tagline"
                value={plan.tagline}
                onChange={(value) =>
                  updateSection("pricing", {
                    ...content.pricing,
                    [key]: { ...plan, tagline: value },
                  })
                }
              />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <InputField
                label="Price"
                value={plan.price}
                onChange={(value) =>
                  updateSection("pricing", {
                    ...content.pricing,
                    [key]: { ...plan, price: value },
                  })
                }
              />
              <InputField
                label="Cadence"
                value={plan.cadence}
                onChange={(value) =>
                  updateSection("pricing", {
                    ...content.pricing,
                    [key]: { ...plan, cadence: value },
                  })
                }
              />
              <InputField
                label="Button Label"
                value={plan.ctaLabel}
                onChange={(value) =>
                  updateSection("pricing", {
                    ...content.pricing,
                    [key]: { ...plan, ctaLabel: value },
                  })
                }
              />
            </div>
            <TextAreaField
              label="Features"
              rows={6}
              value={plan.features.join("\n")}
              onChange={(value) =>
                updateSection("pricing", {
                  ...content.pricing,
                  [key]: {
                    ...plan,
                    features: value.split("\n").map((item) => item.trim()).filter(Boolean),
                  },
                })
              }
            />
          </ItemShell>
        );
      })}
    </Card>
  );

  const renderFaqEditor = () => (
    <Card
      title="Frequently Asked Questions"
      actions={
        <div className="flex gap-2">
          <ActionButton
            onClick={() =>
              updateSection("faq", {
                ...content.faq,
                items: [...content.faq.items, { question: "New question", answer: "Add the answer here." }],
              })
            }
          >
            <Plus className="h-3.5 w-3.5" />
            Add FAQ
          </ActionButton>
          <ActionButton onClick={() => resetSection("faq")}>
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </ActionButton>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <InputField
          label="Heading"
          value={content.faq.heading}
          onChange={(value) => updateSection("faq", { ...content.faq, heading: value })}
        />
        <InputField
          label="Accent Heading"
          value={content.faq.accentHeading}
          onChange={(value) => updateSection("faq", { ...content.faq, accentHeading: value })}
        />
      </div>
      {content.faq.items.map((item, index) => (
        <ItemShell
          key={`${item.question}-${index}`}
          title={`FAQ ${index + 1}`}
          onRemove={() =>
            updateSection("faq", {
              ...content.faq,
              items: content.faq.items.filter((_, itemIndex) => itemIndex !== index),
            })
          }
        >
          <InputField
            label="Question"
            value={item.question}
            onChange={(value) =>
              updateSection("faq", {
                ...content.faq,
                items: content.faq.items.map((entry, itemIndex) =>
                  itemIndex === index ? { ...entry, question: value } : entry,
                ),
              })
            }
          />
          <TextAreaField
            label="Answer"
            rows={4}
            value={item.answer}
            onChange={(value) =>
              updateSection("faq", {
                ...content.faq,
                items: content.faq.items.map((entry, itemIndex) =>
                  itemIndex === index ? { ...entry, answer: value } : entry,
                ),
              })
            }
          />
        </ItemShell>
      ))}
    </Card>
  );

  const renderStudioEditor = () => (
    <Card
      title="DataSense Studio"
      actions={<ActionButton onClick={() => resetSection("dataSenseStudio")}><RotateCcw className="h-3.5 w-3.5" />Reset</ActionButton>}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <InputField
          label="Heading"
          value={content.dataSenseStudio.heading}
          onChange={(value) => updateSection("dataSenseStudio", { ...content.dataSenseStudio, heading: value })}
        />
        <InputField
          label="Accent Heading"
          value={content.dataSenseStudio.accentHeading}
          onChange={(value) => updateSection("dataSenseStudio", { ...content.dataSenseStudio, accentHeading: value })}
        />
        <InputField
          label="Subscribe Label"
          value={content.dataSenseStudio.subscribeLabel}
          onChange={(value) => updateSection("dataSenseStudio", { ...content.dataSenseStudio, subscribeLabel: value })}
        />
      </div>
      <ItemShell title="Channel Tabs">
        {content.dataSenseStudio.tabs.map((tab, index) => (
          <div key={`${tab.name}-${index}`} className="grid gap-4 md:grid-cols-2">
            <InputField
              label={`Tab ${index + 1} Name`}
              value={tab.name}
              onChange={(value) =>
                updateSection("dataSenseStudio", {
                  ...content.dataSenseStudio,
                  tabs: content.dataSenseStudio.tabs.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, name: value } : entry,
                  ),
                })
              }
            />
            <InputField
              label={`Tab ${index + 1} URL`}
              value={tab.url}
              onChange={(value) =>
                updateSection("dataSenseStudio", {
                  ...content.dataSenseStudio,
                  tabs: content.dataSenseStudio.tabs.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, url: value } : entry,
                  ),
                })
              }
            />
          </div>
        ))}
      </ItemShell>
      {content.dataSenseStudio.videos.map((video, index) => (
        <ItemShell key={`${video.id}-${index}`} title={`Video ${index + 1}`}>
          <div className="grid gap-4 md:grid-cols-2">
            <InputField
              label="YouTube Video ID"
              value={video.id}
              onChange={(value) =>
                updateSection("dataSenseStudio", {
                  ...content.dataSenseStudio,
                  videos: content.dataSenseStudio.videos.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, id: value } : entry,
                  ),
                })
              }
            />
            <InputField
              label="Channel"
              value={video.channel}
              onChange={(value) =>
                updateSection("dataSenseStudio", {
                  ...content.dataSenseStudio,
                  videos: content.dataSenseStudio.videos.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, channel: value } : entry,
                  ),
                })
              }
            />
          </div>
          <InputField
            label="Title"
            value={video.title}
            onChange={(value) =>
              updateSection("dataSenseStudio", {
                ...content.dataSenseStudio,
                videos: content.dataSenseStudio.videos.map((entry, itemIndex) =>
                  itemIndex === index ? { ...entry, title: value } : entry,
                ),
              })
            }
          />
          <div className="grid gap-4 md:grid-cols-3">
            <InputField
              label="Views"
              value={video.views}
              onChange={(value) =>
                updateSection("dataSenseStudio", {
                  ...content.dataSenseStudio,
                  videos: content.dataSenseStudio.videos.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, views: value } : entry,
                  ),
                })
              }
            />
            <InputField
              label="Duration"
              value={video.duration}
              onChange={(value) =>
                updateSection("dataSenseStudio", {
                  ...content.dataSenseStudio,
                  videos: content.dataSenseStudio.videos.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, duration: value } : entry,
                  ),
                })
              }
            />
            <InputField
              label="Category"
              value={video.category}
              onChange={(value) =>
                updateSection("dataSenseStudio", {
                  ...content.dataSenseStudio,
                  videos: content.dataSenseStudio.videos.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, category: value } : entry,
                  ),
                })
              }
            />
          </div>
        </ItemShell>
      ))}
    </Card>
  );

  const renderActiveEditor = () => {
    switch (activeTab) {
      case "hero":
        return renderHeroEditor();
      case "cardGrid":
        return renderCardGridEditor();
      case "ecosystem":
        return renderEcosystemEditor();
      case "goals":
        return renderGoalsEditor();
      case "classroomIntro":
        return renderClassroomIntroEditor();
      case "liveClasses":
        return renderLiveClassesEditor();
      case "social":
        return renderSocialEditor();
      case "testimonials":
        return renderTestimonialsEditor();
      case "pricing":
        return renderPricingEditor();
      case "faq":
        return renderFaqEditor();
      case "studio":
        return renderStudioEditor();
      default:
        if (activeTrackIndex >= 0) {
          return renderTrackEditor(activeTrackIndex);
        }
        return null;
    }
  };

  const handlePreview = () => {
    previewChanges();
    window.open("/?preview=1", "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#f4f7fb] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-6 flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_18px_48px_-38px_rgba(15,23,42,0.25)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-orange-500">
              Admin Console
            </p>
            <h1 className="mt-2 text-[28px] font-black tracking-[-0.04em] text-slate-950">
              Edit landing-page content
            </h1>
            <p className="mt-2 max-w-2xl text-[14px] leading-6 text-slate-600">
              Use the sidebar to jump between sections and update the copy, icons, images, and cards shown on the site. Preview your draft first, then save when you are ready to publish it.
            </p>
            <p className={`mt-3 text-[13px] font-bold ${hasUnsavedChanges ? "text-orange-600" : "text-emerald-600"}`}>
              {hasUnsavedChanges ? "You have unsaved changes in draft." : "All changes are saved."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] font-bold text-slate-700"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to site
            </Link>
            <ActionButton tone="ghost" onClick={handlePreview}>
              View Changes
            </ActionButton>
            <ActionButton tone="ghost" onClick={discardDraft}>
              Discard Draft
            </ActionButton>
            <ActionButton onClick={saveChanges}>
              Save Changes
            </ActionButton>
            <ActionButton tone="danger" onClick={resetAll}>
              <RotateCcw className="h-3.5 w-3.5" />
              Reset draft
            </ActionButton>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_18px_48px_-38px_rgba(15,23,42,0.25)]">
            <div className="space-y-2">
              {adminTabs.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex w-full items-center rounded-[14px] px-4 py-3 text-left text-[14px] font-bold transition ${
                      isActive
                        ? "bg-[#111a3b] text-white shadow-[0_14px_28px_-20px_rgba(15,23,42,0.8)]"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </aside>

          <div>{renderActiveEditor()}</div>
        </div>
      </div>
    </main>
  );
}
