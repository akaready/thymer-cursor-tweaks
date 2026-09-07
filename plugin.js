"use strict";
var plugins = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugin.js
  var plugin_exports = {};
  __export(plugin_exports, {
    Plugin: () => Plugin
  });

  // ../../shared/settings-ui/tokens.css
  var tokens_default = `/*
 * Thymer Plugin Settings UI \u2014 Design Tokens
 *
 * Canonical CSS custom properties for the plugin settings panel system.
 * Plugins consume this verbatim; component CSS reads from these vars.
 *
 * See shared/settings-ui/DESIGN.md for rationale.
 *
 * Thymer var names verified against library/css-tokens/ (ripped from shipped CSS).
 * Fallbacks use color-mix(currentColor) so panels work when a token is absent.
 *
 * SCOPE IS DOUBLED ON PURPOSE (.tps-panel.tps-panel, specificity 0,2,0).
 * Every plugin bundles its own copy of this file and injects it into the same
 * document, all declaring the same global .tps-panel class. At equal specificity
 * the last stylesheet injected wins for EVERY panel in the app, so one plugin
 * running an outdated bundle silently redefines these tokens for all the others.
 * That shipped: pre-1f753f6 builds set --tps-accent from --accent-color, a var
 * Thymer never defines, which collapsed the accent to currentColor (white text)
 * across every installed plugin's panel. Doubling the class lets a current copy
 * outrank any stale plain-.tps-panel copy regardless of injection order.
 * Do not "simplify" this back to a single class.
 */

.tps-panel.tps-panel {
  /* \u2500\u2500 Color: text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-text:           var(--text-default,   currentColor);
  --tps-text-muted:     var(--text-muted,     color-mix(in srgb, currentColor 62%, transparent));
  --tps-text-faint:     var(--text-subtle,    color-mix(in srgb, currentColor 48%, transparent));
  --tps-text-whisper:   var(--text-disabled,  color-mix(in srgb, currentColor 34%, transparent));

  /* \u2500\u2500 Color: surfaces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-bg-input:       var(--input-bg-color,
                        color-mix(in srgb, currentColor 6%, transparent));
  --tps-bg-hover:       var(--hover-subtle,
                        var(--sidebar-bg-hover,
                        color-mix(in srgb, currentColor 8%, transparent)));
  --tps-bg-active:      var(--active-bg-color,
                        color-mix(in srgb, currentColor 12%, transparent));

  /* \u2500\u2500 Color: borders / dividers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-divider:        var(--divider-color,
                        var(--thin-divider-color,
                        color-mix(in srgb, currentColor 14%, transparent)));
  --tps-border:         var(--input-border-color,
                        var(--divider-color,
                        color-mix(in srgb, currentColor 22%, transparent)));
  --tps-border-strong:  var(--titlebar-border-color,
                        var(--selection-border,
                        color-mix(in srgb, currentColor 32%, transparent)));

  /* \u2500\u2500 Color: accent (Thymer uses --logo-color) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Fallback is a real color, never currentColor: an accent that degrades into
     the text color fails invisibly. Deliberately the brand mark, not the theme's
     --color-primary-500 \u2014 that one is a muted slate on themes like
     basalt-bedrock, which would make checked rows harder to read, not easier. */
  --tps-accent:         var(--logo-color, #04d1ab);
  --tps-accent-soft:    color-mix(in srgb, var(--tps-accent) 15%, transparent);
  --tps-accent-strong:  color-mix(in srgb, var(--tps-accent) 80%, var(--tps-text));

  /* \u2500\u2500 Color: semantic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-danger:         var(--enum-red-fg, #ef4444);
  --tps-danger-soft:    color-mix(in srgb, var(--tps-danger) 15%, transparent);
  --tps-warning:        var(--text-warning,
                        var(--enum-yellow-fg, #f59e0b));
  --tps-success:        var(--enum-green-fg, #10b981);
  --tps-success-soft:   color-mix(in srgb, var(--tps-success) 12%, transparent);

  --tps-on-accent:      var(--text-on-accent, light-dark(#111111, #fafafa));

  /* Panel chrome */
  --tps-panel-bg:       var(--panel-bg-color, transparent);
  --tps-swatch-inset:   color-mix(in srgb, var(--tps-text) 8%, transparent);

  /* \u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Font is INHERITED from Thymer's panel chrome (see components.css). */

  --tps-fs-title:       18px;
  --tps-fs-lede:        13px;
  --tps-fs-section:     11px;
  --tps-fs-hint:        12px;
  --tps-fs-label:       13px;
  --tps-fs-desc:        12px;
  --tps-fs-body:        13px;
  --tps-fs-value:       12px;
  --tps-fs-button:      12px;
  --tps-fs-list-header: 10px;

  --tps-lh-tight:       1;
  --tps-lh-snug:        1.2;
  --tps-lh-base:        1.4;
  --tps-lh-loose:       1.5;

  --tps-fw-regular:     400;
  --tps-fw-medium:      500;
  --tps-fw-semibold:    600;
  --tps-fw-bold:        700;

  --tps-ls-section:     0.06em;
  --tps-ls-list:        0.08em;
  --tps-ls-title:       0;

  /* \u2500\u2500 Spacing (8px scale) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-space-1:        4px;
  --tps-space-2:        8px;
  --tps-space-3:        12px;
  --tps-space-4:        16px;
  --tps-space-5:        24px;
  --tps-space-6:        32px;
  --tps-space-7:        48px;

  /* \u2500\u2500 Radii \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-radius-sm:      4px;
  --tps-radius-md:      6px;
  --tps-radius-lg:      8px;
  --tps-radius-pill:    999px;
  --tps-radius-circle:  50%;

  /* \u2500\u2500 Motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-ease-out:       cubic-bezier(0.2, 0.6, 0.2, 1);
  --tps-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
  --tps-dur-fast:       80ms;
  --tps-dur-base:       160ms;

  --tps-shadow-thumb:   0 1px 3px color-mix(in srgb, var(--tps-text) 28%, transparent);

  /* \u2500\u2500 Component dimensions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-control-h-sm:   28px;
  --tps-control-h-md:   32px;
  --tps-input-w:        64px;
  --tps-num-step-w:     28px;
  --tps-swatch-size:    22px;
  --tps-thumb-size:     16px;
  --tps-track-h:        6px;

  --tps-slider-track:   color-mix(in srgb, var(--tps-text) 22%, transparent);
  --tps-slider-thumb-border: color-mix(in srgb, var(--tps-text) 28%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  .tps-panel.tps-panel {
    --tps-dur-fast:     1ms;
    --tps-dur-base:     1ms;
  }
}
`;

  // ../../shared/settings-ui/components.css
  var components_default = `/*
 * Thymer Plugin Panel \u2014 Component Primitives
 *
 * All primitives scope under .tps-panel. Plugin-specific styles live elsewhere.
 * Reads tokens from tokens.css.
 */

/* \u2500\u2500 Panel root \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Inherit Thymer's font + sizing \u2014 DO NOT override. plugin-collection-icons
   demonstrates the right approach: simply \`font-family: inherit\`. Forcing a
   custom var fights both Thymer's body font AND the .ti icon font. */
.tps-panel {
  font-family: inherit;
  font-size: var(--tps-fs-body);
  line-height: var(--tps-lh-base);
  color: var(--tps-text);
  padding: 0 var(--tps-space-5) var(--tps-space-7);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.tps-panel *,
.tps-panel *::before,
.tps-panel *::after {
  box-sizing: border-box;
}

/* Mono opt-ins are explicit per-element, never via a panel-wide override. */
.tps-panel .tps-num-input,
.tps-panel .tps-slider-value,
.tps-panel .tps-mono,
.tps-panel .tps-mono * {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
}

/* \u2500\u2500 Title block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-title {
  font-size: var(--tps-fs-title);
  line-height: var(--tps-lh-snug);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-title);
  color: var(--tps-text);
  margin: 0 0 var(--tps-space-1);
}

.tps-lede {
  font-size: var(--tps-fs-lede);
  line-height: var(--tps-lh-loose);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

/* \u2500\u2500 Canonical plugin header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-plugin-header {
  position: relative;
  margin: var(--tps-space-5) 0 var(--tps-space-5);
  padding: 18px var(--tps-space-4);
  overflow: hidden;
  background:
    linear-gradient(to right,
      #f26548  8%, #f26548 28%,
      #fbac56 28%, #fbac56 48%,
      #fff460 48%, #fff460 68%,
      #f067a6 68%, #f067a6 88%,
      #03bdf2 88%
    ) top left / 100% 1px no-repeat,
    linear-gradient(to right,
      #f26548  0%, #f26548 12%,
      #fbac56 12%, #fbac56 32%,
      #fff460 32%, #fff460 52%,
      #f067a6 52%, #f067a6 72%,
      #03bdf2 72%, #03bdf2 92%
    ) bottom left / 100% 1px no-repeat,
    var(--tps-panel-bg, var(--panel-bg-color, var(--plg-ci-theme-bg, transparent)));
  border-left: 1px solid #f26548;
  border-right: 1px solid #03bdf2;
}

.tps-plugin-header-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-2, 8px);
  margin: 0 0 var(--tps-space-3, 12px);
  background: var(--tps-bg-hover);
  border-radius: var(--tps-radius-md, 6px);
}

.tps-plugin-header-logo-icon {
  flex: 0 0 auto;
  font-size: 34px;
  line-height: 1;
  color: var(--tps-text, currentColor);
}

.tps-plugin-header-title {
  font-size: 22px;
  line-height: var(--tps-lh-snug, 1.2);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: 0;
  color: var(--tps-text, var(--text-default, currentColor));
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-panel .tps-plugin-header-version {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  font-size: 11px;
  line-height: inherit;
  font-weight: var(--tps-fw-medium, 500);
  letter-spacing: 0;
  color: var(--tps-text-faint) !important;
  white-space: nowrap;
}

.tps-plugin-header-lede {
  font-size: 14px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-wrap {
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.28;
  font: inherit;
  font-size: var(--tps-fs-section, 11px);
  font-weight: var(--tps-fw-semibold, 600);
  line-height: var(--tps-lh-tight, 1);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-toggle:hover {
  opacity: 0.72;
}

.tps-plugin-header-helper-toggle:focus-visible {
  outline: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
  outline-offset: 2px;
}

.tps-plugin-header-helper-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  font-size: 13px;
  line-height: 1;
  color: inherit;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle {
  opacity: 0.72;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle:hover {
  opacity: 1;
}

.tps-plugin-header-helper-body {
  display: none;
  margin: 8px 0 0;
  padding-left: 18px;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body {
  display: block;
  cursor: pointer;
}

.tps-plugin-header-helper-line {
  margin: 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: inherit;
  opacity: 0.72;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body:hover .tps-plugin-header-helper-line {
  opacity: 1;
}

/* Scoped .tps-panel on purpose: every plugin injects its own copy of this
   file, and older copies baseline-align this row (plus translateY icon
   shims). Higher specificity here makes the newest layout win the cascade
   war regardless of plugin load order. */
.tps-panel .tps-plugin-header-attr {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  width: 100%;
  font-size: 11.5px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: var(--tps-space-3, 12px) 0 0;
  padding-top: var(--tps-space-3, 12px);
  border-top: 0;
}

.tps-plugin-header-attr::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(40%, 50%, 55%);
  height: 1px;
  background: var(--tps-bg-hover);
}

.tps-plugin-header-link-group + .tps-plugin-header-link-group {
  margin-left: var(--tps-space-3, 12px);
  padding-left: var(--tps-space-3, 12px);
  border-left: 1px solid var(--tps-bg-hover);
}

.tps-panel .tps-plugin-header-icon,
.tps-panel .tps-plugin-header-attr .ti {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  color: var(--tps-text-muted);
  margin-right: var(--tps-space-1, 4px);
}

.tps-plugin-header-iconify {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.tps-plugin-header-iconify-github {
  --tps-iconify-github: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--tps-iconify-github);
  mask-image: var(--tps-iconify-github);
}

.tps-plugin-header-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              text-decoration-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              filter var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-link--blue,
.tps-plugin-header-link--blue:hover {
  color: #03bdf2;
  text-decoration-color: #03bdf2;
}

.tps-plugin-header-link--pink,
.tps-plugin-header-link--pink:hover {
  color: #f067a6;
  text-decoration-color: #f067a6;
}

.tps-plugin-header-link--muted,
.tps-plugin-header-link--muted:hover {
  color: var(--tps-text-faint) !important;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
}

.tps-plugin-header-link:hover {
  text-decoration: none;
  text-decoration-color: transparent;
  filter: brightness(1.2);
}

/* \u2500\u2500 Header controls: scope pill + bug report + kill switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Settings-scope cluster. Resting: one dim "All devices" pill. Diverged:
   pill lights amber (full-perimeter border + tint \u2014 never a single-edge
   accent) and the \u2191 push / \u21BA discard icon buttons appear beside it. Amber
   rides Thymer's orange enum tokens so it tracks the theme. */
.tps-scope {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.tps-scope-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 22px;
  padding: 0 8px;
  border: 1px solid var(--tps-border, rgba(127, 127, 127, 0.16));
  border-radius: 999px;
  font-size: 10.5px;
  line-height: 1;
  white-space: nowrap;
  color: var(--tps-text-muted);
  background: transparent;
  user-select: none;
}

.tps-scope-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--tps-text-muted);
  opacity: 0.55;
}

/* "This device" is a normal, saved state (per-device settings), NOT a warning \u2014
   so it wears the calm brand accent, not an alarming amber. Full-perimeter
   border, never a single-edge accent. */
.tps-scope-pill[data-diverged="true"] {
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 45%, transparent);
  background: var(--tps-accent-soft);
}

.tps-scope-pill[data-diverged="true"] .tps-scope-dot {
  background: var(--tps-accent);
  opacity: 1;
}

.tps-scope-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid var(--tps-border, rgba(127, 127, 127, 0.16));
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

/* Inline-SVG icons: a viewBox-centered vector in a block box has no font
   metrics \u2014 no baseline, no ascent/descent ink drift. The 14px vector in the
   22px button gives an exact 4px inset on every side. */
.tps-panel .tps-scope-svg {
  display: flex;
  width: 14px;
  height: 14px;
  flex: 0 0 auto;
}

.tps-panel .tps-scope-svg svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Optical correction for the (still webfont) bug glyph: near-zero descent
   rides the ink ~1px high of any line-box centering. */
.tps-panel .tps-plugin-header-bug .ti::before {
  display: inline-block;
  transform: translateY(1px);
}

.tps-scope-btn:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-scope-btn:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-scope-btn--push:hover {
  color: var(--enum-green-fg, #3fa653);
  border-color: var(--enum-green-border, rgba(63, 166, 83, 0.45));
  background: var(--enum-green-bg, rgba(63, 166, 83, 0.12));
}

/* Armed state must beat the generic :hover recolor (same specificity, order-
   dependent) \u2014 scope it up so the icon reddens with the box, hovered or not. */
.tps-panel .tps-scope-btn--discard[data-armed="true"],
.tps-panel .tps-scope-btn--discard[data-armed="true"]:hover {
  color: var(--enum-red-fg, #d64545);
  border-color: var(--enum-red-border, rgba(214, 69, 69, 0.5));
  background: var(--enum-red-bg, rgba(214, 69, 69, 0.12));
}

.tps-scope-btn[disabled] {
  opacity: 0.5;
  cursor: default;
}

/* \u2500\u2500 Header controls: bug report + kill switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Last flex item of the attr row; margin-left:auto pins the group to the
   right edge, align-self:center opts out of the row's baseline alignment. */
.tps-plugin-header-controls {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-2, 8px);
  margin-left: auto;
  padding-left: var(--tps-space-3, 12px);
}

/* In-row placement (right of the version link). */
.tps-panel .tps-plugin-header-attr > .tps-plugin-header-bug {
  margin-left: var(--tps-space-2, 8px);
}

.tps-plugin-header-bug {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

/* Undo the attr row's generic .ti treatment (translateY + margin) inside the button. */
.tps-panel .tps-plugin-header-bug .ti {
  width: 14px;
  height: 14px;
  font-size: 14px;
  transform: none;
  margin: 0;
}

.tps-plugin-header-bug:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-plugin-header-bug:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  width: 30px;
  height: 16px;
  padding: 0;
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-pill, 999px);
  background: var(--tps-bg-input);
  cursor: pointer;
  transition: background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch-knob {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 12px;
  height: 12px;
  border-radius: var(--tps-radius-circle, 50%);
  background: var(--tps-text-muted);
  transition: transform var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch[aria-checked="true"] {
  background: var(--tps-accent);
  border-color: var(--tps-accent);
}

.tps-switch[aria-checked="true"] .tps-switch-knob {
  transform: translateX(14px);
  background: var(--tps-on-accent, #fff);
}

.tps-switch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch[data-busy],
.tps-switch:disabled {
  opacity: 0.55;
  pointer-events: none;
}

/* Off-state "safe mode": dim the body, keep it interactive \u2014 edits stage in the
   plugin's local drafts and apply on re-enable. Keyed off the pill's aria state
   so the optimistic flip dims instantly and heal re-renders stay correct with
   no JS. The header (pill, bug button, off-note) stays full opacity \u2014 exclude
   any direct child containing it (collection-icons wraps the header in a row
   element, so exclude by content, not class). */
.tps-panel:has(.tps-plugin-header .tps-switch[aria-checked="false"]) > :not(:has(.tps-plugin-header)) {
  opacity: 0.65;
  transition: opacity var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

/* Rendered whenever the header has a kill switch; shown only while it's off. */
.tps-plugin-header-off-note {
  display: none;
  margin: var(--tps-space-2, 8px) 0 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-plugin-header:has(.tps-switch[aria-checked="false"]) .tps-plugin-header-off-note {
  display: block;
}

/* \u2500\u2500 Feedback dialog (panel-scoped modal) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* The overlay positions against the .tps-panel root (the scroll container). */
.tps-panel {
  position: relative;
}

.tps-feedback-overlay {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-4);
  background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 55%, transparent);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}

@supports not ((backdrop-filter: blur(6px)) or (-webkit-backdrop-filter: blur(6px))) {
  .tps-feedback-overlay {
    background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 90%, transparent);
  }
}

/* Flex column with a growing description field: the card stretches to the
   available panel height (capped) and the textarea absorbs the difference,
   so the card itself never needs a scrollbar. */
.tps-feedback-card {
  display: flex;
  flex-direction: column;
  width: min(440px, 100%);
  height: min(760px, 100%);
  overflow: auto;
  background: var(--panel-bg-color, light-dark(#ffffff, #17171b));
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-lg);
  padding: var(--tps-space-4);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
}

/* Rows keep their natural height \u2014 when content doesn't fit (e.g. the system
   report drawer opens in a short panel) the CARD scrolls; rows must never be
   squeezed into overlapping each other. Only the description field flexes. */
.tps-feedback-card > * {
  flex: 0 0 auto;
}

.tps-feedback-card > .tps-feedback-field--grow {
  flex: 1 1 auto;
}

.tps-feedback-field--grow {
  display: flex;
  flex-direction: column;
}

.tps-feedback-field--grow .tps-feedback-textarea {
  flex: 1 1 auto;
  min-height: 72px;
}

.tps-feedback-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 var(--tps-space-2);
}

.tps-feedback-title {
  margin: 0;
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  color: var(--tps-text);
}

.tps-feedback-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  font-size: 14px;
}

.tps-feedback-close:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-feedback-close:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-feedback-hint {
  margin: 0 0 var(--tps-space-3);
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-feedback-field {
  display: block;
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-label {
  display: block;
  margin: 0 0 var(--tps-space-1);
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text);
}

.tps-feedback-input,
.tps-feedback-textarea {
  width: 100%;
  padding: var(--tps-space-1, 4px) var(--tps-space-2, 8px);
  font-family: inherit;
  font-size: var(--tps-fs-body, 13px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-sm, 4px);
}

.tps-feedback-textarea {
  resize: vertical;
  min-height: 72px;
}

.tps-feedback-input:focus,
.tps-feedback-textarea:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--tps-accent) 60%, transparent);
}

.tps-feedback-input[aria-invalid="true"],
.tps-feedback-textarea[aria-invalid="true"] {
  border-color: var(--tps-danger);
}

.tps-feedback-details {
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-summary {
  font-size: var(--tps-fs-hint, 12px);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-feedback-summary:hover {
  color: var(--tps-text);
}

.tps-feedback-report {
  margin: var(--tps-space-2) 0 0;
  padding: var(--tps-space-2);
  max-height: 140px;
  overflow: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
  font-size: 11px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--tps-text-muted);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm, 4px);
}

/* Themed thin scrollbars \u2014 the card (short panels) and the report pre both scroll. */
.tps-feedback-card,
.tps-feedback-report {
  scrollbar-width: thin;
  scrollbar-color: var(--tps-border, rgba(127, 127, 127, 0.25)) transparent;
}

.tps-feedback-card::-webkit-scrollbar,
.tps-feedback-report::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.tps-feedback-card::-webkit-scrollbar-track,
.tps-feedback-report::-webkit-scrollbar-track {
  background: transparent;
}

.tps-feedback-card::-webkit-scrollbar-thumb,
.tps-feedback-report::-webkit-scrollbar-thumb {
  background: var(--tps-border, rgba(127, 127, 127, 0.25));
  border-radius: 999px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.tps-feedback-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--tps-space-2);
}

/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-section {
  padding: 0;
}

.tps-section + .tps-section {
  border-top: 1px solid var(--tps-divider);
  margin-top: var(--tps-space-4);
  padding-top: var(--tps-space-4);
}

.tps-section-label {
  display: block;
  font-size: var(--tps-fs-section);
  line-height: var(--tps-lh-tight);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-2);
}

.tps-section-hint {
  font-size: var(--tps-fs-hint);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

.tps-section-body {
  display: flex;
  flex-direction: column;
  gap: var(--tps-space-3);
  margin-top: var(--tps-space-2);
}

.tps-section-body:first-child {
  margin-top: 0;
}

/* When the body is full of list rows (mode rows), drop the gap and the top
   margin entirely so the first row's hover background sits flush under the
   section label and adjacent rows tile with no dead space between them. */
.tps-section-body:has(> .tps-list-row),
.tps-section-body:has(> .tps-opt) {
  margin-top: 0;
  gap: 0;
}

/* Collapsible variant: header is a button, body is hidden when closed */

.tps-section--collapsible > .tps-section-header {
  display: flex;
  align-items: center;
  gap: var(--tps-space-2);
  width: 100%;
  min-height: 34px;
  padding: 0;
  margin: 0 0 var(--tps-space-2);
  background: transparent;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.tps-section--collapsible > .tps-section-header:hover .tps-section-label {
  color: var(--tps-text);
}

.tps-section--collapsible > .tps-section-header .tps-section-label {
  margin: 0;
}

.tps-section-chev {
  display: inline-block;
  width: 10px;
  font-size: 10px;
  line-height: 1;
  color: var(--tps-text-faint);
  transition: transform var(--tps-dur-base) var(--tps-ease-out);
}

.tps-section--collapsible[data-open="true"] .tps-section-chev {
  transform: rotate(90deg);
}

.tps-section-summary {
  margin-left: auto;
  min-width: 0;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  font-weight: var(--tps-fw-regular);
  letter-spacing: 0;
  text-transform: none;
}

/* Reserve header height when expanded; summary text only shows collapsed */
.tps-section--collapsible[data-open="true"] .tps-section-summary {
  visibility: hidden;
}

.tps-section--collapsible[data-open="false"] > .tps-section-body {
  display: none;
}

/* \u2500\u2500 Option row (checkbox / radio + label + desc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-opt {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: var(--tps-space-3);
  row-gap: 0;
  align-items: start;
  padding: 6px 10px;
  margin: 0 -10px;
  border-radius: var(--tps-radius-md);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

/* Stack option rows tight so the hover background of one meets the next
   without a visible gap above. Outer section gap is handled by the section
   itself, not by spacing between opts. */
.tps-section-body > .tps-opt + .tps-opt {
  margin-top: 0;
}
.tps-section-body:has(> .tps-opt) {
  gap: 0;
}

.tps-opt:hover {
  background: var(--tps-bg-hover);
}

.tps-opt > input[type="checkbox"],
.tps-opt > input[type="radio"] {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--tps-accent);
  cursor: pointer;
}

.tps-opt > .tps-opt-label {
  grid-column: 2;
  grid-row: 1;
  font-size: var(--tps-fs-label);
  line-height: var(--tps-lh-base);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text);
  cursor: pointer;
  transition: color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-opt > .tps-opt-desc {
  grid-column: 2;
  grid-row: 2;
  margin-top: 1px;
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-section-body > .tps-opt-note {
  margin: var(--tps-space-2) -10px 0;
  padding: 0 10px 0 calc(10px + 18px + var(--tps-space-3));
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
}

.tps-opt > input:checked ~ .tps-opt-label {
  color: var(--tps-accent);
}

/* Checkbox option + nested number row (e.g. tuned value under a toggle) */
.tps-section-body:has(> .tps-opt-group) {
  margin-top: 0;
  gap: 0;
}

.tps-opt-group {
  display: flex;
  flex-direction: column;
}

.tps-opt-group + .tps-opt-group {
  margin-top: 0;
}

.tps-opt-group .tps-opt-group__value,
.tps-opt-group > .tps-num {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  padding-right: 10px;
  max-width: 100%;
  box-sizing: border-box;
}

.tps-opt-group .tps-num-grid {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  grid-template-columns: minmax(0, 1fr);
}

/* \u2500\u2500 Numeric stepper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-num {
  display: flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-num-label {
  flex: 0 0 auto;
  min-width: 0;
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  margin-right: var(--tps-space-2);
}

.tps-num-step,
.tps-num-input,
.tps-num-reset {
  font-family: inherit;
  font-size: var(--tps-fs-button);
  height: var(--tps-control-h-sm);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  background: transparent;
  color: var(--tps-text);
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-num-step {
  width: var(--tps-num-step-w);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tps-num-step:hover {
  border-color: var(--tps-border);
  background: var(--tps-bg-hover);
}

.tps-num-step:active {
  background: var(--tps-bg-active);
}

.tps-num-input {
  width: var(--tps-input-w);
  padding: 0 var(--tps-space-2);
  background: var(--tps-bg-input);
  text-align: center;
  font-variant-numeric: tabular-nums;
  -moz-appearance: textfield;
}

.tps-num-input::-webkit-outer-spin-button,
.tps-num-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tps-num-input:focus {
  outline: none;
  border-color: var(--tps-accent);
}

.tps-num-unit {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  margin: 0 var(--tps-space-2);
}

.tps-num-reset {
  font-size: 11px;
  color: var(--tps-text-muted);
  padding: 0 var(--tps-space-2);
  cursor: pointer;
}

.tps-num-reset:hover {
  color: var(--tps-text);
  border-color: var(--tps-border);
}

.tps-num-reset[hidden] {
  display: none !important;
}

/* Stacked layout: label / control row in a 200px / 1fr grid */

.tps-num-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  column-gap: var(--tps-space-3);
  row-gap: var(--tps-space-2);
}

.tps-num-grid > .tps-num-label {
  margin: 0;
  text-align: left;
}

.tps-num-grid > .tps-num {
  justify-self: start;
}

/* \u2500\u2500 Slider row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Shared range styling for sliderRow and any other range input in a panel.
   Exclude hue pickers that paint their own gradient track. */
.tps-panel input[type="range"]:not(.plg-collection-colors__hue) {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue):active::-webkit-slider-thumb {
  cursor: grabbing;
}

.tps-slider {
  display: grid;
  grid-template-columns: 90px 1fr 56px auto;
  align-items: center;
  gap: var(--tps-space-3);
}

.tps-slider-label {
  font-size: var(--tps-fs-section);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tps-slider-input {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-slider-input::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-slider-input::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-input:active::-webkit-slider-thumb {
  cursor: grabbing;
}

/* Hue picker keeps its gradient track; only style the thumb. */
.tps-panel input[type="range"].plg-collection-colors__hue {
  width: 100%;
  height: 10px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-value {
  font-family: var(--tps-font-mono);
  font-size: var(--tps-fs-value);
  color: var(--tps-text);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Swatch + grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--tps-swatch-size));
  gap: var(--tps-space-2) 6px;
}

.tps-swatch {
  width: var(--tps-swatch-size);
  height: var(--tps-swatch-size);
  border-radius: var(--tps-radius-circle);
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset);
  transition: transform var(--tps-dur-fast) var(--tps-ease-out),
              box-shadow var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-swatch:hover {
  transform: scale(1.1);
}

.tps-swatch[aria-pressed="true"] {
  box-shadow: 0 0 0 2px var(--tps-accent);
}

/* \u2500\u2500 List rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-list {
  display: flex;
  flex-direction: column;
}

.tps-list-header {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  font-size: var(--tps-fs-list-header);
  font-weight: var(--tps-fw-bold);
  letter-spacing: var(--tps-ls-list);
  text-transform: uppercase;
  color: var(--tps-text-faint);
}

.tps-list-row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-list-row:last-child {
  border-bottom: 0;
}

.tps-list-row:hover {
  background: var(--tps-bg-hover);
}

.tps-list-name {
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u2500\u2500 Tabs / segmented control \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-tabs {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
  padding: 0;
}

.tps-tab {
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-2);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-tab:hover {
  background: var(--tps-bg-hover);
  color: var(--tps-text);
}

.tps-tab[aria-pressed="true"],
.tps-tab[aria-selected="true"] {
  background: var(--tps-accent-soft);
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
}

/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--tps-space-1);
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  border-radius: var(--tps-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-button--md { height: var(--tps-control-h-md); padding: 0 var(--tps-space-4); }

.tps-button--primary {
  background: var(--tps-accent);
  color: var(--tps-on-accent);
}

.tps-button--primary:hover {
  filter: brightness(1.08);
}

.tps-button--ghost {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text);
}

.tps-button--ghost:hover {
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-button--danger {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text-muted);
}

.tps-button--danger:hover {
  background: var(--tps-danger-soft);
  border-color: color-mix(in srgb, var(--tps-danger) 40%, transparent);
  color: var(--tps-danger);
}

/* \u2500\u2500 Focus rings (custom controls only \u2014 native inputs use accent-color) \u2500 */

.tps-tab:focus-visible,
.tps-button:focus-visible,
.tps-num-step:focus-visible,
.tps-num-reset:focus-visible,
.tps-swatch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Inset card variant (rare \u2014 for palette-picker body, etc.) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-card {
  padding: var(--tps-space-3);
  border-radius: var(--tps-radius-lg);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
}
`;

  // ../../shared/settings-ui/color-field.css
  var color_field_default = `/*
 * colorField \u2014 shared color picker (Theme | Tailwind | Custom).
 * Scoped under .tps-panel .tps-color-field; styled through --tps-* tokens.
 * Every selectable swatch is the same .tps-cf-dot across all three tabs.
 */

.tps-panel .tps-color-field { display: block; }

/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-tabs {
  display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 4px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px);
  padding: 4px; margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tab {
  cursor: pointer; border: 0; background: transparent;
  border-radius: var(--tps-radius-sm, 6px); padding: 8px 10px; font: inherit;
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  color: var(--tps-text-muted, rgba(127,127,127,0.75));
  transition: background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tab:hover { color: var(--tps-text, inherit); }
.tps-panel .tps-cf-tab.is-active {
  background: var(--tps-panel-bg, var(--bg-default, #fff));
  color: var(--tps-text, inherit); box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}

/* \u2500\u2500 Panes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-pane { display: none; }
.tps-panel .tps-cf-pane.is-active { display: block; }

/* \u2500\u2500 Featured theme picks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-featured {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tile {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; cursor: pointer;
  background: var(--tps-bg-hover, rgba(127,127,127,0.04));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 10px 12px; color: var(--tps-text, inherit);
  transition: border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tile:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-tile.is-sel {
  border-color: var(--tps-accent, currentColor);
  background: var(--tps-accent-soft, rgba(127,127,127,0.08));
}
.tps-panel .tps-cf-tile-dot {
  width: 22px; height: 22px; flex: 0 0 auto; border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
}
.tps-panel .tps-cf-tile-label {
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* \u2500\u2500 Groups + the universal swatch dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-group { margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-group-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: var(--tps-space-2, 8px); }
.tps-panel .tps-cf-group-label {
  font-size: var(--tps-fs-section, 11px); letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--tps-text-faint, var(--tps-text-muted, rgba(127,127,127,0.6))); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-group-hint { font-size: var(--tps-fs-section, 11px); color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Swatches: square dots that fill the row width (22 across in the Tailwind
 *    hue row); every swatch elsewhere matches that width. \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-dots {
  display: grid; grid-template-columns: repeat(22, minmax(0, 1fr)); gap: 5px;
  /* explicit resets so a stale accumulated .tps-cf-dots rule (old edge-to-edge
   * build injected an inset-ring outline) can't linger after a plugin reload. */
  border: 0; border-radius: 0; overflow: visible; box-shadow: none; background: none; padding: 0;
}
.tps-panel .tps-cf-dot {
  aspect-ratio: 1 / 1; min-width: 0; width: 100%; height: auto; border: 0; padding: 0; margin: 0;
  cursor: pointer; position: relative;
  border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
  transition: transform var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-dot:hover { transform: scale(1.12); z-index: 3; }
.tps-panel .tps-cf-dot:focus-visible,
.tps-panel .tps-cf-dot.is-sel,
.tps-panel .tps-cf-dot.is-active {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18)),
              0 0 0 2px var(--tps-panel-bg, #fff), 0 0 0 4px var(--tps-accent, currentColor);
}

/* \u2500\u2500 Lightness "tints": full-width ramp, shade number inside (do not touch) \u2500 */
.tps-panel .tps-cf-ramp {
  display: grid; grid-template-columns: repeat(11, minmax(0, 1fr));
  border-radius: var(--tps-radius-md, 8px); overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border, rgba(127,127,127,0.14));
}
.tps-panel .tps-cf-ramp-cell {
  border: 0; padding: 0; cursor: pointer; height: 30px; position: relative;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: var(--tps-fw-semibold, 600); font-variant-numeric: tabular-nums; letter-spacing: -0.02em;
  transition: box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-ramp-cell:hover { z-index: 3; box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--tps-panel-bg, #fff) 60%, transparent); }
.tps-panel .tps-cf-ramp-cell:focus-visible,
.tps-panel .tps-cf-ramp-cell.is-sel {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff), inset 0 0 0 4px var(--tps-accent, currentColor);
}
/* Faint secondary ring on the inverted ("invert lightness") mirror shade \u2014
   present alongside the prominent ring on the actually-selected shade. */
.tps-panel .tps-cf-ramp-cell.is-sel-mirror {
  z-index: 3;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff),
              inset 0 0 0 3px color-mix(in srgb, var(--tps-accent, currentColor) 42%, transparent);
}

/* \u2500\u2500 Invert-lightness toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-invert {
  display: flex; align-items: center; gap: 8px; margin-top: var(--tps-space-3, 12px);
  cursor: pointer; font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-invert-cb { margin: 0; cursor: pointer; accent-color: var(--tps-accent, currentColor); }
.tps-panel .tps-cf-invert-hint { color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-weight: var(--tps-fw-regular, 400); }
/* Dimmed + non-interactive until a real, non-500 shade is picked (500 mirrors
   to itself, so inverting it is a no-op). */
.tps-panel .tps-cf-invert.is-disabled { opacity: 0.42; cursor: default; }
.tps-panel .tps-cf-invert.is-disabled .tps-cf-invert-cb { cursor: default; }

/* \u2500\u2500 Custom palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-custom-row { min-height: 30px; margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-custom-empty {
  grid-column: 1 / -1; display: flex; align-items: center; padding: 0 10px; min-height: 30px;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-regular, 400); letter-spacing: 0;
  color: var(--tps-text-faint, rgba(127,127,127,0.55));
}
.tps-panel .tps-cf-custom-dot { cursor: grab; }
.tps-panel .tps-cf-custom-dot.is-dragging { opacity: 0.4; cursor: grabbing; }

.tps-panel .tps-cf-addrow { display: flex; align-items: center; gap: 8px; }
.tps-panel .tps-cf-remove {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text-muted, rgba(127,127,127,0.75));
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-remove[hidden] { display: none; }
.tps-panel .tps-cf-remove:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-add {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text, inherit);
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-add:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-custom-count {
  margin-left: auto; font-size: var(--tps-fs-section, 11px);
  color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Hex input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-hexbox {
  display: inline-flex; align-items: center; gap: 8px; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 8px 0 10px;
}
.tps-panel .tps-cf-hex-dot {
  width: 15px; height: 15px; border-radius: var(--tps-radius-sm, 5px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.22));
}
.tps-panel .tps-cf-hex-input {
  border: 0; background: transparent; outline: none;
  font-family: var(--tps-font-mono, ui-monospace, monospace);
  font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); width: 84px;
  font-variant-numeric: tabular-nums;
}
.tps-panel .tps-cf-hex-input::placeholder { color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Universal: No color \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-divider {
  height: 1px; margin: var(--tps-space-3, 12px) 0; background: var(--tps-divider, rgba(127,127,127,0.12));
}
.tps-panel .tps-cf-universal { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.tps-panel .tps-cf-none {
  display: inline-flex; align-items: center; gap: 7px; cursor: pointer; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 12px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text-muted, rgba(127,127,127,0.7));
}
.tps-panel .tps-cf-none:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none.is-sel { border-color: var(--tps-accent, currentColor); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none-sw {
  width: 15px; height: 15px; border-radius: 50%; position: relative; overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border-strong, rgba(127,127,127,0.3));
}
.tps-panel .tps-cf-none-sw::after {
  content: ""; position: absolute; left: 50%; top: -3px; width: 1.5px; height: 21px;
  background: var(--tps-danger, #e2555f); transform: rotate(45deg);
}

/* \u2500\u2500 Instant tooltip (drawn by the component, not native title delay) \u2500\u2500\u2500 */
.tps-panel .tps-cf-tip {
  position: fixed; z-index: 2147483000; transform: translate(-50%, calc(-100% - 8px));
  padding: 3px 8px; border-radius: var(--tps-radius-sm, 5px);
  background: var(--tps-text, #1a1a1a); color: var(--tps-panel-bg, #fff);
  font-size: var(--tps-fs-section, 11px); font-weight: var(--tps-fw-medium, 500);
  line-height: 1.3; white-space: nowrap; pointer-events: none; opacity: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}
.tps-panel .tps-cf-tip.is-visible { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .tps-panel .tps-cf-dot,
  .tps-panel .tps-cf-tab,
  .tps-panel .tps-cf-tile,
  .tps-panel .tps-cf-remove { transition: none; }
}
`;

  // ../../shared/settings-ui/feedback.js
  var MAX_URL_LENGTH = 7600;
  function el(tag, props, ...children) {
    const node = document.createElement(tag);
    const dom = (
      /** @type {any} */
      node
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class") node.className = v;
        else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
        else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            node.setAttribute(k, v);
          }
        } else node.setAttribute(k, v === true ? "" : String(v));
      }
    }
    for (const c of children.flat(Infinity)) {
      if (c == null || c === false) continue;
      node.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }
  __name(el, "el");
  function versionFromConf(conf) {
    if (!conf || typeof conf !== "object") return "";
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = conf.custom;
    if (custom && typeof custom === "object") {
      const v = (
        /** @type {Record<string, unknown>} */
        custom.pluginVersion
      );
      if (typeof v === "string") return v;
    }
    return "";
  }
  __name(versionFromConf, "versionFromConf");
  async function collectSystemReport({ pluginName = "", pluginVersion = "", disabled = false, data } = {}) {
    const ua = navigator.userAgent || "";
    const lines = [];
    lines.push(`Plugin: ${pluginName} v${pluginVersion}${disabled ? " (kill switch: OFF)" : ""}`);
    lines.push(`App: ${/electron/i.test(ua) ? "Thymer desktop app (Electron)" : "Thymer web"}${location && location.host ? ` \xB7 ${location.host}` : ""}`);
    lines.push(`UA: ${ua}`);
    lines.push(`Platform: ${navigator.platform || "?"} \xB7 lang ${navigator.language || "?"} \xB7 tz ${Intl.DateTimeFormat().resolvedOptions().timeZone || "?"}`);
    const dpr = Math.round((window.devicePixelRatio || 1) * 100) / 100;
    lines.push(`Screen (css px): ${screen.width}x${screen.height} @${dpr}x (\u2248${Math.round(screen.width * dpr)}x${Math.round(screen.height * dpr)} device px) \xB7 viewport ${window.innerWidth}x${window.innerHeight}`);
    try {
      const dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const themeClasses = Array.from(document.body.classList).filter((c) => /theme/i.test(c)).join(" ");
      lines.push(`Appearance: ${dark ? "dark" : "light"}${reducedMotion ? " \xB7 reduced-motion" : ""}${themeClasses ? ` \xB7 body: ${themeClasses}` : ""}`);
    } catch {
    }
    try {
      const bits = [];
      if (navigator.hardwareConcurrency) bits.push(`${navigator.hardwareConcurrency} cores`);
      const devMem = (
        /** @type {any} */
        navigator.deviceMemory
      );
      if (devMem) bits.push(devMem >= 8 ? `RAM \u22658GB (API cap)` : `~${devMem}GB RAM`);
      const heap = (
        /** @type {any} */
        performance.memory
      );
      if (heap && heap.usedJSHeapSize) bits.push(`JS heap ${Math.round(heap.usedJSHeapSize / 1048576)}MB of ${Math.round(heap.jsHeapSizeLimit / 1048576)}MB limit`);
      bits.push(navigator.onLine === false ? "OFFLINE" : "online");
      if (typeof performance.now === "function") bits.push(`session up ${Math.round(performance.now() / 6e4)}m`);
      lines.push(`System: ${bits.join(" \xB7 ")}`);
    } catch {
    }
    try {
      if (navigator.storage && typeof navigator.storage.estimate === "function") {
        const est = await navigator.storage.estimate();
        if (est && est.usage != null) {
          lines.push(`Storage: ${Math.round((est.usage || 0) / 1048576)}MB used${est.quota ? ` of ${Math.round(est.quota / 1048576)}MB quota` : ""}`);
        }
      }
    } catch {
    }
    try {
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const plugins = await data.getAllGlobalPlugins();
        const listed = plugins.slice(0, 25).map((p) => {
          let name = "";
          let ver = "";
          try {
            name = p.getName?.() || "";
          } catch {
          }
          try {
            ver = versionFromConf(p.getConfiguration?.());
          } catch {
          }
          return ver ? `${name} v${ver}` : name;
        }).filter(Boolean);
        if (listed.length) {
          lines.push(`Global plugins, all installed (${plugins.length}): ${listed.join(", ")}${plugins.length > 25 ? ", \u2026" : ""}`);
        }
      }
      if (data && typeof /** @type {any} */
      data.getAllCollections === "function") {
        const collections = await /** @type {any} */
        data.getAllCollections();
        if (Array.isArray(collections)) lines.push(`Collection-level plugins: ${collections.length} (names withheld)`);
      }
    } catch {
    }
    return lines.join("\n");
  }
  __name(collectSystemReport, "collectSystemReport");
  function buildIssueUrl({ repository, description, discord, email, report }) {
    const repo = repository.replace(/\/+$/, "");
    const firstLine = description.split("\n")[0].trim();
    const title = `[bug] ${firstLine.length > 60 ? `${firstLine.slice(0, 57)}...` : firstLine}`;
    const bodyFor = /* @__PURE__ */ __name((desc2) => {
      const parts = [`**Describe the bug**

${desc2}`];
      if (discord || email) {
        const contact = [];
        if (discord) contact.push(`- Discord: ${discord}`);
        if (email) contact.push(`- Email: ${email}`);
        parts.push(`**Contact**

${contact.join("\n")}`);
      }
      parts.push(`**System report**

\`\`\`
${report}
\`\`\``);
      parts.push("_Screenshots: paste or drag images directly into this text box._");
      return parts.join("\n\n");
    }, "bodyFor");
    const urlFor = /* @__PURE__ */ __name((desc2) => `${repo}/issues/new?${new URLSearchParams({ title, body: bodyFor(desc2) })}`, "urlFor");
    let desc = description;
    let url = urlFor(desc);
    while (url.length > MAX_URL_LENGTH && desc.length > 200) {
      desc = `${desc.slice(0, Math.max(200, desc.length - 500)).trimEnd()}

[description truncated \u2014 URL length limit]`;
      url = urlFor(desc);
    }
    return url;
  }
  __name(buildIssueUrl, "buildIssueUrl");
  function openFeedbackDialog({ host, opener, pluginName = "", pluginVersion = "", repository = "", disabled = false, data } = {}) {
    const panelHost = host || /** @type {HTMLElement | null} */
    (opener ? opener.closest(".tps-panel") : null);
    if (!panelHost || !repository) return;
    if (panelHost.querySelector(".tps-feedback-overlay")) return;
    const reportPromise = collectSystemReport({ pluginName, pluginVersion, disabled, data });
    const discordInput = el("input", { class: "tps-feedback-input", type: "text", placeholder: "e.g. akaready", autocomplete: "off", spellcheck: "false" });
    const emailInput = el("input", { class: "tps-feedback-input", type: "email", placeholder: "e.g. you@example.com", autocomplete: "off", spellcheck: "false" });
    const descInput = el("textarea", { class: "tps-feedback-textarea", rows: "5", placeholder: "What happened? What did you expect instead?" });
    const reportPre = el("pre", { class: "tps-feedback-report" }, "Collecting\u2026");
    reportPromise.then((text) => {
      reportPre.textContent = text;
    }).catch(() => {
      reportPre.textContent = "Report unavailable.";
    });
    const fieldRow = /* @__PURE__ */ __name((label, field, extraClass) => el(
      "label",
      { class: `tps-feedback-field${extraClass ? ` ${extraClass}` : ""}` },
      el("span", { class: "tps-feedback-label" }, label),
      field
    ), "fieldRow");
    const prevOverflow = panelHost.style.overflow;
    const close = /* @__PURE__ */ __name(() => {
      overlay.remove();
      panelHost.style.overflow = prevOverflow;
      try {
        opener?.focus();
      } catch {
      }
    }, "close");
    const submit = /* @__PURE__ */ __name(async () => {
      const description = descInput.value.trim();
      if (!description) {
        descInput.setAttribute("aria-invalid", "true");
        descInput.focus();
        return;
      }
      let report = "";
      try {
        report = await reportPromise;
      } catch {
      }
      const url = buildIssueUrl({
        repository,
        description,
        discord: discordInput.value.trim(),
        email: emailInput.value.trim(),
        report
      });
      window.open(url, "_blank", "noopener");
      close();
    }, "submit");
    const card = el(
      "div",
      { class: "tps-feedback-card", role: "dialog", "aria-modal": "true", "aria-label": `Report a bug in ${pluginName}` },
      el(
        "div",
        { class: "tps-feedback-head" },
        el("h2", { class: "tps-feedback-title" }, "Report a bug"),
        el(
          "button",
          { type: "button", class: "tps-feedback-close", "aria-label": "Close", onClick: close },
          el("i", { class: "ti ti-x", "aria-hidden": "true" })
        )
      ),
      // Fixed short copy — no variable repo name, so each line stays on one line.
      el(
        "p",
        { class: "tps-feedback-hint" },
        "Opens a prefilled GitHub issue on the repo.",
        el("br"),
        "Please add relevant screenshots to the GitHub issue."
      ),
      fieldRow("Discord username (optional)", discordInput),
      fieldRow("Email (optional)", emailInput),
      fieldRow("What happened?", descInput, "tps-feedback-field--grow"),
      el(
        "details",
        { class: "tps-feedback-details" },
        el("summary", { class: "tps-feedback-summary" }, "System report (included with the issue)"),
        reportPre
      ),
      el(
        "div",
        { class: "tps-feedback-actions" },
        el("button", { type: "button", class: "tps-button tps-button--ghost", onClick: close }, "Cancel"),
        el("button", { type: "button", class: "tps-button tps-button--primary", onClick: submit }, "Open GitHub issue")
      )
    );
    const overlay = el("div", { class: "tps-feedback-overlay" }, card);
    overlay.addEventListener("mousedown", (e) => {
      if (e.target === overlay) close();
    });
    overlay.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    });
    descInput.addEventListener("input", () => descInput.removeAttribute("aria-invalid"));
    panelHost.style.overflow = "hidden";
    overlay.style.top = `${panelHost.scrollTop}px`;
    overlay.style.height = `${panelHost.clientHeight}px`;
    panelHost.appendChild(overlay);
    descInput.focus();
  }
  __name(openFeedbackDialog, "openFeedbackDialog");

  // ../../shared/settings-ui/helpers.js
  var PANEL_CSS = tokens_default + "\n" + components_default + "\n" + color_field_default;
  function h(tag, props, ...children) {
    const el2 = document.createElement(tag);
    const dom = (
      /** @type {any} */
      el2
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class" || k === "className") {
          el2.className = v;
        } else if (k === "style" && typeof v === "object") {
          Object.assign(el2.style, v);
        } else if (k === "dataset" && typeof v === "object") {
          for (const dk in v) el2.dataset[dk] = v[dk];
        } else if (k.startsWith("on") && typeof v === "function") {
          el2.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            el2.setAttribute(k, v);
          }
        } else {
          el2.setAttribute(k, v === true ? "" : String(v));
        }
      }
    }
    appendChildren(el2, children);
    return el2;
  }
  __name(h, "h");
  function appendChildren(parent, children) {
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) {
        appendChildren(parent, c);
        continue;
      }
      parent.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
  }
  __name(appendChildren, "appendChildren");
  function panel({ pluginClass } = {}, children = []) {
    const cls = ["tps-panel", pluginClass].filter(Boolean).join(" ");
    const root = h("div", { class: cls }, ...children);
    restoreSectionState(root, pluginClass || "");
    return root;
  }
  __name(panel, "panel");
  function pluginHeader({
    title: heading,
    lede: ledeText,
    helper,
    helperOpen,
    helperDefaultOpen = false,
    onHelperToggle,
    icon = "",
    version = "1.0",
    author = "@akaready",
    homepage = "https://akaready.com",
    repository = "https://github.com/akaready",
    coffee = "https://buymeacoffee.com/akaready",
    killSwitch = null,
    feedback = null,
    scope = null
  }) {
    const iconClass = icon ? icon.startsWith("ti-") ? icon : `ti-${icon}` : "";
    const helperLines = normalizeHelperLines(helper);
    const fb = feedback ? {
      pluginName: (feedback === true ? "" : feedback.pluginName) || heading,
      pluginVersion: (feedback === true ? "" : feedback.pluginVersion) || version,
      repository: (feedback === true ? "" : feedback.repository) || repository,
      disabled: (feedback === true ? void 0 : feedback.disabled) ?? (killSwitch ? !killSwitch.on : false),
      data: feedback === true ? void 0 : feedback.data
    } : null;
    const children = [
      iconClass ? h(
        "div",
        { class: "tps-plugin-header-logo", "aria-hidden": "true" },
        h("i", { class: `ti ${iconClass} tps-plugin-header-logo-icon`, "aria-hidden": "true" })
      ) : null,
      h("h1", { class: "tps-plugin-header-title" }, heading),
      ledeText ? h("p", { class: "tps-plugin-header-lede" }, ledeText) : null,
      helperLines.length ? renderPluginHeaderHelper({
        lines: helperLines,
        defaultOpen: helperDefaultOpen,
        open: helperOpen,
        onToggle: onHelperToggle
      }) : null,
      h(
        "p",
        { class: "tps-plugin-header-attr" },
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-link tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--blue",
            href: homepage,
            target: "_blank",
            rel: "noopener noreferrer"
          }, author)
        ),
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-coffee tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--pink",
            href: coffee,
            target: "_blank",
            rel: "noopener noreferrer"
          }, "buy me a coffee")
        ),
        version ? h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("span", { class: "tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github", "aria-hidden": "true" }),
          h("a", { class: "tps-plugin-header-link tps-plugin-header-link--muted tps-plugin-header-version", href: repository, target: "_blank", rel: "noopener noreferrer" }, `v${version}`)
        ) : null,
        // Bug report sits with the attribution links (right of the version);
        // the far-right corner is reserved for state toggles (scope pill,
        // kill switch).
        fb ? renderFeedbackButton(fb) : null,
        killSwitch || scope ? h(
          "span",
          { class: "tps-plugin-header-controls" },
          scope ? scopeCluster(scope) : null,
          killSwitch ? renderKillSwitch(killSwitch) : null
        ) : null
      ),
      // Always rendered with a kill switch; CSS shows it only while the pill is
      // off, so it appears instantly on the optimistic flip with no re-render.
      killSwitch ? h(
        "p",
        { class: "tps-plugin-header-off-note" },
        "Plugin is off \u2014 settings stay editable and your changes apply when you switch it back on."
      ) : null
    ];
    return h("div", { class: "tps-plugin-header" }, ...children);
  }
  __name(pluginHeader, "pluginHeader");
  var SCOPE_SVG_NS = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
  function scopeSvgIcon(paths) {
    const wrap = h("span", { class: "tps-scope-svg", "aria-hidden": "true" });
    wrap.innerHTML = `${SCOPE_SVG_NS}${paths}</svg>`;
    return wrap;
  }
  __name(scopeSvgIcon, "scopeSvgIcon");
  function scopeCluster(scope) {
    const pill = h(
      "span",
      {
        class: "tps-scope-pill tooltip",
        "data-diverged": String(!!scope.diverged),
        "data-tooltip": scope.diverged ? "Custom settings for this device, saved automatically. Your other devices are unaffected." : "Using your shared defaults \u2014 the same on all your devices. Edits here apply to this device only.",
        "data-tooltip-dir": "top"
      },
      h("span", { class: "tps-scope-dot", "aria-hidden": "true" }),
      scope.diverged ? "This device" : "All devices"
    );
    if (!scope.diverged) {
      return h("span", { class: "tps-scope" }, pill);
    }
    const push = h("button", {
      type: "button",
      class: "tps-scope-btn tps-scope-btn--push tooltip",
      "data-tooltip": "Copy these settings to all my devices",
      "data-tooltip-dir": "top",
      "aria-label": "Copy these settings to all my devices",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLButtonElement} */
          e.currentTarget
        );
        if (btn.disabled) return;
        btn.disabled = true;
        try {
          scope.onPush();
        } catch {
          btn.disabled = false;
        }
      }, "onClick")
    }, scopeSvgIcon('<path d="M12 5v14"/><path d="M18 11l-6-6"/><path d="M6 11l6-6"/>'));
    let disarmTimer = 0;
    const discard = h("button", {
      type: "button",
      class: "tps-scope-btn tps-scope-btn--discard tooltip",
      "data-tooltip": "Reset this device to your shared defaults",
      "data-tooltip-dir": "top",
      "aria-label": "Reset this device to your shared defaults",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLButtonElement} */
          e.currentTarget
        );
        if (btn.getAttribute("data-armed") !== "true") {
          btn.setAttribute("data-armed", "true");
          btn.setAttribute("data-tooltip", "Tap again to reset this device");
          clearTimeout(disarmTimer);
          disarmTimer = window.setTimeout(() => {
            btn.removeAttribute("data-armed");
            btn.setAttribute("data-tooltip", "Reset this device to your shared defaults");
          }, 3e3);
          return;
        }
        clearTimeout(disarmTimer);
        try {
          scope.onDiscard();
        } catch {
        }
      }, "onClick")
    }, scopeSvgIcon('<path d="M9 14L5 10l4-4"/><path d="M5 10h11a4 4 0 1 1 0 8h-1"/>'));
    return h("span", { class: "tps-scope" }, pill, push, discard);
  }
  __name(scopeCluster, "scopeCluster");
  function renderFeedbackButton(fb) {
    return h("button", {
      type: "button",
      class: "tps-plugin-header-bug",
      title: "Report a bug",
      "aria-label": "Report a bug",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLElement} */
          e.currentTarget
        );
        openFeedbackDialog({
          host: (
            /** @type {HTMLElement | null} */
            btn.closest(".tps-panel")
          ),
          opener: btn,
          ...fb
        });
      }, "onClick")
    }, h("i", { class: "ti ti-bug", "aria-hidden": "true" }));
  }
  __name(renderFeedbackButton, "renderFeedbackButton");
  function renderKillSwitch(killSwitch) {
    const sw = h("button", {
      type: "button",
      class: "tps-switch",
      role: "switch",
      "aria-checked": String(!!killSwitch.on),
      "aria-label": killSwitch.label || "Plugin enabled",
      title: killSwitch.on ? "Plugin enabled \u2014 click to disable all of its effects" : "Plugin disabled \u2014 click to re-enable"
    }, h("span", { class: "tps-switch-knob" }));
    const unlock = /* @__PURE__ */ __name(() => {
      sw.removeAttribute("data-busy");
      sw.disabled = false;
    }, "unlock");
    sw.addEventListener("click", () => {
      if (sw.disabled) return;
      const nextOn = sw.getAttribute("aria-checked") !== "true";
      sw.setAttribute("aria-checked", String(nextOn));
      sw.setAttribute("data-busy", "");
      sw.disabled = true;
      setTimeout(unlock, 700);
      try {
        killSwitch.onToggle(nextOn);
      } catch {
        unlock();
        sw.setAttribute("aria-checked", String(!nextOn));
      }
    });
    return sw;
  }
  __name(renderKillSwitch, "renderKillSwitch");
  function normalizeHelperLines(helper) {
    if (!helper) return [];
    if (typeof helper === "string") {
      const text = helper.trim();
      return text ? [text] : [];
    }
    if (Array.isArray(helper)) {
      return helper.map((line) => String(line).trim()).filter(Boolean);
    }
    return [];
  }
  __name(normalizeHelperLines, "normalizeHelperLines");
  function renderPluginHeaderHelper({ lines, defaultOpen = false, open, onToggle }) {
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const wrap = h("div", {
      class: "tps-plugin-header-helper-wrap",
      dataset: { open: String(initialOpen) }
    });
    const icon = h("i", { class: "ti ti-info-circle tps-plugin-header-helper-icon", "aria-hidden": "true" });
    const toggle = h("button", {
      type: "button",
      class: "tps-plugin-header-helper-toggle",
      "aria-expanded": String(initialOpen)
    }, icon, h("span", { class: "tps-plugin-header-helper-toggle-label" }, "Instructions"));
    const body = h(
      "div",
      { class: "tps-plugin-header-helper-body" },
      h("p", { class: "tps-plugin-header-helper-line" }, lines.join(" "))
    );
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      wrap.dataset.open = String(nextOpen);
      toggle.setAttribute("aria-expanded", String(nextOpen));
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    toggle.addEventListener("click", () => {
      setOpen(wrap.dataset.open !== "true");
    });
    body.addEventListener("click", () => {
      if (wrap.dataset.open === "true") setOpen(false);
    });
    wrap.appendChild(toggle);
    wrap.appendChild(body);
    return wrap;
  }
  __name(renderPluginHeaderHelper, "renderPluginHeaderHelper");
  var SECTION_STATE = (() => {
    const g = (
      /** @type {Record<string, any>} */
      /** @type {unknown} */
      globalThis
    );
    if (!g.__tpsSectionState) g.__tpsSectionState = /* @__PURE__ */ new Map();
    return (
      /** @type {Map<string, boolean>} */
      g.__tpsSectionState
    );
  })();
  function sectionStateKey(el2, key) {
    const scope = (
      /** @type {HTMLElement} */
      el2.dataset.sectionScope || ""
    );
    return scope + "::" + key;
  }
  __name(sectionStateKey, "sectionStateKey");
  function restoreSectionState(root, scope) {
    const nodes = root.querySelectorAll(".tps-section--collapsible[data-section-key]");
    for (const node of nodes) {
      const el2 = (
        /** @type {HTMLElement} */
        node
      );
      el2.dataset.sectionScope = scope;
      const key = el2.dataset.sectionKey || "";
      const remembered = SECTION_STATE.get(sectionStateKey(el2, key));
      if (remembered === void 0) continue;
      const apply = (
        /** @type {any} */
        el2._tpsSetOpen
      );
      if (typeof apply === "function") apply(remembered, true);
    }
  }
  __name(restoreSectionState, "restoreSectionState");
  function section({ label, hint, collapsible, defaultOpen = true, open, onToggle, persistKey, summary, body = [] }) {
    const bodyChildren = Array.isArray(body) ? body : [body];
    const bodyEl = h("div", { class: "tps-section-body" }, ...bodyChildren);
    if (!collapsible) {
      return h(
        "section",
        { class: "tps-section" },
        h("div", { class: "tps-section-label" }, label),
        hint ? h("p", { class: "tps-section-hint" }, hint) : null,
        bodyEl
      );
    }
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const sectionEl = h("section", {
      class: "tps-section tps-section--collapsible",
      // `open` is the controlled form — a caller driving it owns the state, so
      // that case opts out of the remembered-state machinery entirely.
      dataset: open == null ? { open: String(initialOpen), sectionKey: persistKey || label } : { open: String(initialOpen) }
    });
    const chev = h("span", { class: "tps-section-chev", "aria-hidden": "true" }, "\u25B8");
    const labelEl = h("span", { class: "tps-section-label" }, label);
    const summaryEl = h("span", { class: "tps-section-summary" });
    const paintSummary = /* @__PURE__ */ __name((isOpen) => {
      summaryEl.replaceChildren();
      if (isOpen || summary == null) return;
      const content = typeof summary === "function" ? summary() : summary;
      if (content == null || content === "") return;
      if (typeof content === "string") summaryEl.textContent = content;
      else summaryEl.appendChild(content);
    }, "paintSummary");
    const setOpen = /* @__PURE__ */ __name((nextOpen, restoring) => {
      sectionEl.dataset.open = String(nextOpen);
      header.setAttribute("aria-expanded", String(nextOpen));
      paintSummary(nextOpen);
      if (!restoring && sectionEl.dataset.sectionKey != null) {
        SECTION_STATE.set(sectionStateKey(sectionEl, sectionEl.dataset.sectionKey), nextOpen);
      }
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    sectionEl._tpsSetOpen = setOpen;
    const header = h("button", {
      type: "button",
      class: "tps-section-header",
      "aria-expanded": String(initialOpen),
      onClick: /* @__PURE__ */ __name(() => setOpen(sectionEl.dataset.open !== "true"), "onClick")
    }, chev, labelEl, summaryEl);
    paintSummary(initialOpen);
    sectionEl.appendChild(header);
    if (hint) sectionEl.appendChild(h("p", { class: "tps-section-hint" }, hint));
    sectionEl.appendChild(bodyEl);
    return sectionEl;
  }
  __name(section, "section");
  function optionRow({ type = "checkbox", name, value, label, desc, checked, onChange }) {
    const input = h("input", {
      type,
      name,
      value,
      checked: !!checked,
      onChange: onChange ? (e) => onChange(e) : null
    });
    const labelEl = h("span", { class: "tps-opt-label" }, label);
    const descEl = desc ? h("span", { class: "tps-opt-desc" }, desc) : null;
    return h("label", { class: "tps-opt" }, input, labelEl, descEl);
  }
  __name(optionRow, "optionRow");
  function optionNote(text) {
    return h("p", { class: "tps-opt-note" }, text);
  }
  __name(optionNote, "optionNote");
  function numberRow({ label, value, min, max, step = 1, unit, defaultValue, onChange, onReset }) {
    const clamp = /* @__PURE__ */ __name((next) => {
      let v = Number.isFinite(next) ? next : Number(value) || 0;
      if (min != null) v = Math.max(min, v);
      if (max != null) v = Math.min(max, v);
      return v;
    }, "clamp");
    const input = h("input", {
      type: "number",
      class: "tps-num-input",
      value,
      min,
      max,
      step,
      onInput: /* @__PURE__ */ __name((e) => {
        const target = (
          /** @type {HTMLInputElement} */
          e.target
        );
        onChange && onChange(Number(target.value), e);
      }, "onInput"),
      onKeyDown: /* @__PURE__ */ __name((e) => {
        if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
        e.preventDefault();
        const base = Number.isFinite(Number(input.value)) ? Number(input.value) : Number(value) || 0;
        const direction = e.key === "ArrowUp" ? 1 : -1;
        input.value = String(clamp(base + direction * step * (e.shiftKey ? 10 : 1)));
        onChange && onChange(Number(input.value), e);
      }, "onKeyDown")
    });
    const minus = h("button", {
      type: "button",
      class: "tps-num-step",
      "aria-label": "Decrease",
      onClick: /* @__PURE__ */ __name(() => {
        const v = Number(input.value) - step;
        input.value = String(clamp(v));
        onChange && onChange(Number(input.value));
      }, "onClick")
    }, "\u2212");
    const plus = h("button", {
      type: "button",
      class: "tps-num-step",
      "aria-label": "Increase",
      onClick: /* @__PURE__ */ __name(() => {
        const v = Number(input.value) + step;
        input.value = String(clamp(v));
        onChange && onChange(Number(input.value));
      }, "onClick")
    }, "+");
    const unitEl = unit ? h("span", { class: "tps-num-unit" }, unit) : null;
    const reset = defaultValue != null ? h("button", {
      type: "button",
      class: "tps-num-reset",
      hidden: value === defaultValue,
      onClick: /* @__PURE__ */ __name(() => {
        input.value = String(defaultValue);
        onChange && onChange(defaultValue);
        onReset && onReset();
      }, "onClick")
    }, "Reset") : null;
    const numEl = h("div", { class: "tps-num" }, minus, input, plus, unitEl, reset);
    if (label) {
      return h(
        "div",
        { class: "tps-num-grid" },
        h("div", { class: "tps-num-label" }, label),
        numEl
      );
    }
    return numEl;
  }
  __name(numberRow, "numberRow");
  function sliderRow({ label, value, min = 0, max = 100, step = 1, format, defaultValue, onChange, onReset }) {
    const fmt = format || ((v) => String(v));
    const input = h("input", {
      type: "range",
      class: "tps-slider-input",
      value,
      min,
      max,
      step,
      onInput: /* @__PURE__ */ __name((e) => {
        const target = (
          /** @type {HTMLInputElement} */
          e.target
        );
        const v = Number(target.value);
        readout.textContent = fmt(v);
        onChange && onChange(v, e);
      }, "onInput")
    });
    const readout = h("span", { class: "tps-slider-value" }, fmt(value));
    const reset = defaultValue != null ? h("button", {
      type: "button",
      class: "tps-num-reset",
      onClick: /* @__PURE__ */ __name(() => {
        input.value = String(defaultValue);
        readout.textContent = fmt(defaultValue);
        onChange && onChange(defaultValue);
        onReset && onReset();
      }, "onClick")
    }, "Reset") : null;
    return h(
      "div",
      { class: "tps-slider" },
      h("span", { class: "tps-slider-label" }, label),
      input,
      readout,
      reset
    );
  }
  __name(sliderRow, "sliderRow");
  function tabs({ options, value, onChange, multiSelect = false }) {
    const isActive = /* @__PURE__ */ __name((v) => multiSelect ? Array.isArray(value) && value.includes(v) : value === v, "isActive");
    return h(
      "div",
      { class: "tps-tabs", role: "tablist" },
      ...options.map((opt) => h("button", {
        type: "button",
        class: "tps-tab",
        role: "tab",
        "aria-pressed": String(isActive(opt.value)),
        onClick: /* @__PURE__ */ __name(() => {
          if (!onChange) return;
          if (multiSelect) {
            const cur = Array.isArray(value) ? value.slice() : [];
            const i = cur.indexOf(opt.value);
            if (i >= 0) cur.splice(i, 1);
            else cur.push(opt.value);
            onChange(cur);
          } else {
            onChange(opt.value);
          }
        }, "onClick")
      }, opt.label))
    );
  }
  __name(tabs, "tabs");
  function button({ label, variant = "ghost", size = "sm", onClick, disabled }) {
    const cls = ["tps-button", `tps-button--${variant}`];
    if (size === "md") cls.push("tps-button--md");
    return h("button", {
      type: "button",
      class: cls.join(" "),
      disabled: !!disabled,
      onClick
    }, label);
  }
  __name(button, "button");

  // ../../shared/telemetry/ping.js
  var TELEMETRY_ENDPOINT = "https://thymer-plugins.goatcounter.com/count";
  var TELEMETRY_SCRIPT_SRC = "https://gc.zgo.at/count.js";
  var _telemetryScriptPromise = null;
  function _loadGoatCounter() {
    if (_telemetryScriptPromise) return _telemetryScriptPromise;
    _telemetryScriptPromise = new Promise((resolve) => {
      window.goatcounter = window.goatcounter || {};
      window.goatcounter.no_onload = true;
      window.goatcounter.allow_local = false;
      if (typeof window.goatcounter.count === "function") {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.async = true;
      s.src = TELEMETRY_SCRIPT_SRC;
      s.setAttribute("data-goatcounter", TELEMETRY_ENDPOINT);
      s.setAttribute("data-goatcounter-settings", '{"no_onload": true}');
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    });
    return _telemetryScriptPromise;
  }
  __name(_loadGoatCounter, "_loadGoatCounter");
  function _fireTelemetry(path) {
    _loadGoatCounter().then(() => {
      try {
        window.goatcounter?.count?.({ path, title: "", event: false });
      } catch (_) {
      }
    });
  }
  __name(_fireTelemetry, "_fireTelemetry");
  function _telemetryBlocked() {
    try {
      if (navigator.doNotTrack === "1") return true;
      if (localStorage.getItem("tps-telemetry-opt-out") === "1") return true;
    } catch (_) {
      return true;
    }
    return false;
  }
  __name(_telemetryBlocked, "_telemetryBlocked");
  function pingInstall(slug) {
    try {
      if (_telemetryBlocked()) return;
      const key = "tps-tcm-" + slug;
      if (localStorage.getItem(key) === "1") return;
      localStorage.setItem(key, "1");
      _fireTelemetry("thymer-" + slug);
    } catch (_) {
    }
  }
  __name(pingInstall, "pingInstall");
  function pingActive(slug) {
    try {
      if (_telemetryBlocked()) return;
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const key = "tps-act-" + slug;
      if (localStorage.getItem(key) === today) return;
      localStorage.setItem(key, today);
      _fireTelemetry("thymer-" + slug + "/active");
    } catch (_) {
    }
  }
  __name(pingActive, "pingActive");

  // ../../shared/plugin-version.js
  var CONFIG_WRITE_QUEUES_KEY = "__tpsPluginConfigWriteQueues";
  function configWriteIdentity(plugin) {
    let workspace = "default";
    try {
      workspace = plugin.getWorkspaceGuid?.() || "default";
    } catch {
    }
    let guid = "";
    try {
      guid = plugin.getGuid?.() || plugin.collection?.getGuid?.() || "";
    } catch {
    }
    let name = "plugin";
    try {
      name = plugin.getConfiguration?.()?.name || "plugin";
    } catch {
    }
    return `${workspace}/${guid || name}`;
  }
  __name(configWriteIdentity, "configWriteIdentity");
  function queuePluginConfigWrite(plugin, task) {
    let queues;
    try {
      const root = (
        /** @type {any} */
        globalThis
      );
      if (!(root[CONFIG_WRITE_QUEUES_KEY] instanceof Map)) root[CONFIG_WRITE_QUEUES_KEY] = /* @__PURE__ */ new Map();
      queues = root[CONFIG_WRITE_QUEUES_KEY];
    } catch {
      return Promise.resolve().then(task);
    }
    const key = configWriteIdentity(plugin);
    const prior = queues.get(key) || Promise.resolve();
    const result = prior.then(task, task);
    const tail = result.then(() => void 0, () => void 0);
    queues.set(key, tail);
    void tail.then(() => {
      if (queues.get(key) === tail) queues.delete(key);
    });
    return result;
  }
  __name(queuePluginConfigWrite, "queuePluginConfigWrite");
  function readPluginVersion(conf, fallback = "0.0.1") {
    if (!conf || typeof conf !== "object") return fallback;
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = (
      /** @type {Record<string, unknown> | undefined} */
      conf.custom
    );
    if (custom && typeof custom === "object" && typeof custom.pluginVersion === "string" && custom.pluginVersion) {
      return custom.pluginVersion;
    }
    return fallback;
  }
  __name(readPluginVersion, "readPluginVersion");
  function configWithPluginVersion(conf, customPatch, pluginVersion) {
    const base = conf && typeof conf === "object" ? conf : {};
    const custom = base.custom && typeof base.custom === "object" ? base.custom : {};
    return {
      ...base,
      version: pluginVersion,
      custom: {
        ...custom,
        ...customPatch,
        pluginVersion
      }
    };
  }
  __name(configWithPluginVersion, "configWithPluginVersion");
  async function resolveConfigApi(plugin) {
    if (!plugin) return null;
    if (typeof plugin.saveConfiguration === "function") return plugin;
    try {
      const data = plugin.data;
      const guid = typeof plugin.getGuid === "function" && plugin.getGuid() || plugin.collection && typeof plugin.collection.getGuid === "function" && plugin.collection.getGuid() || null;
      if (guid && data && typeof data.getPluginByGuid === "function") {
        const byGuid = data.getPluginByGuid(guid);
        if (byGuid && typeof byGuid.saveConfiguration === "function") return byGuid;
      }
      if (guid && data && typeof data.getAllCollections === "function") {
        const all = await data.getAllCollections();
        const found = (all || []).find((c) => c && typeof c.getGuid === "function" && c.getGuid() === guid);
        if (found && typeof found.saveConfiguration === "function") return found;
      }
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const all = await data.getAllGlobalPlugins();
        const name = plugin.getConfiguration?.()?.name;
        const found = all.find((p) => p && typeof p.getGuid === "function" && p.getGuid() === guid) || (name ? all.find((p) => p && typeof p.getName === "function" && p.getName() === name) : null);
        if (found && typeof found.saveConfiguration === "function") return found;
      }
    } catch {
    }
    return null;
  }
  __name(resolveConfigApi, "resolveConfigApi");
  async function syncPluginVersionOnLoad(plugin, pluginVersion, customPatch = {}) {
    return queuePluginConfigWrite(plugin, () => syncPluginVersionOnLoadNow(plugin, pluginVersion, customPatch));
  }
  __name(syncPluginVersionOnLoad, "syncPluginVersionOnLoad");
  async function syncPluginVersionOnLoadNow(plugin, pluginVersion, customPatch = {}) {
    const api = await resolveConfigApi(plugin);
    if (!api) return;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return;
    const custom = conf.custom && typeof conf.custom === "object" ? { .../** @type {Record<string, unknown>} */
    conf.custom, ...customPatch } : { ...customPatch };
    if (readPluginVersion(conf, "") === pluginVersion) return;
    try {
      let ws = "default";
      try {
        ws = plugin.getWorkspaceGuid?.() || "default";
      } catch {
      }
      const guardKey = `tps-version-synced/${ws}/${conf.name}`;
      if (sessionStorage.getItem(guardKey) === pluginVersion) return;
      sessionStorage.setItem(guardKey, pluginVersion);
    } catch {
    }
    try {
      await api.saveConfiguration(configWithPluginVersion(conf, custom, pluginVersion));
    } catch {
    }
  }
  __name(syncPluginVersionOnLoadNow, "syncPluginVersionOnLoadNow");
  async function healPluginIdentity(plugin, identity) {
    return queuePluginConfigWrite(plugin, () => healPluginIdentityNow(plugin, identity));
  }
  __name(healPluginIdentity, "healPluginIdentity");
  async function healPluginIdentityNow(plugin, identity) {
    if (!identity || typeof identity.name !== "string" || !identity.name.trim()) return;
    const STUB_NAMES = ["New Global Plugin", "New Collection", "My Global Plugin"];
    const api = await resolveConfigApi(plugin);
    if (!api) return;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (conf.ver === void 0 && conf.custom === void 0) return;
    const hasStubName = typeof conf.name !== "string" || !conf.name.trim() || STUB_NAMES.includes(conf.name.trim());
    const missingRepo = identity.sourceRepo && conf.__source_repo === void 0;
    if (!hasStubName && !missingRepo) return;
    try {
      let ws = "default";
      try {
        ws = plugin.getWorkspaceGuid?.() || "default";
      } catch {
      }
      const guardKey = `tps-identity-healed/${ws}/${identity.name}`;
      if (sessionStorage.getItem(guardKey) === "1") return;
      sessionStorage.setItem(guardKey, "1");
    } catch {
    }
    const next = { ...conf };
    if (hasStubName) {
      next.name = identity.name;
      if (identity.icon) next.icon = identity.icon;
      if (identity.description) next.description = identity.description;
    }
    if (missingRepo) {
      next.__source_repo = identity.sourceRepo;
      if (conf.__source_files === void 0 && identity.sourceFiles) {
        next.__source_files = { ...identity.sourceFiles };
      }
    }
    try {
      await api.saveConfiguration(next);
    } catch {
    }
  }
  __name(healPluginIdentityNow, "healPluginIdentityNow");

  // ../../shared/plugin-kill-switch.js
  var MARKER_SYNC_HORIZON_MS = 9e4;
  function isPluginDisabled(conf) {
    if (!conf || typeof conf !== "object") return false;
    const custom = conf.custom;
    return !!(custom && typeof custom === "object" && /** @type {Record<string, unknown>} */
    custom.pluginDisabled === true);
  }
  __name(isPluginDisabled, "isPluginDisabled");
  function markerKey(plugin) {
    let ws = "default";
    try {
      ws = plugin.getWorkspaceGuid?.() || "default";
    } catch {
    }
    let name = "plugin";
    try {
      name = plugin.getConfiguration?.()?.name || "plugin";
    } catch {
    }
    return `tps-kill-switch/${ws}/${name}`;
  }
  __name(markerKey, "markerKey");
  function writeKillSwitchMarker(plugin, disabled) {
    try {
      localStorage.setItem(markerKey(plugin), JSON.stringify({ disabled, ts: Date.now() }));
    } catch {
    }
  }
  __name(writeKillSwitchMarker, "writeKillSwitchMarker");
  function clearKillSwitchMarker(plugin) {
    try {
      localStorage.removeItem(markerKey(plugin));
    } catch {
    }
  }
  __name(clearKillSwitchMarker, "clearKillSwitchMarker");
  function readKillSwitch(plugin) {
    let conf = {};
    try {
      conf = plugin.getConfiguration?.() || {};
    } catch {
    }
    const confDisabled = isPluginDisabled(conf);
    try {
      const raw = localStorage.getItem(markerKey(plugin));
      if (raw) {
        const marker = JSON.parse(raw);
        if (marker && typeof marker.disabled === "boolean") {
          if (marker.disabled === confDisabled) {
            clearKillSwitchMarker(plugin);
            return confDisabled;
          }
          if (Date.now() - (Number(marker.ts) || 0) < MARKER_SYNC_HORIZON_MS) {
            return marker.disabled;
          }
          clearKillSwitchMarker(plugin);
        }
      }
    } catch {
    }
    return confDisabled;
  }
  __name(readKillSwitch, "readKillSwitch");
  async function setPluginDisabled(plugin, disabled, pluginVersion, customPatch = {}) {
    return queuePluginConfigWrite(plugin, () => setPluginDisabledNow(plugin, disabled, pluginVersion, customPatch));
  }
  __name(setPluginDisabled, "setPluginDisabled");
  async function setPluginDisabledNow(plugin, disabled, pluginVersion, customPatch) {
    const api = await resolveConfigApi(plugin);
    if (!api) return false;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return false;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return false;
    const custom = conf.custom && typeof conf.custom === "object" ? (
      /** @type {Record<string, unknown>} */
      conf.custom
    ) : {};
    const resolvedPatch = typeof customPatch === "function" ? customPatch(custom) : customPatch;
    const patch = resolvedPatch && typeof resolvedPatch === "object" ? resolvedPatch : {};
    if (!Object.keys(patch).length && readKillSwitch(plugin) === disabled && isPluginDisabled(conf) === disabled) return true;
    writeKillSwitchMarker(plugin, disabled);
    try {
      const result = await api.saveConfiguration(configWithPluginVersion(conf, { ...patch, pluginDisabled: disabled }, pluginVersion));
      if (result === false) throw new Error("Thymer rejected the config save.");
      return true;
    } catch {
      clearKillSwitchMarker(plugin);
      return false;
    }
  }
  __name(setPluginDisabledNow, "setPluginDisabledNow");

  // ../../shared/plugin-settings.js
  function createSettingsStore(plugin, {
    slug,
    key = "settings",
    version,
    normalize = /* @__PURE__ */ __name((raw) => raw && typeof raw === "object" ? raw : {}, "normalize"),
    scopeKey = null,
    readSynced = null,
    pickSynced = null
  }) {
    const readBag = readSynced || ((custom) => custom?.[key]);
    const pickSyncedSubset = pickSynced || ((s) => s);
    let current = {};
    let dirty = false;
    let editRevision = 0;
    let localUnavailable = false;
    let restoredFromMirror = false;
    let writeChain = Promise.resolve();
    let flushTimer = null;
    let settleTimer = null;
    const fnv1a = /* @__PURE__ */ __name((s) => {
      let h2 = 2166136261;
      for (let i = 0; i < s.length; i++) {
        h2 ^= s.charCodeAt(i);
        h2 = Math.imul(h2, 16777619);
      }
      return (h2 >>> 0).toString(36);
    }, "fnv1a");
    const deviceIdentityParts = /* @__PURE__ */ __name(() => {
      try {
        const n = (
          /** @type {any} */
          typeof navigator !== "undefined" ? navigator : {}
        );
        const ua = String(n.userAgent || "");
        const isApp = /electron/i.test(ua);
        const os = /android/i.test(ua) ? "android" : /iphone|ipad|ios/i.test(ua) ? "ios" : /linux/i.test(ua) ? "linux" : /mac|darwin/i.test(ua) ? "mac" : /win/i.test(ua) ? "win" : "x";
        return { n, ua, isApp, os };
      } catch {
        return { n: {}, ua: "", isApp: false, os: "x" };
      }
    }, "deviceIdentityParts");
    const identity = deviceIdentityParts();
    const legacyDeviceKey = `${identity.isApp ? "app" : "web"}-${identity.os}-${fnv1a(`${identity.ua}|${identity.n.platform || ""}|${identity.n.language || ""}`)}`;
    const stableFingerprint = `${identity.isApp ? "app" : "web"}-${identity.os}-${fnv1a(`${String(identity.ua).replace(/\d+(?:[._]\d+)*/g, "#")}|${identity.n.platform || ""}|${identity.n.language || ""}`)}`;
    const persistentDeviceKey = /* @__PURE__ */ __name(() => {
      const storageKey = "tps-settings-device-id";
      try {
        const existing = localStorage.getItem(storageKey);
        if (existing && /^device-[a-z0-9-]+$/i.test(existing)) return existing;
        let id = "";
        try {
          id = `device-${crypto.randomUUID()}`;
        } catch {
        }
        if (!id) id = `device-${fnv1a(`${Date.now()}|${Math.random()}|${stableFingerprint}`)}`;
        localStorage.setItem(storageKey, id);
        if (localStorage.getItem(storageKey) === id) return id;
      } catch {
      }
      return stableFingerprint;
    }, "persistentDeviceKey");
    const deviceKey = persistentDeviceKey();
    const asMap = /* @__PURE__ */ __name((bag) => {
      if (bag && typeof bag === "object" && bag.byDevice && typeof bag.byDevice === "object") {
        return {
          shared: bag.shared,
          byDevice: { ...bag.byDevice },
          aliases: bag.aliases && typeof bag.aliases === "object" ? { ...bag.aliases } : {}
        };
      }
      if (bag && typeof bag === "object" && Object.keys(bag).length) {
        return { shared: bag, byDevice: {}, aliases: {} };
      }
      return { shared: void 0, byDevice: {}, aliases: {} };
    }, "asMap");
    const readCustom = /* @__PURE__ */ __name(() => {
      try {
        const conf = plugin.getConfiguration?.();
        const custom = conf && conf.custom;
        return custom && typeof custom === "object" ? (
          /** @type {Record<string, unknown>} */
          custom
        ) : {};
      } catch {
        return {};
      }
    }, "readCustom");
    const resolveDeviceSlotKey = /* @__PURE__ */ __name((m) => {
      if (Object.prototype.hasOwnProperty.call(m.byDevice, deviceKey)) return deviceKey;
      const aliased = m.aliases[stableFingerprint];
      if (aliased && Object.prototype.hasOwnProperty.call(m.byDevice, aliased)) return aliased;
      if (Object.prototype.hasOwnProperty.call(m.byDevice, stableFingerprint)) return stableFingerprint;
      if (Object.prototype.hasOwnProperty.call(m.byDevice, legacyDeviceKey)) return legacyDeviceKey;
      return null;
    }, "resolveDeviceSlotKey");
    const readSyncedDevice = /* @__PURE__ */ __name((custom) => {
      const m = asMap(readBag(custom));
      const slotKey = resolveDeviceSlotKey(m);
      if (slotKey) return m.byDevice[slotKey];
      return m.shared ?? null;
    }, "readSyncedDevice");
    const prune = /* @__PURE__ */ __name((m) => {
      const out = { byDevice: m.byDevice };
      if (m.shared !== void 0) out.shared = m.shared;
      if (Object.keys(m.aliases).length) out.aliases = m.aliases;
      return out;
    }, "prune");
    const buildDevicePatch = /* @__PURE__ */ __name((custom, subset) => {
      const m = asMap(readBag(custom));
      m.byDevice[deviceKey] = subset;
      m.aliases[stableFingerprint] = deviceKey;
      return { [key]: prune(m) };
    }, "buildDevicePatch");
    const buildAllPatch = /* @__PURE__ */ __name((custom, subset) => {
      const m = asMap(readBag(custom));
      m.shared = subset;
      for (const k of Object.keys(m.byDevice)) m.byDevice[k] = subset;
      m.byDevice[deviceKey] = subset;
      m.aliases[stableFingerprint] = deviceKey;
      return { [key]: prune(m) };
    }, "buildAllPatch");
    const buildResetPatch = /* @__PURE__ */ __name((custom) => {
      const m = asMap(readBag(custom));
      const resolved = resolveDeviceSlotKey(m);
      if (resolved) delete m.byDevice[resolved];
      delete m.byDevice[deviceKey];
      delete m.byDevice[stableFingerprint];
      delete m.byDevice[legacyDeviceKey];
      delete m.aliases[stableFingerprint];
      return { [key]: prune(m) };
    }, "buildResetPatch");
    const normalizedStringify = /* @__PURE__ */ __name((raw) => JSON.stringify(normalize(raw)), "normalizedStringify");
    const workspaceGuid = /* @__PURE__ */ __name(() => {
      try {
        return String(plugin.getWorkspaceGuid?.() || "") || "default";
      } catch {
        return "default";
      }
    }, "workspaceGuid");
    const scope = /* @__PURE__ */ __name(() => {
      if (!scopeKey) return "";
      try {
        return `/${String(scopeKey() || "scope")}`;
      } catch {
        return "/scope";
      }
    }, "scope");
    const cacheKey = /* @__PURE__ */ __name(() => `${slug}/${workspaceGuid()}${scope()}/${deviceKey}/cache`, "cacheKey");
    const legacyCacheKey = /* @__PURE__ */ __name(() => `${slug}/${workspaceGuid()}${scope()}/${legacyDeviceKey}/cache`, "legacyCacheKey");
    const readCache = /* @__PURE__ */ __name(() => {
      try {
        const raw = localStorage.getItem(cacheKey()) ?? localStorage.getItem(legacyCacheKey());
        if (raw === null) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : null;
      } catch {
        return null;
      }
    }, "readCache");
    const writeCache = /* @__PURE__ */ __name((value) => {
      try {
        const keyName = cacheKey();
        localStorage.setItem(keyName, value);
        if (localStorage.getItem(keyName) !== value) throw new Error("localStorage read-back mismatch");
        localUnavailable = false;
        return true;
      } catch {
        localUnavailable = true;
        return false;
      }
    }, "writeCache");
    const clearCache = /* @__PURE__ */ __name(() => {
      try {
        localStorage.removeItem(cacheKey());
        localStorage.removeItem(legacyCacheKey());
      } catch {
      }
    }, "clearCache");
    const mirrorKey = /* @__PURE__ */ __name(() => `${slug}/${workspaceGuid()}${scope()}/mirror`, "mirrorKey");
    const readMirror = /* @__PURE__ */ __name(() => {
      try {
        const raw = localStorage.getItem(mirrorKey());
        if (raw === null) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : null;
      } catch {
        return null;
      }
    }, "readMirror");
    const writeMirror = /* @__PURE__ */ __name((bag) => {
      try {
        const m = asMap(bag);
        if (m.shared === void 0 && !Object.keys(m.byDevice).length) return;
        localStorage.setItem(mirrorKey(), JSON.stringify(prune(m)));
      } catch {
      }
    }, "writeMirror");
    const recoveryFlagKey = /* @__PURE__ */ __name(() => `tps-settings-recovered/${slug}/${workspaceGuid()}${scope()}`, "recoveryFlagKey");
    const recoveryAttempted = /* @__PURE__ */ __name(() => {
      try {
        return sessionStorage.getItem(recoveryFlagKey()) === "1";
      } catch {
        return false;
      }
    }, "recoveryAttempted");
    const markRecoveryAttempted = /* @__PURE__ */ __name(() => {
      try {
        sessionStorage.setItem(recoveryFlagKey(), "1");
      } catch {
      }
    }, "markRecoveryAttempted");
    const bagIsAbsent = /* @__PURE__ */ __name((custom) => {
      const bag = readBag(custom);
      if (!bag || typeof bag !== "object") return true;
      const m = asMap(bag);
      return m.shared === void 0 && !Object.keys(m.byDevice).length;
    }, "bagIsAbsent");
    const saveCustomNow = /* @__PURE__ */ __name(async (buildPatch) => {
      try {
        const api = await resolveConfigApi(plugin);
        if (!api || typeof api.saveConfiguration !== "function") return false;
        let conf = {};
        try {
          conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
        } catch {
          return false;
        }
        if (typeof conf.name !== "string" || !conf.name.trim()) return false;
        const custom = conf.custom && typeof conf.custom === "object" ? conf.custom : {};
        const patch = buildPatch(custom);
        const patchKeys = Object.keys(patch);
        if (!patchKeys.length) return true;
        const converged = patchKeys.every((patchKey) => patchKey === key ? bagConverged(custom[key], patch[key]) : JSON.stringify(custom[patchKey]) === JSON.stringify(patch[patchKey]));
        if (converged) {
          if (patch[key] !== void 0) writeMirror(patch[key]);
          return true;
        }
        const result = await api.saveConfiguration(configWithPluginVersion(conf, patch, version));
        if (result === false) return false;
        if (patch[key] !== void 0) writeMirror(patch[key]);
        return true;
      } catch {
        return false;
      }
    }, "saveCustomNow");
    const saveCustom = /* @__PURE__ */ __name((buildPatch) => {
      const run = /* @__PURE__ */ __name(() => queuePluginConfigWrite(plugin, () => saveCustomNow(buildPatch)), "run");
      const result = writeChain.then(run, run);
      writeChain = result.then(() => void 0, () => void 0);
      return result;
    }, "saveCustom");
    const bagConverged = /* @__PURE__ */ __name((a, b) => {
      const ma = asMap(a);
      const mb = asMap(b);
      if (normalizedStringify(ma.shared || {}) !== normalizedStringify(mb.shared || {})) return false;
      const keys = /* @__PURE__ */ new Set([...Object.keys(ma.byDevice), ...Object.keys(mb.byDevice)]);
      for (const k of keys) {
        if (normalizedStringify(ma.byDevice[k] || {}) !== normalizedStringify(mb.byDevice[k] || {})) return false;
      }
      if (JSON.stringify(Object.entries(ma.aliases).sort()) !== JSON.stringify(Object.entries(mb.aliases).sort())) return false;
      return true;
    }, "bagConverged");
    const FLUSH_DELAY_MS = 4e3;
    const cancelFlush = /* @__PURE__ */ __name(() => {
      if (flushTimer) {
        clearTimeout(flushTimer);
        flushTimer = null;
      }
    }, "cancelFlush");
    const flushDevice = /* @__PURE__ */ __name(async () => {
      cancelFlush();
      if (!dirty) return true;
      const revision = editRevision;
      const subset = pickSyncedSubset(normalize(current));
      const ok = await saveCustom((custom) => buildDevicePatch(custom, subset));
      if (ok && editRevision === revision) {
        dirty = false;
        clearCache();
      } else if (dirty) scheduleFlush();
      return ok;
    }, "flushDevice");
    const scheduleFlush = /* @__PURE__ */ __name(() => {
      cancelFlush();
      flushTimer = setTimeout(() => {
        flushTimer = null;
        void flushDevice();
      }, FLUSH_DELAY_MS);
    }, "scheduleFlush");
    const store = {
      /**
       * Read this device's settings from the synced config. A localStorage cache
       * that differs (an edit not yet flushed before a crash/reload) wins and is
       * re-flushed. Read-only w.r.t. the synced config.
       */
      load() {
        if (dirty) return { settings: current, diverged: this.isDiverged() };
        let custom = readCustom();
        if (bagIsAbsent(custom)) {
          const mirrored = readMirror();
          if (mirrored && !recoveryAttempted()) {
            markRecoveryAttempted();
            restoredFromMirror = true;
            void saveCustomNow(() => ({ [key]: prune(asMap(mirrored)) }));
            custom = { ...custom, [key]: prune(asMap(mirrored)) };
          }
        }
        const synced = normalize(readSyncedDevice(custom) || {});
        const cached = readCache();
        if (cached && normalizedStringify(cached) !== JSON.stringify(synced)) {
          current = normalize(cached);
          dirty = true;
          scheduleFlush();
        } else {
          current = synced;
          dirty = false;
          writeMirror(readBag(custom));
          if (cached) clearCache();
          const resolved = resolveDeviceSlotKey(asMap(readBag(custom)));
          if (resolved && resolved !== deviceKey) {
            dirty = true;
            editRevision += 1;
            if (writeCache(JSON.stringify(current))) scheduleFlush();
            else void flushDevice();
          }
        }
        return { settings: current, diverged: this.isDiverged() };
      },
      get() {
        return current;
      },
      /** This device's settings differ from the shared baseline (informational). */
      isDiverged() {
        const shared = asMap(readBag(readCustom())).shared;
        return normalizedStringify(shared || {}) !== JSON.stringify(normalize(current));
      },
      /** True when the immediate recovery journal could not be verified. */
      isLocalUnavailable() {
        return localUnavailable;
      },
      /**
       * True when this load found the synced settings gone and rebuilt them from
       * the durable local mirror. Worth surfacing to the user — a silent recovery
       * hides that something wiped their config, and they should know to check
       * whatever did it.
       */
      wasRestoredFromMirror() {
        return restoredFromMirror;
      },
      /**
       * Lossless migration/recovery entry point. The normalized value is journaled
       * through the store's real cache key and retried to synced config; callers
       * never need to know or recreate that private key.
       */
      recover(raw) {
        const next = normalize(raw);
        const synced = normalize(readSyncedDevice(readCustom()) || {});
        if (JSON.stringify(next) === JSON.stringify(synced)) return false;
        current = next;
        dirty = true;
        editRevision += 1;
        if (writeCache(JSON.stringify(current))) scheduleFlush();
        else void flushDevice();
        return true;
      },
      /** Force this device's pending settings into its durable synced slot. */
      flush() {
        return flushDevice();
      },
      /**
       * Apply an edit to THIS device: update memory, cache locally for instant UI,
       * and schedule a durable flush to this device's synced slot. Never touches
       * another device's slot or the shared baseline.
       */
      update(patch) {
        current = normalize({ ...current, ...patch });
        dirty = true;
        editRevision += 1;
        if (writeCache(JSON.stringify(current))) scheduleFlush();
        else void flushDevice();
        return { settings: current, diverged: this.isDiverged() };
      },
      /**
       * "Copy these settings to all my devices": write the current settings to the
       * shared baseline AND every existing device slot, in ONE saveConfiguration.
       * (This is the header pill's ↑ action.)
       */
      async pushToAll() {
        cancelFlush();
        const revision = editRevision;
        const subset = pickSyncedSubset(normalize(current));
        const ok = await saveCustom((custom) => buildAllPatch(custom, subset));
        if (ok && editRevision === revision) {
          dirty = false;
          clearCache();
        } else if (dirty) scheduleFlush();
        return ok;
      },
      /**
       * "Reset this device": drop this device's slot so it re-inherits the shared
       * baseline (or defaults). (The header pill's ↺ action.) Returns the settings
       * this device now shows.
       */
      discardLocal() {
        cancelFlush();
        const shared = asMap(readBag(readCustom())).shared;
        current = normalize(shared || {});
        dirty = true;
        editRevision += 1;
        const revision = editRevision;
        writeCache(JSON.stringify(current));
        void saveCustom((custom) => buildResetPatch(custom)).then((ok) => {
          if (ok && editRevision === revision) {
            dirty = false;
            clearCache();
          } else if (dirty) scheduleFlush();
        });
        return current;
      },
      /**
       * Persist sibling custom data and this device's pending settings in one
       * serialized save. Data-owning plugins use this instead of manually
       * snapshotting the settings bag from a potentially stale config instance.
       */
      async saveCustomPatch(extraPatch = {}) {
        cancelFlush();
        const revision = editRevision;
        const hadDirty = dirty;
        const subset = hadDirty ? pickSyncedSubset(normalize(current)) : null;
        const ok = await saveCustom((custom) => ({
          ...typeof extraPatch === "function" ? extraPatch(custom) : extraPatch,
          ...hadDirty ? buildDevicePatch(custom, subset) : {}
        }));
        if (ok && hadDirty && editRevision === revision) {
          dirty = false;
          clearCache();
        } else if (dirty) scheduleFlush();
        return ok;
      },
      /**
       * The canonical settings-aware kill switch. Pending device settings and any
       * sibling data patch land atomically with pluginDisabled, and recovery is
       * cleared only after Thymer confirms the save.
       */
      async setDisabled(disabled, extraPatch = {}) {
        cancelFlush();
        const revision = editRevision;
        const hadDirty = dirty;
        const subset = hadDirty ? pickSyncedSubset(normalize(current)) : null;
        const run = /* @__PURE__ */ __name(() => setPluginDisabled(plugin, disabled, version, (custom) => ({
          ...extraPatch,
          ...hadDirty ? buildDevicePatch(custom, subset) : {}
        })), "run");
        const okPromise = writeChain.then(run, run);
        writeChain = okPromise.then(() => void 0, () => void 0);
        const ok = await okPromise;
        if (ok && hadDirty && editRevision === revision) {
          dirty = false;
          clearCache();
        } else if (dirty) scheduleFlush();
        return ok;
      },
      /**
       * Post-push pill settle. A successful push saves the config, which reloads
       * the plugin; the fresh instance can render its scope pill from a config
       * snapshot the save hasn't reached yet, and the follow-up config event is
       * filtered as local (attachLifecycle, by design) — so nothing repaints and
       * the pill sits on "This device" even though the push landed. Re-read the
       * synced config on a short interval until it converges: when the adopted
       * settings changed, `onAdopt(settings)` fires (apply + full panel render);
       * otherwise `refreshPill()` fires (pill-only repaint). A genuine local
       * edit still wins — load() carries it through the crash cache. No-ops
       * instantly when already settled. Call from the push success callback AND
       * the post-reload panel heal; returns a cancel fn for onUnload.
       */
      settleAfterPush({ onAdopt = void 0, refreshPill = void 0, tries = 8, intervalMs = 500 } = {}) {
        if (settleTimer) {
          clearTimeout(settleTimer);
          settleTimer = null;
        }
        const tick = /* @__PURE__ */ __name((left) => {
          const before = JSON.stringify(current);
          const next = this.load().settings;
          if (JSON.stringify(next) !== before) onAdopt?.(next);
          else refreshPill?.();
          if (left <= 0 || !this.isDiverged()) return;
          settleTimer = setTimeout(() => {
            settleTimer = null;
            tick(left - 1);
          }, intervalMs);
        }, "tick");
        tick(tries);
        return () => {
          if (settleTimer) {
            clearTimeout(settleTimer);
            settleTimer = null;
          }
        };
      },
      /**
       * Live-follow: when another device does "apply to all" (or edits propagate),
       * `global-plugin.updated` (or, for CollectionPlugins, the collection event the
       * adopter also wires) fires; re-read this device's synced settings and, if
       * they changed, hand them to the plugin's central apply. Also registers the
       * boundary flush (hidden / pagehide) so a just-made edit isn't stranded in the
       * localStorage cache. Returns a detach function for onUnload.
       */
      attachLifecycle({ onRemoteChange } = {}) {
        const handlerIds = [];
        const onHide = /* @__PURE__ */ __name(() => {
          if (document.visibilityState === "hidden") void flushDevice();
        }, "onHide");
        const onPageHide = /* @__PURE__ */ __name(() => {
          void flushDevice();
        }, "onPageHide");
        try {
          document.addEventListener("visibilitychange", onHide);
          window.addEventListener("pagehide", onPageHide);
        } catch {
        }
        try {
          const id = plugin.events?.on?.("global-plugin.updated", (event) => {
            try {
              if (dirty) return;
              if (event?.source?.isLocal) return;
              const guid = plugin.getGuid?.();
              const eventGuid = event?.pluginGuid || event?.guid || event?.rootId || null;
              if (eventGuid && guid && eventGuid !== guid) return;
              const next = normalize(readSyncedDevice(readCustom()) || {});
              if (JSON.stringify(next) === JSON.stringify(current)) return;
              current = next;
              onRemoteChange?.(current);
            } catch {
            }
          });
          if (id) handlerIds.push(id);
        } catch {
        }
        return () => {
          cancelFlush();
          if (settleTimer) {
            clearTimeout(settleTimer);
            settleTimer = null;
          }
          try {
            document.removeEventListener("visibilitychange", onHide);
            window.removeEventListener("pagehide", onPageHide);
          } catch {
          }
          for (const id of handlerIds) {
            try {
              plugin.events?.off?.(id);
            } catch {
            }
          }
        };
      }
    };
    return store;
  }
  __name(createSettingsStore, "createSettingsStore");

  // ../../shared/settings-ui/tailwind-palette.js
  var TW_SHADES = Object.freeze([50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]);
  var TW_MID_INDEX = 5;
  function mirrorShadeIdx(idx) {
    const n = TW_SHADES.length;
    const i = Math.max(0, Math.min(n - 1, Number(idx) || 0));
    return n - 1 - i;
  }
  __name(mirrorShadeIdx, "mirrorShadeIdx");
  var TAILWIND = Object.freeze({
    slate: ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b", "#0f172a", "#020617"],
    gray: ["#f9fafb", "#f3f4f6", "#e5e7eb", "#d1d5db", "#9ca3af", "#6b7280", "#4b5563", "#374151", "#1f2937", "#111827", "#030712"],
    zinc: ["#fafafa", "#f4f4f5", "#e4e4e7", "#d4d4d8", "#a1a1aa", "#71717a", "#52525b", "#3f3f46", "#27272a", "#18181b", "#09090b"],
    neutral: ["#fafafa", "#f5f5f5", "#e5e5e5", "#d4d4d4", "#a3a3a3", "#737373", "#525252", "#404040", "#262626", "#171717", "#0a0a0a"],
    stone: ["#fafaf9", "#f5f5f4", "#e7e5e4", "#d6d3d1", "#a8a29e", "#78716c", "#57534e", "#44403c", "#292524", "#1c1917", "#0c0a09"],
    red: ["#fef2f2", "#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d", "#450a0a"],
    orange: ["#fff7ed", "#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12", "#431407"],
    amber: ["#fffbeb", "#fef3c7", "#fde68a", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f", "#451a03"],
    yellow: ["#fefce8", "#fef9c3", "#fef08a", "#fde047", "#facc15", "#eab308", "#ca8a04", "#a16207", "#854d0e", "#713f12", "#422006"],
    lime: ["#f7fee7", "#ecfccb", "#d9f99d", "#bef264", "#a3e635", "#84cc16", "#65a30d", "#4d7c0f", "#3f6212", "#365314", "#1a2e05"],
    green: ["#f0fdf4", "#dcfce7", "#bbf7d0", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#15803d", "#166534", "#14532d", "#052e16"],
    emerald: ["#ecfdf5", "#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981", "#059669", "#047857", "#065f46", "#064e3b", "#022c22"],
    teal: ["#f0fdfa", "#ccfbf1", "#99f6e4", "#5eead4", "#2dd4bf", "#14b8a6", "#0d9488", "#0f766e", "#115e59", "#134e4a", "#042f2e"],
    cyan: ["#ecfeff", "#cffafe", "#a5f3fc", "#67e8f9", "#22d3ee", "#06b6d4", "#0891b2", "#0e7490", "#155e75", "#164e63", "#083344"],
    sky: ["#f0f9ff", "#e0f2fe", "#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985", "#0c4a6e", "#082f49"],
    blue: ["#eff6ff", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a", "#172554"],
    indigo: ["#eef2ff", "#e0e7ff", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3", "#312e81", "#1e1b4b"],
    violet: ["#f5f3ff", "#ede9fe", "#ddd6fe", "#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9", "#5b21b6", "#4c1d95", "#2e1065"],
    purple: ["#faf5ff", "#f3e8ff", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7", "#9333ea", "#7e22ce", "#6b21a8", "#581c87", "#3b0764"],
    fuchsia: ["#fdf4ff", "#fae8ff", "#f5d0fe", "#f0abfc", "#e879f9", "#d946ef", "#c026d3", "#a21caf", "#86198f", "#701a75", "#4a044e"],
    pink: ["#fdf2f8", "#fce7f3", "#fbcfe8", "#f9a8d4", "#f472b6", "#ec4899", "#db2777", "#be185d", "#9d174d", "#831843", "#500724"],
    rose: ["#fff1f2", "#ffe4e6", "#fecdd3", "#fda4af", "#fb7185", "#f43f5e", "#e11d48", "#be123c", "#9f1239", "#881337", "#4c0519"]
  });
  var TW_FAMILIES = Object.freeze(Object.keys(TAILWIND));
  function isHex(s) {
    return typeof s === "string" && /^#[0-9a-f]{6}$/i.test(s);
  }
  __name(isHex, "isHex");
  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [n >> 16 & 255, n >> 8 & 255, n & 255];
  }
  __name(hexToRgb, "hexToRgb");
  function exactTailwind(hex) {
    if (!isHex(hex)) return null;
    const needle = hex.toLowerCase();
    for (const family of TW_FAMILIES) {
      const i = TAILWIND[family].indexOf(needle);
      if (i >= 0) return { family, shadeIdx: i };
    }
    return null;
  }
  __name(exactTailwind, "exactTailwind");
  function nearestTailwind(hex) {
    if (!isHex(hex)) return null;
    const [r, g, b] = hexToRgb(hex);
    let best = null;
    let bestD = Infinity;
    for (const family of TW_FAMILIES) {
      const shades = TAILWIND[family];
      for (let i = 0; i < shades.length; i += 1) {
        const [cr, cg, cb] = hexToRgb(shades[i]);
        const d = (r - cr) ** 2 + (g - cg) ** 2 + (b - cb) ** 2;
        if (d < bestD) {
          bestD = d;
          best = { family, shadeIdx: i, hex: shades[i] };
        }
      }
    }
    return best;
  }
  __name(nearestTailwind, "nearestTailwind");

  // settings.js
  var DEFAULTS = Object.freeze({
    // --- structural -------------------------------------------------------
    enabled: true,
    cursorStyle: "Box",
    // None | Line | Box | Underline
    // --- flat color, one per appearance ------------------------------------
    colorDark: "#39ff14",
    colorLight: "#333333",
    // --- gradient ramp (2-4 stops), one ramp per appearance -----------------
    gradientEnabled: false,
    gradientCount: 2,
    gradientDark1: "#39ff14",
    gradientDark2: "#00d4ff",
    gradientDark3: "#b14aff",
    gradientDark4: "#ff2e88",
    gradientLight1: "#1f8a3b",
    gradientLight2: "#0077b6",
    gradientLight3: "#7028c8",
    gradientLight4: "#c2185b",
    // --- appearance --------------------------------------------------------
    caretWidthPx: 2,
    cursorOpacity: 1,
    glow: true,
    showChar: true,
    lineSerifs: false,
    underlineWidthPx: 0,
    // 0 = auto (scale with line height)
    boxHollow: false,
    boxHollowWidth: 2,
    // --- blinking ----------------------------------------------------------
    blinkingEnabled: true,
    blinkSpeed: 1.2,
    blinkOnOffBalance: 0.5,
    blinkDelayMs: 0,
    blinkBreathing: false,
    blinkBreathDepth: 0.2,
    hideNativeCaret: true,
    hideOnWindowBlur: true,
    // --- smooth movement ---------------------------------------------------
    smoothEnabled: false,
    smoothStopBlinking: true,
    smoothness: 0.15,
    catchUpSpeed: 0.55,
    maxCatchUpSpeed: 0.85,
    smoothAdaptive: true,
    snapOnNewline: true,
    moveDelayMs: 0,
    // --- motion smear ------------------------------------------------------
    smear: true,
    smearStiffness: 0.6,
    smearTrailingStiffness: 0.4,
    smearDamping: 0.8,
    smearTaper: false,
    smearTaperAmount: 0.7,
    smearFillHollow: true,
    // --- after effects -----------------------------------------------------
    popLetters: true,
    popRainbow: false,
    flameTrail: true,
    backspaceDisintegrate: false,
    thunderstrike: false,
    thunderstrikeSize: 2,
    thunderstrikeStrength: 0.5,
    thunderstrikeHalo: true,
    stardustEnabled: false,
    stardustAlwaysOn: false,
    stardustDelayMs: 2e3,
    stardustRate: 1,
    stardustOrbit: false,
    stardustOrbitRadius: 22,
    speedDemon: false,
    speedDemonSparks: true,
    speedDemonSensitivity: 1,
    speedDemonSparkQuantity: 1,
    speedDemonSparkTrail: 0,
    energyEffect: false,
    energySpeed: 1,
    energyAurora: false,
    crtEffect: false,
    trailLength: 10,
    trailFadeMs: 450,
    // --- torch spotlight ---------------------------------------------------
    torchEffect: false,
    overlayFollowMode: "caret",
    // caret | mouse | auto
    overlayRadius: 250,
    overlayDarkness: 0.7,
    overlayIntensity: 0.1,
    overlayColor: "#ff963c",
    overlayBlinkSync: false,
    overlayBlinkDepth: 0.25,
    overlaySpeed: 0.22,
    // --- idle behaviour ----------------------------------------------------
    idleFadeEnabled: false,
    idleFadeDelayMs: 4e3,
    idleFadeTo: 0.25,
    // --- context-aware colour ----------------------------------------------
    selectionColorEnabled: false,
    selectionColorDark: "#ffd166",
    selectionColorLight: "#b06f00",
    rowTypeTint: false,
    rowTypeTintAmount: 45,
    // --- ghost cursor ------------------------------------------------------
    ghostEnabled: false,
    ghostOpacity: 0.3,
    ghostLag: 0.08,
    // --- combo -------------------------------------------------------------
    comboEnabled: false,
    comboThreshold: 25,
    comboGlow: true,
    comboShower: true,
    // --- shake on delete ---------------------------------------------------
    shakeEnabled: false,
    shakeStrength: 3,
    shakeDurationMs: 180,
    // --- typewriter sound --------------------------------------------------
    soundEnabled: false,
    soundVolume: 0.15,
    soundPitch: 1,
    soundVariation: 0.25,
    // --- preset bookkeeping ------------------------------------------------
    activePreset: ""
  });
  var STRUCTURAL = /* @__PURE__ */ new Set(["enabled", "activePreset", "hideNativeCaret", "hideOnWindowBlur"]);
  var LOOK_KEYS = Object.freeze(Object.keys(DEFAULTS).filter((k) => !STRUCTURAL.has(k)));
  var NUM_SPECS = {
    gradientCount: { min: 2, max: 4, step: 1 },
    caretWidthPx: { min: 1, max: 12, step: 0.5 },
    cursorOpacity: { min: 0.1, max: 1, step: 0.01 },
    underlineWidthPx: { min: 0, max: 12, step: 0.5 },
    boxHollowWidth: { min: 1, max: 8, step: 0.5 },
    blinkSpeed: { min: 0.1, max: 5, step: 0.1 },
    blinkOnOffBalance: { min: 0.1, max: 0.9, step: 0.01 },
    blinkDelayMs: { min: 0, max: 5e3, step: 50 },
    blinkBreathDepth: { min: 0.05, max: 0.5, step: 0.01 },
    smoothness: { min: 0.05, max: 0.3, step: 0.01 },
    catchUpSpeed: { min: 0.3, max: 0.8, step: 0.01 },
    maxCatchUpSpeed: { min: 0.5, max: 1, step: 0.01 },
    moveDelayMs: { min: 0, max: 400, step: 10 },
    smearStiffness: { min: 0.05, max: 1, step: 0.01 },
    smearTrailingStiffness: { min: 0.05, max: 1, step: 0.01 },
    smearDamping: { min: 0.1, max: 1, step: 0.01 },
    smearTaperAmount: { min: 0, max: 1, step: 0.01 },
    thunderstrikeSize: { min: 1, max: 8, step: 1 },
    thunderstrikeStrength: { min: 0.1, max: 1, step: 0.01 },
    stardustDelayMs: { min: 0, max: 1e4, step: 100 },
    stardustRate: { min: 0.2, max: 3, step: 0.1 },
    stardustOrbitRadius: { min: 6, max: 80, step: 1 },
    speedDemonSensitivity: { min: 0.5, max: 2, step: 0.1 },
    speedDemonSparkQuantity: { min: 0, max: 3, step: 0.1 },
    speedDemonSparkTrail: { min: 0, max: 30, step: 1 },
    energySpeed: { min: 0.2, max: 3, step: 0.1 },
    trailLength: { min: 1, max: 40, step: 1 },
    trailFadeMs: { min: 80, max: 2e3, step: 10 },
    overlayRadius: { min: 60, max: 900, step: 10 },
    overlayDarkness: { min: 0, max: 1, step: 0.01 },
    overlayIntensity: { min: 0, max: 1, step: 0.01 },
    overlayBlinkDepth: { min: 0.05, max: 0.6, step: 0.01 },
    overlaySpeed: { min: 0.02, max: 1, step: 0.01 },
    idleFadeDelayMs: { min: 500, max: 3e4, step: 250 },
    idleFadeTo: { min: 0, max: 0.9, step: 0.01 },
    rowTypeTintAmount: { min: 0, max: 180, step: 5 },
    ghostOpacity: { min: 0.05, max: 0.8, step: 0.01 },
    ghostLag: { min: 0.01, max: 0.3, step: 0.01 },
    comboThreshold: { min: 5, max: 100, step: 1 },
    shakeStrength: { min: 0.5, max: 12, step: 0.5 },
    shakeDurationMs: { min: 60, max: 600, step: 10 },
    soundVolume: { min: 0.01, max: 1, step: 0.01 },
    soundPitch: { min: 0.4, max: 2.5, step: 0.05 },
    soundVariation: { min: 0, max: 1, step: 0.01 }
  };
  var ENUMS = {
    // 'None' paints no cursor body and leaves Thymer's own caret visible, so the
    // effects layer purely additively on top of it.
    cursorStyle: ["None", "Line", "Box", "Underline"],
    overlayFollowMode: ["caret", "mouse", "auto"]
  };
  var HEX_KEYS = /* @__PURE__ */ new Set([
    "colorDark",
    "colorLight",
    "overlayColor",
    "selectionColorDark",
    "selectionColorLight",
    "gradientDark1",
    "gradientDark2",
    "gradientDark3",
    "gradientDark4",
    "gradientLight1",
    "gradientLight2",
    "gradientLight3",
    "gradientLight4"
  ]);
  var MAX_PRESETS = 60;
  var MAX_NAME = 48;
  var MAX_CODE = 2e4;
  function migrateLegacyKeys(src) {
    if (!src || typeof src !== "object" || Array.isArray(src)) return {};
    const o = (
      /** @type {Record<string, any>} */
      Object.assign({}, src)
    );
    for (let i = 1; i <= 4; i++) {
      const oldKey = "gradientColor" + i;
      const newKey = "gradientDark" + i;
      if (oldKey in o) {
        if (o[newKey] === void 0) o[newKey] = o[oldKey];
        delete o[oldKey];
      }
    }
    if ("idleStardust" in o) {
      if (o.stardustEnabled === void 0) o.stardustEnabled = o.idleStardust;
      delete o.idleStardust;
    }
    return o;
  }
  __name(migrateLegacyKeys, "migrateLegacyKeys");
  function normalizeHex(v, fallback) {
    if (typeof v !== "string") return fallback;
    let h2 = v.trim().toLowerCase();
    if (h2[0] !== "#") h2 = "#" + h2;
    if (/^#[0-9a-f]{3}$/.test(h2)) {
      return "#" + h2[1] + h2[1] + h2[2] + h2[2] + h2[3] + h2[3];
    }
    return /^#[0-9a-f]{6}$/.test(h2) ? h2 : fallback;
  }
  __name(normalizeHex, "normalizeHex");
  function coerce(key, v) {
    const def = (
      /** @type {any} */
      DEFAULTS[key]
    );
    if (typeof def === "boolean") return v === void 0 ? def : v === true;
    if (typeof def === "number") {
      const n = typeof v === "number" ? v : Number.parseFloat(v);
      if (!Number.isFinite(n)) return def;
      const spec = NUM_SPECS[key];
      if (!spec) return Number(n.toFixed(4));
      const stepped = Math.round(n / spec.step) * spec.step;
      return Number(Math.min(spec.max, Math.max(spec.min, stepped)).toFixed(4));
    }
    if (typeof def === "string") {
      if (ENUMS[key]) return ENUMS[key].includes(v) ? v : def;
      if (HEX_KEYS.has(key)) return normalizeHex(v, def);
      return typeof v === "string" ? v.trim().slice(0, MAX_NAME) : def;
    }
    return def;
  }
  __name(coerce, "coerce");
  function normalizePresetSnapshot(raw) {
    const s = migrateLegacyKeys(raw);
    const out = {};
    for (const k of LOOK_KEYS) out[k] = coerce(k, s[k]);
    return out;
  }
  __name(normalizePresetSnapshot, "normalizePresetSnapshot");
  function normalizePresets(raw) {
    const out = {};
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return out;
    const byClean = /* @__PURE__ */ new Map();
    for (const k of Object.keys(raw)) {
      if (k === "__proto__" || k === "constructor" || k === "prototype") continue;
      const name = String(k).trim().slice(0, MAX_NAME);
      if (!name) continue;
      if (!byClean.has(name)) byClean.set(name, raw[k]);
    }
    const names = Array.from(byClean.keys()).sort().slice(0, MAX_PRESETS);
    for (const name of names) out[name] = normalizePresetSnapshot(byClean.get(name));
    return out;
  }
  __name(normalizePresets, "normalizePresets");
  function normalizeSettings(raw) {
    const s = migrateLegacyKeys(raw);
    const out = {};
    for (const k of Object.keys(DEFAULTS)) out[k] = coerce(k, s[k]);
    out.presets = normalizePresets(s.presets);
    if (!Object.prototype.hasOwnProperty.call(out.presets, out.activePreset)) out.activePreset = "";
    return out;
  }
  __name(normalizeSettings, "normalizeSettings");
  function presetToCode(name, snap) {
    const payload = JSON.stringify(Object.assign({ __name: name }, snap));
    return btoa(unescape(encodeURIComponent(payload))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  __name(presetToCode, "presetToCode");
  function codeToPreset(code) {
    try {
      if (typeof code !== "string") return null;
      const trimmed = code.trim();
      if (!trimmed || trimmed.length > MAX_CODE) return null;
      const b64 = trimmed.replace(/-/g, "+").replace(/_/g, "/");
      const obj = JSON.parse(decodeURIComponent(escape(atob(b64))));
      if (!obj || typeof obj !== "object") return null;
      const name = String(obj.__name || "Imported preset").trim().slice(0, MAX_NAME) || "Imported preset";
      return { name, snap: normalizePresetSnapshot(obj) };
    } catch {
      return null;
    }
  }
  __name(codeToPreset, "codeToPreset");
  var BUILTIN_PRESETS = Object.freeze({
    "Jell-O": {
      cursorStyle: "Box",
      colorDark: "#31edae",
      colorLight: "#147133",
      glow: true,
      caretWidthPx: 3,
      popLetters: false,
      flameTrail: false,
      backspaceDisintegrate: true,
      blinkingEnabled: false,
      blinkDelayMs: 1200,
      smear: true,
      smearStiffness: 0.65,
      smearTrailingStiffness: 0.15,
      smearDamping: 0.4,
      smoothEnabled: true,
      smoothness: 0.15,
      catchUpSpeed: 0.6,
      maxCatchUpSpeed: 0.9
    },
    "Torch-Crt": {
      cursorStyle: "Line",
      colorDark: "#f3c258",
      colorLight: "#147133",
      crtEffect: true,
      glow: true,
      torchEffect: true,
      caretWidthPx: 3,
      popLetters: false,
      flameTrail: false,
      backspaceDisintegrate: true,
      blinkingEnabled: false,
      blinkDelayMs: 1200,
      smear: false,
      smoothEnabled: true,
      smoothness: 0.15,
      catchUpSpeed: 0.6,
      maxCatchUpSpeed: 0.9
    },
    "mr.Blue": {
      cursorStyle: "Line",
      colorDark: "#3182ed",
      colorLight: "#0077aa",
      glow: true,
      caretWidthPx: 3,
      popLetters: false,
      flameTrail: false,
      backspaceDisintegrate: true,
      blinkingEnabled: true,
      blinkSpeed: 1,
      blinkDelayMs: 1200,
      smear: false,
      smoothEnabled: true,
      smoothness: 0.15,
      catchUpSpeed: 0.6,
      maxCatchUpSpeed: 0.9
    },
    FairyDust: {
      cursorStyle: "Underline",
      colorDark: "#fff6bd",
      colorLight: "#e9cb35",
      glow: true,
      caretWidthPx: 3,
      popLetters: false,
      flameTrail: true,
      backspaceDisintegrate: true,
      energyEffect: true,
      energySpeed: 1.4,
      stardustEnabled: true,
      blinkingEnabled: false,
      blinkDelayMs: 1200,
      smear: true,
      smoothEnabled: true,
      smoothness: 0.15,
      catchUpSpeed: 0.6,
      maxCatchUpSpeed: 0.9
    },
    DarkMatter: {
      cursorStyle: "Box",
      colorDark: "#3ba2e3",
      colorLight: "#e15ff2",
      crtEffect: true,
      glow: true,
      caretWidthPx: 3,
      popLetters: false,
      flameTrail: true,
      backspaceDisintegrate: true,
      speedDemon: true,
      speedDemonSensitivity: 0.5,
      energyEffect: true,
      energySpeed: 1.4,
      trailLength: 3,
      blinkingEnabled: false,
      blinkDelayMs: 1200,
      smear: false,
      smoothEnabled: true,
      smoothness: 0.15,
      catchUpSpeed: 0.6,
      maxCatchUpSpeed: 0.9
    },
    old_Joe: {
      cursorStyle: "Box",
      colorDark: "#c2c2c2",
      colorLight: "#454545",
      glow: true,
      caretWidthPx: 3,
      popLetters: false,
      flameTrail: false,
      backspaceDisintegrate: true,
      blinkingEnabled: false,
      blinkSpeed: 1.5,
      blinkDelayMs: 1200,
      smear: false,
      smearStiffness: 0.65,
      smearTrailingStiffness: 0.15,
      smearDamping: 0.4,
      smoothEnabled: false
    }
  });
  function pickLook(settings) {
    return normalizePresetSnapshot(settings);
  }
  __name(pickLook, "pickLook");
  function randomizeLook(rand = Math.random) {
    const chance = /* @__PURE__ */ __name((key, bias = 0.3) => rand() < bias, "chance");
    const num = /* @__PURE__ */ __name((key) => {
      const spec = NUM_SPECS[key];
      const def = (
        /** @type {any} */
        DEFAULTS[key]
      );
      if (!spec) return def;
      const steps = Math.floor((spec.max - spec.min) / spec.step);
      return coerce(key, spec.min + Math.floor(rand() * (steps + 1)) * spec.step);
    }, "num");
    const pick = /* @__PURE__ */ __name((list) => list[Math.floor(rand() * list.length)], "pick");
    const hex = /* @__PURE__ */ __name(() => {
      const fam = TW_FAMILY_POOL[Math.floor(rand() * TW_FAMILY_POOL.length)];
      return fam[Math.floor(rand() * fam.length)];
    }, "hex");
    const out = {
      // 'None' excluded: with four styles in the pool roughly one roll in four
      // would produce no visible cursor, which reads as the randomiser being
      // broken rather than as a deliberate style.
      cursorStyle: pick(ENUMS.cursorStyle.filter((v) => v !== "None")),
      colorDark: hex(),
      colorLight: hex(),
      caretWidthPx: num("caretWidthPx"),
      cursorOpacity: rand() < 0.7 ? 1 : num("cursorOpacity"),
      glow: chance("glow", 0.6),
      showChar: chance("showChar", 0.5),
      blinkingEnabled: chance("blinkingEnabled", 0.6),
      blinkSpeed: num("blinkSpeed"),
      blinkOnOffBalance: num("blinkOnOffBalance"),
      blinkBreathing: chance("blinkBreathing", 0.25),
      smoothEnabled: chance("smoothEnabled", 0.6),
      smoothness: num("smoothness"),
      catchUpSpeed: num("catchUpSpeed"),
      smear: chance("smear", 0.5),
      smearTaper: chance("smearTaper", 0.3),
      // The loud ones, kept rare so a roll is usually wearable.
      popLetters: chance("popLetters", 0.3),
      popRainbow: chance("popRainbow", 0.15),
      flameTrail: chance("flameTrail", 0.3),
      thunderstrike: chance("thunderstrike", 0.1),
      stardustEnabled: chance("stardustEnabled", 0.2),
      stardustOrbit: chance("stardustOrbit", 0.1),
      speedDemon: chance("speedDemon", 0.2),
      energyEffect: chance("energyEffect", 0.2),
      crtEffect: chance("crtEffect", 0.25),
      torchEffect: chance("torchEffect", 0.08),
      ghostEnabled: chance("ghostEnabled", 0.15),
      comboEnabled: chance("comboEnabled", 0.15),
      shakeEnabled: chance("shakeEnabled", 0.12),
      idleFadeEnabled: chance("idleFadeEnabled", 0.2),
      rowTypeTint: chance("rowTypeTint", 0.15),
      selectionColorEnabled: chance("selectionColorEnabled", 0.15),
      // Never rolled on: it makes noise, and a surprise is not consent.
      soundEnabled: false
    };
    out.gradientEnabled = chance("gradientEnabled", 0.35);
    if (out.gradientEnabled) {
      out.gradientCount = 2 + Math.floor(rand() * 3);
      const fam = TW_FAMILY_POOL[Math.floor(rand() * TW_FAMILY_POOL.length)];
      for (let i = 1; i <= 4; i++) {
        out["gradientDark" + i] = fam[Math.min(fam.length - 1, 3 + i)];
        out["gradientLight" + i] = fam[Math.min(fam.length - 1, 5 + i)];
      }
    }
    return normalizePresetSnapshot(out);
  }
  __name(randomizeLook, "randomizeLook");
  var TW_FAMILY_POOL = buildFamilyPool();
  function buildFamilyPool() {
    const pool = [];
    for (const family of Object.keys(TAILWIND)) {
      const ramp = TAILWIND[family];
      if (Array.isArray(ramp) && ramp.length) pool.push(ramp);
    }
    return pool.length ? pool : [["#39ff14", "#00d4ff", "#b14aff", "#ff2e88"]];
  }
  __name(buildFamilyPool, "buildFamilyPool");

  // styles.js
  var ROOT_CLASS = "plg-cursor-tweaks";
  var BODY_ACTIVE_CLASS = "cs-active";
  var BODY_HIDE_NATIVE_CLASS = "cs-hide-native";
  var WRAP_CLASS = "cs-cursor-wrap";
  var CANVAS_CLASS = "cs-cursor-canvas";
  var TORCH_CLASS = "cs-torch-overlay";
  var STATIC_CSS = `
/* ---- our own layers -------------------------------------------------------
   NO app-region declaration on either of these, ever. Electron composes drag
   regions by unioning elements that declare drag, then SUBTRACTING elements
   that declare no-drag. An element declaring nothing is neutral and ignored
   for hit-testing; declaring none punches a hole in the title bar's drag rect
   and kills window dragging outright. Thymer is frameless, so this matters.
   Clicks pass through via pointer-events, and the wrapper rect is kept off the
   drag surface by the chrome insets in host.js. */
.${WRAP_CLASS} {
	position: fixed;
	overflow: hidden;
	pointer-events: none;
	top: 0; left: 0; width: 0; height: 0;
}
.${CANVAS_CLASS} {
	position: absolute;
	top: 0; left: 0;
	pointer-events: none;
}

/* ---- Thymer's own caret ---------------------------------------------------
   NOT scoped to .app-chrome-panels .panel. That extra ancestry was mine, and it
   is why the caret kept blinking through: the element does not sit inside a
   .listitem, it lives in an overlay layer whose ancestry was never confirmed,
   so any layer mounted outside that chain escaped the rule entirely. Thymer's
   own SDK examples (wpm-cursor, robot-cursor) style this class with no scoping
   at all \u2014 the name is unambiguous, and the body gate below is what keeps the
   plugin editor's Preview pane and a dead plugin safe.

   Hidden with opacity, NEVER display/visibility/removal: the engine reads this
   element's bounding rect every frame to know where the caret is, and a
   display:none element reports a zero box. Killing animation and transition
   matters too \u2014 a hidden blink still runs on the compositor and would pin the
   display at full refresh rate for nothing. */
body.${BODY_ACTIVE_CLASS}.${BODY_HIDE_NATIVE_CLASS} div.listview-caret-self {
	opacity: 0 !important;
	background: transparent !important;
	background-color: transparent !important;
	border-color: transparent !important;
	box-shadow: none !important;
	animation: none !important;
	transition: none !important;
	pointer-events: none !important;
}

/* Some builds paint the caret body in a pseudo element rather than the div. */
body.${BODY_ACTIVE_CLASS}.${BODY_HIDE_NATIVE_CLASS} div.listview-caret-self::before,
body.${BODY_ACTIVE_CLASS}.${BODY_HIDE_NATIVE_CLASS} div.listview-caret-self::after {
	content: none !important;
	opacity: 0 !important;
}

/* The name badge that rides along with the caret. Inline, not layout-bearing. */
body.${BODY_ACTIVE_CLASS}.${BODY_HIDE_NATIVE_CLASS} .text-caret-usertag {
	display: none !important;
}

/* Token-level belt and braces. These are the variables Thymer's own caret CSS
   reads, so authoring them here wins over any var() fallback in the app
   stylesheet and keeps the caret hidden even if the class name changes.

   Deliberately NOT zeroed: --ed-ibeam-width is the caret element's own width
   and therefore our measurement source, and --ed-line-with-caret-bg is the
   active-row highlight, which is a separate affordance the user may want. */
body.${BODY_ACTIVE_CLASS}.${BODY_HIDE_NATIVE_CLASS} {
	--ed-caret-self-fg: transparent;
	--ed-caret-self-background: transparent;
	--ed-caret-self-box-shadow: none;
	--ed-caret-self-border-width: 0px;
	--ed-caret-blink-bg: transparent;
	--ed-caret-code-bg: transparent;
}

/* The browser's own caret on the editor's editable rows.

   Scoped to .listitem rather than to any [contenteditable] under .panel: a
   plugin's settings panel is also a .panel, so the looser selector hid the
   caret in other plugins' editable fields \u2014 which we do not draw in. */
body.${BODY_ACTIVE_CLASS}.${BODY_HIDE_NATIVE_CLASS} .app-chrome-panels .panel .listitem,
body.${BODY_ACTIVE_CLASS}.${BODY_HIDE_NATIVE_CLASS} .app-chrome-panels .panel .line-div,
body.${BODY_ACTIVE_CLASS}.${BODY_HIDE_NATIVE_CLASS} .app-chrome-panels .panel .listitem [contenteditable="true"] {
	caret-color: transparent !important;
}

/* The plugin's OWN preview textarea is the one surface outside the editor we
   draw in, so it is the one surface outside the editor whose native caret we
   hide. Everything else \u2014 the command palette, dropdowns, link menus, rename
   fields, other plugins' settings \u2014 keeps its own caret, because we no longer
   draw a cursor there: hiding a caret we are not replacing would leave those
   fields with nothing at all. */
body.${BODY_ACTIVE_CLASS}.${BODY_HIDE_NATIVE_CLASS} .${ROOT_CLASS}-panel .cs-demo {
	caret-color: transparent !important;
}

/* ---- torch spotlight ------------------------------------------------------
   Sized inline by the torch tick every frame; the values here only cover the
   gap between insertion and the first frame, collapsed so it can never sit
   over the drag surface in that window.

   There is deliberately NO animation property. A CSS animation runs on the
   compositor, outside the rAF frame governor, so it would hold the display at
   full refresh rate the whole time the torch is on regardless of which gear
   the render loop picked \u2014 and because this element carries mix-blend-mode,
   every such frame forces a re-composite of the blended layer against its
   backdrop rather than a cheap opacity change. If flicker is wanted, drive
   --torch-intensity from the torch tick so it stays under the governor. */
.${TORCH_CLASS} {
	position: fixed;
	pointer-events: none;
	top: 0; left: 0; width: 0; height: 0;
	background: radial-gradient(
		circle var(--torch-radius, 250px) at var(--torch-x, 50%) var(--torch-y, 50%),
		rgba(var(--torch-warm, 255, 150, 60), var(--torch-intensity, 0.1)) 0%,
		rgba(0, 0, 0, var(--torch-darkness, 0.7)) 100%
	);
	mix-blend-mode: multiply;
	opacity: 1;
	transition: opacity 0.2s ease;
}
.${TORCH_CLASS}.cs-torch-hidden {
	opacity: 0 !important;
	display: none !important;
}
`;
  var PANEL_LOCAL_CSS = `
.${ROOT_CLASS}-panel .cs-preset-row {
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 6px 8px;
	border: 1px solid var(--border-default, rgba(127, 127, 127, 0.12));
	border-radius: var(--tps-radius, 6px);
	background: var(--bg-default, rgba(127, 127, 127, 0.06));
	margin-bottom: 6px;
}
.${ROOT_CLASS}-panel .cs-preset-row.cs-preset-active {
	border-color: var(--tps-accent, #04d1ab);
	background: var(--bg-hover, rgba(127, 127, 127, 0.04));
}
.${ROOT_CLASS}-panel .cs-preset-name {
	flex: 1 1 auto;
	min-width: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-weight: 600;
}
.${ROOT_CLASS}-panel .cs-preset-active .cs-preset-name::before {
	content: '\u25CF';
	margin-right: 6px;
	color: var(--tps-accent, #04d1ab);
}
.${ROOT_CLASS}-panel .cs-preset-actions {
	display: flex;
	gap: 4px;
	flex: 0 0 auto;
}
.${ROOT_CLASS}-panel .cs-text-input {
	flex: 1 1 auto;
	min-width: 0;
	box-sizing: border-box;
	padding: 5px 8px;
	border-radius: var(--tps-radius, 6px);
	border: 1px solid var(--border-default, rgba(127, 127, 127, 0.12));
	background: var(--bg-default, rgba(127, 127, 127, 0.06));
	color: var(--text-default, inherit);
	font: inherit;
	font-size: 12px;
}
.${ROOT_CLASS}-panel .cs-text-input:focus {
	outline: none;
	border-color: var(--tps-accent, #04d1ab);
}
.${ROOT_CLASS}-panel .cs-input-row {
	display: flex;
	align-items: center;
	gap: 6px;
	margin-top: 8px;
}
.${ROOT_CLASS}-panel .cs-color-row {
	display: flex;
	align-items: flex-start;
	gap: 10px;
	margin-bottom: 10px;
}
.${ROOT_CLASS}-panel .cs-color-label {
	flex: 0 0 96px;
	padding-top: 4px;
	font-size: 12px;
	color: var(--text-muted, rgba(127, 127, 127, 0.9));
}
.${ROOT_CLASS}-panel .cs-color-field {
	flex: 1 1 auto;
	min-width: 0;
}
/* NOTE: never use backticks in these comments \u2014 this whole stylesheet is a JS
   template literal and a stray backtick terminates it. (Same family as the
   no-HTML-in-injectCSS-comments rule in CLAUDE.md.)

   position:sticky resolves against the nearest SCROLLING ancestor. The shared
   panel root declares overflow:auto, which would make it that ancestor \u2014 but
   Thymer's panel body gives it no definite height, so height:100% resolves to
   auto, the root grows to fit its content, and it never scrolls internally. A
   sticky child then has nothing to stick within and simply scrolls away with
   the outer container.

   (The preview failing to stick is itself the proof: were this root the real
   scroller, sticky would already have worked.)

   Dropping the declaration for our panel only hands the job to Thymer's own
   .panel-scroller-y. Safe precisely because this element is not scrolling \u2014
   there is no overflow here for visible to spill. Doubled class to outrank
   the shared .tps-panel rule. */
.${ROOT_CLASS}-panel.${ROOT_CLASS}-panel {
	overflow: visible;
}

/* Pinned to the top of the scrolling panel so the sandbox is always reachable.
   Tuning a blink rate or a smear means typing in it over and over; having to
   scroll back up between every adjustment made it useless.

   Needs an opaque background \u2014 the settings scroll UNDER it, and the panel's
   own surface is what they must disappear behind. The negative margins plus
   matching padding let that background bleed to the panel's edges while the
   content stays on the normal inset. */
.${ROOT_CLASS}-panel .cs-sticky-preview {
	position: sticky;
	/* Offset by the panel bar's height, which panel.js measures and writes here.
	   The bar sits INSIDE .panel-scroller-y and stays pinned at its top, so a
	   sticky child at 0 pins underneath it and gets its first N pixels covered.
	   No transparent strip results, because the bar itself is what occupies the
	   offset. The fallback matches the observed 35px bar. */
	top: var(--cs-sticky-top, 35px);
	z-index: 3;
	margin: 0 -12px 14px;
	padding: 30px 12px 12px;
	background: var(--bg-default, rgba(127, 127, 127, 0.06));
	border-bottom: 1px solid var(--border-default, rgba(127, 127, 127, 0.12));
	/* Opaque: the panel background token can be translucent, and text sliding
	   under a see-through preview is worse than not pinning it at all. */
	backdrop-filter: blur(8px);
}

.${ROOT_CLASS}-panel .cs-demo {
	display: block;
	width: 100%;
	box-sizing: border-box;
	resize: vertical;
	min-height: 68px;
	padding: 8px 10px;
	border-radius: var(--tps-radius, 6px);
	border: 1px solid var(--border-default, rgba(127, 127, 127, 0.12));
	background: var(--bg-default, rgba(127, 127, 127, 0.06));
	color: var(--text-default, inherit);
	font: inherit;
	line-height: 1.5;
}
.${ROOT_CLASS}-panel .cs-demo:focus {
	outline: none;
	border-color: var(--tps-accent, #04d1ab);
}

/* Palette chips. Each is its own gradient preview, so the swatch IS the label \u2014
   a grid of named buttons would say "Sunset" without showing what that means. */
.${ROOT_CLASS}-panel .cs-palette-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
	gap: 6px;
	margin: 8px 0;
}
.${ROOT_CLASS}-panel .cs-palette-chip {
	position: relative;
	height: 30px;
	padding: 0;
	border: 1px solid var(--border-default, rgba(127, 127, 127, 0.12));
	border-radius: var(--tps-radius, 6px);
	cursor: pointer;
	overflow: hidden;
}
.${ROOT_CLASS}-panel .cs-palette-chip:hover {
	border-color: var(--tps-accent, #04d1ab);
}
.${ROOT_CLASS}-panel .cs-palette-name {
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 11px;
	font-weight: 600;
	color: #fff;
	/* The ramps run light to dark, so neither a light nor a dark label is legible
	   across all of them. A shadow on white works on every stop. */
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75), 0 0 6px rgba(0, 0, 0, 0.5);
}

.${ROOT_CLASS}-panel .cs-hint {
	margin: 6px 0 0;
	font-size: 11px;
	line-height: 1.45;
	color: var(--text-muted, rgba(127, 127, 127, 0.9));
}
`;

  // caret.js
  var THYMER_CARET_GRACE_MS = 120;
  var CARET_EL_SEL = "div.listview-caret-self";
  function inPreviewBox(doc) {
    try {
      const active = doc.activeElement;
      return !!(active && active.classList && active.classList.contains("cs-demo"));
    } catch {
      return false;
    }
  }
  __name(inPreviewBox, "inPreviewBox");
  var FOCUSED_PANEL_SEL = ".panel.focused-panel, .panel.has-focus";
  var LISTITEM_SEL = ".listitem[data-guid]";
  function isTextCaretHost(el2) {
    if (!el2) return false;
    if (el2.isContentEditable) return true;
    const tag = el2.tagName;
    if (tag === "TEXTAREA") return true;
    if (tag === "INPUT") {
      const type = (el2.type || "text").toLowerCase();
      return type === "text" || type === "search" || type === "url" || type === "tel" || type === "email" || type === "password" || type === "number";
    }
    return false;
  }
  __name(isTextCaretHost, "isTextCaretHost");
  var isDegenerate = /* @__PURE__ */ __name((r) => !r || r.width === 0 && r.height === 0 && r.top === 0 && r.left === 0, "isDegenerate");
  function thymerCaretEl(doc) {
    try {
      let best = null;
      let bestRect = null;
      let bestScore = -1;
      const panel2 = doc.querySelector(FOCUSED_PANEL_SEL);
      for (const node of doc.querySelectorAll(CARET_EL_SEL)) {
        if (!(node instanceof HTMLElement)) continue;
        const rect = node.getBoundingClientRect();
        if (!(rect.height > 0.5)) continue;
        const score = panel2 && panel2.contains(node) ? 2 : 1;
        if (score > bestScore) {
          best = node;
          bestRect = rect;
          bestScore = score;
        }
      }
      return best && bestRect ? { el: best, rect: bestRect } : null;
    } catch {
      return null;
    }
  }
  __name(thymerCaretEl, "thymerCaretEl");
  function getLineTextRect(row) {
    if (!(row instanceof HTMLElement)) return null;
    const line = row.querySelector(":scope > .line-div") || row.querySelector(".line-div");
    if (!(line instanceof HTMLElement)) return null;
    const lineBox = line.getBoundingClientRect();
    if (lineBox.width < 1 && lineBox.height < 1) return null;
    try {
      const range = line.ownerDocument.createRange();
      range.selectNodeContents(line);
      const rects = Array.from(range.getClientRects()).filter((r) => r.width > 0.5 && r.height > 0.5);
      if (rects.length) {
        let top = Infinity;
        for (const r of rects) top = Math.min(top, r.top);
        let bottom = top;
        for (const r of rects) {
          if (Math.abs(r.top - top) <= 1.25) bottom = Math.max(bottom, r.bottom);
        }
        const height = bottom - top;
        if (height >= 1) return { top, height };
      }
    } catch {
    }
    const cs = getComputedStyle(line);
    let lh = Number.parseFloat(cs.lineHeight);
    if (!Number.isFinite(lh) || lh <= 0) {
      const fs = Number.parseFloat(cs.fontSize);
      lh = Number.isFinite(fs) ? fs * 1.2 : Math.min(lineBox.height || 20, 28);
    }
    return { top: lineBox.top, height: Math.min(lh, lineBox.height || lh) };
  }
  __name(getLineTextRect, "getLineTextRect");
  function rowAtPoint(doc, r) {
    const mid = (r.top + r.bottom) / 2;
    try {
      const hit = doc.elementFromPoint(Math.max(0, r.left + 1), mid);
      const byPoint = hit && hit.closest ? hit.closest(LISTITEM_SEL) : null;
      if (byPoint instanceof HTMLElement) return byPoint;
    } catch {
    }
    try {
      const panel2 = doc.querySelector(FOCUSED_PANEL_SEL) || doc.body;
      const marked = panel2.querySelector(".listitem.listitem-with-caret[data-guid]");
      if (marked instanceof HTMLElement) {
        const b = marked.getBoundingClientRect();
        if (mid >= b.top - 1 && mid <= b.bottom + 1) return marked;
      }
    } catch {
    }
    return null;
  }
  __name(rowAtPoint, "rowAtPoint");
  function thymerCharAt(doc, r) {
    try {
      const x = r.left + 1;
      const y = (r.top + r.bottom) / 2;
      const fromPoint = (
        /** @type {any} */
        doc.caretRangeFromPoint
      );
      const cr = typeof fromPoint === "function" ? fromPoint.call(doc, x, y) : null;
      const node = cr && cr.startContainer;
      if (node && node.nodeType === 3) {
        const off = cr.startOffset;
        const ch = (node.data || "").charAt(off);
        const rect = adjacentCharRect(doc, node, off);
        return {
          char: ch && ch !== "\n" ? ch : "",
          charRect: rect ? Object.assign(rect, { el: node.parentElement }) : null
        };
      }
    } catch {
    }
    return { char: "", charRect: null };
  }
  __name(thymerCharAt, "thymerCharAt");
  function thymerCaretPos(doc, el2, row) {
    try {
      const guid = row && row.getAttribute("data-guid") || "";
      const dx = el2.dataset ? el2.dataset.x || "" : "";
      const dy = el2.dataset ? el2.dataset.y || "" : "";
      let off = "";
      const sel = (doc.defaultView || window).getSelection();
      if (sel && sel.focusNode) off = String(sel.focusOffset);
      const key = "t:" + guid + ":" + dx + ":" + dy + ":" + off;
      return guid || dx || dy || off ? key : null;
    } catch {
      return null;
    }
  }
  __name(thymerCaretPos, "thymerCaretPos");
  function thymerCaretCoords(e) {
    try {
      const doc = e.canvas?.ownerDocument ?? document;
      const found = thymerCaretEl(doc);
      if (!found) return null;
      const { el: el2, rect: r } = found;
      const win = doc.defaultView || window;
      const row = (
        /** @type {HTMLElement | null} */
        el2.closest && el2.closest(LISTITEM_SEL) || rowAtPoint(doc, r)
      );
      const { char, charRect } = thymerCharAt(doc, r);
      const styleSrc = charRect && charRect.el || row && (row.querySelector("span.lineitem-text") || row.querySelector(":scope > .line-div")) || el2;
      const style = win.getComputedStyle(
        /** @type {Element} */
        styleSrc
      );
      let top = r.top;
      let bottom = r.bottom;
      if (charRect) {
        top = charRect.top;
        bottom = charRect.bottom;
      } else if (row) {
        const lb = getLineTextRect(row);
        if (lb && Math.abs(lb.top - r.top) <= r.height) {
          top = lb.top;
          bottom = lb.top + lb.height;
        }
      }
      const height = Math.max(4, bottom - top);
      const fontSize = parseFloat(style.fontSize) || 14;
      const fontFamily = style.fontFamily || "inherit";
      const measured = char ? measureCharWidth(e, char, fontFamily, fontSize, style.fontWeight, style.fontStyle) : null;
      const charWidth = measured || Math.max(4, fontSize * 0.55);
      return {
        x: r.left,
        top,
        bottom: top + height,
        h: height,
        w: e.styleFor("cursorStyle") === "Line" ? e.styleFor("caretWidthPx") : charWidth,
        actualCharWidth: charWidth,
        char,
        textColor: style.color || "#ffffff",
        fontSize,
        fontFamily,
        focused: true,
        rowType: rowTypeOf(row),
        pos: thymerCaretPos(doc, el2, row)
      };
    } catch {
      return null;
    }
  }
  __name(thymerCaretCoords, "thymerCaretCoords");
  function rowTypeOf(row) {
    if (!row) return "text";
    const cl = row.classList;
    if (cl.contains("listitem-heading")) return "heading";
    if (cl.contains("listitem-task")) return "task";
    if (cl.contains("listitem-code")) return "code";
    if (cl.contains("listitem-quote")) return "quote";
    if (cl.contains("listitem-ulist") || cl.contains("listitem-olist")) return "list";
    return "text";
  }
  __name(rowTypeOf, "rowTypeOf");
  function adjacentCharRect(doc, node, offset) {
    if (!node || node.nodeType !== 3) return null;
    const text = node.data || "";
    try {
      if (offset < text.length) {
        const r = doc.createRange();
        r.setStart(node, offset);
        r.setEnd(node, offset + 1);
        const rect = r.getClientRects()[0] || r.getBoundingClientRect();
        if (!isDegenerate(rect)) return { left: rect.left, top: rect.top, bottom: rect.bottom };
      }
      if (offset > 0) {
        const r = doc.createRange();
        r.setStart(node, offset - 1);
        r.setEnd(node, offset);
        const rect = r.getClientRects()[0] || r.getBoundingClientRect();
        if (!isDegenerate(rect)) return { left: rect.right, top: rect.top, bottom: rect.bottom };
      }
    } catch {
    }
    return null;
  }
  __name(adjacentCharRect, "adjacentCharRect");
  function formFieldCaretCoords(e, el2) {
    try {
      const doc = el2.ownerDocument;
      const win = doc.defaultView || window;
      const style = win.getComputedStyle(el2);
      const rect = el2.getBoundingClientRect();
      const isTextarea = el2.tagName === "TEXTAREA";
      const value = el2.value != null ? String(el2.value) : "";
      let selStart = value.length;
      try {
        const a = el2.selectionStart;
        const b = el2.selectionEnd;
        if (typeof a === "number" && typeof b === "number") {
          selStart = el2.selectionDirection === "backward" ? a : b;
        }
      } catch {
      }
      let mirror = e._formMirror;
      if (!mirror || mirror.ownerDocument !== doc) {
        mirror?.remove();
        mirror = doc.createElement("div");
        mirror.setAttribute("aria-hidden", "true");
        mirror.style.position = "absolute";
        mirror.style.visibility = "hidden";
        mirror.style.top = "0";
        mirror.style.left = "0";
        mirror.style.zIndex = "-1";
        mirror.style.pointerEvents = "none";
        doc.body.appendChild(mirror);
        e._formMirror = mirror;
      }
      const props = [
        "boxSizing",
        "width",
        "height",
        "paddingTop",
        "paddingRight",
        "paddingBottom",
        "paddingLeft",
        "borderTopWidth",
        "borderRightWidth",
        "borderBottomWidth",
        "borderLeftWidth",
        "fontStyle",
        "fontVariant",
        "fontWeight",
        "fontStretch",
        "fontSize",
        "lineHeight",
        "fontFamily",
        "letterSpacing",
        "textIndent",
        "textTransform",
        "wordSpacing",
        "tabSize"
      ];
      for (const p of props) mirror.style[p] = style[p];
      mirror.style.whiteSpace = isTextarea ? "pre-wrap" : "pre";
      mirror.style.wordWrap = isTextarea ? "break-word" : "normal";
      mirror.style.overflow = "hidden";
      if (!isTextarea) mirror.style.height = "auto";
      mirror.textContent = "";
      mirror.appendChild(doc.createTextNode(value.substring(0, selStart)));
      const marker = doc.createElement("span");
      marker.textContent = "\u200B";
      mirror.appendChild(marker);
      const markerRect = marker.getBoundingClientRect();
      const mirrorRect = mirror.getBoundingClientRect();
      const offsetX = markerRect.left - mirrorRect.left;
      const offsetY = markerRect.top - mirrorRect.top;
      const fontSize = parseFloat(style.fontSize) || 14;
      const lineHeight = parseFloat(style.lineHeight) || fontSize * 1.2 || 16;
      const left = rect.left + offsetX - (el2.scrollLeft || 0);
      let top;
      let height;
      if (isTextarea) {
        top = rect.top + offsetY - (el2.scrollTop || 0);
        height = lineHeight;
      } else {
        height = Math.min(lineHeight, rect.height) || fontSize * 1.2;
        top = rect.top + (rect.height - height) / 2;
      }
      const clampedLeft = Math.min(Math.max(left, rect.left), rect.right);
      const clampedTop = Math.min(Math.max(top, rect.top), rect.bottom - 1);
      return { left: clampedLeft, top: clampedTop, bottom: clampedTop + height };
    } catch {
      return null;
    }
  }
  __name(formFieldCaretCoords, "formFieldCaretCoords");
  function selectionFallbackCoords(e) {
    const doc = e.canvas?.ownerDocument ?? document;
    const active = doc.activeElement;
    if (!active) return null;
    if (!isTextCaretHost(active)) return null;
    const isFormField = active.tagName === "TEXTAREA" || active.tagName === "INPUT";
    if (isFormField) {
      const fieldRect = formFieldCaretCoords(e, active);
      if (fieldRect) return fieldRect;
    }
    const win = doc.defaultView || window;
    const sel = win.getSelection();
    if (sel && sel.rangeCount > 0 && active.isContentEditable) {
      const spanRect = adjacentCharRect(doc, sel.focusNode, sel.focusOffset);
      if (spanRect) return spanRect;
      let range;
      try {
        range = doc.createRange();
        range.setStart(
          /** @type {Node} */
          sel.focusNode,
          sel.focusOffset
        );
        range.collapse(true);
      } catch {
        range = sel.getRangeAt(0).cloneRange();
        range.collapse(true);
      }
      let rect2 = range.getClientRects()[0] || range.getBoundingClientRect();
      if (isDegenerate(rect2)) {
        const node = range.startContainer;
        const lineEl = node.nodeType === 1 ? (
          /** @type {Element} */
          node
        ) : node.parentElement;
        if (lineEl && lineEl !== active) {
          const lineRect = lineEl.getBoundingClientRect();
          if (!isDegenerate(lineRect)) rect2 = lineRect;
        }
      }
      if (!isDegenerate(rect2)) {
        return { left: rect2.left, top: rect2.top, bottom: rect2.bottom || rect2.top + rect2.height };
      }
    }
    const rect = active.getBoundingClientRect();
    if (!rect) return null;
    const style = win.getComputedStyle(active);
    const approxLineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.4 || 20;
    if (rect.height > approxLineHeight * 3) return null;
    return { left: rect.left, top: rect.top, bottom: rect.bottom };
  }
  __name(selectionFallbackCoords, "selectionFallbackCoords");
  function nodeKey(e, node) {
    if (!node) return "0";
    if (!e._nodeIds) {
      e._nodeIds = /* @__PURE__ */ new WeakMap();
      e._nodeIdSeq = 0;
    }
    let id = e._nodeIds.get(node);
    if (id === void 0) {
      id = ++e._nodeIdSeq;
      e._nodeIds.set(node, id);
    }
    return String(id);
  }
  __name(nodeKey, "nodeKey");
  function genericCaretPos(e, active, doc) {
    try {
      const el2 = nodeKey(e, active);
      if (active.tagName === "TEXTAREA" || active.tagName === "INPUT") {
        return el2 + ":" + (active.selectionStart ?? 0) + ":" + (active.selectionEnd ?? 0);
      }
      const win = doc.defaultView || window;
      const sel = win.getSelection();
      if (sel && sel.focusNode) {
        return el2 + ":" + nodeKey(e, sel.focusNode) + ":" + sel.focusOffset;
      }
      return el2 + ":0";
    } catch {
      return null;
    }
  }
  __name(genericCaretPos, "genericCaretPos");
  function measureCharWidth(e, char, fontFamily, fontSize, fontWeight, fontStyle) {
    try {
      if (!e._measureCtx) {
        const canvas = (e.canvas?.ownerDocument ?? document).createElement("canvas");
        e._measureCtx = canvas.getContext("2d");
      }
      const weight = fontWeight && fontWeight !== "normal" ? fontWeight + " " : "";
      const style = fontStyle && fontStyle !== "normal" ? fontStyle + " " : "";
      e._measureCtx.font = `${style}${weight}${fontSize}px ${fontFamily}`;
      const w = e._measureCtx.measureText(char).width;
      return w > 0 ? w : null;
    } catch {
      return null;
    }
  }
  __name(measureCharWidth, "measureCharWidth");
  function genericCaretChar(active) {
    try {
      if (active.tagName === "INPUT" || active.tagName === "TEXTAREA") {
        const value = active.value != null ? String(active.value) : "";
        let selStart = value.length;
        try {
          const a = active.selectionStart;
          const b = active.selectionEnd;
          if (typeof a === "number" && typeof b === "number") {
            selStart = active.selectionDirection === "backward" ? a : b;
          }
        } catch {
        }
        const ch = value.charAt(selStart);
        return ch && ch !== "\n" ? ch : "";
      }
      if (active.isContentEditable) {
        const doc = active.ownerDocument;
        const win = doc.defaultView || window;
        const sel = win.getSelection();
        if (sel && sel.focusNode && sel.focusNode.nodeType === 3) {
          const text = sel.focusNode.data || "";
          const ch = text.charAt(sel.focusOffset);
          return ch && ch !== "\n" ? ch : "";
        }
      }
    } catch {
    }
    return "";
  }
  __name(genericCaretChar, "genericCaretChar");
  function genericCaretCoords(e) {
    try {
      const doc = e.canvas?.ownerDocument ?? document;
      const active = doc.activeElement;
      if (!isTextCaretHost(active)) return null;
      const c = selectionFallbackCoords(e);
      if (!c) return null;
      const win = doc.defaultView || window;
      const sampleX = Math.min(c.left + 2, doc.documentElement.clientWidth - 1);
      const sampleY = (c.top + c.bottom) / 2;
      const elAtCaret = doc.elementFromPoint ? doc.elementFromPoint(sampleX, sampleY) : null;
      const styleSource = elAtCaret && active?.contains?.(elAtCaret) ? elAtCaret : active;
      const style = win.getComputedStyle(
        /** @type {Element} */
        styleSource
      );
      const fontSize = parseFloat(style.fontSize) || 14;
      const fontFamily = style.fontFamily || "inherit";
      const char = genericCaretChar(active);
      const measured = char ? measureCharWidth(e, char, fontFamily, fontSize, style.fontWeight, style.fontStyle) : null;
      const charWidth = measured || Math.max(4, fontSize * 0.55);
      const height = Math.max(4, c.bottom - c.top || fontSize * 1.2);
      return {
        x: c.left,
        top: c.top,
        bottom: c.top + height,
        h: height,
        w: e.styleFor("cursorStyle") === "Line" ? e.styleFor("caretWidthPx") : charWidth,
        actualCharWidth: charWidth,
        char,
        textColor: style.color || "#ffffff",
        fontSize,
        fontFamily,
        focused: true,
        pos: genericCaretPos(e, active, doc)
      };
    } catch {
      return null;
    }
  }
  __name(genericCaretCoords, "genericCaretCoords");
  function caretCoords(e) {
    if (!e._modalOpen) {
      const t = thymerCaretCoords(e);
      if (t) {
        e._caretSource = "thymer";
        e._lastThymerCaretT = performance.now();
        t.src = "thymer";
        return t;
      }
      if (performance.now() - (e._lastThymerCaretT || 0) < THYMER_CARET_GRACE_MS) {
        return e.lastActive && e._caretSource === "thymer" ? e.lastActive : null;
      }
    }
    const doc = e.canvas?.ownerDocument ?? document;
    if (!inPreviewBox(doc)) {
      e._caretSource = "none";
      return null;
    }
    e._caretSource = "generic";
    const g = genericCaretCoords(e);
    if (g) g.src = "generic";
    return g;
  }
  __name(caretCoords, "caretCoords");

  // colors.js
  function hexToRgba(hex, alpha) {
    let h2 = (hex || "#39ff14").replace("#", "");
    if (h2.length === 3) h2 = h2.split("").map((c) => c + c).join("");
    const int = parseInt(h2, 16) || 0;
    return `rgba(${int >> 16 & 255}, ${int >> 8 & 255}, ${int & 255}, ${alpha})`;
  }
  __name(hexToRgba, "hexToRgba");
  function hexToRgb2(hex) {
    let h2 = (hex || "#ff963c").replace("#", "");
    if (h2.length === 3) h2 = h2.split("").map((c) => c + c).join("");
    const n = parseInt(h2, 16) || 0;
    return `${n >> 16 & 255}, ${n >> 8 & 255}, ${n & 255}`;
  }
  __name(hexToRgb2, "hexToRgb");
  function hexToRgbTuple(hex) {
    let h2 = (hex || "#ffffff").replace("#", "");
    if (h2.length === 3) h2 = h2.split("").map((c) => c + c).join("");
    const int = parseInt(h2, 16) || 0;
    return [int >> 16 & 255, int >> 8 & 255, int & 255];
  }
  __name(hexToRgbTuple, "hexToRgbTuple");
  function lighten(c, f) {
    return Math.round(c + (255 - c) * f);
  }
  __name(lighten, "lighten");
  function hslToRgbString(h2, s, l) {
    const hue = (h2 % 360 + 360) % 360;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(hue / 60 % 2 - 1));
    const m = l - c / 2;
    let r1 = 0;
    let g1 = 0;
    let b1 = 0;
    if (hue < 60) {
      r1 = c;
      g1 = x;
      b1 = 0;
    } else if (hue < 120) {
      r1 = x;
      g1 = c;
      b1 = 0;
    } else if (hue < 180) {
      r1 = 0;
      g1 = c;
      b1 = x;
    } else if (hue < 240) {
      r1 = 0;
      g1 = x;
      b1 = c;
    } else if (hue < 300) {
      r1 = x;
      g1 = 0;
      b1 = c;
    } else {
      r1 = c;
      g1 = 0;
      b1 = x;
    }
    return `rgb(${Math.round((r1 + m) * 255)}, ${Math.round((g1 + m) * 255)}, ${Math.round((b1 + m) * 255)})`;
  }
  __name(hslToRgbString, "hslToRgbString");
  function invertColor(colorStr) {
    const nums = (colorStr || "").match(/[\d.]+/g);
    if (!nums || nums.length < 3) return "#000000";
    const [r, g, b] = nums.map(Number);
    return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
  }
  __name(invertColor, "invertColor");
  function shiftHue(hex, degrees) {
    if (!degrees) return hex;
    const [r, g, b] = hexToRgbTuple(hex).map((c) => c / 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    if (max === min) return hex;
    const d = max - min;
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    let h2;
    if (max === r) h2 = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h2 = ((b - r) / d + 2) / 6;
    else h2 = ((r - g) / d + 4) / 6;
    return hslToHex((h2 * 360 + degrees) % 360, s, l);
  }
  __name(shiftHue, "shiftHue");
  function hslToHex(h2, s, l) {
    const str = hslToRgbString(h2, s, l);
    const [r, g, b] = (str.match(/\d+/g) || ["0", "0", "0"]).map(Number);
    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
  }
  __name(hslToHex, "hslToHex");
  function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  }
  __name(easeInOutSine, "easeInOutSine");
  function blinkAlphaAt(nowMs, speed, onOffBalance = 0.5) {
    if (speed <= 0) return 1;
    const period = 2500 / speed;
    const phase = nowMs % period / period;
    const fade = 0.15;
    const balance = Math.max(0.1, Math.min(0.9, onOffBalance));
    const hold = 1 - fade * 2;
    const p1 = hold * balance;
    const p2 = p1 + fade;
    const p3 = p2 + hold * (1 - balance);
    if (phase < p1) return 1;
    if (phase < p2) return 1 - easeInOutSine((phase - p1) / fade);
    if (phase < p3) return 0;
    return easeInOutSine((phase - p3) / fade);
  }
  __name(blinkAlphaAt, "blinkAlphaAt");
  function heatColor(heat, baseHex) {
    const h2 = Math.max(0, Math.min(1, heat));
    const [br, bg, bb] = hexToRgbTuple(baseHex);
    const luma = 0.299 * br + 0.587 * bg + 0.114 * bb;
    const desatMix = 0.7;
    const dim = 0.55;
    const coldR = ((1 - desatMix) * br + desatMix * luma) * dim;
    const coldG = ((1 - desatMix) * bg + desatMix * luma) * dim;
    const coldB = ((1 - desatMix) * bb + desatMix * luma) * dim;
    const warm = [255, 140, 40];
    const hot = [255, 70, 30];
    const white = [255, 240, 200];
    let r;
    let g;
    let b;
    if (h2 < 0.5) {
      const t = h2 / 0.5;
      const e = easeInOutSine(t);
      r = coldR + (warm[0] - coldR) * e;
      g = coldG + (warm[1] - coldG) * e;
      b = coldB + (warm[2] - coldB) * e;
      const nudge = 1 - Math.abs(t - 0.5) * 2;
      r = r * (1 - 0.25 * nudge) + br * 0.25 * nudge;
      g = g * (1 - 0.25 * nudge) + bg * 0.25 * nudge;
      b = b * (1 - 0.25 * nudge) + bb * 0.25 * nudge;
    } else if (h2 < 0.85) {
      const t = (h2 - 0.5) / 0.35;
      r = warm[0] + (hot[0] - warm[0]) * t;
      g = warm[1] + (hot[1] - warm[1]) * t;
      b = warm[2] + (hot[2] - warm[2]) * t;
    } else {
      const t = (h2 - 0.85) / 0.15;
      r = hot[0] + (white[0] - hot[0]) * t;
      g = hot[1] + (white[1] - hot[1]) * t;
      b = hot[2] + (white[2] - hot[2]) * t;
    }
    return `#${(1 << 24 | Math.round(r) << 16 | Math.round(g) << 8 | Math.round(b)).toString(16).slice(1)}`;
  }
  __name(heatColor, "heatColor");

  // effects.js
  var THUNDER_LIFE_MS = 280;
  var THUNDER_MAX_ANGLE = 0.95;
  var THUNDER_MIN_REACH = 150;
  var THUNDER_PASSES = 5;
  var THUNDER_MAX_LIVE = 3;
  var THUNDER_PALETTE = [
    [110, 165, 255],
    // blue
    [175, 120, 255],
    // purple
    [255, 95, 115],
    // red
    [255, 216, 120],
    // yellow
    [255, 255, 255]
    // white
  ];
  var THUNDER_BANDS = 14;
  function thunderRamp() {
    const pool = THUNDER_PALETTE.slice();
    const n = 2 + (Math.random() < 0.55 ? 1 : 0);
    const stops = [];
    for (let i = 0; i < n; i++) stops.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    return stops;
  }
  __name(thunderRamp, "thunderRamp");
  function thunderColorAt(stops, t) {
    if (stops.length === 1) return stops[0];
    const p = Math.max(0, Math.min(1, t)) * (stops.length - 1);
    const i = Math.min(stops.length - 2, Math.floor(p));
    const f = p - i;
    const a = stops[i];
    const b = stops[i + 1];
    return [
      Math.round(a[0] + (b[0] - a[0]) * f),
      Math.round(a[1] + (b[1] - a[1]) * f),
      Math.round(a[2] + (b[2] - a[2]) * f)
    ];
  }
  __name(thunderColorAt, "thunderColorAt");
  function spawnLetterParticle(e, char, anchor) {
    if (!char || !char.trim() || !anchor) return;
    let color = e.getActiveColor() || anchor.textColor;
    if (e.styleFor("popRainbow")) {
      color = hslToRgbString(e._popRainbowHue || 0, 0.85, 0.6);
      e._popRainbowHue = ((e._popRainbowHue || 0) + 33) % 360;
    }
    e.particles.push({
      char,
      x: anchor.x + (anchor.w || anchor.actualCharWidth) / 2,
      y: anchor.top,
      vx: (Math.random() - 0.5) * 120,
      vy: -150 - Math.random() * 130,
      rotation: (Math.random() - 0.5) * 4,
      alpha: 1,
      fontSize: anchor.fontSize,
      fontFamily: anchor.fontFamily,
      color,
      start: performance.now()
    });
  }
  __name(spawnLetterParticle, "spawnLetterParticle");
  function spawnFlamePixels(e, anchor, disintegrate = false) {
    if (!e.settings.flameTrail || !anchor) return;
    const count = disintegrate ? Math.floor(10 + Math.random() * 8) : Math.floor(6 + Math.random() * 6);
    let [r, g, b] = hexToRgbTuple(e.getActiveColor() || "#39ff14");
    if (disintegrate) {
      r = 255 - r;
      g = 255 - g;
      b = 255 - b;
    }
    const anchorW = anchor.w || anchor.actualCharWidth || 8;
    const cx = anchor.x + anchorW / 2;
    const cy = anchor.top + anchor.h / 2;
    const now = performance.now();
    for (let i = 0; i < count; i++) {
      const pX = anchor.x + Math.random() * anchorW;
      const pY = anchor.top + Math.random() * anchor.h;
      const varR = Math.max(0, Math.min(255, r + Math.floor((Math.random() - 0.5) * 70)));
      const varG = Math.max(0, Math.min(255, g + Math.floor((Math.random() - 0.5) * 70)));
      const varB = Math.max(0, Math.min(255, b + Math.floor((Math.random() - 0.5) * 70)));
      let vx;
      let vy;
      if (disintegrate) {
        const dx = pX - cx;
        const dy = pY - cy;
        const len = Math.hypot(dx, dy) || 1;
        const speed = 30 + Math.random() * 25;
        vx = dx / len * speed;
        vy = dy / len * speed - 10;
      } else {
        vx = (Math.random() - 0.5) * 20;
        vy = 0;
      }
      e.flamePixels.push({
        x: pX,
        y: pY,
        vx,
        vy,
        size: 2.5 + Math.random() * 3,
        color: `rgb(${varR}, ${varG}, ${varB})`,
        r: varR,
        g: varG,
        b: varB,
        alpha: 1,
        start: now
      });
    }
  }
  __name(spawnFlamePixels, "spawnFlamePixels");
  function maybeSpawnSpeedDemonSparks(e) {
    if (e.heat < 0.4) return;
    if (e.flamePixels.length > 120) return;
    const now = performance.now();
    const gap = 70 - 55 * e.heat;
    if (now - (e._lastSparkT || 0) < gap) return;
    e._lastSparkT = now;
    const active = e.animActive;
    if (!active) return;
    const anchorW = active.w || active.actualCharWidth || 8;
    const baseCount = 1 + Math.floor(e.heat * 3);
    const qty = Math.max(0, e.styleFor("speedDemonSparkQuantity") ?? 1);
    const count = Math.round(baseCount * qty);
    const [hr, hg, hb] = hexToRgbTuple(heatColor(Math.min(1, e.heat + 0.1), e.getBaseColor()));
    for (let i = 0; i < count; i++) {
      const pX = active.x + Math.random() * anchorW;
      const pY = active.top + Math.random() * (active.h * 0.4);
      const varR = Math.max(0, Math.min(255, hr + Math.floor((Math.random() - 0.5) * 40)));
      const varG = Math.max(0, Math.min(255, hg + Math.floor((Math.random() - 0.5) * 30)));
      const varB = Math.max(0, Math.min(255, hb + Math.floor((Math.random() - 0.5) * 20)));
      e.flamePixels.push({
        x: pX,
        y: pY,
        vx: (Math.random() - 0.5) * 12,
        vy: -20 - Math.random() * 30 - e.heat * 20,
        size: 1.5 + Math.random() * 2,
        color: `rgb(${varR}, ${varG}, ${varB})`,
        // Cached channels: the comet tail needs r/g/b at custom alphas every
        // frame, and re-parsing the formatted string per spark per frame is
        // needless when we have the numbers right here.
        r: varR,
        g: varG,
        b: varB,
        alpha: 1,
        start: now,
        // Marks this as a Speed Demon spark rather than a pixel-trail
        // particle sharing the same pool, so only these grow a tail.
        spark: true
      });
    }
  }
  __name(maybeSpawnSpeedDemonSparks, "maybeSpawnSpeedDemonSparks");
  function maybeSpawnComboShower(e) {
    const s = e.settings;
    if (!s.comboEnabled || !s.comboShower) return;
    if (!e.animActive) return;
    if ((e.comboLevel || 0) < 0.5) return;
    if (e.flamePixels.length > 140) return;
    const now = performance.now();
    const gap = 120 - 70 * e.comboLevel;
    if (now - (e._lastComboSparkT || 0) < gap) return;
    e._lastComboSparkT = now;
    const active = e.animActive;
    const w = active.w || active.actualCharWidth || 8;
    const [sr, sg, sb] = e.sampleRamp(Math.random());
    const count = 1 + Math.floor(e.comboLevel * 3);
    for (let i = 0; i < count; i++) {
      const dir = Math.random() * Math.PI * 2;
      const speed = 25 + Math.random() * 55 * e.comboLevel;
      e.flamePixels.push({
        x: active.x + Math.random() * w,
        y: active.top + Math.random() * active.h,
        vx: Math.cos(dir) * speed,
        vy: Math.sin(dir) * speed - 15,
        size: 1.5 + Math.random() * 2.5,
        color: `rgb(${Math.round(sr)}, ${Math.round(sg)}, ${Math.round(sb)})`,
        r: Math.round(sr),
        g: Math.round(sg),
        b: Math.round(sb),
        alpha: 1,
        start: now
      });
    }
  }
  __name(maybeSpawnComboShower, "maybeSpawnComboShower");
  function stardustArmed(e) {
    const s = e.settings;
    if (!s.stardustEnabled) return false;
    if (!e.animActive) return false;
    if (s.stardustAlwaysOn) return true;
    const idleFor = performance.now() - (e._lastActivityT || 0);
    return idleFor >= Math.max(0, s.stardustDelayMs ?? 2e3);
  }
  __name(stardustArmed, "stardustArmed");
  function maybeSpawnStardust(e) {
    if (!stardustArmed(e)) return;
    if (e.stardust.length >= 60) return;
    const now = performance.now();
    const rate = Math.max(0.1, e.settings.stardustRate ?? 1);
    if (now - (e._lastStardustT || 0) < 320 / rate) return;
    e._lastStardustT = now;
    const active = e.animActive;
    const anchorW = active.w || active.actualCharWidth || 8;
    const [sr, sg, sb] = e.sampleRamp(Math.random());
    const vary = /* @__PURE__ */ __name((c) => Math.max(0, Math.min(255, Math.round(c + (Math.random() - 0.5) * 50))), "vary");
    const orbit = !!e.settings.stardustOrbit;
    const meanRadius = Math.max(6, e.settings.stardustOrbitRadius ?? 22);
    e.stardust.push({
      // Across the caret's width, biased to its upper half, so motes read as
      // coming off the cursor rather than out of the line below it.
      x: active.x + Math.random() * anchorW,
      y: active.top + Math.random() * active.h * 0.6,
      vy: -8 - Math.random() * 14,
      sway: 2 + Math.random() * 5,
      swaySpeed: 0.6 + Math.random() * 0.9,
      phase: Math.random() * Math.PI * 2,
      twinkleSpeed: 2 + Math.random() * 3,
      size: 1 + Math.random() * 1.5,
      life: 2.2 + Math.random() * 2.2,
      color: `rgb(${vary(sr)}, ${vary(sg)}, ${vary(sb)})`,
      start: now,
      orbit,
      // Anchor refreshed from the live caret each frame so the swarm follows.
      // Seeded here so a mote outliving its caret keeps circling the last
      // known spot instead of jumping to the origin.
      ax: active.x + anchorW / 2,
      ay: active.top + active.h / 2,
      radius: meanRadius * (0.55 + Math.random() * 0.75),
      // Slower the wider the orbit, so the swarm isn't a rigid disc rotating
      // as one piece. Unhurried on purpose — fast reads as agitated.
      angSpeed: (Math.random() < 0.5 ? -1 : 1) * (0.32 + Math.random() * 0.55) * (22 / meanRadius),
      wobbleSpeed: 0.5 + Math.random() * 1.2,
      // Flattened orbits read as perspective rather than flat rings.
      squash: 0.45 + Math.random() * 0.4
    });
  }
  __name(maybeSpawnStardust, "maybeSpawnStardust");
  function boltPath(x0, y0, x1, y1, jitter) {
    let pts = [{ x: x0, y: y0 }, { x: x1, y: y1 }];
    let amp = jitter;
    for (let pass = 0; pass < THUNDER_PASSES; pass++) {
      const next = [pts[0]];
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1];
        const b = pts[i];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const len = Math.hypot(dx, dy) || 1;
        const off = (Math.random() - 0.5) * 2 * amp;
        next.push({ x: (a.x + b.x) / 2 + -dy / len * off, y: (a.y + b.y) / 2 + dx / len * off });
        next.push(b);
      }
      pts = next;
      amp *= 0.55;
    }
    return pts;
  }
  __name(boltPath, "boltPath");
  function pixelateBolt(pts, cell, seen, t0, t1) {
    const out = [];
    const segs = pts.length - 1;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1];
      const b = pts[i];
      const dist = Math.hypot(b.x - a.x, b.y - a.y);
      const steps = Math.max(1, Math.ceil(dist / (cell * 0.7)));
      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const gx = Math.round((a.x + (b.x - a.x) * t) / cell) * cell;
        const gy = Math.round((a.y + (b.y - a.y) * t) / cell) * cell;
        const key = gx + "," + gy;
        if (seen.has(key)) continue;
        seen.add(key);
        out.push({ x: gx, y: gy, t: t0 + (i - 1 + t) / segs * (t1 - t0) });
      }
    }
    return out;
  }
  __name(pixelateBolt, "pixelateBolt");
  function spawnThunderbolt(e, target) {
    if (!e.settings.thunderstrike) return;
    if (!target) return;
    while (e.thunderbolts.length >= THUNDER_MAX_LIVE) e.thunderbolts.shift();
    const w = target.w || target.actualCharWidth || 8;
    const tx = target.x + w / 2;
    const ty = target.top;
    const angle = (Math.random() - 0.5) * 2 * THUNDER_MAX_ANGLE;
    const clipTop = e._clipTop ?? 0;
    const rise = Math.max(THUNDER_MIN_REACH, ty - clipTop + 80);
    const reach = rise / Math.max(0.35, Math.cos(angle));
    const ox = tx + Math.sin(angle) * reach;
    const oy = ty - Math.cos(angle) * reach;
    const cell = Math.max(1, Math.round(e.settings.thunderstrikeSize ?? 2));
    const jitter = reach * 0.09;
    const seen = /* @__PURE__ */ new Set();
    const main = boltPath(ox, oy, tx, ty, jitter);
    let cells = pixelateBolt(main, cell, seen, 0, 1);
    const forks = (Math.random() < 0.75 ? 1 : 0) + (Math.random() < 0.2 ? 1 : 0);
    for (let f = 0; f < forks; f++) {
      const ft = 0.15 + Math.random() * 0.4;
      const at = main[Math.floor(main.length * ft)];
      if (!at) continue;
      const side = Math.random() < 0.5 ? -1 : 1;
      const spread = Math.max(-1.1, Math.min(1.1, angle + side * (0.45 + Math.random() * 0.55)));
      const len = reach * (0.15 + Math.random() * 0.18);
      cells = cells.concat(pixelateBolt(
        boltPath(at.x, at.y, at.x + Math.sin(spread) * len, at.y + Math.cos(spread) * len, len * 0.16),
        cell,
        seen,
        ft,
        Math.min(1, ft + 0.3)
      ));
    }
    cells = cells.filter((c) => c.y >= clipTop - cell);
    if (!cells.length) return;
    const ramp = thunderRamp();
    const bands = [];
    for (let i = 0; i < THUNDER_BANDS; i++) {
      const [br, bg, bb] = thunderColorAt(ramp, i / (THUNDER_BANDS - 1));
      bands.push({
        r: br,
        g: bg,
        b: bb,
        cr: lighten(br, 0.45),
        cg: lighten(bg, 0.45),
        cb: lighten(bb, 0.45),
        /** @type {any[]} */
        cells: []
      });
    }
    for (const c of cells) {
      const i = Math.max(0, Math.min(THUNDER_BANDS - 1, Math.round(c.t * (THUNDER_BANDS - 1))));
      bands[i].cells.push(c);
    }
    const usedBands = bands.filter((x) => x.cells.length > 0);
    const [er, eg, eb] = thunderColorAt(ramp, 1);
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const c of cells) {
      if (c.x < minX) minX = c.x;
      if (c.y < minY) minY = c.y;
      if (c.x > maxX) maxX = c.x;
      if (c.y > maxY) maxY = c.y;
    }
    const now = performance.now();
    e.thunderbolts.push({
      bands: usedBands,
      cell,
      tx,
      ty,
      minX,
      minY,
      maxX,
      maxY,
      // Sized off the caret, not the block size: at the finest setting a flash
      // a few blocks wide would be invisible, and the strike has to be seen
      // to land.
      flash: Math.max(cell * 2, (target.h || 16) * 0.4),
      er,
      eg,
      eb,
      // Real lightning is several discharges down one channel, so the bolt
      // steps between discrete brightness levels instead of fading smoothly.
      // Rolled at spawn — a per-frame random would beat against the frame rate
      // and turn a strobe into mush. Step 0 is forced full (the strike is the
      // brightest moment) and the floor is high, so it reads as a shimmer down
      // the channel rather than the bolt switching on and off.
      flicker: Array.from({ length: 8 }, (_, i) => i === 0 ? 1 : 0.6 + Math.random() * 0.4),
      start: now
    });
    const sparks = 3 + Math.floor(Math.random() * 3);
    const sparkColor = `rgb(${lighten(er, 0.45)}, ${lighten(eg, 0.45)}, ${lighten(eb, 0.45)})`;
    for (let i = 0; i < sparks; i++) {
      const dir = (Math.random() - 0.5) * Math.PI;
      const speed = 30 + Math.random() * 45;
      e.flamePixels.push({
        x: tx + (Math.random() - 0.5) * w,
        y: ty + Math.random() * (target.h || 16) * 0.4,
        vx: Math.sin(dir) * speed,
        vy: -Math.abs(Math.cos(dir)) * speed * 0.8,
        size: Math.max(1, cell * (0.5 + Math.random() * 0.5)),
        color: sparkColor,
        r: lighten(er, 0.45),
        g: lighten(eg, 0.45),
        b: lighten(eb, 0.45),
        alpha: 1,
        start: now
      });
    }
  }
  __name(spawnThunderbolt, "spawnThunderbolt");
  function drawThunderbolts(e) {
    if (!e.thunderbolts.length) return;
    const ctx = e.ctx;
    const now = performance.now();
    const strength = Math.max(0.1, Math.min(1, e.settings.thunderstrikeStrength ?? 0.5));
    const halo = !!e.settings.thunderstrikeHalo;
    e.thunderbolts = e.thunderbolts.filter((b) => {
      const t = (now - b.start) / THUNDER_LIFE_MS;
      if (t >= 1) return false;
      const fade = t < 0.12 ? 1 : 1 - (t - 0.12) / 0.88;
      const step = Math.min(b.flicker.length - 1, Math.floor(t * b.flicker.length));
      const alpha = Math.max(0, fade * b.flicker[step] * strength);
      if (alpha <= 0.02) return true;
      const cell = b.cell;
      ctx.save();
      if (halo) {
        const pad2 = Math.max(1, cell * 0.75);
        for (const band of b.bands) {
          ctx.fillStyle = `rgba(${band.r}, ${band.g}, ${band.b}, ${alpha * 0.16})`;
          for (const c of band.cells) ctx.fillRect(c.x - pad2, c.y - pad2, cell + pad2 * 2, cell + pad2 * 2);
        }
      }
      for (const band of b.bands) {
        ctx.fillStyle = `rgba(${band.cr}, ${band.cg}, ${band.cb}, ${alpha})`;
        for (const c of band.cells) ctx.fillRect(c.x, c.y, cell, cell);
      }
      const flash = 1 - Math.min(1, t / 0.4);
      if (flash > 0) {
        const size = b.flash * (0.5 + flash);
        ctx.fillStyle = `rgba(${lighten(b.er, 0.45)}, ${lighten(b.eg, 0.45)}, ${lighten(b.eb, 0.45)}, ${alpha * flash * 0.4})`;
        ctx.fillRect(b.tx - size / 2, b.ty - size / 2, size, size);
      }
      ctx.restore();
      const pad = Math.max(8, cell * 3) + b.flash;
      e.markDirty(b.minX - pad, b.minY - pad, b.maxX - b.minX + cell + pad * 2, b.maxY - b.minY + cell + pad * 2);
      return true;
    });
  }
  __name(drawThunderbolts, "drawThunderbolts");
  function drawLetterParticles(e) {
    const ctx = e.ctx;
    const now = performance.now();
    e.particles = e.particles.filter((p) => {
      const elapsed = (now - p.start) / 1e3;
      if (elapsed > 0.45) return false;
      p.alpha = 1 - elapsed / 0.45;
      const curX = p.x + p.vx * elapsed;
      const curY = p.y + p.vy * elapsed + 0.5 * 320 * elapsed * elapsed;
      const curRot = p.rotation * elapsed * 5;
      const ext = (p.fontSize || 16) * 1.4;
      e.markDirty(curX - ext, curY - ext, ext * 2, ext * 2);
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;
      ctx.font = `bold ${p.fontSize * 0.9}px ${p.fontFamily}`;
      ctx.translate(curX, curY);
      ctx.rotate(curRot);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(p.char, 0, 0);
      ctx.restore();
      return true;
    });
  }
  __name(drawLetterParticles, "drawLetterParticles");
  function drawFlamePixels(e) {
    const ctx = e.ctx;
    const now = performance.now();
    const trailAmt = Math.max(0, e.styleFor("speedDemonSparkTrail") || 0);
    e.flamePixels = e.flamePixels.filter((p) => {
      const elapsed = (now - p.start) / 1e3;
      if (elapsed > 0.4) return false;
      p.alpha = 1 - Math.pow(elapsed / 0.4, 2);
      const curX = p.x + p.vx * elapsed;
      const curY = p.y + p.vy * elapsed;
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      if (p.spark && trailAmt > 0) {
        const speed = Math.hypot(p.vx, p.vy) || 1;
        const tailLen = trailAmt * (0.5 + Math.min(1, speed / 45) * 0.5);
        const tailX = curX - p.vx / speed * tailLen;
        const tailY = curY - p.vy / speed * tailLen;
        const lw = Math.max(1, p.size * 0.85);
        e.markDirty(
          Math.min(curX, tailX) - lw,
          Math.min(curY, tailY) - lw,
          Math.abs(tailX - curX) + lw * 2,
          Math.abs(tailY - curY) + lw * 2
        );
        const grad = ctx.createLinearGradient(curX, curY, tailX, tailY);
        grad.addColorStop(0, `rgba(${p.r}, ${p.g}, ${p.b}, 0.9)`);
        grad.addColorStop(1, `rgba(${p.r}, ${p.g}, ${p.b}, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = lw;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(curX, curY);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }
      ctx.fillStyle = p.color;
      ctx.fillRect(curX, curY, p.size, p.size);
      e.markDirty(curX - 1, curY - 1, (p.size || 1) + 2, (p.size || 1) + 2);
      ctx.restore();
      return true;
    });
  }
  __name(drawFlamePixels, "drawFlamePixels");
  function paintMote(e, p, x, y, alpha) {
    const ctx = e.ctx;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = p.color;
    ctx.fillRect(x, y, p.size, p.size);
    ctx.restore();
    e.markDirty(x - 1, y - 1, p.size + 2, p.size + 2);
    return true;
  }
  __name(paintMote, "paintMote");
  function drawStardust(e) {
    if (!e.stardust.length) return;
    const now = performance.now();
    e.stardust = e.stardust.filter((p) => {
      const elapsed = (now - p.start) / 1e3;
      if (elapsed > p.life) return false;
      const t = elapsed / p.life;
      const envelope = t < 0.2 ? t / 0.2 : 1 - (t - 0.2) / 0.8;
      const twinkle = 0.72 + 0.28 * Math.sin(elapsed * p.twinkleSpeed + p.phase);
      const alpha = Math.max(0, envelope * twinkle);
      if (alpha <= 0.01) return true;
      if (p.orbit) {
        const anchor = e.animActive;
        if (anchor) {
          p.ax = anchor.x + (anchor.w || anchor.actualCharWidth || 8) / 2;
          p.ay = anchor.top + anchor.h / 2;
        }
        const ang = p.phase + elapsed * p.angSpeed;
        const r = p.radius * (1 + Math.sin(elapsed * p.wobbleSpeed + p.phase) * 0.15);
        return paintMote(e, p, p.ax + Math.cos(ang) * r, p.ay + Math.sin(ang) * r * p.squash, alpha);
      }
      return paintMote(
        e,
        p,
        p.x + Math.sin(elapsed * p.swaySpeed + p.phase) * p.sway,
        p.y + p.vy * elapsed,
        alpha
      );
    });
  }
  __name(drawStardust, "drawStardust");

  // draw.js
  var DIRTY_RECT_CLEAR = true;
  function gradientStops(e) {
    const s = e.settings;
    const n = Math.max(2, Math.min(4, Math.round(s.gradientCount || 2)));
    const prefix = e.isDarkTheme() ? "gradientDark" : "gradientLight";
    const out = [];
    for (let i = 1; i <= n; i++) {
      let hex = e.tintColor(s[prefix + i]);
      if (s.speedDemon && e.heat > 0) hex = e.heatColorFor(e.heat, hex);
      out.push(hex);
    }
    return out;
  }
  __name(gradientStops, "gradientStops");
  function sampleRamp(e, pos, cyclic = false) {
    if (!e.settings.gradientEnabled) return hexToRgbTuple(e.getActiveColor() || "#39ff14");
    const stops = gradientStops(e);
    const lerp = /* @__PURE__ */ __name((a, b, f) => [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f], "lerp");
    if (cyclic) {
      const wrapped = (pos % 1 + 1) % 1;
      const p2 = wrapped * stops.length;
      const i2 = Math.floor(p2) % stops.length;
      const j = (i2 + 1) % stops.length;
      return lerp(hexToRgbTuple(stops[i2]), hexToRgbTuple(stops[j]), p2 - Math.floor(p2));
    }
    const p = Math.max(0, Math.min(1, pos)) * (stops.length - 1);
    const i = Math.min(stops.length - 2, Math.floor(p));
    return lerp(hexToRgbTuple(stops[i]), hexToRgbTuple(stops[i + 1]), p - i);
  }
  __name(sampleRamp, "sampleRamp");
  function createCursorGradient(e, x, y, w, h2, alpha) {
    const ctx = e.ctx;
    const stops = gradientStops(e);
    const horizontal = w > h2;
    const span = horizontal ? w : h2;
    if (!(span > 0)) return hexToRgba(stops[0], alpha);
    const grad = horizontal ? ctx.createLinearGradient(x, y, x + w, y) : ctx.createLinearGradient(x, y, x, y + h2);
    for (let i = 0; i < stops.length; i++) {
      const [r, g, b] = hexToRgbTuple(stops[i]);
      grad.addColorStop(i / (stops.length - 1), `rgba(${r}, ${g}, ${b}, ${alpha})`);
    }
    return grad;
  }
  __name(createCursorGradient, "createCursorGradient");
  function cursorPaint(e, x, y, w, h2, color, alpha) {
    if (!e.settings.gradientEnabled) return hexToRgba(color, alpha);
    return createCursorGradient(e, x, y, w, h2, alpha);
  }
  __name(cursorPaint, "cursorPaint");
  function createEnergyGradient(e, x, y, w, h2, baseColor, alpha) {
    const ctx = e.ctx;
    const speed = e.settings.energySpeed ?? 1;
    const t = performance.now() / 1e3 * speed;
    const base = hexToRgbTuple(baseColor);
    const rampOn = !!e.settings.gradientEnabled;
    const aurora = rampOn && !!e.settings.energyAurora;
    const grad = ctx.createLinearGradient(x + w / 2, y + h2, x + w / 2, y);
    const stops = aurora ? 20 : rampOn ? 12 : 6;
    for (let i = 0; i <= stops; i++) {
      const pos = i / stops;
      const pulse = 0.5 + 0.5 * Math.sin((pos - t * 0.6) * Math.PI * 2);
      let bs;
      if (aurora) {
        const warp = Math.sin(pos * 3.1 + t * 0.85) * 0.26 + Math.sin(pos * 5.7 - t * 0.55) * 0.14 + Math.sin(pos * 1.3 + t * 1.25) * 0.2;
        const near = sampleRamp(e, pos - t * 0.3 + warp, true);
        const far = sampleRamp(e, pos * 0.45 + t * 0.17 + 0.37, true);
        const mix = (0.5 + 0.5 * Math.sin(pos * 2.3 + t * 0.7)) * 0.6;
        bs = [
          near[0] + (far[0] - near[0]) * mix,
          near[1] + (far[1] - near[1]) * mix,
          near[2] + (far[2] - near[2]) * mix
        ];
      } else {
        bs = rampOn ? sampleRamp(e, pos - t * 0.35, true) : base;
      }
      let r = bs[0];
      let g = bs[1];
      let b = bs[2];
      const punch = aurora ? 0.45 : 1;
      if (pulse > 0.5) {
        const k = (pulse - 0.5) * 2 * punch;
        r += (255 - r) * k * 0.55;
        g += (255 - g) * k * 0.55;
        b += (255 - b) * k * 0.55;
      } else {
        const k = (0.5 - pulse) * 2 * punch;
        r -= r * k * 0.45;
        g -= g * k * 0.45;
        b -= b * k * 0.45;
      }
      if (!rampOn) {
        const shift = 14;
        r += Math.sin(t * 0.7 + pos * 6) * shift;
        g += Math.sin(t * 0.7 + pos * 6 + 2.1) * shift;
        b += Math.sin(t * 0.7 + pos * 6 + 4.2) * shift;
      }
      r = Math.max(0, Math.min(255, Math.round(r)));
      g = Math.max(0, Math.min(255, Math.round(g)));
      b = Math.max(0, Math.min(255, Math.round(b)));
      grad.addColorStop(pos, `rgba(${r}, ${g}, ${b}, ${alpha})`);
    }
    return grad;
  }
  __name(createEnergyGradient, "createEnergyGradient");
  function blinkPhase(e, now) {
    if (!e.settings.blinkingEnabled) return 1;
    let holdMs = 0;
    if (e.settings.smoothEnabled && e.settings.smoothStopBlinking) holdMs = 450;
    const delayMs = Math.max(0, e.settings.blinkDelayMs ?? 0);
    if (delayMs > holdMs) holdMs = delayMs;
    if (holdMs > 0 && now - e.lastMoveTime < holdMs) return 1;
    return blinkAlphaAt(now, Math.max(0, e.settings.blinkSpeed), e.settings.blinkOnOffBalance ?? 0.5);
  }
  __name(blinkPhase, "blinkPhase");
  function blinkAlpha(e, now) {
    if (e.settings.blinkBreathing) return 1;
    return blinkPhase(e, now);
  }
  __name(blinkAlpha, "blinkAlpha");
  function breathScale(e, now) {
    if (!e.settings.blinkingEnabled || !e.settings.blinkBreathing) return 1;
    const depth = Math.max(0, Math.min(0.9, e.settings.blinkBreathDepth ?? 0.2));
    return 1 - depth * (1 - blinkPhase(e, now));
  }
  __name(breathScale, "breathScale");
  function underlineThickness(e, lineHeight) {
    const h2 = Math.max(1, Math.round(lineHeight || 0));
    const px = e.settings.underlineWidthPx || 0;
    if (px > 0) return Math.max(1, Math.min(Math.round(px), h2));
    return Math.max(2, Math.round(h2 * 0.15));
  }
  __name(underlineThickness, "underlineThickness");
  function forEachTrailPoint(e, cb) {
    if (!e.settings.crtEffect) return;
    const now = performance.now();
    const fade = Math.max(50, e.settings.trailFadeMs);
    for (const p of e.trail) {
      const age = (now - p.t) / fade;
      const alpha = Math.max(0, 1 - age) * 0.55;
      if (alpha > 0.02) {
        e.markDirty(p.x - 14, p.y - 14, p.w + 28, p.h + 28);
        cb(p, alpha);
      }
    }
  }
  __name(forEachTrailPoint, "forEachTrailPoint");
  function fillCursorShape(e, ctx, rx, ry, rw, rh) {
    const corners = e.smearCorners() || {
      tl: { x: rx, y: ry },
      tr: { x: rx + rw, y: ry },
      br: { x: rx + rw, y: ry + rh },
      bl: { x: rx, y: ry + rh }
    };
    ctx.beginPath();
    ctx.moveTo(corners.tl.x, corners.tl.y);
    ctx.lineTo(corners.tr.x, corners.tr.y);
    ctx.lineTo(corners.br.x, corners.br.y);
    ctx.lineTo(corners.bl.x, corners.bl.y);
    ctx.closePath();
    ctx.fill();
  }
  __name(fillCursorShape, "fillCursorShape");
  function drawTrail(e) {
    if (!e.settings.crtEffect) return;
    const ctx = e.ctx;
    const style = e.styleFor("cursorStyle");
    const color = e.getActiveColor();
    const opacity = Math.max(0, Math.min(1, e.settings.cursorOpacity ?? 1)) * e.idleAlpha();
    const hollow = style === "Box" && e.styleFor("boxHollow");
    const strokeW = hollow ? Math.max(1, Math.min(8, e.settings.boxHollowWidth || 2)) : 0;
    forEachTrailPoint(e, (p, alpha) => {
      if (style === "Underline") {
        const uThickness = underlineThickness(e, p.h);
        const ty = p.y + p.h - uThickness;
        ctx.fillStyle = cursorPaint(e, p.x, ty, p.w, uThickness, color, alpha * opacity);
        ctx.fillRect(p.x, ty, p.w, uThickness);
        return;
      }
      if (hollow) {
        ctx.strokeStyle = cursorPaint(e, p.x, p.y, p.w, p.h, color, alpha * opacity);
        ctx.lineWidth = strokeW;
        const inset = strokeW / 2;
        ctx.strokeRect(p.x + inset, p.y + inset, Math.max(0, p.w - strokeW), Math.max(0, p.h - strokeW));
        return;
      }
      ctx.fillStyle = cursorPaint(e, p.x, p.y, p.w, p.h, color, alpha * opacity);
      ctx.fillRect(p.x, p.y, p.w, p.h);
    });
  }
  __name(drawTrail, "drawTrail");
  function drawLineCaret(e, isUnderline) {
    const ctx = e.ctx;
    const settings = e.settings;
    const active = e.animActive;
    const now = performance.now();
    const trailColor = e.getActiveColor();
    const opacity = Math.max(0, Math.min(1, settings.cursorOpacity ?? 1)) * e.idleAlpha();
    if (!active) return;
    const alpha = blinkAlpha(e, now);
    const color = e.getActiveColor() || active.textColor || "#ffffff";
    ctx.save();
    if (settings.glow || comboGlow(e) > 0) {
      ctx.shadowColor = color;
      ctx.shadowBlur = (8 + comboGlow(e) * 14) * alpha;
    }
    let rx;
    let ry;
    let rw;
    let rh;
    if (isUnderline) {
      const uThickness = underlineThickness(e, active.h);
      rx = active.x;
      ry = active.top + active.h - uThickness;
      rw = active.actualCharWidth;
      rh = uThickness;
    } else {
      rx = active.x;
      ry = active.top;
      rw = active.w;
      rh = active.h;
    }
    ctx.fillStyle = settings.energyEffect ? createEnergyGradient(e, rx, ry, rw, rh, color, 0.9 * alpha * opacity) : cursorPaint(e, rx, ry, rw, rh, color, 0.9 * alpha * opacity);
    fillCursorShape(e, ctx, rx, ry, rw, rh);
    if (!isUnderline && settings.lineSerifs) {
      const stem = rw;
      const serifThickness = Math.max(1, Math.round(stem * 0.9));
      const charW = active.actualCharWidth;
      const rawSpan = charW && charW > 0 ? charW : stem * 7;
      const serifSpan = Math.max(stem * 3, Math.min(rawSpan, stem * 10));
      const serifX = active.x + stem / 2 - serifSpan / 2;
      ctx.fillRect(serifX, active.top, serifSpan, serifThickness);
      ctx.fillRect(serifX, active.top + active.h - serifThickness, serifSpan, serifThickness);
    }
    ctx.restore();
  }
  __name(drawLineCaret, "drawLineCaret");
  function drawBoxCaret(e) {
    const ctx = e.ctx;
    const settings = e.settings;
    const now = performance.now();
    const color = e.getActiveColor();
    const opacity = Math.max(0, Math.min(1, settings.cursorOpacity ?? 1)) * e.idleAlpha();
    const hollow = e.styleFor("boxHollow");
    const strokeW = hollow ? Math.max(1, Math.min(8, settings.boxHollowWidth || 2)) : 0;
    const active = e.animActive;
    if (!active) return;
    const alpha = blinkAlpha(e, now);
    const renderW = active.w;
    ctx.save();
    if (settings.glow || comboGlow(e) > 0) {
      ctx.shadowColor = color;
      ctx.shadowBlur = (10 + comboGlow(e) * 16) * alpha;
    }
    const paintStyle = settings.energyEffect ? createEnergyGradient(e, active.x, active.top, renderW, active.h, color, 0.9 * alpha * opacity) : cursorPaint(e, active.x, active.top, renderW, active.h, color, 0.9 * alpha * opacity);
    if (hollow) {
      const corners = e.smearCorners() || {
        tl: { x: active.x, y: active.top },
        tr: { x: active.x + renderW, y: active.top },
        br: { x: active.x + renderW, y: active.top + active.h },
        bl: { x: active.x, y: active.top + active.h }
      };
      ctx.beginPath();
      ctx.moveTo(corners.tl.x, corners.tl.y);
      ctx.lineTo(corners.tr.x, corners.tr.y);
      ctx.lineTo(corners.br.x, corners.br.y);
      ctx.lineTo(corners.bl.x, corners.bl.y);
      ctx.closePath();
      const stretch = settings.smearFillHollow ? e._smearStretch || 0 : 0;
      if (stretch > 0.01) {
        ctx.save();
        ctx.globalAlpha = stretch;
        ctx.fillStyle = paintStyle;
        ctx.fill();
        ctx.restore();
      }
      ctx.strokeStyle = paintStyle;
      ctx.lineWidth = strokeW;
      ctx.lineJoin = "miter";
      ctx.stroke();
    } else {
      ctx.fillStyle = paintStyle;
      fillCursorShape(e, ctx, active.x, active.top, renderW, active.h);
    }
    ctx.restore();
    const displayChar = e.pending ? e.pending.holdChar : active.holdChar || active.char;
    if (!hollow && settings.showChar && displayChar) {
      ctx.save();
      ctx.globalAlpha = Math.min(1, 0.3 + alpha * 0.7);
      ctx.fillStyle = invertColor(active.textColor);
      ctx.font = `${active.fontSize}px ${active.fontFamily}`;
      const metrics = ctx.measureText(displayChar);
      const ascent = metrics.fontBoundingBoxAscent ?? metrics.actualBoundingBoxAscent ?? active.fontSize * 0.8;
      const descent = metrics.fontBoundingBoxDescent ?? metrics.actualBoundingBoxDescent ?? active.fontSize * 0.2;
      const leading = active.h - (ascent + descent);
      ctx.textAlign = "center";
      ctx.textBaseline = "alphabetic";
      ctx.fillText(displayChar, active.x + renderW / 2, active.top + ascent + leading / 2);
      ctx.restore();
    }
  }
  __name(drawBoxCaret, "drawBoxCaret");
  function comboGlow(e) {
    if (!e.settings.comboEnabled || !e.settings.comboGlow) return 0;
    return e.comboLevel || 0;
  }
  __name(comboGlow, "comboGlow");
  function drawGhost(e) {
    const g = e._ghost;
    if (!e.settings.ghostEnabled || !g) return;
    if (e.styleFor("cursorStyle") === "None") return;
    if (Math.abs(g.x - e.animActive.x) < 0.5 && Math.abs(g.top - e.animActive.top) < 0.5) return;
    const ctx = e.ctx;
    const alpha = Math.max(0, Math.min(1, e.settings.ghostOpacity ?? 0.3)) * e.idleAlpha();
    if (alpha <= 0.01) return;
    const isUnderline = e.styleFor("cursorStyle") === "Underline";
    const h2 = isUnderline ? underlineThickness(e, g.h) : g.h;
    const y = isUnderline ? g.top + g.h - h2 : g.top;
    const w = isUnderline ? e.animActive.actualCharWidth || g.w : g.w;
    ctx.save();
    ctx.fillStyle = hexToRgba(e.getActiveColor() || "#39ff14", alpha);
    ctx.fillRect(g.x, y, w, h2);
    ctx.restore();
    e.markDirty(g.x - 4, y - 4, w + 8, h2 + 8);
  }
  __name(drawGhost, "drawGhost");
  function draw(e) {
    const ctx = e.ctx;
    if (!ctx || !e.canvas) return;
    const win = e.canvas.ownerDocument.defaultView || window;
    const vw = win.innerWidth;
    const vh = win.innerHeight;
    if (!DIRTY_RECT_CLEAR || e._dirtyFull) {
      ctx.clearRect(0, 0, vw, vh);
      e._dirtyFull = false;
    } else if (e._dirtyPrev) {
      const p = e._dirtyPrev;
      ctx.clearRect(p.x, p.y, p.w, p.h);
    }
    e._dirty = null;
    const shake = e.shakeOffset();
    if (shake) {
      ctx.save();
      ctx.translate(shake.x, shake.y);
      e._dirtyFull = true;
    }
    drawTrail(e);
    drawGhost(e);
    drawLetterParticles(e);
    drawStardust(e);
    drawFlamePixels(e);
    drawThunderbolts(e);
    const a = e.animActive;
    if (a) {
      let x0 = a.x;
      let y0 = a.top;
      let x1 = a.x + Math.max(a.w || 0, a.actualCharWidth || 0);
      let y1 = a.top + (a.h || 0);
      const q = e.smearQuad;
      if (q) {
        for (const k in q) {
          if (q[k].x < x0) x0 = q[k].x;
          if (q[k].y < y0) y0 = q[k].y;
          if (q[k].x > x1) x1 = q[k].x;
          if (q[k].y > y1) y1 = q[k].y;
        }
      }
      const pad = 24 + Math.max(0, e.settings.caretWidthPx || 0);
      e.markDirty(x0 - pad, y0 - pad, x1 - x0 + pad * 2, y1 - y0 + pad * 2);
    }
    const breath = a ? breathScale(e, performance.now()) : 1;
    const breathing = breath < 0.999;
    if (breathing) {
      const cx = a.x + Math.max(a.w || 0, a.actualCharWidth || 0) / 2;
      const cy = a.top + (a.h || 0) / 2;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(breath, breath);
      ctx.translate(-cx, -cy);
    }
    switch (e.styleFor("cursorStyle")) {
      // Paints no body at all: Thymer's own caret stays visible (plugin.js keeps
      // the hide-native class off for this style) and every effect layers on
      // top of it. The trail above is deliberately outside this switch so it
      // still runs here.
      case "None":
        break;
      case "Line":
        drawLineCaret(e, false);
        break;
      case "Underline":
        drawLineCaret(e, true);
        break;
      default:
        drawBoxCaret(e);
        break;
    }
    if (breathing) ctx.restore();
    if (shake) ctx.restore();
    const d = e._dirty;
    if (!d) {
      e._dirtyPrev = null;
      return;
    }
    const cx0 = Math.max(0, Math.floor(d.x0) - 2);
    const cy0 = Math.max(0, Math.floor(d.y0) - 2);
    const cx1 = Math.min(vw, Math.ceil(d.x1) + 2);
    const cy1 = Math.min(vh, Math.ceil(d.y1) + 2);
    e._dirtyPrev = cx1 > cx0 && cy1 > cy0 ? { x: cx0, y: cy0, w: cx1 - cx0, h: cy1 - cy0 } : null;
  }
  __name(draw, "draw");

  // host.js
  var MODAL_SEL = ".cmdpal--dialog, .dropdown, .modal-container, .link-menu-visible";
  function ensureCanvas(e) {
    const doc = e._doc || document;
    try {
      for (const stray of doc.querySelectorAll("." + WRAP_CLASS)) {
        if (stray !== e.canvasWrapper) stray.remove();
      }
      for (const stray of doc.querySelectorAll("." + TORCH_CLASS)) {
        if (stray !== e.overlay) stray.remove();
      }
    } catch {
    }
    if (e.canvasWrapper && e.canvasWrapper.isConnected) return;
    const wrap = doc.createElement("div");
    wrap.className = WRAP_CLASS;
    wrap.style.zIndex = String(e.zIndex || 60);
    const host = doc.querySelector(".app-chrome-panels") || doc.body;
    host.appendChild(wrap);
    const canvas = doc.createElement("canvas");
    canvas.className = CANVAS_CLASS;
    wrap.appendChild(canvas);
    e.canvasWrapper = wrap;
    e.canvas = canvas;
    e.ctx = canvas.getContext("2d");
    e._lastWrapperRect = "";
    resizeCanvas(e);
  }
  __name(ensureCanvas, "ensureCanvas");
  function destroyCanvas(e) {
    try {
      e.canvasWrapper?.remove();
    } catch {
    }
    e.canvasWrapper = null;
    e.canvas = null;
    e.ctx = null;
    e._lastWrapperRect = "";
  }
  __name(destroyCanvas, "destroyCanvas");
  function resizeCanvas(e) {
    if (!e.canvas || !e.ctx) return;
    const win = e.canvas.ownerDocument.defaultView || window;
    const dpr = win.devicePixelRatio || 1;
    const w = win.innerWidth;
    const h2 = win.innerHeight;
    e.canvas.style.width = w + "px";
    e.canvas.style.height = h2 + "px";
    e.canvas.width = Math.max(1, Math.round(w * dpr));
    e.canvas.height = Math.max(1, Math.round(h2 * dpr));
    e.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    e._dirty = null;
    e._dirtyPrev = null;
    e._dirtyFull = false;
  }
  __name(resizeCanvas, "resizeCanvas");
  function applyClipRect(e, r) {
    const wrap = e.canvasWrapper;
    if (!wrap || !r) return;
    const sig = `${Math.round(r.top)}|${Math.round(r.left)}|${Math.round(r.width)}|${Math.round(r.height)}`;
    if (sig === e._lastWrapperRect) return;
    e._lastWrapperRect = sig;
    wrap.style.top = r.top + "px";
    wrap.style.left = r.left + "px";
    wrap.style.width = Math.max(0, r.width) + "px";
    wrap.style.height = Math.max(0, r.height) + "px";
    if (e.canvas) {
      e.canvas.style.left = -r.left + "px";
      e.canvas.style.top = -r.top + "px";
    }
  }
  __name(applyClipRect, "applyClipRect");
  function isVisiblyRendered(el2) {
    if (!el2) return false;
    const win = el2.ownerDocument.defaultView || window;
    const cs = win.getComputedStyle(el2);
    if (cs.display === "none" || cs.visibility === "hidden") return false;
    if (parseFloat(cs.opacity) <= 0.01) return false;
    return true;
  }
  __name(isVisiblyRendered, "isVisiblyRendered");
  function chromeInsets(e, doc) {
    const now = Date.now();
    const c = e._chromeCache;
    if (c && c.doc === doc && now - c.t < 500) return c;
    const win = doc.defaultView || window;
    let top = 0;
    let bottom = win.innerHeight;
    const tb = doc.querySelector(".title-bar");
    if (tb) {
      const b = tb.getBoundingClientRect();
      if (b.height > 0 && b.top <= b.height) top = Math.max(top, b.bottom);
    }
    const sb = doc.querySelector(".statusbar--status-bar");
    if (sb && isVisiblyRendered(sb)) {
      const b = sb.getBoundingClientRect();
      if (b.height > 0) bottom = Math.min(bottom, b.top);
    }
    e._chromeCache = { doc, t: now, top, bottom };
    return e._chromeCache;
  }
  __name(chromeInsets, "chromeInsets");
  function getFullViewportRect(e, doc) {
    const win = doc.defaultView || window;
    const { top, bottom } = chromeInsets(e, doc);
    if (bottom <= top) return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
    return { top, bottom, left: 0, right: win.innerWidth, width: win.innerWidth, height: bottom - top };
  }
  __name(getFullViewportRect, "getFullViewportRect");
  function getPanelRect(e, doc) {
    const panel2 = doc.querySelector(FOCUSED_PANEL_SEL);
    const el2 = panel2 && panel2.querySelector(".panel-scroller-y") || panel2;
    if (!el2) return null;
    const b = el2.getBoundingClientRect();
    const { top: cTop, bottom: cBottom } = chromeInsets(e, doc);
    const top = Math.max(b.top, cTop);
    const bottom = Math.min(b.bottom, cBottom);
    if (bottom <= top || b.right <= b.left) return null;
    return { top, bottom, left: b.left, right: b.right, width: b.right - b.left, height: bottom - top };
  }
  __name(getPanelRect, "getPanelRect");
  function resolveClipChain(el2) {
    const chain = [];
    try {
      const doc = el2.ownerDocument;
      const win = doc.defaultView || window;
      let curPos = win.getComputedStyle(el2).position;
      if (curPos === "fixed") return chain;
      let node = el2.parentElement;
      let guard = 0;
      while (node && node !== doc.body && node !== doc.documentElement && guard++ < 24) {
        const st = win.getComputedStyle(node);
        const positioned = st.position !== "static";
        const clips = st.overflowX !== "visible" || st.overflowY !== "visible";
        if (clips && (curPos !== "absolute" || positioned)) chain.push(node);
        if (positioned) {
          if (st.position === "fixed") break;
          curPos = st.position;
        }
        node = node.parentElement;
      }
    } catch {
      return [];
    }
    return chain;
  }
  __name(resolveClipChain, "resolveClipChain");
  function getCaretClipRect(e, doc) {
    const active = doc && doc.activeElement;
    if (!active || active === doc.body) return null;
    if (e._clipChainFor !== active) {
      e._clipChainFor = active;
      e._clipChain = resolveClipChain(active);
    }
    const chain = e._clipChain;
    if (!chain || !chain.length) return null;
    const win = doc.defaultView || window;
    const { top: chromeTop, bottom: chromeBottom } = chromeInsets(e, doc);
    let top = chromeTop;
    let left = 0;
    let bottom = chromeBottom;
    let right = win.innerWidth;
    for (const el2 of chain) {
      if (!el2.isConnected) {
        e._clipChainFor = null;
        return null;
      }
      const b = el2.getBoundingClientRect();
      if (b.top > top) top = b.top;
      if (b.left > left) left = b.left;
      if (b.bottom < bottom) bottom = b.bottom;
      if (b.right < right) right = b.right;
    }
    if (bottom <= top || right <= left) return null;
    return { top, bottom, left, right, width: right - left, height: bottom - top };
  }
  __name(getCaretClipRect, "getCaretClipRect");
  function currentClipRect(e, fromThymerCaret) {
    const doc = e._doc || document;
    return (fromThymerCaret ? getPanelRect(e, doc) : null) || getCaretClipRect(e, doc) || getFullViewportRect(e, doc);
  }
  __name(currentClipRect, "currentClipRect");
  function installWakeListeners(e) {
    const doc = e._doc || document;
    const win = doc.defaultView || window;
    const onActivity = /* @__PURE__ */ __name(() => e.markActivity(), "onActivity");
    const onMouseMove = /* @__PURE__ */ __name((ev) => {
      e.mouseX = ev.clientX;
      e.mouseY = ev.clientY;
      e.lastMouseMove = Date.now();
      e.wakeTorch();
    }, "onMouseMove");
    const onKeyDown = /* @__PURE__ */ __name((ev) => {
      e.markActivity();
      const inEditor = e._caretSource === "thymer" || inPreviewBox(e._doc || document);
      if (!inEditor) return;
      if (ev.key === "Backspace" || ev.key === "Delete") {
        e._deletePending = performance.now();
        e.kickShake();
      }
      if (ev.key === "Enter") e._enterPending = performance.now();
      if (typeof ev.key === "string" && ev.key.length === 1 && !ev.ctrlKey && !ev.metaKey) {
        e._lastPrintableKey = ev.key;
      }
      const k = ev.key;
      const isTyping = !ev.isComposing && !ev.repeat && (typeof k === "string" && k.length === 1 || k === "Backspace" || k === "Enter" || k === " " || k === "Spacebar" || k === "Tab");
      if (isTyping) {
        if (e.settings.speedDemon) {
          e.heat = Math.min(1, e.heat + 0.09 * (e.settings.speedDemonSensitivity ?? 1));
        }
        e.bumpCombo();
        playKeyClick(e);
      }
    }, "onKeyDown");
    const onResize = /* @__PURE__ */ __name(() => {
      e._chromeCache = null;
      e._lastWrapperRect = "";
      e._lastOverlayRect = "";
      resizeCanvas(e);
      e.markActivity();
    }, "onResize");
    const bound = [];
    const on = /* @__PURE__ */ __name((target, type, fn, opts) => {
      if (!target) return;
      target.addEventListener(type, fn, opts);
      bound.push([target, type, fn, opts]);
    }, "on");
    const cap = { capture: true };
    const capPassive = { capture: true, passive: true };
    on(win, "keydown", onKeyDown, cap);
    on(win, "keyup", onActivity, capPassive);
    on(win, "pointerdown", onActivity, capPassive);
    on(win, "pointerup", onActivity, capPassive);
    on(win, "mouseup", onActivity, capPassive);
    on(win, "focusin", onActivity, capPassive);
    on(win, "focusout", onActivity, capPassive);
    on(win, "wheel", onActivity, capPassive);
    on(win, "scroll", onActivity, capPassive);
    on(win, "mousemove", onMouseMove, capPassive);
    on(win, "resize", onResize);
    on(win, "focus", onActivity);
    on(win, "blur", onActivity);
    on(doc, "selectionchange", onActivity);
    on(win.visualViewport, "resize", onActivity, { passive: true });
    on(win.visualViewport, "scroll", onActivity, { passive: true });
    return () => {
      for (const [target, type, fn, opts] of bound) {
        try {
          target.removeEventListener(type, fn, opts);
        } catch {
        }
      }
    };
  }
  __name(installWakeListeners, "installWakeListeners");
  function installCaretObserver(e) {
    const doc = e._doc || document;
    const attached = /* @__PURE__ */ new WeakSet();
    const perElement = [];
    const attach = /* @__PURE__ */ __name((el2) => {
      if (attached.has(el2)) return;
      attached.add(el2);
      e.markActivity();
      const mo = new MutationObserver(() => e.markActivity());
      mo.observe(el2, { attributes: true, attributeFilter: ["data-x", "data-y", "style", "class"] });
      perElement.push(mo);
    }, "attach");
    const tree = new MutationObserver((muts) => {
      for (const m of muts) {
        for (const node of m.addedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.classList.contains("listview-caret-self")) attach(node);
          else node.querySelectorAll?.(CARET_EL_SEL).forEach(attach);
        }
      }
    });
    tree.observe(doc.body, { childList: true, subtree: true });
    doc.querySelectorAll(CARET_EL_SEL).forEach(attach);
    return () => {
      try {
        tree.disconnect();
      } catch {
      }
      for (const mo of perElement) {
        try {
          mo.disconnect();
        } catch {
        }
      }
      perElement.length = 0;
    };
  }
  __name(installCaretObserver, "installCaretObserver");
  function installModalObserver(e) {
    const doc = e._doc || document;
    const read = /* @__PURE__ */ __name(() => {
      e._modalOpen = !!doc.querySelector(MODAL_SEL);
    }, "read");
    read();
    const mo = new MutationObserver(read);
    mo.observe(doc.body, { childList: true, subtree: true });
    return () => {
      try {
        mo.disconnect();
      } catch {
      }
      e._modalOpen = false;
    };
  }
  __name(installModalObserver, "installModalObserver");
  function playKeyClick(e) {
    const s = e.settings;
    if (!s.soundEnabled) return;
    try {
      if (!e._audio) {
        const Ctor = (
          /** @type {any} */
          window.AudioContext || /** @type {any} */
          window.webkitAudioContext
        );
        if (!Ctor) return;
        e._audio = new Ctor();
      }
      const ctx = e._audio;
      if (ctx.state === "suspended") void ctx.resume();
      const now = ctx.currentTime;
      const vol = Math.max(0, Math.min(1, s.soundVolume ?? 0.15));
      const vary = 1 + (Math.random() - 0.5) * 2 * Math.max(0, Math.min(1, s.soundVariation ?? 0.25));
      const pitch = Math.max(0.2, (s.soundPitch ?? 1) * vary);
      const len = Math.floor(ctx.sampleRate * 0.02);
      if (!e._noiseBuf || e._noiseBuf.length !== len) {
        const buf = ctx.createBuffer(1, len, ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
        e._noiseBuf = buf;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = e._noiseBuf;
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 2200 * pitch;
      bp.Q.value = 0.8;
      const ng = ctx.createGain();
      ng.gain.setValueAtTime(vol * 0.8, now);
      ng.gain.exponentialRampToValueAtTime(1e-4, now + 0.03);
      noise.connect(bp).connect(ng).connect(ctx.destination);
      noise.start(now);
      noise.stop(now + 0.04);
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(180 * pitch, now);
      osc.frequency.exponentialRampToValueAtTime(90 * pitch, now + 0.03);
      const og = ctx.createGain();
      og.gain.setValueAtTime(vol * 0.35, now);
      og.gain.exponentialRampToValueAtTime(1e-4, now + 0.05);
      osc.connect(og).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } catch {
    }
  }
  __name(playKeyClick, "playKeyClick");
  function closeAudio(e) {
    try {
      void e._audio?.close();
    } catch {
    }
    e._audio = null;
    e._noiseBuf = null;
  }
  __name(closeAudio, "closeAudio");
  function ensureTorchOverlay(e) {
    const doc = e._doc || document;
    if (e.overlay && e.overlay.isConnected) return e.overlay;
    const el2 = doc.createElement("div");
    el2.className = TORCH_CLASS;
    el2.style.zIndex = String((e.zIndex || 60) - 1);
    const host = doc.querySelector(".app-chrome-panels") || doc.body;
    host.appendChild(el2);
    e.overlay = el2;
    e._lastOverlayRect = "";
    return el2;
  }
  __name(ensureTorchOverlay, "ensureTorchOverlay");
  function destroyTorchOverlay(e) {
    try {
      e.overlay?.remove();
    } catch {
    }
    e.overlay = null;
    e._lastOverlayRect = "";
  }
  __name(destroyTorchOverlay, "destroyTorchOverlay");

  // torch.js
  var TORCH_PULSE_FRAME_MS = 33;
  function applyOverlayStyle(e) {
    if (!e.overlay) return;
    const s = e.settings;
    e.overlay.style.setProperty("--torch-darkness", String(s.overlayDarkness));
    e.overlay.style.setProperty("--torch-intensity", String(s.overlayIntensity));
    e.overlay.style.setProperty("--torch-warm", hexToRgb2(s.overlayColor));
  }
  __name(applyOverlayStyle, "applyOverlayStyle");
  function updateOverlayTarget(e) {
    const mode = e.settings.overlayFollowMode;
    const caret = caretCoords(e);
    if (caret) {
      if (!e.lastCaret || caret.x !== e.lastCaret.x || caret.top !== e.lastCaret.top) {
        e.lastCaretMove = Date.now();
      }
      e.lastCaret = caret;
    }
    const useMouse = mode === "mouse" || mode === "auto" && (Date.now() - e.lastMouseMove < 800 || !e.lastCaret);
    if (useMouse) {
      e.tx = e.mouseX;
      e.ty = e.mouseY;
    } else if (e.lastCaret) {
      e.tx = e.lastCaret.x;
      e.ty = (e.lastCaret.top + e.lastCaret.bottom) / 2;
    }
  }
  __name(updateOverlayTarget, "updateOverlayTarget");
  function startTorch(e) {
    if (e.torchEngineActive) return;
    e.torchEngineActive = true;
    const win = (e._doc || document).defaultView || window;
    e.x = e.tx = win.innerWidth / 2;
    e.y = e.ty = win.innerHeight / 2;
    const schedule = /* @__PURE__ */ __name(() => {
      if (!e.torchEngineActive) return;
      if (e._torchGear === "hot") {
        e.torchRaf = requestAnimationFrame(tick);
        return;
      }
      const delay = e._torchGear === "pulse" ? TORCH_PULSE_FRAME_MS : 150;
      e._torchIdleT = win.setTimeout(() => {
        e._torchIdleT = 0;
        if (e.torchEngineActive) e.torchRaf = requestAnimationFrame(tick);
      }, delay);
    }, "schedule");
    const tick = /* @__PURE__ */ __name(() => {
      if (!e.torchEngineActive) return;
      e._torchGear = "idle";
      try {
        if (!e.settings.torchEffect) {
          if (e.overlay) e.overlay.classList.add("cs-torch-hidden");
        } else {
          const overlay = ensureTorchOverlay(e);
          if (overlay) {
            const sig = [
              e.settings.overlayDarkness,
              e.settings.overlayIntensity,
              e.settings.overlayColor
            ].join("|");
            if (sig !== e._overlaySig) {
              e._overlaySig = sig;
              applyOverlayStyle(e);
            }
            updateOverlayTarget(e);
            const lerp = e.settings.overlaySpeed;
            e.x += (e.tx - e.x) * lerp;
            e.y += (e.ty - e.y) * lerp;
            const settled = Math.abs(e.tx - e.x) < 0.25 && Math.abs(e.ty - e.y) < 0.25;
            if (!settled) e._torchGear = "hot";
            else {
              e.x = e.tx;
              e.y = e.ty;
            }
            const doc = e._doc || document;
            const rect = getPanelRect(e, doc) || getFullViewportRect(e, doc);
            const top = Math.round(rect.top);
            const left = Math.round(rect.left);
            const key = `${top},${left},${Math.round(rect.width)},${Math.round(rect.height)}`;
            if (key !== e._lastOverlayRect) {
              e._lastOverlayRect = key;
              overlay.style.top = top + "px";
              overlay.style.left = left + "px";
              overlay.style.width = Math.round(rect.width) + "px";
              overlay.style.height = Math.round(rect.height) + "px";
            }
            const inEditor = e._caretSource === "thymer" || inPreviewBox(doc);
            const hideForModal = !!e._modalOpen || !inEditor;
            const pulse = !hideForModal && !!e.settings.overlayBlinkSync && !!e.settings.blinkingEnabled;
            let radius = e.settings.overlayRadius;
            if (pulse) {
              const depth = Math.max(0, Math.min(1, e.settings.overlayBlinkDepth ?? 0.25));
              radius *= 1 - depth * (1 - blinkPhase(e, performance.now()));
              if (e._torchGear === "idle") e._torchGear = "pulse";
            }
            const rKey = Math.max(1, Math.round(radius));
            if (rKey !== e._lastTorchRadius) {
              e._lastTorchRadius = rKey;
              overlay.style.setProperty("--torch-radius", rKey + "px");
            }
            const posKey = (e.x - left).toFixed(1) + "," + (e.y - top).toFixed(1);
            if (posKey !== e._lastTorchPos) {
              e._lastTorchPos = posKey;
              overlay.style.setProperty("--torch-x", (e.x - left).toFixed(1) + "px");
              overlay.style.setProperty("--torch-y", (e.y - top).toFixed(1) + "px");
            }
            overlay.classList.toggle("cs-torch-hidden", hideForModal);
          }
        }
      } catch (err) {
        if (!e._torchErrorLogged) {
          e._torchErrorLogged = true;
          console.error("[cursor-smith] torch tick error (loop kept alive):", err);
        }
      }
      schedule();
    }, "tick");
    e._torchTick = tick;
    e._torchGear = "hot";
    e.torchRaf = requestAnimationFrame(tick);
  }
  __name(startTorch, "startTorch");
  function stopTorch(e) {
    e.torchEngineActive = false;
    if (e.torchRaf) {
      cancelAnimationFrame(e.torchRaf);
      e.torchRaf = 0;
    }
    if (e._torchIdleT) {
      clearTimeout(e._torchIdleT);
      e._torchIdleT = 0;
    }
    e._torchTick = null;
    e._overlaySig = null;
    e._lastTorchRadius = null;
    e._lastTorchPos = null;
    destroyTorchOverlay(e);
  }
  __name(stopTorch, "stopTorch");

  // engine.js
  var SMEAR_LEAD_BOOST_CAP = 6;
  var TAPER_FULL_LAG = 14;
  var ENERGY_FRAME_MS = 33;
  var ROW_TYPE_STEP = { text: 0, heading: 1, task: -1, code: 2, quote: -2, list: 0.5 };
  var COMBO_IDLE_MS = 1200;
  var GEOMETRY_DEADBAND_PX = 0.75;
  function adoptContent(prev, next) {
    const out = { ...prev };
    out.char = next.char;
    out.textColor = next.textColor;
    out.fontSize = next.fontSize;
    out.fontFamily = next.fontFamily;
    out.actualCharWidth = next.actualCharWidth;
    out.rowType = next.rowType;
    out.pos = next.pos;
    out.focused = next.focused;
    if (Math.abs((prev.h || 0) - (next.h || 0)) > GEOMETRY_DEADBAND_PX) {
      out.h = next.h;
      out.bottom = next.bottom;
      out.top = next.top;
    }
    if (Math.abs((prev.w || 0) - (next.w || 0)) > GEOMETRY_DEADBAND_PX) out.w = next.w;
    return out;
  }
  __name(adoptContent, "adoptContent");
  var CursorEngine = class {
    static {
      __name(this, "CursorEngine");
    }
    /**
     * @param {{settings: Record<string, any>, doc?: Document, zIndex?: number,
     *          onFatal?: (err: any) => void}} opts
     */
    constructor(opts) {
      this.settings = opts.settings;
      this._doc = opts.doc || document;
      this.zIndex = opts.zIndex ?? 60;
      this._onFatal = opts.onFatal || null;
      this.canvasWrapper = null;
      this.canvas = null;
      this.ctx = null;
      this.overlay = null;
      this.active = false;
      this.torchEngineActive = false;
      this.trail = [];
      this.particles = [];
      this.flamePixels = [];
      this.thunderbolts = [];
      this.stardust = [];
      this.lastActive = null;
      this.animActive = null;
      this.pending = null;
      this.smearQuad = null;
      this.smearShape = null;
      this.smearCenterPrev = null;
      this._smearDir = null;
      this._taperBuf = null;
      this.heat = 0;
      this.mouseX = 0;
      this.mouseY = 0;
      this.lastMouseMove = 0;
      this.lastMoveTime = 0;
      this.lastCaret = null;
      this.lastCaretMove = 0;
      this.typingSpeedMod = 1;
      this.x = 0;
      this.y = 0;
      this.tx = 0;
      this.ty = 0;
      this._drawSig = null;
      this._dirty = null;
      this._dirtyPrev = null;
      this._dirtyFull = true;
      this._canvasGear = "hot";
      this._torchGear = "idle";
      this._canvasTick = null;
      this._torchTick = null;
      this.canvasRaf = 0;
      this.torchRaf = 0;
      this._canvasIdleT = 0;
      this._torchIdleT = 0;
      this._lastWrapperRect = "";
      this._lastOverlayRect = "";
      this._overlaySig = null;
      this._lastTorchRadius = null;
      this._lastTorchPos = null;
      this._clipTop = 0;
      this._formMirror = null;
      this._measureCtx = null;
      this._nodeIds = null;
      this._nodeIdSeq = 0;
      this._clipChainFor = null;
      this._clipChain = [];
      this._chromeCache = null;
      this._modalOpen = false;
      this._caretSource = "thymer";
      this._lastThymerCaretT = 0;
      this._rowType = "text";
      this._selectionActive = false;
      this._ghost = null;
      this.combo = 0;
      this._comboLastT = 0;
      this.comboLevel = 0;
      this._shakeUntil = 0;
      this._ghostMoving = false;
      this._smearStretch = 0;
      this._lastComboSparkT = 0;
      this._audio = null;
      this._noiseBuf = null;
      this._popRainbowHue = 0;
      this._tickErrors = 0;
      this._lastPrintableKey = "";
      this._deletePending = 0;
      this._enterPending = 0;
      this._lastActivityT = 0;
      this._lastHotFrameT = 0;
      this._lastSparkT = 0;
      this._lastStardustT = 0;
      this._smearDtT = 0;
      this._smoothLastT = 0;
      this._catchUpBoost = 1;
      this._smoothMoving = false;
      this._smearMoving = false;
      this.smearQuadLastMoveT = 0;
      this._suspendCleared = false;
      this._tickErrorLogged = false;
      this._torchErrorLogged = false;
      this._detach = [];
    }
    /* ---- settings access ------------------------------------------------ */
    /** @param {string} key @returns {any} */
    styleFor(key) {
      return this.settings[key];
    }
    /** @param {Record<string, any>} settings */
    setSettings(settings) {
      this.settings = settings;
      this._drawSig = null;
      this.markActivity();
      this.syncTorch();
    }
    isDarkTheme() {
      const doc = this.canvas ? this.canvas.ownerDocument : this._doc;
      return doc.documentElement.classList.contains("theme-dark") || doc.body.classList.contains("theme-dark") || !doc.documentElement.classList.contains("theme-light");
    }
    /** @param {number} heat @param {string} baseHex */
    heatColorFor(heat, baseHex) {
      return heatColor(heat, baseHex);
    }
    /**
     * The flat colour every effect that isn't the cursor body falls back to:
     * the CRT halo, pixel-trail particles, popping letters. With Gradient on
     * that is the ramp's first stop, so those effects stay in the same family
     * as the cursor instead of painting in a colour it no longer uses.
     */
    getBaseColor() {
      const dark = this.isDarkTheme();
      if (this.settings.selectionColorEnabled && this._selectionActive) {
        return dark ? this.settings.selectionColorDark : this.settings.selectionColorLight;
      }
      const base = this.settings.gradientEnabled ? this.settings[dark ? "gradientDark1" : "gradientLight1"] : dark ? this.settings.colorDark : this.settings.colorLight;
      return this.tintColor(base);
    }
    /**
     * Apply the row-type hue shift to one colour.
     *
     * Split out so the gradient path can use it too. It previously read its stops
     * straight from settings, which meant the tints reached the ghost and every
     * particle — those go through getActiveColor — but not the cursor body or its
     * trail. Half the cursor changed colour and half did not.
     *
     * Hue-shift rather than substitute, so every row type still reads as the
     * user's own colour. The multipliers are arbitrary but stable: the point is
     * that the types are distinguishable, not that they hit specific hues.
     * @param {string} hex @returns {string}
     */
    tintColor(hex) {
      if (!this.settings.rowTypeTint || !hex) return hex;
      const amount = this.settings.rowTypeTintAmount || 0;
      const step = ROW_TYPE_STEP[this._rowType || "text"] || 0;
      return step ? shiftHue(hex, amount * step) : hex;
    }
    /**
     * Whether a non-collapsed selection exists. Thymer paints multi-line
     * selections as .text-selection-self overlays while the native Selection
     * stays COLLAPSED, so neither source alone is sufficient — both are checked.
     * Cached per frame: this runs inside the colour path, which several
     * primitives call per draw.
     */
    refreshSelectionState() {
      if (!this.settings.selectionColorEnabled) {
        this._selectionActive = false;
        return;
      }
      const doc = this._doc || document;
      let active = false;
      try {
        const sel = (doc.defaultView || window).getSelection();
        active = !!(sel && !sel.isCollapsed && String(sel).length > 0);
        if (!active) active = !!doc.querySelector(".text-selection-self .text-selection");
      } catch {
      }
      this._selectionActive = active;
    }
    getActiveColor() {
      const base = this.getBaseColor();
      if (!this.settings.speedDemon || this.heat <= 0) return base;
      return heatColor(this.heat, base);
    }
    /** @param {number} pos @param {boolean} [cyclic] */
    sampleRamp(pos, cyclic = false) {
      return sampleRamp(this, pos, cyclic);
    }
    /* ---- damage tracking ------------------------------------------------ */
    /** @param {number} x @param {number} y @param {number} w @param {number} h */
    markDirty(x, y, w, h2) {
      const d = this._dirty;
      if (!d) {
        this._dirty = { x0: x, y0: y, x1: x + w, y1: y + h2 };
        return;
      }
      if (x < d.x0) d.x0 = x;
      if (y < d.y0) d.y0 = y;
      if (x + w > d.x1) d.x1 = x + w;
      if (y + h2 > d.y1) d.y1 = y + h2;
    }
    /* ---- wake ------------------------------------------------------------ */
    markActivity() {
      this._lastActivityT = performance.now();
      if (this._canvasIdleT) {
        clearTimeout(this._canvasIdleT);
        this._canvasIdleT = 0;
        if (this.active && this._canvasTick) this.canvasRaf = requestAnimationFrame(this._canvasTick);
      }
      this.wakeTorch();
    }
    /** Torch-only wake: pointer movement retargets the spotlight but must not
     *  spin the cursor canvas up to full rate. */
    wakeTorch() {
      if (this._torchIdleT) {
        clearTimeout(this._torchIdleT);
        this._torchIdleT = 0;
        if (this.torchEngineActive && this._torchTick) this.torchRaf = requestAnimationFrame(this._torchTick);
      }
    }
    /**
     * True when the OS-level window owning our canvas is the focused one.
     *
     * Probed per frame rather than cached from a blur listener: hasFocus() reads
     * a flag and forces no layout, so it costs nothing, and it cannot get stuck
     * out of sync if a focus event is ever missed. The focus/blur listeners only
     * wake the loop so the change is picked up on the next frame rather than up
     * to 100ms later at the idle heartbeat.
     */
    windowFocused() {
      if (!this.settings.hideOnWindowBlur) return true;
      try {
        return (this.canvas && this.canvas.ownerDocument || this._doc).hasFocus();
      } catch {
        return true;
      }
    }
    /* ---- caret tracking -------------------------------------------------- */
    updateActivePoint() {
      const caret = caretCoords(this);
      if (!caret || !caret.focused) {
        this.lastActive = null;
        this.pending = null;
        return;
      }
      if (!this.lastActive) {
        this.lastActive = caret;
        this.pending = null;
        return;
      }
      if (caret.src !== this.lastActive.src) {
        this.lastActive = caret;
        this.snapMotionTo(caret);
        return;
      }
      const moved = Math.abs(this.lastActive.x - caret.x) > 0.5 || Math.abs(this.lastActive.top - caret.top) > 0.5;
      if (!moved) {
        if (!this.pending) this.lastActive = adoptContent(this.lastActive, caret);
        return;
      }
      if (caret.pos !== null && caret.pos === this.lastActive.pos) {
        const dx = caret.x - this.lastActive.x;
        const dy = caret.top - this.lastActive.top;
        this.lastActive = caret;
        if (this.animActive && (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01)) {
          this.animActive.x += dx;
          this.animActive.top += dy;
          this.animActive.w = caret.w;
          this.animActive.h = caret.h;
          if (this.smearQuad) {
            for (const key in this.smearQuad) {
              this.smearQuad[key].x += dx;
              this.smearQuad[key].y += dy;
            }
            if (this.smearShape && this.smearShape !== this.smearQuad) {
              for (const key in this.smearShape) {
                this.smearShape[key].x += dx;
                this.smearShape[key].y += dy;
              }
            }
            if (this.smearCenterPrev) {
              this.smearCenterPrev.x += dx;
              this.smearCenterPrev.y += dy;
            }
          }
          for (const p of this.trail) {
            p.x += dx;
            p.y += dy;
          }
        }
        return;
      }
      const delay = Math.max(0, Math.round(this.settings.moveDelayMs));
      if (delay <= 0) {
        const holdChar = this.resolveHoldChar();
        this.commitMove(caret);
        if (holdChar && this.lastActive) this.lastActive.holdChar = holdChar;
        return;
      }
      const targetChanged = !this.pending || this.pending.caret.x !== caret.x || this.pending.caret.top !== caret.top;
      if (targetChanged) {
        this.pending = { caret, since: performance.now(), holdChar: this.resolveHoldChar() };
      } else if (performance.now() - this.pending.since >= delay) {
        this.commitMove(this.pending.caret);
      }
    }
    /**
     * The character just typed, which the box keeps showing while the caret
     * moves past it — and which spawns the popping letter.
     *
     * Upstream read this from its editor's document model. Thymer exposes no
     * document model to a plugin, so the keydown handler stashes the last
     * printable key instead and this consumes it.
     */
    resolveHoldChar() {
      const key = this._lastPrintableKey;
      this._lastPrintableKey = "";
      if (key && key !== "\n" && key.trim()) {
        if (this.settings.popLetters && this.lastActive) {
          spawnLetterParticle(this, key, this.lastActive);
        }
        return key;
      }
      return this.lastActive ? this.lastActive.char : "";
    }
    /**
     * Did this move cross to a different visual line?
     *
     * Threshold is a fraction of the line height rather than a fixed pixel count,
     * so it holds for headings and code rows as well as body text — and it is
     * below a full line so a soft-wrap, which lands on the next row exactly like
     * a pressed Enter, is caught too.
     * @param {any} from @param {any} to @returns {boolean}
     */
    isLineChange(from, to) {
      if (!from || !to) return false;
      const lh = Math.max(8, to.h || from.h || 16);
      return Math.abs(to.top - from.top) > lh * 0.6;
    }
    /**
     * Collapse every position-interpolating effect onto a new location.
     *
     * Motion effects all assume the caret travels along a line. A line break
     * breaks that assumption badly: the smear quad stretches from the end of one
     * row to the start of the next, painting a diagonal band straight through
     * the text between them, and the ghost drags the same path a beat later. It
     * reads as a glitch rather than as motion.
     *
     * So on a line change they are snapped rather than interpolated. Particles
     * are deliberately NOT touched — a burst left behind at the old position is
     * exactly right; it marks where you were.
     * @param {any} caret
     */
    snapMotionTo(caret) {
      if (!caret) return;
      if (this.animActive) {
        this.animActive.x = caret.x;
        this.animActive.top = caret.top;
        this.animActive.w = caret.w;
        this.animActive.h = caret.h;
      }
      this.smearQuad = null;
      this.smearShape = null;
      this.smearCenterPrev = null;
      this._smearDir = null;
      this._smearMoving = false;
      if (this._ghost) {
        this._ghost.x = caret.x;
        this._ghost.top = caret.top;
      }
      this._ghostMoving = false;
    }
    /** @param {any} caret */
    commitMove(caret) {
      this.pushTrail(this.lastActive);
      if (this.lastActive) {
        const now = performance.now();
        const disintegrate = this.settings.backspaceDisintegrate && this._deletePending && now - this._deletePending < 250;
        spawnFlamePixels(this, this.lastActive, !!disintegrate);
        this._deletePending = 0;
        if (this._enterPending && now - this._enterPending < 250) spawnThunderbolt(this, caret);
      }
      this._enterPending = 0;
      const crossedLine = this.settings.snapOnNewline && this.isLineChange(this.lastActive, caret);
      this.lastActive = caret;
      this.pending = null;
      this.lastMoveTime = performance.now();
      if (crossedLine) this.snapMotionTo(caret);
    }
    /** @param {any} point */
    pushTrail(point) {
      if (!point) return;
      if (!this.settings.crtEffect) return;
      this.trail.push({ x: point.x, y: point.top, w: point.w, h: point.h, t: performance.now() });
      const max = Math.max(0, Math.round(this.settings.trailLength));
      while (this.trail.length > max) this.trail.shift();
    }
    /**
     * Age out expired trail points.
     *
     * Deliberately in the update phase and deliberately NOT gated on crtEffect.
     * pushTrail runs on every caret move regardless of that setting, so with the
     * trail effect off — the default — the array would fill to trailLength and
     * never be pruned by age, only evicted by newer entries. `trail.length > 0`
     * then held `animating` true permanently, latching the hot gear on a
     * completely idle editor.
     */
    pruneTrail() {
      if (!this.trail.length) return;
      const now = performance.now();
      const fade = Math.max(50, this.settings.trailFadeMs);
      this.trail = this.trail.filter((p) => now - p.t < fade);
    }
    /* ---- smooth movement ------------------------------------------------- */
    updateSmoothCursor() {
      if (!this.lastActive) {
        this.animActive = null;
        this._smoothMoving = false;
        this._smoothLastT = 0;
        this._catchUpBoost = 1;
        return;
      }
      if (!this.settings.smoothEnabled) {
        this.animActive = { ...this.lastActive };
        this._smoothMoving = false;
        this._catchUpBoost = 1;
        return;
      }
      if (!this.animActive) {
        this.animActive = { ...this.lastActive };
        this._smoothMoving = false;
      }
      const now = performance.now();
      let dt = (now - (this._smoothLastT || now)) / 1e3;
      this._smoothLastT = now;
      dt = Math.max(1e-3, Math.min(dt, 0.05));
      let targetSpeed = this.settings.catchUpSpeed;
      let typingBoost = 1;
      if (this.settings.smoothAdaptive) {
        const timeSinceMove = now - this.lastMoveTime;
        const maxMod = this.settings.maxCatchUpSpeed / Math.max(0.01, this.settings.catchUpSpeed);
        if (timeSinceMove < 150) {
          this.typingSpeedMod = Math.min(this.typingSpeedMod + (maxMod - 1) * 8 * dt, maxMod);
        } else {
          this.typingSpeedMod = Math.max(this.typingSpeedMod - (maxMod - 1) * 2 * dt, 1);
        }
        targetSpeed = Math.min(this.settings.maxCatchUpSpeed, targetSpeed * this.typingSpeedMod);
        if (timeSinceMove < 150) {
          const cw = Math.max(4, this.lastActive.actualCharWidth || 8);
          const dist = Math.hypot(
            this.lastActive.x - this.animActive.x,
            this.lastActive.top - this.animActive.top
          );
          typingBoost = 1 + Math.min(3, Math.max(0, dist / cw - 1));
        }
      }
      const RATE_SCALE = 40;
      const rate = Math.max(0.5, targetSpeed * (1 - this.settings.smoothness) * RATE_SCALE * typingBoost);
      this._catchUpBoost = targetSpeed / Math.max(0.01, this.settings.catchUpSpeed) * typingBoost;
      const lerpFactor = 1 - Math.exp(-rate * dt);
      this.animActive.x += (this.lastActive.x - this.animActive.x) * lerpFactor;
      this.animActive.top += (this.lastActive.top - this.animActive.top) * lerpFactor;
      this.animActive.w += (this.lastActive.w - this.animActive.w) * lerpFactor;
      this.animActive.h += (this.lastActive.h - this.animActive.h) * lerpFactor;
      const arrived = Math.abs(this.lastActive.x - this.animActive.x) < 0.25 && Math.abs(this.lastActive.top - this.animActive.top) < 0.25;
      if (arrived) {
        this.animActive.x = this.lastActive.x;
        this.animActive.top = this.lastActive.top;
        this.animActive.w = this.lastActive.w;
        this.animActive.h = this.lastActive.h;
      }
      this._smoothMoving = !arrived;
      this.animActive.textColor = this.lastActive.textColor;
      this.animActive.char = this.lastActive.char;
      this.animActive.holdChar = this.lastActive.holdChar;
      this.animActive.actualCharWidth = this.lastActive.actualCharWidth;
      this.animActive.fontFamily = this.lastActive.fontFamily;
      this.animActive.fontSize = this.lastActive.fontSize;
    }
    /* ---- motion smear ---------------------------------------------------- */
    getActiveRect() {
      const active = this.animActive;
      if (!active) return null;
      if (this.styleFor("cursorStyle") === "Underline") {
        const uThickness = underlineThickness(this, active.h);
        return {
          x: active.x,
          y: active.top + active.h - uThickness,
          w: active.actualCharWidth,
          h: uThickness
        };
      }
      return { x: active.x, y: active.top, w: active.w, h: active.h };
    }
    updateSmearQuad() {
      const now = performance.now();
      if (!this._smearDtT) this._smearDtT = now;
      let dt = (now - this._smearDtT) / 1e3;
      this._smearDtT = now;
      dt = Math.min(dt, 0.05);
      const settings = this.settings;
      const bodyless = this.styleFor("cursorStyle") === "None";
      const rect = settings.smear && !bodyless ? this.getActiveRect() : null;
      if (!rect) {
        this.smearQuad = null;
        this.smearShape = null;
        this.smearCenterPrev = null;
        this._smearMoving = false;
        this._smearStretch = 0;
        return;
      }
      const targets = {
        tl: { x: rect.x, y: rect.y },
        tr: { x: rect.x + rect.w, y: rect.y },
        br: { x: rect.x + rect.w, y: rect.y + rect.h },
        bl: { x: rect.x, y: rect.y + rect.h }
      };
      if (!this.smearQuad) {
        this.smearQuad = {};
        for (const key in targets) {
          this.smearQuad[key] = { x: targets[key].x, y: targets[key].y, vx: 0, vy: 0 };
        }
        this.smearCenterPrev = { x: rect.x + rect.w / 2, y: rect.y + rect.h / 2 };
        this.smearShape = this.smearQuad;
        this._smearMoving = false;
        this._smearStretch = 0;
        return;
      }
      const center = { x: rect.x + rect.w / 2, y: rect.y + rect.h / 2 };
      let dirX = 0;
      let dirY = 0;
      if (this.smearCenterPrev) {
        dirX = center.x - this.smearCenterPrev.x;
        dirY = center.y - this.smearCenterPrev.y;
      }
      const dirLen = Math.hypot(dirX, dirY);
      if (dirLen > 0.01) {
        dirX /= dirLen;
        dirY /= dirLen;
        this._smearDir = { x: dirX, y: dirY };
      }
      this.smearCenterPrev = center;
      const leadBoost = settings.smoothEnabled ? Math.max(1, Math.min(SMEAR_LEAD_BOOST_CAP, this._catchUpBoost || 1)) : 1;
      const freqLead = (2 + Math.max(0, Math.min(1, settings.smearStiffness)) * 38) * leadBoost;
      const freqTrail = 2 + Math.max(0, Math.min(1, settings.smearTrailingStiffness)) * 38;
      const dampingRatio = 0.15 + Math.max(0, Math.min(1, settings.smearDamping)) * 1.15;
      const MAX_STEP = 1 / 240;
      const steps = Math.max(1, Math.min(16, Math.ceil(dt / MAX_STEP)));
      const h2 = dt / steps;
      let moving = false;
      let maxLag = 0;
      for (const key in targets) {
        const c = this.smearQuad[key];
        const t = targets[key];
        const offX = t.x - center.x;
        const offY = t.y - center.y;
        const offLen = Math.hypot(offX, offY) || 1;
        const align = dirLen > 0.01 ? offX / offLen * dirX + offY / offLen * dirY : 0;
        const freq = align >= 0 ? freqLead : freqTrail;
        const k = freq * freq;
        const damp = 2 * dampingRatio * freq;
        for (let s = 0; s < steps; s++) {
          const ax = k * (t.x - c.x) - damp * c.vx;
          const ay = k * (t.y - c.y) - damp * c.vy;
          c.vx += ax * h2;
          c.vy += ay * h2;
          c.x += c.vx * h2;
          c.y += c.vy * h2;
        }
        if (!isFinite(c.x) || !isFinite(c.y) || !isFinite(c.vx) || !isFinite(c.vy)) {
          c.x = t.x;
          c.y = t.y;
          c.vx = 0;
          c.vy = 0;
        }
        const lag = Math.hypot(c.x - t.x, c.y - t.y);
        if (lag > maxLag) maxLag = lag;
        if (Math.abs(c.x - t.x) > 0.5 || Math.abs(c.y - t.y) > 0.5 || Math.abs(c.vx) > 0.1 || Math.abs(c.vy) > 0.1) moving = true;
      }
      this._smearMoving = moving;
      this._smearStretch = Math.min(1, maxLag / TAPER_FULL_LAG);
      this.applySmearTaper(targets, center);
      if (moving) {
        this.smearQuadLastMoveT = now;
      } else {
        for (const key in targets) {
          const c = this.smearQuad[key];
          c.x = targets[key].x;
          c.y = targets[key].y;
          c.vx = 0;
          c.vy = 0;
        }
      }
    }
    /**
     * Derive the corners to PAINT from the corners the spring is holding.
     *
     * The result is deliberately NOT written back into smearQuad. That object is
     * the spring's state, integrated forward from its own previous position: a
     * tapered corner stored there would become the position the next frame
     * springs from, so the corners would chase the narrowed shape and the taper
     * would eat the very lag it is drawn from.
     * @param {CornerTargets} targets @param {{x:number,y:number}} center
     */
    applySmearTaper(targets, center) {
      const q = this.smearQuad;
      const amount = Math.max(0, Math.min(1, this.settings.smearTaperAmount ?? 0.7));
      const dir = this._smearDir;
      if (!q || !this.settings.smearTaper || amount <= 0 || !dir) {
        this.smearShape = q;
        return;
      }
      let maxLag = 0;
      const lag = {};
      for (const k in targets) {
        const l = Math.hypot(q[k].x - targets[k].x, q[k].y - targets[k].y);
        lag[k] = l;
        if (l > maxLag) maxLag = l;
      }
      const reach = Math.min(1, maxLag / TAPER_FULL_LAG);
      if (reach <= 1e-3) {
        this.smearShape = q;
        return;
      }
      if (!this._taperBuf) {
        this._taperBuf = { tl: { x: 0, y: 0 }, tr: { x: 0, y: 0 }, br: { x: 0, y: 0 }, bl: { x: 0, y: 0 } };
      }
      const out = this._taperBuf;
      for (const k in targets) {
        const c = q[k];
        const ox = c.x - center.x;
        const oy = c.y - center.y;
        const along = ox * dir.x + oy * dir.y;
        const w = lag[k] / maxLag * reach * amount;
        out[k].x = c.x - (ox - along * dir.x) * w;
        out[k].y = c.y - (oy - along * dir.y) * w;
      }
      this.smearShape = out;
    }
    /**
     * The ghost: a second cursor lagging behind the real one.
     *
     * Its own lerp rather than a reuse of the smooth-movement one, because it
     * must lag even when Smooth Movement is OFF — that is the entire effect. It
     * deliberately does not feed the smear spring or the trail; it is decoration
     * that follows, not a second caret.
     */
    updateGhost() {
      if (!this.settings.ghostEnabled || !this.animActive) {
        this._ghost = null;
        this._ghostMoving = false;
        return;
      }
      const target = this.animActive;
      if (!this._ghost) {
        this._ghost = { x: target.x, top: target.top, w: target.w, h: target.h };
        this._ghostMoving = false;
        return;
      }
      const k = Math.max(0.01, Math.min(0.9, this.settings.ghostLag || 0.08));
      const g = this._ghost;
      g.x += (target.x - g.x) * k;
      g.top += (target.top - g.top) * k;
      g.w = target.w;
      g.h = target.h;
      const arrived = Math.abs(target.x - g.x) < 0.25 && Math.abs(target.top - g.top) < 0.25;
      if (arrived) {
        g.x = target.x;
        g.top = target.top;
      }
      this._ghostMoving = !arrived;
    }
    /**
     * True only while the idle fade is mid-transition.
     *
     * Deliberately not "is idle" — that would be true forever once you stopped
     * typing, pinning the loop off its idle gear for as long as the window sat
     * untouched, which is the exact opposite of what an idle effect should cost.
     * @returns {boolean}
     */
    _idleRamping() {
      if (!this.settings.idleFadeEnabled || !this.lastActive) return false;
      const delay = Math.max(0, this.settings.idleFadeDelayMs ?? 4e3);
      const idleFor = performance.now() - (this._lastActivityT || 0);
      return idleFor > delay - 120 && idleFor < delay + 1200;
    }
    /**
     * Typing streak. Distinct from Speed Demon's heat: heat measures how FAST
     * you are going and cools continuously, whereas a combo counts how MANY
     * keystrokes you have chained and resets hard the moment you pause.
     */
    updateCombo() {
      if (!this.settings.comboEnabled) {
        this.combo = 0;
        this.comboLevel = 0;
        return;
      }
      if (this.combo && performance.now() - this._comboLastT > COMBO_IDLE_MS) this.combo = 0;
      const threshold = Math.max(1, this.settings.comboThreshold || 25);
      this.comboLevel = Math.max(0, Math.min(1, this.combo / threshold));
    }
    /** Called from the keydown handler for every character that counts as typing. */
    bumpCombo() {
      if (!this.settings.comboEnabled) return;
      this.combo += 1;
      this._comboLastT = performance.now();
    }
    /** Kick off a screen shake. Called on Backspace/Delete. */
    kickShake() {
      if (!this.settings.shakeEnabled) return;
      this._shakeUntil = performance.now() + Math.max(60, this.settings.shakeDurationMs || 180);
    }
    /**
     * Current shake offset, decaying to nothing over the configured duration.
     * @returns {{x: number, y: number} | null}
     */
    /** Whether a shake is in flight — side-effect free, unlike shakeOffset(). */
    isShaking() {
      return !!this.settings.shakeEnabled && performance.now() < this._shakeUntil;
    }
    shakeOffset() {
      if (!this.isShaking()) return null;
      const now = performance.now();
      const dur = Math.max(60, this.settings.shakeDurationMs || 180);
      const remaining = (this._shakeUntil - now) / dur;
      const amp = (this.settings.shakeStrength || 3) * remaining;
      return { x: (Math.random() - 0.5) * 2 * amp, y: (Math.random() - 0.5) * 2 * amp };
    }
    /**
     * Extra opacity multiplier once the caret has sat untouched.
     *
     * Eased rather than switched so the cursor settles instead of blinking out,
     * and floored at the user's value rather than 0 — a caret that vanishes
     * completely is indistinguishable from a broken plugin.
     * @returns {number}
     */
    idleAlpha() {
      if (!this.settings.idleFadeEnabled) return 1;
      const delay = Math.max(0, this.settings.idleFadeDelayMs ?? 4e3);
      const idleFor = performance.now() - (this._lastActivityT || 0);
      if (idleFor <= delay) return 1;
      const to = Math.max(0, Math.min(0.9, this.settings.idleFadeTo ?? 0.25));
      const t = Math.min(1, (idleFor - delay) / 1e3);
      return 1 - (1 - to) * t;
    }
    /** Corners to paint through, or null when Motion Smear is off. */
    smearCorners() {
      if (!this.settings.smear) return null;
      return this.smearShape || this.smearQuad;
    }
    /* ---- lifecycle ------------------------------------------------------- */
    start() {
      if (this.active) return;
      const g = (
        /** @type {Record<string, any>} */
        /** @type {unknown} */
        globalThis
      );
      const previous = g.__csLiveEngine;
      if (previous && previous !== this) {
        try {
          previous.stop();
        } catch {
        }
      }
      g.__csLiveEngine = this;
      this.active = true;
      this.trail = [];
      this.particles = [];
      this.flamePixels = [];
      this.thunderbolts = [];
      this.stardust = [];
      this.lastActive = null;
      this.animActive = null;
      this.pending = null;
      this.smearQuad = null;
      this.smearShape = null;
      this.smearCenterPrev = null;
      this._smearDir = null;
      this._smearMoving = false;
      this._smearStretch = 0;
      this._smearDtT = 0;
      this._smoothMoving = false;
      this._catchUpBoost = 1;
      this.typingSpeedMod = 1;
      this.heat = 0;
      this._suspendCleared = false;
      this._drawSig = null;
      this._dirty = null;
      this._dirtyPrev = null;
      this._dirtyFull = true;
      this._tickErrors = 0;
      ensureCanvas(this);
      this._detach.push(installWakeListeners(this));
      this._detach.push(installCaretObserver(this));
      this._detach.push(installModalObserver(this));
      const schedule = /* @__PURE__ */ __name(() => {
        if (!this.active) return;
        const gear = this._canvasGear || "hot";
        if (gear === "hot") {
          this.canvasRaf = requestAnimationFrame(tick);
          return;
        }
        this._canvasIdleT = setTimeout(() => {
          this._canvasIdleT = 0;
          if (this.active) this.canvasRaf = requestAnimationFrame(tick);
        }, gear === "warm" ? 33 : gear === "energy" ? ENERGY_FRAME_MS : 100);
      }, "schedule");
      const tick = /* @__PURE__ */ __name(() => {
        if (!this.active) return;
        if ((this._canvasGear || "hot") === "hot") {
          const n = performance.now();
          if (n - (this._lastHotFrameT || 0) < 14) {
            this.canvasRaf = requestAnimationFrame(tick);
            return;
          }
          this._lastHotFrameT = n;
        }
        try {
          this.frame();
          this._tickErrors = 0;
        } catch (err) {
          if (!this._tickErrorLogged) {
            this._tickErrorLogged = true;
            console.error("[cursor-smith] canvas tick error (loop kept alive):", err);
          }
          if (++this._tickErrors >= 5 && this._onFatal) {
            const onFatal = this._onFatal;
            this._onFatal = null;
            onFatal(err);
            return;
          }
        }
        schedule();
      }, "tick");
      this._canvasTick = tick;
      this._canvasGear = "hot";
      this.canvasRaf = requestAnimationFrame(tick);
      this.syncTorch();
    }
    /** One frame of update + conditional draw. */
    frame() {
      if (!this.windowFocused()) {
        if (this.ctx && this.canvas && !this._suspendCleared) {
          const win = this.canvas.ownerDocument.defaultView || window;
          this.ctx.clearRect(0, 0, win.innerWidth, win.innerHeight);
          this._suspendCleared = true;
          this._dirtyPrev = null;
          this._drawSig = null;
        }
        this._canvasGear = "idle";
        return;
      }
      this._suspendCleared = false;
      ensureCanvas(this);
      const r = currentClipRect(this, this._caretSource === "thymer");
      if (r) {
        const prev = this._lastWrapperRect;
        this._clipTop = Math.round(r.top);
        applyClipRect(this, r);
        if (prev !== this._lastWrapperRect) this._dirtyFull = true;
      }
      this.refreshSelectionState();
      this.updateActivePoint();
      this._rowType = this.lastActive && this.lastActive.rowType || "text";
      this.updateSmoothCursor();
      this.updateGhost();
      this.updateCombo();
      this.updateSmearQuad();
      this.pruneTrail();
      if (this.heat > 0) {
        this.heat *= 0.985;
        if (this.heat < 1e-3) this.heat = 0;
      }
      if (this.settings.speedDemon && this.settings.speedDemonSparks && this.animActive) {
        maybeSpawnSpeedDemonSparks(this);
      }
      maybeSpawnStardust(this);
      maybeSpawnComboShower(this);
      this.decideGear();
    }
    /** Pick this frame's gear and decide whether the draw can be skipped. */
    decideGear() {
      const nowT = performance.now();
      const eff = this.settings;
      const animating = !!this._smoothMoving || !!this.pending || // A shake is a short, fast decay — it needs every frame it can get.
      // Tested by its clock, not by calling shakeOffset(): that rolls fresh
      // randoms, so asking twice per frame threw away one offset and painted
      // the other.
      this.isShaking() || // The ghost keeps easing after the caret has stopped, so the caret
      // settling is not enough to let the loop park.
      !!this._ghostMoving || this.trail.length > 0 || this.particles.length > 0 || this.flamePixels.length > 0 || this.thunderbolts.length > 0 || this.heat > 0 || !!this._smearMoving;
      const bodyless = eff.cursorStyle === "None";
      const energyShimmer = !!eff.energyEffect && !!this.lastActive && !bodyless;
      const idleRamping = this._idleRamping();
      const recentInput = nowT - (this._lastActivityT || 0) < 1200;
      let blinkFading = false;
      let blinkBucket = 1;
      if (eff.blinkingEnabled && this.lastActive && !bodyless) {
        const a = blinkPhase(this, nowT);
        blinkFading = a > 0.02 && a < 0.98;
        blinkBucket = a >= 0.5 ? 1 : 0;
      }
      const stardustLive = this.stardust.length > 0;
      const stardustActive = stardustLive || stardustArmed(this);
      this._canvasGear = animating || recentInput ? "hot" : blinkFading || stardustActive || idleRamping ? "warm" : energyShimmer ? "energy" : "idle";
      const staticFrame = !animating && !blinkFading && !energyShimmer && !stardustLive && !idleRamping;
      let doDraw = true;
      if (staticFrame) {
        const la = this.lastActive;
        const sig = [
          blinkBucket,
          this.isDarkTheme(),
          la ? `${Math.round(la.x * 2)},${Math.round(la.top * 2)},${Math.round(la.w * 2)},${Math.round(la.h * 2)},${la.char || ""}` : "none",
          eff.cursorStyle,
          eff.colorDark,
          eff.colorLight,
          eff.caretWidthPx,
          eff.cursorOpacity,
          eff.crtEffect,
          eff.glow,
          eff.showChar,
          eff.boxHollow,
          eff.boxHollowWidth,
          eff.lineSerifs,
          eff.underlineWidthPx,
          eff.blinkBreathing,
          eff.blinkBreathDepth,
          // Each of these changes painted pixels on a SETTLED cursor, so
          // omitting one makes editing it appear to do nothing until the
          // next keystroke wakes the loop.
          eff.rowTypeTint,
          eff.rowTypeTintAmount,
          this._rowType,
          eff.selectionColorEnabled,
          this._selectionActive,
          eff.idleFadeEnabled,
          Math.round(this.idleAlpha() * 20),
          eff.comboEnabled,
          eff.comboGlow,
          Math.round((this.comboLevel || 0) * 10),
          eff.ghostEnabled,
          eff.gradientEnabled,
          eff.gradientCount,
          eff.gradientDark1,
          eff.gradientDark2,
          eff.gradientDark3,
          eff.gradientDark4,
          eff.gradientLight1,
          eff.gradientLight2,
          eff.gradientLight3,
          eff.gradientLight4
        ].join("|");
        if (sig === this._drawSig) doDraw = false;
        else this._drawSig = sig;
      } else {
        this._drawSig = null;
      }
      if (this._dirtyFull) doDraw = true;
      if (doDraw) draw(this);
    }
    /** Start or stop the torch loop to match the current settings. */
    syncTorch() {
      if (!this.active) return;
      if (this.settings.torchEffect && !this.torchEngineActive) startTorch(this);
      else if (!this.settings.torchEffect && this.torchEngineActive) stopTorch(this);
    }
    stop() {
      this.active = false;
      const g = (
        /** @type {Record<string, any>} */
        /** @type {unknown} */
        globalThis
      );
      if (g.__csLiveEngine === this) g.__csLiveEngine = null;
      if (this.canvasRaf) {
        cancelAnimationFrame(this.canvasRaf);
        this.canvasRaf = 0;
      }
      if (this._canvasIdleT) {
        clearTimeout(this._canvasIdleT);
        this._canvasIdleT = 0;
      }
      this._canvasTick = null;
      stopTorch(this);
      for (const detach of this._detach) {
        try {
          detach();
        } catch {
        }
      }
      this._detach = [];
      closeAudio(this);
      try {
        this._formMirror?.remove();
      } catch {
      }
      this._formMirror = null;
      destroyCanvas(this);
    }
    /** Re-measure after a viewport change. */
    resize() {
      resizeCanvas(this);
    }
  };

  // ../../shared/settings-ui/theme-vars.js
  var DEFAULT_THEME_SOURCES = [
    ":root",
    "body",
    ".sidebar--icons",
    ".sidebar"
  ];
  var CURRENT_THEME_VARS = Object.freeze([
    // Accent
    { name: "--logo-color", label: "Accent" },
    // Text
    { name: "--text-default", label: "Text" },
    { name: "--text-muted", label: "Muted text" },
    { name: "--text-subtle", label: "Subtle text" },
    { name: "--text-hilite", label: "Highlight text" },
    { name: "--text-brighter", label: "Brighter text" },
    { name: "--text-disabled", label: "Disabled text" },
    { name: "--text-status-offline", label: "Offline text" },
    { name: "--text-warning", label: "Warning text" },
    { name: "--cmdpal-hilite-color", label: "Command palette highlight" },
    { name: "--color-text-900", label: "Legacy text" },
    // Tag / pill
    { name: "--tag-fg-color", label: "Tag" },
    // Surfaces
    { name: "--panel-bg-color", label: "Panel background" },
    { name: "--input-bg-color", label: "Input background" },
    { name: "--hover-subtle", label: "Hover background" },
    { name: "--sidebar-bg-hover", label: "Sidebar hover" },
    { name: "--active-bg-color", label: "Active background" },
    // Borders / dividers
    { name: "--divider-color", label: "Divider" },
    { name: "--thin-divider-color", label: "Thin divider" },
    { name: "--faint-divider-color", label: "Faint divider" },
    { name: "--input-border-color", label: "Input border" },
    { name: "--sidebar-divider-color", label: "Sidebar divider" },
    { name: "--titlebar-border-color", label: "Titlebar border" },
    { name: "--selection-border", label: "Selection border" },
    // Enum/tag palette (Thymer ships 16 hues — no amber, lime, or violet)
    { name: "--enum-red-fg", label: "Red" },
    { name: "--enum-orange-fg", label: "Orange" },
    { name: "--enum-yellow-fg", label: "Yellow" },
    { name: "--enum-green-fg", label: "Green" },
    { name: "--enum-teal-fg", label: "Teal" },
    { name: "--enum-cyan-fg", label: "Cyan" },
    { name: "--enum-sky-fg", label: "Sky" },
    { name: "--enum-blue-fg", label: "Blue" },
    { name: "--enum-indigo-fg", label: "Indigo" },
    { name: "--enum-purple-fg", label: "Purple" },
    { name: "--enum-fuchsia-fg", label: "Fuchsia" },
    { name: "--enum-pink-fg", label: "Pink" },
    { name: "--enum-rose-fg", label: "Rose" },
    { name: "--enum-stone-fg", label: "Stone" },
    { name: "--enum-zinc-fg", label: "Zinc" }
  ]);
  function elementOrNull(node) {
    return node instanceof Element ? node : null;
  }
  __name(elementOrNull, "elementOrNull");
  function themeVariableRoots(options = {}) {
    const roots = [];
    const seen = /* @__PURE__ */ new Set();
    const add = /* @__PURE__ */ __name((node) => {
      const el2 = elementOrNull(node);
      if (!el2 || seen.has(el2)) return;
      seen.add(el2);
      roots.push(el2);
    }, "add");
    add(document.documentElement);
    add(document.body);
    for (const selector of options.selectors || DEFAULT_THEME_SOURCES) {
      try {
        document.querySelectorAll(selector).forEach(add);
      } catch {
      }
    }
    for (const root of options.roots || []) add(root);
    return roots;
  }
  __name(themeVariableRoots, "themeVariableRoots");
  function resolveRenderedColor(cssColor, root = document.body) {
    const host = elementOrNull(root) || document.body || document.documentElement;
    if (!host) return "";
    const probe = document.createElement("span");
    probe.style.position = "absolute";
    probe.style.pointerEvents = "none";
    probe.style.visibility = "hidden";
    probe.style.color = "transparent";
    host.appendChild(probe);
    const attempts = [cssColor];
    if (cssColor.startsWith("var(")) {
      attempts.push(`rgb(${cssColor})`, `rgba(${cssColor}, 1)`, `hsl(${cssColor})`, `hsla(${cssColor}, 1)`);
    }
    try {
      for (const attempt of attempts) {
        probe.style.color = "";
        probe.style.color = attempt;
        const resolved = getComputedStyle(probe).color;
        if (resolved && resolved !== "rgba(0, 0, 0, 0)" && resolved !== "transparent") return resolved;
      }
    } finally {
      probe.remove();
    }
    return "";
  }
  __name(resolveRenderedColor, "resolveRenderedColor");

  // ../../shared/settings-ui/theme-swatches.js
  var THEME_GROUPS = (
    /** @type {ThemeGroupDef[]} */
    Object.freeze([
      {
        key: "hues",
        label: "Theme colors",
        tokens: [
          { token: "--enum-red-fg", label: "Red" },
          { token: "--enum-orange-fg", label: "Orange" },
          { token: "--enum-yellow-fg", label: "Yellow" },
          { token: "--enum-green-fg", label: "Green" },
          { token: "--enum-teal-fg", label: "Teal" },
          { token: "--enum-cyan-fg", label: "Cyan" },
          { token: "--enum-sky-fg", label: "Sky" },
          { token: "--enum-blue-fg", label: "Blue" },
          { token: "--enum-indigo-fg", label: "Indigo" },
          { token: "--enum-purple-fg", label: "Purple" },
          { token: "--enum-fuchsia-fg", label: "Fuchsia" },
          { token: "--enum-pink-fg", label: "Pink" },
          { token: "--enum-rose-fg", label: "Rose" },
          { token: "--tag-fg-color", label: "Tag" },
          { token: "--text-warning", label: "Warning" }
        ]
      },
      {
        key: "text",
        label: "Text & neutrals",
        tokens: [
          { token: "--text-default", label: "Text" },
          { token: "--text-muted", label: "Muted text" },
          { token: "--text-subtle", label: "Subtle text" },
          { token: "--text-hilite", label: "Highlight text" },
          { token: "--text-brighter", label: "Brighter text" },
          { token: "--text-disabled", label: "Disabled text" },
          { token: "--enum-stone-fg", label: "Stone" },
          { token: "--enum-zinc-fg", label: "Zinc" }
        ]
      },
      {
        key: "surfaces",
        label: "Surfaces & lines",
        marginal: true,
        tokens: [
          { token: "--panel-bg-color", label: "Panel background" },
          { token: "--input-bg-color", label: "Input background" },
          { token: "--hover-subtle", label: "Hover background" },
          { token: "--active-bg-color", label: "Active background" },
          { token: "--divider-color", label: "Divider" },
          { token: "--thin-divider-color", label: "Thin divider" },
          { token: "--faint-divider-color", label: "Faint divider" },
          { token: "--input-border-color", label: "Input border" },
          { token: "--titlebar-border-color", label: "Titlebar border" },
          { token: "--selection-border", label: "Selection border" }
        ]
      }
    ])
  );
  function resolveThemeToken(token, roots) {
    const rs = roots || themeVariableRoots();
    for (const root of rs) {
      const raw = getComputedStyle(root).getPropertyValue(token).trim();
      if (!raw) continue;
      const resolved = resolveRenderedColor(`var(${token})`, root);
      if (resolved) return resolved;
    }
    return "";
  }
  __name(resolveThemeToken, "resolveThemeToken");
  function resolveThemeGroups({ exclude = [] } = {}) {
    const roots = themeVariableRoots();
    const excludeSet = new Set(exclude);
    const groups = [];
    for (const def of THEME_GROUPS) {
      const swatches = [];
      const seen = /* @__PURE__ */ new Set();
      for (const { token, label } of def.tokens) {
        if (excludeSet.has(token)) continue;
        const color = resolveThemeToken(token, roots);
        if (!color || seen.has(color)) continue;
        seen.add(color);
        swatches.push({ token, label, color });
      }
      if (swatches.length) {
        groups.push({ key: def.key, label: def.label, hint: def.hint, marginal: def.marginal, swatches });
      }
    }
    return groups;
  }
  __name(resolveThemeGroups, "resolveThemeGroups");

  // ../../shared/settings-ui/tooltip.js
  var TIP_SELECTOR = "[data-tps-tip],[data-cf-tip]";
  var STYLE_ID = "tps-tip-css";
  var WIN_FLAG = "__tpsInstantTooltip";
  function installInstantTooltip() {
    if (typeof document === "undefined") return;
    if (typeof window !== "undefined" && /** @type {any} */
    window[WIN_FLAG]) return;
    if (typeof window !== "undefined") window[WIN_FLAG] = true;
    injectTooltipCss();
    const tip = document.createElement("div");
    tip.className = "tps-tip";
    tip.setAttribute("aria-hidden", "true");
    (document.body || document.documentElement).appendChild(tip);
    const hide = /* @__PURE__ */ __name(() => tip.classList.remove("is-visible"), "hide");
    const label = /* @__PURE__ */ __name((el2) => el2.getAttribute("data-tps-tip") || el2.getAttribute("data-cf-tip") || "", "label");
    document.addEventListener("mouseover", (e) => {
      const t = e.target instanceof Element ? e.target.closest(TIP_SELECTOR) : null;
      if (!t) {
        hide();
        return;
      }
      const text = label(t);
      if (!text) {
        hide();
        return;
      }
      tip.textContent = text;
      const r = t.getBoundingClientRect();
      tip.style.left = `${r.left + r.width / 2}px`;
      tip.style.top = `${r.top}px`;
      tip.classList.add("is-visible");
    }, true);
    document.addEventListener("mouseout", (e) => {
      const t = e.target instanceof Element ? e.target.closest(TIP_SELECTOR) : null;
      const to = e.relatedTarget instanceof Element ? e.relatedTarget : null;
      if (t && (!to || !t.contains(to))) hide();
    }, true);
    window.addEventListener("scroll", hide, true);
    window.addEventListener("blur", hide);
  }
  __name(installInstantTooltip, "installInstantTooltip");
  function injectTooltipCss() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = [
      ".tps-tip{position:fixed;z-index:2147483000;transform:translate(-50%,calc(-100% - 8px));",
      "padding:3px 8px;border-radius:var(--tps-radius-sm,5px);background:var(--tps-text,#1a1a1a);",
      "color:var(--tps-panel-bg,#fff);font-size:11px;font-weight:500;line-height:1.3;white-space:nowrap;",
      "pointer-events:none;opacity:0;box-shadow:0 2px 8px rgba(0,0,0,.35)}",
      ".tps-tip.is-visible{opacity:1}"
    ].join("");
    (document.head || document.documentElement).appendChild(style);
  }
  __name(injectTooltipCss, "injectTooltipCss");

  // ../../shared/settings-ui/color-field.js
  var MAX_CUSTOM = 44;
  function colorField({ value = null, onPick, featured = [], allowNone = true, customSwatches = [], onCustomSwatchesChange } = {}) {
    const emit = /* @__PURE__ */ __name((r) => {
      if (typeof onPick === "function") onPick(r);
    }, "emit");
    let curFamily = "blue";
    let curShade = TW_MID_INDEX;
    let invertLightness = false;
    let mode = "theme";
    let customList = Array.isArray(customSwatches) ? customSwatches.filter(isHex).map((s) => s.toLowerCase()).slice(0, MAX_CUSTOM) : [];
    let selection = null;
    if (value && value.type === "tw" && value.family && TAILWIND[value.family]) {
      const idx = Math.max(0, Math.min(TW_SHADES.length - 1, Number(value.shadeIdx) || 0));
      curFamily = value.family;
      curShade = idx;
      invertLightness = !!value.invert;
      selection = { kind: "hex", hex: TAILWIND[value.family][idx] };
      mode = "tailwind";
    } else {
      selection = normalizeValue(value);
      if (selection && selection.kind === "hex") {
        const ex = exactTailwind(selection.hex);
        if (ex) {
          curFamily = ex.family;
          curShade = ex.shadeIdx;
          mode = "tailwind";
        } else {
          const near = nearestTailwind(selection.hex);
          if (near) {
            curFamily = near.family;
            curShade = near.shadeIdx;
          }
          mode = "custom";
        }
      }
    }
    const root = h("div", { class: "tps-color-field" });
    const tabs2 = { theme: tabBtn("theme", "Theme"), tailwind: tabBtn("tailwind", "Tailwind"), custom: tabBtn("custom", "Custom") };
    root.appendChild(h("div", { class: "tps-cf-tabs" }, tabs2.theme, tabs2.tailwind, tabs2.custom));
    function tabBtn(m, label) {
      const b = h("button", { type: "button", class: "tps-cf-tab", dataset: { mode: m } }, label);
      b.addEventListener("click", () => setMode(m));
      return b;
    }
    __name(tabBtn, "tabBtn");
    const paneTheme = h("div", { class: "tps-cf-pane", dataset: { pane: "theme" } });
    const featuredTokens = featured.map((f) => f.token);
    if (featured.length) {
      const featRow = h("div", { class: "tps-cf-featured" });
      for (const f of featured) {
        const color = resolveThemeToken(f.token);
        if (!color) continue;
        featRow.appendChild(themeTile(f.label, f.token, color));
      }
      if (featRow.children.length) paneTheme.appendChild(featRow);
    }
    for (const g of resolveThemeGroups({ exclude: featuredTokens })) {
      paneTheme.appendChild(h(
        "div",
        { class: "tps-cf-group" },
        h(
          "div",
          { class: "tps-cf-group-head" },
          h("span", { class: "tps-cf-group-label" }, g.label),
          g.hint ? h("span", { class: "tps-cf-group-hint" }, g.hint) : null
        ),
        h("div", { class: "tps-cf-dots" }, ...g.swatches.map((s) => themeDot(s.label, s.token, s.color)))
      ));
    }
    root.appendChild(paneTheme);
    const paneTw = h("div", { class: "tps-cf-pane", dataset: { pane: "tailwind" } });
    const hueCells = {};
    const hueRow = h("div", { class: "tps-cf-dots" });
    for (const fam of TW_FAMILIES) {
      const dot = h("button", {
        type: "button",
        class: "tps-cf-swatch tps-cf-dot tps-cf-hue-dot",
        dataset: { cfTip: fam },
        "aria-label": fam,
        style: { background: TAILWIND[fam][TW_MID_INDEX] }
      });
      dot.addEventListener("click", () => {
        curFamily = fam;
        buildLightRamp();
        pickTailwind(fam, curShade);
      });
      hueCells[fam] = dot;
      hueRow.appendChild(dot);
    }
    const lightRamp = h("div", { class: "tps-cf-ramp" });
    const invertCheckbox = h("input", { type: "checkbox", class: "tps-cf-invert-cb" });
    invertCheckbox.checked = invertLightness;
    const invertRow = h(
      "label",
      { class: "tps-cf-invert" },
      invertCheckbox,
      h("span", null, "Invert lightness in light/dark"),
      h("span", { class: "tps-cf-invert-hint" }, "e.g. 900 in light \u2192 100 in dark")
    );
    invertCheckbox.addEventListener("change", () => {
      invertLightness = invertCheckbox.checked;
      renderSelection();
      if (selection && selection.kind === "hex") {
        const ex = exactTailwind(selection.hex);
        if (ex) emit({ type: "tw", family: ex.family, shadeIdx: ex.shadeIdx, invert: invertLightness, hex: selection.hex });
      }
    });
    paneTw.appendChild(labeledGroup("Hue", hueRow));
    paneTw.appendChild(labeledGroup("Lightness", lightRamp));
    paneTw.appendChild(invertRow);
    root.appendChild(paneTw);
    function buildLightRamp() {
      lightRamp.textContent = "";
      TW_SHADES.forEach((s, si) => {
        const hex = TAILWIND[curFamily][si];
        const cell = h("button", {
          type: "button",
          class: "tps-cf-ramp-cell",
          dataset: { si: String(si), cfTip: `${curFamily}-${s} \xB7 ${hex}` },
          "aria-label": `${curFamily} ${s}`,
          style: { background: hex, color: textOn(hex) }
        }, String(s));
        cell.addEventListener("click", () => {
          curShade = si;
          pickTailwind(curFamily, si);
        });
        lightRamp.appendChild(cell);
      });
    }
    __name(buildLightRamp, "buildLightRamp");
    function pickTailwind(family, shadeIdx) {
      curFamily = family;
      curShade = shadeIdx;
      const hex = TAILWIND[family][shadeIdx];
      selection = { kind: "hex", hex };
      renderSelection();
      emit({ type: "tw", family, shadeIdx, invert: invertLightness, hex });
    }
    __name(pickTailwind, "pickTailwind");
    const paneCustom = h("div", { class: "tps-cf-pane", dataset: { pane: "custom" } });
    const customRow = h("div", { class: "tps-cf-dots tps-cf-custom-row" });
    const hexDot = h("span", { class: "tps-cf-hex-dot" });
    const hexInput = h("input", { type: "text", class: "tps-cf-hex-input", placeholder: "#hex", maxLength: 7, spellcheck: false, "aria-label": "Custom hex color" });
    const addBtn = h("button", { type: "button", class: "tps-cf-add" }, "Add");
    const removeBtn = h("button", { type: "button", class: "tps-cf-remove" }, "Remove");
    removeBtn.hidden = true;
    const countEl = h("span", { class: "tps-cf-custom-count" });
    paneCustom.appendChild(customRow);
    paneCustom.appendChild(h(
      "div",
      { class: "tps-cf-addrow" },
      h("span", { class: "tps-cf-hexbox" }, hexDot, hexInput),
      addBtn,
      removeBtn,
      countEl
    ));
    root.appendChild(paneCustom);
    removeBtn.addEventListener("click", () => {
      if (!selection || selection.kind !== "hex") return;
      const idx = customList.indexOf(selection.hex);
      if (idx >= 0) removeCustom(idx);
    });
    let dragIdx = -1;
    function renderCustomRow() {
      customRow.textContent = "";
      if (!customList.length) {
        customRow.appendChild(h("span", { class: "tps-cf-custom-empty" }, "No saved colors yet \u2014 add a hex, then select one and press Remove to delete it."));
      }
      customList.forEach((hex, i) => {
        const dot = h("button", {
          type: "button",
          class: "tps-cf-swatch tps-cf-dot tps-cf-custom-dot",
          draggable: "true",
          dataset: { hex, idx: String(i), cfTip: hex.toUpperCase() },
          "aria-label": hex,
          style: { background: hex }
        });
        dot.addEventListener("click", () => pickHex(hex));
        dot.addEventListener("dragstart", () => {
          dragIdx = i;
          dot.classList.add("is-dragging");
        });
        dot.addEventListener("dragend", () => dot.classList.remove("is-dragging"));
        dot.addEventListener("dragover", (e) => e.preventDefault());
        dot.addEventListener("drop", (e) => {
          e.preventDefault();
          if (dragIdx >= 0 && dragIdx !== i) reorderCustom(dragIdx, i);
          dragIdx = -1;
        });
        customRow.appendChild(dot);
      });
      countEl.textContent = `${customList.length}/${MAX_CUSTOM}`;
      renderSelection();
    }
    __name(renderCustomRow, "renderCustomRow");
    const commitCustom = /* @__PURE__ */ __name(() => {
      if (typeof onCustomSwatchesChange === "function") onCustomSwatchesChange(customList.slice());
    }, "commitCustom");
    function addCustom() {
      const hex = normHex(hexInput.value);
      if (!hex) return;
      if (!customList.includes(hex) && customList.length < MAX_CUSTOM) {
        customList = [...customList, hex];
        commitCustom();
        renderCustomRow();
      }
      hexInput.value = "";
      hexDot.style.background = "";
      pickHex(hex);
    }
    __name(addCustom, "addCustom");
    function removeCustom(i) {
      customList = customList.filter((_, j) => j !== i);
      commitCustom();
      renderCustomRow();
    }
    __name(removeCustom, "removeCustom");
    function reorderCustom(from, to) {
      const arr = customList.slice();
      const [m] = arr.splice(from, 1);
      arr.splice(to, 0, m);
      customList = arr;
      commitCustom();
      renderCustomRow();
    }
    __name(reorderCustom, "reorderCustom");
    addBtn.addEventListener("click", addCustom);
    hexInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addCustom();
      }
    });
    hexInput.addEventListener("input", () => {
      const hadHash = hexInput.value.trimStart().startsWith("#");
      const digits = hexInput.value.replace(/[^0-9a-fA-F]/g, "").slice(0, 6);
      const cleaned = (hadHash ? "#" : "") + digits;
      if (cleaned !== hexInput.value) hexInput.value = cleaned;
      const hex = normHex(hexInput.value);
      hexDot.style.background = hex || "";
      if (hex) {
        selection = { kind: "hex", hex };
        renderSelection();
        emit({ type: "hex", hex });
      }
    });
    let noneRef = null;
    if (allowNone) {
      const noneBtn = h("button", { type: "button", class: "tps-cf-none" }, h("span", { class: "tps-cf-none-sw" }), "No color");
      noneBtn.addEventListener("click", () => {
        selection = { kind: "none" };
        renderAll();
        emit(null);
      });
      root.appendChild(h("div", { class: "tps-cf-divider" }));
      root.appendChild(h("div", { class: "tps-cf-universal" }, noneBtn));
      noneRef = noneBtn;
    }
    function pickHex(hex) {
      selection = { kind: "hex", hex };
      renderSelection();
      emit({ type: "hex", hex });
    }
    __name(pickHex, "pickHex");
    function renderSelection() {
      root.querySelectorAll(".is-sel, .is-sel-mirror").forEach((e) => e.classList.remove("is-sel", "is-sel-mirror"));
      Object.values(hueCells).forEach((c) => c.classList.remove("is-active"));
      if (hueCells[curFamily]) hueCells[curFamily].classList.add("is-active");
      removeBtn.hidden = !(selection && selection.kind === "hex" && customList.includes(selection.hex));
      let twShadeSelected = false;
      if (selection) {
        if (selection.kind === "theme") {
          const el2 = root.querySelector(`.tps-cf-swatch[data-token="${cssEscape(selection.token)}"]`);
          if (el2) el2.classList.add("is-sel");
        } else if (selection.kind === "hex") {
          const selHex = selection.hex;
          const rc = lightRamp.querySelector(`.tps-cf-ramp-cell[data-si="${curShade}"]`);
          if (rc && TAILWIND[curFamily][curShade] === selHex) {
            rc.classList.add("is-sel");
            twShadeSelected = true;
          }
          customRow.querySelectorAll(".tps-cf-custom-dot").forEach((d) => {
            if (d.dataset.hex === selHex) d.classList.add("is-sel");
          });
        } else if (selection.kind === "none") {
          if (noneRef) noneRef.classList.add("is-sel");
        }
      }
      const canInvert = twShadeSelected && curShade !== TW_MID_INDEX;
      invertCheckbox.disabled = !canInvert;
      invertRow.classList.toggle("is-disabled", !canInvert);
      if (canInvert && invertLightness) {
        const mc = lightRamp.querySelector(`.tps-cf-ramp-cell[data-si="${mirrorShadeIdx(curShade)}"]`);
        if (mc) mc.classList.add("is-sel-mirror");
      }
    }
    __name(renderSelection, "renderSelection");
    function setMode(m) {
      mode = m;
      for (const k in tabs2) tabs2[k].classList.toggle("is-active", k === m);
      paneTheme.classList.toggle("is-active", m === "theme");
      paneTw.classList.toggle("is-active", m === "tailwind");
      paneCustom.classList.toggle("is-active", m === "custom");
    }
    __name(setMode, "setMode");
    function renderAll() {
      setMode(mode);
      renderSelection();
    }
    __name(renderAll, "renderAll");
    function themeTile(label, token, color) {
      const tile = h(
        "button",
        { type: "button", class: "tps-cf-swatch tps-cf-tile", dataset: { token }, "aria-label": label },
        h("span", { class: "tps-cf-tile-dot", style: { background: color } }),
        h("span", { class: "tps-cf-tile-label" }, label)
      );
      tile.addEventListener("click", () => selectTheme(token));
      return tile;
    }
    __name(themeTile, "themeTile");
    function themeDot(label, token, color) {
      const dot = h("button", { type: "button", class: "tps-cf-swatch tps-cf-dot", dataset: { token, cfTip: label }, "aria-label": label, style: { background: color } });
      dot.addEventListener("click", () => selectTheme(token));
      return dot;
    }
    __name(themeDot, "themeDot");
    function selectTheme(token) {
      selection = { kind: "theme", token };
      renderSelection();
      const rendered = resolveThemeToken(token);
      emit({ type: "theme", token, hex: renderedToHex(rendered) || rendered });
    }
    __name(selectTheme, "selectTheme");
    function labeledGroup(label, body) {
      return h("div", { class: "tps-cf-group" }, h("div", { class: "tps-cf-group-head" }, h("span", { class: "tps-cf-group-label" }, label)), body);
    }
    __name(labeledGroup, "labeledGroup");
    installInstantTooltip();
    buildLightRamp();
    renderCustomRow();
    if (selection && selection.kind === "hex" && mode === "custom" && !customList.includes(selection.hex)) {
      hexInput.value = selection.hex;
      hexDot.style.background = selection.hex;
    }
    renderAll();
    return root;
  }
  __name(colorField, "colorField");
  function normalizeValue(value) {
    if (!value) return null;
    if (value.type === "hex" && isHex(value.hex)) return { kind: "hex", hex: value.hex.toLowerCase() };
    if (value.type === "theme" && value.token) return { kind: "theme", token: value.token };
    return null;
  }
  __name(normalizeValue, "normalizeValue");
  function cssEscape(s) {
    return String(s).replace(/"/g, '\\"');
  }
  __name(cssEscape, "cssEscape");
  function normHex(input) {
    if (typeof input !== "string") return null;
    let s = input.trim().toLowerCase();
    if (!s) return null;
    if (!s.startsWith("#")) s = `#${s}`;
    if (/^#[0-9a-f]{3}$/.test(s)) s = `#${s.slice(1).split("").map((c) => c + c).join("")}`;
    return /^#[0-9a-f]{6}$/.test(s) ? s : null;
  }
  __name(normHex, "normHex");
  function textOn(hex) {
    const n = parseInt(hex.slice(1), 16);
    const r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
    const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return l > 0.6 ? "rgba(0,0,0,0.72)" : "rgba(255,255,255,0.92)";
  }
  __name(textOn, "textOn");
  function renderedToHex(str) {
    if (!str) return "";
    if (/^#[0-9a-f]{6}$/i.test(str)) return str.toLowerCase();
    const m = str.match(/rgba?\(([^)]+)\)/i);
    if (!m) return "";
    const parts = m[1].split(",").map((s) => parseFloat(s.trim()));
    if (parts.length < 3 || parts.some((n) => Number.isNaN(n))) return "";
    const t = /* @__PURE__ */ __name((n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0"), "t");
    return `#${t(parts[0])}${t(parts[1])}${t(parts[2])}`;
  }
  __name(renderedToHex, "renderedToHex");

  // ../../shared/settings-ui/palettes.js
  var PALETTE_PRESETS = Object.freeze([
    { id: "rainbow", label: "Rainbow", shadeIdx: 5, families: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"] },
    { id: "sunset", label: "Sunset", shadeIdx: 5, families: ["rose", "red", "orange", "amber", "yellow"] },
    { id: "fire", label: "Fire", shadeIdx: 5, families: ["yellow", "amber", "orange", "red"] },
    { id: "ocean", label: "Ocean", shadeIdx: 5, families: ["teal", "cyan", "sky", "blue", "indigo"] },
    { id: "forest", label: "Forest", shadeIdx: 6, families: ["lime", "green", "emerald", "teal", "cyan"] },
    { id: "meadow", label: "Meadow", shadeIdx: 5, families: ["lime", "green", "emerald", "teal"] },
    { id: "berry", label: "Berry", shadeIdx: 5, families: ["blue", "indigo", "violet", "purple", "fuchsia", "pink"] },
    { id: "candy", label: "Candy", shadeIdx: 5, families: ["rose", "pink", "fuchsia", "purple", "violet"] },
    { id: "warm", label: "Warm", shadeIdx: 5, families: ["red", "orange", "amber", "yellow", "rose"] },
    { id: "cool", label: "Cool", shadeIdx: 5, families: ["teal", "cyan", "sky", "blue", "indigo", "violet"] },
    { id: "neon", label: "Neon", shadeIdx: 4, families: ["lime", "cyan", "blue", "fuchsia", "rose"] },
    { id: "pastels", label: "Pastels", shadeIdx: 3, families: ["rose", "orange", "amber", "lime", "emerald", "sky", "blue", "violet", "fuchsia"] },
    { id: "jewel", label: "Jewel", shadeIdx: 7, families: ["emerald", "teal", "blue", "violet", "fuchsia", "rose"] },
    { id: "grayscale", label: "Grayscale", family: "slate", shades: [5, 6, 7, 8, 9] },
    { id: "mono", label: "Mono Blue", family: "blue", shades: [4, 5, 6, 7, 8] }
  ]);
  function palettePresetHexes(preset, { shadeShift = 0 } = {}) {
    if (!preset) return [];
    const clamp = /* @__PURE__ */ __name((i) => Math.max(0, Math.min(TW_SHADES.length - 1, i)), "clamp");
    const out = [];
    if (preset.family && Array.isArray(preset.shades)) {
      const ramp = TAILWIND[preset.family];
      if (!ramp) return [];
      for (const shade of preset.shades) {
        const hex = ramp[clamp(shade + shadeShift)];
        if (typeof hex === "string") out.push(hex);
      }
      return out;
    }
    const idx = clamp((preset.shadeIdx ?? TW_MID_INDEX) + shadeShift);
    for (const family of preset.families || []) {
      const hex = TAILWIND[family] ? TAILWIND[family][idx] : null;
      if (typeof hex === "string") out.push(hex);
    }
    return out;
  }
  __name(palettePresetHexes, "palettePresetHexes");
  function samplePalette(preset, count, opts = {}) {
    const hexes = palettePresetHexes(preset, opts);
    if (!hexes.length) return [];
    const n = Math.max(1, Math.round(count));
    if (n === 1) return [hexes[0]];
    if (hexes.length === 1) return Array.from({ length: n }, () => hexes[0]);
    const out = [];
    for (let i = 0; i < n; i++) {
      out.push(hexes[Math.round(i / (n - 1) * (hexes.length - 1))]);
    }
    return out;
  }
  __name(samplePalette, "samplePalette");

  // panel.js
  var UPSTREAM_REPO = "https://github.com/Sadsnake1/cursor-smith";
  var UPSTREAM_AUTHOR = "https://github.com/Sadsnake1";
  var link = /* @__PURE__ */ __name((href, text) => h("a", { href, target: "_blank", rel: "noopener noreferrer" }, text), "link");
  function renderPanel(root, ctl) {
    const s = ctl.settings;
    const check = /* @__PURE__ */ __name((key, label, desc) => optionRow({
      label,
      desc,
      checked: !!s[key],
      onChange: /* @__PURE__ */ __name((e) => ctl.set({ [key]: e.target.checked }), "onChange")
    }), "check");
    const checkShape = /* @__PURE__ */ __name((key, label, desc) => optionRow({
      label,
      desc,
      checked: !!s[key],
      onChange: /* @__PURE__ */ __name((e) => {
        ctl.set({ [key]: e.target.checked });
        ctl.rerender();
      }, "onChange")
    }), "checkShape");
    const slider = /* @__PURE__ */ __name((key, label, opts) => {
      const row = sliderRow({
        label,
        value: Number(s[key]),
        min: opts.min,
        max: opts.max,
        step: opts.step,
        format: opts.format,
        defaultValue: (
          /** @type {any} */
          DEFAULTS[key]
        ),
        onChange: /* @__PURE__ */ __name((v) => ctl.setLive({ [key]: v }), "onChange")
      });
      const input = row.querySelector('input[type="range"]');
      if (input) input.addEventListener("change", () => ctl.set({ [key]: Number(
        /** @type {HTMLInputElement} */
        input.value
      ) }));
      return row;
    }, "slider");
    const num = /* @__PURE__ */ __name((key, label, opts) => {
      const row = numberRow({
        label,
        value: Number(s[key]),
        min: opts.min,
        max: opts.max,
        step: opts.step,
        unit: opts.unit,
        defaultValue: (
          /** @type {any} */
          DEFAULTS[key]
        ),
        onChange: /* @__PURE__ */ __name((v) => {
          if (Number.isFinite(v)) ctl.setLive({ [key]: v });
        }, "onChange")
      });
      const input = row.querySelector('input[type="number"]');
      if (input) {
        const commit = /* @__PURE__ */ __name(() => ctl.set({ [key]: Number(
          /** @type {HTMLInputElement} */
          input.value
        ) }), "commit");
        input.addEventListener("change", commit);
        input.addEventListener("blur", commit);
      }
      return row;
    }, "num");
    const color = /* @__PURE__ */ __name((key, label) => h(
      "div",
      { class: "cs-color-row" },
      h("div", { class: "cs-color-label" }, label),
      h("div", { class: "cs-color-field" }, colorField({
        value: { type: "hex", hex: s[key] },
        allowNone: false,
        // a cursor always has a colour
        featured: [{ label: "Accent", token: "--logo-color" }],
        onPick: /* @__PURE__ */ __name((r) => {
          if (r && r.hex) ctl.set({ [key]: r.hex });
        }, "onPick")
      }))
    ), "color");
    const sub = /* @__PURE__ */ __name((children) => h("div", { style: { marginLeft: "18px", marginTop: "2px" } }, children.filter(Boolean)), "sub");
    const prev = (
      /** @type {HTMLTextAreaElement | null} */
      root.querySelector(".cs-demo")
    );
    const prevValue = prev ? prev.value : "";
    const prevFocused = !!prev && root.ownerDocument.activeElement === prev;
    const prevStart = prev ? prev.selectionStart : 0;
    const prevEnd = prev ? prev.selectionEnd : 0;
    const demo = h("textarea", {
      class: "cs-demo",
      rows: 3,
      spellcheck: "false",
      "aria-label": "Cursor preview",
      placeholder: "Type here to see your cursor\u2026\nPress Enter for Thunderstrike."
    });
    if (prevValue) demo.value = prevValue;
    const presetsBody = buildPresets(ctl);
    const cursorBody = [
      tabs({
        options: [
          { value: "Box", label: "Box" },
          { value: "Line", label: "Line" },
          { value: "Underline", label: "Underline" },
          { value: "None", label: "None" }
        ],
        value: s.cursorStyle,
        onChange: /* @__PURE__ */ __name((v) => {
          ctl.set({ cursorStyle: v });
          ctl.rerender();
        }, "onChange")
      }),
      s.cursorStyle === "None" ? optionNote("Thymer draws the caret, at its own size and blink rate. Your colour below still applies to it, and every effect layers on top \u2014 blinking, motion and shape settings do not, since Thymer owns those here.") : null,
      // Thickness is the LINE stem's width and nothing else reads it, so it was
      // a dead control on Box and Underline.
      s.cursorStyle === "Line" ? num("caretWidthPx", "Thickness", { min: 1, max: 12, step: 0.5, unit: "px" }) : null,
      s.cursorStyle === "None" ? null : slider("cursorOpacity", "Opacity", { min: 0.1, max: 1, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") }),
      s.cursorStyle === "None" ? null : check("glow", "Glow", "Soft halo around the cursor."),
      s.cursorStyle === "Box" ? checkShape("boxHollow", "Hollow", "Outline only, no fill.") : null,
      s.cursorStyle === "Box" && s.boxHollow ? sub([num("boxHollowWidth", "Outline width", { min: 1, max: 8, step: 0.5, unit: "px" })]) : null,
      s.cursorStyle === "Box" && !s.boxHollow ? check("showChar", "Show the letter inside", "Draws the character under the cursor in inverted colour.") : null,
      s.cursorStyle === "Line" ? check("lineSerifs", "Serifs", "Caps on the stem \u2014 the classic I-beam.") : null,
      s.cursorStyle === "Underline" ? num("underlineWidthPx", "Bar thickness", { min: 0, max: 12, step: 0.5, unit: "px" }) : null,
      s.cursorStyle === "Underline" ? optionNote("0 scales the bar with the line height.") : null
    ];
    const paletteChips = h(
      "div",
      { class: "cs-palette-grid" },
      PALETTE_PRESETS.map((preset) => {
        const n = Math.max(2, Math.min(4, Math.round(s.gradientCount || 2)));
        const darkStops = samplePalette(preset, n);
        const lightStops = samplePalette(preset, n, { shadeShift: 2 });
        if (!darkStops.length) return null;
        return h("button", {
          type: "button",
          class: "cs-palette-chip",
          title: preset.label,
          "aria-label": `Apply the ${preset.label} palette`,
          style: { backgroundImage: `linear-gradient(90deg, ${darkStops.join(", ")})` },
          onClick: /* @__PURE__ */ __name(() => {
            const patch = {};
            darkStops.forEach((hex, i) => {
              patch["gradientDark" + (i + 1)] = hex;
            });
            lightStops.forEach((hex, i) => {
              patch["gradientLight" + (i + 1)] = hex;
            });
            ctl.set(patch);
            ctl.rerender();
            ctl.toast(`Palette: ${preset.label}`);
          }, "onClick")
        }, h("span", { class: "cs-palette-name" }, preset.label));
      }).filter(Boolean)
    );
    const colorBody = [
      checkShape("gradientEnabled", "Gradient", "Paint the cursor with a colour ramp instead of one flat colour."),
      ...s.gradientEnabled ? [
        num("gradientCount", "Number of stops", { min: 2, max: 4, step: 1 }),
        paletteChips,
        optionNote("Pick a palette to fill every stop at once, or set them by hand below."),
        ...gradientColors(s, color)
      ] : [
        color("colorDark", "Dark theme"),
        color("colorLight", "Light theme")
      ]
    ];
    const blinkBody = [
      checkShape("blinkingEnabled", "Blinking"),
      ...s.blinkingEnabled ? [sub([
        slider("blinkSpeed", "Speed", { min: 0.1, max: 5, step: 0.1, format: /* @__PURE__ */ __name((v) => v.toFixed(1) + "\xD7", "format") }),
        slider("blinkOnOffBalance", "Balance", { min: 0.1, max: 0.9, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "% lit", "format") }),
        num("blinkDelayMs", "Delay after typing", { min: 0, max: 5e3, step: 50, unit: "ms" }),
        optionNote("How long the cursor stays fully lit after any move or keystroke before blinking resumes."),
        checkShape("blinkBreathing", "Breathing", "Shrink and swell instead of fading out, so the cursor never disappears."),
        s.blinkBreathing ? sub([slider("blinkBreathDepth", "Breath depth", { min: 0.05, max: 0.5, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") })]) : null
      ])] : [],
      check("hideNativeCaret", "Hide Thymer's own caret", "Turn this off to see both at once \u2014 useful when diagnosing alignment."),
      check("hideOnWindowBlur", "Hide when the window loses focus", "What every other writing app does.")
    ];
    const smoothBody = [
      checkShape("smoothEnabled", "Smooth movement", "The cursor glides between positions instead of jumping."),
      ...s.smoothEnabled ? [sub([
        slider("smoothness", "Glide", { min: 0.05, max: 0.3, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") }),
        slider("catchUpSpeed", "Catch-up speed", { min: 0.3, max: 0.8, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") }),
        checkShape("smoothAdaptive", "Speed up when typing fast"),
        s.smoothAdaptive ? sub([slider("maxCatchUpSpeed", "Max catch-up", { min: 0.5, max: 1, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") })]) : null,
        // Needs a blink to suppress.
        s.blinkingEnabled ? check("smoothStopBlinking", "Don't blink while typing") : null
      ])] : [],
      // Outside the smoothEnabled block on purpose: it governs the smear and the
      // ghost too, both of which streak across line breaks with glide switched off.
      check("snapOnNewline", "Snap across line breaks", "Jump to the new line instead of sweeping diagonally through the text between."),
      num("moveDelayMs", "Movement delay", { min: 0, max: 400, step: 10, unit: "ms" })
    ];
    const smearBody = [
      checkShape("smear", "Motion smear", "The cursor stretches along its line of travel."),
      ...s.smear ? [sub([
        slider("smearStiffness", "Stiffness", { min: 0.05, max: 1, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") }),
        slider("smearTrailingStiffness", "Trailing stiffness", { min: 0.05, max: 1, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") }),
        slider("smearDamping", "Damping", { min: 0.1, max: 1, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") }),
        // Only reachable on a hollow Box — every other style is already solid,
        // so showing it elsewhere would be another control that does nothing.
        s.cursorStyle === "Box" && s.boxHollow ? check("smearFillHollow", "Fill while smearing", "A stretched outline reads as a hollow blob; filling it makes the smear one solid sweep. The outline returns as it settles.") : null,
        checkShape("smearTaper", "Tapered trail", "Narrow the trailing end to a point, like a comet tail."),
        s.smearTaper ? sub([slider("smearTaperAmount", "Taper amount", { min: 0, max: 1, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") })]) : null
      ])] : []
    ];
    const effectsBody = [
      checkShape("popLetters", "Popping letters", "Typed characters fly off the cursor."),
      s.popLetters ? sub([check("popRainbow", "Rainbow", "Step each letter through the colour wheel.")]) : null,
      checkShape("flameTrail", "Pixel trail", "A burst of fading pixels every time the cursor moves."),
      ...s.flameTrail ? [sub([
        check("backspaceDisintegrate", "Backspace disintegration", "Deleting throws the pixels outward in inverted colours.")
      ])] : [],
      checkShape("thunderstrike", "Thunderstrike", "Enter calls down a bolt of pixelated lightning onto the new line."),
      ...s.thunderstrike ? [sub([
        num("thunderstrikeSize", "Bolt size", { min: 1, max: 8, step: 1, unit: "px" }),
        slider("thunderstrikeStrength", "Strength", { min: 0.1, max: 1, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") }),
        check("thunderstrikeHalo", "Halo", "A soft glow around the bolt.")
      ])] : [],
      checkShape("stardustEnabled", "Stardust", "A slow stream of drifting, fading motes."),
      ...s.stardustEnabled ? [sub([
        checkShape("stardustAlwaysOn", "Always on", "Stream continuously instead of only while idle."),
        s.stardustAlwaysOn ? null : num("stardustDelayMs", "Idle delay", { min: 0, max: 1e4, step: 100, unit: "ms" }),
        slider("stardustRate", "Density", { min: 0.2, max: 3, step: 0.1, format: /* @__PURE__ */ __name((v) => v.toFixed(1) + "\xD7", "format") }),
        checkShape("stardustOrbit", "Orbit", "Motes circle the cursor like fireflies instead of drifting up."),
        s.stardustOrbit ? sub([num("stardustOrbitRadius", "Orbit radius", { min: 6, max: 80, step: 1, unit: "px" })]) : null
      ])] : [],
      checkShape("speedDemon", "Speed demon", "The cursor heats toward white-hot as you type faster."),
      ...s.speedDemon ? [sub([
        slider("speedDemonSensitivity", "Sensitivity", { min: 0.5, max: 2, step: 0.1, format: /* @__PURE__ */ __name((v) => v.toFixed(1) + "\xD7", "format") }),
        checkShape("speedDemonSparks", "Fire sparks", "Throw embers off the cursor at high heat."),
        ...s.speedDemonSparks ? [sub([
          slider("speedDemonSparkQuantity", "Spark quantity", { min: 0, max: 3, step: 0.1, format: /* @__PURE__ */ __name((v) => v.toFixed(1) + "\xD7", "format") }),
          num("speedDemonSparkTrail", "Spark trail", { min: 0, max: 30, step: 1, unit: "px" })
        ])] : []
      ])] : [],
      checkShape("energyEffect", "Energy beam", "A brightness wave travelling along the cursor."),
      ...s.energyEffect ? [sub([
        slider("energySpeed", "Beam speed", { min: 0.2, max: 3, step: 0.1, format: /* @__PURE__ */ __name((v) => v.toFixed(1) + "\xD7", "format") }),
        s.gradientEnabled ? check("energyAurora", "Aurora", "Warp and cross-mix the gradient instead of scrolling it rigidly.") : optionNote("Turn Gradient on for the Aurora variant.")
      ])] : [],
      checkShape("crtEffect", "CRT effect", "A phosphor trail behind the cursor, and the glow halo."),
      ...s.crtEffect ? [sub([
        num("trailLength", "Trail length", { min: 1, max: 40, step: 1 }),
        num("trailFadeMs", "Trail fade", { min: 80, max: 2e3, step: 10, unit: "ms" })
      ])] : []
    ];
    const contextBody = [
      checkShape("selectionColorEnabled", "Selection colour", "Switch colour while text is selected."),
      ...s.selectionColorEnabled ? [sub([
        color("selectionColorDark", "Dark theme"),
        color("selectionColorLight", "Light theme")
      ])] : [],
      checkShape("rowTypeTint", "Tint by row type", "Headings, tasks, code and quotes each shift the cursor\u2019s hue."),
      ...s.rowTypeTint ? [sub([
        slider("rowTypeTintAmount", "Shift", { min: 0, max: 180, step: 5, format: /* @__PURE__ */ __name((v) => v + "\xB0", "format") }),
        optionNote("Plain text keeps your colour; every other row type moves away from it.")
      ])] : []
    ];
    const idleBody = [
      checkShape("idleFadeEnabled", "Fade when idle", "Dim the cursor after you stop typing."),
      ...s.idleFadeEnabled ? [sub([
        num("idleFadeDelayMs", "After", { min: 500, max: 3e4, step: 250, unit: "ms" }),
        slider("idleFadeTo", "Fade to", { min: 0, max: 0.9, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") })
      ])] : [],
      checkShape("ghostEnabled", "Ghost cursor", "A second, fainter cursor trailing behind the real one."),
      ...s.ghostEnabled ? [sub([
        slider("ghostOpacity", "Ghost opacity", { min: 0.05, max: 0.8, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") }),
        slider("ghostLag", "Catch-up", { min: 0.01, max: 0.3, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") })
      ])] : []
    ];
    const feedbackBody = [
      checkShape("comboEnabled", "Combo", "Sustained typing streaks escalate the cursor."),
      ...s.comboEnabled ? [sub([
        num("comboThreshold", "Full combo at", { min: 5, max: 100, step: 1, unit: " keys" }),
        check("comboGlow", "Glow with the streak"),
        check("comboShower", "Throw sparks at high streak"),
        optionNote("A streak resets after about a second without typing.")
      ])] : [],
      checkShape("shakeEnabled", "Shake on delete", "A short kick when you press Backspace or Delete."),
      ...s.shakeEnabled ? [sub([
        slider("shakeStrength", "Strength", { min: 0.5, max: 12, step: 0.5, format: /* @__PURE__ */ __name((v) => v + "px", "format") }),
        num("shakeDurationMs", "Duration", { min: 60, max: 600, step: 10, unit: "ms" })
      ])] : [],
      checkShape("soundEnabled", "Typewriter sound", "A synthesised click on every keystroke."),
      ...s.soundEnabled ? [sub([
        slider("soundVolume", "Volume", { min: 0.01, max: 1, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") }),
        slider("soundPitch", "Pitch", { min: 0.4, max: 2.5, step: 0.05, format: /* @__PURE__ */ __name((v) => v.toFixed(2) + "\xD7", "format") }),
        slider("soundVariation", "Variation", { min: 0, max: 1, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") }),
        optionNote("Never included when you roll a random look \u2014 a surprise noise is not consent.")
      ])] : []
    ];
    const torchBody = [
      checkShape("torchEffect", "Torch spotlight", "Darken the panel except for a pool of light around the cursor."),
      ...s.torchEffect ? [sub([
        tabs({
          options: [
            { value: "caret", label: "Follow cursor" },
            { value: "mouse", label: "Follow pointer" },
            { value: "auto", label: "Auto" }
          ],
          value: s.overlayFollowMode,
          onChange: /* @__PURE__ */ __name((v) => ctl.set({ overlayFollowMode: v }), "onChange")
        }),
        num("overlayRadius", "Light size", { min: 60, max: 900, step: 10, unit: "px" }),
        slider("overlayDarkness", "Darkness", { min: 0, max: 1, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") }),
        slider("overlayIntensity", "Warmth", { min: 0, max: 1, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") }),
        color("overlayColor", "Light colour"),
        slider("overlaySpeed", "Follow speed", { min: 0.02, max: 1, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") }),
        // Needs a blink to sync to; with blinking off it did nothing at all.
        s.blinkingEnabled ? checkShape("overlayBlinkSync", "Blink sync", "The light breathes with the cursor\u2019s blink.") : optionNote("Blink sync needs blinking switched on."),
        s.overlayBlinkSync && s.blinkingEnabled ? sub([slider("overlayBlinkDepth", "Blink depth", { min: 0.05, max: 0.6, step: 0.01, format: /* @__PURE__ */ __name((v) => Math.round(v * 100) + "%", "format") })]) : null
      ])] : []
    ];
    const built = panel({ pluginClass: `${ROOT_CLASS}-panel` }, [
      // Cast: pluginHeader's opts typedef does not include `localUnavailable`
      // inside `scope`, though it is accepted and forwarded.
      pluginHeader(
        /** @type {any} */
        {
          title: "Cursor Tweaks",
          lede: [
            "Forge your text cursor. Ported to Thymer from ",
            link(UPSTREAM_REPO, "Cursor-Smith"),
            " by ",
            link(UPSTREAM_AUTHOR, "SadSnake1"),
            " (MIT)."
          ],
          helper: ctl.conf?.instructions,
          icon: "wand",
          version: ctl.version,
          repository: ctl.conf?.repository,
          scope: ctl.scopeArgs(),
          killSwitch: { on: !ctl.disabled, onToggle: ctl.toggleDisabled },
          feedback: { data: ctl.data }
        }
      ),
      // Sticky so it stays reachable while you scroll the settings below it —
      // judging a blink rate or a smear means typing in it repeatedly, and
      // scrolling back to the top each time made that unusable.
      section({ label: "Preview", body: [demo, optionNote("Nothing typed here is saved.")], persistKey: "preview" }),
      section({ label: "Presets", collapsible: true, defaultOpen: false, body: presetsBody }),
      section({ label: "Cursor", body: cursorBody.filter(Boolean) }),
      section({ label: "Colour", collapsible: true, defaultOpen: false, body: colorBody.filter(Boolean) }),
      section({ label: "Blinking", collapsible: true, defaultOpen: false, body: blinkBody.filter(Boolean) }),
      section({ label: "Smooth movement", collapsible: true, defaultOpen: false, body: smoothBody.filter(Boolean) }),
      section({ label: "Motion smear", collapsible: true, defaultOpen: false, body: smearBody.filter(Boolean) }),
      section({ label: "After effects", collapsible: true, defaultOpen: false, body: effectsBody.filter(Boolean) }),
      section({ label: "Context", collapsible: true, defaultOpen: false, body: contextBody.filter(Boolean) }),
      section({ label: "Idle & ghost", collapsible: true, defaultOpen: false, body: idleBody.filter(Boolean) }),
      section({ label: "Feedback", collapsible: true, defaultOpen: false, body: feedbackBody.filter(Boolean) }),
      section({ label: "Torch", collapsible: true, defaultOpen: false, body: torchBody.filter(Boolean) })
    ]);
    const previewSection = built.querySelector(".tps-section");
    if (previewSection) {
      previewSection.classList.add("cs-sticky-preview");
      try {
        const bar = root.closest(".panel")?.querySelector(".panel-bar");
        const barH = bar ? Math.round(bar.getBoundingClientRect().height) : 0;
        if (barH > 0) built.style.setProperty("--cs-sticky-top", barH + "px");
      } catch {
      }
    }
    root.replaceChildren(built);
    if (prevFocused) {
      try {
        const el2 = (
          /** @type {HTMLTextAreaElement} */
          demo
        );
        el2.focus({ preventScroll: true });
        el2.setSelectionRange(prevStart, prevEnd);
      } catch {
      }
    }
  }
  __name(renderPanel, "renderPanel");
  function gradientColors(s, color) {
    const n = Math.max(2, Math.min(4, Math.round(s.gradientCount || 2)));
    const out = [];
    for (let i = 1; i <= n; i++) out.push(color("gradientDark" + i, `Dark ${i}`));
    for (let i = 1; i <= n; i++) out.push(color("gradientLight" + i, `Light ${i}`));
    return out;
  }
  __name(gradientColors, "gradientColors");
  function buildPresets(ctl) {
    const s = ctl.settings;
    const presets = s.presets || {};
    const names = Object.keys(presets);
    const nameInput = h("input", {
      type: "text",
      class: "cs-text-input",
      placeholder: "Name this look\u2026",
      value: ctl.pendingPresetName || "",
      // Kept on the controller rather than in this closure, so changing a
      // setting mid-way doesn't erase what has been typed when the panel
      // re-renders.
      onInput: /* @__PURE__ */ __name((e) => {
        ctl.pendingPresetName = e.target.value;
      }, "onInput"),
      onKeyDown: /* @__PURE__ */ __name((e) => {
        if (e.key === "Enter") savePreset();
      }, "onKeyDown")
    });
    const importInput = h("input", {
      type: "text",
      class: "cs-text-input",
      placeholder: "Paste a share code\u2026",
      onKeyDown: /* @__PURE__ */ __name((e) => {
        if (e.key === "Enter") importPreset();
      }, "onKeyDown")
    });
    function savePreset() {
      const name = String(nameInput.value || "").trim();
      if (!name) {
        ctl.toast("Give the preset a name first.");
        return;
      }
      ctl.set({ presets: { ...presets, [name]: pickLook(s) }, activePreset: name });
      ctl.pendingPresetName = "";
      ctl.rerender();
      ctl.toast(`Saved \u201C${name}\u201D.`);
    }
    __name(savePreset, "savePreset");
    function importPreset() {
      const decoded = codeToPreset(String(importInput.value || ""));
      if (!decoded) {
        ctl.toast("That share code couldn't be read.");
        return;
      }
      let name = decoded.name;
      let n = 2;
      while (Object.prototype.hasOwnProperty.call(presets, name)) name = `${decoded.name} ${n++}`;
      ctl.set({ presets: { ...presets, [name]: decoded.snap } });
      ctl.rerender();
      ctl.toast(`Imported \u201C${name}\u201D.`);
    }
    __name(importPreset, "importPreset");
    function loadPreset(name, snapshot) {
      const snap = snapshot || presets[name];
      if (!snap) return;
      ctl.set({ ...normalizePresetSnapshot(snap), activePreset: snapshot ? "" : name });
      ctl.rerender();
      ctl.toast(`Loaded \u201C${name}\u201D.`);
    }
    __name(loadPreset, "loadPreset");
    function editPreset(name) {
      loadPreset(name);
      ctl.pendingPresetName = name;
      ctl.rerender();
    }
    __name(editPreset, "editPreset");
    function deletePreset(name) {
      const next = { ...presets };
      delete next[name];
      ctl.set({ presets: next, activePreset: s.activePreset === name ? "" : s.activePreset });
      ctl.rerender();
      ctl.toast(`Deleted \u201C${name}\u201D.`);
    }
    __name(deletePreset, "deletePreset");
    function copyCode(name, snapshot) {
      const snap = snapshot || presets[name];
      if (!snap) return;
      ctl.copyToClipboard(presetToCode(name, normalizePresetSnapshot(snap)));
      ctl.toast("Share code copied.");
    }
    __name(copyCode, "copyCode");
    const userRows = names.map((name) => h(
      "div",
      {
        class: "cs-preset-row" + (s.activePreset === name ? " cs-preset-active" : "")
      },
      h("span", { class: "cs-preset-name" }, name),
      h(
        "span",
        { class: "cs-preset-actions" },
        button({ label: "Load", onClick: /* @__PURE__ */ __name(() => loadPreset(name), "onClick") }),
        button({ label: "Edit", onClick: /* @__PURE__ */ __name(() => editPreset(name), "onClick") }),
        button({ label: "Copy", onClick: /* @__PURE__ */ __name(() => copyCode(name), "onClick") }),
        button({ label: "Delete", onClick: /* @__PURE__ */ __name(() => deletePreset(name), "onClick") })
      )
    ));
    const builtinRows = Object.entries(BUILTIN_PRESETS).map(([name, snap]) => h(
      "div",
      { class: "cs-preset-row" },
      h("span", { class: "cs-preset-name" }, name),
      h(
        "span",
        { class: "cs-preset-actions" },
        button({ label: "Load", onClick: /* @__PURE__ */ __name(() => loadPreset(name, snap), "onClick") }),
        button({ label: "Copy", onClick: /* @__PURE__ */ __name(() => copyCode(name, snap), "onClick") })
      )
    ));
    return [
      optionNote("Your presets"),
      ...userRows.length ? userRows : [optionNote("None yet. Dial the cursor in below, then save it here.")],
      h("div", { class: "cs-input-row" }, nameInput, button({ label: "Save", onClick: savePreset })),
      optionNote("A preset stores every look and effect setting \u2014 not the plugin on/off state or the two caret-hiding options."),
      h("div", { class: "cs-input-row" }, importInput, button({ label: "Import", onClick: importPreset })),
      h(
        "div",
        { class: "cs-input-row" },
        button({ label: "Roll a random look", onClick: /* @__PURE__ */ __name(() => ctl.randomize(), "onClick") }),
        button({ label: "Reset to defaults", onClick: /* @__PURE__ */ __name(() => ctl.resetLook(), "onClick") })
      ),
      optionNote("Rolling keeps your presets, the plugin on/off state and the caret-hiding options untouched. Save one you like before rolling again."),
      optionNote("Starting points"),
      ...builtinRows,
      optionNote("Load one, tweak it, then save it above under your own name.")
    ];
  }
  __name(buildPresets, "buildPresets");

  // plugin.js
  var PANEL_TYPE = "cursor-tweaks-settings";
  var PLUGIN_NAME = "Cursor Tweaks";
  var PLUGIN_VERSION = "2.0.0";
  var CANVAS_Z_INDEX = 60;
  var Plugin = class extends AppPlugin {
    static {
      __name(this, "Plugin");
    }
    /** @type {Record<string, any>} */
    _settings = normalizeSettings(null);
    /**
     * Per-device settings store (shared model): a device follows the synced
     * baseline until edited here; edits stay local until the explicit
     * "apply to all devices" push. Loads never write.
     *
     * (Field initializer is safe — construction only captures references; the
     * store first touches plugin context in onLoad's load().)
     */
    _settingsStore = createSettingsStore(this, {
      slug: "cursor-tweaks",
      key: "options",
      version: PLUGIN_VERSION,
      normalize: /* @__PURE__ */ __name((raw) => normalizeSettings(raw), "normalize")
    });
    /** @type {(() => void) | null} */
    _detachSettingsLifecycle = null;
    /** @type {(() => void) | null} */
    _cancelPillSettle = null;
    /** @type {HTMLElement | null} */
    _panelEl = null;
    /** @type {any} */
    _commandItem = null;
    /** @type {any[]} */
    _extraCommands = [];
    /** @type {CursorEngine | null} */
    _engine = null;
    /** @type {HTMLStyleElement | null} */
    _dynamicStyle = null;
    /** Kill switch: true = plugin loaded but no cursor is drawn. */
    _disabled = false;
    /** Survives a panel re-render so a half-typed preset name isn't erased. */
    pendingPresetName = "";
    onLoad() {
      pingInstall("cursor-tweaks");
      pingActive("cursor-tweaks");
      void syncPluginVersionOnLoad(this, PLUGIN_VERSION);
      void healPluginIdentity(this, {
        name: PLUGIN_NAME,
        icon: "wand",
        description: "Forge your text cursor \u2014 styles, colors, smooth motion, blinking, particle effects, and a torch spotlight.",
        sourceRepo: "https://github.com/akaready/thymer-cursor-tweaks",
        sourceFiles: { branch: "main", json: "plugin.json", js: "plugin.js" }
      });
      void this._migrateFromCursorSmith();
      this._disabled = readKillSwitch(this);
      this._settings = this._settingsStore.load().settings;
      this.ui.injectCSS(PANEL_CSS);
      this.ui.injectCSS(STATIC_CSS);
      this.ui.injectCSS(PANEL_LOCAL_CSS);
      this._commandItem = this.ui.addCommandPaletteCommand({
        label: `Plugin: ${PLUGIN_NAME}`,
        icon: "wand",
        onSelected: /* @__PURE__ */ __name(() => this._openPanel(), "onSelected")
      });
      this._extraCommands.push(this.ui.addCommandPaletteCommand({
        label: `${PLUGIN_NAME}: Toggle on/off`,
        icon: "wand",
        onSelected: /* @__PURE__ */ __name(() => this._toggleEnabled(), "onSelected")
      }));
      this._extraCommands.push(this.ui.addCommandPaletteCommand({
        label: `${PLUGIN_NAME}: Random look`,
        icon: "wand",
        onSelected: /* @__PURE__ */ __name(() => this._randomize(), "onSelected")
      }));
      this._extraCommands.push(this.ui.addCommandPaletteCommand({
        label: `${PLUGIN_NAME}: Cycle preset`,
        icon: "wand",
        onSelected: /* @__PURE__ */ __name(() => this._cyclePreset(), "onSelected")
      }));
      this._extraCommands.push(this.ui.addCommandPaletteCommand({
        label: `${PLUGIN_NAME}: Diagnose caret (5s)`,
        icon: "wand",
        onSelected: /* @__PURE__ */ __name(() => this._diagnoseCaret(), "onSelected")
      }));
      this.ui.registerCustomPanelType(PANEL_TYPE, (pluginPanel) => {
        try {
          pluginPanel.setTitle(`${PLUGIN_NAME} Settings`);
        } catch {
        }
        const root = pluginPanel.getElement();
        if (!root) return;
        this._panelEl = root;
        this._renderPanel();
      });
      this._detachSettingsLifecycle = this._settingsStore.attachLifecycle({
        onRemoteChange: /* @__PURE__ */ __name((settings) => {
          this._settings = settings;
          this._applySettings();
          this._renderPanel();
        }, "onRemoteChange")
      });
      try {
        const staleRoot = document.querySelector(`.${ROOT_CLASS}-panel`);
        if (staleRoot && staleRoot.parentElement) {
          this._panelEl = /** @type {HTMLElement} */
          staleRoot.parentElement;
          this._renderPanel();
          this._refreshScopePillUntilSettled();
        }
      } catch {
      }
      if (this._disabled) return;
      this._startEngine();
    }
    onUnload() {
      try {
        this._detachSettingsLifecycle?.();
      } catch {
      }
      this._detachSettingsLifecycle = null;
      this._cancelPillSettle?.();
      this._cancelPillSettle = null;
      try {
        this._stopEngine();
      } finally {
        document.body.classList.remove(BODY_ACTIVE_CLASS, BODY_HIDE_NATIVE_CLASS);
        try {
          this._dynamicStyle?.remove();
        } catch {
        }
        this._dynamicStyle = null;
      }
      if (this._commandItem) {
        this._commandItem.remove();
        this._commandItem = null;
      }
      for (const cmd of this._extraCommands) {
        try {
          cmd.remove();
        } catch {
        }
      }
      this._extraCommands = [];
      this._panelEl = null;
    }
    /**
     * Carry an install across the rename from "Cursor Smith".
     *
     * The display name and the repo URL both live in the plugin config, so a
     * rename normally means pushing a fresh config — and that REPLACES `custom`
     * wholesale, taking every setting with it. Renaming in place instead keeps
     * the settings bag untouched.
     *
     * `__source_repo` matters as much as the name: Plugins Manager identifies an
     * installed plugin by that URL, so an install still pointing at the old repo
     * would silently stop being offered updates.
     *
     * healPluginIdentity cannot do this — by design it only fills a MISSING repo
     * link and only repairs a stub name, so it would leave both old values alone.
     *
     * Runs at most once per session, and does nothing on a fresh install.
     */
    async _migrateFromCursorSmith() {
      const flag = "tps-renamed-cursor-tweaks";
      try {
        if (sessionStorage.getItem(flag) === "1") return;
      } catch {
      }
      try {
        await queuePluginConfigWrite(this, async () => {
          const api = await resolveConfigApi(this);
          if (!api || typeof api.saveConfiguration !== "function") return;
          const conf = (
            /** @type {Record<string, any>} */
            api.getConfiguration?.() || this.getConfiguration?.() || {}
          );
          const staleName = conf.name === "Cursor Smith";
          const staleRepo = typeof conf.__source_repo === "string" && conf.__source_repo.includes("thymer-cursor-smith");
          if (!staleName && !staleRepo) return;
          try {
            sessionStorage.setItem(flag, "1");
          } catch {
          }
          await api.saveConfiguration({
            ...conf,
            name: PLUGIN_NAME,
            // Spread, never replaced — this is the whole point of doing the
            // rename in place rather than through a config push.
            custom: { ...conf.custom || {} },
            __source_repo: "https://github.com/akaready/thymer-cursor-tweaks",
            __source_files: { branch: "main", json: "plugin.json", js: "plugin.js" }
          });
        });
      } catch {
      }
    }
    /* ---- engine lifecycle ------------------------------------------------ */
    _startEngine() {
      if (this._engine) return;
      this._engine = new CursorEngine({
        settings: this._settings,
        doc: document,
        zIndex: CANVAS_Z_INDEX,
        onFatal: /* @__PURE__ */ __name((err) => this._engineFailed(err), "onFatal")
      });
      this._engine.start();
      this._applyBodyClasses();
      this._applyNativeCaretTint();
    }
    _stopEngine() {
      if (!this._engine) return;
      try {
        this._engine.stop();
      } catch {
      }
      this._engine = null;
      this._applyBodyClasses();
      this._applyNativeCaretTint();
    }
    /**
     * The watchdog. We hide the native caret, so an engine that keeps throwing
     * leaves the user with nothing at all to type against — worse than having
     * no plugin. Restore the native caret, park the loop, and say so.
     * @param {any} err
     */
    _engineFailed(err) {
      console.error("[cursor-smith] engine stopped after repeated frame errors:", err);
      this._stopEngine();
      try {
        this.ui.addToaster({
          title: PLUGIN_NAME,
          message: "The cursor engine hit repeated errors and stopped. Thymer's own caret is back. Please report this from the plugin's settings panel.",
          dismissible: true,
          autoDestroyTime: 12e3
        });
      } catch {
      }
    }
    _applyBodyClasses() {
      const live = !!this._engine && !this._disabled;
      document.body.classList.toggle(BODY_ACTIVE_CLASS, live);
      const bodyless = this._settings.cursorStyle === "None";
      document.body.classList.toggle(
        BODY_HIDE_NATIVE_CLASS,
        live && !bodyless && !!this._settings.hideNativeCaret
      );
    }
    /**
     * Colour Thymer's OWN caret, for the 'None' style.
     *
     * None deliberately leaves Thymer to draw and blink the caret — that is the
     * point of it. But leaving it entirely alone made the colour control dead:
     * you would pick a colour and still get Thymer's default, blinking at
     * Thymer's pace. So the shape and rhythm stay Thymer's while the colour
     * becomes yours, by driving the same CSS variables its own caret CSS reads.
     *
     * Written to an owned <style> element rather than through injectCSS, which is
     * global, un-removable, and cannot carry a value that changes with a setting.
     */
    _applyNativeCaretTint() {
      const bodyless = this._settings.cursorStyle === "None";
      const live = !!this._engine && !this._disabled && !!this._settings.enabled;
      if (!this._dynamicStyle) {
        this._dynamicStyle = document.createElement("style");
        this._dynamicStyle.id = "cs-dynamic";
        document.head.appendChild(this._dynamicStyle);
      }
      if (!live || !bodyless) {
        this._dynamicStyle.textContent = "";
        return;
      }
      const dark = document.documentElement.classList.contains("theme-dark") || document.body.classList.contains("theme-dark") || !document.documentElement.classList.contains("theme-light");
      const raw = dark ? this._settings.colorDark : this._settings.colorLight;
      const color = /^#[0-9a-f]{6}$/i.test(String(raw)) ? raw : null;
      if (!color) {
        this._dynamicStyle.textContent = "";
        return;
      }
      this._dynamicStyle.textContent = `
body.${BODY_ACTIVE_CLASS} { --ed-caret-self-fg: ${color}; --ed-caret-blink-bg: ${color}; }
body.${BODY_ACTIVE_CLASS} div.listview-caret-self {
	color: ${color};
	background-color: ${color};
	border-color: ${color};
}`;
    }
    /** Push current settings into the engine. Guarded so panel edits made while
     *  the kill switch is off stage in the drafts without leaking effects. */
    _applySettings() {
      this._applyBodyClasses();
      this._applyNativeCaretTint();
      if (this._disabled) return;
      if (!this._settings.enabled) {
        this._stopEngine();
        return;
      }
      if (!this._engine) this._startEngine();
      else this._engine.setSettings(this._settings);
    }
    /* ---- settings mutation ----------------------------------------------- */
    /**
     * Persist a change. Everything discrete (checkboxes, colour picks, preset
     * actions) goes through here.
     * @param {Record<string, any>} patch
     */
    _set(patch) {
      this._settings = this._settingsStore.update(patch).settings;
      this._applySettings();
      this._refreshScopePill();
    }
    /**
     * Live preview without persisting — slider and number-field ticks. The
     * commit on `change` calls _set with the final value.
     * @param {Record<string, any>} patch
     */
    _setLive(patch) {
      this._settings = { ...this._settings, ...patch };
      this._applySettings();
    }
    /** Roll a random look. Touches only look keys — never presets or the switch. */
    _randomize() {
      this._set({ ...randomizeLook(), activePreset: "" });
      this._renderPanel();
      this._toast("Rolled a new look.");
    }
    /** Back to the shipped defaults, leaving presets and structural keys alone. */
    _resetLook() {
      this._set({ ...normalizePresetSnapshot(DEFAULTS), activePreset: "" });
      this._renderPanel();
      this._toast("Reset to defaults.");
    }
    /* ---- commands --------------------------------------------------------- */
    _toggleEnabled() {
      const next = !this._settings.enabled;
      this._set({ enabled: next });
      this._renderPanel();
      this._toast(next ? "Cursor Tweaks on." : "Cursor Tweaks off.");
    }
    _cyclePreset() {
      const presets = this._settings.presets || {};
      const names = Object.keys(presets);
      if (!names.length) {
        this._toast("No presets saved yet.");
        return;
      }
      const idx = names.indexOf(this._settings.activePreset);
      const next = names[(idx + 1) % names.length];
      this._set({ ...pickLook(presets[next]), activePreset: next });
      this._renderPanel();
      this._toast(`Preset: ${next}`);
    }
    /**
     * Live caret diagnostic.
     *
     * Shipping an invisible caret is close to undebuggable without this: it logs
     * what the engine is actually reading, per caret mutation, for five seconds.
     * It also answers the one question a static DOM dump cannot — whether
     * data-x / data-y are content-space (steady while scrolling) or viewport
     * space, which decides whether they are usable as an exact caret identity.
     */
    _diagnoseCaret() {
      const describe = /* @__PURE__ */ __name((el2) => {
        if (!(el2 instanceof HTMLElement)) return null;
        const r = el2.getBoundingClientRect();
        const cs = getComputedStyle(el2);
        const chain = [];
        for (let p = el2.parentElement, i = 0; p && i < 6; p = p.parentElement, i++) {
          chain.push(p.className ? `${p.tagName.toLowerCase()}.${String(p.className).split(/\s+/).join(".")}` : p.tagName.toLowerCase());
        }
        return {
          cls: el2.className,
          rect: { x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height) },
          data: { ...el2.dataset },
          css: {
            display: cs.display,
            visibility: cs.visibility,
            opacity: cs.opacity,
            position: cs.position,
            left: cs.left,
            top: cs.top,
            width: cs.width,
            height: cs.height,
            transform: cs.transform,
            borderLeftWidth: cs.borderLeftWidth,
            background: cs.backgroundColor
          },
          chain
        };
      }, "describe");
      const log = [];
      const sample = /* @__PURE__ */ __name((reason) => {
        const active = (
          /** @type {HTMLElement | null} */
          document.activeElement
        );
        const sel = window.getSelection();
        log.push({
          reason,
          t: Math.round(performance.now()),
          // EVERY candidate, not just the first: the live caret was not
          // the one querySelector returned, which is the whole reason
          // this diagnostic exists in its current form.
          carets: Array.from(document.querySelectorAll(CARET_EL_SEL)).map(describe),
          caretLayers: document.querySelectorAll(".listview-carets").length,
          panels: Array.from(document.querySelectorAll(".panel")).map((p) => p.className),
          appShell: !!document.querySelector(".app-chrome-panels"),
          caretRow: document.querySelector(".listitem.listitem-with-caret[data-guid]")?.getAttribute("data-guid") || null,
          active: active ? {
            tag: active.tagName,
            cls: active.className,
            id: active.id,
            editable: active.isContentEditable,
            inListitem: !!active.closest?.(".listitem[data-guid]"),
            inPanel: !!active.closest?.(".panel")
          } : null,
          selection: sel && sel.focusNode ? {
            nodeType: sel.focusNode.nodeType,
            offset: sel.focusOffset,
            parentCls: sel.focusNode.parentElement?.className || null,
            inListitem: !!sel.focusNode.parentElement?.closest?.(".listitem[data-guid]")
          } : null,
          engine: this._engine ? {
            gear: this._engine._canvasGear,
            source: this._engine._caretSource,
            hasCaret: !!this._engine.lastActive,
            // Geometry, to catch the re-measure oscillation that was the
            // main cause of the residual flicker.
            h: this._engine.lastActive ? Math.round(this._engine.lastActive.h * 100) / 100 : null,
            top: this._engine.lastActive ? Math.round(this._engine.lastActive.top * 100) / 100 : null
          } : null,
          // Whether our suppression is actually in force. If these classes are
          // missing, every rule in styles.js is inert and Thymer's own caret
          // is still blinking underneath ours.
          bodyClasses: document.body.className,
          // >1 of either means an orphaned instance is still painting.
          layers: {
            canvases: document.querySelectorAll(".cs-cursor-wrap").length,
            torches: document.querySelectorAll(".cs-torch-overlay").length
          },
          suppressing: {
            active: document.body.classList.contains(BODY_ACTIVE_CLASS),
            hideNative: document.body.classList.contains(BODY_HIDE_NATIVE_CLASS),
            // The proof: what the caret element actually computes to.
            caretOpacity: (() => {
              const el2 = document.querySelector(CARET_EL_SEL);
              if (!el2) return null;
              const cs = getComputedStyle(el2);
              return { opacity: cs.opacity, animationName: cs.animationName, background: cs.backgroundColor };
            })()
          }
        });
      }, "sample");
      sample("start");
      const mo = new MutationObserver(() => {
        if (log.length < 60) sample("mutation");
      });
      mo.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["class", "style"], childList: true });
      const onKey = /* @__PURE__ */ __name(() => {
        if (log.length < 60) sample("keydown");
      }, "onKey");
      window.addEventListener("keydown", onKey, true);
      this._toast("Diagnosing for 5s \u2014 click into the editor and type.");
      setTimeout(() => {
        mo.disconnect();
        window.removeEventListener("keydown", onKey, true);
        sample("end");
        const text = JSON.stringify(log, null, 2);
        console.log("[cursor-smith] caret diagnostic\n" + text);
        this._copyToClipboard(text);
        this._toast(`Caret diagnostic: ${log.length} samples, copied to clipboard.`);
      }, 5e3);
    }
    /* ---- scope pill ------------------------------------------------------- */
    _scopeArgs() {
      return {
        diverged: this._settingsStore.isDiverged(),
        localUnavailable: !!this._settingsStore.isLocalUnavailable(),
        onPush: /* @__PURE__ */ __name(() => {
          void this._settingsStore.pushToAll().then((ok) => {
            if (!ok) {
              this._toast('Could not save to all devices \u2014 the plugin config could not be written. Check the plugin\u2019s Config (does it have a "name"?) and try again.');
              return;
            }
            this._toast("Settings applied to all devices");
            this._refreshScopePillUntilSettled();
          });
        }, "onPush"),
        onDiscard: /* @__PURE__ */ __name(() => {
          this._settings = this._settingsStore.discardLocal();
          this._applySettings();
          this._renderPanel();
          this._toast("Reverted to synced settings");
        }, "onDiscard")
      };
    }
    /** Swap just the pill cluster — never nukes inputs mid-edit. */
    _refreshScopePill() {
      const el2 = this._panelEl?.querySelector?.(".tps-scope");
      if (el2) el2.replaceWith(scopeCluster(
        /** @type {any} */
        this._scopeArgs()
      ));
    }
    /** Post-push settle — see settleAfterPush in shared/plugin-settings.js. */
    _refreshScopePillUntilSettled() {
      this._cancelPillSettle?.();
      this._cancelPillSettle = this._settingsStore.settleAfterPush({
        onAdopt: /* @__PURE__ */ __name((settings) => {
          this._settings = settings;
          this._applySettings();
          this._renderPanel();
        }, "onAdopt"),
        refreshPill: /* @__PURE__ */ __name(() => this._refreshScopePill(), "refreshPill")
      });
    }
    /* ---- panel ------------------------------------------------------------ */
    async _openPanel() {
      if (this._panelEl && document.contains(this._panelEl)) return;
      const active = this.ui.getActivePanel && this.ui.getActivePanel();
      if (active) {
        active.navigateToCustomType(PANEL_TYPE);
        return;
      }
      const pluginPanel = await this.ui.createPanel();
      if (pluginPanel) pluginPanel.navigateToCustomType(PANEL_TYPE);
    }
    _renderPanel() {
      if (!this._panelEl) return;
      const plugin = this;
      renderPanel(
        this._panelEl,
        /** @type {any} */
        {
          version: PLUGIN_VERSION,
          conf: this.getConfiguration(),
          settings: this._settings,
          disabled: this._disabled,
          data: this.data,
          scopeArgs: /* @__PURE__ */ __name(() => this._scopeArgs(), "scopeArgs"),
          set: /* @__PURE__ */ __name((patch) => this._set(patch), "set"),
          setLive: /* @__PURE__ */ __name((patch) => this._setLive(patch), "setLive"),
          rerender: /* @__PURE__ */ __name(() => this._renderPanel(), "rerender"),
          randomize: /* @__PURE__ */ __name(() => this._randomize(), "randomize"),
          resetLook: /* @__PURE__ */ __name(() => this._resetLook(), "resetLook"),
          toggleDisabled: /* @__PURE__ */ __name((nextOn) => {
            void this._settingsStore.setDisabled(!nextOn);
          }, "toggleDisabled"),
          toast: /* @__PURE__ */ __name((msg) => this._toast(msg), "toast"),
          copyToClipboard: /* @__PURE__ */ __name((text) => this._copyToClipboard(text), "copyToClipboard"),
          // Proxied onto the plugin so a half-typed preset name survives the
          // panel re-render that any other setting change triggers.
          get pendingPresetName() {
            return plugin.pendingPresetName;
          },
          set pendingPresetName(v) {
            plugin.pendingPresetName = v;
          }
        }
      );
    }
    /* ---- small helpers ---------------------------------------------------- */
    /** @param {string} message */
    _toast(message) {
      try {
        this.ui.addToaster({ title: PLUGIN_NAME, message, dismissible: true, autoDestroyTime: 3500 });
      } catch {
      }
    }
    /** @param {string} text */
    _copyToClipboard(text) {
      try {
        void navigator.clipboard.writeText(text);
      } catch {
      }
    }
  };
  return __toCommonJS(plugin_exports);
})();
var Plugin = plugins.Plugin;
