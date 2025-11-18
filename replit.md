# Farmforce Agricultural Management Platform

## Overview

Farmforce is a comprehensive agricultural management system designed for tracking and managing agricultural operations at scale. The platform serves as a central hub for farmer data collection, field mapping, planting campaigns, harvest management, input distribution, training coordination, and compliance monitoring. Built for enterprise agricultural operations, it emphasizes data quality, traceability, and certification compliance (RSPO, EUDR, ISPO, Organic).

The system supports multiple stakeholders including farm administrators, field officers, farmers, and certification auditors, providing tools for end-to-end farm management from planting through harvest and delivery.

## User Preferences

Preferred communication style: Simple, everyday language.

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