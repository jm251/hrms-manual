# HRMS First-Visitor Manual (UI-Visible)

Generated from live UI capture on **February 23, 2026** at **https://hrms.srj.group**.

## Scope
- Frontend-visible walkthrough only.
- Content is based on currently visible UI pages and controls.
- No backend-driven manual content is used.

## First-Time Steps
1. Open the login page and sign in.
2. Start from Dashboard and use the left sidebar for module navigation.
3. Use page-level filters/search before taking row actions.
4. Use export and action buttons where available.

## Screen Index
1. **Login** - `/login`
2. **Dashboard (Main)** - `/dashboard`
3. **Dashboard (Self)** - `/dashboard/self`
4. **User Management** - `/user-management`
5. **Role Management** - `/role-management`
6. **Attendance Management (Default)** - `/attendance-management`
7. **Attendance Details** - `/attendance-management/details`
8. **Attendance List** - `/attendance-management/list`
9. **Attendance Summary** - `/attendance-management/summary`
10. **Leave Management (Default)** - `/leave-management`
11. **Leaves** - `/leave-management/leaves`
12. **Unpaid Leaves** - `/leave-management/unpaid-leaves`
13. **Leave Types** - `/leave-management/leave_types`
14. **Remaining Leaves** - `/leave-management/remaining-leaves`
15. **Employee Profile** - `/profile`
16. **Holidays** - `/holidays`
17. **Company Policies** - `/company-policies`
18. **Expenses (Default)** - `/expenses`
19. **Expense Categories** - `/expenses/categories`
20. **Expense Claims** - `/expenses/claims`
21. **Expense Reimbursements** - `/expenses/reimbursements`
22. **Asset Management (Default)** - `/asset-management`
23. **Asset Types** - `/asset-management/asset-types`
24. **My Assets** - `/asset-management/self/assets`
25. **Assets** - `/asset-management/assets`
26. **Shifts (Legacy Route)** - `/shifts`
27. **Human Resources (Default)** - `/human-resources`
28. **HR Shifts** - `/human-resources/shifts`
29. **Designations** - `/human-resources/designations`
30. **Departments** - `/human-resources/departments`
31. **Staff** - `/human-resources/staffs`
32. **Salary Component Templates** - `/human-resources/salary-templates`
33. **Salary Groups** - `/human-resources/salary-groups`
34. **Agreements** - `/human-resources/agreements`
35. **Locations** - `/locations`
36. **Customer Payment** - `/customer_payment`
37. **Travel Ticket Management (Default)** - `/travel_ticket_management`
38. **Travel Request Details** - `/travel_ticket_management/travel_request_details`
39. **Approval Request Details** - `/travel_ticket_management/approvals_request_details`
40. **Notifications** - `/notifications`
41. **Organizations** - `/organizations`

---

## 1. Login
**Route:** `/login`

![Login](screenshots/01-login.png)

**Page Overview**
- Use this screen to authenticate and enter the HRMS workspace.

**What You Can Do Here**
- Enter email/username and password to sign in.
- Verify credential errors before retrying login.
- Access the system landing dashboard after successful authentication.

**Quick Tips**
- Use a valid org account with the right role assignment.
- If sign-in fails repeatedly, confirm password case sensitivity.
- Refresh once if the session state looks stale after logout/login.

---

## 2. Dashboard (Main)
**Route:** `/dashboard`

![Dashboard (Main)](screenshots/03-dashboard.png)

**Page Overview**
- This is the organization-level dashboard with top metrics and quick status widgets.

**What You Can Do Here**
- Review total/active/inactive employee cards.
- Track attendance summary and clock-in/out panels.
- Open linked modules from sidebar for deeper actions.

**Quick Tips**
- Start here if you need a quick daily health check.
- Use the header employee search for quick navigation.
- Revisit after data updates to confirm counts changed.

---

## 3. Dashboard (Self)
**Route:** `/dashboard/self`

![Dashboard (Self)](screenshots/04-dashboard-self.png)

**Page Overview**
- Personal dashboard focused on your own profile, leave, and attendance summary.

**What You Can Do Here**
- Check your attendance and leave counters.
- Review personal profile/contact cards.
- Start personal actions like applying leave.

**Quick Tips**
- Use this page as your daily personal snapshot.
- Location permission prompts affect attendance widgets.
- If values look stale, refresh once and re-check cards.

---

## 4. User Management
**Route:** `/user-management`

![User Management](screenshots/05-user-management.png)

**Page Overview**
- Manage system users, account status, and access-related actions.

**What You Can Do Here**
- Create new users from the top-right action.
- Edit, assign permissions, or delete existing users.
- Filter and search users by role, status, and org.

**Quick Tips**
- Use search and filters before editing large user lists.
- Check status badges before making account changes.
- Avoid deleting protected/admin-critical accounts.

---

## 5. Role Management
**Route:** `/role-management`

![Role Management](screenshots/06-role-management.png)

**Page Overview**
- Configure role definitions and review which users are mapped to each role.

**What You Can Do Here**
- Create new custom roles.
- Review system vs custom role types.
- Inspect per-role user counts before access updates.

**Quick Tips**
- Use role search when role count grows.
- Keep naming conventions consistent for custom roles.
- Review user impact before editing production roles.

---

## 6. Attendance Management (Default)
**Route:** `/attendance-management`

![Attendance Management (Default)](screenshots/07-attendance-management.png)

**Page Overview**
- Default attendance landing page (opens the list view in current UI).

**What You Can Do Here**
- Create or upload attendance records.
- Filter records by status, user, and date range.
- Review daily clock-in/out details in tabular view.

**Quick Tips**
- Upload in batch for backfilled attendance data.
- Set date range first to reduce table noise.
- Use row actions for quick corrections.

---

## 7. Attendance Details
**Route:** `/attendance-management/details`

![Attendance Details](screenshots/08-attendance-management-details.png)

**Page Overview**
- Detailed attendance analytics page with totals, lateness, and timeline actions.

**What You Can Do Here**
- Monitor present/absent/late counters.
- Inspect per-user clock-in/out and day status.
- Open location timeline for attendance events.

**Quick Tips**
- Use month/year filters for focused review.
- Export results when sharing with HR/payroll teams.
- Cross-check late/half-day rows before approvals.

---

## 8. Attendance List
**Route:** `/attendance-management/list`

![Attendance List](screenshots/09-attendance-management-list.png)

**Page Overview**
- Primary attendance table for operational day-to-day corrections and tracking.

**What You Can Do Here**
- Browse all attendance entries with status columns.
- Filter by date range and attendance type.
- Edit or delete incorrect rows from action controls.

**Quick Tips**
- Use the status chips and date filters together.
- Scan late entries before end-of-day lock.
- Review IP columns for clock-in anomalies.

---

## 9. Attendance Summary
**Route:** `/attendance-management/summary`

![Attendance Summary](screenshots/10-attendance-management-summary.png)

**Page Overview**
- Calendar-style summary grid of attendance markers by employee and date.

**What You Can Do Here**
- Review attendance pattern across a month.
- Track present/absent/leave/holiday distributions.
- Export summary for management reporting.

**Quick Tips**
- Set year and month before analysis.
- Use this for trend review, not row-level edits.
- Compare totals column to catch outliers quickly.

---

## 10. Leave Management (Default)
**Route:** `/leave-management`

![Leave Management (Default)](screenshots/11-leave-management.png)

**Page Overview**
- Default leave module entry (opens leave list in current UI).

**What You Can Do Here**
- Create new leave requests.
- Review leave requests by status tabs.
- Filter by leave type and employee.

**Quick Tips**
- Use Pending tab for approval workload first.
- Validate leave type before approval/rejection.
- Keep user filter scoped for faster review.

---

## 11. Leaves
**Route:** `/leave-management/leaves`

![Leaves](screenshots/12-leave-management-leaves.png)

**Page Overview**
- Detailed leave request table including status and action controls.

**What You Can Do Here**
- Approve or reject pending leave requests.
- Inspect leave duration and half-day flags.
- Track user-wise leave history.

**Quick Tips**
- Sort by start/end date during monthly closing.
- Use leave-type filter to audit policy compliance.
- Confirm manager/admin actions before finalizing status.

---

## 12. Unpaid Leaves
**Route:** `/leave-management/unpaid-leaves`

![Unpaid Leaves](screenshots/13-leave-management-unpaid-leaves.png)

**Page Overview**
- Monthly unpaid leave ledger grouped by user and month.

**What You Can Do Here**
- Track unpaid leave month-by-month.
- Check details for loss-of-pay impact.
- Validate unpaid leave count before payroll sync.

**Quick Tips**
- Use year and user selectors to narrow data.
- Review zero-value months for consistency.
- Coordinate with payroll when unpaid leave changes.

---

## 13. Leave Types
**Route:** `/leave-management/leave_types`

![Leave Types](screenshots/14-leave-management-leave-types.png)

**Page Overview**
- Master configuration for leave policies, limits, and paid/unpaid flags.

**What You Can Do Here**
- Create and edit leave type definitions.
- Set monthly caps and attendance conditions.
- Control paid vs unpaid behavior per leave type.

**Quick Tips**
- Update policy values before leave cycle starts.
- Avoid frequent renaming to prevent confusion.
- Validate paid flag with HR policy docs.

---

## 14. Remaining Leaves
**Route:** `/leave-management/remaining-leaves`

![Remaining Leaves](screenshots/15-leave-management-remaining-leaves.png)

**Page Overview**
- Balance view showing allocated, used, pending, and available leaves.

**What You Can Do Here**
- Check employee leave balances quickly.
- Audit leave allocation against usage.
- Identify low-balance employees for planning.

**Quick Tips**
- Use year filter for annual reconciliation.
- Review pending column before final balance reporting.
- Cross-check with approved leaves during payroll cutoffs.

---

## 15. Employee Profile
**Route:** `/profile`

![Employee Profile](screenshots/16-profile.png)

**Page Overview**
- Personal profile page with employee identity and org details.

**What You Can Do Here**
- Review employee ID, department, and reporting structure.
- Check joining date, work email, and location fields.
- Access profile-level actions such as password change.

**Quick Tips**
- Keep profile data updated for HR accuracy.
- Use this page to verify onboarding information.
- Report missing department/reporting info to admin.

---

## 16. Holidays
**Route:** `/holidays`

![Holidays](screenshots/17-holidays.png)

**Page Overview**
- Holiday calendar management for company-wide non-working dates.

**What You Can Do Here**
- Create and maintain holiday entries.
- Review dates by year and location.
- Export or share holiday schedule with teams.

**Quick Tips**
- Publish annual holidays before fiscal start.
- Avoid duplicate holiday records across locations.
- Verify timezone/location applicability when adding dates.

---

## 17. Company Policies
**Route:** `/company-policies`

![Company Policies](screenshots/18-company-policies.png)

**Page Overview**
- Policy registry where HR/admin teams manage policy documents and visibility.

**What You Can Do Here**
- Create and edit policy records.
- Filter policies by location or title.
- Track active policy status and rule metadata.

**Quick Tips**
- Use clear policy naming for easier search.
- Review state/country mapping for each policy.
- Keep only current policies in active status.

---

## 18. Expenses (Default)
**Route:** `/expenses`

![Expenses (Default)](screenshots/19-expenses.png)

**Page Overview**
- Default expense landing page (claims table in current UI).

**What You Can Do Here**
- Create new expense claims.
- Filter expense list by status/category/date.
- Review claim action icons per row.

**Quick Tips**
- Use date range filters during monthly close.
- Validate category before approving reimbursement path.
- Check status chips for pending follow-ups.

---

## 19. Expense Categories
**Route:** `/expenses/categories`

![Expense Categories](screenshots/20-expenses-categories.png)

**Page Overview**
- Configuration page for expense category rules and policy linkage.

**What You Can Do Here**
- Create/edit category definitions.
- Map categories to policy and GL code.
- Enable/disable categories by operational needs.

**Quick Tips**
- Keep GL codes validated with finance team.
- Use status filter to review inactive categories.
- Document category usage notes in descriptions.

---

## 20. Expense Claims
**Route:** `/expenses/claims`

![Expense Claims](screenshots/21-expenses-claims.png)

**Page Overview**
- Claims workflow page for submitted expense requests and their statuses.

**What You Can Do Here**
- Inspect claim details and attached actions.
- Track reimbursement status per employee.
- Filter claims for review and approval queues.

**Quick Tips**
- Prioritize unresolved claims first.
- Use user filter to validate repeated claims.
- Cross-check category vs claimed amount quickly.

---

## 21. Expense Reimbursements
**Route:** `/expenses/reimbursements`

![Expense Reimbursements](screenshots/22-expenses-reimbursements.png)

**Page Overview**
- Payment-side view for reimbursement processing and reference tracking.

**What You Can Do Here**
- Track reimbursement totals and monthly breakdown.
- Review payment method/date/reference for each payout.
- Search reimbursements by employee or expense ID.

**Quick Tips**
- Use payment reference for finance reconciliation.
- Filter by month when matching bank transfers.
- Verify approver and amount before marking complete.

---

## 22. Asset Management (Default)
**Route:** `/asset-management`

![Asset Management (Default)](screenshots/23-asset-management.png)

**Page Overview**
- Default asset module route (currently opens assets list view).

**What You Can Do Here**
- Browse active assets and assignment state.
- Filter by vendor location and assignee.
- Create new asset records from the top action.

**Quick Tips**
- Keep serial numbers unique and searchable.
- Use status tabs to separate working/non-working assets.
- Review assignment before issuing returns.

---

## 23. Asset Types
**Route:** `/asset-management/asset-types`

![Asset Types](screenshots/24-asset-management-asset-types.png)

**Page Overview**
- Master list for asset categories and type-level controls.

**What You Can Do Here**
- Create and maintain asset type records.
- Search types by name for quick edits.
- Use row actions to view/update/remove types.

**Quick Tips**
- Normalize naming (Laptop, Monitor, etc.) to avoid duplicates.
- Review type list before onboarding new hardware classes.
- Archive unused types carefully to preserve history.

---

## 24. My Assets
**Route:** `/asset-management/self/assets`

![My Assets](screenshots/25-asset-management-self-assets.png)

**Page Overview**
- Self-service asset portal showing available/requested assets.

**What You Can Do Here**
- Browse available assets to request.
- Review request status in “My Requests”.
- Filter catalog by asset type/availability.

**Quick Tips**
- Use search before raising duplicate requests.
- Track request status before contacting admin.
- Confirm location and serial details when requesting.

---

## 25. Assets
**Route:** `/asset-management/assets`

![Assets](screenshots/26-asset-management-assets.png)

**Page Overview**
- Operational asset inventory with assignment and lifecycle actions.

**What You Can Do Here**
- Manage asset records and ownership mapping.
- Reassign, update, or retire assets from row actions.
- Filter by working state and user assignment.

**Quick Tips**
- Audit assigned-to column regularly.
- Use search for serial-based troubleshooting.
- Retire non-working assets with clear status updates.

---

## 26. Shifts (Legacy Route)
**Route:** `/shifts`

![Shifts (Legacy Route)](screenshots/27-shifts.png)

**Page Overview**
- Shift master page for defining shift time rules and clock windows.

**What You Can Do Here**
- Create and edit shift templates.
- Configure late mark and early clock-in limits.
- Review employee count per shift.

**Quick Tips**
- Confirm timezone/location implications for each shift.
- Keep shift names unique and descriptive.
- Review self-clocking flag before publishing changes.

---

## 27. Human Resources (Default)
**Route:** `/human-resources`

![Human Resources (Default)](screenshots/28-human-resources.png)

**Page Overview**
- Default HR module landing (currently opens staff list).

**What You Can Do Here**
- Access staff records with department/designation filters.
- Use quick actions for view/edit/delete.
- Navigate to HR sub-modules from sidebar.

**Quick Tips**
- Start with org filter before deep HR operations.
- Use status tabs for active/inactive cleanup.
- Leverage top actions for adding new staff.

---

## 28. HR Shifts
**Route:** `/human-resources/shifts`

![HR Shifts](screenshots/29-human-resources-shifts.png)

**Page Overview**
- HR shift administration view tied to human-resources module.

**What You Can Do Here**
- Manage shift definitions in HR context.
- Search shift names and export lists.
- Control self-clocking options per shift.

**Quick Tips**
- Keep HR shifts aligned with attendance policy.
- Validate total employee count after shift edits.
- Export before major structure changes for backup.

---

## 29. Designations
**Route:** `/human-resources/designations`

![Designations](screenshots/30-human-resources-designations.png)

**Page Overview**
- Designation master table used across employee profiles and approvals.

**What You Can Do Here**
- Create and maintain designation entries.
- Track employee count mapped to each designation.
- Edit/remove outdated designations.

**Quick Tips**
- Avoid duplicate manager-level titles.
- Check employee count before deleting designations.
- Use designation naming standards organization-wide.

---

## 30. Departments
**Route:** `/human-resources/departments`

![Departments](screenshots/31-human-resources-departments.png)

**Page Overview**
- Department master setup for HR hierarchy and staff grouping.

**What You Can Do Here**
- Add or edit department records.
- Review total employees per department.
- Search and sort departments for governance.

**Quick Tips**
- Map each employee to a single owning department.
- Keep department names stable for reports.
- Run cleanup on unused departments periodically.

---

## 31. Staff
**Route:** `/human-resources/staffs`

![Staff](screenshots/32-human-resources-staffs.png)

**Page Overview**
- Detailed staff directory with org, designation, and status controls.

**What You Can Do Here**
- Filter staff by department/designation/location.
- Review status markers like active/terminated.
- Use row actions for detailed staff operations.

**Quick Tips**
- Use tabs (All/Active/Inactive) to segment reviews.
- Verify designation before changing staff status.
- Export when preparing HR monthly reports.

---

## 32. Salary Component Templates
**Route:** `/human-resources/salary-templates`

![Salary Component Templates](screenshots/33-human-resources-salary-templates.png)

**Page Overview**
- Template catalog for earnings/deductions and component calculations.

**What You Can Do Here**
- Create salary component templates.
- Define calculation method and default values.
- Track template usage before edits or removals.

**Quick Tips**
- Validate percentages against payroll policy.
- Separate earnings and deductions clearly.
- Review usage count before deleting a component.

---

## 33. Salary Groups
**Route:** `/human-resources/salary-groups`

![Salary Groups](screenshots/34-human-resources-salary-groups.png)

**Page Overview**
- Group-level compensation structures composed of salary templates.

**What You Can Do Here**
- Create salary groups for positions/levels.
- Attach component templates to each group.
- Filter groups by status for maintenance.

**Quick Tips**
- Use naming by level (Entry/Mid/Senior) for clarity.
- Activate only finalized salary structures.
- Audit template count before applying group to staff.

---

## 34. Agreements
**Route:** `/human-resources/agreements`

![Agreements](screenshots/35-human-resources-agreements.png)

**Page Overview**
- Agreement template hub for HR documents and employee agreement records.

**What You Can Do Here**
- Create and manage agreement templates.
- Switch between template and employee agreement tabs.
- Search existing templates before creating new ones.

**Quick Tips**
- Version agreement templates when policy changes.
- Use clear titles to avoid duplicate templates.
- Keep legal-approved templates marked and traceable.

---

## 35. Locations
**Route:** `/locations`

![Locations](screenshots/36-locations.png)

**Page Overview**
- Work location registry used across attendance, assets, and HR records.

**What You Can Do Here**
- Add and edit location records.
- Classify locations by type (office/vendor).
- Search locations for mapping and cleanup.

**Quick Tips**
- Use consistent location naming with city/site info.
- Validate address completeness for office locations.
- Retire obsolete sites to reduce operational noise.

---

## 36. Customer Payment
**Route:** `/customer_payment`

![Customer Payment](screenshots/37-customer-payment.png)

**Page Overview**
- Customer payment tracking page with payment status and receipt actions.

**What You Can Do Here**
- Record new customer payments.
- Filter by status, date, method, and recorder.
- Review receipts and sync state per transaction.

**Quick Tips**
- Use date filters during daily cash reconciliation.
- Check sync status before closing accounting cycle.
- Attach or verify receipt links for audit readiness.

---

## 37. Travel Ticket Management (Default)
**Route:** `/travel_ticket_management`

![Travel Ticket Management (Default)](screenshots/38-travel-ticket-management.png)

**Page Overview**
- Default travel module route; currently lands on personal travel request list.

**What You Can Do Here**
- Open travel request pipeline from module root.
- Create a new travel request quickly.
- Review current personal request status.

**Quick Tips**
- Use status filter before raising follow-up requests.
- Keep request purpose clear for faster approvals.
- Expect this route to open the request-details screen.

---

## 38. Travel Request Details
**Route:** `/travel_ticket_management/travel_request_details`

![Travel Request Details](screenshots/39-travel-ticket-management-travel-request-details.png)

**Page Overview**
- Detailed list of submitted personal travel requests and their statuses.

**What You Can Do Here**
- Create new travel requests.
- Track request history and current status.
- Use table actions to manage request lifecycle.

**Quick Tips**
- Set status filter to locate pending requests.
- Review requester/purpose columns before updates.
- Use this page as your primary travel self-service view.

---

## 39. Approval Request Details
**Route:** `/travel_ticket_management/approvals_request_details`

![Approval Request Details](screenshots/40-travel-ticket-management-approvals-request-details.png)

**Page Overview**
- Manager/admin approval console for team travel requests by decision state.

**What You Can Do Here**
- Review pending travel approvals.
- Track approved/rejected totals at the top cards.
- Filter and process requests by status.

**Quick Tips**
- Prioritize pending queue during daily review.
- Use status dropdown to focus on bottlenecks.
- Validate trip purpose and dates before approval.

---

## 40. Notifications
**Route:** `/notifications`

![Notifications](screenshots/41-notifications.png)

**Page Overview**
- Central notification inbox grouped by all/unread/read tabs.

**What You Can Do Here**
- View system and workflow alerts.
- Switch between unread and read message groups.
- Confirm no missed operational notifications.

**Quick Tips**
- Check unread tab first at day start.
- Use notifications after major approvals/actions.
- Clear old alerts regularly for signal quality.

---

## 41. Organizations
**Route:** `/organizations`

![Organizations](screenshots/42-organizations.png)

**Page Overview**
- Organization management console for multi-company setup and access scope.

**What You Can Do Here**
- Create new organizations.
- Review active/inactive org counts and cards.
- Manage org-level settings from card actions.

**Quick Tips**
- Use status filter to monitor inactive organizations.
- Verify timezone/currency when onboarding orgs.
- Use search for quick org lookups in large lists.

---
