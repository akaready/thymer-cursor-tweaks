# Cursor Tweaks

Forge your text cursor. Cursor Tweaks replaces Thymer's caret with a canvas-rendered one you can shape, colour, animate and set on fire.

> **A port, with thanks.** Cursor Tweaks is a port of [**Cursor-Smith**](https://github.com/Sadsnake1/cursor-smith), created by [**SadSnake1**](https://github.com/Sadsnake1) and released under the MIT licence. The cursor engine — the spring physics, the particle systems, the frame governor, the lot — is their design and their work. This repository adapts it to Thymer's very different editor and settings surface. If you like it, go star [the original](https://github.com/Sadsnake1/cursor-smith) and [buy them a coffee](https://www.buymeacoffee.com/sadsnake1).

## Features

- **Three cursor styles** — Box, Line (with optional I-beam serifs), and Underline (with adjustable bar thickness).
- **Smooth movement** — the cursor eases and glides between positions instead of jumping, with adjustable glide, catch-up speed, and an optional adaptive boost while typing fast.
- **Motion smear** — a four-corner spring drags the cursor's shape along its line of travel, optionally tapering to a comet-tail point.
- **Customisable blinking** — matches Thymer's own caret cadence by default, read live from Thymer's stylesheet rather than hardcoded, so the two feel like the same cursor. Turn matching off to set the speed and the on/off balance by hand. The cursor holds solid while you type and across every click — a caret caught mid-blink is the one thing that can't tell you where you just clicked. Breathing mode makes it shrink and swell instead of vanishing.
- **Colour** — separate colours for dark and light appearance, or a 2–4 stop gradient ramp (one per appearance). Adjustable thickness, opacity and glow.
- **After effects** — popping letters (with optional rainbow), a fading pixel trail, backspace disintegration, thunderstrike lightning on Enter, drifting or orbiting stardust, a Speed Demon heat ramp with fire sparks, an energy beam with an aurora variant, and a CRT phosphor trail.
- **Torch** — a spotlight that darkens everything but a pool of light around the cursor, following the caret or the pointer, optionally breathing in sync with the blink.
- **Presets** — six built-in looks to start from, save your own, and share any of them as a compact code.

## Installing

Install through the Thymer Plugins Manager, or paste [`dist/plugin.js`](dist/plugin.js) into a new global plugin and [`plugin.json`](plugin.json) into its config.

## Using it

Open the settings with **Plugin: Cursor Tweaks** from the command palette — the only command the plugin registers. Everything applies live.

The panel opens on a big on/off switch: turn it off and you get Thymer's own caret back. The panel stays fully editable while it's off, and everything you change applies the moment you switch it back on.

Below that is a preview box. Type in it to try any setting without touching your notes — it stays pinned to the top of the panel as you scroll, so you can watch a change land while you make it. Nothing typed there is saved.

Under **Troubleshooting** there is a **Diagnose caret** button. It records what the engine reads from the caret for five seconds and copies the result to your clipboard; attach that when reporting anything about cursor position.

### Presets

**Starting points** are the six built-in looks — Jell-O, Torch-Crt, mr.Blue, FairyDust, DarkMatter and old_Joe. They are read-only: **Load** one, tweak it, then save it under your own name. (They are rendered from the plugin rather than written into your settings, so a fresh device never gets a config write it didn't ask for.)

**Your presets** support Load, Edit, Copy and Delete. *Edit* loads a preset and pre-fills its name in the save field, so saving overwrites it.

**Sharing** — every preset has a **Copy** button that puts a share code on your clipboard. Send it to anyone; they paste it into the import field. Imported codes are fully validated before they touch your settings, so a code from a stranger can only ever set look options.

A preset stores every look and effect setting. It deliberately does **not** store the plugin's on/off state or the two caret-hiding options, so loading one can never leave you without a cursor.

### Settings scope

Cursor Tweaks uses this repo's shared per-device settings model. A device follows the synced baseline (`○ All devices`) until you change something here, at which point it keeps its own values (`● This device`). The **↑** button in the panel header promotes your current settings to every device; **↺** discards this device's changes and goes back to the shared baseline.

## How it works in Thymer

Thymer paints its own caret as a real DOM element, `div.listview-caret-self`, and restamps `data-x` / `data-y` on it every time the caret moves. Cursor Tweaks reads that element's rect as its primary source — it is exact, correct on blank rows, and maintained by Thymer itself — then hides it with `opacity: 0` (never `display: none`, which would zero the rect we depend on) and draws a replacement on a `position: fixed` canvas clipped to the focused panel's scroller.

Everywhere outside the editor — the command palette, search boxes, rename fields, plugin panels — it falls back to a pure-DOM path built on `document.activeElement`, `window.getSelection()` and Range rects, with an offscreen mirror for `<input>` and `<textarea>`. That is what makes the cursor app-wide, and it matters more here than it did upstream: the native caret is hidden globally, so a surface this path missed would have no caret at all.

Because of that, the tick loop carries a watchdog. If the engine throws on five consecutive frames it stops itself, removes the caret-hiding CSS so Thymer's own caret comes back, and tells you. `onUnload` drops those classes in a `finally` for the same reason.

### Performance

The renderer is governed. It shifts between four gears — full rate while something is genuinely moving, ~30fps for blink fades and stardust, ~30fps for the energy shimmer alone, and a 100ms heartbeat otherwise — and skips the clear-and-redraw entirely when the painted picture would be identical to the last one. Clears are tracked to the exact region the previous frame touched rather than the whole viewport. On a settled editor it costs essentially nothing.

## Not ported

Two upstream features do not exist here:

- **Vim mode** (per-mode cursors and the status-bar indicator) — it hangs entirely off a host-provided Vim adapter, and Thymer has no Vim mode.
- **Bracket tether** — it needs a text-document model that Thymer's plugin SDK does not expose.

Multi-cursor secondary carets are also absent: there is no API for them.

## Licence

MIT, same as the original. See [LICENSE](LICENSE) — it carries SadSnake1's copyright alongside the port's.
