const SECTIONS = [
  {id:'overview',icon:'fa-house',label:'Overview'},
  {section:'Foundation'},
  {id:'colors',icon:'fa-palette',label:'Colors'},
  {id:'typography',icon:'fa-font',label:'Typography'},
  {id:'spacing',icon:'fa-ruler',label:'Spacing & Radius'},
  {section:'Components'},
  {id:'buttons',icon:'fa-hand-pointer',label:'Buttons'},
  {id:'inputs',icon:'fa-keyboard',label:'Inputs'},
  {id:'cards',icon:'fa-square',label:'Cards'},
  {id:'badges',icon:'fa-tag',label:'Badges'},
  {id:'tables',icon:'fa-table',label:'Tables'},
  {section:'Patterns'},
  {id:'login',icon:'fa-lock',label:'Login Page'},
  {id:'sidebar',icon:'fa-bars',label:'Sidebar Navigation'},
  {id:'stats',icon:'fa-chart-bar',label:'Stat Cards'},
  {id:'toasts',icon:'fa-bell',label:'Toast Notifications'},
  {id:'modals',icon:'fa-window-restore',label:'Modals & Popups'},
  {id:'picker',icon:'fa-list-ol',label:'Scroll Picker'},
  {id:'timeline',icon:'fa-clock',label:'Timeline'},
  {id:'icons',icon:'fa-icons',label:'Icons'},
  {id:'animations',icon:'fa-wand-magic-sparkles',label:'Animations'},
];
function buildNav(){document.getElementById('sideNav').innerHTML=SECTIONS.map(s=>s.section?`<div class="sb-section">${s.section}</div>`:`<div class="sb-item" data-id="${s.id}" onclick="go('${s.id}')"><i class="fas ${s.icon}"></i>${s.label}</div>`).join('')}
function go(id){document.querySelectorAll('.sb-item').forEach(n=>n.classList.toggle('active',n.dataset.id===id));const fn=renders[id];if(fn)document.getElementById('content').innerHTML=fn()}
const renders={};

renders.overview=()=>`<div class="sec">
<h1 class="sec-title">KimUI-Scape</h1>
<p class="sec-desc">A comprehensive design system for building modern web applications. This reference documents every UI pattern, component, token, and interaction — your single source of truth for consistent, professional interfaces.</p>

<div class="sec-sub"><i class="fas fa-layer-group"></i> Design Principles</div>
<div class="demo"><div class="demo-grid">
<div class="card-demo"><div class="card-demo-title"><i class="fas fa-circle" style="color:var(--green);margin-right:6px;font-size:.6rem"></i>Clean & Modern</div><div class="card-demo-desc">Rounded corners, soft shadows, generous whitespace throughout every component.</div></div>
<div class="card-demo"><div class="card-demo-title"><i class="fas fa-circle" style="color:#f97316;margin-right:6px;font-size:.6rem"></i>Vibrant Accents</div><div class="card-demo-desc">Gradient icons and semantic color coding for quick visual scanning.</div></div>
<div class="card-demo"><div class="card-demo-title"><i class="fas fa-circle" style="color:var(--blue);margin-right:6px;font-size:.6rem"></i>Consistent Spacing</div><div class="card-demo-desc">8px grid system with padding and gaps in multiples of 4.</div></div>
<div class="card-demo"><div class="card-demo-title"><i class="fas fa-circle" style="color:var(--purple);margin-right:6px;font-size:.6rem"></i>Purposeful Motion</div><div class="card-demo-desc">Hover lifts, focus rings, active scale. Subtle and functional.</div></div>
</div></div>

<div class="sec-sub"><i class="fas fa-compass"></i> What's Inside</div>
<div class="demo"><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px">
${[
{i:'fa-palette',c:'#f43f7a',t:'Colors',d:'18 color tokens with light variants, surfaces, and neutrals',n:'colors'},
{i:'fa-font',c:'#8b5cf6',t:'Typography',d:'Font families, weight scale, and size hierarchy',n:'typography'},
{i:'fa-ruler',c:'#f59e0b',t:'Spacing & Radius',d:'4px grid, border radius tokens, shadow levels',n:'spacing'},
{i:'fa-hand-pointer',c:'#10b981',t:'Buttons',d:'5 variants with 3 sizes and interaction states',n:'buttons'},
{i:'fa-keyboard',c:'#3b82f6',t:'Inputs',d:'Underline, bordered, highlighted, and select styles',n:'inputs'},
{i:'fa-square',c:'#f97316',t:'Cards',d:'6 variants: standard, strip, glow, profile, glass',n:'cards'},
{i:'fa-tag',c:'#6366f1',t:'Badges',d:'Semantic status, decision, and job state badges',n:'badges'},
{i:'fa-table',c:'#0ea5e9',t:'Tables',d:'6 styles: standard, striped, card rows, progress, terminal',n:'tables'},
{i:'fa-lock',c:'#ec4899',t:'Login Page',d:'Dark glassmorphism and clean light variants',n:'login'},
{i:'fa-bars',c:'#14b8a6',t:'Sidebar',d:'Dark and light navigation with collapsible menus',n:'sidebar'},
{i:'fa-chart-bar',c:'#ef4444',t:'Stat Cards',d:'Gradient top strip with candy-colored accents',n:'stats'},
{i:'fa-bell',c:'#f97316',t:'Toasts',d:'Slide-down notifications with auto-dismiss',n:'toasts'},
{i:'fa-window-restore',c:'#8b5cf6',t:'Modals',d:'Form and confirmation popups with backdrop blur',n:'modals'},
{i:'fa-list-ol',c:'#3b82f6',t:'Scroll Picker',d:'Casino-style wheel for mobile-friendly selection',n:'picker'},
{i:'fa-clock',c:'#10b981',t:'Timeline',d:'Vertical timeline with color-coded status dots',n:'timeline'},
{i:'fa-wand-magic-sparkles',c:'#f43f7a',t:'Animations',d:'8 interaction patterns with easing reference',n:'animations'},
].map(c=>`<div style="background:#fff;border:1px solid var(--border);border-radius:16px;padding:20px;cursor:pointer;transition:.25s;position:relative;overflow:hidden" onclick="go('${c.n}')" onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='0 12px 32px rgba(0,0,0,.08)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
<div style="position:absolute;top:-30px;right:-30px;width:100px;height:100px;background:${c.c};opacity:.06;border-radius:50%;filter:blur(25px)"></div>
<div style="width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,${c.c},${c.c}dd);display:flex;align-items:center;justify-content:center;color:#fff;font-size:.95rem;margin-bottom:12px"><i class="fas ${c.i}"></i></div>
<div style="font-weight:700;font-size:.92rem;margin-bottom:4px">${c.t}</div>
<div style="font-size:.78rem;color:var(--text2);line-height:1.5">${c.d}</div>
</div>`).join('')}
</div></div>

<div class="sec-sub"><i class="fas fa-code"></i> Quick Start</div>
<div class="demo">
<div class="code"><span class="cm">/* 1. Import fonts */</span>
<span class="tag">@import</span> <span class="str">url('fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800')</span>;

<span class="cm">/* 2. Set CSS variables */</span>
<span class="kw">:root</span> {
  <span class="attr">--accent</span>: <span class="str">#f97316</span>;
  <span class="attr">--bg</span>: <span class="str">#f3f5f9</span>;
  <span class="attr">--text</span>: <span class="str">#111</span>;
  <span class="attr">--border</span>: <span class="str">#f0f0f0</span>;
  <span class="attr">--radius</span>: <span class="num">20px</span>;
}

<span class="cm">/* 3. Use Font Awesome 6 for icons */</span>
<span class="tag">&lt;link</span> <span class="attr">href</span>=<span class="str">"cdnjs.cloudflare.com/.../font-awesome/6.5.1/css/all.min.css"</span> <span class="tag">/&gt;</span></div>
</div></div>`;

renders.colors=()=>`<div class="sec">
<h1 class="sec-title">Colors</h1>
<p class="sec-desc">Semantic color tokens. Each color has a base value and a soft variant at 8-15% opacity for backgrounds.</p>
<div class="sec-sub"><i class="fas fa-circle-half-stroke"></i> Primary Palette</div>
<div class="demo"><div class="token-grid">
<div class="token"><div class="token-swatch" style="background:#6366f1"></div><div class="token-name">Indigo</div><div class="token-val">#6366f1</div></div>
<div class="token"><div class="token-swatch" style="background:#818cf8"></div><div class="token-name">Indigo Light</div><div class="token-val">#818cf8</div></div>
<div class="token"><div class="token-swatch" style="background:#f97316"></div><div class="token-name">Orange</div><div class="token-val">#f97316</div></div>
<div class="token"><div class="token-swatch" style="background:#fb923c"></div><div class="token-name">Orange Light</div><div class="token-val">#fb923c</div></div>
<div class="token"><div class="token-swatch" style="background:#10b981"></div><div class="token-name">Green</div><div class="token-val">#10b981</div></div>
<div class="token"><div class="token-swatch" style="background:#34d399"></div><div class="token-name">Green Light</div><div class="token-val">#34d399</div></div>
<div class="token"><div class="token-swatch" style="background:#f59e0b"></div><div class="token-name">Amber</div><div class="token-val">#f59e0b</div></div>
<div class="token"><div class="token-swatch" style="background:#fbbf24"></div><div class="token-name">Amber Light</div><div class="token-val">#fbbf24</div></div>
<div class="token"><div class="token-swatch" style="background:#ef4444"></div><div class="token-name">Red</div><div class="token-val">#ef4444</div></div>
<div class="token"><div class="token-swatch" style="background:#f87171"></div><div class="token-name">Red Light</div><div class="token-val">#f87171</div></div>
<div class="token"><div class="token-swatch" style="background:#8b5cf6"></div><div class="token-name">Purple</div><div class="token-val">#8b5cf6</div></div>
<div class="token"><div class="token-swatch" style="background:#a78bfa"></div><div class="token-name">Purple Light</div><div class="token-val">#a78bfa</div></div>
<div class="token"><div class="token-swatch" style="background:#3b82f6"></div><div class="token-name">Blue</div><div class="token-val">#3b82f6</div></div>
<div class="token"><div class="token-swatch" style="background:#60a5fa"></div><div class="token-name">Blue Light</div><div class="token-val">#60a5fa</div></div>
<div class="token"><div class="token-swatch" style="background:#f43f7a"></div><div class="token-name">Pink</div><div class="token-val">#f43f7a</div></div>
<div class="token"><div class="token-swatch" style="background:#ff6b9d"></div><div class="token-name">Pink Light</div><div class="token-val">#ff6b9d</div></div>
<div class="token"><div class="token-swatch" style="background:#0ea5e9"></div><div class="token-name">Cyan</div><div class="token-val">#0ea5e9</div></div>
<div class="token"><div class="token-swatch" style="background:#14b8a6"></div><div class="token-name">Teal</div><div class="token-val">#14b8a6</div></div>
</div></div>
<div class="sec-sub"><i class="fas fa-moon"></i> Surfaces & Neutrals</div>
<div class="demo"><div class="token-grid">
<div class="token"><div class="token-swatch" style="background:#f3f5f9"></div><div class="token-name">Background</div><div class="token-val">#f3f5f9</div></div>
<div class="token"><div class="token-swatch" style="background:#fff;border:1px solid #eee"></div><div class="token-name">Surface</div><div class="token-val">#ffffff</div></div>
<div class="token"><div class="token-swatch" style="background:#f0f0f0"></div><div class="token-name">Border</div><div class="token-val">#f0f0f0</div></div>
<div class="token"><div class="token-swatch" style="background:#111"></div><div class="token-name">Text</div><div class="token-val">#111111</div></div>
<div class="token"><div class="token-swatch" style="background:#999"></div><div class="token-name">Muted</div><div class="token-val">#999999</div></div>
<div class="token"><div class="token-swatch" style="background:#000"></div><div class="token-name">Sidebar</div><div class="token-val">#000000</div></div>
<div class="token"><div class="token-swatch" style="background:#020617"></div><div class="token-name">Deep Space</div><div class="token-val">#020617</div></div>
</div></div>
<div class="sec-sub"><i class="fas fa-code"></i> Usage</div>
<div class="code"><span class="kw">:root</span> {
  <span class="attr">--accent</span>: <span class="str">#f97316</span>;
  <span class="attr">--green</span>: <span class="str">#10b981</span>;
  <span class="attr">--red</span>: <span class="str">#ef4444</span>;
  <span class="attr">--bg</span>: <span class="str">#f3f5f9</span>;
  <span class="attr">--text</span>: <span class="str">#111</span>;
}</div></div>`;

renders.typography=()=>`<div class="sec">
<h1 class="sec-title">Typography</h1>
<p class="sec-desc">Two font families. One for headings and UI elements, one for body and data-heavy content.</p>
<div class="sec-sub"><i class="fas fa-text-height"></i> Font Families</div>
<div class="demo">
<div style="font-family:'Inter';font-size:1.4rem;font-weight:800;margin-bottom:8px">Inter (Primary)</div>
<div style="font-family:'Inter';color:var(--text2);margin-bottom:20px">Used for all text — headings, labels, buttons, body. Weights: 400, 500, 600, 700, 800.</div>
<div style="font-family:'Fira Code';font-size:1rem;margin-bottom:8px">Fira Code (Monospace)</div>
<div style="font-family:'Fira Code';color:var(--text2)">Used for code blocks, terminal output, and technical values.</div>
</div>
<div class="sec-sub"><i class="fas fa-heading"></i> Scale</div>
<div class="demo">
<div style="font-size:2.8rem;font-weight:800;letter-spacing:-1px;margin-bottom:8px">Hero Title (2.8rem)</div>
<div style="font-size:1.5rem;font-weight:800;margin-bottom:8px">Page Title (1.5rem)</div>
<div style="font-size:1.2rem;font-weight:700;margin-bottom:8px">Section Title (1.2rem)</div>
<div style="font-size:1.1rem;font-weight:700;margin-bottom:8px">Card Title (1.1rem)</div>
<div style="font-size:.95rem;font-weight:600;margin-bottom:8px">Label (0.95rem)</div>
<div style="font-size:.88rem;margin-bottom:8px">Body Text (0.88rem)</div>
<div style="font-size:.78rem;color:var(--text2)">Caption (0.78rem)</div>
</div></div>`;

renders.spacing=()=>`<div class="sec">
<h1 class="sec-title">Spacing & Radius</h1>
<p class="sec-desc">Consistent spacing based on 4px increments. Border radius tokens for different component sizes.</p>
<div class="sec-sub"><i class="fas fa-ruler-combined"></i> Spacing Scale</div>
<div class="demo"><div style="display:flex;flex-wrap:wrap;gap:16px;align-items:flex-end">
${[4,8,12,16,20,24,32,40,48].map(s=>`<div style="text-align:center"><div style="width:${s}px;height:${s}px;background:var(--accent);border-radius:4px;margin:0 auto 6px"></div><div style="font-size:.72rem;font-weight:700;color:var(--muted)">${s}px</div></div>`).join('')}
</div></div>
<div class="sec-sub"><i class="fas fa-circle"></i> Border Radius</div>
<div class="demo"><div style="display:flex;gap:20px;flex-wrap:wrap">
${[{r:8,l:'xs'},{r:12,l:'sm'},{r:16,l:'md'},{r:20,l:'lg'},{r:30,l:'xl'},{r:9999,l:'full'}].map(v=>`<div style="text-align:center"><div style="width:64px;height:64px;background:rgba(249,115,22,.1);border:2px solid #f97316;border-radius:${v.r}px;margin:0 auto 8px"></div><div style="font-size:.78rem;font-weight:700">${v.l}</div><div style="font-size:.7rem;color:var(--muted)">${v.r}px</div></div>`).join('')}
</div></div>
<div class="sec-sub"><i class="fas fa-layer-group"></i> Shadows</div>
<div class="demo"><div style="display:flex;gap:24px;flex-wrap:wrap">
<div style="width:120px;height:80px;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.03);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:600;color:var(--muted)">soft</div>
<div style="width:120px;height:80px;background:#fff;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,.06);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:600;color:var(--muted)">medium</div>
<div style="width:120px;height:80px;background:#fff;border-radius:12px;box-shadow:0 12px 40px rgba(0,0,0,.1);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:600;color:var(--muted)">heavy</div>
</div></div></div>`;

renders.buttons=()=>`<div class="sec">
<h1 class="sec-title">Buttons</h1>
<p class="sec-desc">Button variants for different contexts. All use 700 weight, rounded corners, and include hover/active states.</p>
<div class="sec-sub"><i class="fas fa-palette"></i> Variants</div>
<div class="demo"><div class="demo-row">
<button class="btn-demo btn-primary-d"><i class="fas fa-plus"></i> Primary</button>
<button class="btn-demo btn-outline-d"><i class="fas fa-pen"></i> Outline</button>
<button class="btn-demo btn-success-d"><i class="fas fa-check"></i> Success</button>
<button class="btn-demo btn-danger-d"><i class="fas fa-trash"></i> Danger</button>
<button class="btn-demo btn-ghost-d"><i class="fas fa-arrow-left"></i> Ghost</button>
</div></div>
<div class="sec-sub"><i class="fas fa-ruler-horizontal"></i> Sizes</div>
<div class="demo"><div class="demo-row">
<button class="btn-demo btn-primary-d btn-sm-d">Small</button>
<button class="btn-demo btn-primary-d">Default</button>
<button class="btn-demo btn-primary-d btn-lg-d">Large</button>
</div></div></div>`;

renders.inputs=()=>`<div class="sec">
<h1 class="sec-title">Inputs</h1>
<p class="sec-desc">Form inputs with accent focus ring. Two styles: underline (minimal) and bordered (standard).</p>
<div class="sec-sub"><i class="fas fa-minus"></i> Underline Style</div>
<div class="demo"><div style="max-width:400px">
<div style="margin-bottom:16px"><label style="font-size:.85rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;display:block">Full Name</label><input style="width:100%;padding:12px 0;border:none;border-bottom:1px solid #eee;font-size:1.1rem;outline:none;background:transparent" placeholder="Enter your name"></div>
<div><label style="font-size:.85rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;display:block">Email</label><input style="width:100%;padding:12px 0;border:none;border-bottom:1px solid #eee;font-size:1.1rem;outline:none;background:transparent" placeholder="you@example.com"></div>
</div></div>
<div class="sec-sub"><i class="fas fa-square"></i> Bordered Style</div>
<div class="demo"><div style="display:flex;flex-direction:column;gap:12px;max-width:400px">
<input class="input-demo" placeholder="Default input">
<textarea class="input-demo" placeholder="Textarea content" rows="3" style="max-width:100%;resize:vertical"></textarea>
<select class="input-demo"><option>Select an option</option><option>Alpha</option><option>Beta</option></select>
</div></div>
<div class="sec-sub"><i class="fas fa-pen"></i> Highlighted Input</div>
<div class="demo"><textarea class="input-demo" style="color:#2563eb;max-width:100%" rows="2" placeholder="Blue text for emphasis..."></textarea></div></div>`;

renders.cards=()=>`<div class="sec">
<h1 class="sec-title">Cards</h1>
<p class="sec-desc">Multiple card variants for different contexts. All share rounded corners and hover interactions.</p>

<div class="sec-sub"><i class="fas fa-square"></i> Standard Card</div>
<div class="demo"><div class="demo-grid">
<div class="card-demo"><div class="card-demo-title"><i class="fas fa-bolt" style="color:#f97316;margin-right:6px"></i>Quick Action</div><div class="card-demo-desc">Basic card with icon title and description text.</div></div>
<div class="card-demo"><div class="card-demo-title"><i class="fas fa-shield-halved" style="color:var(--green);margin-right:6px"></i>Security</div><div class="card-demo-desc">Cards can contain tables, forms, or any grouped content.</div></div>
</div></div>

<div class="sec-sub"><i class="fas fa-grip-lines"></i> Gradient Top Strip</div>
<div class="demo"><div class="demo-grid">
<div style="background:#fff;border:1px solid var(--border);border-radius:16px;padding:22px;position:relative;overflow:hidden"><div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f43f7a,#ff6b9d)"></div><div style="font-size:1.5rem;font-weight:800">1,247</div><div style="font-size:.82rem;color:var(--text2);margin-top:2px">Total Records</div></div>
<div style="background:#fff;border:1px solid var(--border);border-radius:16px;padding:22px;position:relative;overflow:hidden"><div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#10b981,#34d399)"></div><div style="font-size:1.5rem;font-weight:800">89%</div><div style="font-size:.82rem;color:var(--text2);margin-top:2px">Completion</div></div>
<div style="background:#fff;border:1px solid var(--border);border-radius:16px;padding:22px;position:relative;overflow:hidden"><div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#3b82f6,#60a5fa)"></div><div style="font-size:1.5rem;font-weight:800">56</div><div style="font-size:.82rem;color:var(--text2);margin-top:2px">Pending</div></div>
</div></div>

<div class="sec-sub"><i class="fas fa-circle-left"></i> Left Indicator Strip</div>
<div class="demo"><div class="demo-grid">
<div style="display:flex;background:#fff;border:1px solid var(--border);border-radius:16px;overflow:hidden"><div style="width:5px;background:var(--green);flex-shrink:0"></div><div style="padding:16px;flex:1"><div style="font-weight:700;font-size:.92rem">Active Item</div><div style="font-size:.78rem;color:var(--text2);margin-top:4px">Status indicator on the left edge</div><div style="margin-top:8px"><span class="badge-d badge-green">OK</span></div></div></div>
<div style="display:flex;background:#fff;border:1px solid var(--border);border-radius:16px;overflow:hidden"><div style="width:5px;background:var(--amber);flex-shrink:0"></div><div style="padding:16px;flex:1"><div style="font-weight:700;font-size:.92rem">Warning Item</div><div style="font-size:.78rem;color:var(--text2);margin-top:4px">Amber strip for attention needed</div><div style="margin-top:8px"><span class="badge-d badge-amber">Low</span></div></div></div>
<div style="display:flex;background:#fff;border:1px solid var(--border);border-radius:16px;overflow:hidden"><div style="width:5px;background:var(--red);flex-shrink:0"></div><div style="padding:16px;flex:1"><div style="font-weight:700;font-size:.92rem">Critical Item</div><div style="font-size:.78rem;color:var(--text2);margin-top:4px">Red strip for errors or critical state</div><div style="margin-top:8px"><span class="badge-d badge-red">Error</span></div></div></div>
</div></div>

<div class="sec-sub"><i class="fas fa-sun"></i> Glow Card</div>
<div class="demo"><div class="demo-grid">
<div style="background:#fff;border:1px solid var(--border);border-radius:16px;padding:22px;position:relative;overflow:hidden;cursor:pointer;transition:.25s" onmouseover="this.style.boxShadow='0 12px 32px rgba(0,0,0,.08)';this.style.transform='translateY(-3px)'" onmouseout="this.style.boxShadow='';this.style.transform=''"><div style="position:absolute;top:-40px;right:-40px;width:120px;height:120px;background:#3b82f6;opacity:.06;border-radius:50%;filter:blur(30px)"></div><div style="display:flex;align-items:center;gap:14px"><div style="width:44px;height:44px;border-radius:14px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);display:flex;align-items:center;justify-content:center;color:#fff;font-size:1rem"><i class="fas fa-map"></i></div><div><div style="font-weight:700;font-size:.95rem">Blueprint</div><div style="font-size:.78rem;color:var(--text2)">Reference architectures</div></div></div><i class="fas fa-arrow-right" style="position:absolute;right:20px;top:50%;transform:translateY(-50%);color:var(--muted);font-size:.85rem"></i></div>
<div style="background:#fff;border:1px solid var(--border);border-radius:16px;padding:22px;position:relative;overflow:hidden;cursor:pointer;transition:.25s" onmouseover="this.style.boxShadow='0 12px 32px rgba(0,0,0,.08)';this.style.transform='translateY(-3px)'" onmouseout="this.style.boxShadow='';this.style.transform=''"><div style="position:absolute;top:-40px;right:-40px;width:120px;height:120px;background:#f97316;opacity:.06;border-radius:50%;filter:blur(30px)"></div><div style="display:flex;align-items:center;gap:14px"><div style="width:44px;height:44px;border-radius:14px;background:linear-gradient(135deg,#f97316,#ea580c);display:flex;align-items:center;justify-content:center;color:#fff;font-size:1rem"><i class="fas fa-clipboard-check"></i></div><div><div style="font-weight:700;font-size:.95rem">Register</div><div style="font-size:.78rem;color:var(--text2)">Track decisions</div></div></div><i class="fas fa-arrow-right" style="position:absolute;right:20px;top:50%;transform:translateY(-50%);color:var(--muted);font-size:.85rem"></i></div>
</div></div>

<div class="sec-sub"><i class="fas fa-user"></i> Profile Card</div>
<div class="demo"><div class="demo-grid">
<div style="background:#fff;border:1px solid var(--border);border-radius:16px;padding:18px">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px"><div style="width:42px;height:42px;border-radius:50%;background:rgba(99,102,241,.1);color:#6366f1;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.1rem">A</div><div><div style="font-weight:700;font-size:.95rem">Alex Morgan</div><div style="font-size:.78rem;color:var(--text2)">alex@example.com</div></div></div>
<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px"><span style="display:inline-flex;align-items:center;gap:5px;padding:4px 10px;background:var(--bg);border-radius:8px;font-size:.72rem;font-weight:600"><i class="fas fa-tag" style="color:#6366f1;font-size:.7rem"></i>Admin</span><span style="display:inline-flex;align-items:center;gap:5px;padding:4px 10px;background:var(--bg);border-radius:8px;font-size:.72rem;font-weight:600"><i class="fas fa-star" style="color:#f59e0b;font-size:.7rem"></i>Pro</span></div>
<div style="display:flex;justify-content:space-around;border-top:1px solid var(--border);padding-top:12px;text-align:center"><div><div style="font-weight:800;font-size:1rem">128</div><div style="font-size:.68rem;color:var(--text2)">Points</div></div><div><div style="font-weight:800;font-size:1rem">24</div><div style="font-size:.68rem;color:var(--text2)">Tasks</div></div><div><div style="font-weight:800;font-size:1rem">3</div><div style="font-size:.68rem;color:var(--text2)">Items</div></div></div>
</div>
</div></div>

<div class="sec-sub"><i class="fas fa-image"></i> Glass Card (Dark)</div>
<div class="demo" style="background:#0a0a1a;padding:32px;border-radius:20px"><div style="display:flex;gap:16px;flex-wrap:wrap">
<div style="background:rgba(255,255,255,.06);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:22px;width:200px"><div style="font-size:.72rem;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Status</div><div style="font-size:1.4rem;font-weight:800;color:#fff">Online</div><div style="font-size:.78rem;color:rgba(255,255,255,.4);margin-top:4px">Last checked 2m ago</div></div>
<div style="background:rgba(255,255,255,.06);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:22px;width:200px"><div style="font-size:.72rem;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Uptime</div><div style="font-size:1.4rem;font-weight:800;color:#fff">99.9%</div><div style="font-size:.78rem;color:rgba(255,255,255,.4);margin-top:4px">30-day average</div></div>
</div></div>
</div>`;

renders.badges=()=>`<div class="sec">
<h1 class="sec-title">Badges</h1>
<p class="sec-desc">Status badges with semantic colors at 10% opacity background.</p>
<div class="sec-sub"><i class="fas fa-circle"></i> Status Variants</div>
<div class="demo"><div class="demo-row">
<span class="badge-d badge-green">Active</span>
<span class="badge-d badge-amber">Pending</span>
<span class="badge-d badge-red">Error</span>
<span class="badge-d badge-blue">Info</span>
<span class="badge-d badge-purple">New</span>
</div></div>
<div class="sec-sub"><i class="fas fa-check-double"></i> Decision Status</div>
<div class="demo"><div class="demo-row">
<span class="badge-d badge-green">Agreed</span>
<span class="badge-d badge-amber">TBC</span>
<span class="badge-d badge-red">Deferred</span>
</div></div>
<div class="sec-sub"><i class="fas fa-signal"></i> Job Status</div>
<div class="demo"><div class="demo-row">
<span class="badge-d badge-green">Completed</span>
<span class="badge-d badge-blue">Running</span>
<span class="badge-d badge-amber">Queued</span>
<span class="badge-d badge-red">Failed</span>
</div></div></div>`;

renders.tables=()=>`<div class="sec">
<h1 class="sec-title">Tables</h1>
<p class="sec-desc">Multiple table styles for different data density and visual contexts.</p>

<div class="sec-sub"><i class="fas fa-table"></i> Standard Table</div>
<div class="demo"><table class="tbl-demo"><thead><tr><th>ID</th><th>Item</th><th>Status</th><th>Updated</th></tr></thead>
<tbody>
<tr><td><strong>REQ-01</strong></td><td>Enable multi-factor authentication</td><td><span class="badge-d badge-green">Agreed</span></td><td>10 Apr 2026</td></tr>
<tr><td><strong>REQ-02</strong></td><td>Configure network segmentation</td><td><span class="badge-d badge-amber">Pending</span></td><td>09 Apr 2026</td></tr>
<tr><td><strong>REQ-03</strong></td><td>Set up centralized logging</td><td><span class="badge-d badge-green">Agreed</span></td><td>08 Apr 2026</td></tr>
</tbody></table></div>

<div class="sec-sub"><i class="fas fa-table-cells"></i> Striped Table</div>
<div class="demo"><table style="width:100%;border-collapse:collapse"><thead><tr style="background:#1a1d2e;color:#fff"><th style="padding:12px 16px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.8px;text-align:left">Name</th><th style="padding:12px 16px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.8px;text-align:left">Role</th><th style="padding:12px 16px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.8px;text-align:left">Status</th><th style="padding:12px 16px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.8px;text-align:right">Score</th></tr></thead>
<tbody>
<tr><td style="padding:12px 16px;font-size:.88rem">Sarah Chen</td><td style="padding:12px 16px;font-size:.88rem;color:var(--text2)">Engineer</td><td style="padding:12px 16px"><span class="badge-d badge-green">Active</span></td><td style="padding:12px 16px;text-align:right;font-weight:700">94</td></tr>
<tr style="background:#f8fafc"><td style="padding:12px 16px;font-size:.88rem">James Park</td><td style="padding:12px 16px;font-size:.88rem;color:var(--text2)">Designer</td><td style="padding:12px 16px"><span class="badge-d badge-green">Active</span></td><td style="padding:12px 16px;text-align:right;font-weight:700">87</td></tr>
<tr><td style="padding:12px 16px;font-size:.88rem">Maria Lopez</td><td style="padding:12px 16px;font-size:.88rem;color:var(--text2)">Manager</td><td style="padding:12px 16px"><span class="badge-d badge-amber">Away</span></td><td style="padding:12px 16px;text-align:right;font-weight:700">76</td></tr>
<tr style="background:#f8fafc"><td style="padding:12px 16px;font-size:.88rem">David Kim</td><td style="padding:12px 16px;font-size:.88rem;color:var(--text2)">Analyst</td><td style="padding:12px 16px"><span class="badge-d badge-red">Offline</span></td><td style="padding:12px 16px;text-align:right;font-weight:700">62</td></tr>
</tbody></table></div>

<div class="sec-sub"><i class="fas fa-border-none"></i> Borderless Card Rows</div>
<div class="demo"><div style="display:flex;flex-direction:column;gap:8px">
${[{n:'Alpha Module',s:'Deployed',c:'green',d:'2 min ago',i:'fa-cube'},{n:'Beta Service',s:'Building',c:'blue',d:'5 min ago',i:'fa-gear'},{n:'Gamma Worker',s:'Failed',c:'red',d:'12 min ago',i:'fa-bolt'}].map(r=>`<div style="display:flex;align-items:center;gap:14px;background:#fff;border:1px solid var(--border);border-radius:12px;padding:14px 18px">
<div style="width:38px;height:38px;border-radius:10px;background:rgba(249,115,22,.08);display:flex;align-items:center;justify-content:center;color:#f97316;flex-shrink:0"><i class="fas ${r.i}"></i></div>
<div style="flex:1"><div style="font-weight:700;font-size:.9rem">${r.n}</div><div style="font-size:.75rem;color:var(--text2)">${r.d}</div></div>
<span class="badge-d badge-${r.c}">${r.s}</span>
</div>`).join('')}
</div></div>

<div class="sec-sub"><i class="fas fa-list"></i> Compact List</div>
<div class="demo"><div style="background:#fff;border:1px solid var(--border);border-radius:16px;overflow:hidden">
${['Configure IAM policies,Agreed,OAS-01','Set up VPC peering,TBC,N-03','Enable GuardDuty,Agreed,SEC-01','Define DNS strategy,Deferred,N-05'].map((r,i)=>{const[t,s,id]=r.split(',');const c=s==='Agreed'?'green':s==='TBC'?'amber':'red';return`<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 18px;${i<3?'border-bottom:1px solid var(--border)':''}"><div style="display:flex;align-items:center;gap:12px"><span style="font-size:.78rem;font-weight:700;color:var(--muted);min-width:48px">${id}</span><span style="font-size:.88rem;font-weight:500">${t}</span></div><span class="badge-d badge-${c}">${s}</span></div>`}).join('')}
</div></div>

<div class="sec-sub"><i class="fas fa-chart-simple"></i> Progress Table</div>
<div class="demo"><table style="width:100%;border-collapse:collapse">
<thead><tr><th style="padding:10px 16px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--muted);text-align:left;background:var(--bg)">Section</th><th style="padding:10px 16px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--muted);text-align:left;background:var(--bg)">Progress</th><th style="padding:10px 16px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--muted);text-align:right;background:var(--bg)">Complete</th></tr></thead>
<tbody>
${[{n:'Strategy',p:85,c:'#10b981'},{n:'Network',p:60,c:'#3b82f6'},{n:'Security',p:40,c:'#f59e0b'}].map(r=>`<tr><td style="padding:14px 16px;font-weight:600;font-size:.9rem;border-bottom:1px solid var(--border)">${r.n}</td><td style="padding:14px 16px;border-bottom:1px solid var(--border)"><div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden"><div style="height:100%;width:${r.p}%;background:${r.c};border-radius:3px"></div></div></td><td style="padding:14px 16px;text-align:right;font-weight:700;font-size:.9rem;color:${r.c};border-bottom:1px solid var(--border)">${r.p}%</td></tr>`).join('')}
</tbody></table></div>

<div class="sec-sub"><i class="fas fa-terminal"></i> Terminal Output</div>
<div class="demo"><div style="background:#1a1a2e;color:#0f0;border-radius:16px;padding:20px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:1.7">
<span style="color:#888">[14:30:22]</span> Initializing scan for region: ap-southeast-1<br>
<span style="color:#888">[14:30:24]</span> Found <span style="color:#f59e0b">3</span> targets to analyze<br>
<span style="color:#888">[14:30:26]</span> <span style="color:#0f0">OK</span> Target Alpha - 8 items discovered<br>
<span style="color:#888">[14:30:28]</span> Scan complete. Total: <span style="color:#f59e0b">12</span> items
</div></div></div>`;

renders.login=()=>`<div class="sec">
<h1 class="sec-title">Login Page</h1>
<p class="sec-desc">Two variants: dark glassmorphism and clean light. Both feature focus glow inputs and shimmer button.</p>

<div class="sec-sub"><i class="fas fa-moon"></i> Dark (Glassmorphism)</div>
<div class="demo" style="background:#020617;padding:40px;border-radius:20px;position:relative;overflow:hidden;display:flex;justify-content:center">
<div style="position:absolute;width:300px;height:300px;background:#ec4899;border-radius:50%;filter:blur(120px);opacity:.3;top:-80px;left:-60px"></div>
<div style="position:absolute;width:250px;height:250px;background:#3b82f6;border-radius:50%;filter:blur(120px);opacity:.3;bottom:-60px;right:-40px"></div>
<div style="background:rgba(15,23,42,.75);backdrop-filter:blur(40px);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:36px;max-width:380px;width:100%;position:relative;z-index:1;text-align:center">
<h3 style="color:#fff;font-size:1.3rem;font-weight:800;margin-bottom:4px">Application Name</h3>
<p style="color:#64748b;font-size:.78rem;margin-bottom:20px">Portal Subtitle</p>
<input style="width:100%;padding:12px 14px;background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.06);border-radius:12px;color:#fff;font-size:.88rem;font-family:inherit;margin-bottom:10px;box-sizing:border-box" placeholder="Username">
<input type="password" style="width:100%;padding:12px 14px;background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.06);border-radius:12px;color:#fff;font-size:.88rem;font-family:inherit;margin-bottom:16px;box-sizing:border-box" placeholder="Password">
<button style="width:100%;padding:14px;background:#ec4899;border:none;border-radius:12px;color:#fff;font-weight:700;font-size:.82rem;text-transform:uppercase;letter-spacing:1.5px;cursor:pointer;font-family:inherit;position:relative;overflow:hidden"><span style="position:relative;z-index:1">Sign In</span><span class="shimmer-fx"></span></button>
</div></div>

<div class="sec-sub"><i class="fas fa-sun"></i> Light</div>
<div class="demo" style="background:linear-gradient(135deg,#f3f5f9,#e8ecf4);padding:40px;border-radius:20px">
<div style="max-width:380px;margin:0 auto;background:#fff;border-radius:24px;padding:36px;box-shadow:0 20px 60px rgba(0,0,0,.08)">
<div style="text-align:center;margin-bottom:28px"><div style="width:52px;height:52px;background:linear-gradient(135deg,#f97316,#ea580c);border-radius:16px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:14px"><i class="fas fa-cube" style="color:#fff;font-size:1.3rem"></i></div><h3 style="font-size:1.3rem;font-weight:800">Application Name</h3><p style="color:var(--text2);font-size:.82rem;margin-top:4px">Sign in to continue</p></div>
<div style="margin-bottom:12px"><div style="font-size:.75rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">Username</div><input class="input-demo" placeholder="Enter username" style="max-width:100%"></div>
<div style="margin-bottom:20px"><div style="font-size:.75rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">Password</div><input class="input-demo" type="password" placeholder="Enter password" style="max-width:100%"></div>
<button style="width:100%;padding:14px;background:linear-gradient(135deg,#f97316,#ea580c);border:none;border-radius:12px;color:#fff;font-weight:700;font-size:.9rem;cursor:pointer;font-family:inherit;box-shadow:0 4px 16px rgba(249,115,22,.25);position:relative;overflow:hidden"><span style="position:relative;z-index:1">Sign In</span><span class="shimmer-fx"></span></button>
<div style="text-align:center;margin-top:24px;font-size:.7rem;color:var(--muted)">v1.0.0</div>
</div></div>

<div class="sec-sub"><i class="fas fa-lightbulb"></i> Key Patterns</div>
<div class="demo"><ul style="list-style:none;display:flex;flex-direction:column;gap:8px;font-size:.88rem">
<li><span class="badge-d badge-purple" style="margin-right:8px">Dark BG</span> Nebula orbs with blur(120px) at 35% opacity</li>
<li><span class="badge-d badge-blue" style="margin-right:8px">Dark Card</span> rgba(15,23,42,.75) + backdrop-filter: blur(40px)</li>
<li><span class="badge-d badge-green" style="margin-right:8px">Light Card</span> White #fff with shadow 0 20px 60px rgba(0,0,0,.08)</li>
<li><span class="badge-d" style="background:rgba(244,63,122,.1);color:var(--pink);margin-right:8px">Button</span> Shimmer animation (dark) or solid gradient (light)</li>
</ul></div></div>`;

renders.sidebar=()=>`<div class="sec">
<h1 class="sec-title">Sidebar Navigation</h1>
<p class="sec-desc">Two variants: dark and light. Both support collapsible submenus and user footer.</p>
<div class="demo"><div style="display:flex;gap:24px;flex-wrap:wrap">
<div>
<div class="demo-label">Dark</div>
<div class="sidebar-demo" style="background:#000;color:#888">
<div style="font-weight:800;color:#fff;margin-bottom:16px;display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;background:#f97316;border-radius:10px;display:flex;align-items:center;justify-content:center"><i class="fas fa-cube" style="color:#fff;font-size:.85rem"></i></div> AppName</div>
<div class="sd-item active" style="color:#fff"><i class="fas fa-home"></i> Home</div>
<div class="sd-item"><i class="fas fa-search"></i> Explore</div>
<div class="sd-item"><i class="fas fa-clipboard-check"></i> Records</div>
<div class="sd-item"><i class="fas fa-gear"></i> Settings</div>
<div style="border-top:1px solid rgba(255,255,255,.08);margin-top:12px;padding-top:12px;display:flex;align-items:center;gap:8px;font-size:.82rem;color:rgba(255,255,255,.5)"><i class="fas fa-user-circle" style="font-size:1.2rem"></i> john.doe</div>
</div></div>
<div>
<div class="demo-label">Light</div>
<div style="background:#fff;border:1px solid var(--border);border-radius:16px;padding:20px;width:240px;color:var(--text)">
<div style="font-weight:800;margin-bottom:16px;display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;background:#6366f1;border-radius:10px;display:flex;align-items:center;justify-content:center"><i class="fas fa-cube" style="color:#fff;font-size:.85rem"></i></div> AppName</div>
<div style="padding:9px 14px;border-radius:10px;font-size:.85rem;font-weight:600;margin-bottom:2px;background:rgba(99,102,241,.08);color:#6366f1;display:flex;align-items:center;gap:10px"><i class="fas fa-home" style="width:18px;text-align:center"></i> Home</div>
<div style="padding:9px 14px;border-radius:10px;font-size:.85rem;font-weight:500;margin-bottom:2px;color:var(--text2);display:flex;align-items:center;gap:10px"><i class="fas fa-search" style="width:18px;text-align:center"></i> Explore</div>
<div style="padding:9px 14px;border-radius:10px;font-size:.85rem;font-weight:500;margin-bottom:2px;color:var(--text2);display:flex;align-items:center;gap:10px"><i class="fas fa-clipboard-check" style="width:18px;text-align:center"></i> Records</div>
<div style="padding:9px 14px;border-radius:10px;font-size:.85rem;font-weight:500;color:var(--text2);display:flex;align-items:center;gap:10px"><i class="fas fa-gear" style="width:18px;text-align:center"></i> Settings</div>
<div style="border-top:1px solid var(--border);margin-top:12px;padding-top:12px;display:flex;align-items:center;gap:8px;font-size:.82rem;color:var(--text2)"><i class="fas fa-user-circle" style="font-size:1.2rem"></i> john.doe</div>
</div></div>
<div style="flex:1;min-width:200px"><div class="demo-label">Features</div><ul style="font-size:.88rem;line-height:2;color:var(--text2)">
<li>Dark: black bg (#000), white active text</li>
<li>Light: white bg, accent-tinted active state</li>
<li>Collapsible submenus with chevron rotation</li>
<li>Footer: user icon + name + gear/logout</li>
<li>Hidden scrollbar, still scrollable</li>
<li>Rounded main content area (30px)</li>
</ul></div></div></div></div>`;

renders.stats=()=>`<div class="sec">
<h1 class="sec-title">Stat Cards</h1>
<p class="sec-desc">Cards with gradient top border strip and transparent background icon. Hover lift effect.</p>
<div class="demo"><div class="demo-grid">
<div class="stat-demo s-pink"><i class="fas fa-file-lines" style="position:absolute;right:16px;top:50%;transform:translateY(-50%);font-size:2.5rem;opacity:.15;color:#f43f7a"></i><div class="s-val">1,247</div><div class="s-label">Total Records</div></div>
<div class="stat-demo s-green"><i class="fas fa-chart-pie" style="position:absolute;right:16px;top:50%;transform:translateY(-50%);font-size:2.5rem;opacity:.15;color:#10b981"></i><div class="s-val">89%</div><div class="s-label">Completion Rate</div></div>
<div class="stat-demo s-blue"><i class="fas fa-users" style="position:absolute;right:16px;top:50%;transform:translateY(-50%);font-size:2.5rem;opacity:.15;color:#3b82f6"></i><div class="s-val">342</div><div class="s-label">Active Users</div></div>
<div class="stat-demo s-purple"><i class="fas fa-clock" style="position:absolute;right:16px;top:50%;transform:translateY(-50%);font-size:2.5rem;opacity:.15;color:#8b5cf6"></i><div class="s-val">56</div><div class="s-label">Pending Items</div></div>
</div></div>
<div class="sec-sub"><i class="fas fa-code"></i> Pattern</div>
<div class="code"><span class="cm">/* Gradient top strip */</span>
.<span class="fn">stat-card</span>::<span class="kw">before</span> {
  <span class="attr">content</span>: <span class="str">''</span>;
  <span class="attr">position</span>: absolute; <span class="attr">top</span>: <span class="num">0</span>; <span class="attr">left</span>: <span class="num">0</span>; <span class="attr">right</span>: <span class="num">0</span>;
  <span class="attr">height</span>: <span class="num">3px</span>;
  <span class="attr">background</span>: <span class="fn">linear-gradient</span>(<span class="num">90deg</span>, <span class="str">#f43f7a</span>, <span class="str">#ff6b9d</span>);
}</div></div>`;

renders.toasts=()=>`<div class="sec">
<h1 class="sec-title">Toast Notifications</h1>
<p class="sec-desc">Floating toast that slides down from top center. Auto-dismisses after 2.5 seconds.</p>
<div class="demo"><div style="display:flex;flex-direction:column;gap:16px">
<div class="toast-demo"><div class="toast-icon-d" style="background:rgba(16,185,129,.12);color:var(--green)"><i class="fas fa-check-circle"></i></div> Record saved successfully</div>
<div class="toast-demo"><div class="toast-icon-d" style="background:rgba(239,68,68,.12);color:var(--red)"><i class="fas fa-exclamation-circle"></i></div> Operation failed</div>
<div class="toast-demo"><div class="toast-icon-d" style="background:rgba(249,115,22,.12);color:#f97316"><i class="fas fa-info-circle"></i></div> Changes auto-saved</div>
</div></div>
<div class="sec-sub"><i class="fas fa-code"></i> Animation</div>
<div class="code"><span class="cm">/* Slide in from top */</span>
.<span class="fn">toast</span> {
  <span class="attr">transform</span>: <span class="fn">translateX</span>(<span class="num">-50%</span>) <span class="fn">translateY</span>(<span class="num">-20px</span>);
  <span class="attr">opacity</span>: <span class="num">0</span>;
  <span class="attr">transition</span>: <span class="str">all .3s cubic-bezier(.4,0,.2,1)</span>;
}
.<span class="fn">toast</span>.<span class="kw">show</span> {
  <span class="attr">opacity</span>: <span class="num">1</span>;
  <span class="attr">transform</span>: <span class="fn">translateX</span>(<span class="num">-50%</span>) <span class="fn">translateY</span>(<span class="num">0</span>);
}</div></div>`;

renders.modals=()=>`<div class="sec">
<h1 class="sec-title">Modals & Popups</h1>
<p class="sec-desc">Centered modals with backdrop blur and scale-in animation. Two types: form and confirmation.</p>
<div class="demo"><div style="display:flex;gap:24px;flex-wrap:wrap">
<div class="popup-demo">
<h3><i class="fas fa-plus" style="color:#f97316;margin-right:8px"></i>Create Item</h3>
<input class="input-demo" placeholder="Title" style="margin-bottom:10px;max-width:100%">
<input class="input-demo" placeholder="Description" style="margin-bottom:16px;max-width:100%">
<div style="display:flex;gap:8px;justify-content:flex-end">
<button class="btn-demo btn-danger-d btn-sm-d">Cancel</button>
<button class="btn-demo btn-success-d btn-sm-d">Save</button>
</div></div>
<div class="popup-demo" style="text-align:center">
<i class="fas fa-sign-out-alt" style="font-size:2rem;color:#f97316;margin-bottom:12px"></i>
<h3>Confirm Action?</h3>
<p style="color:var(--text2);font-size:.85rem;margin-bottom:20px">This action cannot be undone.</p>
<div style="display:flex;gap:8px;justify-content:center">
<button class="btn-demo btn-outline-d btn-sm-d">Cancel</button>
<button class="btn-demo btn-danger-d btn-sm-d">Confirm</button>
</div></div>
</div></div></div>`;

renders.picker=()=>`<div class="sec">
<h1 class="sec-title">Scroll Picker</h1>
<p class="sec-desc">Casino-style scroll wheel for mobile-friendly selection. Centered modal with snap-to-item.</p>
<div class="demo"><div style="display:flex;gap:24px;flex-wrap:wrap">
<div class="picker-demo">
<div class="picker-demo-header"><span>Cancel</span><span style="color:var(--text);font-weight:800">Select Item</span><span>Done</span></div>
<div class="picker-demo-body">
<div class="picker-demo-hl"></div>
<div style="padding-top:26px">
<div class="picker-demo-item">Alpha</div>
<div class="picker-demo-item">Bravo</div>
<div class="picker-demo-item sel">Charlie</div>
<div class="picker-demo-item">Delta</div>
<div class="picker-demo-item">Echo</div>
</div></div></div>
<div style="flex:1"><div class="demo-label">Features</div><ul style="font-size:.88rem;line-height:2;color:var(--text2)">
<li>scroll-snap-type: y mandatory</li>
<li>Top/bottom fade gradients</li>
<li>Center highlight bar</li>
<li>40px item height for snapping</li>
<li>"Others" option with manual text input</li>
</ul></div></div></div></div>`;

renders.timeline=()=>`<div class="sec">
<h1 class="sec-title">Timeline</h1>
<p class="sec-desc">Vertical timeline for chronological data. Color-coded dots indicate status type.</p>
<div class="demo">
<div class="tl-demo">
<div class="tl-demo-item"><div class="tl-demo-dot" style="background:var(--green);box-shadow:0 0 0 3px rgba(16,185,129,.2)"></div><div style="min-width:44px;font-size:.75rem;font-weight:700;color:var(--text2);padding-top:6px">10:30</div><div class="tl-demo-card"><strong>Record Created</strong> <span class="badge-d badge-green" style="margin-left:6px">new</span><div style="font-size:.78rem;color:var(--text2);margin-top:2px">Item Alpha added to workspace</div></div></div>
<div class="tl-demo-item"><div class="tl-demo-dot" style="background:var(--blue);box-shadow:0 0 0 3px rgba(59,130,246,.2)"></div><div style="min-width:44px;font-size:.75rem;font-weight:700;color:var(--text2);padding-top:6px">11:15</div><div class="tl-demo-card"><strong>Job Started</strong> <span class="badge-d badge-blue" style="margin-left:6px">running</span><div style="font-size:.78rem;color:var(--text2);margin-top:2px">Scanning 3 targets in region</div></div></div>
<div class="tl-demo-item"><div class="tl-demo-dot" style="background:var(--amber);box-shadow:0 0 0 3px rgba(245,158,11,.2)"></div><div style="min-width:44px;font-size:.75rem;font-weight:700;color:var(--text2);padding-top:6px">14:00</div><div class="tl-demo-card"><strong>Status Changed</strong> <span class="badge-d badge-amber" style="margin-left:6px">updated</span> <i class="fas fa-paperclip" style="color:#f97316;font-size:.75rem;margin-left:4px"></i><div style="font-size:.78rem;color:var(--text2);margin-top:2px">Item Bravo moved to approved</div></div></div>
</div></div></div>`;

renders.icons=()=>`<div class="sec">
<h1 class="sec-title">Icons</h1>
<p class="sec-desc">Font Awesome 6 (Free Solid). Icons are functional, not decorative.</p>
<div class="demo"><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:12px">
${['fa-house,Home','fa-plus,Create','fa-pen,Edit','fa-trash-alt,Delete','fa-check,Confirm','fa-times,Close','fa-save,Save','fa-sign-out-alt,Logout','fa-gear,Settings','fa-search,Search','fa-paperclip,Attach','fa-file-pdf,PDF','fa-file-word,Word','fa-download,Export','fa-upload,Import','fa-chart-line,Chart','fa-users,Users','fa-clipboard-check,Register','fa-rocket,Launch','fa-map,Blueprint','fa-lock,Auth','fa-user-circle,Profile','fa-chevron-down,Expand','fa-arrow-right,Navigate','fa-spinner fa-spin,Loading','fa-satellite,Scan','fa-terminal,Console','fa-bell,Notify','fa-eye,View','fa-copy,Copy'].map(s=>{const[i,l]=s.split(',');return`<div style="text-align:center;padding:12px"><i class="fas ${i}" style="font-size:1.3rem;color:#f97316;margin-bottom:6px;display:block"></i><div style="font-size:.72rem;font-weight:600;color:var(--text2)">${l}</div></div>`}).join('')}
</div></div></div>`;

renders.animations=()=>`<div class="sec">
<h1 class="sec-title">Animations</h1>
<p class="sec-desc">Subtle, purposeful animations. All transitions use cubic-bezier(.4,0,.2,1).</p>
<div class="demo"><table class="tbl-demo"><thead><tr><th>Pattern</th><th>Property</th><th>Duration</th><th>Usage</th></tr></thead><tbody>
<tr><td><strong>Hover Lift</strong></td><td>translateY(-2px) + shadow</td><td>0.2s</td><td>Cards, buttons</td></tr>
<tr><td><strong>Active Scale</strong></td><td>scale(.97)</td><td>instant</td><td>All clickables</td></tr>
<tr><td><strong>Focus Ring</strong></td><td>box-shadow 4px accent-soft</td><td>0.2s</td><td>Inputs</td></tr>
<tr><td><strong>Slide Down</strong></td><td>translateY(-20px) to 0</td><td>0.3s</td><td>Toasts</td></tr>
<tr><td><strong>Pop In</strong></td><td>scale(.9) to 1 + opacity</td><td>0.25s</td><td>Modals</td></tr>
<tr><td><strong>Shimmer</strong></td><td>translateX gradient sweep</td><td>5s loop</td><td>Login button</td></tr>
<tr><td><strong>Chart Rise</strong></td><td>values * easeOutCubic</td><td>0.5s</td><td>Data charts</td></tr>
<tr><td><strong>Fade In</strong></td><td>opacity 0 to 1</td><td>0.2s</td><td>Overlays</td></tr>
</tbody></table></div>
<div class="sec-sub"><i class="fas fa-code"></i> Easing</div>
<div class="code"><span class="cm">/* Standard easing */</span>
<span class="attr">transition</span>: <span class="str">all .2s cubic-bezier(.4, 0, .2, 1)</span>;

<span class="cm">/* Spring for layout shifts */</span>
<span class="attr">transition</span>: <span class="str">width .3s cubic-bezier(.4, 0, .2, 1)</span>;

<span class="cm">/* Chart easeOutCubic */</span>
<span class="kw">const</span> <span class="fn">ease</span> = <span class="num">1</span> - Math.<span class="fn">pow</span>(<span class="num">1</span> - t, <span class="num">3</span>);</div></div>`;

function toggleSidebar(){
  const sb=document.getElementById('sidebar');
  const ov=document.getElementById('sbOverlay');
  if(window.innerWidth<=768){sb.classList.toggle('open');ov.classList.toggle('open')}
  else{sb.classList.toggle('closed')}
}

buildNav();
go('overview');
