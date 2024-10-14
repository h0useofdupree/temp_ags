const userConfigOptions = {
  ai: {
    defaultGPTProvider: "openai",
    defaultTemperature: 0.9,
    enhancements: true,
    useHistory: true,
    writingCursor: " ...", // Warning: Using weird characters can mess up Markdown rendering
  },
  animations: {
    choreographyDelay: 35,
    durationSmall: 110,
    durationLarge: 180,
  },
  appearance: {
    keyboardUseFlag: false, // Use flag emoji instead of abbreviation letters
    layerSmoke: false,
    layerSmokeStrength: 0.4,
    fakeScreenRounding: 1,
  },
  apps: {
    // bluetooth: "blueberry",
    bluetooth: 'XDG_CURRENT_DESKTOP="gnome" gnome-control-center bluetooth',
    imageViewer: "loupe",
    network: 'XDG_CURRENT_DESKTOP="gnome" gnome-control-center wifi',
    settings: 'XDG_CURRENT_DESKTOP="gnome" gnome-control-center wifi',
    taskManager: "gnome-system-monitor",
    terminal: "kitty", // This is only for shell actions
  },
  battery: {
    low: 20,
    critical: 10,
    warnLevels: [20, 15, 5],
    warnTitles: ["Low battery", "Very low battery", "Critical Battery"],
    warnMessages: [
      "Plug in the charger",
      "You there?",
      "PLUG THE CHARGER ALREADY",
    ],
  },
  dock: {
    enabled: false,
    hiddenThickness: 5,
    pinnedApps: ["qutebrowser", "org.gnome.Nautilus"],
    layer: "top",
    monitorExclusivity: true, // Dock will move to other monitor along with focus if enabled
    searchPinnedAppIcons: false, // Try to search for the correct icon if the app class isn't an icon name
    trigger: ["client-added", "client-removed"], // client_added, client_move, workspace_active, client_active
    // Automatically hide dock after `interval` ms since trigger
    autoHide: [
      {
        trigger: "client-added",
        interval: 500,
      },
      {
        trigger: "client-removed",
        interval: 500,
      },
    ],
  },
  music: {
    preferredPlayer: "plasma-browser-integration",
  },
  onScreenKeyboard: {
    layout: "qwerty_full", // See modules/onscreenkeyboard/onscreenkeyboard.js for available layouts
  },
  overview: {
    scale: 0.18, // Relative to screen size
    numOfRows: 2,
    numOfCols: 5,
    wsNumScale: 0.09,
    wsNumMarginScale: 0.07,
  },
  sidebar: {
    image: {
      columns: 2,
      batchCount: 20,
      allowNsfw: false,
    },
    pages: {
      order: ["apis", "tools"],
      apis: {
        order: ["gpt", "gemini"],
      },
    },
  },
  search: {
    engineBaseUrl: "https://www.google.com/search?q=",
    excludedSites: ["quora.com"],
  },
  time: {
    // See https://docs.gtk.org/glib/method.DateTime.format.html
    // Here's the 12h format: "%I:%M%P"
    // For seconds, add "%S" and set interval to 1000
    format: "%H:%M",
    interval: 5000,
    dateFormatLong: "%a, %d/%m", // On bar
    dateInterval: 5000,
    dateFormat: "%d/%m", // On notif time
  },
  weather: {
    city: "Mettmann",
  },
  workspaces: {
    shown: 10,
  },
  // Longer stuff
  icons: {
    substitutions: {
      "code-url-handler": "visual-studio-code",
      Code: "visual-studio-code",
      "GitHub Desktop": "github-desktop",
      "Minecraft* 1.20.1": "minecraft",
      "gnome-tweaks": "org.gnome.tweaks",
      "pavucontrol-qt": "pavucontrol",
      wps: "wps-office2019-kprometheus",
      wpsoffice: "wps-office2019-kprometheus",
      "": "image-missing",
    },
  },
  keybinds: {
    // Format: Mod1+Mod2+key. CaSe SeNsItIvE!
    // Modifiers: Shift Ctrl Alt Hyper Meta
    // See https://docs.gtk.org/gdk3/index.html#constants for the other keys (they are listed as KEY_key)
    overview: {
      altMoveLeft: "Ctrl+b",
      altMoveRight: "Ctrl+f",
      deleteToEnd: "Ctrl+k",
    },
    sidebar: {
      apis: {
        nextTab: "Page_Down",
        prevTab: "Page_Up",
      },
      options: {
        // Right sidebar
        nextTab: "Page_Down",
        prevTab: "Page_Up",
      },
      pin: "Ctrl+p",
      cycleTab: "Ctrl+Tab",
      nextTab: "Ctrl+Page_Down",
      prevTab: "Ctrl+Page_Up",
    },
  },
};

export default userConfigOptions;
