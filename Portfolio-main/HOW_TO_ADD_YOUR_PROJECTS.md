# How to Add Your 2 Projects

## Step 1: Prepare Your Files

### For Each Project:
1. **Project Image**: Add to `public/images/`
   - `project1.jpg` (your first project screenshot)
   - `project2.jpg` (your second project screenshot)

2. **Project Video** (optional): Add to `public/videos/`
   - `project1-demo.mp4` (your first project demo video)
   - `project2-demo.mp4` (your second project demo video)

## Step 2: Edit Your Project Details

Open `src/constants/constants.js` and update:

```javascript
export const projects = [
  {
    title: 'Your Project 1 Name',
    description: "Write about what your project does, features, challenges solved, etc.",
    image: '/images/project1.jpg',
    video: '/videos/project1-demo.mp4', // Remove this line if no video
    tags: ['React', 'CSS3', 'API'], // Your actual technologies
    source: 'https://github.com/joju29/your-actual-repo',
    visit: 'https://your-live-demo.com',
    id: 0,
  },
  {
    title: 'Your Project 2 Name', 
    description: "Describe your second project here...",
    image: '/images/project2.jpg',
    video: '/videos/project2-demo.mp4', // Remove this line if no video
    tags: ['Angular', 'TypeScript'], // Your actual technologies
    source: 'https://github.com/joju29/your-second-repo',
    visit: 'https://your-second-demo.com',
    id: 1,
  },
];
```

## Step 3: Video Features

✅ **With Video**: Visitors can click play button to watch your demo
✅ **Without Video**: Just shows project image
✅ **Mix**: Some projects with videos, some without

## That's It! 🎉

Your portfolio will automatically display your 2 projects with:
- Beautiful glassmorphism cards
- Video play functionality (if videos provided)
- Hover animations
- GitHub and live demo links
- Technology tags

**Pro Tip**: Keep video files under 20MB for faster loading!