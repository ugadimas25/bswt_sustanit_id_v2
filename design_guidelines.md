# Bentang Sawit System Redesign - Design Guidelines

## Design Approach

**Hybrid Productivity-First Design System**

Combining Material Design principles for data-dense interfaces with modern SaaS patterns from Linear, Notion, and Airtable. This approach prioritizes:
- Clear information hierarchy for complex agricultural data
- Self-explanatory UI reducing training needs
- Progressive disclosure to prevent overwhelming users
- Guided workflows for common tasks

## Brand Identity

**Color Palette (Bentang Sawit Official):**
- Primary (Golden Yellow): #F8BC28 - Main brand color, CTAs, highlights
- Secondary (Soft Yellow): #E3DB57 - Accents, secondary actions
- Text (Deep Blue): #0B2534 - Primary text, headers
- Accent (Warm Tan): #F2E8DA - Backgrounds, subtle highlights
- Tan Light: #F8F3EC - Page backgrounds, cards
- Mint: #BFD5CC - Success states, positive indicators
- Tomato: #F06C4D - Destructive actions, errors, warnings

**Design Philosophy:**
The warm yellow and earth-tone palette reflects agricultural heritage while maintaining professional credibility for enterprise users.

## Core Design Elements

### Typography

**Font Families:**
- Primary: Inter (headings, UI elements, data tables)
- Secondary: System font stack for forms and dense text
- Consistent with Bentang Sawit brand guidelines

**Hierarchy:**
- Page Titles: text-3xl font-semibold
- Section Headers: text-xl font-medium
- Card Titles: text-lg font-medium
- Body Text: text-base
- Labels: text-sm font-medium
- Help Text: text-sm text-muted-foreground

### Layout System

**Spacing Primitives:**
Use Tailwind units: 2, 4, 6, 8, 12, 16, 24
- Component padding: p-6 to p-8
- Section spacing: gap-6, gap-8
- Card spacing: p-6
- Form field spacing: space-y-4

**Grid Structure:**
- Dashboard: 12-column grid with responsive breakpoints
- Sidebar: Fixed 64px collapsed, 240px expanded
- Content area: max-w-7xl with px-6 to px-8 padding

### Component Library

**Navigation:**
- Collapsible sidebar with icon-only collapsed state
- Grouped menu items by function (Farmers, Fields, Compliance, Admin)
- Breadcrumb navigation for deep pages
- Contextual action buttons in page headers

**Dashboard Cards:**
- Stat cards with large numbers, icons, and trend indicators
- Quick action cards for common tasks (Add Farmer, New Survey)
- Recently accessed items list
- Pending tasks/notifications panel

**Data Tables:**
- Sticky headers with sorting indicators
- Row hover states with subtle background
- Inline actions (edit, view, delete) on hover
- Bulk selection with checkboxes
- Advanced filtering panel (collapsible)
- Pagination with page size selector

**Forms:**
- Stepped progression for multi-part forms (farmer registration)
- Clear field labels with optional help icons
- Validation states (error, success) with inline messages
- Auto-save indicators for offline capability
- Required field markers (*)
- Grouped sections with clear visual separation

**Field Mapping Interface:**
- Split view: Map (60%) + Details panel (40%)
- Interactive map controls (zoom, layers, drawing tools)
- GPS polygon visualization with color-coded status (compliant/non-compliant)
- Field boundary editing with snap-to-point
- Deforestation alerts as map overlays with warning badges

**Survey Builder:**
- Drag-and-drop question ordering
- Question type selector with previews
- Logic/branching visual flowchart
- Preview mode toggle
- Save as template option

**Onboarding Elements:**
- First-time user welcome modal with quick tour option
- Contextual tooltips (subtle info icons)
- Empty states with clear next actions and illustrations
- Step-by-step wizards for complex workflows
- Progress indicators for multi-step processes

**Case Management:**
- Kanban board view for case statuses (Open, In Progress, Resolved)
- Priority badges (High, Medium, Low)
- Linked entity indicators (farmer, field, survey)
- Timeline view of case updates
- Quick assign dropdown

**Data Visualization:**
- Simple bar/line charts for trends
- Donut charts for category breakdowns
- Map heat maps for geographic data
- Minimal chart decoration, clear axis labels

**Mobile Patterns:**
- Bottom navigation bar (4-5 primary items)
- Swipeable cards for list items
- Floating action button for primary actions
- Pull-to-refresh for sync
- Offline indicator banner

### Interaction Patterns

**Navigation Flow:**
- Dashboard → Module list → Detail view → Action
- Back button always visible
- Recent items quick access
- Search-first for finding records

**Progressive Disclosure:**
- Show 3-5 most important fields initially
- "Show more" expansion for additional details
- Collapsible sections in long forms
- Tabs for organizing farmer profile sections

**Feedback & Validation:**
- Inline form validation (real-time for critical fields)
- Success toast notifications (bottom-right)
- Error alerts with clear resolution steps
- Loading skeletons for data fetching
- Sync status indicator (always visible in mobile)

### Images & Visual Content

**Dashboard:**
- No hero image needed
- Small illustrative icons for empty states
- User profile avatars (farmers, team members)

**Farmer Profiles:**
- Farmer photo (square, medium size) at top of profile
- Field satellite imagery in map views

**Onboarding/Help:**
- Illustrated empty states (simple line drawings)
- Tutorial screenshots where helpful
- Icon library: Heroicons

**Field Mapping:**
- Google Maps/Mapbox satellite imagery as base layer
- Field boundary overlays
- Pin markers for farmer locations

### Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation for all interactive elements
- Focus indicators (ring-2 ring-blue-500)
- Sufficient color contrast (4.5:1 minimum)
- Screen reader labels for icons
- Form labels properly associated

### Key Principles

1. **Clarity over cleverness** - Agricultural users need straightforward interfaces
2. **Context awareness** - Show relevant actions based on current task
3. **Forgiveness** - Easy undo, confirmation dialogs for destructive actions
4. **Offline-first thinking** - Clear sync states, queue indicators
5. **Data integrity** - Required fields, validation, duplicate detection
6. **Efficiency** - Bulk operations, keyboard shortcuts, quick filters

This system creates a professional, data-focused interface that reduces cognitive load while maintaining the comprehensive functionality needed for agricultural compliance and management.