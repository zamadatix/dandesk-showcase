export const apps = [
  {id:'files',name:'FileManager',icon:'▱',kicker:'FILES, WITH LESS FRICTION',description:'A compact folder browser with Smart columns, asynchronous folder sizes, and recursive filename or regex search. Archive creation brings compression, verification, and resource controls into a native technical grid.',tags:['Smart details','Recursive search','Native archive creation'],views:[
    ['files','Folder browser','Dense details, pins, mounts, and watched folders in one compact FileManager window. Sample files are shown.'],
    ['archives','Create compressed','TAR/Zstandard, 7z/LZMA2, and ZIP/Deflate creation share native controls for compression and verification.'],
  ]},
  {id:'tasks',name:'TaskManager',icon:'⌁',kicker:'A CLOSER LOOK AT THE MACHINE',description:'Six tabs connect applications, processes, services, performance, networking, and users. Adaptive per-core graphs sit beside memory, GPU and VRAM histories; detailed reports support inspection and guarded actions.',tags:['Per-core graphs','GPU & VRAM','Split inspector'],views:[
    ['performance','Performance','Adaptive CPU-core graphs, memory, GPU and VRAM histories, sensor readings, and the system overview.'],
    ['processes','Processes','Process reports with CPU, memory, GPU and VRAM columns, filtering, grouping, and a separate inspector.'],
  ]},
  {id:'viewer',name:'Viewer',icon:'◫',kicker:'DOCUMENTS AND PIXELS, TOGETHER',description:'Paged documents and native images use the same viewer. Bookmarks and document-wide Find make navigation practical, while image zoom and panning use the shared GPU reconstruction path.',tags:['Bookmarks & Find','Native image viewing','GPU sinc reconstruction'],views:[
    ['document-viewer','Document & Find','A sample three-page PDF with bookmarks, a document-wide search counter, and highlighted matches for “native”.'],
    ['image-viewer','Image view','A sample graphic displayed in the native image viewer, with physical-pixel sizing and GPU zoom reconstruction.'],
  ]},
  {id:'calc',name:'Calc',icon:'∑',kicker:'SMALL WINDOW, SERIOUS NUMBERS',description:'One expression editor carries across Arithmetic, Scientific, Trig, Values, and Units. The owned arbitrary-precision engine defaults to 1024 bits; saved values and dimensional conversions keep the full numeric value behind the readout.',tags:['1024-bit default precision','Five function families','Dimensional units'],views:[
    ['scientific-calc','Scientific','A colored expression and scientific keypad: √2 × cos(45°), evaluated in the native calculator.'],
    ['unit-calc','Units','An inline feet-to-centimetres conversion, alongside the Units form for amount, family, From, To, Swap and Convert.'],
  ]},
  {id:'remote',name:'RemoteViewer',icon:'⇄',kicker:'ANOTHER DESKTOP, CLOSE AT HAND',description:'A native VNC client and server built into DanDesk. Connect to another desktop, share an output, or manage independent private Hyprland/DanDesk sessions, with explicit input, clipboard, and hardware-video choices.',tags:['VNC viewing & sharing','Private desktops','Explicit clipboard controls'],views:[
    ['remote-connect','Connect','The native connection form, saved profiles, view-only mode, and hardware-video preference. No remote connection is started for the showcase.'],
    ['remote-share','Share an output','Output sharing controls with explicit listener, authentication, input and clipboard choices.'],
    ['private-desktops','Private desktops','A separate management view for independent private desktop sessions.'],
  ]},
  {id:'settings',name:'Settings & themes',icon:'⚙',kicker:'A COMMON LANGUAGE FOR THE DESKTOP',description:'Searchable preferences, a theme library, and a live control gallery bring the whole desktop into one editor. Typography, spacing, colors, HDR, applets, and application preferences use the shared settings system.',tags:['Searchable preferences','Shared themes','Live control preview'],views:[
    ['settings','Control gallery','The live preview gallery shows shared buttons, states, icons, colors, menus and desktop widgets.'],
    ['themes','Theme library','Create, duplicate, import or export a theme, with the same draft and apply workflow used across Settings.'],
    ['sharing-settings','Sharing controls','The native sharing mode and live pointer update-rate controls. This crop excludes neighbor addresses.'],
  ]},
];

export const panelGroups = [
  {id:'shell',name:'The shell',description:'The desktop around your applications.',items:[
    {id:'desktop',name:'Desktop & taskbar',icon:'▦',description:'Native desktop files and launchers meet a compact, autohiding taskbar. Window buttons stay ungrouped and can be reordered per monitor; context menus provide direct window and desktop actions.',views:[['desktop','Desktop in use','Start and four native applications on the live desktop. The bottom taskbar keeps each application as a separate button.'],['hero','Applications together','TaskManager, Viewer, FileManager and Calc share the same theme and native window controls.']]},
    {id:'start',name:'Start',icon:'⊞',description:'Search the application catalog, use the Toolbox, and give applications your own aliases. Hide/Restore and launcher checks keep the list useful without changing the original desktop entries.',views:[['start','Applications & Toolbox','The Start panel with applications, search, folders, everyday tools and power access.']]},
    {id:'run',name:'Run',icon:'›_',description:'A focused native command entry, available from Start’s quick links, for launching a task without leaving the shell.',views:[['run','Run dialog','The shell’s native Run dialog. No command is executed in this view.']]},
    {id:'power',name:'Power & idle',icon:'⏻',description:'Session and power actions use confirmations. The idle policy also provides a black screensaver overlay; that overlay is not a security lock.',views:[['power','Power controls','The native power menu, shown without confirming a power action.']]},
    {id:'dialogs',name:'Native dialogs',icon:'▤',description:'File pickers, forms, color controls and confirmations share the desktop toolkit. A Zenity-compatible frontend makes the same native controls available to other workflows.',views:[['native-dialogs','File picker','The native Open document dialog browsing only the prepared sample-document folder.'],['archives','Native form','FileManager’s archive form is another composition of the shared editors, choices and confirmation controls.']]},
  ]},
  {id:'panels',name:'Everyday panels',description:'Small, useful tools beside the clock.',items:[
    {id:'clipboard',name:'Clipboard',icon:'▣',description:'Searchable, memory-only history retains text, rich formats and images. Restore an item, pause collection, or remove individual entries. This view contains prepared sample text.',views:[['clipboard','Searchable history','Two public-safe sample entries in the native clipboard-history panel.']]},
    {id:'emoji',name:'Emoji',icon:'☺',description:'Color emoji, category browsing, search, tones and recents live in a compact picker. Selection can return to the application you were using.',views:[['emoji','Categories & search','The Smileys & emotion category, searchable grid and skin-tone selector.']]},
    {id:'notifications',name:'Notifications',icon:'♧',description:'Rich cards, actions, retained history, search and Do Not Disturb share one notification center. The pictured messages were prepared for this tour.',views:[['notifications','Notification center','Two sample notification cards, with search, All/Active/History and Do Not Disturb controls.']]},
    {id:'calendar',name:'Clock & calendar',icon:'▦',description:'A Monday-first calendar includes ISO week numbers. Additional city clocks follow real timezone and daylight-saving rules.',views:[['calendar','Month view','The live October 2026 calendar, with ISO weeks and the current day highlighted.']]},
    {id:'capture',name:'Capture & recording',icon:'⌗',description:'Capture a region, screen or desktop, including transient views preserved before selection. Native HDR screenshots are tone-mapped to PNG; hardware recordings use Vulkan Video with explicit codec, color and audio choices.',views:[['screenshot','Screenshot','Screenshot area, destination, cursor and clipboard controls.'],['recording','Recording options','The recording tab with its encoding options expanded. No recording is running in this view.']]},
    {id:'sound',name:'Sound',icon:'◖',description:'Output devices, applications, recording streams, ports and profiles share a native mixer. Global and per-application mono controls add useful routing choices.',views:[['sound','Output controls','The live output device, volume, port selection, individual channels and global mono control.']]},
  ]},
  {id:'connections',name:'Connections',description:'Inspect this machine. Work across others.',items:[
    {id:'sharing',name:'SoftKVM',icon:'↔',description:'Native keyboard, pointer and clipboard sharing connects compatible Linux and Mac peers. Neighbor edge ranges define handoff; live pointer cadence can follow connected display refresh rates.',views:[['softkvm','Live sharing status','The live peer is connected, with input and clipboard ready and automatic 144 Hz pointer pacing. Neighbor addresses are outside this crop.'],['sharing-settings','Sharing preferences','Mode and live update-rate controls in the shared Settings editor.']]},
    {id:'network',name:'Networking',icon:'⌘',description:'A persistent interface list leads to Overview, Addresses and Routes. Details are copyable, and the inventory follows the host’s network state.',views:[['network','Interface inspector','The loopback interface and its local addresses, selected to keep private network addresses out of the tour.']]},
    {id:'wireless',name:'Wireless',icon:'◉',description:'An IWD frontend keeps the current connection beside network search, scan and connection controls. The live radio is disconnected in this view.',views:[['wireless','Connection & network search','The native Networks tab, cropped above nearby network names.']]},
    {id:'bluetooth',name:'Bluetooth',icon:'ᛒ',description:'Connected, saved and nearby devices have direct pairing, connection and trust controls. Unnamed devices fold into their own disclosure, leaving known devices easy to find.',views:[['bluetooth','Saved devices','The live Bluetooth panel and a saved device. No connection or pairing is started.']]},
    {id:'guests',name:'Guests',icon:'▱',description:'Configured virtual machines have searchable All/Running/Stopped views, selected-guest details, connection readiness and guarded lifecycle actions.',views:[['guests','Guest controls','Configured guest selection and the selected guest’s connection and start controls. No guest is started for the showcase.']]},
  ]},
];

export const owners = [
 ['Orchestrator','Startup, action routing and coordinated teardown.'],
 ['GPU / Wayland','Native surfaces, input, widgets, Vulkan presentation, capture and video resources.'],
 ['Disk','File I/O, watched sources, discovery, caches and atomic publication.'],
 ['Settings','Validated shared preferences, themes, drafts and durable saves.'],
 ['Image','Image and document decoding, rasterization, color transforms and media container work.'],
 ['Text','Shared font discovery, shaping, glyphs and measurements.'],
 ['Compression','Archives, cold frames and contained codec work.'],
 ['Catalog','Application inventory, aliases, visibility and launcher checks.'],
 ['Search','Cancellable application, emoji and file queries, plus Calc authority.'],
 ['Compositor','Hyprland integration, window/output events and native input sharing.'],
 ['Bus','D-Bus transport, tray menus, external adapters, wireless and fixed-location services.'],
 ['Audio','Mixer state, playback, mono routing and recording taps.'],
 ['Clipboard','Native transfers, history and guarded paste/sharing transactions.'],
 ['Notifications','Notification cards, history, replies and expiry.'],
 ['Desktop','Files, placement, selection, dragging and persistent desktop state.'],
 ['Guests / Power','Guest lifecycle and confirmed host power policy.'],
 ['Calendar','Calendar views, clocks, timezone rules and time deadlines.'],
 ['Bluetooth','Adapter, device, pairing and challenge policy.'],
 ['Launch / Control','Validated launch intents, application scopes and the local command interface.'],
 ['Remote','VNC transport, authentication, listeners and remote-session policy.'],
 ['Status','Shared volume/brightness, recording and transfer indicators.'],
];
