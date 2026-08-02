// @ts-check
/**
 * ec.config.mjs — Expressive Code configuration
 * SmartOneDev TypeScript Guidebook
 */

import { defineEcConfig } from "@astrojs/starlight/expressive-code";
import { pluginFramesTexts } from "astro-expressive-code";

// Override copy button messages to match user requests
pluginFramesTexts.overrideTexts("id", { copyButtonCopied: "✓ Copied!", copyButtonTooltip: "Copy" });
pluginFramesTexts.overrideTexts("en", { copyButtonCopied: "✓ Copied!", copyButtonTooltip: "Copy" });

// ── Custom Headers Plugin ──────────────────────────────────────────────────
// Automatically infers and prefixes code block headers based on language,
// filename, or content. Supports standard Expressive Code title="..." syntax.
const customHeadersPlugin = {
  name: "custom-headers-plugin",
  hooks: {
    // Runs right after metadata options are parsed, before code rendering.
    preprocessCode: ({ codeBlock }) => {
      // Do nothing if the frame is explicitly disabled
      if (codeBlock.props.frame === "none") return;

      const titleText = codeBlock.props.title;
      const lang = (codeBlock.language || "").toLowerCase().trim();
      const code = codeBlock.code || "";

      // Helper to check if title already has an emoji prefix
      const hasEmoji = (str) => {
        return /^[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/.test(str);
      };

      // Case 1: Title/filename is already specified by the author (title="...")
      // or extracted from code comments (e.g. "// app.ts").
      if (titleText !== undefined && titleText.trim() !== "") {
        const title = titleText.trim();
        if (hasEmoji(title)) return;

        // Custom config mapping
        if (title.toLowerCase() === "package.json") {
          codeBlock.props.title = "📦 package.json";
        } else if (title.toLowerCase() === "tsconfig.json") {
          codeBlock.props.title = "⚙️ tsconfig.json";
        } else if (
          title.toLowerCase().endsWith(".config.js") ||
          title.toLowerCase().endsWith(".config.ts") ||
          title.toLowerCase().endsWith(".config.mjs") ||
          title.toLowerCase().endsWith(".config.cjs") ||
          title.toLowerCase().endsWith(".config.json") ||
          title.startsWith(".env") ||
          title === "Dockerfile" ||
          title === "docker-compose.yml" ||
          title === "docker-compose.yaml" ||
          title === "package-lock.json" ||
          title === "pnpm-lock.yaml" ||
          title === "yarn.lock"
        ) {
          codeBlock.props.title = `⚙️ ${title}`;
        } else if (
          title === "Terminal" ||
          ["bash", "sh", "shell", "zsh", "fish", "powershell", "ps1", "cmd"].includes(lang)
        ) {
          codeBlock.props.title = `💻 ${title}`;
        } else if (title === "Output") {
          codeBlock.props.title = `🖥️ ${title}`;
        } else if (title === "Console") {
          codeBlock.props.title = `📋 ${title}`;
        } else if (title.includes(".")) {
          codeBlock.props.title = `📄 ${title}`;
        } else {
          codeBlock.props.title = `📄 ${title}`;
        }
        return;
      }

      // Case 2: No title exists. Auto-infer a semantic header from the language/content.
      if (["bash", "sh", "shell", "zsh", "fish", "powershell", "ps1", "cmd"].includes(lang)) {
        codeBlock.props.title = "💻 Terminal";
      } else if (lang === "json") {
        if (code.includes('"name":') && code.includes('"dependencies"')) {
          codeBlock.props.title = "📦 package.json";
        } else if (code.includes('"compilerOptions"')) {
          codeBlock.props.title = "⚙️ tsconfig.json";
        } else {
          codeBlock.props.title = "📦 JSON";
        }
      } else if (lang === "ts" || lang === "typescript") {
        codeBlock.props.title = "📄 TypeScript";
      } else if (lang === "tsx") {
        codeBlock.props.title = "📄 TSX";
      } else if (lang === "js" || lang === "javascript") {
        codeBlock.props.title = "📄 JavaScript";
      } else if (lang === "jsx") {
        codeBlock.props.title = "📄 JSX";
      } else if (lang === "html") {
        codeBlock.props.title = "📄 HTML";
      } else if (lang === "css") {
        codeBlock.props.title = "📄 CSS";
      } else if (lang === "scss") {
        codeBlock.props.title = "📄 SCSS";
      } else if (lang === "yaml" || lang === "yml") {
        if (code.includes("services:") && code.includes("version:")) {
          codeBlock.props.title = "⚙️ docker-compose.yml";
        } else {
          codeBlock.props.title = "⚙️ YAML";
        }
      } else if (lang === "toml") {
        codeBlock.props.title = "⚙️ TOML";
      } else if (lang === "md" || lang === "markdown") {
        codeBlock.props.title = "📄 Markdown";
      } else if (lang === "astro") {
        codeBlock.props.title = "📄 Astro";
      } else if (lang === "text" || lang === "plaintext") {
        codeBlock.props.title = "🖥️ Output";
      } else if (lang === "py" || lang === "python") {
        codeBlock.props.title = "📄 Python";
      } else if (lang === "rs" || lang === "rust") {
        codeBlock.props.title = "📄 Rust";
      } else if (lang === "go") {
        codeBlock.props.title = "📄 Go";
      } else if (lang === "sql") {
        codeBlock.props.title = "📄 SQL";
      } else if (lang !== "") {
        const displayName = lang.charAt(0).toUpperCase() + lang.slice(1);
        codeBlock.props.title = `📄 ${displayName}`;
      }
    },
  },
};

export default defineEcConfig({
  // Register our auto-detection custom headers plugin
  plugins: [customHeadersPlugin],

  // Provide both dark and light syntax highlighting themes
  themes: ["github-dark", "github-light"],

  // Automatically sync syntax highlighting with Starlight's dark mode toggle
  useStarlightDarkModeSwitch: true,

  // Use the theme's native color variables rather than Starlight variables
  useStarlightUiThemeColors: false,

  // ── Theme Customization ──────────────────────────────────────────────────
  customizeTheme: (theme) => {
    if (theme.type === "dark") {
      // GitHub Dark custom colors
      theme.colors["editor.background"]                 = "#0d1117";
      theme.colors["editorGroupHeader.tabsBackground"]   = "#111827";
      theme.colors["titleBar.activeBackground"]          = "#111827";
      theme.colors["tab.activeBackground"]              = "#0d1117";
      theme.colors["tab.inactiveBackground"]            = "#111827";
      theme.colors["titleBar.border"]                    = "rgba(255, 255, 255, 0.08)";
      theme.colors["editorGroupHeader.tabsBorder"]       = "rgba(255, 255, 255, 0.08)";
      theme.colors["tab.activeBorder"]                  = "transparent";
      theme.colors["tab.activeBorderTop"]               = "#ff5533"; // Orange accent active tab indicator
    } else {
      // GitHub Light custom colors
      theme.colors["editor.background"]                 = "#ffffff";
      theme.colors["editorGroupHeader.tabsBackground"]   = "#f8fafc";
      theme.colors["titleBar.activeBackground"]          = "#f8fafc";
      theme.colors["tab.activeBackground"]              = "#ffffff";
      theme.colors["tab.inactiveBackground"]            = "#f8fafc";
      theme.colors["titleBar.border"]                    = "rgba(0, 0, 0, 0.08)";
      theme.colors["editorGroupHeader.tabsBorder"]       = "rgba(0, 0, 0, 0.08)";
      theme.colors["tab.activeBorder"]                  = "transparent";
      theme.colors["tab.activeBorderTop"]               = "#ff5533"; // Orange accent active tab indicator
    }
    return theme;
  },

  // ── Style Overrides (applied to both themes) ──────────────────────────────
  styleOverrides: {
    // Frame shape
    borderRadius: "0.875rem", // 14px frame corners
    borderWidth: "1px",

    // Code typography
    codeFontFamily: "'JetBrains Mono', 'Fira Code', 'Geist Mono', 'Cascadia Code', monospace",
    codeFontSize: "0.9375rem", // 15px
    codeLineHeight: "1.7",

    // Inner code padding
    codePaddingBlock: "1.25rem",
    codePaddingInline: "1.5rem",

    // Header/UI typography (monospaced, 13px, medium weight)
    uiFontFamily: "'JetBrains Mono', 'Fira Code', 'Geist Mono', 'Cascadia Code', monospace",
    uiFontSize: "0.8125rem", // 13px

    // Line numbers (gutter)
    gutterBorderWidth: "0px", // cleaner line numbers without vertical divider line
    gutterForeground: "var(--sl-color-gray-3)", // muted line numbers

    // Text markers (line highlight)
    textMarkers: {
      markBackground: "rgba(255, 138, 61, 0.10)", // Soft transparent orange line highlight
      markBorderColor: "rgba(255, 138, 61, 0.45)",
      defaultChroma: "45",
      backgroundOpacity: "60%",
    },

    // Frame-specific overrides (shadow, copy button)
    frames: {
      // Frame shadow
      frameBoxShadowCssValue: "0 10px 30px -10px rgba(0,0,0,0.18), 0 1px 3px rgba(0,0,0,0.05)",

      // Editor tab bar
      editorTabBorderRadius: "0.5rem",

      // Copy button styling
      inlineButtonBorderOpacity: "0.45",
      inlineButtonBackgroundIdleOpacity: "0.08",
      inlineButtonBackgroundHoverOrFocusOpacity: "0.18",
      inlineButtonBackgroundActiveOpacity: "0.28",

      // Tooltip
      tooltipSuccessBackground: "#22c55e",
      tooltipSuccessForeground: "#ffffff",

      // Terminal window dots
      terminalTitlebarDotsOpacity: "0.75",
    },
  },
});
