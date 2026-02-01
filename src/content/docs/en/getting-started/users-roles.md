---
title: Users & Roles
description: Learn how to invite users to your farm and assign appropriate roles and permissions for each team member.
---

Arlo allows you to invite multiple users to your farm, each with different access levels based on their role. Proper role configuration ensures each person has access to what they need without compromising sensitive data security.

---

## 1. Available Roles

Arlo defines five roles with different access levels:

### Owner
The role with full access to all features and settings.

- Full access to all modules
- Can invite and remove users
- Can modify farm settings
- Can permanently delete data
- Access to complete financial reports

**Ideal for:** Farm owners, general managers

### Admin
Full operational access without ability to delete critical data.

- Access to all operational modules
- Can create and edit records
- Can invite users (except Owners)
- Access to operational and financial reports
- Cannot delete farm or historical data

**Ideal for:** Operations managers, farm administrators

### Employee
Access for daily office work and data capture.

- Can create records in assigned modules
- Can view operational reports
- Cannot modify settings
- Cannot see detailed financial information

**Ideal for:** Administrative staff, assistants

### Monitor
Limited access for mobile field work.

- Only access to Sanitation route launcher
- Can complete assigned inspections
- No access to reports or settings
- Optimized for mobile device use

**Ideal for:** Field inspectors, sanitation monitors

### Sales Operator
Specific access for the Statements module.

- Full access to Statements module
- Can create and manage clients
- Can generate and send statements
- No access to other modules

**Ideal for:** Sales staff, dispatch

---

## 2. Permission Matrix by Module

| Module | Owner | Admin | Employee | Monitor | Sales |
|--------|:-----:|:-----:|:--------:|:-------:|:-----:|
| **Sanitation** | Full | Full | Read/Write | Routes only | - |
| **Field Tasks** | Full | Full | Read/Write | - | - |
| **Supplies** | Full | Full | Read/Write | - | - |
| **Harvest** | Full | Full | Read/Write | - | - |
| **Statements** | Full | Full | - | - | Full |
| **Settings** | Full | Partial | - | - | - |
| **Users** | Full | Partial | - | - | - |
| **Financial Reports** | Full | Full | - | - | - |

---

## 3. Invite Users

To add a new team member:

1. Go to **Farm → Users**
2. Click **Invite User**
3. Enter the user's email address
4. Select the appropriate role
5. Click **Send Invitation**

The system will automatically send an invitation email to the user.

### Acceptance Process

The acceptance flow varies depending on whether the user already has an Arlo account:

**Existing user (already has an Arlo account):**
1. Receives email with invitation link
2. Clicking the link shows a confirmation page with organization and role details
3. Accepts the invitation with one click
4. Is automatically signed in and redirected to the farm

**New user (doesn't have an account):**
1. Receives email with invitation link
2. Is redirected to set up their password
3. Sees a personalized message: "Create your account for [Organization Name]"
4. Upon setting their password, their account is automatically verified
5. Is signed in and redirected to the farm

:::note[Automatic sign-in]
In both cases, the user is automatically signed in after accepting the invitation. No manual credential entry is required.
:::

### Manage Pending Invitations

Pending invitations appear at the top of the Users page. From there you can:

- **View status:** Invitations show whether they are pending or expired
- **Resend:** Sends a new email with an updated link (the previous link stops working)
- **Cancel:** Permanently invalidates the invitation

:::tip[Expiration]
Invitations expire after 7 days. Expired invitations are shown with an "Expired" label and can be resent.
:::

---

## 4. Manage Existing Users

### Change Role
If a user's responsibilities change, you can update their role:

1. Go to **Farm → Users**
2. Find the user in the list
3. Click the actions menu (⋮)
4. Select **Change Role**
5. Choose the new role

### Remove Access
To remove a user from the farm:

1. Go to **Farm → Users**
2. Find the user
3. Click **Remove from Farm**

:::caution[Important]
Removing a user doesn't delete the records they created. All historical activity is maintained for auditing.
:::

---

## 5. Best Practices

### Principle of least privilege
Assign the role with minimum permissions needed for each task. It's easier to add permissions than to deal with errors from excessive access.

### Individual users
Each person should have their own account. Sharing credentials makes auditing difficult and compromises security.

### Periodic review
Review active users at least quarterly. Remove access for people who no longer work with the farm.

### Typical structure

| Role | Typical count |
|------|---------------|
| Owner | 1-2 (owners or general management) |
| Admin | 2-4 (area managers) |
| Employee | Variable (office staff) |
| Monitor | Variable (field inspectors) |
| Sales | 1-3 (dispatch staff) |

---

## 6. Frequently Asked Questions

**Can a user have access to multiple farms?**
Yes. A user can be invited to several farms with different roles in each.

**What if someone loses access to their email?**
An Owner can delete the user and create a new invitation with a different email.

**Can I create custom roles?**
Not currently. The five defined roles cover most needs. If you have a special case, contact support.

**What if the invitation expired?**
Invitations expire after 7 days. Go to **Farm → Users**, find the expired invitation in the pending invitations section, and click **Resend**. This generates a new link and sends an updated email.

**Can I cancel an invitation sent by mistake?**
Yes. From the pending invitations section in **Farm → Users**, click **Cancel** next to the invitation. The link will stop working immediately.

**What if the user is already a member of the organization?**
The system detects this automatically. If someone tries to accept an invitation to an organization they're already a member of, they'll see a message indicating they already have access.

---

## Next Steps

With your team configured, it's time to start using the platform:

**[Your First Week →](/en/getting-started/first-week/)**
