# Vibe Coding – Timeline-Based Lesson Tracker

> A collaborative, timeline-based learning management interface built interactively through conversation.


## 🧵 Full Conversation Documentation

### 🎯 Objective

> I need to create the following using Next.js: Timeline-based lesson tracker with drag-to-reschedule UI.  
> Brainstorm ideas in an interactive manner.

We began by discussing the core ideas:
- Users can add lesson blocks
- The schedule is broken down into a visual hour-by-hour timeline
- Each block can be dragged to reschedule
- The interface should be age-accessible and minimal

---

### 🧠 UX Philosophy

> I am designing this web app for users aged 10 and above, prioritizing accessibility and ease of use across all age groups.

Principles:
- Minimalistic design
- Intuitive visual interactions
- Limited use of text
- Use of Framer Motion and micro animation libraries for feedback
- High-quality icons
- Use of ShadCN for UI components

---

### 🖊️ Wireframes

The wireframe included:
- A vertical timeline divided into 24 hourly slots
- A horizontal division for days of the week (7 columns)
- Blocks that represent lessons
- A floating or fixed-position “+ Add” button

This helped clarify the layout logic for subsequent coding.

---

### 🏗️ Step-by-Step Development

#### 1. Scaffold `/app/page.tsx`

- Used Tailwind CSS grid to display 7 columns (days) × 24 rows (hours).
- Each lesson was represented as a draggable block.
- Added placeholder for real lesson data.

#### 2. Hour Slot Rescheduling

- Implemented pointer event listeners:
  - `pointerDown` to start dragging
  - `pointerMove` to update drag offset
  - `pointerUp` to snap to new hour and update the state
- Used simple math with `rowHeight` to calculate final placement
- Block snaps to nearest hour

#### 3. Timeline Grid

- Grid initialized using:
  ```tsx
  grid grid-cols-7 grid-rows-24
  ```
- Each cell labeled by hour and day

#### 4. Add New Button

- Added a ShadCN button labeled “+ Add Lesson”
- Clicking it opens a modal
- Modal contains inputs for:
  - Title
  - Day
  - Hour
- On submit:
  - Data is sent to `/api/lessons`
  - MongoDB stores the lesson using Mongoose
  - UI updates immediately with the new lesson

---

### ✅ User Confirmations

> 1 → 2 → 3 → 4  
User approved step-by-step progress of scaffold, rescheduling, modal creation, and logic.

> Yes, Yes  
User confirmed implementation accuracy.

---

### ✍️ README Request

> Generate a README.md file documenting this conversation.  
> The file should provide context for the 'Vibe Coding' project, helping others understand how to approach and engage in vibe coding effectively.

Final version of the README was requested to:
- Log each interactive step
- Explain the “Vibe Coding” philosophy
- Serve as onboarding for collaborators

---

## 🧱 Stack

- **Frontend**: Next.js (App Router)
- **Database**: MongoDB with Mongoose
- **UI Library**: ShadCN
- **Animation**: Framer Motion
- **Icons**: Lucide/Heroicons
- **Drag Events**: Native pointer event handling

---

## 🧘 The Vibe Coding Approach

**Vibe Coding** is a mindful method of building software — not just fast or functional, but delightful:
- Minimal by default
- Feedback-rich interactions
- Empathetic for users of all ages
- Modular and readable code
- No overengineering

---

## 🚧 Next Steps

- [ ] Filter or categorize lessons with tags/colors
- [ ] Add week/day switching
- [ ] Improve mobile responsiveness
- [ ] Add animated celebrations for successful tasks

---

## 🧑‍💻 Getting Started

1. Clone the repo
2. Add a `.env`:
```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/lesson-tracker
```
3. Install and run:
```bash
npm install
npm run dev
```

---

## 🙌 Thanks for Collaborating

This project is a collaborative demonstration of **AI-assisted development**.  
Built entirely through interactive chat-based flow.

Generated on: 2025-05-19
