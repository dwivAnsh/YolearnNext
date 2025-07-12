// ✅ TutorInfo.tsx
"use client";

import { useState } from "react";
import {
  learningTools,
  interactionTutorOptions,
  interactionPaceOptions,
  feelingOptions,
} from "../constants/menuItems";

export default function TutorInfo() {
  const [showTutor, setShowTutor] = useState(true);
  const [selectedTutor, setSelectedTutor] = useState<string | null>(null);
  const [selectedPace, setSelectedPace] = useState<string | null>(null);
  const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null);

  return (
    <div className="w-[300px] border-l border-base-300 bg-base-100 text-base-content p-4 h-full relative overflow-hidden">
      {/* Toggle Button */}
      <div className="mb-4">
        <button
          onClick={() => setShowTutor((prev) => !prev)}
          className="btn btn-sm bg-base-200 text-primary"
        >
          <i
            className={`ri-arrow-${showTutor ? "left" : "right"}-s-line text-xl`}
          />
        </button>
      </div>

      {/* Conditional Section */}
      <div className="relative h-full">
        {showTutor ? (
          // 👨‍🏫 Tutor Info
          <div className="card bg-base-100 border border-base-200 shadow-sm p-4">
            <div className="flex items-center gap-4 mb-3">
              <img
                src="/avatar2.png"
                alt="Tutor Avatar"
                className="w-14 h-14 object-cover rounded-xl"
              />
              <div>
                <h3 className="font-semibold">Alex Dagota</h3>
                <p className="badge badge-info text-xs mt-1">Tutor</p>
              </div>
            </div>
            <p className="text-sm opacity-70 mb-4">
              Friendly and patient tutor specializing in breaking down complex
              concepts into digestible pieces.
            </p>
            <div className="space-y-2">
              <button className="btn btn-outline btn-primary w-full">
                <i className="ri-video-on-line" />
                Video Call
              </button>
              <button className="btn btn-primary w-full text-base-100">
                <i className="ri-phone-line text-base-100" />
                Call
              </button>
            </div>
          </div>
        ) : (
          // 📚 Tools + Settings
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-3">Learning Tools</h2>
              <ul className="space-y-2 text-sm">
                {learningTools.map((tool) => (
                  <li
                    key={tool}
                    className="py-3 px-3 rounded-xl hover:bg-base-200 transition cursor-pointer"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <i className="ri-settings-3-line" />
                Interaction Settings
              </h2>

              {/* Dropdowns */}
              <div className="space-y-4 text-sm">
                {/* Select Tutor */}
                <div className="form-control">
                  <label className="label label-text mb-1">
                    Select a Tutor
                  </label>
                  <div className="dropdown w-full">
                    <label
                      tabIndex={0}
                      className="btn btn-sm justify-between w-full bg-base-200 text-left"
                    >
                      {selectedTutor || "Select an option"}
                      <i className="ri-arrow-down-s-line ml-auto text-lg" />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full mt-2 border border-base-200"
                    >
                      {interactionTutorOptions.map((opt) => (
                        <li key={opt}>
                          <a onClick={() => setSelectedTutor(opt)}>{opt}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pace */}
                <div className="form-control">
                  <label className="label label-text mb-1">Pace</label>
                  <div className="dropdown w-full">
                    <label
                      tabIndex={0}
                      className="btn btn-sm justify-between w-full bg-base-200 text-left"
                    >
                      {selectedPace || "Select an option"}
                      <i className="ri-arrow-down-s-line ml-auto text-lg" />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full mt-2 border border-base-200"
                    >
                      {interactionPaceOptions.map((opt) => (
                        <li key={opt}>
                          <a onClick={() => setSelectedPace(opt)}>{opt}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Feeling */}
                <div className="form-control">
                  <label className="label label-text mb-1">
                    How are you feeling today?
                  </label>
                  <div className="dropdown w-full">
                    <label
                      tabIndex={0}
                      className="btn btn-sm justify-between w-full bg-base-200 text-left"
                    >
                      {selectedFeeling || "Select an option"}
                      <i className="ri-arrow-down-s-line ml-auto text-lg" />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full mt-2 border border-base-200"
                    >
                      {feelingOptions.map((opt) => (
                        <li key={opt}>
                          <a onClick={() => setSelectedFeeling(opt)}>{opt}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}