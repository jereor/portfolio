import warframeOfferHighlightThumbnail from '../assets/images/warframe/offer_highlight/offer_highlight_design.png';
import warframeBreadcrumbingThumbnail from '../assets/images/warframe/breadcrumbing/breadcrumbing_pause_arsenal.png';
import unrealPerformanceThumbnail from '../assets/images/unreal/performance_test_graph.jpg';
import unityLocalizationThumbnail from '../assets/images/unity/localization_system_diagram.png'
import unityTaggingThumbnail from '../assets/images/unity/tagging_system_diagram.png'
import assetToolsThumbnail from '../assets/images/asset-tools-thumbnail.png';

export const projects = {
  "asset-tools": {
    picture: assetToolsThumbnail,
    link: "https://github.com/jereor/asset-tools",
    title: "Asset Validation & Pipeline Tool (C++)",

    description:
      "A production-style C++ tooling project designed to simulate real-world asset pipeline systems, focusing on deterministic behavior, CI integration, and modular architecture.",

    problems: [
      "Game teams rely heavily on internal tools for asset validation, content pipelines, and debugging, but those systems are often scattered across projects.",
    ],

    solutions: [
      "Designed and implemented a C++ internal tools prototype focused on asset validation.",
      "Architected with clear module boundaries and separation between engine and tooling code.",
      "Built reusable core libraries and a CMake-based project structure.",
      "Implemented production-style logging suitable for CI workflows.",
      "Created a version-controlled configuration layer for deterministic behavior.",
      "Integrated seamlessly with Jenkins CI using Docker."
    ],

    result:
      "Developed a scalable and reproducible internal tooling foundation that improves asset validation workflows across any number of projects.",

    tech: ["C++", "CMake", "Jenkins", "Docker"]
  },

  "unreal-performance-testing": {
    picture: unrealPerformanceThumbnail,
    link: "",
    title: "Unreal Engine Automated Performance Testing Framework (C++)",

    description:
      "C++-based automated performance testing framework for Unreal Engine, utilizing AWS Device Farm for large‑scale device coverage.",

    problems: [
      "Tech artists try to improve game performance, but have no easy way of finding where the game has lag spikes, and no way of tracking the impact of their changes.",
    ],

    solutions: [
      "Created tests that drive cameras deterministically through levels, capture and profile performance metrics, and generate SVG performance graphs for analysis and regression tracking.",
      "Implemented a system for deterministically generating worst‑case procedural level scenarios to stress‑test performance.",
      "Wrote Appium scripts to run tests on real devices and integrated AWS Device Farm for large‑scale device coverage."
    ],

    result:
      "Tech artists got tangible data on which levels and sub-areas in the game were struggling to run on mobile and we knew exactly which devices were having performance issues.",

    tech: ["C++", "Unreal Engine", "TeamCity", "AWS Device Farm", "Appium"]
  },

  "warframe-offer-highlight": {
    picture: warframeOfferHighlightThumbnail,
    link: "",
    title: "Warframe In-Game Store Offer System (C++/Lua)",

    description:
      "UI feature delivering contextual in-game offers via the pause menu — handled game-state and platform edge cases reliably without breaking input, performance, or other UI flows in a large live codebase.",

    problems: [
      "Conversion and revenue need to be improved, but new players do not know about all the cool offers in the in-game store.",
    ],

    solutions: [
      "Designed and implemented a C++ system to surface curated in‑game offers whenever players opened the pause menu.",
      "Implemented algorithms to prioritize limited‑time offers and high‑value premium bundles.",
      "Streamlined the purchase flow by taking the player directly to the purchase screen when clicking the highlighted offer."
    ],

    result:
      "~10% increase in conversion and revenue.",

    tech: ["C++", "Lua", "Proprietary Engine"]
  },

    "warframe-progression-guidance": {
    picture: warframeBreadcrumbingThumbnail,
    link: "",
    title: "Warframe Player Progression Guidance System (C++/Lua)",

    description:
      "End-to-end 'newness' state machine tracking unseen content across many screens — kept correct and persistent against data refresh quirks and UI virtualization in a live, cross-platform environment.",

    problems: [
      "Mobile players are quitting the game after Day 1, because progression is confusing and players don't know what to do next and how to upgrade their gear.",
    ],

    solutions: [
      "Implemented a C++/Lua based UI guidance system to help players discover newly unlocked quests, equipment, and upgrades.",
    ],

    result:
      "Increased player retention and overall satisfaction with the progression loop.",

    tech: ["C++", "Lua", "Proprietary Engine"]
  },

  "unity-tagging-query": {
    picture: unityTaggingThumbnail,
    link: "",
    title: "Unity Tagging & Query System (C#)",

    description:
      "A custom C# tagging and query framework for Unity that allows tagging entities with multiple tags and querying entities in a scene by tags in both editor and in gameplay.",

    problems: [
      "Unity’s built-in tagging system is limited (e.g. only one tag per entity).",
      "There was confusion between tags and flags, leading to misuse and poor system design.",
      "Existing approaches (like spreadsheets) introduced high risk of human error, merge conflicts, and scalability issues.",
      "Gameplay systems needed a way to identify entities reliably and query groups of entities efficiently."
    ],

    solutions: [
      "Tag Creation: Tags are defined as scriptable data in Unity, stored in a central database, with proper validation and UX (e.g. autocomplete, duplication prevention).",
      "Tag Assignment: Tags are assigned to entities inside Unity during creation workflows, with proper tooling (e.g. search, autocomplete).",
      "Tag Utility in Unity: Tools allow users to query and visualize entities in scenes using tags, with edicated editor windows to display query results (supports logical queries with INCLUDES/EXCLUDES)",
      "Tag Utility in Gameplay: Gameplay systems use tag queries to check if an entity has tags, and to retrieve groups of entities from the server",
      "Built the system using test-driven development (TDD) to ensure reliability and maintainability."
    ],

    result:
      "Reduced errors and abiguity, and improved designer workflow and iteration speed.",

    tech: ["C#", "Unity"]
  },

  "unity-localization": {
    picture: unityTaggingThumbnail,
    link: "",
    title: "Unity Localization Framework (C#)",

    description:
      "A reusable C# localization system for Unity, that standardizes functionality across multiple Unity projects.",

    problems: [
      "Localization systems were repeatedly implemented from scratch across projects, leading to duplicated effort and inconsistent implementations."
    ],

    solutions: [
      "Designed and developed a reusable localization system in C# to standardize functionality across multiple Unity projects.",
      "Implemented a wrapper-based architecture to unify different third-party localization solutions behind a single, consistent interface.",
      "Built the system using test-driven development (TDD) to ensure reliability and maintainability."
    ],

    result:
      "Reduced development time across projects and lowered the barrier for adopting localization as a standard feature.",

    tech: ["C#", "Unity"]
  },
};