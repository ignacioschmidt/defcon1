# PRD: Argentine Legal Claims WhatsApp AI System

## Introduction/Overview

This feature enables Argentine consumers to generate and send valid legal claims through WhatsApp using an AI-powered chatbot. The system provides end-to-end claim management from initial intake through document generation, delivery, and follow-up tracking. The solution uses n8n workflow automation to integrate AI APIs, WhatsApp communication, and operations management tools.

**Problem:** Argentine consumers face barriers when filing legal claims - complex forms, knowledge of legal procedures, and difficulty knowing where/how to send complaints effectively.

**Solution:** A conversational WhatsApp bot that gathers claim information naturally, and pass is it along to a human operations person that handles delivery.

## Goals

1. **Process Volume:** Handle 10+ consumer claims per month within 2-4 weeks of POC launch
2. **User Experience:** Reduce claim filing complexity from hours to 10-15 minutes via WhatsApp chat
3. **Success Rate:** Achieve 70%+ company response rate to submitted claims
4. **Automation:** Automate 80% of the intake-to-document generation process via n8n workflows
5. **Revenue Validation:** Establish success-based fee model (percentage of successful claim resolutions)

## User Stories

**As a consumer with a product/service complaint, I want to:**
- Chat with a bot on WhatsApp in natural Spanish to describe my problem
- Upload photos of receipts, screenshots, or evidence directly in the chat
- Receive a professionally formatted legal claim letter without understanding legal terminology
- Get updates on my claim status and next steps via WhatsApp
- Have someone else handle sending the claim to the right company/authority

**As an operations manager, I want to:**
- Review AI-generated context that can help me deal with the claim. 
- Track all claims in a centralized dashboard with status updates
- Follow up with users about claim progress and escalation options
- Identify patterns in complaint types to improve automation

## Functional Requirements

### 1. WhatsApp AI Intake Bot
1.1. The system must initiate conversation with greeting: "¡Hola! Te ayudo a hacer un reclamo legal. ¿Qué problema tuviste?"

1.2. The bot must collect user personal information:
- Full name and DNI
- Phone number (auto-captured from WhatsApp)
- Email address
- Home address

1.3. The bot must gather complaint details through conversational flow:
- Company/business name involved
- Description of the problem in user's own words
- Date/timeline of incident
- Requested resolution (refund, replacement, compensation, etc.)

1.4. The system must accept and process file attachments:
- Photos of receipts/invoices
- Screenshots of communications
- Product photos showing defects
- Any other supporting documents

1.5. The bot must validate required information and ask follow-up questions for incomplete data

1.6. The system must handle common conversation flows and redirect complex queries to human operators

### 2. n8n Workflow Automation
2.1. The system must trigger AI document generation workflow when intake is complete

2.2. Workflows must integrate with ChatGPT API using legal claim templates in Argentine Spanish

2.3. The system must route generated documents to operations queue for human review

2.4. Workflows must handle file storage and organization for each claim

2.5. The system must trigger status update messages to users at key workflow stages

### 3. AI Document Generation
3.1. The system must generate formal legal claim letters using ChatGPT API with Argentina-specific legal language

3.2. Generated documents must include:
- User's personal information
- Company contact details
- Chronological description of incident
- Legal basis for claim (referencing consumer protection laws)
- Specific resolution requested
- Deadline for company response (10 business days)
- Consequences of non-response

3.3. The system must attach user-provided evidence files to the claim

3.4. Documents must be generated in PDF format ready for sending

### 4. Operations Dashboard
4.1. The system must provide a web interface showing all claims with status tracking:
- Pending Review
- Ready to Send
- Sent - Awaiting Response
- Resolved
- Escalation Required

4.2. Operations staff must be able to edit generated documents before sending

4.3. The system must provide multiple sending options:
- Direct email to companies
- Web form submission (when applicable)
- Mark for postal mail (manual process)

4.4. The dashboard must track response deadlines and flag overdue claims

### 5. Communication & Follow-up
5.1. The system must send WhatsApp status updates:
- "Tu reclamo fue enviado el [date]. Esperamos respuesta en 10 días hábiles."
- Follow-up after deadline: "¿La empresa respondió? Si no, te ayudamos a escalarlo."

5.2. The system must handle user responses about claim outcomes

5.3. Operations staff must be able to manually send messages when needed

## Non-Goals (Out of Scope)

- **Legal Advice:** System will not provide legal consultation or advice beyond claim generation
- **Court Filing:** No integration with judicial system or small claims court filing
- **Payment Processing:** No payment collection or escrow services in POC
- **Multi-language Support:** Spanish only for POC
- **Mobile App:** WhatsApp-only interface, no standalone app
- **Advanced Analytics:** Basic tracking only, no complex reporting dashboard
- **API Integrations:** No direct integration with OMIC, COPREC, or other government systems in POC

## Design Considerations

- **Conversational UI:** WhatsApp chat interface should feel natural and friendly, avoiding legal jargon
- **Mobile-First:** All operations dashboard interfaces must work well on mobile devices
- **Simple Admin Panel:** Clean, minimal interface for operations staff using standard web UI components

## Technical Considerations

- **n8n Workflows:** Core automation platform connecting WhatsApp, AI APIs, and data storage
- **WhatsApp Integration:** Research WhatsApp Business API vs. unofficial solutions for POC
- **AI Integration:** ChatGPT API with custom system prompts for Argentine legal language
- **File Storage:** Cloud storage solution for handling document attachments
- **Database:** Simple database structure for user data, claims, and status tracking
- **Hosting:** Cloud hosting solution supporting n8n workflows and web dashboard

## Success Metrics

- **Primary:** Number of claims processed per week
- **Secondary:** 
  - Average time from intake to document generation (target: <24 hours)
  - Company response rate to submitted claims (target: 70%+)
  - User satisfaction with WhatsApp experience (target: 4.5/5)
  - Operations efficiency: claims reviewed per hour

## Open Questions

1. **WhatsApp Business API approval timeline** - may need alternative for rapid POC launch
2. **Legal template validation** - should initial templates be reviewed by legal professional?
3. **Data retention policy** - how long to store user personal information and claim data?
4. **Escalation partnerships** - identify law firms or legal aid organizations for complex cases
5. **Company contact database** - source for accurate business contact information
6. **Success fee calculation** - methodology for determining percentage-based compensation

## POC Implementation Priority

**Phase 1 (Week 1-2):**
- Basic WhatsApp integration with manual responses
- Simple n8n workflow for data collection
- Basic AI document generation

**Phase 2 (Week 3-4):**
- Automated WhatsApp bot responses
- Operations dashboard for claim review
- Email sending functionality

**Phase 3 (Post-POC):**
- Follow-up automation
- Success fee tracking
- Volume scaling improvements 