import { useEffect, useMemo, useRef, useState } from 'react';
import {
  classroomFilters,
  classroomIntro,
  classroomTracks,
} from '../data/classroomData';
import SplitGradientHeading from './SplitGradientHeading';
import './InsideClassroom.css';

const classroomImages = import.meta.glob(
  '../assets/classroom/*',
  {
    eager: true,
    import: 'default',
  },
);

function resolveClassroomImage(imagePath) {
  if (!imagePath) return '';

  const fileName = imagePath.split('/').pop();
  const bundledImage =
    classroomImages[`../assets/classroom/${fileName}`];

  return bundledImage || imagePath;
}

const LockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const joinSkoolHref =
  'https://www.skool.com/the-agent-lab-3899';

function getModuleText(course) {
  if (course.modules) {
    return `${course.modules} ${
      course.modules === 1 ? 'module' : 'modules'
    }`;
  }

  return course.format || 'Live workshop';
}

export default function InsideClassroom({
  theme = 'light',
}) {
  const [active, setActive] = useState('all');
  const [selectedCourse, setSelectedCourse] =
    useState(null);

  const closeButtonRef = useRef(null);

  const visibleTracks = useMemo(() => {
    if (active === 'all') {
      return classroomTracks;
    }

    return classroomTracks.filter(
      (track) => track.id === active,
    );
  }, [active]);

  useEffect(() => {
    if (!selectedCourse) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedCourse(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        'keydown',
        handleKeyDown,
      );
    };
  }, [selectedCourse]);

  const openCourse = (course, track) => {
    setSelectedCourse({
      ...course,
      trackLabel: track.label,
      trackTitle: track.title,
    });
  };

  const closeCourse = () => {
    setSelectedCourse(null);
  };

  return (
    <>
      <section
        className="classroom"
        id="classroom"
        aria-labelledby="classroom-heading"
      >
        <div className="classroom-shell">
          <header className="classroom-heading">
            <span className="classroom-kicker">
              {classroomIntro.kicker}
            </span>

            <SplitGradientHeading
              as="h2"
              theme={theme}
              className="classroom-heading-title"
              plain="Where Learning AI Becomes"
              accent="Building for Real"
            />

            <p>{classroomIntro.description}</p>
          </header>

          <div
            className="classroom-filters"
            role="tablist"
            aria-label="Course tracks"
          >
            {classroomFilters.map((filter) => {
              const isActive =
                active === filter.id;

              return (
                <button
                  key={filter.id}
                  className={
                    isActive ? 'active' : ''
                  }
                  onClick={() =>
                    setActive(filter.id)
                  }
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {visibleTracks.map((track) => (
            <section
              className="classroom-track"
              key={track.id}
              aria-labelledby={`${track.id}-heading`}
            >
              <div className="track-heading">
                <div>
                  <span>{track.label}</span>

                  <h3 id={`${track.id}-heading`}>
                    {track.title}
                  </h3>

                  <p>{track.audience}</p>
                </div>

                <p className="track-outcome">
                  {track.outcome}
                </p>
              </div>

              <div className="course-grid">
                {track.courses.map((course) => {
                  const isSelected =
                    selectedCourse?.slug ===
                    course.slug;

                  return (
                    <article
                      className={`course-card ${
                        isSelected
                          ? 'is-selected'
                          : ''
                      }`}
                      key={course.slug}
                      role="button"
                      tabIndex={0}
                      aria-label={`View course details for ${course.title}`}
                      aria-pressed={isSelected}
                      onClick={() =>
                        openCourse(course, track)
                      }
                      onKeyDown={(event) => {
                        if (
                          event.key === 'Enter' ||
                          event.key === ' '
                        ) {
                          event.preventDefault();
                          openCourse(
                            course,
                            track,
                          );
                        }
                      }}
                    >
                      <div className="course-image">
                        <img
                          src={resolveClassroomImage(
                            course.image,
                          )}
                          alt={course.title}
                          loading="lazy"
                        />

                        <span
                          className={`course-tier ${course.tier}`}
                        >
                          {course.tier ===
                            'prem' && <LockIcon />}

                          {course.tier === 'free'
                            ? 'On Free'
                            : 'Premium'}
                        </span>
                      </div>

                      <div className="course-content">
                        <h4>{course.title}</h4>

                        <span className="course-format">
                          {course.format}
                        </span>

                        <ul>
                          {course.highlights.map(
                            (item) => (
                              <li key={item}>
                                <span
                                  aria-hidden="true"
                                >
                                  ✓
                                </span>

                                {item}
                              </li>
                            ),
                          )}
                        </ul>

                        <div className="course-chips">
                          {course.chips.map(
                            (chip) => (
                              <span key={chip}>
                                {chip}
                              </span>
                            ),
                          )}
                        </div>

                        <span className="course-link">
                          See what’s inside →
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}

          <p className="classroom-footer">
            {classroomIntro.footer}
          </p>
        </div>
      </section>

      {selectedCourse && (
        <div
          className="course-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="classroom-course-title"
          aria-describedby="classroom-course-description"
        >
          <button
            type="button"
            className="course-modal-backdrop"
            aria-label="Close course details"
            onClick={closeCourse}
          />

          <div className="course-modal-panel">
            <div className="course-modal-image">
              <img
                src={resolveClassroomImage(
                  selectedCourse.image,
                )}
                alt={selectedCourse.title}
              />

              <div className="course-modal-image-shade" />

              <span
                className={`course-tier ${selectedCourse.tier}`}
              >
                {selectedCourse.tier === 'prem' && (
                  <LockIcon />
                )}

                {selectedCourse.tier === 'free'
                  ? 'On Free'
                  : 'Premium'}
              </span>

              <button
                ref={closeButtonRef}
                type="button"
                className="course-modal-close"
                onClick={closeCourse}
                aria-label="Close course details"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="course-modal-content">
              <div className="course-modal-meta">
                <span>
                  {selectedCourse.trackLabel}
                </span>

                <span className="course-modal-meta-dot">
                  ·
                </span>

                <span>
                  {selectedCourse.trackTitle}
                </span>

                <span className="course-modal-meta-dot">
                  ·
                </span>

                <span>
                  {getModuleText(selectedCourse)}
                </span>
              </div>

              <h3 id="classroom-course-title">
                {selectedCourse.title}
              </h3>

              <p
                className="course-modal-description"
                id="classroom-course-description"
              >
                {selectedCourse.description}
              </p>

              <div className="course-modal-details">
                <div>
                  <div className="course-modal-section-title">
                    <span />
                    What’s inside
                  </div>

                  <ul className="course-modal-list">
                    {selectedCourse.highlights.map(
                      (item) => (
                        <li key={item}>
                          <CheckIcon />
                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {selectedCourse.chips?.length >
                  0 && (
                  <div className="course-modal-chips">
                    {selectedCourse.chips.map(
                      (chip) => (
                        <span key={chip}>
                          {chip}
                        </span>
                      ),
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="course-modal-footer">
              <a
                href={joinSkoolHref}
                target="_blank"
                rel="noreferrer"
                className="course-modal-cta"
              >
                <span>
                  Join AI Launchpad on Skool
                </span>

                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
