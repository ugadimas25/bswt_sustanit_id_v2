# Farmforce Agricultural Management Platform

## Overview

Farmforce is a comprehensive agricultural management system designed for tracking and managing agricultural operations at scale. The platform serves as a central hub for farmer data collection, field mapping, planting campaigns, harvest management, input distribution, training coordination, and compliance monitoring. Built for enterprise agricultural operations, it emphasizes data quality, traceability, and certification compliance (RSPO, EUDR, ISPO, Organic).

The system supports multiple stakeholders including farm administrators, field officers, farmers, and certification auditors, providing tools for end-to-end farm management from planting through harvest and delivery.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### Table Enhancement Project (November 2024)

**Objective**: Systematically enhance tables across all operational categories with AI-powered insights, advanced search/filter/sort capabilities, and better data visualization.

**EnhancedDataTable Component** (`client/src/components/EnhancedDataTable.tsx`):
- Reusable table component with comprehensive features
- Advanced search with debouncing
- Multi-column filtering with type-aware comparisons
- Type-safe sorting (handles strings, numbers, dates, nulls)
- Bulk selection with stable row IDs (persists across pagination)
- CSV export for filtered/sorted datasets
- Statistics dashboard with trend indicators
- AI-powered insights panel (anomalies, predictions, recommendations, trends)
- Row actions and click navigation
- Pagination with page size controls
- Comprehensive data-testid attributes for testing

**Enhanced Pages (7 Operational Categories)**:

**Phase 1 - Core Operations:**

1. **Producers** (`client/src/pages/Producers.tsx`) - Farmer Management:
   - Certification status tracking
   - Farm size and crop diversity metrics
   - Engagement scores and activity status
   - GPS coverage indicators
   - AI insights for inactive farmers, certification renewals, land expansion

2. **Harvests** (`client/src/pages/Harvests.tsx`) - Harvest Operations:
   - Quality grade badges (Premium, Grade A, B, C)
   - Volume tracking with moisture content
   - Batch reference and status workflow
   - Payment status indicators
   - AI insights for quality trends, volume predictions, pricing optimization

3. **Loans** (`client/src/pages/Loans.tsx`) + **LoanDetail** - Financial Management:
   - Repayment progress bars with percentages
   - Risk level assessment (None, Low, Medium, High)
   - Payment status tracking (Active, Paid, Overdue, At Risk)
   - Interest rate and balance displays
   - Individual loan detail pages with payment history
   - AI insights for payment patterns, default risk, repayment predictions

4. **FarmingInputs** (`client/src/pages/FarmingInputs.tsx`) - Input Management:
   - Stock level indicators with visual progress bars
   - Stock status badges (Critical, Low Stock, Adequate)
   - Inventory value tracking
   - Supplier relationship management
   - AI insights for reorder alerts, bulk ordering, usage predictions
   - ✅ End-to-end tested and verified

**Phase 2 - Extended Operations:**

5. **PlantingCampaigns** (`client/src/pages/PlantingCampaigns.tsx`) - Crop Production:
   - Campaign tracking with field registration progress
   - Progress bars (100%=green, 80-99%=primary, 50-79%=amber, <50%=red)
   - Farmer and field participation metrics
   - Crop type categorization with region tracking
   - AI insights for campaigns behind schedule, expansion opportunities, completion predictions

6. **Traceability** (`client/src/pages/Traceability.tsx`) - Supply Chain & Compliance:
   - Production lot tracking from farm to mill
   - Chain of custody with container/mill tracking
   - Multi-certification badges (RSPO, EUDR, ISPO, Organic)
   - EUDR deforestation compliance scores
   - Total weight and farmer participation per lot
   - Status workflow (Processed, In Transit, Shipped)
   - AI insights for EUDR compliance gaps, processing trends, volume predictions

7. **Certifications** (`client/src/pages/Certifications.tsx`) - Compliance Management:
   - Certification scheme management (RSPO, EUDR, ISPO, Organic, Fair Trade, Rainforest Alliance)
   - Certified farmer and area tracking
   - Compliance rate monitoring (98-100%=green, 95-97%=amber, <95%=red)
   - Audit scheduling with next audit dates
   - GPS requirement indicators
   - AI insights for GPS mapping priorities, compliance gaps, program expansion

**AI-Powered Insights**:
- Anomaly detection (irregular patterns, critical alerts)
- Recommendations (optimizations, interventions, cost savings)
- Predictions (harvest volumes, repayments, stock depletion)
- Trend analysis (performance improvements, pattern recognition)

**Sorting Implementation** (Production-Ready):
- Numeric value parsing: Handles currency ($1,500), percentages (75%), comma-separated (2,500), negatives (-$4,500)
- Date parsing: Supports ISO (2024-11-15), dd/MM/YYYY (15/11/2024), mm/dd/YYYY (11/15/2024) with smart disambiguation
- Null handling: Consistently sinks to end regardless of sort direction
- Whitespace handling: Trims before parsing to handle padded values
- Type-safe comparisons with proper fallback chain

**Testing Status**:
- ✅ EnhancedDataTable sorting verified (architect approved)
- ✅ FarmingInputs page end-to-end tested (search, sort, filter, AI insights, pagination)
- ✅ All enhanced pages use consistent UX patterns
- ✅ Comprehensive data-testid attributes for future testing

**Branding Consistency**:
- All enhancements maintain Farmforce color scheme (golden yellow #F8BC28, deep blue #0B2534)
- Consistent badge variants and status indicators
- Professional data-dense interfaces optimized for agricultural operations

**Next Steps** (Future Enhancements):
- Apply EnhancedDataTable pattern to 100+ remaining pages across all 12 operational categories
- Create detail pages for entities (FarmingInputsDetail, ProducersDetail, etc.)
- Add automated regression tests for sorting comparators
- Consider locale-specific formatting extensions (e.g., parentheses for negatives)

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript
- **Routing**: Wouter for client-side navigation
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens aligned to Farmforce brand guidelines

**Design System**:
- Hybrid productivity-first approach combining Material Design principles with modern SaaS patterns
- Custom color palette featuring golden yellow (#F8BC28) as primary brand color, deep blue (#0B2534) for text, warm earth tones for backgrounds
- Typography: Inter font family for consistency
- Component architecture follows "New York" style from Shadcn/ui
- Responsive design with mobile breakpoint at 768px

**Key Architectural Decisions**:
- Component-based architecture with reusable UI primitives (buttons, cards, tables, dialogs)
- Progressive disclosure pattern to prevent overwhelming users with complex agricultural data
- Mock data throughout pages (marked with `//todo: remove mock functionality`) to enable development without backend
- Data-dense interfaces optimized for desktop workflows (tables, forms, dashboards)

### Backend Architecture

**Server Framework**: Express.js with TypeScript
- **Development Mode**: Vite middleware for hot module replacement
- **Production Build**: esbuild for server bundling, Vite for client bundling
- **Module System**: ES Modules throughout

**Storage Layer**:
- **Current**: In-memory storage implementation (`MemStorage` class)
- **Interface**: `IStorage` interface defines CRUD operations for extensibility
- **Planned**: PostgreSQL database using Drizzle ORM (configuration present but not yet implemented)

**API Architecture**:
- RESTful API design with `/api` prefix for all routes
- Session-based authentication foundation (user schema defined)
- Request/response logging middleware for debugging
- Raw body parsing for webhook support

**Key Architectural Decisions**:
- Storage abstraction layer allows swapping implementations without changing business logic
- Routes registered centrally in `server/routes.ts`
- Separation of concerns: routes, storage, and server setup in distinct modules

### Data Schema

**Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` for type sharing between client and server
- **Migration Strategy**: Drizzle Kit for schema management
- **Current Tables**: Users table with UUID primary keys, username/password authentication foundation

**Type Safety**:
- Zod schema validation integrated with Drizzle
- Shared TypeScript types between frontend and backend
- Insert schemas generated from database schema for form validation

### External Dependencies

**UI Component Libraries**:
- **Radix UI**: Headless UI primitives for accessibility (dialogs, dropdowns, tooltips, etc.)
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe component variants
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel component

**Database & ORM**:
- **Drizzle ORM**: Type-safe SQL query builder and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **connect-pg-simple**: PostgreSQL session store for Express (configured but not active)

**Development Tools**:
- **Vite**: Build tool and dev server
- **esbuild**: Production bundler for server code
- **TypeScript**: Type safety across full stack
- **tsx**: TypeScript execution for development server
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling

**Form Handling**:
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Validation resolver integration
- **Zod**: Schema validation for forms

**Date Management**:
- **date-fns**: Date utility library for formatting and manipulation

**Authentication & Sessions**:
- Foundation for session-based authentication with PostgreSQL session store
- User schema supports username/password authentication pattern
- Session middleware configuration present but not actively implemented

**Key Integration Decisions**:
- Shadcn/ui chosen for production-ready, accessible components without runtime overhead
- Drizzle ORM selected for type-safe database operations with minimal magic
- TanStack Query provides robust caching and synchronization for API data
- Wouter chosen as lightweight routing alternative to React Router
- PostgreSQL intended as production database (Neon serverless deployment model)