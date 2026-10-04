---
name: Himanshu Kulkarni
description: A full-stack and forward deployed engineer's career, published as a product's release notes.
colors:
  paper: "#ffffff"
  ink: "#0d1117"
  soft: "#4a5260"
  line: "#e3e6ea"
  wash: "#f3f4f6"
  tag: "#2346ff"
  tag-wash: "#e8edff"
  added: "#0a7f3f"
  added-wash: "#e3f6ea"
typography:
  display:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "clamp(3.25rem, 7vw, 6.5rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "clamp(2.25rem, 4.2vw, 3.5rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title-package:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "34px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
  title-section:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  version-tag:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  button:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.4
  label:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  none: "0px"
spacing:
  gutter-mobile: "20px"
  gutter: "32px"
  card: "22px"
  section: "56px"
components:
  navbar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    height: "56px"
    padding: "0 32px"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    height: "48px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.tag}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    height: "48px"
    padding: "0 20px"
  button-ghost-hover:
    backgroundColor: "{colors.wash}"
  button-resume:
    backgroundColor: "{colors.tag}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "36px"
    padding: "0 14px"
  badge-release:
    backgroundColor: "{colors.added-wash}"
    textColor: "{colors.added}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  badge-published:
    backgroundColor: "{colors.added-wash}"
    textColor: "{colors.added}"
    rounded: "{rounded.none}"
    padding: "3px 8px"
  timeline-marker:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.none}"
    size: "12px"
  timeline-marker-hover:
    backgroundColor: "{colors.ink}"
  timeline-marker-current:
    backgroundColor: "{colors.tag}"
    rounded: "{rounded.none}"
    size: "12px"
  timeline-version:
    textColor: "{colors.ink}"
  timeline-version-hover:
    textColor: "{colors.tag}"
  timeline-version-current:
    textColor: "{colors.tag}"
  change-marker:
    backgroundColor: "{colors.added-wash}"
    textColor: "{colors.added}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    width: "20px"
    height: "22px"
  figure-highlight:
    backgroundColor: "{colors.tag-wash}"
    textColor: "{colors.tag}"
    padding: "0 3px"
  package-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.card}"
  code-line:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
  text-link:
    textColor: "{colors.tag}"
    typography: "{typography.label}"
---

# Design System: Himanshu Kulkarni

## Overview

**Creative North Star: "The Release Notes"**

The career is published the way a software product publishes a release: a "Latest release" header with the current version set huge, a dependency manifest, a changelog of every prior version with `+` additions, and a set of published packages you can open. The visitor is a scanning reader (a recruiter or a founder between tasks), so the system behaves like good documentation: white paper, near-black ink, hairline rules, and colour used only as semantic marks that mean something, the way a changelog uses blue for a version and green for an addition.

Density is calm and editorial rather than dashboard-tight. Sections are separated by 1px rules and generous vertical rhythm, not by cards or fills. Type does the heavy lifting: Schibsted Grotesk at Black and Extrabold weights carries the voice and every version number, while JetBrains Mono is reserved for the machine-readable layer (dates, metadata, tech lines, commands). Corners are square everywhere; the only round shape is the small green status dot in the release badge, which is a status light, not a corner.

The direction explicitly rejected the dark card-grid developer template and a rolled magazine "Cover Story" treatment. Motion is a single authored moment, the once-per-session install loader; everything else is colour-only state change.

**Key Characteristics:**
- White paper, ink text, one blue (release tag) and one green (added), each with a pale wash partner.
- Version tags are display type in Schibsted Grotesk, never mono.
- Mono is metadata: dates, key/value specs, tech lists, the `open <url>` command line, the footer.
- 1px hairline rules between sections and grid cells; 1.5px ink strokes for things you can act on or open.
- Square corners, flat surfaces, no shadows.
- A horizontal release timeline under the hero: every version on one hairline track, the current one in blue.

## Colors

A paper-and-ink documentation palette with two semantic accents: release blue marks versions and active state, added green marks what shipped.

### Primary
- **Release Tag Blue** (`tag`): Version numbers (hero, the current release on the timeline, changelog, loader), the current release's filled timeline marker, hover on past timeline versions, the Resume button, project text links, the focus outline, the loader progress bar, and the hover state of the primary GitHub button.
- **Tag Wash** (`tag-wash`): The highlight behind figures in changelog bullets (percentages, "N+", "halved") and the text selection colour. Always paired with Release Tag Blue text.

### Secondary
- **Added Green** (`added`): Changelog `+` markers, the "Latest release" badge text and its status dot, and the "Published" badge on projects with a live link.
- **Added Wash** (`added-wash`): The fill behind every Added Green mark. Green never appears as text on paper without this wash.

### Neutral
- **Paper** (`paper`): The page, the loader backdrop, and text on ink and blue fills.
- **Ink** (`ink`): Body text, headings, the sticky navbar band, the primary GitHub button, the 1.5px strokes on ghost buttons and package cards, the 2px outline of past-release timeline markers (filling solid on hover). Also the browser theme colour.
- **Soft Graphite** (`soft`): Secondary text: the role half of headlines, bios and descriptions, section subtitles, metadata labels, dates, tech lines, the footer.
- **Hairline** (`line`): Every 1px rule: section dividers, the dependency grid cells, changelog row dividers, the photo card frame, the footer rule, the loader track.
- **Wash** (`wash`): Hover fill for ghost buttons, and the background of the `open <url>` command line.

### Named Rules
**The Semantic Accent Rule.** Blue means "version or current location"; green means "added or shipped". Neither is used decoratively, and they are never swapped.

**The Wash Pair Rule.** A coloured mark on paper is coloured text on its own wash (`tag` on `tag-wash`, `added` on `added-wash`). The only solid accent fills are the current release's 12px timeline marker, the Resume button, the GitHub button's hover state, the loader bar, and the green status dot.

**The Small Marks Rule.** Colour lives in marks (badges, markers, highlighted figures, the current timeline marker), never in section-sized fields. The ink navbar is the one full-width dark band.

## Typography

**Display Font:** Schibsted Grotesk (via `next/font`, exposed as `--font-sans`)
**Body Font:** Schibsted Grotesk
**Label/Mono Font:** JetBrains Mono (via `next/font`, exposed as `--font-mono`)

**Character:** A dense, newsy grotesk pushed to Black with tight negative tracking gives the version numbers and headlines the weight of a product announcement; JetBrains Mono beside it reads as the terminal output underneath.

### Hierarchy
- **Display** (`display`): The current version in the hero only, in Release Tag Blue. The single loudest element on the page. The leading "v" is set apart with 0.06em of right margin so it doesn't collide with the digits under the tight tracking.
- **Headline** (`headline`): The hero h1, "Hi, I am Himanshu!", with the role and company following in Medium (500) Soft Graphite inside the same line.
- **Title, package** (`title-package`): Project names on package cards.
- **Title, section** (`title-section`): Section headings (Dependencies, Professional Experience, Projects, Contact), each followed by a Soft Graphite one-line subtitle. Company headings in the changelog use the same weight and tracking at 24px, rising to 30px from 640px, with the role in Medium Soft Graphite after a middle dot.
- **Version tag** (`version-tag`): Changelog version numbers in Release Tag Blue. The release timeline uses the same Extrabold and tracking at 18px.
- **Lead** (`lead`): The hero bio, Soft Graphite, rising to 21px from 640px, capped at 40ch, with the key phrase in Semibold Ink.
- **Body** (`body`): Changelog bullets in Ink, capped at 70ch. Project descriptions use the same size in Soft Graphite at 1.55 line height.
- **Button** (`button`): Hero and contact buttons, and the navbar name in Extrabold. Dependency names use the same 15px in Medium.
- **Label** (`label`): Nav links, text links, the Resume button, badges (12–13px Semibold).
- **Mono** (`mono`): Dates, the photo card's key/value values, project tech lists joined with " · ", the `open <url>` line, the footer, and the loader tagline.

### Named Rules
**The Version Is Display Rule.** Version tags (`vYYYY.MM`, derived from each role's start date) are always Schibsted Grotesk: Black (900) in the hero and the loader, Extrabold (800) everywhere else. Never set a version in mono.

**The Mono Is Metadata Rule.** JetBrains Mono appears only for dates and machine-readable metadata. It never carries a heading, a version, a button, or prose.

**The Muted Second Half Rule.** Two-part headings put the name in heavy Ink and the role in Medium Soft Graphite inside the same heading, rather than adding a separate subtitle line.

## Layout

A single centred column (max 1240px) with side gutters of 20px, widening to 32px from 640px, and 96px of bottom padding. There is no sidebar or multi-column page grid; the order is Hero, Release Timeline, Dependencies, Professional Experience, Projects, Contact.

Sections stack vertically with 56px top and bottom padding and a 1px hairline rule between them; the hero sits slightly tighter at the top (40px, 48px from 640px). Inside sections, a heading plus subtitle is followed by 16–24px before content.

- **Hero:** badge, then a two-column split from 768px: display version, headline, bio and actions at 1.1fr on the left, and the photo card at 1fr on the right, its top aligned with the top of the version. On mobile GitHub and LinkedIn sit side by side in a two-up action grid.
- **Release timeline:** a full-width strip with 40px vertical padding and a hairline below it; six equal flexible items with a 150px minimum, scrolling horizontally (edge to edge on mobile) when they do not fit.
- **Dependencies:** an auto-fill grid of cells with a 168px minimum width, drawn as a continuous hairline lattice.
- **Changelog:** each role is a row with a 180px left column (version over mono dates) and a fluid right column from 768px, stacked on mobile, divided by hairlines.
- **Projects:** a two-column grid of package cards from 768px with a 20px gap; when the count is odd, the last card spans both columns.
- **Anchors:** in-page navigation scrolls smoothly with a 56–80px scroll offset so headings clear the sticky navbar.

## Elevation & Depth

The system is completely flat. There are no shadows, gradients, or blurs anywhere. Depth and grouping come from three devices only: 1px Hairline rules that divide and frame, 1.5px Ink strokes that mark interactive or openable objects, and the pale Wash fill that signals hover or a code surface. The sticky navbar layers over the content without any shadow.

### Named Rules
**The Paper Has No Height Rule.** Nothing floats. If something needs separating, give it a rule or a stroke, not a shadow.

## Shapes

Square corners throughout (`rounded.none`): buttons, badges, cards, the photo frame, timeline markers, change markers, and the command line are all hard rectangles. Strokes come in two weights: 1px Hairline for structure (dividers, the dependency lattice, the photo frame, the timeline track, the footer) and 1.5px Ink for things you act on or open (ghost buttons, package cards). The 12px timeline markers carry their own 2px outline because at that size they are glyphs, not frames. The single native circle is the 8px Added Green status dot inside the "Latest release" badge.

### Named Rules
**The Two Strokes Rule.** 1px Hairline structures; 1.5px Ink invites. Don't introduce another frame weight or a coloured border; the 2px outline on 12px timeline markers is a glyph stroke, not a frame.

## Components

### Buttons
Blunt rectangular blocks, set in Semibold Schibsted Grotesk, with colour-only state changes on a short transition.
- **Shape:** square corners (0px).
- **Primary (GitHub):** Ink fill with Paper text, 48px tall, 20px side padding, 15px Semibold, led by an 18px GitHub mark. It is the only primary action on the page; on hover it fills Release Tag Blue.
- **Ghost:** Paper with a 1.5px Ink stroke, Ink text, 48px tall, 20px side padding; hover fills with Wash. LinkedIn carries an 18px LinkedIn mark in its brand blue (#0A66C2), GitHub an Ink mark.
- **Resume (navbar):** a solid Release Tag Blue block, 36px tall, Paper text, darkening slightly on hover. The only blue button.
- **Text links (projects):** Release Tag Blue Semibold text followed by a `↗` arrow, underlined on hover with a 4px offset, with screen-reader text naming the project and the new tab.
- **Focus:** every focusable element gets a 2px Release Tag Blue outline offset by 3px.

### Chips
- **Release badge:** Added Wash fill, Added Green 13px Semibold text, with the 8px status dot before "Latest release".
- **Published badge:** the same pair at 12px, shown top-right on a project card only when the project has a live link.

### Cards / Containers
- **Package card (projects):** square corners, Paper background, 1.5px Ink stroke, 22px padding, a 12px vertical stack: Black project title with the Published badge opposite, a Medium subtitle, a Soft Graphite description, a mono tech line, an optional `open <url>` command line (Wash fill, mono, with `--password` in Soft Graphite), then text links pinned to the bottom.
- **Photo card (hero):** a 1px Hairline frame around a 4:5 portrait photo, with a key/value list below it: Soft Graphite labels (Maintainer, Region) and mono values.
- **Shadow Strategy:** none (see Elevation & Depth).

### Navigation
- **Navbar:** a sticky 56px Ink band spanning the viewport, its contents aligned to the 1240px container. The name sits on the left in 15px Extrabold Paper. Section links and GitHub/LinkedIn (each led by a 16px monochrome brand mark) are 14px in a light grey that turns Paper on hover, and the blue Resume button sits at the far right. Below 768px everything collapses behind a plain "Menu" / "Close" text button that opens a full-width panel of 18px Semibold links above a hairline-divided row of external links.

### Release Timeline (signature)
A static, non-sticky strip directly under the hero, labelled "Releases" for assistive tech. Each of the six releases is a link to its changelog entry. Each link has a 1px Hairline track with a 12px square marker at its start, the version in 18px Extrabold below, and the company's short name in 14px Soft Graphite. The current release has a solid Release Tag Blue marker and a blue version. Past releases have a 2px Ink outline on Paper; on hover the marker fills Ink and the version turns blue. It does not track scroll position or show an active state; it is a map of versions, not a scrollspy.

### Changelog Entry (signature)
Each role is a release, newest first, starting with the current one. The left column holds the version in Release Tag Blue Extrabold over its mono date range; the right column holds the company and role heading and, when the role has any, a list of bullets. Each bullet is led by a 20×22px Added Wash square containing a bold mono Added Green `+`. Figures inside the copy (percentages, "N+", "halved") are automatically highlighted as Release Tag Blue Semibold on Tag Wash. Entries are separated by hairlines, and each carries a `release-vYYYY.MM` anchor for the release timeline.

### Dependency Grid (signature)
A manifest of the stack: a hairline lattice of cells, each holding a 22px full-colour brand logo (Simple Icons SVGs in their brand colours, Cursor and Claude Code included as inline SVGs in black and Claude orange, plus a PNG mark for TanStack; CI/CD, which has no brand, uses a generic Ink workflow glyph) and the name in 15px Medium. Logos are always shown in full colour; they are the one place third-party colour enters the page.

### Contact Block
The closing release note: the section heading followed by ghost buttons for GitHub and LinkedIn (with their marks) and Resume, then a mono Soft Graphite footer above a hairline. No email address is shown anywhere on the site.

### Install Loader (signature motion)
The single authored motion moment. On the first visit to the home page in a session, and never when reduced motion is requested, a Paper screen spells the current version in Black Release Tag Blue character by character (rising 16px, staggered 40ms), shows the mono tagline `installing himanshu@<version>`, and fills a 3px Release Tag Blue bar on a Hairline track over about one second, then fades and lifts away. No other element animates on entry.

## Do's and Don'ts

### Do:
- **Do** set every version tag in Schibsted Grotesk: Black (900) in the hero and loader, Extrabold (800) elsewhere, in Release Tag Blue.
- **Do** keep JetBrains Mono to dates and metadata: date ranges, key/value values, tech lists, the `open <url>` line, the footer.
- **Do** keep GitHub as the single primary (Ink) action in the hero; LinkedIn and Resume are ghost buttons.
- **Do** separate sections and grid cells with 1px Hairline rules, and outline interactive or openable objects with a 1.5px Ink stroke.
- **Do** pair every coloured mark with its wash: `tag` on `tag-wash`, `added` on `added-wash`.
- **Do** show tech as full-colour logos in the Dependencies grid.
- **Do** keep all copy exactly as written; the visual system adapts to the copy, not the reverse.
- **Do** honour reduced motion: skip the loader and disable smooth scrolling.

### Don't:
- **Don't** set a version number in mono, or set headings, buttons, or prose in mono.
- **Don't** round corners on buttons, badges, cards, or frames; the release badge's status dot is the only circle.
- **Don't** use side-tab borders (a thick coloured stripe on one edge of a card or list item) to mark emphasis; use the `+` marker, a wash highlight, or a filled square marker instead.
- **Don't** paint sections or panels in colour fields; colour stays in small semantic marks.
- **Don't** add shadows, gradients, glows, or blurs.
- **Don't** use blue and green interchangeably: blue is version and location, green is added and shipped.
- **Don't** show an email address anywhere on the site until a contact method is chosen.
- **Don't** add testimonials, client logos, press, or any invented claims or figures.
- **Don't** add entrance animations beyond the once-per-session install loader.
- **Don't** fall back to the dark card-grid developer-portfolio template.
