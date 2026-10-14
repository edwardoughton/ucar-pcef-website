# Virginia Multi-Hazard Workshop website

A responsive static event website based on the proposal and supporting documents in `data/` and the supplied reservation details. No build step or dependencies are required.

## Preview

Run `python -m http.server 8000` from this directory, then visit http://localhost:8000. You can also open `index.html` directly.

## Publish

Deploy `index.html`, `styles.css`, `workshop.js`, and `assets/` to any static host. The `data/` directory contains internal application materials and is not linked from the site; exclude it from the deployment artifact. The internal `data/` directory is excluded by `.gitignore`. For GitHub Pages, select **Deploy from a branch**, branch **main**, folder **/ (root)** in the repository Settings > Pages.

## Content decisions

- The confirmed reservation date, **16 April 2027, 10 AM–2 PM Eastern**, takes precedence over the initial March reference. The calendar download uses the equivalent UTC times, accounting for daylight saving time.
- Venue: Lewis Ginter Botanical Garden, Robins Room. Expected attendance: 50.
- The broader resilience framing reflects the proposal's community-engaged approach. Flooding, hurricanes, and space weather are potential focus areas, with final priorities to be shaped by partners.
- Agenda, outputs, and registration are described as planned or forthcoming. No funding award, confirmed speaker list, or completed analytics is implied.
- Public contact addresses come from `data/Application form.pdf`.
- The landscape is an original decorative SVG, not a hazard map or modeled result.
- Typography uses Google Fonts, with local system fallbacks if unavailable.

Edit `index.html` for content, `styles.css` for design, and `assets/virginia-resilience.ics` if event details change. The participation form prepares a local email draft to Alice Fox; it does not submit or store participant data on a server.

Organization logos are stored locally from the official websites:
- GMU: https://www.gmu.edu/themes/custom/sf_mason_2024/logo.png
- UCAR: https://www.ucar.edu/profiles/custom/ncar_ucar_umbrella/themes/custom/koru/libraries/koru-base/img/logo-ucar.png

The GMU GeoAI and Earth Observation Research Group logo links to https://geoai-and-earth-observation.github.io/Website/. The supplied original is preserved as `assets/GMU_GeoAI_and_Earth_Observation_Research_Group.png`; the website uses a transparent derivative, `assets/geoai-logo-transparent.png`.

The join form requires name, email, organization, and a travel-support choice. A justification is required when support is requested. Visitors must send the prepared email themselves; participation and funding are subject to organizer review.
